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
      " (when I\u2019m doing maintenance on the device the data stops updating)."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtY29tcG9uZW50cy9QZXJzb25hbFByb2plY3RzL1BlcnNvbmFsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LWNvbXBvbmVudHMvUHJvamVjdFdlYXRoZXJTdGF0aW9uLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsUHJvamVjdHMiLCJQcm9qZWN0V2VhdGhlclN0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUdBLE1BQU1BLG1CQUFtQixNQUFNO0FBQzdCLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQUMsd0VBQUQ7QUFERixHQURGO0FBS0QsQ0FORDs7QUFRQSwrREFBZUEsZ0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBR0EsTUFBTUMsd0JBQXdCLE1BQU07O0FBRWxDLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBR0UsNkVBSEY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTEY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUNpRyw0RUFEakc7QUFBQTtBQUVpTCw0RUFGakw7QUFBQTtBQUc4SSw0RUFIOUk7QUFBQTtBQUkrRTtBQUFBO0FBQUEsVUFBRyxNQUFLLDZEQUFSLEVBQXNFLFFBQU8sUUFBN0U7QUFBQTtBQUFBLE9BSi9FO0FBQUE7QUFBQSxLQVBGO0FBY0UsNkVBZEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCRjtBQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUNnRSw0RUFEaEU7QUFBQTtBQUU2TCw0RUFGN0w7QUFBQTtBQUcrSyw0RUFIL0s7QUFBQTtBQUl3Vyw0RUFKeFc7QUFBQTtBQUtrTiw0RUFMbE47QUFBQTtBQU1xSyw0RUFOcks7QUFBQTtBQUFBLEtBbkJGO0FBNkJFLDZFQTdCRjtBQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaENGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQ21JLDRFQURuSTtBQUFBO0FBRWlSLDRFQUZqUjtBQUFBO0FBQUEsS0FsQ0Y7QUF5Q0UsNkVBekNGO0FBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDOEwsNEVBRDlMO0FBQUE7QUFFd0UsNEVBRnhFO0FBQUE7QUFHOEgsNEVBSDlIO0FBQUE7QUFJa1AsNEVBSmxQO0FBQUE7QUFLOEksNEVBTDlJO0FBQUE7QUFNMkwsNEVBTjNMO0FBQUE7QUFPc0wsNEVBUHRMO0FBQUE7QUFRK0UsNEVBUi9FO0FBQUE7QUFTbUcsNEVBVG5HO0FBQUE7QUFVa0wsNEVBVmxMO0FBQUE7QUFXZ0osNEVBWGhKO0FBQUE7QUFZaVUsNEVBWmpVO0FBQUE7QUFBQSxLQS9DRjtBQWdFRSw2RUFoRUY7QUFtRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5FRjtBQXFFRTtBQUFBO0FBQUE7QUFBQTtBQUM4Riw0RUFEOUY7QUFBQTtBQUVnUiw0RUFGaFI7QUFBQTtBQUdzSiw0RUFIdEo7QUFBQTtBQUl3Viw0RUFKeFY7QUFBQTtBQUtvUSw0RUFMcFE7QUFBQTtBQUFBLEtBckVGO0FBK0VFLDZFQS9FRjtBQWtGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEZGO0FBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQzZHLDRFQUQ3RztBQUFBO0FBRStILDRFQUYvSDtBQUFBO0FBR3VJLDRFQUh2STtBQUFBO0FBSTBLLDRFQUoxSztBQUFBO0FBS3NRLDRFQUx0UTtBQUFBO0FBTXFSLDRFQU5yUjtBQUFBO0FBT3VSLDRFQVB2UjtBQUFBO0FBUTJFLDRFQVIzRTtBQUFBO0FBQUEsS0FwRkY7QUFpR0UsNkVBakdGO0FBb0dFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwR0Y7QUFzR0U7QUFBQTtBQUFBO0FBQUE7QUFDb0YsNEVBRHBGO0FBQUE7QUFFcUosNEVBRnJKO0FBQUE7QUFBQSxLQXRHRjtBQTZHRSw2RUE3R0Y7QUFnSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhIRjtBQWtIRTtBQUFBO0FBQUE7QUFBQTtBQUM2SSw0RUFEN0k7QUFBQTtBQUVxRyw0RUFGckc7QUFBQTtBQUdnSiw0RUFIaEo7QUFBQTtBQUk2Ryw0RUFKN0c7QUFBQTtBQUttRyw0RUFMbkc7QUFBQTtBQU1xSyw0RUFOcks7QUFBQTtBQU84Riw0RUFQOUY7QUFBQTtBQUFBLEtBbEhGO0FBNkhFLDZFQTdIRjtBQWdJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaElGO0FBa0lFO0FBQUE7QUFBQTtBQUFBO0FBQzBMLDRFQUQxTDtBQUFBO0FBRXNULDRFQUZ0VDtBQUFBO0FBR3NILDRFQUh0SDtBQUFBO0FBQUE7QUFsSUYsR0FERjtBQTJJRCxDQTdJRDs7QUErSUEsK0RBQWVBLHFCQUFmLEUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvamVjdFdlYXRoZXJTdGF0aW9uIGZyb20gXCJDb21wb25lbnRzL1Byb2plY3RXZWF0aGVyU3RhdGlvblwiXG5cblxuY29uc3QgUGVyc29uYWxQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2plY3RXZWF0aGVyU3RhdGlvbi8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxQcm9qZWN0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgUHJvamVjdFdlYXRoZXJTdGF0aW9uID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9qZWN0OiB3ZWF0aGVyIHN0YXRpb248L2gxPlxuXG4gICAgICA8c3BhY2UvPlxuXG4gICAgICA8aDM+SG93IEl0IFdvcmtzPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIEluIGdlbmVyYWwgdGhlIHByb2plY3QgaXMgYWJvdXQgYSBkZXZpY2UgKHRoZSB3ZWF0aGVyIHN0YXRpb24pIHBvd2VyIHN1cHBsaWVkIGJ5IGEgc29sYXIgcGFuZWwuPGJyLz5cbiAgICAgICAgVGhlIHN0YXRpb24gaGFzIHNlbnNvcnMgYW5kIGEgV2lGaSBtb2R1bGUuIFdpdGggdGhlIHNlbnNvcnMgaXQgbWVhc3VyZXMgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCBwcmVzc3VyZSwgZ2FzIGFuZCBsdW1pbm9zaXR5LiBBbmQgd2l0aCB0aGUgV2lGaSBtb2R1bGUgaXQgc2VuZHMgdGhlIGRhdGEgb25saW5lLjxici8+XG4gICAgICAgIEluIHBhcnRpY3VsYXIgdGhlIGlkZWEgaXMgdG8gc2VuZCB0aGUgZGF0YSB0byB0aGUgb25saW5lIGFwcGxpY2F0aW9uIHRoYXQgSSBtYWRlIGFuZCBkZXBsb3llZCB0byBBV1MsIHdoZXJlIHRoZXkgYXJlIHN0b3JlZCBvbiB0aGUgZGF0YWJhc2UuPGJyLz5cbiAgICAgICAgVGhlc2UgZGF0YSBpcyBjb25zdWx0YWJsZSB0aHJvdWdoIHRoZSB3ZWJzaXRlIHdoaWNoIGlzIGFjdHVhbGx5IHJlYWNoYWJsZSBhdCA8YSBocmVmPVwiaHR0cDovL3d3bG9hZGJhbGFuY2VyLTY1ODgzODE5Mi51cy13ZXN0LTIuZWxiLmFtYXpvbmF3cy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGlzIGFkZHJlc3M8L2E+ICh3aGVuIEnigJltIGRvaW5nIG1haW50ZW5hbmNlIG9uIHRoZSBkZXZpY2UgdGhlIGRhdGEgc3RvcHMgdXBkYXRpbmcpLlxuICAgICAgPC9wPlxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5XaHkgSSBkaWQgaXQ8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlcmUgYXJlIHNldmVyYWwgcmVhc29ucyB3aHkgSSBkZWNpZGVkIHRvIHN0YXJ0IHRoaXMgcHJvamVjdC48YnIvPlxuICAgICAgICBCdXQgc3RhcnRpbmcgd2l0aCB0aGUgbWFpbiBvbmUsIGl04oCZcyBiZWNhdXNlIEkgbmVlZGVkIGEgbG90IG9mIHRpbWUgdG8gZm9jdXMgb24gbGVhcm5pbmcgbmV3IHRoaW5ncyBhbmQgZ2V0IGRlZXBlciBrbm93bGVkZ2UgYWJvdXQgZGV2ZWxvcGluZyBkaXN0cmlidXRlZCBhcHBsaWNhdGlvbnMgdGhhdCBydW4gb24gc2VydmVycy48YnIvPlxuICAgICAgICBUbyBhY2hpZXZlIHRoYXQsIGluc3RlYWQgb2Ygc3R1ZHlpbmcganVzdCBmb3IgdGhlIHNha2Ugb2Ygc3R1ZHlpbmcsIEkgZGVjaWRlZCB0byBkaXJlY3RseSBhcHBseSB3aGF0IEkgbGVhcm50IG9uIHNvbWV0aGluZyByZWFsLCBmaW5hbGlzZWQgYW5kIHV0aWxpc2FibGUgYWxzbyBpbiB0aGUgZnV0dXJlLjxici8+XG4gICAgICAgIEluIHBhcnRpY3VsYXIsIEkgd2FudGVkIHRvIGhhdmUgYSBmdWxsIHJvdW5kIGtub3dsZWRnZSBhYm91dCB3ZWIgYXBwbGljYXRpb25zIHNpbmNlIGV2ZXJ5IHRpbWUgb25lIGpvaW5zIGEgbmV3IGRldiB0ZWFtIGhlIHN0YXJ0cyB3b3JraW5nIG9uIGEgcHJvamVjdCB0aGF04oCZcyBhbHJlYWR5IHN0YXJ0ZWQuIFNvLCB0aGlzIGhhcyBiZWVuIGEgZ29vZCBvY2Nhc2lvbiB0byBsZWFybiBob3cgdG8gc3RhcnQgYSBwcm9qZWN0IGZyb20gc2NyYXRjaC4gQW5kLCBmdXJ0aGVybW9yZSwgdG8gZGVlcGx5IHVuZGVyc3RhbmQgZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCBmcmFtZXdvcmtzIEkgYWxyZWFkeSBoYWQgZXhwZXJpZW5jZSB3aXRoLjxici8+XG4gICAgICAgIE90aGVyIHRoYW4gbGVhcm4gbmV3IHN0dWZmIGFib3V0IHByb2dyYW1taW5nIGFuZCBwcm9qZWN0IGNvbmZpZ3VyYXRpb24sIEkgd2FudGVkIHRvIGdldCBteSBoYW5kcyBkaXJ0eSB3aXRoIERldk9wcy4gU28gSSB3YW50ZWQgdG8gdHJ1bHkgdW5kZXJzdGFuZCBob3cgYSBjbG91ZCBiYXNlZCBhcHBsaWNhdGlvbiB3b3JrcyBhbmQgaG93IGl04oCZcyBjb25maWd1cmVkLjxici8+XG4gICAgICAgIEZpbmFsbHksIGl0IGhhZCBiZWVuIGEgbG9uZyB0aW1lIHNpbmNlIEkgd2FudGVkIHRvIGV4cGFuZCBteSBrbm93bGVkZ2UgYmV5b25kIGNvbXB1dGVyIHNjaWVuY2UgYW5kIHRoaXMgb25lIHdhcyBhIGdvb2Qgb2NjYXNpb24gdG8gbGVhcm4gdGhlIGJhc2ljcyBvZiBlbGVjdHJvbmljcy48YnIvPlxuICAgICAgICBUaGlzIHByb2plY3Qgbm90IG9ubHkgZ2F2ZSBtZSB0aGUgb3Bwb3J0dW5pdHkgdG8gbGVhcm4gYSBodWdlIGFtb3VudCBvZiBuZXcgdGVjaG5vbG9naWVzIGJ1dCBpdCdzIGFsc28gYSBwcm9qZWN0IHRoYXQgZ3Jvd3MgYWxvbmcgdGhlIHRpbWUgdGhhbmtzIHRvIHRoZSBkYWlseSBnYXRoZXJpbmcgb2YgZGF0YSBvZiB0aGUgc3RhdGlvbi4gU28gSeKAmW0gc3VyZSB0aGF0IEnigJlsbCBiZSBhYmxlIHRvIHVzZSBpdCBpbiB0aGUgZnV0dXJlIGZvciBmdXJ0aGVyIHN0dWRpZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPlRoZSBhcHBsaWNhdGlvbjwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgd2hvbGUgcHJvamVjdCBpcyBwb3NzaWJsZSB0byBiZSBzcGxpdCBpbnRvIHRocmVlIG1haW4gc2VjdGlvbnMuIFRoZSBwYXJ0IG9mIHRoZSBjbG91ZCwgdGhlIGFwcGxpY2F0aW9uIGFuZCB0aGUgaGFyZHdhcmUgcGFydC48YnIvPlxuICAgICAgICBUaGUgYXBwbGljYXRpb24gaXMgc3RydWN0dXJlZCBpbnRvIG1pY3JvIHNlcnZpY2VzLiBJbiBwYXJ0aWN1bGFyIG9uZSBvZiB0aGVtIHNlcnZlcyB0aGUgd2ViIGNsaWVudCBhbmQgdGhlIG90aGVyIG9uZSBoYXMgYSBSZXN0ZnVsIEFQSSB0byByZWNlaXZlIHRoZSBkYXRhIHNlbnQgYnkgdGhlIHdlYXRoZXIgc3RhdGlvbi4gVGhpcyBsYXN0IG9uZSBhbHNvIHN0b3JlcyB0aGUgZGF0YSBpbnRvIHRoZSBkYXRhYmFzZSBhbmQgc2VydmVzIHRoZW0gdG8gdGhlIHdlYiBjbGllbnQuPGJyLz5cbiAgICAgICAgQSBmdXR1cmUgb25lIG1pZ2h0IGJlIGEgbWljcm9zZXJ2aWNlIHdyaXR0ZW4gaW4gUHl0aG9uLCBkZWRpY2F0ZWQgdG8gd29ya2luZyB3aXRoIGJpZyBkYXRhLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuXG4gICAgICA8aDM+VGhlIGNsb3VkPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFNpbmNlIHRoZSBtYWluIGlkZWEgd2FzIHRvIGxlYXJuIGFzIG11c2ggYXMgcG9zc2libGUgYWJvdXQgQVdTLCBJIGVuZGVkIHVwIHdpdGggYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGluZnJhc3RydWN0dXJlIHRoYXQgaXMgbXVjaCBtb3JlIGNvbXBsaWNhdGVkIHRoYW4gdGhlIHJlYWwgbmVlZHMgb2YgbXkgYXBwbGljYXRpb24uPGJyLz5cbiAgICAgICAgVGhlIGVudGlyZSBhcHBsaWNhdGlvbiBydW5zIG9uIGEgcHJpdmF0ZSBjbG91ZCBvZiBBbWF6b24gV2ViIFNlcnZpY2VzLjxici8+XG4gICAgICAgIEFmdGVyIGEgZ2VuZXJhbCBpbnZlc3RpZ2F0aW9uIG9mIHRoZSB2YXJpb3VzIEFXUyBjb21wb25lbnRzLCBJIGRlY2lkZWQgdG8gdXNlIEVsYXN0aWMgQ29udGFpbmVyIFNlcnZpY2UgYW5kIENsb3VkIEZvcm1hdGlvbi48YnIvPlxuICAgICAgICBJIGRlY2lkZWQgdG8gdXNlIENsb3VkIEZvcm1hdGlvbiBhZnRlciBJIGhhZCB0byBkbyB3aXRoIHRoZSBqdW5nbGUgb2YgdGhlIGludGVyZmFjZSB0aGF0IEFXUyBwcmVzZW50cyB0byB0aGUgdXNlcnMuIEluIGZhY3QgSSBkZWZpbml0ZWx5IHByZWZlciB0byB3cml0ZSBhbGwgbXkgY29uZmlndXJhdGlvbiBpbnNpZGUgYSB0ZW1wbGF0ZSBmaWxlIGFuZCBnaXZlIGl0IHRvIENsb3VkIEZvcm1hdGlvbiB0byBiZSBidWlsdC48YnIvPlxuICAgICAgICBBbm90aGVyIHJlYXNvbiBpcyBiZWNhdXNlIGl0IGFsbG93cyBtZSB0byBlZGl0IHRoZSBjb25maWd1cmF0aW9uIG9mIGFueSBwYXJ0IG9mIHRoZSBjbG91ZCBzaW1wbHkgYnkgY2hhbmdpbmcgYSBjb3VwbGUgb2YgbGluZXMgb2YgdGhhdCBmaWxlLjxici8+XG4gICAgICAgIFRoZSBjbG91ZCBpcyBjb21wb3NlZCBieSB0d28gdDIuc21hbGwgRUMyIGluc3RhbmNlcyB0aGF0IGFyZSBkaXN0cmlidXRlZCBpbnRvIHR3byBhdmFpbGFiaWxpdHkgem9uZXMuIFRoZXNlIGFyZSBvcHRpbWlzZWQgdG8gYmUgdXNlZCB3aXRoIEVDUyBhbmQgaGF2ZSB0aGUgRUNTIGFnZW50IGluc3RhbGxlZCBpbnRvIHRoZW0uPGJyLz5cbiAgICAgICAgVGhleSBhcmUgcmVnaXN0ZXJlZCBpbnRvIGFuIEF1dG8gU2NhbGluZyBHcm91cCB0aGF0IG1haW50YWlucyBhIG1pbmltYWwgb2YgdHdvIGluc3RhbmNlcyBhbHdheXMgdXAgYW5kIHJ1bm5pbmcgYW5kIGEgbWF4aW11bSBvZiBmb3VyIGluc3RhbmNlcyB3aGVuIGl04oCZcyBuZWNlc3NhcnkgKHByb2JhYmx5IG5ldmVyKS48YnIvPlxuICAgICAgICBUaGUgdHJhZmZpYyBpcyBkaXN0cmlidXRlZCBieSB0d28gTG9hZCBCYWxhbmNlcnMsIG9uZSBmb3IgZWFjaCBtaWNybyBzZXJ2aWNlLjxici8+XG4gICAgICAgIEVDUyBpbml0aWFsaXNlIHR3byB0YXNrcyBmb3IgZWFjaCBtaWNybyBzZXJ2aWNlIGFuZCBkaXN0cmlidXRlcyB0aGVtIGV2ZW5seSB0byB0aGUgdHdvIGluc3RhbmNlcy48YnIvPlxuICAgICAgICBGdXJ0aGVybW9yZSBldmVyeSB0aW1lIHRoYXQgYSB0YXNrIGRvZXNu4oCZdCBhbnN3ZXIgYW55bW9yZSwgRUNTIGdldHMgaW4gYWN0aW9uIHRvIHN1YnN0aXR1dGUgaXQuIFRoaXMgaXMgYmVjYXVzZSBpdOKAmXMgc2V0IHRvIGhhdmUgYSBmaXhlZCBudW1iZXIgb2YgZGVzaXJlZCB0YXNrcyBhbHdheXMgcnVubmluZy48YnIvPlxuICAgICAgICBXaGVuIGl04oCZcyBuZWNlc3NhcnkgdG8gZGVwbG95IGEgbmV3IHZlcnNpb24gb2Ygb25lIG9mIHRoZSBtaWNybyBzZXJ2aWNlcywgdGhlIHJlc3BlY3RpdmUgZG9ja2VyIGltYWdlIGlzIHB1c2hlZCB0byBFbGFzdGljIENvbnRhaW5lciBSZWdpc3RyeS48YnIvPlxuICAgICAgICBUaGUgYXBwbGljYXRpb24gaXMgaGlnaGx5IGF2YWlsYWJsZSwgaW4gZmFjdCBkdXJpbmcgdGhlIGRlcGxveSB0aGVyZSBhcmUgbm8gZG93biB0aW1lcyBmb3IgdGhlIHVzZXJzIGJlY2F1c2UgRUNTIGl04oCZcyBjb25maWd1cmVkIGluIGEgd2F5IHRoYXQgdGhlIG5ldyB0YXNrcyB3aXRoIHRoZSBuZXcgdmVyc2lvbiBvbiB0aGVtIGFyZSBpbml0aWFsaXNlZCBhbmQgb25seSBhZnRlciB0aGF0IEVDUyBzdGFydHMgdG8gZHJhaW4gdGhlIHRyYWZmaWMgZnJvbSB0aGUgb3RoZXIgdHdvIHRhc2tzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIGRlbGV0ZWQgYXQgdGhlIGVuZC48YnIvPlxuICAgICAgICBUaGUgQ2xvdWQgRm9ybWF0aW9uIHRlbXBsYXRlIGRlZmluZXMgYWxzbyBhIHRhYmxlIHRoYXTigJlzIGNyZWF0ZWQgb24gRHluYW1vRGIgd2hlcmUgYXJlIGdvaW5nIHRvIGJlIHN0b3JlZCBhbGwgdGhlIGF0bW9zcGhlcmljIG1lYXN1cmVtZW50cy5cbiAgICAgIDwvcD5cblxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5BdXRvbWF0aW9uIGRlcGxveW1lbnQ8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgQW4gYXNwZWN0IG9mIHRoZSBwcm9qZWN0IEkgd2FzIHBhcnRpY3VsYXJseSBpbnRlcmVzdGVkIGluLCB3YXMgdGhlIGF1dG9tYXRpb24gb2YgdGhlIGRlcGxveS48YnIvPlxuICAgICAgICBCb3RoIGNvZGViYXNlcyBvZiB0aGUgdHdvIG1pY3JvIHNlcnZpY2VzIGFyZSBvbiBHaXRIdWIuIEZvciBub3cgdGhlIHdob2xlIGNvZGUgaXMgZGV2ZWxvcGVkIG9uIG9uZSBzaW5nbGUgYnJhbmNoIChtYXN0ZXIpIGJlY2F1c2UgdGhlIGFwcGxpY2F0aW9uIGlzIHN0aWxsIHNtYWxsLCBpdOKAmXMgbm90IHB1YmxpYyAob3RoZXIgdGhlbiB0aGUgcHVibGljIEROUyBvZiB0aGUgTG9hZCBCYWxhbmNlcikgYW5kIGJlY2F1c2UgSeKAmW0gdGhlIG9ubHkgb25lIHdvcmtpbmcgb24gaXQuPGJyLz5cbiAgICAgICAgQXMgc29mdHdhcmUgZm9yIENvbnRpbnVvdXMgSW50ZWdyYXRpb24gSSBjaG9zZSBTZW1hcGhvcmVDSSBiZWNhdXNlIEkgaGFkIGEgcHJldmlvdXMgZXhwZXJpZW5jZSAgd2l0aCBpdCBhbmQgYmVjYXVzZSBpdCBhbGxvd3MgbWUgdG8gZGVwbG95IG1hbnVhbGx5Ljxici8+XG4gICAgICAgIEV2ZXJ5IHRpbWUgdGhlcmXigJlzIGEgY29tbWl0IG9mIHNvbWV0aGluZyB0byBHaXRIdWIsIFNlbWFwaG9yZUNJIGlzIGNvbmZpZ3VyZWQgdG8gYXV0b21hdGljYWxseSBzdGFydCB0byBleGVjdXRlIHRoZSB0ZXN0cyBhbmQsIGlmIHRoZXkgcGFzcywgdG8gYnVpbGQgIHRoZSBmcm9udCBlbmQuIEZpbmFsbHksIGl0IGNyZWF0ZXMgdGhlIGRvY2tlciBpbWFnZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHB1c2hlcyB0aGUgaW1hZ2UgdG8gQVdTIEVsYXN0aWMgQ29udGFpbmVyIFJlZ2lzdHJ5LiBBZnRlciB0aGF0LCBpdCByZXF1ZXN0cyB0aGUgdXBkYXRlIG9mIHRoZSBDbG91ZCBGb3JtYXRpb24gc3RhY2suPGJyLz5cbiAgICAgICAgQ2xvdWQgRm9ybWF0aW9uIHVwZGF0ZXMgdGhlIHN0YWNrIHdpdGggdGhlIG5ldyBpbmRpY2F0aW9ucyBmcm9tIHRoZSB0ZW1wbGF0ZSBhbmQga2VlcHMgdGhlIG9sZCBvbmVzIHVuY2hhbmdlZC4gSW4gdGhpcyBjYXNlLCBvbmx5IHRoZSB1cmwgb2YgdGhlIGltYWdlIGhhcyBjaGFuZ2VkLCBzbyBDbG91ZCBGb3JtYXRpb24gd2lsbCBvbmx5IHVwZGF0ZSB0aGUgdGFza3MgdGhhdCBhcmUgcnVubmluZyB0aGUgY29udGFpbmVycyB3aXRoIHRoaXMgaW1hZ2UuPGJyLz5cbiAgICAgICAgVGhlIGRlcGxveSBoYXBwZW5zIGluIGEgd2F5IHRoYXQgdGhlIHNlcnZpY2Ugc3RheXMgYXZhaWxhYmxlIGFsbCB0aGUgdGltZS4gVGhpcyBoYXBwZW5zIGJlY2F1c2UgdGhlIExvYWQgQmFsYW5jZXIgZGlyZWN0cyBhbGwgdGhlIHRyYWZmaWMgdG8gdGhlIG5ldyB0YXNrcyB3aGVyZSB0aGUgbmV3IHZlcnNpb24gaXMgcnVubmluZy4gVGhlbiwgaXQgZHJhaW5zIHRoZSB0d28gb2xkIHRhc2tzLiBBbmQsIGV2ZW50dWFsbHksIGl0IHRlcm1pbmF0ZXMgdGhlbS5cbiAgICAgIDwvcD5cblxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5UaGUgd2ViIGNsaWVudDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUbyBjb25zb2xpZGF0ZSBteSBrbm93bGVkZ2UgYWJvdXQgdGhlIGZyb250IGVuZCBJIGRlY2lkZWQgdG8gc3RhcnQgZnJvbSBzY3JhdGNoIGEgamF2YXNjcmlwdCBiYXNlZCBwcm9qZWN0Ljxici8+XG4gICAgICAgIFRoaXMgYWxzbyBhbGxvd2VkIG1lIHRvIG1ha2UgcHVibGljIHRoZSBkYXRhIGdhdGhlcmVkIGZyb20gdGhlIHdlYXRoZXIgc3RhdGlvbiBhbmQgdG8gc2hvdyB0byBpdCB0aHJvdWdoIGdyYXBocyBvbiBhIHdlYnBhZ2UuPGJyLz5cbiAgICAgICAgTXkgY2hvc2VuIHRlY2hub2xvZ2llcyB0byByZWFsaXNlIHRoZSBhcHBsaWNhdGlvbiBoYXZlIGJlZW4gUmVhY3RKcyB3aXRoIFJlZHV4LCBucG0gYXMgcGFja2FnZSBtYW5hZ2VyIGFuZCB3ZWJwYWNrIGFzIG1vZHVsZSBidW5kbGVyLjxici8+XG4gICAgICAgIFdlYnBhY2sgYWxsb3dzIHRoZSB3ZWJzaXRlIHRvIGJlIGNvbXBpbGVkIGluIGEgd2F5IHRoYXTigJlzIHZlcnkgcGVyZm9ybWFudC4gSW4gZmFjdCBpdCBtaW5pbWlzZXMgdGhlIGNvZGUsIHNwbGl0cyBpdCBpbiBtb2R1bGVzIGFuZCBjb21waWxlcyBvbmx5IHRoZSBjb2RlIGFjdHVhbGx5IHVzZWQuPGJyLz5cbiAgICAgICAgRm9yIHRoZSBmcm9udCBlbmQgSSBkZWNpZGVkIHRvIGNyZWF0ZSBhIFNpbmdsZSBQYWdlIEFwcGxpY2F0aW9uLiBGb3IgdGhpcyBwdXJwb3NlIHdlYnBhY2sgZHluYW1pY2FsbHkgY3JlYXRlcyB0aGUgaW5kZXggcGFnZSBmcm9tIGEgdGVtcGxhdGUgdGhhdCBJIGdpdmUgdG8gaXQuIFRoZSBzZXJ2ZXIgc2VydmVzIHRoaXMgaHRtbCBwYWdlIHdpdGggdGhlIGluaXRpYWwgYXNzZXRzIChpbWFnZXMgYW5kIGZvbnRzKSBhbmQgYSBqYXZhc2NyaXB0IGJ1bmRsZS48YnIvPlxuICAgICAgICBBZnRlciB0aGF0LCBlYWNoIHBhZ2UgYW5kIGVhY2ggYXNzZXQgaXMgZG93bmxvYWRlZCBvbiB0aGUgZmx5IHdoZW4gaXTigJlzIHJlcXVlc3RlZCBieSB0aGUgdXNlciBicm93c2VyLiBUaGlzIGFsbG93cyB0aGUgZmlyc3QgbG9hZCB0byBiZSBtdWNoIGxpZ2h0ZXIgYW5kIGZhc3QuIEluIGZhY3QsIGFmdGVyIHRoYXQgZWFjaCBwYWdlIGlzIHZpc2l0ZWQsIHRoZSBlbnRpcmUgYXBwbGljYXRpb24gaXMgZG93bmxvYWRlZCBhbmQgdGhlIG5hdmlnYXRpb24gYmVjb21lIHZlcnkgZmx1aWQuPGJyLz5cbiAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGlzIHJlZ2lzdGVyZWQgdG8gYSBzZXJ2aWNlIHdvcmtlciB0aGF0IGZvciBub3cgd29ya3Mgb25seSB3aXRoIEdvb2dsZSBDaHJvbWUgYmVjYXVzZSBpdOKAmXMgYSB0ZWNobm9sb2d5IHRoYXTigJlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQgb24gdGhlIG90aGVyIGJyb3dzZXJzLiBUaGlzIGZlYXR1cmUgaXMgcGFydGljdWxhcmx5IHNhdGlzZnlpbmcgYmVjYXVzZSBJIG5ldmVyIGhhZCB0cmllZCBpdCBiZWZvcmUgYW5kIGl0IGFjdHVhbGx5IHdvcmtzIHZlcnkgd2VsbC48YnIvPlxuICAgICAgICBTbyB0aGUgYXBwbGljYXRpb24gaXMgdXNhYmxlIGFsc28gb2ZmbGluZSBvbmx5IHdoZW4gYnJvd3Npbmcgd2l0aCBDaHJvbWUuPGJyLz5cbiAgICAgICAgVGhlIENTUyBjb2RlIGlzIHdyaXR0ZW4gdXNpbmcgU2Fzcy5cbiAgICAgIDwvcD5cblxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5TZXJ2ZXIgc2lkZTwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgc2VydmVyIHNpZGUgYXBwbGljYXRpb24gaXMgbWFkZSBieSB0d28gbWljcm8gc2VydmljZXMgdGhhdCBJIGtlcHQgdmVyeSBzaW1wbGUuPGJyLz5cbiAgICAgICAgT25lIG9mIHRoZW0gc2VydmVzIGEgU2luZ2xlIFBhZ2UgQXBwbGljYXRpb24gdG8gdGhlIGJyb3dzZXJzIGFuZCBpdOKAmXMgd3JpdHRlbiB3aXRoIHRoZSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGxhbmd1YWdlIFNjYWxhIG9uIHRoZSBmcmFtZXdvcmsgUGxheS48YnIvPlxuICAgICAgICBUaGUgb3RoZXIgb25lIHNlcnZlcyBhIFJlc3RmdWwgQVBJIGFuZCBjb21tdW5pY2F0ZXMgd2l0aCB0aGUgd2VhdGhlciBzdGF0aW9uIHJlY2VpdmluZyB0aGUgZGF0YSBhbmQgc3RvcmluZyBpdCB0byB0aGUgRHluYW1vREIgZGF0YWJhc2UuIEZ1cnRoZXJtb3JlIGl0IHNlcnZlcyB0aGlzIGRhdGEgdG8gdGhlIHdlYiBjbGllbnQgd2hlbiByZXF1ZXN0ZWQuIEFsc28gdGhpcyBvbmUgaXMgbWFkZSB3aXRoIFNjYWxhIGJ1dCB0aGUgZnJhbWV3b3JrIGlzIEFra2EgSHR0cC5cbiAgICAgIDwvcD5cblxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5UaGUgaGFyZHdhcmU8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIGRldmljZSB3YXMgaW5pdGlhbGx5IGRlc2lnbmVkIHRvIHVzZSBBcmR1aW5vIGFzIGEgbWFpbiBib2FyZC4gQWZ0ZXIgYSB3aGlsZSBJIHRoZW4gcHJlZmVycmVkIHRvIHN3aXRjaCB0byBhbm90aGVyIGJvYXJkLCBOb2RlTWN1IEFtaWNhLjxici8+XG4gICAgICAgIFRoZSBkZXZpY2UgaGFzIGRpZmZlcmVudCBzZW5zb3JzLiBUaGV5IG1lYXN1cmUgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCBwcmVzc3VyZSwgZ2FzIGFuZCBsdW1pbm9zaXR5Ljxici8+XG4gICAgICAgIFRoZSBzZW5zb3JzIGFyZSB3aXJlZCB0byBhbmQgaGFuZGxlZCBieSB0aGUgbWFpbiBib2FyZCB3aGljaCBoYXMgYSBtaWNyb3Byb2Nlc3NvciBwcm9ncmFtbWVkIGJ5IG1lIHRvIHJlYWQgdGhlIGRhdGEgYW5kIHNlbmQgaXQgdG8gdGhlIHNlcnZlci48YnIvPlxuICAgICAgICBUaGUgZGV2aWNlIGhhcyBhIFdpRmkgbW9kdWxlIHRoYXQgc2VuZHMgdGhlIGRhdGEgdG8gdGhlIGFwcGxpY2F0aW9uIHRoYXQgcnVucyBvbiBBV1Mgd2hlcmUgdGhleSBhcmUgc3RvcmVkLjxici8+XG4gICAgICAgIFNpbmNlIHRoZSBzdGF0aW9uIGhhcyB0byBiZSBpbnN0YWxsZWQgb3V0ZG9vciwgdGhlIGRldmljZSBoYXMgYSBiYXR0ZXJ5IHRoYXQgbWFrZXMgaXQgYXV0b25vbW91cy48YnIvPlxuICAgICAgICBJbiBvcmRlciB0byBiZSBtb3JlIGR1cmFibGUgd2l0aG91dCBjaGFuZ2luZyB0aGUgYmF0dGVyeSBhbmQgd29ya2luZyBvdmVybmlnaHQsIGEgc29sYXIgcGFuZWwgaXMgYXR0YWNoZWQgdG8gaXQgYW5kIHByb3ZpZGVzIHRoZSBlbGVjdHJpY2l0eSB0byBjaGFyZ2UgdGhlIGJhdHRlcnkuPGJyLz5cbiAgICAgICAgSW5pdGlhbGx5IHRoZSBkZXZpY2UgY29uc3VtZWQgYW4gYW1vdW50IG9mIGVuZXJneSB2ZXJ5IGhpZ2ggdG8gYmUgcHJvdmlkZWQganVzdCB2aWEgYmF0dGVyeS48YnIvPlxuICAgICAgICBUbyBtYWtlIHRoZSBkZXZpY2UgbXVjaCBzbWFsbGVyIGFuZCB0byBjb25zdW1lIGxlc3MgZWxlY3RyaWNpdHkgSSByZW1vdmVkIHRoZSBBcmR1aW5vIGNvbXBvbmVudCBhbmQgSSBpbXBsZW1lbnRlZCB2YXJpb3VzIHNvbHV0aW9ucyBhdCBtaWNyb3Byb2Nlc3NvciBsZXZlbC5cbiAgICAgIDwvcD5cblxuICAgICAgPHNwYWNlLz5cblxuXG4gICAgICA8aDM+RnV0dXJlIGRldmVsb3BtZW50PC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIEFwYXJ0IGZyb20gbGVhcm5pbmcgYW5kIGdldCBkZWVwZXIga25vd2xlZGdlIG9uIGNvbXB1dGVyIHNjaWVuY2UgSSBjcmVhdGVkIHRoaXMgZGV2aWNlIGFuZCBhcHBsaWNhdGlvbiBhbHNvIHRvIGhhdmUgYSBzb2xpZCBhbmQgY29uY3JldGUgYmFzZSBmb3IgZnV0dXJlIGRldmVsb3BtZW50cyBhbmQgbmV3IGxlYXJuaW5ncy48YnIvPlxuICAgICAgICBUaGUgZGV2aWNlIHdpbGwga2VlcCBnYXRoZXJpbmcgYW5kIHN0b3JpbmcgYW4gYW1vdW50IG9mIGRhdGEgYWJvdXQgdGhlIHdlYXRoZXIgZGFpbHkuIE9uIHRoZSBsb25nIHBlcmlvZCBJ4oCZbGwgaGF2ZSBzdWZmaWNpZW50IGRhdGEgdG8gYmUgYWJsZSB0byBtYWtlIG9wZXJhdGlvbnMgd2l0aCBiaWcgZGF0YSBhbmQgc28gdG8gZXhwbG9yZSBuZXcgY29ybmVycyBvZiB0aGUgY29tcHV0ZXIgc2NpZW5jZSBhbmQgbGVhcm4gbmV3IHByb2dyYW1taW5nIGxhbmd1YWdlcyBsaWtlIFB5dGhvbiwgZnJhbWV3b3JrcyBhbmQgYmlnIGRhdGEgdG9vbHMuPGJyLz5cbiAgICAgICAgVG8gaGF2ZSBhIGJpZyBiYXNlIG9mIGRhdGEgZ2l2ZXMgbWUgb3RoZXIgaWRlYXMuIEZvciBleGFtcGxlIHJlZ2FyZGluZyBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBhbmQgbWFjaGluZSBsZWFybmluZy48YnIvPlxuICAgICAgICBUaGUgcHJvamVjdCBjYW4gYmUgdXNlZCBhbHNvIHRvIGNyb3NzIHRoZSBkYXRhIG9mIHRoZSB2YXJpb3VzIG1lYXN1cmVtZW50cyB0byBnZXQgaW50ZXJlc3RpbmcgYXNzdW1wdGlvbnMgYW5kIHRvIHN0dWR5IHNvbWUgbG9jYWwgY2xpbWF0ZSBwaGVub21lbmEuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFdlYXRoZXJTdGF0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9