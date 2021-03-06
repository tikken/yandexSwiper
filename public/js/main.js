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
	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.videoSlider = undefined;
	
	var _hasClass = __webpack_require__(2);
	
	var _classesHandler2 = __webpack_require__(3);
	
	/**
	 * hasClass util
	 * target, class
	 * @returns {boolean}
	 * _classesHandler
	 * el, class, action
	 */
	var videoSlider = function videoSlider() {
	  var wrap = document.querySelector(".wrap");
	  var back = wrap.querySelector(".wrap_controls-left");
	  var forward = wrap.querySelector(".wrap_controls-right");
	  var videos = wrap.querySelectorAll(".video");
	  var playBtn = wrap.querySelector(".topVideo-icon");
	
	  var activeId = 0;
	  var curVideo = videos[activeId];
	  var videosLength = videos.length;
	
	  videos[videos.length - 1].classList.add("active_slide");
	  back.classList.add("block-btn");
	
	  // _setHref();
	
	  back.addEventListener("click", function () {
	    push(-100);
	    _headingChange(wrap);
	    _setHref();
	  });
	  forward.addEventListener("click", function () {
	    push(0);
	    _headingChange(wrap);
	    _setHref();
	  });
	  wrap.addEventListener("click", function () {
	    playPause();
	  });
	
	  function _setHref() {
	    var heeadingContainer = document.querySelector("[data-videos-heading]");
	    var url = wrap.querySelector(".active_slide").getAttribute("data-url");
	    heeadingContainer.setAttribute("href", url);
	
	    console.warn("_headingChange", url);
	  }
	  function _headingChange(wrap) {
	    var heeadingContainer = document.querySelector("[data-videos-heading]");
	    var dateContainer = document.querySelector("[data-videos-date]");
	
	    var param = JSON.parse(wrap.querySelector(".active_slide").getAttribute("data-vid-param"));
	
	    var heading = param.heading;
	    var date = param.date;
	
	    heeadingContainer.innerText = heading;
	    dateContainer.innerText = date;
	  }
	
	  function activeIndex() {
	    var lastVideoId = videos[videos.length - 1].getAttribute("data-id");
	    var activeId = document.querySelector(".active_slide").getAttribute("data-id");
	
	    if (parseInt(activeId) === 0) {
	      back.classList.add("block-btn");
	    }
	    if (parseInt(lastVideoId) === parseInt(activeId)) {
	      forward.classList.add("block-btn");
	    } else {
	      forward.classList.remove("block-btn");
	    }
	
	    return activeId;
	  }
	  //возвращаем элемент по верху всех остальных элементов
	  function _raiseZindex() {
	    var pushedItems = wrap.querySelectorAll(".push-forward");
	
	    if (pushedItems.length) {
	      pushedItems.forEach(function (el) {
	        el.classList.add("raiseZindex");
	      });
	    }
	  }
	  function _dropZindex() {
	    var pushedItems = wrap.querySelectorAll(".push-forward");
	
	    if (pushedItems.length) {
	      pushedItems.forEach(function (el) {
	        el.classList.add("dropZindex");
	      });
	    }
	  }
	  //строит элементы один за другим туда сюда
	  function clearActiveSlide() {
	    videos.forEach(function (el) {
	      if ((0, _hasClass.hasClass)(el, "active_slide")) {
	        el.classList.remove("active_slide");
	      }
	    });
	  }
	  function clear() {
	    videos.forEach(function (el) {
	      if ((0, _hasClass.hasClass)(el, "push-back")) {
	        el.classList.remove("push-back");
	      }
	    });
	  }
	  function stopAndPlay(item, type) {
	    if (item.nodeName === "VIDEO") {
	      videos.forEach(function (el) {
	        try {
	          el.controls = false;
	          el.pause();
	        } catch (e) {
	          console.log(e);
	        }
	      });
	    }
	    if (type === "back") {
	      item.controls = true;
	      item.play();
	    } else {
	      item.controls = true;
	      item.play();
	    }
	  }
	  //выравнивает элементы
	  function align(arr) {
	    var iteration = 0;
	    var step = 0;
	    var scaleStep = 1;
	    var zIndexStep = 1;
	
	    arr.forEach(function (el) {
	      var activeSlideIter = 0;
	      if (iteration > videosLength) {
	        return;
	      }
	      if (iteration === 0) {
	        (0, _classesHandler2._classesHandler)(el, "active_slide", "add");
	      }
	      if (el.classList.value.indexOf("raiseZindex") > 0) {
	        (0, _classesHandler2._classesHandler)(el, "raiseZindex", "remove");
	      }
	      if (el.classList.value.indexOf("dropZindex") > 0) {
	        (0, _classesHandler2._classesHandler)(el, "dropZindex", "remove");
	      }
	
	      activeSlideIter = activeSlideIter + 1;
	      el.style.zIndex = 0 - zIndexStep;
	      el.style.transform = "scale(" + scaleStep + ")";
	
	      if (iteration > 3) {
	        return;
	      }
	
	      el.style.left = step + "px";
	      zIndexStep = zIndexStep + 1;
	      step = step + 75;
	      scaleStep = scaleStep - 0.1;
	      iteration = iteration + 1;
	    });
	  }
	
	  //выбираем элементы для построения
	  function normalizeBackwards() {
	    var alined = [];
	
	    videos.forEach(function (el) {
	      if (!(0, _hasClass.hasClass)(el, "push-forward")) {
	        alined.push(el);
	      }
	    });
	
	    align(alined);
	    clear();
	  }
	
	  function normalizeForward() {
	    var leftEl = [];
	
	    videos.forEach(function (el) {
	      if (el.classList.value.indexOf("push") < 0) {
	        leftEl.push(el);
	      }
	    });
	
	    align(leftEl);
	  }
	
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
	    clearActiveSlide();
	
	    if (direction >= 0) {
	      _dropZindex();
	      (0, _classesHandler2._classesHandler)(curVideo, "push-back", "remove");
	      (0, _classesHandler2._classesHandler)(curVideo, "push-forward", "add");
	      (0, _classesHandler2._classesHandler)(back, "block-btn", "remove");
	
	      curVideo.style.zIndex = 99;
	
	      recount("forward");
	      normalizeForward();
	      stopAndPlay(curVideo, "forward");
	    } else {
	      _raiseZindex();
	      recount("back");
	
	      (0, _classesHandler2._classesHandler)(curVideo, "push-forward", "remove");
	      (0, _classesHandler2._classesHandler)(curVideo, "push-back", "add");
	
	      normalizeBackwards();
	      stopAndPlay(curVideo, "back");
	    }
	
	    activeIndex();
	  }
	  function playPause() {
	    var video = wrap.querySelector(".active_slide");
	    if (!video.paused) {
	      video.pause();
	      playBtn.style.opacity = 1;
	    } else {
	      video.play();
	      playBtn.style.opacity = 0;
	    }
	  }
	};
	
	$(document).ready(function () {
	  videoSlider();
	});
	
	exports.videoSlider = videoSlider;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function hasClass(target, className) {
	  return new RegExp("(\\s|^)" + className + "(\\s|$)").test(target.className);
	}
	
	exports.hasClass = hasClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function _classesHandler(el, elClass, type) {
	  if (type == "add") {
	    el.classList.add(elClass);
	  } else {
	    el.classList.remove(elClass);
	  }
	}
	
	exports._classesHandler = _classesHandler;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map