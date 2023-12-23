webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TaskList.js":
/*!********************************!*\
  !*** ./components/TaskList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskList.module.css */ "./components/TaskList.module.css");
/* harmony import */ var _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TaskList.js";



function TaskList(props) {
  var checkStatusHandler = function checkStatusHandler() {
    var task = {
      id: props.id,
      name: props.name,
      description: props.description,
      completed: true
    };
    props.onAddTask(task);
  };

  console.log(props.task);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lists,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tasks,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "checkbox",
        className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkbox,
        onClick: checkStatusHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_c = TaskList;
/* harmony default export */ __webpack_exports__["default"] = (TaskList);

var _c;

$RefreshReg$(_c, "TaskList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrTGlzdC5qcyJdLCJuYW1lcyI6WyJUYXNrTGlzdCIsInByb3BzIiwiY2hlY2tTdGF0dXNIYW5kbGVyIiwidGFzayIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwib25BZGRUYXNrIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImxpc3RzIiwidGFza3MiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFFBQUlDLElBQUksR0FBRztBQUNUQyxRQUFFLEVBQUVILEtBQUssQ0FBQ0csRUFERDtBQUVUQyxVQUFJLEVBQUVKLEtBQUssQ0FBQ0ksSUFGSDtBQUdUQyxpQkFBVyxFQUFFTCxLQUFLLENBQUNLLFdBSFY7QUFJVEMsZUFBUyxFQUFFO0FBSkYsS0FBWDtBQU1BTixTQUFLLENBQUNPLFNBQU4sQ0FBZ0JMLElBQWhCO0FBQ0QsR0FSRDs7QUFTQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQUssQ0FBQ0UsSUFBbEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVEsMkRBQU0sQ0FBQ0MsS0FBdkI7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBRUQsMkRBQU0sQ0FBQ0UsS0FBM0I7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsaUJBQVMsRUFBRUYsMkRBQU0sQ0FBQ0csUUFGcEI7QUFHRSxlQUFPLEVBQUVaO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxrQkFBSUQsS0FBSyxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7S0ExQlFMLFE7QUE0Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkODdiMTc4YTcyNWY5NTkzMjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFza0xpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGFza0xpc3QocHJvcHMpIHtcclxuICBjb25zdCBjaGVja1N0YXR1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBwcm9wcy5vbkFkZFRhc2sodGFzayk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy50YXNrKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0c30+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRhc2tzfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrU3RhdHVzSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPntwcm9wcy5uYW1lfTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==