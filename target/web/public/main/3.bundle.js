(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/Home.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/Home.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".personal-summary {\n  display: flex;\n  /* align-items: center; */\n  background-color: #f7f4f1;\n  padding: 15px; }\n\n.personal-info {\n  width: 70%; }\n  .personal-info .my-name {\n    font-size: 22px;\n    font-weight: bold; }\n\n.profile-picture {\n  width: 20%; }\n  .profile-picture .linkedin-profile-picture {\n    border-radius: 50%;\n    border: 4px solid #007eff;\n    width: 160px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/css/Home.css":
/*!**************************!*\
  !*** ./src/css/Home.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./Home.css */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/Home.css");

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

/***/ "./src/images/linkedin_profile_picture.jpg":
/*!*************************************************!*\
  !*** ./src/images/linkedin_profile_picture.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e97cac0d80c465cf942d4b0cb0c33ebc.jpg";

/***/ }),

/***/ "./src/react-components/Home/Home.js":
/*!*******************************************!*\
  !*** ./src/react-components/Home/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Css_Home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Css/Home.css */ "./src/css/Home.css");
/* harmony import */ var Css_Home_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Css_Home_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Images_linkedin_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Images/linkedin_profile_picture.jpg */ "./src/images/linkedin_profile_picture.jpg");
/* harmony import */ var Images_linkedin_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Images_linkedin_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_2__);




class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {

