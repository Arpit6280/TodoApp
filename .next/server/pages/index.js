module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TaskForm.js":
/*!********************************!*\
  !*** ./components/TaskForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskForm.module.css */ "./components/TaskForm.module.css");
/* harmony import */ var _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TaskForm.js";



function TaskForm(props) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const nameHandler = e => {
    setName(e.target.value);
  };

  const descriptionHandler = e => {
    setDescription(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    let task = {
      name,
      description,
      completed: false
    };
    setName("");
    setDescription("");
    props.onAddTask(task);
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
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _TaskForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TaskForm);

/***/ }),

/***/ "./components/TaskForm.module.css":
/*!****************************************!*\
  !*** ./components/TaskForm.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form_container": "TaskForm_form_container__1W4N0",
	"control": "TaskForm_control__3X7zR"
};


/***/ }),

/***/ "./components/TaskList.js":
/*!********************************!*\
  !*** ./components/TaskList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskList.module.css */ "./components/TaskList.module.css");
/* harmony import */ var _TaskList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TaskList.js";



function TaskList(props) {
  const checkStatusHandler = () => {
    let task = {
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

/* harmony default export */ __webpack_exports__["default"] = (TaskList);

/***/ }),

/***/ "./components/TaskList.module.css":
/*!****************************************!*\
  !*** ./components/TaskList.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"lists": "TaskList_lists__3axU1",
	"checkbox": "TaskList_checkbox__2ZSR4",
	"tasks": "TaskList_tasks__273Ft"
};


/***/ }),

/***/ "./components/TodayTask.js":
/*!*********************************!*\
  !*** ./components/TodayTask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskList */ "./components/TaskList.js");

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\components\\TodayTask.js";



function TodayTask(props) {
  const {
    tasks
  } = props;

  const onAddTask = task => {
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
    }, this), tasks.map(task => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TaskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: task.id,
      name: task.name,
      description: task.description,
      onAddTask: onAddTask
    }, task.id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodayTask);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TaskForm */ "./components/TaskForm.js");
/* harmony import */ var _components_TodayTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodayTask */ "./components/TodayTask.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\pages\\index.js";



 // import styles from '../styles/Home.module.css'

