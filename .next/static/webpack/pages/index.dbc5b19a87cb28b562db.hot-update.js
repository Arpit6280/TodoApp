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

            case 4:
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
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwib25BZGRUYXNrIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwib25EZWxldGVUYXNrIiwibmFtZSIsInRhc2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLE1BQU1DLFNBQVM7QUFBQSxrU0FBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQURnQjtBQUFBLHFCQUVPRyxLQUFLLENBQUMsb0JBQUQsRUFBdUI7QUFDakRDLHNCQUFNLEVBQUUsS0FEeUM7QUFFakRDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmLENBRjJDO0FBR2pEUSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFId0MsZUFBdkIsQ0FGWjs7QUFBQTtBQUVWQyxzQkFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUVixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBVUEsTUFBTVcsWUFBWTtBQUFBLG1TQUFHLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQlYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZUyxJQUFaO0FBRG1CO0FBQUEscUJBRUlSLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0Msc0JBQU0sRUFBRSxRQUR1QztBQUUvQ0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVJLElBQWYsQ0FGeUM7QUFHL0NILHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUhzQyxlQUFyQixDQUZUOztBQUFBO0FBRWJDLHNCQUZhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBVUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUNFLFdBQUssRUFBRVosS0FBSyxDQUFDYyxLQURmO0FBRUUsZUFBUyxFQUFFYixTQUZiO0FBR0Usa0JBQVksRUFBRVc7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQTlCUWIsSTs7QUF1RE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiYzViMTlhODdjYjI4YjU2MmRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgVGFza0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza0Zvcm1cIjtcbmltcG9ydCBUb2RheVRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kYXlUYXNrXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3Qgb25BZGRUYXNrID0gYXN5bmMgKHRhc2spID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21wbGV0ZS10b2RvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uRGVsZXRlVGFzayA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZGVsZXRlLXRvZG9cIiwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmFtZSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRvZGF5VGFza1xuICAgICAgICB0YXNrcz17cHJvcHMudGFza3N9XG4gICAgICAgIG9uQWRkVGFzaz17b25BZGRUYXNrfVxuICAgICAgICBvbkRlbGV0ZVRhc2s9e29uRGVsZXRlVGFza31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYXJwaXRzaW5naHlhZGF2MTk6QXJwaXQ2MjgwQGNsdXN0ZXIwLnVrd3B6ZDkubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IHRvZG9Db2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRvZG9cIik7XG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgdG9kb0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIGNvbnNvbGUubG9nKHRvZG9zKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YXNrczogdG9kb3MubWFwKCh0b2RvKSA9PiAoe1xuICAgICAgICBuYW1lOiB0b2RvLm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBpZDogdG9kby5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCxcbiAgICAgIH0pKSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==