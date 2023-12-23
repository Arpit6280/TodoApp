webpackHotUpdate_N_E("pages/new-todo",{

/***/ "./components/TaskForm.js":
/*!********************************!*\
  !*** ./components/TaskForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskForm.module.css */ "./components/TaskForm.module.css");
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TodayTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodayTask */ "./components/TodayTask.js");



var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TaskForm.js",
    _s = $RefreshSig$();





function TaskForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tasks = _useState[0],
      setTasks = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      description = _useState3[0],
      setDescription = _useState3[1];

  var nameHandler = function nameHandler(e) {
    setName(e.target.value);
  };

  var descriptionHandler = function descriptionHandler(e) {
    setDescription(e.target.value);
  };

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var task = {
      name: name,
      description: description
    };
    setTasks(function (prevState) {
      return [].concat(Object(C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState), [task]);
    });
    props.onAddTask(task);
    setName("");
    setDescription("");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form_container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Task Name",
          onChange: nameHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Description",
          onChange: descriptionHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.action,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(TaskForm, "BhQNrUKJhbtDBo7fVM/YederXdc=");

_c = TaskForm;
/* harmony default export */ __webpack_exports__["default"] = (TaskForm);

var _c;

$RefreshReg$(_c, "TaskForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrRm9ybS5qcyJdLCJuYW1lcyI6WyJUYXNrRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ0YXNrcyIsInNldFRhc2tzIiwibmFtZSIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibmFtZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkZXNjcmlwdGlvbkhhbmRsZXIiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ0YXNrIiwicHJldlN0YXRlIiwib25BZGRUYXNrIiwic3R5bGVzIiwiZm9ybV9jb250YWluZXIiLCJjb250cm9sIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDaEJDLEtBRGdCO0FBQUEsTUFDVEMsUUFEUzs7QUFBQSxtQkFFQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVoQkcsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUFBLG1CQUdlSixzREFBUSxDQUFDLEVBQUQsQ0FIdkI7QUFBQSxNQUdoQkssV0FIZ0I7QUFBQSxNQUdIQyxjQUhHOztBQUl2QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJKLFdBQU8sQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxDQUFELEVBQU87QUFDaENGLGtCQUFjLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFDRCxHQUZEOztBQUdBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNLLGNBQUY7QUFDQSxRQUFJQyxJQUFJLEdBQUc7QUFDVFgsVUFBSSxFQUFKQSxJQURTO0FBRVRFLGlCQUFXLEVBQVhBO0FBRlMsS0FBWDtBQUlBSCxZQUFRLENBQUMsVUFBQ2EsU0FBRCxFQUFlO0FBQ3RCLHFLQUFXQSxTQUFYLElBQXNCRCxJQUF0QjtBQUNELEtBRk8sQ0FBUjtBQUdBZixTQUFLLENBQUNpQixTQUFOLENBQWdCRixJQUFoQjtBQUNBVixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FFLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0QsR0FaRDs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVcsMkRBQU0sQ0FBQ0MsY0FBdkI7QUFBQSwyQkFFRTtBQUFNLGNBQVEsRUFBRU4sYUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVLLDJEQUFNLENBQUNFLE9BQXZCO0FBQUEsK0JBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDLFdBQS9CO0FBQTJDLGtCQUFRLEVBQUVaO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVVLDJEQUFNLENBQUNFLE9BQXZCO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsYUFGZDtBQUdFLGtCQUFRLEVBQUVSO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVdFO0FBQUssaUJBQVMsRUFBRU0sMkRBQU0sQ0FBQ0csTUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0E3Q1F0QixROztLQUFBQSxRO0FBK0NNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctdG9kby4yYmEyMTRjN2EyYTIwZjk2ZGI0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFza0Zvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVG9kYXlUYXNrIGZyb20gXCIuL1RvZGF5VGFza1wiO1xyXG5cclxuZnVuY3Rpb24gVGFza0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG5hbWVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVzY3JpcHRpb25IYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgfTtcclxuICAgIHNldFRhc2tzKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGUsIHRhc2tdO1xyXG4gICAgfSk7XHJcbiAgICBwcm9wcy5vbkFkZFRhc2sodGFzayk7XHJcbiAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9jb250YWluZXJ9PlxyXG4gICAgICB7LyogPFRvZGF5VGFzayB0YXNrcz17dGFza3N9IC8+ICovfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCIgb25DaGFuZ2U9e25hbWVIYW5kbGVyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2Rlc2NyaXB0aW9uSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259PlxyXG4gICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9