webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TodayTask.js":
/*!*********************************!*\
  !*** ./components/TodayTask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskList */ "./components/TaskList.js");

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TodayTask.js";



function TodayTask(props) {
  var _this = this;

  var tasks = props.tasks;

  var onAddTask = function onAddTask(task) {
    console.log(task);
    props.onAddTask(task);
  };

  console.log(tasks);
  console.log("k");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Today"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), tasks.map(function (task) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TaskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: task.id,
        name: task.name,
        completed: task.completed,
        description: task.description,
        onAddTask: onAddTask
      }, task.id, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c = TodayTask;
/* harmony default export */ __webpack_exports__["default"] = (TodayTask);

var _c;

$RefreshReg$(_c, "TodayTask");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RheVRhc2suanMiXSwibmFtZXMiOlsiVG9kYXlUYXNrIiwicHJvcHMiLCJ0YXNrcyIsIm9uQWRkVGFzayIsInRhc2siLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiLCJuYW1lIiwiY29tcGxldGVkIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQSxNQUNoQkMsS0FEZ0IsR0FDTkQsS0FETSxDQUNoQkMsS0FEZ0I7O0FBRXhCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUgsU0FBSyxDQUFDRSxTQUFOLENBQWdCQyxJQUFoQjtBQUNELEdBSEQ7O0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0gsSUFBRDtBQUFBLDBCQUNULHFFQUFDLGlEQUFEO0FBRUUsVUFBRSxFQUFFQSxJQUFJLENBQUNJLEVBRlg7QUFHRSxZQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFIYjtBQUlFLGlCQUFTLEVBQUVMLElBQUksQ0FBQ00sU0FKbEI7QUFLRSxtQkFBVyxFQUFFTixJQUFJLENBQUNPLFdBTHBCO0FBTUUsaUJBQVMsRUFBRVI7QUFOYixTQUNPQyxJQUFJLENBQUNJLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0tBdkJRUixTO0FBeUJNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYzY3ZjUzOWMxNTUwNTIyY2E5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi9UYXNrTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gVG9kYXlUYXNrKHByb3BzKSB7XHJcbiAgY29uc3QgeyB0YXNrcyB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgb25BZGRUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgcHJvcHMub25BZGRUYXNrKHRhc2spO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2codGFza3MpO1xyXG4gIGNvbnNvbGUubG9nKFwia1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPlRvZGF5PC9oMz5cclxuICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgIDxUYXNrTGlzdFxyXG4gICAgICAgICAga2V5PXt0YXNrLmlkfVxyXG4gICAgICAgICAgaWQ9e3Rhc2suaWR9XHJcbiAgICAgICAgICBuYW1lPXt0YXNrLm5hbWV9XHJcbiAgICAgICAgICBjb21wbGV0ZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Rhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkFkZFRhc2s9e29uQWRkVGFza31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZGF5VGFzaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==