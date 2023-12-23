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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !props.completed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.lists,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tasks,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkbox,
          onClick: checkStatusHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this) : ""
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrTGlzdC5qcyJdLCJuYW1lcyI6WyJUYXNrTGlzdCIsInByb3BzIiwiY2hlY2tTdGF0dXNIYW5kbGVyIiwidGFzayIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwib25BZGRUYXNrIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImxpc3RzIiwidGFza3MiLCJjaGVja2JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixRQUFJQyxJQUFJLEdBQUc7QUFDVEMsUUFBRSxFQUFFSCxLQUFLLENBQUNHLEVBREQ7QUFFVEMsVUFBSSxFQUFFSixLQUFLLENBQUNJLElBRkg7QUFHVEMsaUJBQVcsRUFBRUwsS0FBSyxDQUFDSyxXQUhWO0FBSVRDLGVBQVMsRUFBRTtBQUpGLEtBQVg7QUFNQU4sU0FBSyxDQUFDTyxTQUFOLENBQWdCTCxJQUFoQjtBQUNELEdBUkQ7O0FBU0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLENBQUNFLElBQWxCO0FBQ0Esc0JBQ0U7QUFBQSxjQUNHLENBQUNGLEtBQUssQ0FBQ00sU0FBUCxnQkFDQztBQUFLLGVBQVMsRUFBRUksMkRBQU0sQ0FBQ0MsS0FBdkI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUVELDJEQUFNLENBQUNFLEtBQTNCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFTLEVBQUVGLDJEQUFNLENBQUNHLFFBRnBCO0FBR0UsaUJBQU8sRUFBRVo7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBQSxvQkFBSUQsS0FBSyxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBZUM7QUFoQkosbUJBREY7QUFxQkQ7O0tBaENRTCxRO0FBa0NNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZWVlYjBlMWU0YTBjMmY1MGM2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Rhc2tMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRhc2tMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgY2hlY2tTdGF0dXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgcHJvcHMub25BZGRUYXNrKHRhc2spO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2cocHJvcHMudGFzayk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshcHJvcHMuY29tcGxldGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdHN9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGFza3N9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrU3RhdHVzSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxidXR0b24+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=