function Home(props) {
  const onAddTask = async task => {// console.log(task);
    // const response = await fetch("/api/complete-todo", {
    //   method: "PUT",
    //   body: JSON.stringify(task),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodayTask__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

async function getStaticProps() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__["MongoClient"].connect("mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority");
  const db = client.db();
  const todoCollection = db.collection("todo");
  const todos = await todoCollection.find().toArray();
  client.close();
  console.log(todos);
  return {
    props: {
      tasks: todos.map(todo => ({
        name: todo.name,
        description: todo.description,
        id: todo._id.toString()
      }))
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tGb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tMaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RheVRhc2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVGFza0Zvcm0iLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibmFtZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkZXNjcmlwdGlvbkhhbmRsZXIiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ0YXNrIiwiY29tcGxldGVkIiwib25BZGRUYXNrIiwic3R5bGVzIiwiZm9ybV9jb250YWluZXIiLCJjb250cm9sIiwiYWN0aW9uIiwiVGFza0xpc3QiLCJjaGVja1N0YXR1c0hhbmRsZXIiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0cyIsInRhc2tzIiwiY2hlY2tib3giLCJUb2RheVRhc2siLCJtYXAiLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsInRvZG9Db2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInRvZG9zIiwiZmluZCIs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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFTSxlQUFlZ0IsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQix5R0FEbUIsQ0FBckI7QUFJQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxNQUFkLENBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1GLGNBQWMsQ0FBQ0csSUFBZixHQUFzQkMsT0FBdEIsRUFBcEI7QUFDQVIsUUFBTSxDQUFDUyxLQUFQO0FBQ0FsQixTQUFPLENBQUNDLEdBQVIsQ0FBWWMsS0FBWjtBQUVBLFNBQU87QUFDTHRDLFNBQUssRUFBRTtBQUNMMEIsV0FBSyxFQUFFWSxLQUFLLENBQUNULEdBQU4sQ0FBV2EsSUFBRCxLQUFXO0FBQzFCekMsWUFBSSxFQUFFeUMsSUFBSSxDQUFDekMsSUFEZTtBQUUxQkcsbUJBQVcsRUFBRXNDLElBQUksQ0FBQ3RDLFdBRlE7QUFHMUJrQixVQUFFLEVBQUVvQixJQUFJLENBQUNDLEdBQUwsQ0FBU0MsUUFBVDtBQUhzQixPQUFYLENBQVY7QUFERjtBQURGLEdBQVA7QUFTRDtBQUVjZCxtRUFBZixFOzs7Ozs7Ozs7OztBQzlDQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYXNrRm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUYXNrRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgbmFtZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBkZXNjcmlwdGlvbkhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFzayA9IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgc2V0TmFtZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgcHJvcHMub25BZGRUYXNrKHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fY29udGFpbmVyfT5cclxuICAgICAgey8qIDxUb2RheVRhc2sgdGFza3M9e3Rhc2tzfSAvPiAqL31cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhc2sgTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17bmFtZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZGVzY3JpcHRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbn0+XHJcbiAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0Zvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1fY29udGFpbmVyXCI6IFwiVGFza0Zvcm1fZm9ybV9jb250YWluZXJfXzFXNE4wXCIsXG5cdFwiY29udHJvbFwiOiBcIlRhc2tGb3JtX2NvbnRyb2xfXzNYN3pSXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVGFza0xpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGFza0xpc3QocHJvcHMpIHtcclxuICBjb25zdCBjaGVja1N0YXR1c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBwcm9wcy5vbkFkZFRhc2sodGFzayk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy50YXNrKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0c30+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRhc2tzfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrU3RhdHVzSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPntwcm9wcy5uYW1lfTwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8YnV0dG9uPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdHNcIjogXCJUYXNrTGlzdF9saXN0c19fM2F4VTFcIixcblx0XCJjaGVja2JveFwiOiBcIlRhc2tMaXN0X2NoZWNrYm94X18yWlNSNFwiLFxuXHRcInRhc2tzXCI6IFwiVGFza0xpc3RfdGFza3NfXzI3M0Z0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gXCIuL1Rhc2tMaXN0XCI7XHJcblxyXG5mdW5jdGlvbiBUb2RheVRhc2socHJvcHMpIHtcclxuICBjb25zdCB7IHRhc2tzIH0gPSBwcm9wcztcclxuICBjb25zdCBvbkFkZFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICBwcm9wcy5vbkFkZFRhc2sodGFzayk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcbiAgY29uc29sZS5sb2coXCJrXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+VG9kYXk8L2gzPlxyXG4gICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgPFRhc2tMaXN0XHJcbiAgICAgICAgICBrZXk9e3Rhc2suaWR9XHJcbiAgICAgICAgICBpZD17dGFzay5pZH1cclxuICAgICAgICAgIG5hbWU9e3Rhc2submFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgb25BZGRUYXNrPXtvbkFkZFRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheVRhc2s7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUYXNrRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrRm9ybVwiO1xuaW1wb3J0IFRvZGF5VGFzayBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RheVRhc2tcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBvbkFkZFRhc2sgPSBhc3luYyAodGFzaykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHRhc2spO1xuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbXBsZXRlLXRvZG9cIiwge1xuICAgIC8vICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFzayksXG4gICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRvZGF5VGFzayB0YXNrcz17cHJvcHMudGFza3N9IG9uQWRkVGFzaz17b25BZGRUYXNrfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2FycGl0c2luZ2h5YWRhdjE5OkFycGl0NjI4MEBjbHVzdGVyMC51a3dwemQ5Lm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCB0b2RvQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ0b2RvXCIpO1xuICBjb25zdCB0b2RvcyA9IGF3YWl0IHRvZG9Db2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gIGNsaWVudC5jbG9zZSgpO1xuICBjb25zb2xlLmxvZyh0b2Rvcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGFza3M6IHRvZG9zLm1hcCgodG9kbykgPT4gKHtcbiAgICAgICAgbmFtZTogdG9kby5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgaWQ6IHRvZG8uX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9