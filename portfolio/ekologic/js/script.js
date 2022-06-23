/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/aboutSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/aboutSlider.js ***!
  \***************************************/
/***/ ((module) => {

function aboutSlider () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.about-project__pagination',
          clickable: true,
          type: 'bullets',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.about-project__button-next',
          prevEl: '.about-project__button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}

module.exports = aboutSlider;

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((module) => {

function burger () {
    const burger = document.querySelector('.header__burger'),
      navWrapper = document.querySelector('.header__nav');

    const togleBurger = () => {
        burger.addEventListener('click', () =>{
        navWrapper.classList.toggle('adaptiv')
     })
    }
    togleBurger();
    
}

module.exports = burger;

/***/ }),

/***/ "./src/js/modules/smiSlider.js":
/*!*************************************!*\
  !*** ./src/js/modules/smiSlider.js ***!
  \*************************************/
/***/ ((module) => {

function smiSlider () {
    const swiperSmi = new Swiper('.smi-slider__wrapper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.smi-slider__pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.smi-slider__button-next',
          prevEl: '.smi-slider__button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}

module.exports = smiSlider

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
  const burger      = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js"),
        aboutSlider = __webpack_require__(/*! ./modules/aboutSlider */ "./src/js/modules/aboutSlider.js"),
        smiSlider   = __webpack_require__(/*! ./modules/smiSlider */ "./src/js/modules/smiSlider.js");

  burger();
  aboutSlider();
  smiSlider();
})







})();

/******/ })()
;
//# sourceMappingURL=script.js.map