/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/electricGin.png":
/*!************************************!*\
  !*** ./src/images/electricGin.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669af197432370d32f6.png";

/***/ }),

/***/ "./src/images/kirchoffsBeer.png":
/*!**************************************!*\
  !*** ./src/images/kirchoffsBeer.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b748aff7dbd2ddafc15c.png";

/***/ }),

/***/ "./src/images/ohmsWhiskey.png":
/*!************************************!*\
  !*** ./src/images/ohmsWhiskey.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34eea782e56c0b355a83.png";

/***/ }),

/***/ "./src/images/pnpCheesecake.png":
/*!**************************************!*\
  !*** ./src/images/pnpCheesecake.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "711cefbcd176a8c801cb.png";

/***/ }),

/***/ "./src/images/teslasCocktail.png":
/*!***************************************!*\
  !*** ./src/images/teslasCocktail.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19b649e8077b83075942.png";

/***/ }),

/***/ "./src/images/theHighVoltageBurger.png":
/*!*********************************************!*\
  !*** ./src/images/theHighVoltageBurger.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "643d78af1d1727e5532c.png";

/***/ }),

/***/ "./src/images/threephaseSandwich.png":
/*!*******************************************!*\
  !*** ./src/images/threephaseSandwich.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd102bc2c9cb3ed56378.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_electricGin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/electricGin.png */ "./src/images/electricGin.png");
/* harmony import */ var _images_ohmsWhiskey_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ohmsWhiskey.png */ "./src/images/ohmsWhiskey.png");
/* harmony import */ var _images_kirchoffsBeer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/kirchoffsBeer.png */ "./src/images/kirchoffsBeer.png");
/* harmony import */ var _images_teslasCocktail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/teslasCocktail.png */ "./src/images/teslasCocktail.png");
/* harmony import */ var _images_threephaseSandwich_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/threephaseSandwich.png */ "./src/images/threephaseSandwich.png");
/* harmony import */ var _images_theHighVoltageBurger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/theHighVoltageBurger.png */ "./src/images/theHighVoltageBurger.png");
/* harmony import */ var _images_pnpCheesecake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pnpCheesecake.png */ "./src/images/pnpCheesecake.png");








