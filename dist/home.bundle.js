/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home()
{
	const element = document.createElement('div');
	element.setAttribute('id', 'home-page');
	const headingContainer = document.createElement('div');
	const heading = document.createElement('h1');
	heading.innerHTML = "Electric Bar";
	headingContainer.classList.add('heading-container');
	headingContainer.appendChild(heading);
	const descriptionContainer = document.createElement('div');
	const description = document.createElement('p');
	description.innerHTML = 'Welcome to the official website of The Electric Bar. We are a bunch of highly devoted electrical engineering students who decided to open an electrically themed bar, a bar where anyone can come to have fun, chill, and even study. The bar is located 50 meters west from the engineering campus near the campus store. ' + "Also students get a 20% discount on everything, you just need to show us your student ID card.";
	descriptionContainer.classList.add('description-container');
	descriptionContainer.appendChild(description);
	const workingHoursContainer = document.createElement('div');
	const workingHours = document.createElement('h2');
	workingHours.innerHTML = 'Working hours:';
	const workingHoursList = document.createElement('ul');
	const workingHoursItem1 = document.createElement('li');
	const workingHoursItem2 = document.createElement('li');
	const workingHoursItem3 = document.createElement('li');
	workingHoursItem1.innerHTML = 'Monday - Friday: 09:00 - 20:00'; 
	workingHoursItem2.innerHTML = 'Saturday: 10:00 - 18:00';
	workingHoursItem3.innerHTML = 'Sunday: Closed';
	workingHoursList.appendChild(workingHoursItem1);
	workingHoursList.appendChild(workingHoursItem2);
	workingHoursList.appendChild(workingHoursItem3);
	workingHoursContainer.appendChild(workingHours);
	workingHoursContainer.appendChild(workingHoursList);
	const locatContainer = document.createElement('div');
	const locatHead = document.createElement('h2');
	const locat = document.createElement('p');
	locatHead.innerHTML = 'Location';
	locat.innerHTML = 'Nikola Tesla Street No. 24-5';
	locatContainer.appendChild(locatHead);
	locatContainer.appendChild(locat);
	element.appendChild(headingContainer);
	element.appendChild(descriptionContainer);
	element.appendChild(workingHoursContainer);
	element.appendChild(locatContainer);
	return element;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKVxue1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXBhZ2UnKTtcblx0Y29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0aGVhZGluZy5pbm5lckhUTUwgPSBcIkVsZWN0cmljIEJhclwiO1xuXHRoZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctY29udGFpbmVyJyk7XG5cdGhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnV2VsY29tZSB0byB0aGUgb2ZmaWNpYWwgd2Vic2l0ZSBvZiBUaGUgRWxlY3RyaWMgQmFyLiBXZSBhcmUgYSBidW5jaCBvZiBoaWdobHkgZGV2b3RlZCBlbGVjdHJpY2FsIGVuZ2luZWVyaW5nIHN0dWRlbnRzIHdobyBkZWNpZGVkIHRvIG9wZW4gYW4gZWxlY3RyaWNhbGx5IHRoZW1lZCBiYXIsIGEgYmFyIHdoZXJlIGFueW9uZSBjYW4gY29tZSB0byBoYXZlIGZ1biwgY2hpbGwsIGFuZCBldmVuIHN0dWR5LiBUaGUgYmFyIGlzIGxvY2F0ZWQgNTAgbWV0ZXJzIHdlc3QgZnJvbSB0aGUgZW5naW5lZXJpbmcgY2FtcHVzIG5lYXIgdGhlIGNhbXB1cyBzdG9yZS4gJyArIFwiQWxzbyBzdHVkZW50cyBnZXQgYSAyMCUgZGlzY291bnQgb24gZXZlcnl0aGluZywgeW91IGp1c3QgbmVlZCB0byBzaG93IHVzIHlvdXIgc3R1ZGVudCBJRCBjYXJkLlwiO1xuXHRkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcblx0ZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXHRjb25zdCB3b3JraW5nSG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3Qgd29ya2luZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0d29ya2luZ0hvdXJzLmlubmVySFRNTCA9ICdXb3JraW5nIGhvdXJzOic7XG5cdGNvbnN0IHdvcmtpbmdIb3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRjb25zdCB3b3JraW5nSG91cnNJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdGNvbnN0IHdvcmtpbmdIb3Vyc0l0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Y29uc3Qgd29ya2luZ0hvdXJzSXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHR3b3JraW5nSG91cnNJdGVtMS5pbm5lckhUTUwgPSAnTW9uZGF5IC0gRnJpZGF5OiAwOTowMCAtIDIwOjAwJzsgXG5cdHdvcmtpbmdIb3Vyc0l0ZW0yLmlubmVySFRNTCA9ICdTYXR1cmRheTogMTA6MDAgLSAxODowMCc7XG5cdHdvcmtpbmdIb3Vyc0l0ZW0zLmlubmVySFRNTCA9ICdTdW5kYXk6IENsb3NlZCc7XG5cdHdvcmtpbmdIb3Vyc0xpc3QuYXBwZW5kQ2hpbGQod29ya2luZ0hvdXJzSXRlbTEpO1xuXHR3b3JraW5nSG91cnNMaXN0LmFwcGVuZENoaWxkKHdvcmtpbmdIb3Vyc0l0ZW0yKTtcblx0d29ya2luZ0hvdXJzTGlzdC5hcHBlbmRDaGlsZCh3b3JraW5nSG91cnNJdGVtMyk7XG5cdHdvcmtpbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3JraW5nSG91cnMpO1xuXHR3b3JraW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod29ya2luZ0hvdXJzTGlzdCk7XG5cdGNvbnN0IGxvY2F0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGxvY2F0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdGNvbnN0IGxvY2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRsb2NhdEhlYWQuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcblx0bG9jYXQuaW5uZXJIVE1MID0gJ05pa29sYSBUZXNsYSBTdHJlZXQgTm8uIDI0LTUnO1xuXHRsb2NhdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdEhlYWQpO1xuXHRsb2NhdENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdCk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdIb3Vyc0NvbnRhaW5lcik7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQobG9jYXRDb250YWluZXIpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==