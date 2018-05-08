import React from "react"


const ProjectWeatherStation = () => {

  return (
    <div>
      <h1>Project: weather station</h1>

      <space/>

      <h3>How It Works</h3>

      <p>
        In general the project is about a device (the weather station) power supplied by a solar panel. The station has sensors and a WiFi module. With the sensors it measures temperature, humidity, pressure, gas and luminosity. And with the WiFi module it sends the data online.<br/>
        In particular the data is sent to the application I made and deployed to AWS, where they are stored on the database.<br/>
        These data is consultable through the website which is actually reachable at this address: <a href="http://wwloadbalancer-658838192.us-west-2.elb.amazonaws.com" target="_blank">here</a>.<br/>
        If the data doesn’t update it’s because I’m doing some maintenance on the device.
      </p>

      <space/>


      <h3>Why I did it</h3>

      <p>
        There are several reasons why I decided to start this project.<br/>
        But starting with the main one, it’s because I needed a lot of time to focus on learning new things and get deeper knowledge about developing distributed applications that run on servers.<br/>
        To achieve that, instead of studying just for the sake of studying, I decided to directly apply what I learnt on something real, finalised and utilisable also in the future.<br/>
        In particular, I wanted to have a full round knowledge about web applications since every time one joins a new dev team he starts working on a project that’s already started.<br/>
        So, this has been a good occasion to learn how to start a project from scratch. Furthermore to deeply understand front end and back end frameworks I already had experience with.<br/>
        Other than learn new stuff about programming and project configuration, I wanted to get my hands dirty with DevOps. So I wanted to truly understand how a cloud based application works and how it’s configured.<br/>
        Finally, it had been a long time since I wanted to expand my knowledge beyond computer science and this one was a good occasion to learn the basics of electronics.<br/>
        This project not only gave me the opportunity to learn a huge amount of new technologies but is also a project that grows along the time thanks to the daily gathering of data of the station. So I’m sure that I’ll be able to use it in the future for further studies.
      </p>

      <space/>


      <h3>The application</h3>

      <p>
        The whole project is possible to be split into three main sections. The part of the cloud, the application and the hardware part.<br/>
        The application is structured into micro services. In particular one of them serves the web client and the other one has a Restful API to receive the data sent by the weather station. This last one also stores the data into the database and serves them to the web client.
      </p>


      <space/>



      <h3>The cloud</h3>

      <p>
        Since the main idea was the one to learn as mush as possible about AWS, I ended up with the implementation of an infrastructure that is much more complicated that the real needs of my application.<br/>
        The entire application runs on a private cloud of Amazon Web Services.<br/>
        After a general investigation of the various AWS components, I decided to use the Elastic Container Service and Cloud Formation.<br/>
        I decided to use Cloud Formation after I had to do with the jungle of the interface that AWS presents. In fact I definitely prefer to write all my configuration inside a template file and give it to Cloud Formation to build.<br/>
        Another reason is because it allows me to edit the configuration of any part of the cloud simply by changing a couple of line of that file.<br/>
        The cloud is composed by two t2.small EC2 instances that are distributed into two availability zones. These are optimised to be used with ECS and have the ECS agent installed into them.<br/>
        They are registered into an Auto Scaling Group that maintains a minimal of two instances always up and running and a maximum of four instances when it’s necessary (probably never).<br/>
        The traffic is distributed by two Load Balancers, one for each micro service.<br/>
        ECS initialise two tasks, for each micro service and distributes them evenly to the two instances.<br/>
        Furthermore every time that a task doesn’t answer anymore, ECS get in action to substitute it. This is because it’s set to have a fixed number of desired tasks always running.<br/>
        When it’s necessary to deploy a new version of one of the micro services, the respective docker image is pushed to Elastic Container Registry.<br/>
        The application is highly available, in fact during the deploy there are no down times on the service because ECS it’s configured in a way that the new tasks (2) with the new version on them are initialised and after that it starts to drain the traffic from the other two tasks that are going to be deleted at the end.<br/>
        The Cloud Formation template defines also a table that’s created on DynamoDb where are going to be store all the atmospheric measurements.
      </p>


      <space/>


      <h3>Automation deployment</h3>

      <p>
        An aspect of the project I was particularly interested in, was the automation of the deploy.<br/>
        Both codebases of the two micro services are on GitHub. For now the whole code is developed on only one branch (master) because the application is still small, it’s not public (other then the public DNS of the Load Balancer) and because I’m the only one working on it.<br/>
        As software for Continuous Integration I chose SemaphoreCI because I had a previous experience  with it and because it allows me to deploy manually.<br/>
        Every time there’s a commit of something to GitHub, SemaphoreCI is configured to automatically start to execute the tests and, if they pass, to build  the front end. Finally, it creates the docker image of the application and pushes the image to AWS Elastic Container Registry. After the push it requests the update of the Cloud Formation stack.<br/>
        Cloud Formation updates the stack with the new indications from the template, while keeping the old ones unchanged. In this case, only the url of the image has changed so it will only update the tasks that are running the container of this application.<br/>
        The deploy happens in a way that the service stays available all the time. First of all the Load Balancer direct all the traffic to the new tasks where the new version is running. Then, it drains the two old tasks that are going to be terminated afterwards.
      </p>


      <space/>


      <h3>The web client</h3>

      <p>
        To consolidate my knowledge about the front end I decided to start from scratch a javascript based project.<br/>
        This also allowed me to make the data (gathered from the weather station) public and show them through graphs on a webpage.<br/>
        My chosen technologies to realise the application have been ReactJs with Redux, npm as packages manager and webpack as module bundler.<br/>
        Webpack allows the website to be compiled in a way that’s very performant. In fact it minimises the code, splits it in modules and compiles only the code actually used.<br/>
        For the front end I decided to create a Single Page Application. For this purpose webpack dynamically creates the index page from a template.<br/>
        In a SPA the server serves this html page with the initial assets (images and fonts) and a javascript bundle.<br/>
        After that, each page and each asset is downloaded on the fly when it’s requested by the user browser. This allows the first load to be much lighter and fast. In fact, after that each page is visited, the entire application is downloaded and the navigation become very fluid.<br/>
        The CSS code is written using Sass.<br/>
        The application is registered to a service worker that for now works only with Google Chrome because it’s a technology that’s not yet implemented on the other browsers. This feature is particularly satisfying because I never had tried it before and it actually works very well.<br/>
        So the application is usable also offline only when browsing with Chrome.
      </p>


      <space/>


      <h3>Server side</h3>

      <p>
        The server side application is made by two micro services that I kept very simple.<br/>
        One of them serves a Single Page Application to the browsers and it’s written with the functional programming language Scala on the framework Play.<br/>
        The other one serves a Restful API and communicates with the weather station receiving the data and storing it to the DynamoDB database. Furthermore it serves this data to the web client when requested. Also this one is made with Scala but the framework is Akka Http.
      </p>


      <space/>


      <h3>The hardware</h3>

      <p>
        The device was initially designed to use Arduino as a main board. After a while I then preferred to switch to another board, NodeMcu Amica.<br/>
        The device has different sensors. They measure temperature, humidity, pressure, gas and luminosity.<br/>
        The sensors are wired to and handled by the main board which has a microprocessor programmed by me to read the data and send it to the server.<br/>
        The device has a WiFi module that sends the data to the application that runs on AWS where they are stored.<br/>
        Since the station has to be installed outdoor, the device has a battery that makes it autonomous.<br/>
        In order to be more durable without changing the battery and working overnight, a solar panel is attached to it and provides the electricity to charge the battery.<br/>
        Initially the device consumed an amount of energy very high to be provided just via battery.<br/>
        To make the device much smaller and to consume less electricity I removed the Arduino component and I implemented various solutions at microprocessor level.
      </p>

      <space/>


      <h3>Future development</h3>

      <p>
        Apart from learning and get deeper knowledge on computer science I created this device and application also to have a solid and concrete base for future developments and new learnings.<br/>
        The device will keep gathering and storing an amount of data about the weather daily. On the long period I’ll have sufficient data to be able to make operations with big data and so to explore new corners of the computer science and learn new programming language like Python, frameworks and big data tools.<br/>
        To have a big base of data gives me other ideas. For example regarding artificial intelligence and machine learning.<br/>
        The project can be used also to cross the data of the various measurements to get interesting assumptions and to study some local climate phenomena.
      </p>
    </div>
  )
}

export default ProjectWeatherStation
