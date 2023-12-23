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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

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

  const deleteHandler = () => {
    let name = props.name;
    props.onDeleteTask(name);
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
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: props.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: deleteHandler,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this) : ""
  }, void 0, false);
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

  const onDeleteTask = name => {
    props.onDeleteTask(name);
  };

  console.log(tasks);
  console.log("k");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Today"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), tasks.map(task => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TaskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: task.id,
      name: task.name,
      completed: task.completed,
      description: task.description,
      onAddTask: onAddTask,
      onDeleteTask: onDeleteTask
    }, task.id, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\arpit\\Documents\\todoApp\\todo\\pages\\index.js";




 // import styles from '../styles/Home.module.css'

function Home(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const onAddTask = async task => {
    console.log(task);
    const response = await fetch("/api/complete-todo", {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  const onDeleteTask = async name => {
    console.log(name);
    const response = await fetch("/api/delete-todo", {
      method: "DELETE",
      body: JSON.stringify(name),
      headers: {
        "Content-Type": "application/json"
      }
    });
    router.push("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodayTask__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        id: todo._id.toString(),
        completed: todo.completed
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tGb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tMaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RheVRhc2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUYXNrRm9ybSIsInByb3BzIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uSGFuZGxlciIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2siLCJjb21wbGV0ZWQiLCJvbkFkZFRhc2siLCJwdXNoIiwic3R5bGVzIiwiZm9ybV9jb250YWluZXIiLCJjb250cm9sIiwiYWN0aW9uIiwiVGFza0xpc3QiLCJjaGVja1N0YXR1c0hhbmRsZXIiLCJpZCIsImRlbGV0ZUhhbmRsZXIiLCJvbkRlbGV0ZVRhc2siLCJjb25zb2xlIiwibG9nIiwibGlzdHMiLCJ0YXNrcyIsImNoZWNrYm94IiwiVG9kYXlUYXNrIiwibWFwIiwiSG9tZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJnZXRTdGF0aWNQcm9wcyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwidG9kb0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwidG9kb3MiLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwidG9kbyIsIl9pZCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdB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Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYXNrRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gVGFza0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG5hbWVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVzY3JpcHRpb25IYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHByb3BzLm9uQWRkVGFzayh0YXNrKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRhaW5lcn0+XHJcbiAgICAgIHsvKiA8VG9kYXlUYXNrIHRhc2tzPXt0YXNrc30gLz4gKi99XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e25hbWVIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2Rlc2NyaXB0aW9uSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259PlxyXG4gICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtX2NvbnRhaW5lclwiOiBcIlRhc2tGb3JtX2Zvcm1fY29udGFpbmVyX18xVzROMFwiLFxuXHRcImNvbnRyb2xcIjogXCJUYXNrRm9ybV9jb250cm9sX18zWDd6UlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Rhc2tMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRhc2tMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgY2hlY2tTdGF0dXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgcHJvcHMub25BZGRUYXNrKHRhc2spO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxldCBuYW1lID0gcHJvcHMubmFtZTtcclxuXHJcbiAgICBwcm9wcy5vbkRlbGV0ZVRhc2sobmFtZSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy50YXNrKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFwcm9wcy5jb21wbGV0ZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0c30+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50YXNrc30+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2hlY2tTdGF0dXNIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMubmFtZX08L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVIYW5kbGVyfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdHNcIjogXCJUYXNrTGlzdF9saXN0c19fM2F4VTFcIixcblx0XCJjaGVja2JveFwiOiBcIlRhc2tMaXN0X2NoZWNrYm94X18yWlNSNFwiLFxuXHRcInRhc2tzXCI6IFwiVGFza0xpc3RfdGFza3NfXzI3M0Z0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gXCIuL1Rhc2tMaXN0XCI7XHJcblxyXG5mdW5jdGlvbiBUb2RheVRhc2socHJvcHMpIHtcclxuICBjb25zdCB7IHRhc2tzIH0gPSBwcm9wcztcclxuICBjb25zdCBvbkFkZFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICBwcm9wcy5vbkFkZFRhc2sodGFzayk7XHJcbiAgfTtcclxuICBjb25zdCBvbkRlbGV0ZVRhc2sgPSAobmFtZSkgPT4ge1xyXG4gICAgcHJvcHMub25EZWxldGVUYXNrKG5hbWUpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2codGFza3MpO1xyXG4gIGNvbnNvbGUubG9nKFwia1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPlRvZGF5PC9oMz5cclxuICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgIDxUYXNrTGlzdFxyXG4gICAgICAgICAga2V5PXt0YXNrLmlkfVxyXG4gICAgICAgICAgaWQ9e3Rhc2suaWR9XHJcbiAgICAgICAgICBuYW1lPXt0YXNrLm5hbWV9XHJcbiAgICAgICAgICBjb21wbGV0ZWQ9e3Rhc2suY29tcGxldGVkfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Rhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkFkZFRhc2s9e29uQWRkVGFza31cclxuICAgICAgICAgIG9uRGVsZXRlVGFzaz17b25EZWxldGVUYXNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgVGFza0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza0Zvcm1cIjtcbmltcG9ydCBUb2RheVRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kYXlUYXNrXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25BZGRUYXNrID0gYXN5bmMgKHRhc2spID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21wbGV0ZS10b2RvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2spLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uRGVsZXRlVGFzayA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZGVsZXRlLXRvZG9cIiwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmFtZSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUb2RheVRhc2tcbiAgICAgICAgdGFza3M9e3Byb3BzLnRhc2tzfVxuICAgICAgICBvbkFkZFRhc2s9e29uQWRkVGFza31cbiAgICAgICAgb25EZWxldGVUYXNrPXtvbkRlbGV0ZVRhc2t9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2FycGl0c2luZ2h5YWRhdjE5OkFycGl0NjI4MEBjbHVzdGVyMC51a3dwemQ5Lm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCB0b2RvQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ0b2RvXCIpO1xuICBjb25zdCB0b2RvcyA9IGF3YWl0IHRvZG9Db2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gIGNsaWVudC5jbG9zZSgpO1xuICBjb25zb2xlLmxvZyh0b2Rvcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGFza3M6IHRvZG9zLm1hcCgodG9kbykgPT4gKHtcbiAgICAgICAgbmFtZTogdG9kby5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgaWQ6IHRvZG8uX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWQsXG4gICAgICB9KSksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9