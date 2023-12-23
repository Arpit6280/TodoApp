webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TaskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TaskForm */ "./components/TaskForm.js");
/* harmony import */ var _components_TodayTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodayTask */ "./components/TodayTask.js");



var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\pages\\index.js";




// import styles from '../styles/Home.module.css'
function Home(props) {
  var onAddTask = /*#__PURE__*/function () {
    var _ref = Object(C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(task) {
      var response;
      return C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(task);
              _context.next = 3;
              return fetch("/api/complete-todo", {
                method: "PUT",
                body: JSON.stringify(todo),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              response = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onAddTask(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodayTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tasks: props.tasks,
      onAddTask: onAddTask
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwib25BZGRUYXNrIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9kbyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInRhc2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLE1BQU1DLFNBQVM7QUFBQSxrU0FBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQURnQjtBQUFBLHFCQUVPRyxLQUFLLENBQUMsb0JBQUQsRUFBdUI7QUFDakRDLHNCQUFNLEVBQUUsS0FEeUM7QUFFakRDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxJQUFmLENBRjJDO0FBR2pEQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFId0MsZUFBdkIsQ0FGWjs7QUFBQTtBQUVWQyxzQkFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUWCxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBVUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUFXLFdBQUssRUFBRUQsS0FBSyxDQUFDYSxLQUF4QjtBQUErQixlQUFTLEVBQUVaO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FoQlFGLEk7O0FBd0NNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzYzYjM4ZGM0MDJkYzdmYTQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFRhc2tGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Rhc2tGb3JtXCI7XG5pbXBvcnQgVG9kYXlUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL1RvZGF5VGFza1wiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IG9uQWRkVGFzayA9IGFzeW5jICh0YXNrKSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzayk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29tcGxldGUtdG9kb1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VG9kYXlUYXNrIHRhc2tzPXtwcm9wcy50YXNrc30gb25BZGRUYXNrPXtvbkFkZFRhc2t9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYXJwaXRzaW5naHlhZGF2MTk6QXJwaXQ2MjgwQGNsdXN0ZXIwLnVrd3B6ZDkubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IHRvZG9Db2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRvZG9cIik7XG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgdG9kb0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIGNvbnNvbGUubG9nKHRvZG9zKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YXNrczogdG9kb3MubWFwKCh0b2RvKSA9PiAoe1xuICAgICAgICBuYW1lOiB0b2RvLm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBpZDogdG9kby5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==