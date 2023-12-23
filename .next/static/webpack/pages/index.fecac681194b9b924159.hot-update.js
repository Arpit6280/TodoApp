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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\pages\\index.js",
    _s = $RefreshSig$();




 // import styles from '../styles/Home.module.css'

function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

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
                body: JSON.stringify(task),
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

  var onDeleteTask = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(name) {
      var response;
      return C_Users_arpit_Documents_todoApp_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(name);
              _context2.next = 3;
              return fetch("/api/delete-todo", {
                method: "DELETE",
                body: JSON.stringify(name),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              response = _context2.sent;
              router.push("/");

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onDeleteTask(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodayTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tasks: props.tasks,
      onAddTask: onAddTask,
      onDeleteTask: onDeleteTask
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwib25BZGRUYXNrIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwib25EZWxldGVUYXNrIiwibmFtZSIsInB1c2giLCJ0YXNrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsU0FBUztBQUFBLGtTQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRGdCO0FBQUEscUJBRU9HLEtBQUssQ0FBQyxvQkFBRCxFQUF1QjtBQUNqREMsc0JBQU0sRUFBRSxLQUR5QztBQUVqREMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FGMkM7QUFHakRRLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUh3QyxlQUF2QixDQUZaOztBQUFBO0FBRVZDLHNCQUZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRWLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFVQSxNQUFNVyxZQUFZO0FBQUEsbVNBQUcsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CVixxQkFBTyxDQUFDQyxHQUFSLENBQVlTLElBQVo7QUFEbUI7QUFBQSxxQkFFSVIsS0FBSyxDQUFDLGtCQUFELEVBQXFCO0FBQy9DQyxzQkFBTSxFQUFFLFFBRHVDO0FBRS9DQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUksSUFBZixDQUZ5QztBQUcvQ0gsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSHNDLGVBQXJCLENBRlQ7O0FBQUE7QUFFYkMsc0JBRmE7QUFTbkJaLG9CQUFNLENBQUNlLElBQVAsQ0FBWSxHQUFaOztBQVRtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaRixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVdBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFDRSxXQUFLLEVBQUVkLEtBQUssQ0FBQ2lCLEtBRGY7QUFFRSxlQUFTLEVBQUVkLFNBRmI7QUFHRSxrQkFBWSxFQUFFVztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBaENRZixJO1VBQ1FHLHFEOzs7S0FEUkgsSTs7QUF5RE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlY2FjNjgxMTk0YjliOTI0MTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgVGFza0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza0Zvcm1cIjtcbmltcG9ydCBUb2RheVRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kYXlUYXNrXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25BZGRUYXNrID0gYXN5bmMgKHRhc2spID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21wbGV0ZS10b2RvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uRGVsZXRlVGFzayA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZGVsZXRlLXRvZG9cIiwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmFtZSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUb2RheVRhc2tcbiAgICAgICAgdGFza3M9e3Byb3BzLnRhc2tzfVxuICAgICAgICBvbkFkZFRhc2s9e29uQWRkVGFza31cbiAgICAgICAgb25EZWxldGVUYXNrPXtvbkRlbGV0ZVRhc2t9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2FycGl0c2luZ2h5YWRhdjE5OkFycGl0NjI4MEBjbHVzdGVyMC51a3dwemQ5Lm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCB0b2RvQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ0b2RvXCIpO1xuICBjb25zdCB0b2RvcyA9IGF3YWl0IHRvZG9Db2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gIGNsaWVudC5jbG9zZSgpO1xuICBjb25zb2xlLmxvZyh0b2Rvcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGFza3M6IHRvZG9zLm1hcCgodG9kbykgPT4gKHtcbiAgICAgICAgbmFtZTogdG9kby5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgaWQ6IHRvZG8uX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWQsXG4gICAgICB9KSksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=