(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/react-components/PersonalProjects/PersonalProjects.js":
/*!*******************************************************************!*\
  !*** ./src/react-components/PersonalProjects/PersonalProjects.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_ProjectWeatherStation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/ProjectWeatherStation */ "./src/react-components/ProjectWeatherStation.js");





const PersonalProjects = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_ProjectWeatherStation__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PersonalProjects);

/***/ }),

/***/ "./src/react-components/ProjectWeatherStation.js":
/*!*******************************************************!*\
  !*** ./src/react-components/ProjectWeatherStation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ProjectWeatherStation = () => {

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h1",
      null,
      "Project: weather station"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "How It Works"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "In general the project is about a device (the weather station) power supplied by a solar panel.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The station has sensors and a WiFi module. With the sensors it measures temperature, humidity, pressure, gas and luminosity. And with the WiFi module it sends the data online.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "In particular the idea is to send the data to the online application that I made and deployed to AWS, where they are stored on the database.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "These data is consultable through the website which is actually reachable at ",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        { href: "http://wwloadbalancer-658838192.us-west-2.elb.amazonaws.com", target: "_blank" },
        "this address"
      ),
      ". (If the data doesn\u2019t update it\u2019s because I\u2019m doing some maintenance on the device)"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "Why I did it"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "There are several reasons why I decided to start this project.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "But starting with the main one, it\u2019s because I needed a lot of time to focus on learning new things and get deeper knowledge about developing distributed applications that run on servers.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "To achieve that, instead of studying just for the sake of studying, I decided to directly apply what I learnt on something real, finalised and utilisable also in the future.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "In particular, I wanted to have a full round knowledge about web applications since every time one joins a new dev team he starts working on a project that\u2019s already started. So, this has been a good occasion to learn how to start a project from scratch. And, furthermore, to deeply understand front-end and back-end frameworks I already had experience with.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Other than learn new stuff about programming and project configuration, I wanted to get my hands dirty with DevOps. So I wanted to truly understand how a cloud based application works and how it\u2019s configured.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Finally, it had been a long time since I wanted to expand my knowledge beyond computer science and this one was a good occasion to learn the basics of electronics.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "This project not only gave me the opportunity to learn a huge amount of new technologies but it's also a project that grows along the time thanks to the daily gathering of data of the station. So I\u2019m sure that I\u2019ll be able to use it in the future for further studies."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "The application"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "The whole project is possible to be split into three main sections. The part of the cloud, the application and the hardware part.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The application is structured into micro services. In particular one of them serves the web client and the other one has a Restful API to receive the data sent by the weather station. This last one also stores the data into the database and serves them to the web client.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "A future one might be a microservice written in Python, dedicated to working with big data."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "The cloud"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "Since the main idea was to learn as mush as possible about AWS, I ended up with an implementation of the infrastructure that is much more complicated than the real needs of my application.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The entire application runs on a private cloud of Amazon Web Services.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "After a general investigation of the various AWS components, I decided to use Elastic Container Service and Cloud Formation.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "I decided to use Cloud Formation after I had to do with the jungle of the interface that AWS presents to the users. In fact I definitely prefer to write all my configuration inside a template file and give it to Cloud Formation to be built.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Another reason is because it allows me to edit the configuration of any part of the cloud simply by changing a couple of lines of that file.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The cloud is composed by two t2.small EC2 instances that are distributed into two availability zones. These are optimised to be used with ECS and have the ECS agent installed into them.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "They are registered into an Auto Scaling Group that maintains a minimal of two instances always up and running and a maximum of four instances when it\u2019s necessary (probably never).",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The traffic is distributed by two Load Balancers, one for each micro service.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "ECS initialise two tasks for each micro service and distributes them evenly to the two instances.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Furthermore every time that a task doesn\u2019t answer anymore, ECS gets in action to substitute it. This is because it\u2019s set to have a fixed number of desired tasks always running.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "When it\u2019s necessary to deploy a new version of one of the micro services, the respective docker image is pushed to Elastic Container Registry.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The application is highly available, in fact during the deploy there are no down times for the users because ECS it\u2019s configured in a way that the new tasks with the new version on them are initialised and only after that ECS starts to drain the traffic from the other two tasks that are going to be deleted at the end.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The Cloud Formation template defines also a table that\u2019s created on DynamoDb where are going to be stored all the atmospheric measurements."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "Automation deployment"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "An aspect of the project I was particularly interested in, was the automation of the deploy.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Both codebases of the two micro services are on GitHub. For now the whole code is developed on one single branch (master) because the application is still small, it\u2019s not public (other then the public DNS of the Load Balancer) and because I\u2019m the only one working on it.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "As software for Continuous Integration I chose SemaphoreCI because I had a previous experience  with it and because it allows me to deploy manually.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Every time there\u2019s a commit of something to GitHub, SemaphoreCI is configured to automatically start to execute the tests and, if they pass, to build  the front end. Finally, it creates the docker image of the application and pushes the image to AWS Elastic Container Registry. After that, it requests the update of the Cloud Formation stack.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Cloud Formation updates the stack with the new indications from the template and keeps the old ones unchanged. In this case, only the url of the image has changed, so Cloud Formation will only update the tasks that are running the containers with this image.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The deploy happens in a way that the service stays available all the time. This happens because the Load Balancer directs all the traffic to the new tasks where the new version is running. Then, it drains the two old tasks. And, eventually, it terminates them."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "The web client"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "To consolidate my knowledge about the front end I decided to start from scratch a javascript based project.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "This also allowed me to make public the data gathered from the weather station and to show to it through graphs on a webpage.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "My chosen technologies to realise the application have been ReactJs with Redux, npm as package manager and webpack as module bundler.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Webpack allows the website to be compiled in a way that\u2019s very performant. In fact it minimises the code, splits it in modules and compiles only the code actually used.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "For the front end I decided to create a Single Page Application. For this purpose webpack dynamically creates the index page from a template that I give to it. The server serves this html page with the initial assets (images and fonts) and a javascript bundle.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "After that, each page and each asset is downloaded on the fly when it\u2019s requested by the user browser. This allows the first load to be much lighter and fast. In fact, after that each page is visited, the entire application is downloaded and the navigation become very fluid.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The application is registered to a service worker that for now works only with Google Chrome because it\u2019s a technology that\u2019s not yet implemented on the other browsers. This feature is particularly satisfying because I never had tried it before and it actually works very well.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "So the application is usable also offline only when browsing with Chrome.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The CSS code is written using Sass."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "Server side"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "The server side application is made by two micro services that I kept very simple.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "One of them serves a Single Page Application to the browsers and it\u2019s written with the functional programming language Scala on the framework Play.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The other one serves a Restful API and communicates with the weather station receiving the data and storing it to the DynamoDB database. Furthermore it serves this data to the web client when requested. Also this one is made with Scala but the framework is Akka Http."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "The hardware"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "The device was initially designed to use Arduino as a main board. After a while I then preferred to switch to another board, NodeMcu Amica.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The device has different sensors. They measure temperature, humidity, pressure, gas and luminosity.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The sensors are wired to and handled by the main board which has a microprocessor programmed by me to read the data and send it to the server.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The device has a WiFi module that sends the data to the application that runs on AWS where they are stored.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Since the station has to be installed outdoor, the device has a battery that makes it autonomous.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "In order to be more durable without changing the battery and working overnight, a solar panel is attached to it and provides the electricity to charge the battery.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Initially the device consumed an amount of energy very high to be provided just via battery.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "To make the device much smaller and to consume less electricity I removed the Arduino component and I implemented various solutions at microprocessor level."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h3",
      null,
      "Future development"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "p",
      null,
      "Apart from learning and get deeper knowledge on computer science I created this device and application also to have a solid and concrete base for future developments and new learnings.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The device will keep gathering and storing an amount of data about the weather daily. On the long period I\u2019ll have sufficient data to be able to make operations with big data and so to explore new corners of the computer science and learn new programming languages like Python, frameworks and big data tools.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "To have a big base of data gives me other ideas. For example regarding artificial intelligence and machine learning.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The project can be used also to cross the data of the various measurements to get interesting assumptions and to study some local climate phenomena."
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectWeatherStation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtY29tcG9uZW50cy9QZXJzb25hbFByb2plY3RzL1BlcnNvbmFsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LWNvbXBvbmVudHMvUHJvamVjdFdlYXRoZXJTdGF0aW9uLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsUHJvamVjdHMiLCJQcm9qZWN0V2VhdGhlclN0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUdBLE1BQU1BLG1CQUFtQixNQUFNO0FBQzdCLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQUMsd0VBQUQ7QUFERixHQURGO0FBS0QsQ0FORDs7QUFRQSwrREFBZUEsZ0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBR0EsTUFBTUMsd0JBQXdCLE1BQU07O0FBRWxDLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBR0UsNkVBSEY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTEY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUNpRyw0RUFEakc7QUFBQTtBQUVpTCw0RUFGakw7QUFBQTtBQUc4SSw0RUFIOUk7QUFBQTtBQUkrRTtBQUFBO0FBQUEsVUFBRyxNQUFLLDZEQUFSLEVBQXNFLFFBQU8sUUFBN0U7QUFBQTtBQUFBLE9BSi9FO0FBQUE7QUFBQSxLQVBGO0FBY0UsNkVBZEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCRjtBQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUNnRSw0RUFEaEU7QUFBQTtBQUU2TCw0RUFGN0w7QUFBQTtBQUcrSyw0RUFIL0s7QUFBQTtBQUl3Vyw0RUFKeFc7QUFBQTtBQUtrTiw0RUFMbE47QUFBQTtBQU1xSyw0RUFOcks7QUFBQTtBQUFBLEtBbkJGO0FBNkJFLDZFQTdCRjtBQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaENGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQ21JLDRFQURuSTtBQUFBO0FBRWlSLDRFQUZqUjtBQUFBO0FBQUEsS0FsQ0Y7QUF5Q0UsNkVBekNGO0FBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDOEwsNEVBRDlMO0FBQUE7QUFFd0UsNEVBRnhFO0FBQUE7QUFHOEgsNEVBSDlIO0FBQUE7QUFJa1AsNEVBSmxQO0FBQUE7QUFLOEksNEVBTDlJO0FBQUE7QUFNMkwsNEVBTjNMO0FBQUE7QUFPc0wsNEVBUHRMO0FBQUE7QUFRK0UsNEVBUi9FO0FBQUE7QUFTbUcsNEVBVG5HO0FBQUE7QUFVa0wsNEVBVmxMO0FBQUE7QUFXZ0osNEVBWGhKO0FBQUE7QUFZaVUsNEVBWmpVO0FBQUE7QUFBQSxLQS9DRjtBQWdFRSw2RUFoRUY7QUFtRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5FRjtBQXFFRTtBQUFBO0FBQUE7QUFBQTtBQUM4Riw0RUFEOUY7QUFBQTtBQUVnUiw0RUFGaFI7QUFBQTtBQUdzSiw0RUFIdEo7QUFBQTtBQUl3Viw0RUFKeFY7QUFBQTtBQUtvUSw0RUFMcFE7QUFBQTtBQUFBLEtBckVGO0FBK0VFLDZFQS9FRjtBQWtGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEZGO0FBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQzZHLDRFQUQ3RztBQUFBO0FBRStILDRFQUYvSDtBQUFBO0FBR3VJLDRFQUh2STtBQUFBO0FBSTBLLDRFQUoxSztBQUFBO0FBS3NRLDRFQUx0UTtBQUFBO0FBTXFSLDRFQU5yUjtBQUFBO0FBT3VSLDRFQVB2UjtBQUFBO0FBUTJFLDRFQVIzRTtBQUFBO0FBQUEsS0FwRkY7QUFpR0UsNkVBakdGO0FBb0dFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwR0Y7QUFzR0U7QUFBQTtBQUFBO0FBQUE7QUFDb0YsNEVBRHBGO0FBQUE7QUFFcUosNEVBRnJKO0FBQUE7QUFBQSxLQXRHRjtBQTZHRSw2RUE3R0Y7QUFnSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhIRjtBQWtIRTtBQUFBO0FBQUE7QUFBQTtBQUM2SSw0RUFEN0k7QUFBQTtBQUVxRyw0RUFGckc7QUFBQTtBQUdnSiw0RUFIaEo7QUFBQTtBQUk2Ryw0RUFKN0c7QUFBQTtBQUttRyw0RUFMbkc7QUFBQTtBQU1xSyw0RUFOcks7QUFBQTtBQU84Riw0RUFQOUY7QUFBQTtBQUFBLEtBbEhGO0FBNkhFLDZFQTdIRjtBQWdJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaElGO0FBa0lFO0FBQUE7QUFBQTtBQUFBO0FBQzBMLDRFQUQxTDtBQUFBO0FBRXNULDRFQUZ0VDtBQUFBO0FBR3NILDRFQUh0SDtBQUFBO0FBQUE7QUFsSUYsR0FERjtBQTJJRCxDQTdJRDs7QUErSUEsK0RBQWVBLHFCQUFmLEUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvamVjdFdlYXRoZXJTdGF0aW9uIGZyb20gXCJDb21wb25lbnRzL1Byb2plY3RXZWF0aGVyU3RhdGlvblwiXG5cblxuY29uc3QgUGVyc29uYWxQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2plY3RXZWF0aGVyU3RhdGlvbi8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxQcm9qZWN0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgUHJvamVjdFdlYXRoZXJTdGF0aW9uID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9qZWN0OiB3ZWF0aGVyIHN0YXRpb248L2gxPlxuXG4gICAgICA8c3BhY2UvPlxuXG4gICAgICA8aDM+SG93IEl0IFdvcmtzPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIEluIGdlbmVyYWwgdGhlIHByb2plY3QgaXMgYWJvdXQgYSBkZXZpY2UgKHRoZSB3ZWF0aGVyIHN0YXRpb24pIHBvd2VyIHN1cHBsaWVkIGJ5IGEgc29sYXIgcGFuZWwuPGJyLz5cbiAgICAgICAgVGhlIHN0YXRpb24gaGFzIHNlbnNvcnMgYW5kIGEgV2lGaSBtb2R1bGUuIFdpdGggdGhlIHNlbnNvcnMgaXQgbWVhc3VyZXMgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCBwcmVzc3VyZSwgZ2FzIGFuZCBsdW1pbm9zaXR5LiBBbmQgd2l0aCB0aGUgV2lGaSBtb2R1bGUgaXQgc2VuZHMgdGhlIGRhdGEgb25saW5lLjxici8+XG4gICAgICAgIEluIHBhcnRpY3VsYXIgdGhlIGlkZWEgaXMgdG8gc2VuZCB0aGUgZGF0YSB0byB0aGUgb25saW5lIGFwcGxpY2F0aW9uIHRoYXQgSSBtYWRlIGFuZCBkZXBsb3llZCB0byBBV1MsIHdoZXJlIHRoZXkgYXJlIHN0b3JlZCBvbiB0aGUgZGF0YWJhc2UuPGJyLz5cbiAgICAgICAgVGhlc2UgZGF0YSBpcyBjb25zdWx0YWJsZSB0aHJvdWdoIHRoZSB3ZWJzaXRlIHdoaWNoIGlzIGFjdHVhbGx5IHJlYWNoYWJsZSBhdCA8YSBocmVmPVwiaHR0cDovL3d3bG9hZGJhbGFuY2VyLTY1ODgzODE5Mi51cy13ZXN0LTIuZWxiLmFtYXpvbmF3cy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGlzIGFkZHJlc3M8L2E+LiAoSWYgdGhlIGRhdGEgZG9lc27igJl0IHVwZGF0ZSBpdOKAmXMgYmVjYXVzZSBJ4oCZbSBkb2luZyBzb21lIG1haW50ZW5hbmNlIG9uIHRoZSBkZXZpY2UpXG4gICAgICA8L3A+XG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPldoeSBJIGRpZCBpdDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBhcmUgc2V2ZXJhbCByZWFzb25zIHdoeSBJIGRlY2lkZWQgdG8gc3RhcnQgdGhpcyBwcm9qZWN0Ljxici8+XG4gICAgICAgIEJ1dCBzdGFydGluZyB3aXRoIHRoZSBtYWluIG9uZSwgaXTigJlzIGJlY2F1c2UgSSBuZWVkZWQgYSBsb3Qgb2YgdGltZSB0byBmb2N1cyBvbiBsZWFybmluZyBuZXcgdGhpbmdzIGFuZCBnZXQgZGVlcGVyIGtub3dsZWRnZSBhYm91dCBkZXZlbG9waW5nIGRpc3RyaWJ1dGVkIGFwcGxpY2F0aW9ucyB0aGF0IHJ1biBvbiBzZXJ2ZXJzLjxici8+XG4gICAgICAgIFRvIGFjaGlldmUgdGhhdCwgaW5zdGVhZCBvZiBzdHVkeWluZyBqdXN0IGZvciB0aGUgc2FrZSBvZiBzdHVkeWluZywgSSBkZWNpZGVkIHRvIGRpcmVjdGx5IGFwcGx5IHdoYXQgSSBsZWFybnQgb24gc29tZXRoaW5nIHJlYWwsIGZpbmFsaXNlZCBhbmQgdXRpbGlzYWJsZSBhbHNvIGluIHRoZSBmdXR1cmUuPGJyLz5cbiAgICAgICAgSW4gcGFydGljdWxhciwgSSB3YW50ZWQgdG8gaGF2ZSBhIGZ1bGwgcm91bmQga25vd2xlZGdlIGFib3V0IHdlYiBhcHBsaWNhdGlvbnMgc2luY2UgZXZlcnkgdGltZSBvbmUgam9pbnMgYSBuZXcgZGV2IHRlYW0gaGUgc3RhcnRzIHdvcmtpbmcgb24gYSBwcm9qZWN0IHRoYXTigJlzIGFscmVhZHkgc3RhcnRlZC4gU28sIHRoaXMgaGFzIGJlZW4gYSBnb29kIG9jY2FzaW9uIHRvIGxlYXJuIGhvdyB0byBzdGFydCBhIHByb2plY3QgZnJvbSBzY3JhdGNoLiBBbmQsIGZ1cnRoZXJtb3JlLCB0byBkZWVwbHkgdW5kZXJzdGFuZCBmcm9udC1lbmQgYW5kIGJhY2stZW5kIGZyYW1ld29ya3MgSSBhbHJlYWR5IGhhZCBleHBlcmllbmNlIHdpdGguPGJyLz5cbiAgICAgICAgT3RoZXIgdGhhbiBsZWFybiBuZXcgc3R1ZmYgYWJvdXQgcHJvZ3JhbW1pbmcgYW5kIHByb2plY3QgY29uZmlndXJhdGlvbiwgSSB3YW50ZWQgdG8gZ2V0IG15IGhhbmRzIGRpcnR5IHdpdGggRGV2T3BzLiBTbyBJIHdhbnRlZCB0byB0cnVseSB1bmRlcnN0YW5kIGhvdyBhIGNsb3VkIGJhc2VkIGFwcGxpY2F0aW9uIHdvcmtzIGFuZCBob3cgaXTigJlzIGNvbmZpZ3VyZWQuPGJyLz5cbiAgICAgICAgRmluYWxseSwgaXQgaGFkIGJlZW4gYSBsb25nIHRpbWUgc2luY2UgSSB3YW50ZWQgdG8gZXhwYW5kIG15IGtub3dsZWRnZSBiZXlvbmQgY29tcHV0ZXIgc2NpZW5jZSBhbmQgdGhpcyBvbmUgd2FzIGEgZ29vZCBvY2Nhc2lvbiB0byBsZWFybiB0aGUgYmFzaWNzIG9mIGVsZWN0cm9uaWNzLjxici8+XG4gICAgICAgIFRoaXMgcHJvamVjdCBub3Qgb25seSBnYXZlIG1lIHRoZSBvcHBvcnR1bml0eSB0byBsZWFybiBhIGh1Z2UgYW1vdW50IG9mIG5ldyB0ZWNobm9sb2dpZXMgYnV0IGl0J3MgYWxzbyBhIHByb2plY3QgdGhhdCBncm93cyBhbG9uZyB0aGUgdGltZSB0aGFua3MgdG8gdGhlIGRhaWx5IGdhdGhlcmluZyBvZiBkYXRhIG9mIHRoZSBzdGF0aW9uLiBTbyBJ4oCZbSBzdXJlIHRoYXQgSeKAmWxsIGJlIGFibGUgdG8gdXNlIGl0IGluIHRoZSBmdXR1cmUgZm9yIGZ1cnRoZXIgc3R1ZGllcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHNwYWNlLz5cblxuXG4gICAgICA8aDM+VGhlIGFwcGxpY2F0aW9uPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSB3aG9sZSBwcm9qZWN0IGlzIHBvc3NpYmxlIHRvIGJlIHNwbGl0IGludG8gdGhyZWUgbWFpbiBzZWN0aW9ucy4gVGhlIHBhcnQgb2YgdGhlIGNsb3VkLCB0aGUgYXBwbGljYXRpb24gYW5kIHRoZSBoYXJkd2FyZSBwYXJ0Ljxici8+XG4gICAgICAgIFRoZSBhcHBsaWNhdGlvbiBpcyBzdHJ1Y3R1cmVkIGludG8gbWljcm8gc2VydmljZXMuIEluIHBhcnRpY3VsYXIgb25lIG9mIHRoZW0gc2VydmVzIHRoZSB3ZWIgY2xpZW50IGFuZCB0aGUgb3RoZXIgb25lIGhhcyBhIFJlc3RmdWwgQVBJIHRvIHJlY2VpdmUgdGhlIGRhdGEgc2VudCBieSB0aGUgd2VhdGhlciBzdGF0aW9uLiBUaGlzIGxhc3Qgb25lIGFsc28gc3RvcmVzIHRoZSBkYXRhIGludG8gdGhlIGRhdGFiYXNlIGFuZCBzZXJ2ZXMgdGhlbSB0byB0aGUgd2ViIGNsaWVudC48YnIvPlxuICAgICAgICBBIGZ1dHVyZSBvbmUgbWlnaHQgYmUgYSBtaWNyb3NlcnZpY2Ugd3JpdHRlbiBpbiBQeXRob24sIGRlZGljYXRlZCB0byB3b3JraW5nIHdpdGggYmlnIGRhdGEuXG4gICAgICA8L3A+XG5cblxuICAgICAgPHNwYWNlLz5cblxuXG5cbiAgICAgIDxoMz5UaGUgY2xvdWQ8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgU2luY2UgdGhlIG1haW4gaWRlYSB3YXMgdG8gbGVhcm4gYXMgbXVzaCBhcyBwb3NzaWJsZSBhYm91dCBBV1MsIEkgZW5kZWQgdXAgd2l0aCBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgaW5mcmFzdHJ1Y3R1cmUgdGhhdCBpcyBtdWNoIG1vcmUgY29tcGxpY2F0ZWQgdGhhbiB0aGUgcmVhbCBuZWVkcyBvZiBteSBhcHBsaWNhdGlvbi48YnIvPlxuICAgICAgICBUaGUgZW50aXJlIGFwcGxpY2F0aW9uIHJ1bnMgb24gYSBwcml2YXRlIGNsb3VkIG9mIEFtYXpvbiBXZWIgU2VydmljZXMuPGJyLz5cbiAgICAgICAgQWZ0ZXIgYSBnZW5lcmFsIGludmVzdGlnYXRpb24gb2YgdGhlIHZhcmlvdXMgQVdTIGNvbXBvbmVudHMsIEkgZGVjaWRlZCB0byB1c2UgRWxhc3RpYyBDb250YWluZXIgU2VydmljZSBhbmQgQ2xvdWQgRm9ybWF0aW9uLjxici8+XG4gICAgICAgIEkgZGVjaWRlZCB0byB1c2UgQ2xvdWQgRm9ybWF0aW9uIGFmdGVyIEkgaGFkIHRvIGRvIHdpdGggdGhlIGp1bmdsZSBvZiB0aGUgaW50ZXJmYWNlIHRoYXQgQVdTIHByZXNlbnRzIHRvIHRoZSB1c2Vycy4gSW4gZmFjdCBJIGRlZmluaXRlbHkgcHJlZmVyIHRvIHdyaXRlIGFsbCBteSBjb25maWd1cmF0aW9uIGluc2lkZSBhIHRlbXBsYXRlIGZpbGUgYW5kIGdpdmUgaXQgdG8gQ2xvdWQgRm9ybWF0aW9uIHRvIGJlIGJ1aWx0Ljxici8+XG4gICAgICAgIEFub3RoZXIgcmVhc29uIGlzIGJlY2F1c2UgaXQgYWxsb3dzIG1lIHRvIGVkaXQgdGhlIGNvbmZpZ3VyYXRpb24gb2YgYW55IHBhcnQgb2YgdGhlIGNsb3VkIHNpbXBseSBieSBjaGFuZ2luZyBhIGNvdXBsZSBvZiBsaW5lcyBvZiB0aGF0IGZpbGUuPGJyLz5cbiAgICAgICAgVGhlIGNsb3VkIGlzIGNvbXBvc2VkIGJ5IHR3byB0Mi5zbWFsbCBFQzIgaW5zdGFuY2VzIHRoYXQgYXJlIGRpc3RyaWJ1dGVkIGludG8gdHdvIGF2YWlsYWJpbGl0eSB6b25lcy4gVGhlc2UgYXJlIG9wdGltaXNlZCB0byBiZSB1c2VkIHdpdGggRUNTIGFuZCBoYXZlIHRoZSBFQ1MgYWdlbnQgaW5zdGFsbGVkIGludG8gdGhlbS48YnIvPlxuICAgICAgICBUaGV5IGFyZSByZWdpc3RlcmVkIGludG8gYW4gQXV0byBTY2FsaW5nIEdyb3VwIHRoYXQgbWFpbnRhaW5zIGEgbWluaW1hbCBvZiB0d28gaW5zdGFuY2VzIGFsd2F5cyB1cCBhbmQgcnVubmluZyBhbmQgYSBtYXhpbXVtIG9mIGZvdXIgaW5zdGFuY2VzIHdoZW4gaXTigJlzIG5lY2Vzc2FyeSAocHJvYmFibHkgbmV2ZXIpLjxici8+XG4gICAgICAgIFRoZSB0cmFmZmljIGlzIGRpc3RyaWJ1dGVkIGJ5IHR3byBMb2FkIEJhbGFuY2Vycywgb25lIGZvciBlYWNoIG1pY3JvIHNlcnZpY2UuPGJyLz5cbiAgICAgICAgRUNTIGluaXRpYWxpc2UgdHdvIHRhc2tzIGZvciBlYWNoIG1pY3JvIHNlcnZpY2UgYW5kIGRpc3RyaWJ1dGVzIHRoZW0gZXZlbmx5IHRvIHRoZSB0d28gaW5zdGFuY2VzLjxici8+XG4gICAgICAgIEZ1cnRoZXJtb3JlIGV2ZXJ5IHRpbWUgdGhhdCBhIHRhc2sgZG9lc27igJl0IGFuc3dlciBhbnltb3JlLCBFQ1MgZ2V0cyBpbiBhY3Rpb24gdG8gc3Vic3RpdHV0ZSBpdC4gVGhpcyBpcyBiZWNhdXNlIGl04oCZcyBzZXQgdG8gaGF2ZSBhIGZpeGVkIG51bWJlciBvZiBkZXNpcmVkIHRhc2tzIGFsd2F5cyBydW5uaW5nLjxici8+XG4gICAgICAgIFdoZW4gaXTigJlzIG5lY2Vzc2FyeSB0byBkZXBsb3kgYSBuZXcgdmVyc2lvbiBvZiBvbmUgb2YgdGhlIG1pY3JvIHNlcnZpY2VzLCB0aGUgcmVzcGVjdGl2ZSBkb2NrZXIgaW1hZ2UgaXMgcHVzaGVkIHRvIEVsYXN0aWMgQ29udGFpbmVyIFJlZ2lzdHJ5Ljxici8+XG4gICAgICAgIFRoZSBhcHBsaWNhdGlvbiBpcyBoaWdobHkgYXZhaWxhYmxlLCBpbiBmYWN0IGR1cmluZyB0aGUgZGVwbG95IHRoZXJlIGFyZSBubyBkb3duIHRpbWVzIGZvciB0aGUgdXNlcnMgYmVjYXVzZSBFQ1MgaXTigJlzIGNvbmZpZ3VyZWQgaW4gYSB3YXkgdGhhdCB0aGUgbmV3IHRhc2tzIHdpdGggdGhlIG5ldyB2ZXJzaW9uIG9uIHRoZW0gYXJlIGluaXRpYWxpc2VkIGFuZCBvbmx5IGFmdGVyIHRoYXQgRUNTIHN0YXJ0cyB0byBkcmFpbiB0aGUgdHJhZmZpYyBmcm9tIHRoZSBvdGhlciB0d28gdGFza3MgdGhhdCBhcmUgZ29pbmcgdG8gYmUgZGVsZXRlZCBhdCB0aGUgZW5kLjxici8+XG4gICAgICAgIFRoZSBDbG91ZCBGb3JtYXRpb24gdGVtcGxhdGUgZGVmaW5lcyBhbHNvIGEgdGFibGUgdGhhdOKAmXMgY3JlYXRlZCBvbiBEeW5hbW9EYiB3aGVyZSBhcmUgZ29pbmcgdG8gYmUgc3RvcmVkIGFsbCB0aGUgYXRtb3NwaGVyaWMgbWVhc3VyZW1lbnRzLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPkF1dG9tYXRpb24gZGVwbG95bWVudDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBBbiBhc3BlY3Qgb2YgdGhlIHByb2plY3QgSSB3YXMgcGFydGljdWxhcmx5IGludGVyZXN0ZWQgaW4sIHdhcyB0aGUgYXV0b21hdGlvbiBvZiB0aGUgZGVwbG95Ljxici8+XG4gICAgICAgIEJvdGggY29kZWJhc2VzIG9mIHRoZSB0d28gbWljcm8gc2VydmljZXMgYXJlIG9uIEdpdEh1Yi4gRm9yIG5vdyB0aGUgd2hvbGUgY29kZSBpcyBkZXZlbG9wZWQgb24gb25lIHNpbmdsZSBicmFuY2ggKG1hc3RlcikgYmVjYXVzZSB0aGUgYXBwbGljYXRpb24gaXMgc3RpbGwgc21hbGwsIGl04oCZcyBub3QgcHVibGljIChvdGhlciB0aGVuIHRoZSBwdWJsaWMgRE5TIG9mIHRoZSBMb2FkIEJhbGFuY2VyKSBhbmQgYmVjYXVzZSBJ4oCZbSB0aGUgb25seSBvbmUgd29ya2luZyBvbiBpdC48YnIvPlxuICAgICAgICBBcyBzb2Z0d2FyZSBmb3IgQ29udGludW91cyBJbnRlZ3JhdGlvbiBJIGNob3NlIFNlbWFwaG9yZUNJIGJlY2F1c2UgSSBoYWQgYSBwcmV2aW91cyBleHBlcmllbmNlICB3aXRoIGl0IGFuZCBiZWNhdXNlIGl0IGFsbG93cyBtZSB0byBkZXBsb3kgbWFudWFsbHkuPGJyLz5cbiAgICAgICAgRXZlcnkgdGltZSB0aGVyZeKAmXMgYSBjb21taXQgb2Ygc29tZXRoaW5nIHRvIEdpdEh1YiwgU2VtYXBob3JlQ0kgaXMgY29uZmlndXJlZCB0byBhdXRvbWF0aWNhbGx5IHN0YXJ0IHRvIGV4ZWN1dGUgdGhlIHRlc3RzIGFuZCwgaWYgdGhleSBwYXNzLCB0byBidWlsZCAgdGhlIGZyb250IGVuZC4gRmluYWxseSwgaXQgY3JlYXRlcyB0aGUgZG9ja2VyIGltYWdlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcHVzaGVzIHRoZSBpbWFnZSB0byBBV1MgRWxhc3RpYyBDb250YWluZXIgUmVnaXN0cnkuIEFmdGVyIHRoYXQsIGl0IHJlcXVlc3RzIHRoZSB1cGRhdGUgb2YgdGhlIENsb3VkIEZvcm1hdGlvbiBzdGFjay48YnIvPlxuICAgICAgICBDbG91ZCBGb3JtYXRpb24gdXBkYXRlcyB0aGUgc3RhY2sgd2l0aCB0aGUgbmV3IGluZGljYXRpb25zIGZyb20gdGhlIHRlbXBsYXRlIGFuZCBrZWVwcyB0aGUgb2xkIG9uZXMgdW5jaGFuZ2VkLiBJbiB0aGlzIGNhc2UsIG9ubHkgdGhlIHVybCBvZiB0aGUgaW1hZ2UgaGFzIGNoYW5nZWQsIHNvIENsb3VkIEZvcm1hdGlvbiB3aWxsIG9ubHkgdXBkYXRlIHRoZSB0YXNrcyB0aGF0IGFyZSBydW5uaW5nIHRoZSBjb250YWluZXJzIHdpdGggdGhpcyBpbWFnZS48YnIvPlxuICAgICAgICBUaGUgZGVwbG95IGhhcHBlbnMgaW4gYSB3YXkgdGhhdCB0aGUgc2VydmljZSBzdGF5cyBhdmFpbGFibGUgYWxsIHRoZSB0aW1lLiBUaGlzIGhhcHBlbnMgYmVjYXVzZSB0aGUgTG9hZCBCYWxhbmNlciBkaXJlY3RzIGFsbCB0aGUgdHJhZmZpYyB0byB0aGUgbmV3IHRhc2tzIHdoZXJlIHRoZSBuZXcgdmVyc2lvbiBpcyBydW5uaW5nLiBUaGVuLCBpdCBkcmFpbnMgdGhlIHR3byBvbGQgdGFza3MuIEFuZCwgZXZlbnR1YWxseSwgaXQgdGVybWluYXRlcyB0aGVtLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPlRoZSB3ZWIgY2xpZW50PC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFRvIGNvbnNvbGlkYXRlIG15IGtub3dsZWRnZSBhYm91dCB0aGUgZnJvbnQgZW5kIEkgZGVjaWRlZCB0byBzdGFydCBmcm9tIHNjcmF0Y2ggYSBqYXZhc2NyaXB0IGJhc2VkIHByb2plY3QuPGJyLz5cbiAgICAgICAgVGhpcyBhbHNvIGFsbG93ZWQgbWUgdG8gbWFrZSBwdWJsaWMgdGhlIGRhdGEgZ2F0aGVyZWQgZnJvbSB0aGUgd2VhdGhlciBzdGF0aW9uIGFuZCB0byBzaG93IHRvIGl0IHRocm91Z2ggZ3JhcGhzIG9uIGEgd2VicGFnZS48YnIvPlxuICAgICAgICBNeSBjaG9zZW4gdGVjaG5vbG9naWVzIHRvIHJlYWxpc2UgdGhlIGFwcGxpY2F0aW9uIGhhdmUgYmVlbiBSZWFjdEpzIHdpdGggUmVkdXgsIG5wbSBhcyBwYWNrYWdlIG1hbmFnZXIgYW5kIHdlYnBhY2sgYXMgbW9kdWxlIGJ1bmRsZXIuPGJyLz5cbiAgICAgICAgV2VicGFjayBhbGxvd3MgdGhlIHdlYnNpdGUgdG8gYmUgY29tcGlsZWQgaW4gYSB3YXkgdGhhdOKAmXMgdmVyeSBwZXJmb3JtYW50LiBJbiBmYWN0IGl0IG1pbmltaXNlcyB0aGUgY29kZSwgc3BsaXRzIGl0IGluIG1vZHVsZXMgYW5kIGNvbXBpbGVzIG9ubHkgdGhlIGNvZGUgYWN0dWFsbHkgdXNlZC48YnIvPlxuICAgICAgICBGb3IgdGhlIGZyb250IGVuZCBJIGRlY2lkZWQgdG8gY3JlYXRlIGEgU2luZ2xlIFBhZ2UgQXBwbGljYXRpb24uIEZvciB0aGlzIHB1cnBvc2Ugd2VicGFjayBkeW5hbWljYWxseSBjcmVhdGVzIHRoZSBpbmRleCBwYWdlIGZyb20gYSB0ZW1wbGF0ZSB0aGF0IEkgZ2l2ZSB0byBpdC4gVGhlIHNlcnZlciBzZXJ2ZXMgdGhpcyBodG1sIHBhZ2Ugd2l0aCB0aGUgaW5pdGlhbCBhc3NldHMgKGltYWdlcyBhbmQgZm9udHMpIGFuZCBhIGphdmFzY3JpcHQgYnVuZGxlLjxici8+XG4gICAgICAgIEFmdGVyIHRoYXQsIGVhY2ggcGFnZSBhbmQgZWFjaCBhc3NldCBpcyBkb3dubG9hZGVkIG9uIHRoZSBmbHkgd2hlbiBpdOKAmXMgcmVxdWVzdGVkIGJ5IHRoZSB1c2VyIGJyb3dzZXIuIFRoaXMgYWxsb3dzIHRoZSBmaXJzdCBsb2FkIHRvIGJlIG11Y2ggbGlnaHRlciBhbmQgZmFzdC4gSW4gZmFjdCwgYWZ0ZXIgdGhhdCBlYWNoIHBhZ2UgaXMgdmlzaXRlZCwgdGhlIGVudGlyZSBhcHBsaWNhdGlvbiBpcyBkb3dubG9hZGVkIGFuZCB0aGUgbmF2aWdhdGlvbiBiZWNvbWUgdmVyeSBmbHVpZC48YnIvPlxuICAgICAgICBUaGUgYXBwbGljYXRpb24gaXMgcmVnaXN0ZXJlZCB0byBhIHNlcnZpY2Ugd29ya2VyIHRoYXQgZm9yIG5vdyB3b3JrcyBvbmx5IHdpdGggR29vZ2xlIENocm9tZSBiZWNhdXNlIGl04oCZcyBhIHRlY2hub2xvZ3kgdGhhdOKAmXMgbm90IHlldCBpbXBsZW1lbnRlZCBvbiB0aGUgb3RoZXIgYnJvd3NlcnMuIFRoaXMgZmVhdHVyZSBpcyBwYXJ0aWN1bGFybHkgc2F0aXNmeWluZyBiZWNhdXNlIEkgbmV2ZXIgaGFkIHRyaWVkIGl0IGJlZm9yZSBhbmQgaXQgYWN0dWFsbHkgd29ya3MgdmVyeSB3ZWxsLjxici8+XG4gICAgICAgIFNvIHRoZSBhcHBsaWNhdGlvbiBpcyB1c2FibGUgYWxzbyBvZmZsaW5lIG9ubHkgd2hlbiBicm93c2luZyB3aXRoIENocm9tZS48YnIvPlxuICAgICAgICBUaGUgQ1NTIGNvZGUgaXMgd3JpdHRlbiB1c2luZyBTYXNzLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPlNlcnZlciBzaWRlPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBzZXJ2ZXIgc2lkZSBhcHBsaWNhdGlvbiBpcyBtYWRlIGJ5IHR3byBtaWNybyBzZXJ2aWNlcyB0aGF0IEkga2VwdCB2ZXJ5IHNpbXBsZS48YnIvPlxuICAgICAgICBPbmUgb2YgdGhlbSBzZXJ2ZXMgYSBTaW5nbGUgUGFnZSBBcHBsaWNhdGlvbiB0byB0aGUgYnJvd3NlcnMgYW5kIGl04oCZcyB3cml0dGVuIHdpdGggdGhlIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgU2NhbGEgb24gdGhlIGZyYW1ld29yayBQbGF5Ljxici8+XG4gICAgICAgIFRoZSBvdGhlciBvbmUgc2VydmVzIGEgUmVzdGZ1bCBBUEkgYW5kIGNvbW11bmljYXRlcyB3aXRoIHRoZSB3ZWF0aGVyIHN0YXRpb24gcmVjZWl2aW5nIHRoZSBkYXRhIGFuZCBzdG9yaW5nIGl0IHRvIHRoZSBEeW5hbW9EQiBkYXRhYmFzZS4gRnVydGhlcm1vcmUgaXQgc2VydmVzIHRoaXMgZGF0YSB0byB0aGUgd2ViIGNsaWVudCB3aGVuIHJlcXVlc3RlZC4gQWxzbyB0aGlzIG9uZSBpcyBtYWRlIHdpdGggU2NhbGEgYnV0IHRoZSBmcmFtZXdvcmsgaXMgQWtrYSBIdHRwLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPlRoZSBoYXJkd2FyZTwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgZGV2aWNlIHdhcyBpbml0aWFsbHkgZGVzaWduZWQgdG8gdXNlIEFyZHVpbm8gYXMgYSBtYWluIGJvYXJkLiBBZnRlciBhIHdoaWxlIEkgdGhlbiBwcmVmZXJyZWQgdG8gc3dpdGNoIHRvIGFub3RoZXIgYm9hcmQsIE5vZGVNY3UgQW1pY2EuPGJyLz5cbiAgICAgICAgVGhlIGRldmljZSBoYXMgZGlmZmVyZW50IHNlbnNvcnMuIFRoZXkgbWVhc3VyZSB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHByZXNzdXJlLCBnYXMgYW5kIGx1bWlub3NpdHkuPGJyLz5cbiAgICAgICAgVGhlIHNlbnNvcnMgYXJlIHdpcmVkIHRvIGFuZCBoYW5kbGVkIGJ5IHRoZSBtYWluIGJvYXJkIHdoaWNoIGhhcyBhIG1pY3JvcHJvY2Vzc29yIHByb2dyYW1tZWQgYnkgbWUgdG8gcmVhZCB0aGUgZGF0YSBhbmQgc2VuZCBpdCB0byB0aGUgc2VydmVyLjxici8+XG4gICAgICAgIFRoZSBkZXZpY2UgaGFzIGEgV2lGaSBtb2R1bGUgdGhhdCBzZW5kcyB0aGUgZGF0YSB0byB0aGUgYXBwbGljYXRpb24gdGhhdCBydW5zIG9uIEFXUyB3aGVyZSB0aGV5IGFyZSBzdG9yZWQuPGJyLz5cbiAgICAgICAgU2luY2UgdGhlIHN0YXRpb24gaGFzIHRvIGJlIGluc3RhbGxlZCBvdXRkb29yLCB0aGUgZGV2aWNlIGhhcyBhIGJhdHRlcnkgdGhhdCBtYWtlcyBpdCBhdXRvbm9tb3VzLjxici8+XG4gICAgICAgIEluIG9yZGVyIHRvIGJlIG1vcmUgZHVyYWJsZSB3aXRob3V0IGNoYW5naW5nIHRoZSBiYXR0ZXJ5IGFuZCB3b3JraW5nIG92ZXJuaWdodCwgYSBzb2xhciBwYW5lbCBpcyBhdHRhY2hlZCB0byBpdCBhbmQgcHJvdmlkZXMgdGhlIGVsZWN0cmljaXR5IHRvIGNoYXJnZSB0aGUgYmF0dGVyeS48YnIvPlxuICAgICAgICBJbml0aWFsbHkgdGhlIGRldmljZSBjb25zdW1lZCBhbiBhbW91bnQgb2YgZW5lcmd5IHZlcnkgaGlnaCB0byBiZSBwcm92aWRlZCBqdXN0IHZpYSBiYXR0ZXJ5Ljxici8+XG4gICAgICAgIFRvIG1ha2UgdGhlIGRldmljZSBtdWNoIHNtYWxsZXIgYW5kIHRvIGNvbnN1bWUgbGVzcyBlbGVjdHJpY2l0eSBJIHJlbW92ZWQgdGhlIEFyZHVpbm8gY29tcG9uZW50IGFuZCBJIGltcGxlbWVudGVkIHZhcmlvdXMgc29sdXRpb25zIGF0IG1pY3JvcHJvY2Vzc29yIGxldmVsLlxuICAgICAgPC9wPlxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5GdXR1cmUgZGV2ZWxvcG1lbnQ8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgQXBhcnQgZnJvbSBsZWFybmluZyBhbmQgZ2V0IGRlZXBlciBrbm93bGVkZ2Ugb24gY29tcHV0ZXIgc2NpZW5jZSBJIGNyZWF0ZWQgdGhpcyBkZXZpY2UgYW5kIGFwcGxpY2F0aW9uIGFsc28gdG8gaGF2ZSBhIHNvbGlkIGFuZCBjb25jcmV0ZSBiYXNlIGZvciBmdXR1cmUgZGV2ZWxvcG1lbnRzIGFuZCBuZXcgbGVhcm5pbmdzLjxici8+XG4gICAgICAgIFRoZSBkZXZpY2Ugd2lsbCBrZWVwIGdhdGhlcmluZyBhbmQgc3RvcmluZyBhbiBhbW91bnQgb2YgZGF0YSBhYm91dCB0aGUgd2VhdGhlciBkYWlseS4gT24gdGhlIGxvbmcgcGVyaW9kIEnigJlsbCBoYXZlIHN1ZmZpY2llbnQgZGF0YSB0byBiZSBhYmxlIHRvIG1ha2Ugb3BlcmF0aW9ucyB3aXRoIGJpZyBkYXRhIGFuZCBzbyB0byBleHBsb3JlIG5ldyBjb3JuZXJzIG9mIHRoZSBjb21wdXRlciBzY2llbmNlIGFuZCBsZWFybiBuZXcgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIGxpa2UgUHl0aG9uLCBmcmFtZXdvcmtzIGFuZCBiaWcgZGF0YSB0b29scy48YnIvPlxuICAgICAgICBUbyBoYXZlIGEgYmlnIGJhc2Ugb2YgZGF0YSBnaXZlcyBtZSBvdGhlciBpZGVhcy4gRm9yIGV4YW1wbGUgcmVnYXJkaW5nIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFuZCBtYWNoaW5lIGxlYXJuaW5nLjxici8+XG4gICAgICAgIFRoZSBwcm9qZWN0IGNhbiBiZSB1c2VkIGFsc28gdG8gY3Jvc3MgdGhlIGRhdGEgb2YgdGhlIHZhcmlvdXMgbWVhc3VyZW1lbnRzIHRvIGdldCBpbnRlcmVzdGluZyBhc3N1bXB0aW9ucyBhbmQgdG8gc3R1ZHkgc29tZSBsb2NhbCBjbGltYXRlIHBoZW5vbWVuYS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0V2VhdGhlclN0YXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=