  render() {

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      "div",
      null,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        "h1",
        null,
        "Hello and welcome to my portfolio website"
      ),
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        "h3",
        null,
        "Feel free to have a look around"
      ),
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("space", null),
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("space", null),
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        "div",
        { className: "personal-summary" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "div",
          { className: "profile-picture" },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", { src: Images_linkedin_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, className: "linkedin-profile-picture" })
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          "div",
          { className: "personal-info" },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "div",
            { className: "my-name" },
            "Mirko Saiu"
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "i",
            null,
            "Software Engineer"
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("space", null),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "div",
            null,
            "Italy"
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("space", null),
          "I'm a passionate Software Engineer committed to deliver quality work. I love to work with the ultimate technologies and to get things done. I also often make personal projects that involve computer science and, recently, electronics skills.",
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("space", null),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "b",
            null,
            "Valuable skills"
          ),
          ": I have 4 years experience working with the functional programming language ",
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "b",
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              "i",
              null,
              "Scala"
            )
          ),
          " and its frameworks. Plus 2 years experience working on the front end with ",
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "b",
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              "i",
              null,
              "ReactJs and Redux"
            )
          ),
          "."
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0hvbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvSG9tZS5jc3M/ZjZiNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmtlZGluX3Byb2ZpbGVfcGljdHVyZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LWNvbXBvbmVudHMvSG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw0Q0FBNkMsa0JBQWtCLDJCQUEyQixpQ0FBaUMsa0JBQWtCLEVBQUUsb0JBQW9CLGVBQWUsRUFBRSw2QkFBNkIsc0JBQXNCLHdCQUF3QixFQUFFLHNCQUFzQixlQUFlLEVBQUUsZ0RBQWdELHlCQUF5QixnQ0FBZ0MsbUJBQW1CLEVBQUU7O0FBRXRhOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQSxnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFOLFNBQW1CLDRDQUFBQyxDQUFNQyxTQUF6QixDQUFtQzs7QUFHakNDLFdBQVM7O0FBRVAsV0FDRTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEY7QUFNRSwrRUFORjtBQU9FLCtFQVBGO0FBU0U7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDRSw4RUFBSyxLQUFLLDBFQUFWLEVBQWtDLFdBQVUsMEJBQTVDO0FBREYsU0FGRjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQUdFLG1GQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpGO0FBS0UsbUZBTEY7QUFBQTtBQU9FLG1GQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVJGO0FBQUE7QUFRcUc7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFILFdBUnJHO0FBQUE7QUFRbU07QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFILFdBUm5NO0FBQUE7QUFBQTtBQU5GO0FBVEYsS0FERjtBQWdDRDtBQXJDZ0M7O0FBd0NuQywrREFBZUgsSUFBZixFIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGVyc29uYWwtc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y0ZjE7XFxuICBwYWRkaW5nOiAxNXB4OyB9XFxuXFxuLnBlcnNvbmFsLWluZm8ge1xcbiAgd2lkdGg6IDcwJTsgfVxcbiAgLnBlcnNvbmFsLWluZm8gLm15LW5hbWUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuICB3aWR0aDogMjAlOyB9XFxuICAucHJvZmlsZS1waWN0dXJlIC5saW5rZWRpbi1wcm9maWxlLXBpY3R1cmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDdlZmY7XFxuICAgIHdpZHRoOiAxNjBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Ib21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU5N2NhYzBkODBjNDY1Y2Y5NDJkNGIwY2IwYzMzZWJjLmpwZ1wiOyIsImltcG9ydCAnQ3NzL0hvbWUuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGlua2VkSW5Qcm9maWxlUGljdHVyZSBmcm9tIFwiSW1hZ2VzL2xpbmtlZGluX3Byb2ZpbGVfcGljdHVyZS5qcGdcIlxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxoMT5IZWxsbyBhbmQgd2VsY29tZSB0byBteSBwb3J0Zm9saW8gd2Vic2l0ZTwvaDE+XG4gICAgICAgIDxoMz5GZWVsIGZyZWUgdG8gaGF2ZSBhIGxvb2sgYXJvdW5kPC9oMz5cblxuXG4gICAgICAgIDxzcGFjZS8+XG4gICAgICAgIDxzcGFjZS8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb25hbC1zdW1tYXJ5XCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e0xpbmtlZEluUHJvZmlsZVBpY3R1cmV9IGNsYXNzTmFtZT1cImxpbmtlZGluLXByb2ZpbGUtcGljdHVyZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWwtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1uYW1lXCI+TWlya28gU2FpdTwvZGl2PlxuICAgICAgICAgICAgPGk+U29mdHdhcmUgRW5naW5lZXI8L2k+XG4gICAgICAgICAgICA8c3BhY2UvPlxuICAgICAgICAgICAgPGRpdj5JdGFseTwvZGl2PlxuICAgICAgICAgICAgPHNwYWNlLz5cbiAgICAgICAgICAgIEknbSBhIHBhc3Npb25hdGUgU29mdHdhcmUgRW5naW5lZXIgY29tbWl0dGVkIHRvIGRlbGl2ZXIgcXVhbGl0eSB3b3JrLiBJIGxvdmUgdG8gd29yayB3aXRoIHRoZSB1bHRpbWF0ZSB0ZWNobm9sb2dpZXMgYW5kIHRvIGdldCB0aGluZ3MgZG9uZS4gSSBhbHNvIG9mdGVuIG1ha2UgcGVyc29uYWwgcHJvamVjdHMgdGhhdCBpbnZvbHZlIGNvbXB1dGVyIHNjaWVuY2UgYW5kLCByZWNlbnRseSwgZWxlY3Ryb25pY3Mgc2tpbGxzLlxuICAgICAgICAgICAgPHNwYWNlLz5cbiAgICAgICAgICAgIDxiPlZhbHVhYmxlIHNraWxsczwvYj46IEkgaGF2ZSA0IHllYXJzIGV4cGVyaWVuY2Ugd29ya2luZyB3aXRoIHRoZSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGxhbmd1YWdlIDxiPjxpPlNjYWxhPC9pPjwvYj4gYW5kIGl0cyBmcmFtZXdvcmtzLiBQbHVzIDIgeWVhcnMgZXhwZXJpZW5jZSB3b3JraW5nIG9uIHRoZSBmcm9udCBlbmQgd2l0aCA8Yj48aT5SZWFjdEpzIGFuZCBSZWR1eDwvaT48L2I+LlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9