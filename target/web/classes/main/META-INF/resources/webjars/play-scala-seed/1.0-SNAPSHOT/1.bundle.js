(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/Station.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/Station.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".weather-station-v1 {\n  width: 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/css/Station.css":
/*!*****************************!*\
  !*** ./src/css/Station.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./Station.css */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/Station.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/weather_station_v1.jpg":
/*!*******************************************!*\
  !*** ./src/images/weather_station_v1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91c6a663521399256f17b6c92c02c07a.jpg";

/***/ }),

/***/ "./src/react-components/Station/Station.js":
/*!*************************************************!*\
  !*** ./src/react-components/Station/Station.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Images_weather_station_v1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Images/weather_station_v1.jpg */ "./src/images/weather_station_v1.jpg");
/* harmony import */ var Images_weather_station_v1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Images_weather_station_v1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Css_Station_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Css/Station.css */ "./src/css/Station.css");
/* harmony import */ var Css_Station_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Css_Station_css__WEBPACK_IMPORTED_MODULE_2__);




const Statistics = inputs => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "div",
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h1",
      null,
      "The Station"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("space", null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "h4",
      null,
      "Version 1 (2018)"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "div",
      { className: "centered-inline" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: Images_weather_station_v1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, className: "weather-station-v1" })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL1N0YXRpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvU3RhdGlvbi5jc3M/NDhmZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3dlYXRoZXJfc3RhdGlvbl92MS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LWNvbXBvbmVudHMvU3RhdGlvbi9TdGF0aW9uLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJpbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsOENBQStDLGVBQWUsRUFBRTs7QUFFaEU7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7O0FDbkJBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUlBLE1BQU1BLGFBQWFDLFVBQVU7QUFDM0IsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFHRSw2RUFIRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRjtBQU9FO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDRSwwRUFBSyxLQUFLLG9FQUFWLEVBQTRCLFdBQVUsb0JBQXRDO0FBREY7QUFQRixHQURGO0FBYUQsQ0FkRDs7QUFnQkEsK0RBQWVELFVBQWYsRSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLndlYXRoZXItc3RhdGlvbi12MSB7XFxuICB3aWR0aDogNjAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vU3RhdGlvbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vU3RhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1N0YXRpb24uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTFjNmE2NjM1MjEzOTkyNTZmMTdiNmM5MmMwMmMwN2EuanBnXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgV2VhdGhlclN0YXRpb25WMSBmcm9tIFwiSW1hZ2VzL3dlYXRoZXJfc3RhdGlvbl92MS5qcGdcIlxuaW1wb3J0IFwiQ3NzL1N0YXRpb24uY3NzXCJcblxuXG5cbmNvbnN0IFN0YXRpc3RpY3MgPSBpbnB1dHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGhlIFN0YXRpb248L2gxPlxuXG4gICAgICA8c3BhY2UvPlxuXG4gICAgICA8aDQ+VmVyc2lvbiAxICgyMDE4KTwvaDQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtaW5saW5lXCI+XG4gICAgICAgIDxpbWcgc3JjPXtXZWF0aGVyU3RhdGlvblYxfSBjbGFzc05hbWU9XCJ3ZWF0aGVyLXN0YXRpb24tdjFcIi8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzXG4iXSwic291cmNlUm9vdCI6IiJ9