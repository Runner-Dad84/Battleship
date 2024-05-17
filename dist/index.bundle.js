"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './gameboard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './ship.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './player.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




let player1 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './player.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Andrew');
let computer = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './player.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('computer', 'easy');

player1.gb.placeNewShip('carrier', 0, 0, 'north');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');

let playCont = document.getElementById(playerContainer)
let compCont = document.getElementById(compContainer)
//compCont.textContent = 'test';
//playCont.textContent = player1.gb.board;
document.body.color = 'blue';


console.log(player1.gb.board);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDVjtBQUNxQjs7QUFFckQsa0JBQWtCLDBJQUFXO0FBQzdCLG1CQUFtQiwwSUFBVTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAuanMnXG5pbXBvcnQgeyBodW1hblBsYXllciwgY29tcFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJ1xuXG5sZXQgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcignQW5kcmV3Jyk7XG5sZXQgY29tcHV0ZXIgPSBuZXcgY29tcFBsYXllcignY29tcHV0ZXInLCAnZWFzeScpO1xuXG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnY2FycmllcicsIDAsIDAsICdub3J0aCcpO1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ2JhdHRsZXNoaXAnLCA0LCAxLCAnZWFzdCcpO1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ3N1Ym1hcmluZScsIDEsIDEsICdlYXN0Jyk7XG5cbmxldCBwbGF5Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXllckNvbnRhaW5lcilcbmxldCBjb21wQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbXBDb250YWluZXIpXG4vL2NvbXBDb250LnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuLy9wbGF5Q29udC50ZXh0Q29udGVudCA9IHBsYXllcjEuZ2IuYm9hcmQ7XG5kb2N1bWVudC5ib2R5LmNvbG9yID0gJ2JsdWUnO1xuXG5cbmNvbnNvbGUubG9nKHBsYXllcjEuZ2IuYm9hcmQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9