function menu()
{
	const element = document.createElement('div');
	element.setAttribute('id', 'page');
	const headingContainer = document.createElement('div');
	const heading = document.createElement('h1');
	heading.setAttribute('id', 'title');
	heading.innerHTML = "Menu";
	headingContainer.appendChild(heading);
	element.appendChild(headingContainer);
	const drinksContainer = document.createElement('div');
	drinksContainer.classList.add('type-container');
	const drinks = document.createElement('h2');
	drinks.innerHTML = 'Drinks';
	drinksContainer.appendChild(drinks);
	element.appendChild(drinksContainer);
	const electricGinContainer = document.createElement('div');
	electricGinContainer.classList.add('menu-items');
	const electricGin = document.createElement('h3');
	electricGin.classList.add('item-name');
	electricGin.innerHTML = 'Electric Gin';
	electricGinContainer.appendChild(electricGin);
	const electricGinDiv = document.createElement('div');
	electricGinDiv.classList.add('item-div');
	const electricGinDesc = document.createElement('p');
	electricGinDesc.innerHTML = 'Electrical spirit london dry gin mixed with tonic and blue curacao.';
	const myElecGin = new Image();
	myElecGin.src = _images_electricGin_png__WEBPACK_IMPORTED_MODULE_0__;
	myElecGin.classList.add('menu-image');
	electricGinDiv.appendChild(electricGinDesc);
	electricGinDiv.appendChild(myElecGin);
	electricGinContainer.appendChild(electricGinDiv);
	element.appendChild(electricGinContainer);
	const ohmsWhiskeyContainer = document.createElement('div');
	ohmsWhiskeyContainer.classList.add('menu-items');
	const ohmsWhiskey = document.createElement('h3');
	ohmsWhiskey.classList.add('item-name');
	ohmsWhiskey.innerHTML = "Ohm's Whiskey";
	ohmsWhiskeyContainer.appendChild(ohmsWhiskey);
	const ohmsWhiskeyDiv = document.createElement('div');
	ohmsWhiskeyDiv.classList.add('item-div');
	const ohmsWhiskeyDesc = document.createElement('p');
	ohmsWhiskeyDesc.innerHTML = 'Whiskey mixed with blood orange juice and a jalapeno to add a bit of spiciness.';
	const myWhiskey = new Image();
	myWhiskey.src = _images_ohmsWhiskey_png__WEBPACK_IMPORTED_MODULE_1__;
	myWhiskey.classList.add('menu-image');
	ohmsWhiskeyDiv.appendChild(ohmsWhiskeyDesc);
	ohmsWhiskeyDiv.appendChild(myWhiskey);
	ohmsWhiskeyContainer.appendChild(ohmsWhiskeyDiv);
	element.appendChild(ohmsWhiskeyContainer);
	const kirchoffsBeerContainer = document.createElement('div');
	kirchoffsBeerContainer.classList.add('menu-items');
	const kirchoffsBeer = document.createElement('h3');
	kirchoffsBeer.classList.add('item-name');
	kirchoffsBeer.innerHTML = "Kirchoff's Beer";
	kirchoffsBeerContainer.appendChild(kirchoffsBeer);
	const kirchoffsBeerDiv = document.createElement('div');
	kirchoffsBeerDiv.classList.add('item-div');
	const kirchoffsBeerDesc = document.createElement('p');
	kirchoffsBeerDesc.innerHTML = 'The classic U-Boot cocktail but instead of vodka we use Korn.'; 
	const myBeer = new Image();
	myBeer.src = _images_kirchoffsBeer_png__WEBPACK_IMPORTED_MODULE_2__;
	myBeer.classList.add('menu-image');
	kirchoffsBeerDiv.appendChild(kirchoffsBeerDesc);
	kirchoffsBeerDiv.appendChild(myBeer);
	kirchoffsBeerContainer.appendChild(kirchoffsBeerDiv);
	element.appendChild(kirchoffsBeerContainer);
	const teslasCocktailContainer = document.createElement('div');
	teslasCocktailContainer.classList.add('menu-items');
	const teslasCocktail = document.createElement('h3');
	teslasCocktail.classList.add('item-name');
	teslasCocktail.innerHTML = "Tesla's Cocktail";
	teslasCocktailContainer.appendChild(teslasCocktail);
	const teslasCocktailDiv = document.createElement('div');
	teslasCocktailDiv.classList.add('item-div');
	const teslasCocktailDesc = document.createElement('p');
	teslasCocktailDesc.innerHTML = 'Tom Collins but to make it more interesting instead of gin, we use plum brandy.';
	const myCocktail = new Image();
	myCocktail.src = _images_teslasCocktail_png__WEBPACK_IMPORTED_MODULE_3__;
	myCocktail.classList.add('menu-image');
	teslasCocktailDiv.appendChild(teslasCocktailDesc);
	teslasCocktailDiv.appendChild(myCocktail);
	teslasCocktailContainer.appendChild(teslasCocktailDiv);
	element.appendChild(teslasCocktailContainer);
	const foodContainer = document.createElement('div');
	foodContainer.classList.add('type-container');
	const food = document.createElement('h2');
	food.innerHTML = 'Food';
	foodContainer.appendChild(food);
	element.appendChild(foodContainer);
	const threephaseSandwichContainer = document.createElement('div');
	threephaseSandwichContainer.classList.add('menu-items');
	const threephaseSandwich = document.createElement('h3');
	threephaseSandwich.classList.add('item-name');
	threephaseSandwich.innerHTML = 'Threephase Sandwich';
	threephaseSandwichContainer.appendChild(threephaseSandwich);
	const threephaseSandwichDiv = document.createElement('div');
	threephaseSandwichDiv.classList.add('item-div');
	const threephaseSandwichDesc = document.createElement('p');
	threephaseSandwichDesc.innerHTML = 'The forbidden sandwich';
	const mySandwich = new Image();
	mySandwich.src = _images_threephaseSandwich_png__WEBPACK_IMPORTED_MODULE_4__;
	mySandwich.classList.add('menu-image');
	threephaseSandwichDiv.appendChild(threephaseSandwichDesc);
	threephaseSandwichDiv.appendChild(mySandwich);
	threephaseSandwichContainer.appendChild(threephaseSandwichDiv);
	element.appendChild(threephaseSandwichContainer);
	const theHighVoltageBurgerContainer = document.createElement('div');
	theHighVoltageBurgerContainer.classList.add('menu-items');
	const theHighVoltageBurger = document.createElement('h3');
	theHighVoltageBurger.classList.add('item-name');
	theHighVoltageBurger.innerHTML = 'The High Voltage Burger';
	theHighVoltageBurgerContainer.appendChild(theHighVoltageBurger)
	const theHighVoltageBurgerDiv = document.createElement('div');
	theHighVoltageBurgerDiv.classList.add('item-div');
	const theHighVoltageBurgerDesc = document.createElement('p');
	theHighVoltageBurgerDesc.innerHTML = "The power of The High Voltage Burger can't be described by words, you have to try it for yourself.";
	const myBurger = new Image();
	myBurger.src = _images_theHighVoltageBurger_png__WEBPACK_IMPORTED_MODULE_5__;
	myBurger.classList.add('menu-image');
	theHighVoltageBurgerDiv.appendChild(theHighVoltageBurgerDesc);
	theHighVoltageBurgerDiv.appendChild(myBurger);
	theHighVoltageBurgerContainer.appendChild(theHighVoltageBurgerDiv)
	element.appendChild(theHighVoltageBurgerContainer);
	const dessertsContainer = document.createElement('div');
	dessertsContainer.classList.add('type-container');
	const desserts = document.createElement('h2');
	desserts.classList.add('item-name');
	desserts.innerHTML = 'Desserts';
	dessertsContainer.appendChild(desserts);
	element.appendChild(dessertsContainer);
	const pnpCheesecakeContainer = document.createElement('div');
	pnpCheesecakeContainer.classList.add('menu-items');
	const pnpCheesecake = document.createElement('h3');
	pnpCheesecake.classList.add('item-name');
	pnpCheesecake.innerHTML = "PNP Cheesecake";
	pnpCheesecakeContainer.appendChild(pnpCheesecake);
	const pnpCheesecakeDiv = document.createElement('div');
	pnpCheesecakeDiv.classList.add('item-div');
	const pnpCheesecakeDesc = document.createElement('p');
	pnpCheesecakeDesc.innerHTML = "The PNP Cheesecake consists of three layers. Graham crackers as it's base, the classic second layer mascarpone cheese, and another layer of graham crackers on top mixed with blueberry jelly.";
	const myCheesecake = new Image();
	myCheesecake.src = _images_pnpCheesecake_png__WEBPACK_IMPORTED_MODULE_6__;
	myCheesecake.classList.add('menu-image');
	pnpCheesecakeDiv.appendChild(pnpCheesecakeDesc);
	pnpCheesecakeDiv.appendChild(myCheesecake);
	pnpCheesecakeContainer.appendChild(pnpCheesecakeDiv);
	element.appendChild(pnpCheesecakeContainer);
	return element;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0Q7QUFDSTtBQUNJO0FBQ0U7QUFDUTtBQUNJO0FBQ2Q7O0FBRTdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNEQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZEQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZWxlY0dpblBob3RvIGZyb20gJy4vaW1hZ2VzL2VsZWN0cmljR2luLnBuZyc7XG5pbXBvcnQgb2htc1doaXNrZXlQaG90byBmcm9tICcuL2ltYWdlcy9vaG1zV2hpc2tleS5wbmcnO1xuaW1wb3J0IGtpcmNob2Zmc0JlZXJQaG90byBmcm9tICcuL2ltYWdlcy9raXJjaG9mZnNCZWVyLnBuZyc7XG5pbXBvcnQgdGVzbGFzQ29ja3RhaWxQaG90byBmcm9tICcuL2ltYWdlcy90ZXNsYXNDb2NrdGFpbC5wbmcnO1xuaW1wb3J0IHRocmVlcGhhc2VTYW5kd2ljaFBob3RvIGZyb20gJy4vaW1hZ2VzL3RocmVlcGhhc2VTYW5kd2ljaC5wbmcnO1xuaW1wb3J0IHRoZUhpZ2hWb2x0YWdlQnVyZ2VyUGhvdG8gZnJvbSAnLi9pbWFnZXMvdGhlSGlnaFZvbHRhZ2VCdXJnZXIucG5nJztcbmltcG9ydCBwbnBDaGVlc2VjYWtlUGhvdG8gZnJvbSAnLi9pbWFnZXMvcG5wQ2hlZXNlY2FrZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KClcbntcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZScpO1xuXHRjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcblx0aGVhZGluZy5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblx0aGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nQ29udGFpbmVyKTtcblx0Y29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRyaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLWNvbnRhaW5lcicpO1xuXHRjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRkcmlua3MuaW5uZXJIVE1MID0gJ0RyaW5rcyc7XG5cdGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua3MpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRyaW5rc0NvbnRhaW5lcik7XG5cdGNvbnN0IGVsZWN0cmljR2luQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZWN0cmljR2luQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblx0Y29uc3QgZWxlY3RyaWNHaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRlbGVjdHJpY0dpbi5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcblx0ZWxlY3RyaWNHaW4uaW5uZXJIVE1MID0gJ0VsZWN0cmljIEdpbic7XG5cdGVsZWN0cmljR2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZWN0cmljR2luKTtcblx0Y29uc3QgZWxlY3RyaWNHaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZWxlY3RyaWNHaW5EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1kaXYnKTtcblx0Y29uc3QgZWxlY3RyaWNHaW5EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRlbGVjdHJpY0dpbkRlc2MuaW5uZXJIVE1MID0gJ0VsZWN0cmljYWwgc3Bpcml0IGxvbmRvbiBkcnkgZ2luIG1peGVkIHdpdGggdG9uaWMgYW5kIGJsdWUgY3VyYWNhby4nO1xuXHRjb25zdCBteUVsZWNHaW4gPSBuZXcgSW1hZ2UoKTtcblx0bXlFbGVjR2luLnNyYyA9IGVsZWNHaW5QaG90bztcblx0bXlFbGVjR2luLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0ZWxlY3RyaWNHaW5EaXYuYXBwZW5kQ2hpbGQoZWxlY3RyaWNHaW5EZXNjKTtcblx0ZWxlY3RyaWNHaW5EaXYuYXBwZW5kQ2hpbGQobXlFbGVjR2luKTtcblx0ZWxlY3RyaWNHaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlY3RyaWNHaW5EaXYpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGVsZWN0cmljR2luQ29udGFpbmVyKTtcblx0Y29uc3Qgb2htc1doaXNrZXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0b2htc1doaXNrZXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCBvaG1zV2hpc2tleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdG9obXNXaGlza2V5LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHRvaG1zV2hpc2tleS5pbm5lckhUTUwgPSBcIk9obSdzIFdoaXNrZXlcIjtcblx0b2htc1doaXNrZXlDb250YWluZXIuYXBwZW5kQ2hpbGQob2htc1doaXNrZXkpO1xuXHRjb25zdCBvaG1zV2hpc2tleURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRvaG1zV2hpc2tleURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCBvaG1zV2hpc2tleURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdG9obXNXaGlza2V5RGVzYy5pbm5lckhUTUwgPSAnV2hpc2tleSBtaXhlZCB3aXRoIGJsb29kIG9yYW5nZSBqdWljZSBhbmQgYSBqYWxhcGVubyB0byBhZGQgYSBiaXQgb2Ygc3BpY2luZXNzLic7XG5cdGNvbnN0IG15V2hpc2tleSA9IG5ldyBJbWFnZSgpO1xuXHRteVdoaXNrZXkuc3JjID0gb2htc1doaXNrZXlQaG90bztcblx0bXlXaGlza2V5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0b2htc1doaXNrZXlEaXYuYXBwZW5kQ2hpbGQob2htc1doaXNrZXlEZXNjKTtcblx0b2htc1doaXNrZXlEaXYuYXBwZW5kQ2hpbGQobXlXaGlza2V5KTtcblx0b2htc1doaXNrZXlDb250YWluZXIuYXBwZW5kQ2hpbGQob2htc1doaXNrZXlEaXYpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKG9obXNXaGlza2V5Q29udGFpbmVyKTtcblx0Y29uc3Qga2lyY2hvZmZzQmVlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRraXJjaG9mZnNCZWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblx0Y29uc3Qga2lyY2hvZmZzQmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdGtpcmNob2Zmc0JlZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG5cdGtpcmNob2Zmc0JlZXIuaW5uZXJIVE1MID0gXCJLaXJjaG9mZidzIEJlZXJcIjtcblx0a2lyY2hvZmZzQmVlckNvbnRhaW5lci5hcHBlbmRDaGlsZChraXJjaG9mZnNCZWVyKTtcblx0Y29uc3Qga2lyY2hvZmZzQmVlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRraXJjaG9mZnNCZWVyRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGl2Jyk7XG5cdGNvbnN0IGtpcmNob2Zmc0JlZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRraXJjaG9mZnNCZWVyRGVzYy5pbm5lckhUTUwgPSAnVGhlIGNsYXNzaWMgVS1Cb290IGNvY2t0YWlsIGJ1dCBpbnN0ZWFkIG9mIHZvZGthIHdlIHVzZSBLb3JuLic7IFxuXHRjb25zdCBteUJlZXIgPSBuZXcgSW1hZ2UoKTtcblx0bXlCZWVyLnNyYyA9IGtpcmNob2Zmc0JlZXJQaG90bztcblx0bXlCZWVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0a2lyY2hvZmZzQmVlckRpdi5hcHBlbmRDaGlsZChraXJjaG9mZnNCZWVyRGVzYyk7XG5cdGtpcmNob2Zmc0JlZXJEaXYuYXBwZW5kQ2hpbGQobXlCZWVyKTtcblx0a2lyY2hvZmZzQmVlckNvbnRhaW5lci5hcHBlbmRDaGlsZChraXJjaG9mZnNCZWVyRGl2KTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChraXJjaG9mZnNCZWVyQ29udGFpbmVyKTtcblx0Y29uc3QgdGVzbGFzQ29ja3RhaWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGVzbGFzQ29ja3RhaWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHRlc2xhc0NvY2t0YWlsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHR0ZXNsYXNDb2NrdGFpbC5pbm5lckhUTUwgPSBcIlRlc2xhJ3MgQ29ja3RhaWxcIjtcblx0dGVzbGFzQ29ja3RhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGVzbGFzQ29ja3RhaWwpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0ZXNsYXNDb2NrdGFpbERpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRlc2xhc0NvY2t0YWlsRGVzYy5pbm5lckhUTUwgPSAnVG9tIENvbGxpbnMgYnV0IHRvIG1ha2UgaXQgbW9yZSBpbnRlcmVzdGluZyBpbnN0ZWFkIG9mIGdpbiwgd2UgdXNlIHBsdW0gYnJhbmR5Lic7XG5cdGNvbnN0IG15Q29ja3RhaWwgPSBuZXcgSW1hZ2UoKTtcblx0bXlDb2NrdGFpbC5zcmMgPSB0ZXNsYXNDb2NrdGFpbFBob3RvO1xuXHRteUNvY2t0YWlsLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0dGVzbGFzQ29ja3RhaWxEaXYuYXBwZW5kQ2hpbGQodGVzbGFzQ29ja3RhaWxEZXNjKTtcblx0dGVzbGFzQ29ja3RhaWxEaXYuYXBwZW5kQ2hpbGQobXlDb2NrdGFpbCk7XG5cdHRlc2xhc0NvY2t0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlc2xhc0NvY2t0YWlsRGl2KTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXNsYXNDb2NrdGFpbENvbnRhaW5lcik7XG5cdGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Zm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLWNvbnRhaW5lcicpO1xuXHRjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0Zm9vZC5pbm5lckhUTUwgPSAnRm9vZCc7XG5cdGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG5cdGNvbnN0IHRocmVlcGhhc2VTYW5kd2ljaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCB0aHJlZXBoYXNlU2FuZHdpY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2guY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaC5pbm5lckhUTUwgPSAnVGhyZWVwaGFzZSBTYW5kd2ljaCc7XG5cdHRocmVlcGhhc2VTYW5kd2ljaENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aHJlZXBoYXNlU2FuZHdpY2gpO1xuXHRjb25zdCB0aHJlZXBoYXNlU2FuZHdpY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhyZWVwaGFzZVNhbmR3aWNoRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGl2Jyk7XG5cdGNvbnN0IHRocmVlcGhhc2VTYW5kd2ljaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaERlc2MuaW5uZXJIVE1MID0gJ1RoZSBmb3JiaWRkZW4gc2FuZHdpY2gnO1xuXHRjb25zdCBteVNhbmR3aWNoID0gbmV3IEltYWdlKCk7XG5cdG15U2FuZHdpY2guc3JjID0gdGhyZWVwaGFzZVNhbmR3aWNoUGhvdG87XG5cdG15U2FuZHdpY2guY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2hEaXYuYXBwZW5kQ2hpbGQodGhyZWVwaGFzZVNhbmR3aWNoRGVzYyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaERpdi5hcHBlbmRDaGlsZChteVNhbmR3aWNoKTtcblx0dGhyZWVwaGFzZVNhbmR3aWNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHRocmVlcGhhc2VTYW5kd2ljaERpdik7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhyZWVwaGFzZVNhbmR3aWNoQ29udGFpbmVyKTtcblx0Y29uc3QgdGhlSGlnaFZvbHRhZ2VCdXJnZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCB0aGVIaWdoVm9sdGFnZUJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlci5pbm5lckhUTUwgPSAnVGhlIEhpZ2ggVm9sdGFnZSBCdXJnZXInO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVIaWdoVm9sdGFnZUJ1cmdlcilcblx0Y29uc3QgdGhlSGlnaFZvbHRhZ2VCdXJnZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXJEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1kaXYnKTtcblx0Y29uc3QgdGhlSGlnaFZvbHRhZ2VCdXJnZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlckRlc2MuaW5uZXJIVE1MID0gXCJUaGUgcG93ZXIgb2YgVGhlIEhpZ2ggVm9sdGFnZSBCdXJnZXIgY2FuJ3QgYmUgZGVzY3JpYmVkIGJ5IHdvcmRzLCB5b3UgaGF2ZSB0byB0cnkgaXQgZm9yIHlvdXJzZWxmLlwiO1xuXHRjb25zdCBteUJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuXHRteUJ1cmdlci5zcmMgPSB0aGVIaWdoVm9sdGFnZUJ1cmdlclBob3RvO1xuXHRteUJ1cmdlci5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGl2LmFwcGVuZENoaWxkKHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGVzYyk7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGl2LmFwcGVuZENoaWxkKG15QnVyZ2VyKTtcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlSGlnaFZvbHRhZ2VCdXJnZXJEaXYpXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhlSGlnaFZvbHRhZ2VCdXJnZXJDb250YWluZXIpO1xuXHRjb25zdCBkZXNzZXJ0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkZXNzZXJ0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLWNvbnRhaW5lcicpO1xuXHRjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHRkZXNzZXJ0cy5pbm5lckhUTUwgPSAnRGVzc2VydHMnO1xuXHRkZXNzZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzc2VydHNDb250YWluZXIpO1xuXHRjb25zdCBwbnBDaGVlc2VjYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHBucENoZWVzZWNha2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCBwbnBDaGVlc2VjYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0cG5wQ2hlZXNlY2FrZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcblx0cG5wQ2hlZXNlY2FrZS5pbm5lckhUTUwgPSBcIlBOUCBDaGVlc2VjYWtlXCI7XG5cdHBucENoZWVzZWNha2VDb250YWluZXIuYXBwZW5kQ2hpbGQocG5wQ2hlZXNlY2FrZSk7XG5cdGNvbnN0IHBucENoZWVzZWNha2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cG5wQ2hlZXNlY2FrZURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCBwbnBDaGVlc2VjYWtlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cG5wQ2hlZXNlY2FrZURlc2MuaW5uZXJIVE1MID0gXCJUaGUgUE5QIENoZWVzZWNha2UgY29uc2lzdHMgb2YgdGhyZWUgbGF5ZXJzLiBHcmFoYW0gY3JhY2tlcnMgYXMgaXQncyBiYXNlLCB0aGUgY2xhc3NpYyBzZWNvbmQgbGF5ZXIgbWFzY2FycG9uZSBjaGVlc2UsIGFuZCBhbm90aGVyIGxheWVyIG9mIGdyYWhhbSBjcmFja2VycyBvbiB0b3AgbWl4ZWQgd2l0aCBibHVlYmVycnkgamVsbHkuXCI7XG5cdGNvbnN0IG15Q2hlZXNlY2FrZSA9IG5ldyBJbWFnZSgpO1xuXHRteUNoZWVzZWNha2Uuc3JjID0gcG5wQ2hlZXNlY2FrZVBob3RvO1xuXHRteUNoZWVzZWNha2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHRwbnBDaGVlc2VjYWtlRGl2LmFwcGVuZENoaWxkKHBucENoZWVzZWNha2VEZXNjKTtcblx0cG5wQ2hlZXNlY2FrZURpdi5hcHBlbmRDaGlsZChteUNoZWVzZWNha2UpO1xuXHRwbnBDaGVlc2VjYWtlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBucENoZWVzZWNha2VEaXYpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKHBucENoZWVzZWNha2VDb250YWluZXIpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==