/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	$(document).ready(function () {
	  var videos = document.querySelectorAll(".video");
	  var activeId = 0;
	
	  var curVideo = videos[activeId];
	  var nextVideo = videos[activeId + 1];
	
	  function recount(type) {
	    switch (type) {
	      case "forward":
	        activeId = activeId + 1;
	        curVideo = videos[activeId];
	        break;
	      case "back":
	        activeId = activeId - 1;
	        curVideo = videos[activeId];
	        break;
	    }
	  }
	
	  function push(direction) {
	    if (direction >= 0) {
	      curVideo.classList.remove("push-back");
	      curVideo.classList.add("push-forward");
	      recount("forward");
	    } else {
	      recount("back");
	      curVideo.classList.remove("push-forward");
	      curVideo.classList.add("push-back");
	    }
	  }
	
	  function prepare(el) {
	    var eventType = el.target.dataset.dir;
	
	    switch (eventType) {
	      case "right":
	        push(-100);
	        break;
	      case "left":
	        push(0);
	        break;
	    }
	  }
	
	  //controller
	  $(".wrap_controls-control").on("click", function (el) {
	    prepare(el);
	  });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map