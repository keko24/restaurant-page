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
	const ginPrice = document.createElement('p');
	ginPrice.classList.add('price');
	ginPrice.innerHTML = 'Price: 500 EERs';
	electricGinContainer.appendChild(ginPrice);
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
	const whiskeyPrice = document.createElement('p');
	whiskeyPrice.classList.add('price');
	whiskeyPrice.innerHTML = 'Price: 700 EERs';
	ohmsWhiskeyContainer.appendChild(whiskeyPrice);
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
	const beerPrice = document.createElement('p');
	beerPrice.classList.add('price');
	beerPrice.innerHTML = 'Price: 300 EERs';
	kirchoffsBeerContainer.appendChild(beerPrice);
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
	const cocktailPrice = document.createElement('p');
	cocktailPrice.classList.add('price');
	cocktailPrice.innerHTML = 'Price: 600 EERs';
	teslasCocktailContainer.appendChild(cocktailPrice);
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
	const sandwichPrice = document.createElement('p');
	sandwichPrice.classList.add('price');
	sandwichPrice.innerHTML = 'Price: 400 EERs';
	threephaseSandwichContainer.appendChild(sandwichPrice);
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
	const burgerPrice = document.createElement('p');
	burgerPrice.classList.add('price');
	burgerPrice.innerHTML = 'Price: 600 EERs';
	theHighVoltageBurgerContainer.appendChild(burgerPrice);
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
	const cheesecakePrice = document.createElement('p');
	cheesecakePrice.classList.add('price');
	cheesecakePrice.innerHTML = 'Price: 400 EERs';
	pnpCheesecakeContainer.appendChild(cheesecakePrice);
	element.appendChild(pnpCheesecakeContainer);
	return element;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0Q7QUFDSTtBQUNJO0FBQ0U7QUFDUTtBQUNJO0FBQ2Q7O0FBRTdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzREFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyREFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2REFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBlbGVjR2luUGhvdG8gZnJvbSAnLi9pbWFnZXMvZWxlY3RyaWNHaW4ucG5nJztcbmltcG9ydCBvaG1zV2hpc2tleVBob3RvIGZyb20gJy4vaW1hZ2VzL29obXNXaGlza2V5LnBuZyc7XG5pbXBvcnQga2lyY2hvZmZzQmVlclBob3RvIGZyb20gJy4vaW1hZ2VzL2tpcmNob2Zmc0JlZXIucG5nJztcbmltcG9ydCB0ZXNsYXNDb2NrdGFpbFBob3RvIGZyb20gJy4vaW1hZ2VzL3Rlc2xhc0NvY2t0YWlsLnBuZyc7XG5pbXBvcnQgdGhyZWVwaGFzZVNhbmR3aWNoUGhvdG8gZnJvbSAnLi9pbWFnZXMvdGhyZWVwaGFzZVNhbmR3aWNoLnBuZyc7XG5pbXBvcnQgdGhlSGlnaFZvbHRhZ2VCdXJnZXJQaG90byBmcm9tICcuL2ltYWdlcy90aGVIaWdoVm9sdGFnZUJ1cmdlci5wbmcnO1xuaW1wb3J0IHBucENoZWVzZWNha2VQaG90byBmcm9tICcuL2ltYWdlcy9wbnBDaGVlc2VjYWtlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKVxue1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwYWdlJyk7XG5cdGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuXHRoZWFkaW5nLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXHRoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuXHRjb25zdCBkcmlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZHJpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R5cGUtY29udGFpbmVyJyk7XG5cdGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdGRyaW5rcy5pbm5lckhUTUwgPSAnRHJpbmtzJztcblx0ZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZHJpbmtzQ29udGFpbmVyKTtcblx0Y29uc3QgZWxlY3RyaWNHaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZWxlY3RyaWNHaW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCBlbGVjdHJpY0dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdGVsZWN0cmljR2luLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHRlbGVjdHJpY0dpbi5pbm5lckhUTUwgPSAnRWxlY3RyaWMgR2luJztcblx0ZWxlY3RyaWNHaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlY3RyaWNHaW4pO1xuXHRjb25zdCBlbGVjdHJpY0dpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbGVjdHJpY0dpbkRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCBlbGVjdHJpY0dpbkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGVsZWN0cmljR2luRGVzYy5pbm5lckhUTUwgPSAnRWxlY3RyaWNhbCBzcGlyaXQgbG9uZG9uIGRyeSBnaW4gbWl4ZWQgd2l0aCB0b25pYyBhbmQgYmx1ZSBjdXJhY2FvLic7XG5cdGNvbnN0IG15RWxlY0dpbiA9IG5ldyBJbWFnZSgpO1xuXHRteUVsZWNHaW4uc3JjID0gZWxlY0dpblBob3RvO1xuXHRteUVsZWNHaW4uY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHRlbGVjdHJpY0dpbkRpdi5hcHBlbmRDaGlsZChlbGVjdHJpY0dpbkRlc2MpO1xuXHRlbGVjdHJpY0dpbkRpdi5hcHBlbmRDaGlsZChteUVsZWNHaW4pO1xuXHRlbGVjdHJpY0dpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVjdHJpY0dpbkRpdik7XG5cdGNvbnN0IGdpblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRnaW5QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXHRnaW5QcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDUwMCBFRVJzJztcblx0ZWxlY3RyaWNHaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2luUHJpY2UpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGVsZWN0cmljR2luQ29udGFpbmVyKTtcblx0Y29uc3Qgb2htc1doaXNrZXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0b2htc1doaXNrZXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCBvaG1zV2hpc2tleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdG9obXNXaGlza2V5LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHRvaG1zV2hpc2tleS5pbm5lckhUTUwgPSBcIk9obSdzIFdoaXNrZXlcIjtcblx0b2htc1doaXNrZXlDb250YWluZXIuYXBwZW5kQ2hpbGQob2htc1doaXNrZXkpO1xuXHRjb25zdCBvaG1zV2hpc2tleURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRvaG1zV2hpc2tleURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCBvaG1zV2hpc2tleURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdG9obXNXaGlza2V5RGVzYy5pbm5lckhUTUwgPSAnV2hpc2tleSBtaXhlZCB3aXRoIGJsb29kIG9yYW5nZSBqdWljZSBhbmQgYSBqYWxhcGVubyB0byBhZGQgYSBiaXQgb2Ygc3BpY2luZXNzLic7XG5cdGNvbnN0IG15V2hpc2tleSA9IG5ldyBJbWFnZSgpO1xuXHRteVdoaXNrZXkuc3JjID0gb2htc1doaXNrZXlQaG90bztcblx0bXlXaGlza2V5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0b2htc1doaXNrZXlEaXYuYXBwZW5kQ2hpbGQob2htc1doaXNrZXlEZXNjKTtcblx0b2htc1doaXNrZXlEaXYuYXBwZW5kQ2hpbGQobXlXaGlza2V5KTtcblx0b2htc1doaXNrZXlDb250YWluZXIuYXBwZW5kQ2hpbGQob2htc1doaXNrZXlEaXYpO1xuXHRjb25zdCB3aGlza2V5UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHdoaXNrZXlQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXHR3aGlza2V5UHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiA3MDAgRUVScyc7XG5cdG9obXNXaGlza2V5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXNrZXlQcmljZSk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQob2htc1doaXNrZXlDb250YWluZXIpO1xuXHRjb25zdCBraXJjaG9mZnNCZWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGtpcmNob2Zmc0JlZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCBraXJjaG9mZnNCZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0a2lyY2hvZmZzQmVlci5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcblx0a2lyY2hvZmZzQmVlci5pbm5lckhUTUwgPSBcIktpcmNob2ZmJ3MgQmVlclwiO1xuXHRraXJjaG9mZnNCZWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGtpcmNob2Zmc0JlZXIpO1xuXHRjb25zdCBraXJjaG9mZnNCZWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGtpcmNob2Zmc0JlZXJEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS1kaXYnKTtcblx0Y29uc3Qga2lyY2hvZmZzQmVlckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGtpcmNob2Zmc0JlZXJEZXNjLmlubmVySFRNTCA9ICdUaGUgY2xhc3NpYyBVLUJvb3QgY29ja3RhaWwgYnV0IGluc3RlYWQgb2Ygdm9ka2Egd2UgdXNlIEtvcm4uJzsgXG5cdGNvbnN0IG15QmVlciA9IG5ldyBJbWFnZSgpO1xuXHRteUJlZXIuc3JjID0ga2lyY2hvZmZzQmVlclBob3RvO1xuXHRteUJlZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHRraXJjaG9mZnNCZWVyRGl2LmFwcGVuZENoaWxkKGtpcmNob2Zmc0JlZXJEZXNjKTtcblx0a2lyY2hvZmZzQmVlckRpdi5hcHBlbmRDaGlsZChteUJlZXIpO1xuXHRraXJjaG9mZnNCZWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGtpcmNob2Zmc0JlZXJEaXYpO1xuXHRjb25zdCBiZWVyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGJlZXJQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXHRiZWVyUHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAzMDAgRUVScyc7XG5cdGtpcmNob2Zmc0JlZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmVlclByaWNlKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChraXJjaG9mZnNCZWVyQ29udGFpbmVyKTtcblx0Y29uc3QgdGVzbGFzQ29ja3RhaWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGVzbGFzQ29ja3RhaWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHRlc2xhc0NvY2t0YWlsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHR0ZXNsYXNDb2NrdGFpbC5pbm5lckhUTUwgPSBcIlRlc2xhJ3MgQ29ja3RhaWxcIjtcblx0dGVzbGFzQ29ja3RhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGVzbGFzQ29ja3RhaWwpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0ZXNsYXNDb2NrdGFpbERpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXHRjb25zdCB0ZXNsYXNDb2NrdGFpbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRlc2xhc0NvY2t0YWlsRGVzYy5pbm5lckhUTUwgPSAnVG9tIENvbGxpbnMgYnV0IHRvIG1ha2UgaXQgbW9yZSBpbnRlcmVzdGluZyBpbnN0ZWFkIG9mIGdpbiwgd2UgdXNlIHBsdW0gYnJhbmR5Lic7XG5cdGNvbnN0IG15Q29ja3RhaWwgPSBuZXcgSW1hZ2UoKTtcblx0bXlDb2NrdGFpbC5zcmMgPSB0ZXNsYXNDb2NrdGFpbFBob3RvO1xuXHRteUNvY2t0YWlsLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcblx0dGVzbGFzQ29ja3RhaWxEaXYuYXBwZW5kQ2hpbGQodGVzbGFzQ29ja3RhaWxEZXNjKTtcblx0dGVzbGFzQ29ja3RhaWxEaXYuYXBwZW5kQ2hpbGQobXlDb2NrdGFpbCk7XG5cdHRlc2xhc0NvY2t0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlc2xhc0NvY2t0YWlsRGl2KTtcblx0Y29uc3QgY29ja3RhaWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Y29ja3RhaWxQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXHRjb2NrdGFpbFByaWNlLmlubmVySFRNTCA9ICdQcmljZTogNjAwIEVFUnMnO1xuXHR0ZXNsYXNDb2NrdGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2NrdGFpbFByaWNlKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXNsYXNDb2NrdGFpbENvbnRhaW5lcik7XG5cdGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Zm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0eXBlLWNvbnRhaW5lcicpO1xuXHRjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0Zm9vZC5pbm5lckhUTUwgPSAnRm9vZCc7XG5cdGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG5cdGNvbnN0IHRocmVlcGhhc2VTYW5kd2ljaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXHRjb25zdCB0aHJlZXBoYXNlU2FuZHdpY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2guY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaC5pbm5lckhUTUwgPSAnVGhyZWVwaGFzZSBTYW5kd2ljaCc7XG5cdHRocmVlcGhhc2VTYW5kd2ljaENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aHJlZXBoYXNlU2FuZHdpY2gpO1xuXHRjb25zdCB0aHJlZXBoYXNlU2FuZHdpY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGhyZWVwaGFzZVNhbmR3aWNoRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGl2Jyk7XG5cdGNvbnN0IHRocmVlcGhhc2VTYW5kd2ljaERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaERlc2MuaW5uZXJIVE1MID0gJ1RoZSBmb3JiaWRkZW4gc2FuZHdpY2gnO1xuXHRjb25zdCBteVNhbmR3aWNoID0gbmV3IEltYWdlKCk7XG5cdG15U2FuZHdpY2guc3JjID0gdGhyZWVwaGFzZVNhbmR3aWNoUGhvdG87XG5cdG15U2FuZHdpY2guY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHR0aHJlZXBoYXNlU2FuZHdpY2hEaXYuYXBwZW5kQ2hpbGQodGhyZWVwaGFzZVNhbmR3aWNoRGVzYyk7XG5cdHRocmVlcGhhc2VTYW5kd2ljaERpdi5hcHBlbmRDaGlsZChteVNhbmR3aWNoKTtcblx0dGhyZWVwaGFzZVNhbmR3aWNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHRocmVlcGhhc2VTYW5kd2ljaERpdik7XG5cdGNvbnN0IHNhbmR3aWNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHNhbmR3aWNoUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblx0c2FuZHdpY2hQcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDQwMCBFRVJzJztcblx0dGhyZWVwaGFzZVNhbmR3aWNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbmR3aWNoUHJpY2UpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKHRocmVlcGhhc2VTYW5kd2ljaENvbnRhaW5lcik7XG5cdGNvbnN0IHRoZUhpZ2hWb2x0YWdlQnVyZ2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblx0Y29uc3QgdGhlSGlnaFZvbHRhZ2VCdXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlci5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXIuaW5uZXJIVE1MID0gJ1RoZSBIaWdoIFZvbHRhZ2UgQnVyZ2VyJztcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlSGlnaFZvbHRhZ2VCdXJnZXIpXG5cdGNvbnN0IHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGl2Jyk7XG5cdGNvbnN0IHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0dGhlSGlnaFZvbHRhZ2VCdXJnZXJEZXNjLmlubmVySFRNTCA9IFwiVGhlIHBvd2VyIG9mIFRoZSBIaWdoIFZvbHRhZ2UgQnVyZ2VyIGNhbid0IGJlIGRlc2NyaWJlZCBieSB3b3JkcywgeW91IGhhdmUgdG8gdHJ5IGl0IGZvciB5b3Vyc2VsZi5cIjtcblx0Y29uc3QgbXlCdXJnZXIgPSBuZXcgSW1hZ2UoKTtcblx0bXlCdXJnZXIuc3JjID0gdGhlSGlnaFZvbHRhZ2VCdXJnZXJQaG90bztcblx0bXlCdXJnZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlckRpdi5hcHBlbmRDaGlsZCh0aGVIaWdoVm9sdGFnZUJ1cmdlckRlc2MpO1xuXHR0aGVIaWdoVm9sdGFnZUJ1cmdlckRpdi5hcHBlbmRDaGlsZChteUJ1cmdlcik7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZUhpZ2hWb2x0YWdlQnVyZ2VyRGl2KVxuXHRjb25zdCBidXJnZXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0YnVyZ2VyUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblx0YnVyZ2VyUHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiA2MDAgRUVScyc7XG5cdHRoZUhpZ2hWb2x0YWdlQnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlclByaWNlKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0aGVIaWdoVm9sdGFnZUJ1cmdlckNvbnRhaW5lcik7XG5cdGNvbnN0IGRlc3NlcnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRlc3NlcnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R5cGUtY29udGFpbmVyJyk7XG5cdGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0ZGVzc2VydHMuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG5cdGRlc3NlcnRzLmlubmVySFRNTCA9ICdEZXNzZXJ0cyc7XG5cdGRlc3NlcnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c0NvbnRhaW5lcik7XG5cdGNvbnN0IHBucENoZWVzZWNha2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cG5wQ2hlZXNlY2FrZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG5cdGNvbnN0IHBucENoZWVzZWNha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRwbnBDaGVlc2VjYWtlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXHRwbnBDaGVlc2VjYWtlLmlubmVySFRNTCA9IFwiUE5QIENoZWVzZWNha2VcIjtcblx0cG5wQ2hlZXNlY2FrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbnBDaGVlc2VjYWtlKTtcblx0Y29uc3QgcG5wQ2hlZXNlY2FrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwbnBDaGVlc2VjYWtlRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGl2Jyk7XG5cdGNvbnN0IHBucENoZWVzZWNha2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwbnBDaGVlc2VjYWtlRGVzYy5pbm5lckhUTUwgPSBcIlRoZSBQTlAgQ2hlZXNlY2FrZSBjb25zaXN0cyBvZiB0aHJlZSBsYXllcnMuIEdyYWhhbSBjcmFja2VycyBhcyBpdCdzIGJhc2UsIHRoZSBjbGFzc2ljIHNlY29uZCBsYXllciBtYXNjYXJwb25lIGNoZWVzZSwgYW5kIGFub3RoZXIgbGF5ZXIgb2YgZ3JhaGFtIGNyYWNrZXJzIG9uIHRvcCBtaXhlZCB3aXRoIGJsdWViZXJyeSBqZWxseS5cIjtcblx0Y29uc3QgbXlDaGVlc2VjYWtlID0gbmV3IEltYWdlKCk7XG5cdG15Q2hlZXNlY2FrZS5zcmMgPSBwbnBDaGVlc2VjYWtlUGhvdG87XG5cdG15Q2hlZXNlY2FrZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG5cdHBucENoZWVzZWNha2VEaXYuYXBwZW5kQ2hpbGQocG5wQ2hlZXNlY2FrZURlc2MpO1xuXHRwbnBDaGVlc2VjYWtlRGl2LmFwcGVuZENoaWxkKG15Q2hlZXNlY2FrZSk7XG5cdHBucENoZWVzZWNha2VDb250YWluZXIuYXBwZW5kQ2hpbGQocG5wQ2hlZXNlY2FrZURpdik7XG5cdGNvbnN0IGNoZWVzZWNha2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Y2hlZXNlY2FrZVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG5cdGNoZWVzZWNha2VQcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDQwMCBFRVJzJztcblx0cG5wQ2hlZXNlY2FrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVlc2VjYWtlUHJpY2UpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKHBucENoZWVzZWNha2VDb250YWluZXIpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==