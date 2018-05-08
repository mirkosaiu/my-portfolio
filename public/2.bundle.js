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
      "In general the project is about a device (the weather station) power supplied by a solar panel. The station has sensors and a WiFi module. With the sensors it measures temperature, humidity, pressure, gas and luminosity. And with the WiFi module it sends the data online.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "In particular the data is sent to the application I made and deployed to AWS, where they are stored on the database.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "These data is consultable through the website which is actually reachable at this address: ",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        { href: "http://wwloadbalancer-658838192.us-west-2.elb.amazonaws.com", target: "_blank" },
        "here"
      ),
      ".",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "If the data doesn\u2019t update it\u2019s because I\u2019m doing some maintenance on the device."
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
      "In particular, I wanted to have a full round knowledge about web applications since every time one joins a new dev team he starts working on a project that\u2019s already started.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "So, this has been a good occasion to learn how to start a project from scratch. Furthermore to deeply understand front end and back end frameworks I already had experience with.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Other than learn new stuff about programming and project configuration, I wanted to get my hands dirty with DevOps. So I wanted to truly understand how a cloud based application works and how it\u2019s configured.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Finally, it had been a long time since I wanted to expand my knowledge beyond computer science and this one was a good occasion to learn the basics of electronics.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "This project not only gave me the opportunity to learn a huge amount of new technologies but is also a project that grows along the time thanks to the daily gathering of data of the station. So I\u2019m sure that I\u2019ll be able to use it in the future for further studies."
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
      "The application is structured into micro services. In particular one of them serves the web client and the other one has a Restful API to receive the data sent by the weather station. This last one also stores the data into the database and serves them to the web client."
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
      "Since the main idea was the one to learn as mush as possible about AWS, I ended up with the implementation of an infrastructure that is much more complicated that the real needs of my application.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The entire application runs on a private cloud of Amazon Web Services.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "After a general investigation of the various AWS components, I decided to use the Elastic Container Service and Cloud Formation.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "I decided to use Cloud Formation after I had to do with the jungle of the interface that AWS presents. In fact I definitely prefer to write all my configuration inside a template file and give it to Cloud Formation to build.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Another reason is because it allows me to edit the configuration of any part of the cloud simply by changing a couple of line of that file.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The cloud is composed by two t2.small EC2 instances that are distributed into two availability zones. These are optimised to be used with ECS and have the ECS agent installed into them.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "They are registered into an Auto Scaling Group that maintains a minimal of two instances always up and running and a maximum of four instances when it\u2019s necessary (probably never).",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The traffic is distributed by two Load Balancers, one for each micro service.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "ECS initialise two tasks, for each micro service and distributes them evenly to the two instances.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Furthermore every time that a task doesn\u2019t answer anymore, ECS get in action to substitute it. This is because it\u2019s set to have a fixed number of desired tasks always running.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "When it\u2019s necessary to deploy a new version of one of the micro services, the respective docker image is pushed to Elastic Container Registry.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The application is highly available, in fact during the deploy there are no down times on the service because ECS it\u2019s configured in a way that the new tasks (2) with the new version on them are initialised and after that it starts to drain the traffic from the other two tasks that are going to be deleted at the end.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The Cloud Formation template defines also a table that\u2019s created on DynamoDb where are going to be store all the atmospheric measurements."
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
      "Both codebases of the two micro services are on GitHub. For now the whole code is developed on only one branch (master) because the application is still small, it\u2019s not public (other then the public DNS of the Load Balancer) and because I\u2019m the only one working on it.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "As software for Continuous Integration I chose SemaphoreCI because I had a previous experience  with it and because it allows me to deploy manually.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Every time there\u2019s a commit of something to GitHub, SemaphoreCI is configured to automatically start to execute the tests and, if they pass, to build  the front end. Finally, it creates the docker image of the application and pushes the image to AWS Elastic Container Registry. After the push it requests the update of the Cloud Formation stack.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Cloud Formation updates the stack with the new indications from the template, while keeping the old ones unchanged. In this case, only the url of the image has changed so it will only update the tasks that are running the container of this application.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The deploy happens in a way that the service stays available all the time. First of all the Load Balancer direct all the traffic to the new tasks where the new version is running. Then, it drains the two old tasks that are going to be terminated afterwards."
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
      "This also allowed me to make the data (gathered from the weather station) public and show them through graphs on a webpage.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "My chosen technologies to realise the application have been ReactJs with Redux, npm as packages manager and webpack as module bundler.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "Webpack allows the website to be compiled in a way that\u2019s very performant. In fact it minimises the code, splits it in modules and compiles only the code actually used.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "For the front end I decided to create a Single Page Application. For this purpose webpack dynamically creates the index page from a template.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "In a SPA the server serves this html page with the initial assets (images and fonts) and a javascript bundle.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "After that, each page and each asset is downloaded on the fly when it\u2019s requested by the user browser. This allows the first load to be much lighter and fast. In fact, after that each page is visited, the entire application is downloaded and the navigation become very fluid.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The CSS code is written using Sass.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "The application is registered to a service worker that for now works only with Google Chrome because it\u2019s a technology that\u2019s not yet implemented on the other browsers. This feature is particularly satisfying because I never had tried it before and it actually works very well.",
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
      "So the application is usable also offline only when browsing with Chrome."
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
      "The device will keep gathering and storing an amount of data about the weather daily. On the long period I\u2019ll have sufficient data to be able to make operations with big data and so to explore new corners of the computer science and learn new programming language like Python, frameworks and big data tools.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtY29tcG9uZW50cy9QZXJzb25hbFByb2plY3RzL1BlcnNvbmFsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LWNvbXBvbmVudHMvUHJvamVjdFdlYXRoZXJTdGF0aW9uLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsUHJvamVjdHMiLCJQcm9qZWN0V2VhdGhlclN0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUdBLE1BQU1BLG1CQUFtQixNQUFNO0FBQzdCLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQUMsd0VBQUQ7QUFERixHQURGO0FBS0QsQ0FORDs7QUFRQSwrREFBZUEsZ0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBR0EsTUFBTUMsd0JBQXdCLE1BQU07O0FBRWxDLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBR0UsNkVBSEY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTEY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUNpUiw0RUFEalI7QUFBQTtBQUVzSCw0RUFGdEg7QUFBQTtBQUc2RjtBQUFBO0FBQUEsVUFBRyxNQUFLLDZEQUFSLEVBQXNFLFFBQU8sUUFBN0U7QUFBQTtBQUFBLE9BSDdGO0FBQUE7QUFHNEwsNEVBSDVMO0FBQUE7QUFBQSxLQVBGO0FBY0UsNkVBZEY7QUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCRjtBQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUNnRSw0RUFEaEU7QUFBQTtBQUU2TCw0RUFGN0w7QUFBQTtBQUcrSyw0RUFIL0s7QUFBQTtBQUlnTCw0RUFKaEw7QUFBQTtBQUttTCw0RUFMbkw7QUFBQTtBQU1rTiw0RUFObE47QUFBQTtBQU9xSyw0RUFQcks7QUFBQTtBQUFBLEtBbkJGO0FBOEJFLDZFQTlCRjtBQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakNGO0FBbUNFO0FBQUE7QUFBQTtBQUFBO0FBQ21JLDRFQURuSTtBQUFBO0FBQUEsS0FuQ0Y7QUF5Q0UsNkVBekNGO0FBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDc00sNEVBRHRNO0FBQUE7QUFFd0UsNEVBRnhFO0FBQUE7QUFHa0ksNEVBSGxJO0FBQUE7QUFJa08sNEVBSmxPO0FBQUE7QUFLNkksNEVBTDdJO0FBQUE7QUFNMkwsNEVBTjNMO0FBQUE7QUFPc0wsNEVBUHRMO0FBQUE7QUFRK0UsNEVBUi9FO0FBQUE7QUFTb0csNEVBVHBHO0FBQUE7QUFVaUwsNEVBVmpMO0FBQUE7QUFXZ0osNEVBWGhKO0FBQUE7QUFZZ1UsNEVBWmhVO0FBQUE7QUFBQSxLQS9DRjtBQWdFRSw2RUFoRUY7QUFtRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5FRjtBQXFFRTtBQUFBO0FBQUE7QUFBQTtBQUM4Riw0RUFEOUY7QUFBQTtBQUU4USw0RUFGOVE7QUFBQTtBQUdzSiw0RUFIdEo7QUFBQTtBQUkyViw0RUFKM1Y7QUFBQTtBQUs4UCw0RUFMOVA7QUFBQTtBQUFBLEtBckVGO0FBK0VFLDZFQS9FRjtBQWtGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEZGO0FBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQzZHLDRFQUQ3RztBQUFBO0FBRTZILDRFQUY3SDtBQUFBO0FBR3dJLDRFQUh4STtBQUFBO0FBSTBLLDRFQUoxSztBQUFBO0FBSytJLDRFQUwvSTtBQUFBO0FBTStHLDRFQU4vRztBQUFBO0FBT3FSLDRFQVByUjtBQUFBO0FBUXFDLDRFQVJyQztBQUFBO0FBU3VSLDRFQVR2UjtBQUFBO0FBQUEsS0FwRkY7QUFrR0UsNkVBbEdGO0FBcUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyR0Y7QUF1R0U7QUFBQTtBQUFBO0FBQUE7QUFDb0YsNEVBRHBGO0FBQUE7QUFFcUosNEVBRnJKO0FBQUE7QUFBQSxLQXZHRjtBQThHRSw2RUE5R0Y7QUFpSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpIRjtBQW1IRTtBQUFBO0FBQUE7QUFBQTtBQUM2SSw0RUFEN0k7QUFBQTtBQUVxRyw0RUFGckc7QUFBQTtBQUdnSiw0RUFIaEo7QUFBQTtBQUk2Ryw0RUFKN0c7QUFBQTtBQUttRyw0RUFMbkc7QUFBQTtBQU1xSyw0RUFOcks7QUFBQTtBQU84Riw0RUFQOUY7QUFBQTtBQUFBLEtBbkhGO0FBOEhFLDZFQTlIRjtBQWlJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaklGO0FBbUlFO0FBQUE7QUFBQTtBQUFBO0FBQzBMLDRFQUQxTDtBQUFBO0FBRXFULDRFQUZyVDtBQUFBO0FBR3NILDRFQUh0SDtBQUFBO0FBQUE7QUFuSUYsR0FERjtBQTRJRCxDQTlJRDs7QUFnSkEsK0RBQWVBLHFCQUFmLEUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvamVjdFdlYXRoZXJTdGF0aW9uIGZyb20gXCJDb21wb25lbnRzL1Byb2plY3RXZWF0aGVyU3RhdGlvblwiXG5cblxuY29uc3QgUGVyc29uYWxQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb2plY3RXZWF0aGVyU3RhdGlvbi8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxQcm9qZWN0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgUHJvamVjdFdlYXRoZXJTdGF0aW9uID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9qZWN0OiB3ZWF0aGVyIHN0YXRpb248L2gxPlxuXG4gICAgICA8c3BhY2UvPlxuXG4gICAgICA8aDM+SG93IEl0IFdvcmtzPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIEluIGdlbmVyYWwgdGhlIHByb2plY3QgaXMgYWJvdXQgYSBkZXZpY2UgKHRoZSB3ZWF0aGVyIHN0YXRpb24pIHBvd2VyIHN1cHBsaWVkIGJ5IGEgc29sYXIgcGFuZWwuIFRoZSBzdGF0aW9uIGhhcyBzZW5zb3JzIGFuZCBhIFdpRmkgbW9kdWxlLiBXaXRoIHRoZSBzZW5zb3JzIGl0IG1lYXN1cmVzIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgcHJlc3N1cmUsIGdhcyBhbmQgbHVtaW5vc2l0eS4gQW5kIHdpdGggdGhlIFdpRmkgbW9kdWxlIGl0IHNlbmRzIHRoZSBkYXRhIG9ubGluZS48YnIvPlxuICAgICAgICBJbiBwYXJ0aWN1bGFyIHRoZSBkYXRhIGlzIHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uIEkgbWFkZSBhbmQgZGVwbG95ZWQgdG8gQVdTLCB3aGVyZSB0aGV5IGFyZSBzdG9yZWQgb24gdGhlIGRhdGFiYXNlLjxici8+XG4gICAgICAgIFRoZXNlIGRhdGEgaXMgY29uc3VsdGFibGUgdGhyb3VnaCB0aGUgd2Vic2l0ZSB3aGljaCBpcyBhY3R1YWxseSByZWFjaGFibGUgYXQgdGhpcyBhZGRyZXNzOiA8YSBocmVmPVwiaHR0cDovL3d3bG9hZGJhbGFuY2VyLTY1ODgzODE5Mi51cy13ZXN0LTIuZWxiLmFtYXpvbmF3cy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPi48YnIvPlxuICAgICAgICBJZiB0aGUgZGF0YSBkb2VzbuKAmXQgdXBkYXRlIGl04oCZcyBiZWNhdXNlIEnigJltIGRvaW5nIHNvbWUgbWFpbnRlbmFuY2Ugb24gdGhlIGRldmljZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHNwYWNlLz5cblxuXG4gICAgICA8aDM+V2h5IEkgZGlkIGl0PC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZXJlIGFyZSBzZXZlcmFsIHJlYXNvbnMgd2h5IEkgZGVjaWRlZCB0byBzdGFydCB0aGlzIHByb2plY3QuPGJyLz5cbiAgICAgICAgQnV0IHN0YXJ0aW5nIHdpdGggdGhlIG1haW4gb25lLCBpdOKAmXMgYmVjYXVzZSBJIG5lZWRlZCBhIGxvdCBvZiB0aW1lIHRvIGZvY3VzIG9uIGxlYXJuaW5nIG5ldyB0aGluZ3MgYW5kIGdldCBkZWVwZXIga25vd2xlZGdlIGFib3V0IGRldmVsb3BpbmcgZGlzdHJpYnV0ZWQgYXBwbGljYXRpb25zIHRoYXQgcnVuIG9uIHNlcnZlcnMuPGJyLz5cbiAgICAgICAgVG8gYWNoaWV2ZSB0aGF0LCBpbnN0ZWFkIG9mIHN0dWR5aW5nIGp1c3QgZm9yIHRoZSBzYWtlIG9mIHN0dWR5aW5nLCBJIGRlY2lkZWQgdG8gZGlyZWN0bHkgYXBwbHkgd2hhdCBJIGxlYXJudCBvbiBzb21ldGhpbmcgcmVhbCwgZmluYWxpc2VkIGFuZCB1dGlsaXNhYmxlIGFsc28gaW4gdGhlIGZ1dHVyZS48YnIvPlxuICAgICAgICBJbiBwYXJ0aWN1bGFyLCBJIHdhbnRlZCB0byBoYXZlIGEgZnVsbCByb3VuZCBrbm93bGVkZ2UgYWJvdXQgd2ViIGFwcGxpY2F0aW9ucyBzaW5jZSBldmVyeSB0aW1lIG9uZSBqb2lucyBhIG5ldyBkZXYgdGVhbSBoZSBzdGFydHMgd29ya2luZyBvbiBhIHByb2plY3QgdGhhdOKAmXMgYWxyZWFkeSBzdGFydGVkLjxici8+XG4gICAgICAgIFNvLCB0aGlzIGhhcyBiZWVuIGEgZ29vZCBvY2Nhc2lvbiB0byBsZWFybiBob3cgdG8gc3RhcnQgYSBwcm9qZWN0IGZyb20gc2NyYXRjaC4gRnVydGhlcm1vcmUgdG8gZGVlcGx5IHVuZGVyc3RhbmQgZnJvbnQgZW5kIGFuZCBiYWNrIGVuZCBmcmFtZXdvcmtzIEkgYWxyZWFkeSBoYWQgZXhwZXJpZW5jZSB3aXRoLjxici8+XG4gICAgICAgIE90aGVyIHRoYW4gbGVhcm4gbmV3IHN0dWZmIGFib3V0IHByb2dyYW1taW5nIGFuZCBwcm9qZWN0IGNvbmZpZ3VyYXRpb24sIEkgd2FudGVkIHRvIGdldCBteSBoYW5kcyBkaXJ0eSB3aXRoIERldk9wcy4gU28gSSB3YW50ZWQgdG8gdHJ1bHkgdW5kZXJzdGFuZCBob3cgYSBjbG91ZCBiYXNlZCBhcHBsaWNhdGlvbiB3b3JrcyBhbmQgaG93IGl04oCZcyBjb25maWd1cmVkLjxici8+XG4gICAgICAgIEZpbmFsbHksIGl0IGhhZCBiZWVuIGEgbG9uZyB0aW1lIHNpbmNlIEkgd2FudGVkIHRvIGV4cGFuZCBteSBrbm93bGVkZ2UgYmV5b25kIGNvbXB1dGVyIHNjaWVuY2UgYW5kIHRoaXMgb25lIHdhcyBhIGdvb2Qgb2NjYXNpb24gdG8gbGVhcm4gdGhlIGJhc2ljcyBvZiBlbGVjdHJvbmljcy48YnIvPlxuICAgICAgICBUaGlzIHByb2plY3Qgbm90IG9ubHkgZ2F2ZSBtZSB0aGUgb3Bwb3J0dW5pdHkgdG8gbGVhcm4gYSBodWdlIGFtb3VudCBvZiBuZXcgdGVjaG5vbG9naWVzIGJ1dCBpcyBhbHNvIGEgcHJvamVjdCB0aGF0IGdyb3dzIGFsb25nIHRoZSB0aW1lIHRoYW5rcyB0byB0aGUgZGFpbHkgZ2F0aGVyaW5nIG9mIGRhdGEgb2YgdGhlIHN0YXRpb24uIFNvIEnigJltIHN1cmUgdGhhdCBJ4oCZbGwgYmUgYWJsZSB0byB1c2UgaXQgaW4gdGhlIGZ1dHVyZSBmb3IgZnVydGhlciBzdHVkaWVzLlxuICAgICAgPC9wPlxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5UaGUgYXBwbGljYXRpb248L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIHdob2xlIHByb2plY3QgaXMgcG9zc2libGUgdG8gYmUgc3BsaXQgaW50byB0aHJlZSBtYWluIHNlY3Rpb25zLiBUaGUgcGFydCBvZiB0aGUgY2xvdWQsIHRoZSBhcHBsaWNhdGlvbiBhbmQgdGhlIGhhcmR3YXJlIHBhcnQuPGJyLz5cbiAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGlzIHN0cnVjdHVyZWQgaW50byBtaWNybyBzZXJ2aWNlcy4gSW4gcGFydGljdWxhciBvbmUgb2YgdGhlbSBzZXJ2ZXMgdGhlIHdlYiBjbGllbnQgYW5kIHRoZSBvdGhlciBvbmUgaGFzIGEgUmVzdGZ1bCBBUEkgdG8gcmVjZWl2ZSB0aGUgZGF0YSBzZW50IGJ5IHRoZSB3ZWF0aGVyIHN0YXRpb24uIFRoaXMgbGFzdCBvbmUgYWxzbyBzdG9yZXMgdGhlIGRhdGEgaW50byB0aGUgZGF0YWJhc2UgYW5kIHNlcnZlcyB0aGVtIHRvIHRoZSB3ZWIgY2xpZW50LlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuXG4gICAgICA8aDM+VGhlIGNsb3VkPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFNpbmNlIHRoZSBtYWluIGlkZWEgd2FzIHRoZSBvbmUgdG8gbGVhcm4gYXMgbXVzaCBhcyBwb3NzaWJsZSBhYm91dCBBV1MsIEkgZW5kZWQgdXAgd2l0aCB0aGUgaW1wbGVtZW50YXRpb24gb2YgYW4gaW5mcmFzdHJ1Y3R1cmUgdGhhdCBpcyBtdWNoIG1vcmUgY29tcGxpY2F0ZWQgdGhhdCB0aGUgcmVhbCBuZWVkcyBvZiBteSBhcHBsaWNhdGlvbi48YnIvPlxuICAgICAgICBUaGUgZW50aXJlIGFwcGxpY2F0aW9uIHJ1bnMgb24gYSBwcml2YXRlIGNsb3VkIG9mIEFtYXpvbiBXZWIgU2VydmljZXMuPGJyLz5cbiAgICAgICAgQWZ0ZXIgYSBnZW5lcmFsIGludmVzdGlnYXRpb24gb2YgdGhlIHZhcmlvdXMgQVdTIGNvbXBvbmVudHMsIEkgZGVjaWRlZCB0byB1c2UgdGhlIEVsYXN0aWMgQ29udGFpbmVyIFNlcnZpY2UgYW5kIENsb3VkIEZvcm1hdGlvbi48YnIvPlxuICAgICAgICBJIGRlY2lkZWQgdG8gdXNlIENsb3VkIEZvcm1hdGlvbiBhZnRlciBJIGhhZCB0byBkbyB3aXRoIHRoZSBqdW5nbGUgb2YgdGhlIGludGVyZmFjZSB0aGF0IEFXUyBwcmVzZW50cy4gSW4gZmFjdCBJIGRlZmluaXRlbHkgcHJlZmVyIHRvIHdyaXRlIGFsbCBteSBjb25maWd1cmF0aW9uIGluc2lkZSBhIHRlbXBsYXRlIGZpbGUgYW5kIGdpdmUgaXQgdG8gQ2xvdWQgRm9ybWF0aW9uIHRvIGJ1aWxkLjxici8+XG4gICAgICAgIEFub3RoZXIgcmVhc29uIGlzIGJlY2F1c2UgaXQgYWxsb3dzIG1lIHRvIGVkaXQgdGhlIGNvbmZpZ3VyYXRpb24gb2YgYW55IHBhcnQgb2YgdGhlIGNsb3VkIHNpbXBseSBieSBjaGFuZ2luZyBhIGNvdXBsZSBvZiBsaW5lIG9mIHRoYXQgZmlsZS48YnIvPlxuICAgICAgICBUaGUgY2xvdWQgaXMgY29tcG9zZWQgYnkgdHdvIHQyLnNtYWxsIEVDMiBpbnN0YW5jZXMgdGhhdCBhcmUgZGlzdHJpYnV0ZWQgaW50byB0d28gYXZhaWxhYmlsaXR5IHpvbmVzLiBUaGVzZSBhcmUgb3B0aW1pc2VkIHRvIGJlIHVzZWQgd2l0aCBFQ1MgYW5kIGhhdmUgdGhlIEVDUyBhZ2VudCBpbnN0YWxsZWQgaW50byB0aGVtLjxici8+XG4gICAgICAgIFRoZXkgYXJlIHJlZ2lzdGVyZWQgaW50byBhbiBBdXRvIFNjYWxpbmcgR3JvdXAgdGhhdCBtYWludGFpbnMgYSBtaW5pbWFsIG9mIHR3byBpbnN0YW5jZXMgYWx3YXlzIHVwIGFuZCBydW5uaW5nIGFuZCBhIG1heGltdW0gb2YgZm91ciBpbnN0YW5jZXMgd2hlbiBpdOKAmXMgbmVjZXNzYXJ5IChwcm9iYWJseSBuZXZlcikuPGJyLz5cbiAgICAgICAgVGhlIHRyYWZmaWMgaXMgZGlzdHJpYnV0ZWQgYnkgdHdvIExvYWQgQmFsYW5jZXJzLCBvbmUgZm9yIGVhY2ggbWljcm8gc2VydmljZS48YnIvPlxuICAgICAgICBFQ1MgaW5pdGlhbGlzZSB0d28gdGFza3MsIGZvciBlYWNoIG1pY3JvIHNlcnZpY2UgYW5kIGRpc3RyaWJ1dGVzIHRoZW0gZXZlbmx5IHRvIHRoZSB0d28gaW5zdGFuY2VzLjxici8+XG4gICAgICAgIEZ1cnRoZXJtb3JlIGV2ZXJ5IHRpbWUgdGhhdCBhIHRhc2sgZG9lc27igJl0IGFuc3dlciBhbnltb3JlLCBFQ1MgZ2V0IGluIGFjdGlvbiB0byBzdWJzdGl0dXRlIGl0LiBUaGlzIGlzIGJlY2F1c2UgaXTigJlzIHNldCB0byBoYXZlIGEgZml4ZWQgbnVtYmVyIG9mIGRlc2lyZWQgdGFza3MgYWx3YXlzIHJ1bm5pbmcuPGJyLz5cbiAgICAgICAgV2hlbiBpdOKAmXMgbmVjZXNzYXJ5IHRvIGRlcGxveSBhIG5ldyB2ZXJzaW9uIG9mIG9uZSBvZiB0aGUgbWljcm8gc2VydmljZXMsIHRoZSByZXNwZWN0aXZlIGRvY2tlciBpbWFnZSBpcyBwdXNoZWQgdG8gRWxhc3RpYyBDb250YWluZXIgUmVnaXN0cnkuPGJyLz5cbiAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGlzIGhpZ2hseSBhdmFpbGFibGUsIGluIGZhY3QgZHVyaW5nIHRoZSBkZXBsb3kgdGhlcmUgYXJlIG5vIGRvd24gdGltZXMgb24gdGhlIHNlcnZpY2UgYmVjYXVzZSBFQ1MgaXTigJlzIGNvbmZpZ3VyZWQgaW4gYSB3YXkgdGhhdCB0aGUgbmV3IHRhc2tzICgyKSB3aXRoIHRoZSBuZXcgdmVyc2lvbiBvbiB0aGVtIGFyZSBpbml0aWFsaXNlZCBhbmQgYWZ0ZXIgdGhhdCBpdCBzdGFydHMgdG8gZHJhaW4gdGhlIHRyYWZmaWMgZnJvbSB0aGUgb3RoZXIgdHdvIHRhc2tzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIGRlbGV0ZWQgYXQgdGhlIGVuZC48YnIvPlxuICAgICAgICBUaGUgQ2xvdWQgRm9ybWF0aW9uIHRlbXBsYXRlIGRlZmluZXMgYWxzbyBhIHRhYmxlIHRoYXTigJlzIGNyZWF0ZWQgb24gRHluYW1vRGIgd2hlcmUgYXJlIGdvaW5nIHRvIGJlIHN0b3JlIGFsbCB0aGUgYXRtb3NwaGVyaWMgbWVhc3VyZW1lbnRzLlxuICAgICAgPC9wPlxuXG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPkF1dG9tYXRpb24gZGVwbG95bWVudDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBBbiBhc3BlY3Qgb2YgdGhlIHByb2plY3QgSSB3YXMgcGFydGljdWxhcmx5IGludGVyZXN0ZWQgaW4sIHdhcyB0aGUgYXV0b21hdGlvbiBvZiB0aGUgZGVwbG95Ljxici8+XG4gICAgICAgIEJvdGggY29kZWJhc2VzIG9mIHRoZSB0d28gbWljcm8gc2VydmljZXMgYXJlIG9uIEdpdEh1Yi4gRm9yIG5vdyB0aGUgd2hvbGUgY29kZSBpcyBkZXZlbG9wZWQgb24gb25seSBvbmUgYnJhbmNoIChtYXN0ZXIpIGJlY2F1c2UgdGhlIGFwcGxpY2F0aW9uIGlzIHN0aWxsIHNtYWxsLCBpdOKAmXMgbm90IHB1YmxpYyAob3RoZXIgdGhlbiB0aGUgcHVibGljIEROUyBvZiB0aGUgTG9hZCBCYWxhbmNlcikgYW5kIGJlY2F1c2UgSeKAmW0gdGhlIG9ubHkgb25lIHdvcmtpbmcgb24gaXQuPGJyLz5cbiAgICAgICAgQXMgc29mdHdhcmUgZm9yIENvbnRpbnVvdXMgSW50ZWdyYXRpb24gSSBjaG9zZSBTZW1hcGhvcmVDSSBiZWNhdXNlIEkgaGFkIGEgcHJldmlvdXMgZXhwZXJpZW5jZSAgd2l0aCBpdCBhbmQgYmVjYXVzZSBpdCBhbGxvd3MgbWUgdG8gZGVwbG95IG1hbnVhbGx5Ljxici8+XG4gICAgICAgIEV2ZXJ5IHRpbWUgdGhlcmXigJlzIGEgY29tbWl0IG9mIHNvbWV0aGluZyB0byBHaXRIdWIsIFNlbWFwaG9yZUNJIGlzIGNvbmZpZ3VyZWQgdG8gYXV0b21hdGljYWxseSBzdGFydCB0byBleGVjdXRlIHRoZSB0ZXN0cyBhbmQsIGlmIHRoZXkgcGFzcywgdG8gYnVpbGQgIHRoZSBmcm9udCBlbmQuIEZpbmFsbHksIGl0IGNyZWF0ZXMgdGhlIGRvY2tlciBpbWFnZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHB1c2hlcyB0aGUgaW1hZ2UgdG8gQVdTIEVsYXN0aWMgQ29udGFpbmVyIFJlZ2lzdHJ5LiBBZnRlciB0aGUgcHVzaCBpdCByZXF1ZXN0cyB0aGUgdXBkYXRlIG9mIHRoZSBDbG91ZCBGb3JtYXRpb24gc3RhY2suPGJyLz5cbiAgICAgICAgQ2xvdWQgRm9ybWF0aW9uIHVwZGF0ZXMgdGhlIHN0YWNrIHdpdGggdGhlIG5ldyBpbmRpY2F0aW9ucyBmcm9tIHRoZSB0ZW1wbGF0ZSwgd2hpbGUga2VlcGluZyB0aGUgb2xkIG9uZXMgdW5jaGFuZ2VkLiBJbiB0aGlzIGNhc2UsIG9ubHkgdGhlIHVybCBvZiB0aGUgaW1hZ2UgaGFzIGNoYW5nZWQgc28gaXQgd2lsbCBvbmx5IHVwZGF0ZSB0aGUgdGFza3MgdGhhdCBhcmUgcnVubmluZyB0aGUgY29udGFpbmVyIG9mIHRoaXMgYXBwbGljYXRpb24uPGJyLz5cbiAgICAgICAgVGhlIGRlcGxveSBoYXBwZW5zIGluIGEgd2F5IHRoYXQgdGhlIHNlcnZpY2Ugc3RheXMgYXZhaWxhYmxlIGFsbCB0aGUgdGltZS4gRmlyc3Qgb2YgYWxsIHRoZSBMb2FkIEJhbGFuY2VyIGRpcmVjdCBhbGwgdGhlIHRyYWZmaWMgdG8gdGhlIG5ldyB0YXNrcyB3aGVyZSB0aGUgbmV3IHZlcnNpb24gaXMgcnVubmluZy4gVGhlbiwgaXQgZHJhaW5zIHRoZSB0d28gb2xkIHRhc2tzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHRlcm1pbmF0ZWQgYWZ0ZXJ3YXJkcy5cbiAgICAgIDwvcD5cblxuXG4gICAgICA8c3BhY2UvPlxuXG5cbiAgICAgIDxoMz5UaGUgd2ViIGNsaWVudDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBUbyBjb25zb2xpZGF0ZSBteSBrbm93bGVkZ2UgYWJvdXQgdGhlIGZyb250IGVuZCBJIGRlY2lkZWQgdG8gc3RhcnQgZnJvbSBzY3JhdGNoIGEgamF2YXNjcmlwdCBiYXNlZCBwcm9qZWN0Ljxici8+XG4gICAgICAgIFRoaXMgYWxzbyBhbGxvd2VkIG1lIHRvIG1ha2UgdGhlIGRhdGEgKGdhdGhlcmVkIGZyb20gdGhlIHdlYXRoZXIgc3RhdGlvbikgcHVibGljIGFuZCBzaG93IHRoZW0gdGhyb3VnaCBncmFwaHMgb24gYSB3ZWJwYWdlLjxici8+XG4gICAgICAgIE15IGNob3NlbiB0ZWNobm9sb2dpZXMgdG8gcmVhbGlzZSB0aGUgYXBwbGljYXRpb24gaGF2ZSBiZWVuIFJlYWN0SnMgd2l0aCBSZWR1eCwgbnBtIGFzIHBhY2thZ2VzIG1hbmFnZXIgYW5kIHdlYnBhY2sgYXMgbW9kdWxlIGJ1bmRsZXIuPGJyLz5cbiAgICAgICAgV2VicGFjayBhbGxvd3MgdGhlIHdlYnNpdGUgdG8gYmUgY29tcGlsZWQgaW4gYSB3YXkgdGhhdOKAmXMgdmVyeSBwZXJmb3JtYW50LiBJbiBmYWN0IGl0IG1pbmltaXNlcyB0aGUgY29kZSwgc3BsaXRzIGl0IGluIG1vZHVsZXMgYW5kIGNvbXBpbGVzIG9ubHkgdGhlIGNvZGUgYWN0dWFsbHkgdXNlZC48YnIvPlxuICAgICAgICBGb3IgdGhlIGZyb250IGVuZCBJIGRlY2lkZWQgdG8gY3JlYXRlIGEgU2luZ2xlIFBhZ2UgQXBwbGljYXRpb24uIEZvciB0aGlzIHB1cnBvc2Ugd2VicGFjayBkeW5hbWljYWxseSBjcmVhdGVzIHRoZSBpbmRleCBwYWdlIGZyb20gYSB0ZW1wbGF0ZS48YnIvPlxuICAgICAgICBJbiBhIFNQQSB0aGUgc2VydmVyIHNlcnZlcyB0aGlzIGh0bWwgcGFnZSB3aXRoIHRoZSBpbml0aWFsIGFzc2V0cyAoaW1hZ2VzIGFuZCBmb250cykgYW5kIGEgamF2YXNjcmlwdCBidW5kbGUuPGJyLz5cbiAgICAgICAgQWZ0ZXIgdGhhdCwgZWFjaCBwYWdlIGFuZCBlYWNoIGFzc2V0IGlzIGRvd25sb2FkZWQgb24gdGhlIGZseSB3aGVuIGl04oCZcyByZXF1ZXN0ZWQgYnkgdGhlIHVzZXIgYnJvd3Nlci4gVGhpcyBhbGxvd3MgdGhlIGZpcnN0IGxvYWQgdG8gYmUgbXVjaCBsaWdodGVyIGFuZCBmYXN0LiBJbiBmYWN0LCBhZnRlciB0aGF0IGVhY2ggcGFnZSBpcyB2aXNpdGVkLCB0aGUgZW50aXJlIGFwcGxpY2F0aW9uIGlzIGRvd25sb2FkZWQgYW5kIHRoZSBuYXZpZ2F0aW9uIGJlY29tZSB2ZXJ5IGZsdWlkLjxici8+XG4gICAgICAgIFRoZSBDU1MgY29kZSBpcyB3cml0dGVuIHVzaW5nIFNhc3MuPGJyLz5cbiAgICAgICAgVGhlIGFwcGxpY2F0aW9uIGlzIHJlZ2lzdGVyZWQgdG8gYSBzZXJ2aWNlIHdvcmtlciB0aGF0IGZvciBub3cgd29ya3Mgb25seSB3aXRoIEdvb2dsZSBDaHJvbWUgYmVjYXVzZSBpdOKAmXMgYSB0ZWNobm9sb2d5IHRoYXTigJlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQgb24gdGhlIG90aGVyIGJyb3dzZXJzLiBUaGlzIGZlYXR1cmUgaXMgcGFydGljdWxhcmx5IHNhdGlzZnlpbmcgYmVjYXVzZSBJIG5ldmVyIGhhZCB0cmllZCBpdCBiZWZvcmUgYW5kIGl0IGFjdHVhbGx5IHdvcmtzIHZlcnkgd2VsbC48YnIvPlxuICAgICAgICBTbyB0aGUgYXBwbGljYXRpb24gaXMgdXNhYmxlIGFsc28gb2ZmbGluZSBvbmx5IHdoZW4gYnJvd3Npbmcgd2l0aCBDaHJvbWUuXG4gICAgICA8L3A+XG5cblxuICAgICAgPHNwYWNlLz5cblxuXG4gICAgICA8aDM+U2VydmVyIHNpZGU8L2gzPlxuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIHNlcnZlciBzaWRlIGFwcGxpY2F0aW9uIGlzIG1hZGUgYnkgdHdvIG1pY3JvIHNlcnZpY2VzIHRoYXQgSSBrZXB0IHZlcnkgc2ltcGxlLjxici8+XG4gICAgICAgIE9uZSBvZiB0aGVtIHNlcnZlcyBhIFNpbmdsZSBQYWdlIEFwcGxpY2F0aW9uIHRvIHRoZSBicm93c2VycyBhbmQgaXTigJlzIHdyaXR0ZW4gd2l0aCB0aGUgZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBsYW5ndWFnZSBTY2FsYSBvbiB0aGUgZnJhbWV3b3JrIFBsYXkuPGJyLz5cbiAgICAgICAgVGhlIG90aGVyIG9uZSBzZXJ2ZXMgYSBSZXN0ZnVsIEFQSSBhbmQgY29tbXVuaWNhdGVzIHdpdGggdGhlIHdlYXRoZXIgc3RhdGlvbiByZWNlaXZpbmcgdGhlIGRhdGEgYW5kIHN0b3JpbmcgaXQgdG8gdGhlIER5bmFtb0RCIGRhdGFiYXNlLiBGdXJ0aGVybW9yZSBpdCBzZXJ2ZXMgdGhpcyBkYXRhIHRvIHRoZSB3ZWIgY2xpZW50IHdoZW4gcmVxdWVzdGVkLiBBbHNvIHRoaXMgb25lIGlzIG1hZGUgd2l0aCBTY2FsYSBidXQgdGhlIGZyYW1ld29yayBpcyBBa2thIEh0dHAuXG4gICAgICA8L3A+XG5cblxuICAgICAgPHNwYWNlLz5cblxuXG4gICAgICA8aDM+VGhlIGhhcmR3YXJlPC9oMz5cblxuICAgICAgPHA+XG4gICAgICAgIFRoZSBkZXZpY2Ugd2FzIGluaXRpYWxseSBkZXNpZ25lZCB0byB1c2UgQXJkdWlubyBhcyBhIG1haW4gYm9hcmQuIEFmdGVyIGEgd2hpbGUgSSB0aGVuIHByZWZlcnJlZCB0byBzd2l0Y2ggdG8gYW5vdGhlciBib2FyZCwgTm9kZU1jdSBBbWljYS48YnIvPlxuICAgICAgICBUaGUgZGV2aWNlIGhhcyBkaWZmZXJlbnQgc2Vuc29ycy4gVGhleSBtZWFzdXJlIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgcHJlc3N1cmUsIGdhcyBhbmQgbHVtaW5vc2l0eS48YnIvPlxuICAgICAgICBUaGUgc2Vuc29ycyBhcmUgd2lyZWQgdG8gYW5kIGhhbmRsZWQgYnkgdGhlIG1haW4gYm9hcmQgd2hpY2ggaGFzIGEgbWljcm9wcm9jZXNzb3IgcHJvZ3JhbW1lZCBieSBtZSB0byByZWFkIHRoZSBkYXRhIGFuZCBzZW5kIGl0IHRvIHRoZSBzZXJ2ZXIuPGJyLz5cbiAgICAgICAgVGhlIGRldmljZSBoYXMgYSBXaUZpIG1vZHVsZSB0aGF0IHNlbmRzIHRoZSBkYXRhIHRvIHRoZSBhcHBsaWNhdGlvbiB0aGF0IHJ1bnMgb24gQVdTIHdoZXJlIHRoZXkgYXJlIHN0b3JlZC48YnIvPlxuICAgICAgICBTaW5jZSB0aGUgc3RhdGlvbiBoYXMgdG8gYmUgaW5zdGFsbGVkIG91dGRvb3IsIHRoZSBkZXZpY2UgaGFzIGEgYmF0dGVyeSB0aGF0IG1ha2VzIGl0IGF1dG9ub21vdXMuPGJyLz5cbiAgICAgICAgSW4gb3JkZXIgdG8gYmUgbW9yZSBkdXJhYmxlIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGJhdHRlcnkgYW5kIHdvcmtpbmcgb3Zlcm5pZ2h0LCBhIHNvbGFyIHBhbmVsIGlzIGF0dGFjaGVkIHRvIGl0IGFuZCBwcm92aWRlcyB0aGUgZWxlY3RyaWNpdHkgdG8gY2hhcmdlIHRoZSBiYXR0ZXJ5Ljxici8+XG4gICAgICAgIEluaXRpYWxseSB0aGUgZGV2aWNlIGNvbnN1bWVkIGFuIGFtb3VudCBvZiBlbmVyZ3kgdmVyeSBoaWdoIHRvIGJlIHByb3ZpZGVkIGp1c3QgdmlhIGJhdHRlcnkuPGJyLz5cbiAgICAgICAgVG8gbWFrZSB0aGUgZGV2aWNlIG11Y2ggc21hbGxlciBhbmQgdG8gY29uc3VtZSBsZXNzIGVsZWN0cmljaXR5IEkgcmVtb3ZlZCB0aGUgQXJkdWlubyBjb21wb25lbnQgYW5kIEkgaW1wbGVtZW50ZWQgdmFyaW91cyBzb2x1dGlvbnMgYXQgbWljcm9wcm9jZXNzb3IgbGV2ZWwuXG4gICAgICA8L3A+XG5cbiAgICAgIDxzcGFjZS8+XG5cblxuICAgICAgPGgzPkZ1dHVyZSBkZXZlbG9wbWVudDwvaDM+XG5cbiAgICAgIDxwPlxuICAgICAgICBBcGFydCBmcm9tIGxlYXJuaW5nIGFuZCBnZXQgZGVlcGVyIGtub3dsZWRnZSBvbiBjb21wdXRlciBzY2llbmNlIEkgY3JlYXRlZCB0aGlzIGRldmljZSBhbmQgYXBwbGljYXRpb24gYWxzbyB0byBoYXZlIGEgc29saWQgYW5kIGNvbmNyZXRlIGJhc2UgZm9yIGZ1dHVyZSBkZXZlbG9wbWVudHMgYW5kIG5ldyBsZWFybmluZ3MuPGJyLz5cbiAgICAgICAgVGhlIGRldmljZSB3aWxsIGtlZXAgZ2F0aGVyaW5nIGFuZCBzdG9yaW5nIGFuIGFtb3VudCBvZiBkYXRhIGFib3V0IHRoZSB3ZWF0aGVyIGRhaWx5LiBPbiB0aGUgbG9uZyBwZXJpb2QgSeKAmWxsIGhhdmUgc3VmZmljaWVudCBkYXRhIHRvIGJlIGFibGUgdG8gbWFrZSBvcGVyYXRpb25zIHdpdGggYmlnIGRhdGEgYW5kIHNvIHRvIGV4cGxvcmUgbmV3IGNvcm5lcnMgb2YgdGhlIGNvbXB1dGVyIHNjaWVuY2UgYW5kIGxlYXJuIG5ldyBwcm9ncmFtbWluZyBsYW5ndWFnZSBsaWtlIFB5dGhvbiwgZnJhbWV3b3JrcyBhbmQgYmlnIGRhdGEgdG9vbHMuPGJyLz5cbiAgICAgICAgVG8gaGF2ZSBhIGJpZyBiYXNlIG9mIGRhdGEgZ2l2ZXMgbWUgb3RoZXIgaWRlYXMuIEZvciBleGFtcGxlIHJlZ2FyZGluZyBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBhbmQgbWFjaGluZSBsZWFybmluZy48YnIvPlxuICAgICAgICBUaGUgcHJvamVjdCBjYW4gYmUgdXNlZCBhbHNvIHRvIGNyb3NzIHRoZSBkYXRhIG9mIHRoZSB2YXJpb3VzIG1lYXN1cmVtZW50cyB0byBnZXQgaW50ZXJlc3RpbmcgYXNzdW1wdGlvbnMgYW5kIHRvIHN0dWR5IHNvbWUgbG9jYWwgY2xpbWF0ZSBwaGVub21lbmEuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFdlYXRoZXJTdGF0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9