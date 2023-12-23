webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskForm.module.css */ "./components/TaskForm.module.css");
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TaskForm.js",
    _s = $RefreshSig$();





function TaskForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      description = _useState2[0],
      setDescription = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

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
      description: description,
      completed: false
    };
    setName("");
    setDescription("");
    props.onAddTask(task);
    router.push("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form_container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Task Name",
          value: name,
          onChange: nameHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Description",
          value: description,
          onChange: descriptionHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(TaskForm, "1l6dpjevBxxKjmDLvZGOKBZQwNM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrRm9ybS5qcyJdLCJuYW1lcyI6WyJUYXNrRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uSGFuZGxlciIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2siLCJjb21wbGV0ZWQiLCJvbkFkZFRhc2siLCJwdXNoIiwic3R5bGVzIiwiZm9ybV9jb250YWluZXIiLCJjb250cm9sIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQSxNQUNoQkMsSUFEZ0I7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVlRixzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUVoQkcsV0FGZ0I7QUFBQSxNQUVIQyxjQUZHOztBQUd2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6Qk4sV0FBTyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNILENBQUQsRUFBTztBQUNoQ0osa0JBQWMsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixDQUFELEVBQU87QUFDM0JBLEtBQUMsQ0FBQ0ssY0FBRjtBQUNBLFFBQUlDLElBQUksR0FBRztBQUNUYixVQUFJLEVBQUpBLElBRFM7QUFFVEUsaUJBQVcsRUFBWEEsV0FGUztBQUdUWSxlQUFTLEVBQUU7QUFIRixLQUFYO0FBS0FiLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUUsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQUwsU0FBSyxDQUFDaUIsU0FBTixDQUFnQkYsSUFBaEI7QUFDQVQsVUFBTSxDQUFDWSxJQUFQLENBQVksR0FBWjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLGNBQXZCO0FBQUEsMkJBRUU7QUFBTSxjQUFRLEVBQUVQLGFBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFTSwyREFBTSxDQUFDRSxPQUF2QjtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLFdBRmQ7QUFHRSxlQUFLLEVBQUVuQixJQUhUO0FBSUUsa0JBQVEsRUFBRU07QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFFVywyREFBTSxDQUFDRSxPQUF2QjtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLGFBRmQ7QUFHRSxlQUFLLEVBQUVqQixXQUhUO0FBSUUsa0JBQVEsRUFBRVE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBaUJFO0FBQUssaUJBQVMsRUFBRU8sMkRBQU0sQ0FBQ0csTUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBbERRdkIsUTtVQUdRUSxxRDs7O0tBSFJSLFE7QUFvRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4Yjk2MDNhYmIyOGVmNGMwZjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYXNrRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gVGFza0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hbWVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVzY3JpcHRpb25IYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHByb3BzLm9uQWRkVGFzayh0YXNrKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRhaW5lcn0+XHJcbiAgICAgIHsvKiA8VG9kYXlUYXNrIHRhc2tzPXt0YXNrc30gLz4gKi99XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e25hbWVIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2Rlc2NyaXB0aW9uSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259PlxyXG4gICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9