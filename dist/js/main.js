/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/***/ (() => {

var checkAccordion = document.querySelector(".accordion");

if (checkAccordion) {
  var btns = document.querySelectorAll(".accordion__title");
  var accActive = document.querySelectorAll(".accordion__title");
  var accTxt = document.querySelectorAll(".accordion__txt");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("acc-active")) {
        // btns.forEach((btn) => {
        //   btn.classList.remove("acc-active");
        // });
        this.classList.add("acc-active");
      } else {
        this.classList.remove("acc-active");
      }
    });
  });
} // let btns = document.querySelectorAll(".accordion__title");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     if (!this.classList.contains("acc-active")) {
//       this.classList.add("acc-active");
//       openHeight;
//     } else {
//       this.classList.remove("acc-active");
//       closeHeight;
//     }
//   });
// });

/***/ }),

/***/ "./src/blocks/modules/allPlaces/allPlaces.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/allPlaces/allPlaces.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");


function initSwiper() {
  var shopsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".shopSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_shops",
      prevEl: ".arrow-hidden-prev_shops"
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var enterSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".enterSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_enter",
      prevEl: ".arrow-hidden-prev_enter"
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var foodSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".foodSwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".arrow-hidden-next_food",
      prevEl: ".arrow-hidden-prev_food"
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}

initSwiper();
document.querySelectorAll('.allPlacesTabs__title').forEach(function (i) {
  i.addEventListener('click', function () {
    setTimeout(function () {
      initSwiper();
    }, "500");
  });
});

/***/ }),

/***/ "./src/blocks/modules/cinema/cinema.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/cinema/cinema.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var mySwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true
});
var mySwiper2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next_cinema",
    prevEl: ".swiper-button-prev_cinema"
  },
  thumbs: {
    swiper: mySwiper
  }
});

/***/ }),

/***/ "./src/blocks/modules/datePicker/datePicker.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/datePicker/datePicker.js ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-out */ "./node_modules/scroll-out/lib/index.js");
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Splitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Splitting */ "./node_modules/Splitting/dist/splitting.js");
/* harmony import */ var Splitting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Splitting__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 //burger

window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header__list"),
      menuItem = document.querySelectorAll(".header__link"),
      hamburger = document.querySelector(".header__burger"),
      overflowHidden = document.querySelector("body");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
}); //smooth scroll

var anchors = document.querySelectorAll(".header__link");

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //Hidden header

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var header = document.querySelector(".header");
var scrollPrev = 0;
window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.classList.add("out");
  } else {
    header.classList.remove("out");
  }

  scrollPrev = scrolled;
});

window.onload = function () {
  Splitting__WEBPACK_IMPORTED_MODULE_1___default()();
  scroll_out__WEBPACK_IMPORTED_MODULE_0___default()({
    targets: ".word",
    once: true
  });
};

/***/ }),

/***/ "./src/blocks/modules/main-slider/main-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-slider/main-slider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

var swiperMain = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.main-slider', {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
swiperMain.on('slideChange', function (e) {
  var sectionPageFirst = document.querySelector('.section-page1');
  console.log(swiperMain.activeIndex);

  if (swiperMain.activeIndex == 0) {
    sectionPageFirst.classList.remove('section-page1_1');
    sectionPageFirst.classList.remove('section-page1_2');
    sectionPageFirst.classList.add('section-page1_0');
  }

  if (swiperMain.activeIndex == 1) {
    sectionPageFirst.classList.remove('section-page1_0');
    sectionPageFirst.classList.remove('section-page1_2');
    sectionPageFirst.classList.add('section-page1_1');
  }

  if (swiperMain.activeIndex == 2) {
    sectionPageFirst.classList.remove('section-page1_0');
    sectionPageFirst.classList.remove('section-page1_1');
    sectionPageFirst.classList.add('section-page1_2');
  }
});

/***/ }),

/***/ "./src/blocks/modules/popups/popups.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/popups/popups.js ***!
  \*********************************************/
/***/ (() => {

function modalContent(trigger, item) {
  var btn = document.querySelectorAll(trigger),
      pop = document.querySelector(item),
      close = document.querySelectorAll('.popup-close'),
      closeBack = document.querySelectorAll('.popup'),
      activeClass = 'show',
      hideClass = 'hide';

  function showContent() {
    pop.classList.add(activeClass);
    pop.classList.remove(hideClass);
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('resize'));
  }

  function hideContent() {
    pop.classList.remove(activeClass);
    pop.classList.add(hideClass);
    document.body.style.overflow = '';
  }

  function showHideContent(trigger, func) {
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target && e.target.className === item.className) {
          e.preventDefault();
          func();
        }
      });
    });
  }

  showHideContent(btn, showContent);
  showHideContent(close, hideContent);
  showHideContent(closeBack, hideContent);

  function hideScroll() {
    var div = document.createElement('div');
    document.body.append(div);
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    var result = div.offsetWidth - div.clientWidth;
    return result;
  }
}

modalContent('.popup-btn', '.popup_main-popup');

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/***/ (() => {

var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(function (item) {
      item.style.display = "none";
    });
    tab.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener("click", function (e) {
    var target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach(function (item, i) {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }

    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_shops')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter');
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food');
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_shops');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food');
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_shops');
    }

    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_enter')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops');
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food');
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_enter');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food');
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_enter');
    }

    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_food')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter');
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops');
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_food');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter');
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops');
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_food');
    }
  });
};

var servicesTabs = document.querySelector(".allPlacesTabs");

if (servicesTabs) {
  tabs(".allPlacesTabs__titles", ".allPlacesTabs__title", ".allPlacesTabs__item", "allPlacesTabs__title_active");
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-slider/main-slider */ "./src/blocks/modules/main-slider/main-slider.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/popups/popups */ "./src/blocks/modules/popups/popups.js");
/* harmony import */ var _modules_popups_popups__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_popups_popups__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_cinema_cinema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/cinema/cinema */ "./src/blocks/modules/cinema/cinema.js");
/* harmony import */ var _modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/datePicker/datePicker */ "./src/blocks/modules/datePicker/datePicker.js");
/* harmony import */ var _modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_datePicker_datePicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_allPlaces_allPlaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/allPlaces/allPlaces */ "./src/blocks/modules/allPlaces/allPlaces.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map