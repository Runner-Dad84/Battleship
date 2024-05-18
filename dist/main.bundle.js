"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");



var player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.humanPlayer('Andrew');
var computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.compPlayer('computer', 'easy');
player1.gb.placeNewShip('carrier', 0, 0, 'north');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');
var containerP1 = document.getElementById('container-p1');
var containerP2 = document.getElementById('container-p2');
var testButton = document.getElementById('test');
function clickFn() {
  console.log('test button pressed');
}
;
containerP1.textContent = 'test';
containerP2.textContent = player1.gb.board;
console.log(player1.gb.board);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard),
/* harmony export */   lookUp: () => (/* binding */ lookUp)
/* harmony export */ });
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ship.js */ "./src/modules/ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//const ship = require ('./ship.js')


//to access square on board us me board.board[r][c]

//utility: converts column letter to number for lookUp
function colConvert(letter) {
  var alphabet = _toConsumableArray(Array(7)).map(function (_, i) {
    return String.fromCharCode(i + 97);
  });
  var item = function item(el) {
    return el === letter;
  };
  var num = alphabet.findIndex(item);
  return num;
}
;
//utility: board as variablename.board, only works for first row
function lookUp(Let, Num, array) {
  var c = colConvert(Let);
  var r = Num;
  var target = array.board[c][r];
  return target;
}
var gameboard = /*#__PURE__*/function () {
  function gameboard(col, row) {
    _classCallCheck(this, gameboard);
    this.col = col;
    this.row = row;
    this.board = this.createBoard();
    this.ships = [];
  }
  return _createClass(gameboard, [{
    key: "createBoard",
    value: function createBoard() {
      var gameBoard = [];
      for (var i = 0; i < this.row; i++) {
        var rows = [];
        for (var j = 0; j < this.col; j++) {
          var value = 0;
          rows.push(value);
        }
        gameBoard.push(rows);
      }
      return gameBoard;
    }

    //utility function
  }, {
    key: "checkOnBoard",
    value: function checkOnBoard(x, y) {
      if (x < 0 || y < 0 || x > 6 || y > 6) {
        return false;
      }
    }
    //utility function
  }, {
    key: "checkOpenBoard",
    value: function checkOpenBoard(x, y) {
      if (this.board[x][y] !== 0) {
        return false;
      }
    }
  }, {
    key: "placeNewShip",
    value: function placeNewShip(type, col, row, dir) {
      if (this.checkOnBoard(col, row) === false) {
        return TypeError;
      }
      var newShip = new _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship(type);
      this.ships.push(newShip);
      var c = col;
      var r = row;
      if (dir === 'north') {
        for (var i = col; i < c + newShip.length; i++) {
          if (this.checkOnBoard(col, row) === false) {
            return TypeError;
          }
          if (this.checkOpenBoard(col, row) === false) {
            return TypeError;
          }
          this.board[col++][row] = newShip.id;
        }
      }
      if (dir === 'south') {
        for (var _i = col; _i > c - newShip.length; _i--) {
          if (this.checkOnBoard(col, row) === false) {
            return TypeError;
          }
          if (this.checkOpenBoard(col, row) === false) {
            return TypeError;
          }
          this.board[col--][row] = newShip.id;
        }
      }
      if (dir === 'east') {
        for (var _i2 = row; _i2 < r + newShip.length; _i2++) {
          if (this.checkOnBoard(col, row) === false) {
            return TypeError;
          }
          if (this.checkOpenBoard(col, row) === false) {
            return TypeError;
          }
          this.board[col][row++] = newShip.id;
        }
      }
      if (dir === 'west') {
        for (var _i3 = row; _i3 > r - newShip.length; _i3--) {
          if (this.checkOnBoard(col, row) === false) {
            return TypeError;
          }
          if (this.checkOpenBoard(col, row) === false) {
            return TypeError;
          }
          this.board[col][row--] = newShip.id;
        }
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(col, row) {
      var c = col;
      var r = row;
      //if water record miss
      if (this.board[c][r] === 0) {
        return this.board[c][r] = 'X';
      }
      //if hit carrier record hit
      if (this.board[c][r] === 'C') {
        this.ships[0].hit();
      }
      //if hit batteship record hit
      if (this.board[c][r] === 'B') {
        this.ships[1].hit();
      }
      //if hit destoryer record hit
      if (this.board[c][r] === 'D') {
        this.ships[2].hit();
      }
      //if hit submarine record hit
      if (this.board[c][r] === 'S') {
        this.ships[3].hit();
      }
      //if hit submarine record hit
      if (this.board[c][r] === 'P') {
        this.ships[4].hit();
      }
      //record hit to board
      return this.board[c][r] = '!';
    }
  }, {
    key: "checkSunk",
    value: function checkSunk() {
      var status = [];
      status.push(this.ships[0].isSunk());
      status.push(this.ships[1].isSunk());
      status.push(this.ships[2].isSunk());
      status.push(this.ships[3].isSunk());
      status.push(this.ships[4].isSunk());
      return status.every(function (item) {
        return item === true;
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compPlayer: () => (/* binding */ compPlayer),
/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer)
/* harmony export */ });
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameboard.js */ "./src/modules/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var humanPlayer = /*#__PURE__*/_createClass(function humanPlayer(name) {
  _classCallCheck(this, humanPlayer);
  this.name = name;
  this.wins = 0;
  this.losses = 0;
  this.streak = 0;
  this.gb = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(7, 7);
});
var compPlayer = /*#__PURE__*/_createClass(function compPlayer(name, level) {
  _classCallCheck(this, compPlayer);
  this.name = name;
  this.level = level;
  this.gb = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(7, 7);
});
/*
module.exports = humanPlayer
module.exports = compPlayer
*/

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ship = /*#__PURE__*/function () {
  function ship(type) {
    _classCallCheck(this, ship);
    this.type = type;
    this.id = 0;
    this.length = 0;
    this.damage = 0;
    this.sunk = false;
    if (this.type === 'carrier') {
      this.length = 5;
      this.id = 'C';
    }
    ;
    if (this.type === 'battleship') {
      this.length = 4;
      this.id = 'B';
    }
    ;
    if (this.type === 'destroyer') {
      this.length = 3;
      this.id = 'D';
    }
    ;
    if (this.type === 'submarine') {
      this.length = 3;
      this.id = 'S';
    }
    ;
    if (this.type === 'patrol') {
      this.length = 2;
      this.id = 'P';
    }
    ;
  }
  return _createClass(ship, [{
    key: "hit",
    value: function hit() {
      this.damage++;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.damage === this.length) {
        return this.sunk = true;
      }
    }
  }]);
}();
;

//export default ship
//module.exports = ship

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ0wsSUFBSSxLQUFLLFdBQVcsRUFBQztNQUMxQixJQUFJLENBQUNJLE1BQU0sR0FBRyxDQUFDO01BQ2YsSUFBSSxDQUFDQyxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0lBRUQsSUFBSSxJQUFJLENBQUNMLElBQUksS0FBSyxXQUFXLEVBQUM7TUFDMUIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQztNQUNmLElBQUksQ0FBQ0MsRUFBRSxHQUFHLEdBQUc7SUFDakI7SUFBQztJQUVELElBQUksSUFBSSxDQUFDTCxJQUFJLEtBQUssUUFBUSxFQUFDO01BQ3ZCLElBQUksQ0FBQ0ksTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUNDLEVBQUUsR0FBRyxHQUFHO0lBQ2pCO0lBQUM7RUFDTDtFQUFDLE9BQUFoQixZQUFBLENBQUEzQyxJQUFBO0lBQUE0QyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0IsSUFBQSxFQUFLO01BQ0QsSUFBSSxDQUFDVSxNQUFNLEVBQUU7SUFDakI7RUFBQztJQUFBM0IsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQW1CLE9BQUEsRUFBUTtNQUNKLElBQUksSUFBSSxDQUFDTyxNQUFNLEtBQUssSUFBSSxDQUFDYixNQUFNLEVBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUNjLElBQUksR0FBRyxJQUFJO01BQzNCO0lBQ0o7RUFBQztBQUFBO0FBQ0o7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBodW1hblBsYXllciwgY29tcFBsYXllciB9IGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIuanMnXG5cbmxldCBwbGF5ZXIxID0gbmV3IGh1bWFuUGxheWVyKCdBbmRyZXcnKTtcbmxldCBjb21wdXRlciA9IG5ldyBjb21wUGxheWVyKCdjb21wdXRlcicsICdlYXN5Jyk7XG5cbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdjYXJyaWVyJywgMCwgMCwgJ25vcnRoJyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnYmF0dGxlc2hpcCcsIDQsIDEsICdlYXN0Jyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnc3VibWFyaW5lJywgMSwgMSwgJ2Vhc3QnKTtcblxubGV0IGNvbnRhaW5lclAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xubGV0IGNvbnRhaW5lclAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMicpO1xubGV0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXG5mdW5jdGlvbiBjbGlja0ZuKCl7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QgYnV0dG9uIHByZXNzZWQnKTtcbn07XG5cbmNvbnRhaW5lclAxLnRleHRDb250ZW50ID0gJ3Rlc3QnO1xuY29udGFpbmVyUDIudGV4dENvbnRlbnQgPSBwbGF5ZXIxLmdiLmJvYXJkO1xuXG5cbmNvbnNvbGUubG9nKHBsYXllcjEuZ2IuYm9hcmQpO1xuIiwiLy9jb25zdCBzaGlwID0gcmVxdWlyZSAoJy4vc2hpcC5qcycpXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuXG4vL3RvIGFjY2VzcyBzcXVhcmUgb24gYm9hcmQgdXMgbWUgYm9hcmQuYm9hcmRbcl1bY11cblxuLy91dGlsaXR5OiBjb252ZXJ0cyBjb2x1bW4gbGV0dGVyIHRvIG51bWJlciBmb3IgbG9va1VwXG5mdW5jdGlvbiBjb2xDb252ZXJ0IChsZXR0ZXIpe1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWy4uLkFycmF5KDcpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBjb25zdCBpdGVtID0gKGVsKSA9PiBlbCA9PT0gbGV0dGVyO1xuICAgICAgICBjb25zdCBudW0gPSBhbHBoYWJldC5maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgIHJldHVybiBudW1cbn07XG4vL3V0aWxpdHk6IGJvYXJkIGFzIHZhcmlhYmxlbmFtZS5ib2FyZCwgb25seSB3b3JrcyBmb3IgZmlyc3Qgcm93XG5leHBvcnQgZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3c7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQm9hcmQucHVzaChyb3dzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH1cbiAgICBcbiAgICAvL3V0aWxpdHkgZnVuY3Rpb25cbiAgICBjaGVja09uQm9hcmQgKHgsIHkpe1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID4gNikgfHwgKHkgPiA2KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHgsIHkpe1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgY29sLCByb3csIGRpcikge1xuICAgICAgICBpZiAodGhpcy5jaGVja09uQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICByZXR1cm4gVHlwZUVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgIFxuICAgICAgICBsZXQgYyA9IGNvbDtcbiAgICAgICAgbGV0IHIgPSByb3c7XG4gICAgICAgIFxuICAgICAgICBpZiAoZGlyID09PSAnbm9ydGgnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCAoYyArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPbkJvYXJkKGNvbCwgcm93KSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHlwZUVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja09wZW5Cb2FyZChjb2wsIHJvdykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjb2wrK11bcm93XSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ3NvdXRoJyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29sOyBpID4gKGMgLSBuZXdTaGlwLmxlbmd0aCk7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrT25Cb2FyZChjb2wsIHJvdykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPcGVuQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUeXBlRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbY29sLS1dW3Jvd10gPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdlYXN0Jyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgKHIgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrT25Cb2FyZChjb2wsIHJvdykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPcGVuQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUeXBlRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbY29sXVtyb3crK10gPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICd3ZXN0Jyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrT25Cb2FyZChjb2wsIHJvdykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR5cGVFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPcGVuQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUeXBlRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbY29sXVtyb3ctLV0gPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlY2VpdmVBdHRhY2sgKGNvbCwgcm93KSB7XG4gICAgICAgIGxldCBjID0gY29sO1xuICAgICAgICBsZXQgciA9IHJvdztcbiAgICAgICAgLy9pZiB3YXRlciByZWNvcmQgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtjXVtyXSA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtjXVtyXSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBjYXJyaWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbY11bcl0gPT09ICdDJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzBdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGJhdHRlc2hpcCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2NdW3JdID09PSAnQicpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1sxXS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBkZXN0b3J5ZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtjXVtyXSA9PT0gJ0QnKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbMl0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgc3VibWFyaW5lIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbY11bcl0gPT09ICdTJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzNdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHN1Ym1hcmluZSByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2NdW3JdID09PSAnUCcpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1s0XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlY29yZCBoaXQgdG8gYm9hcmRcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbY11bcl0gPSAnISc7XG4gICAgfVxuICAgIGNoZWNrU3VuayAoKXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IFtdO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzBdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1sxXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMl0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzNdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1s0XS5pc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiBzdGF0dXMuZXZlcnkoaXRlbSA9PiBpdGVtID09PSB0cnVlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5cblxuZXhwb3J0IGNsYXNzIGh1bWFuUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLndpbnMgPSAwO1xuICAgICAgICB0aGlzLmxvc3NlcyA9IDA7XG4gICAgICAgIHRoaXMuc3RyZWFrID0gMDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoNyw3KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBjb21wUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGV2ZWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZCg3LDcpO1xuICAgIH1cbn1cbi8qXG5tb2R1bGUuZXhwb3J0cyA9IGh1bWFuUGxheWVyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBQbGF5ZXJcbiovIiwiZXhwb3J0IGNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnY2Fycmllcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdDJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA0O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdCJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZGVzdHJveWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0QnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdzdWJtYXJpbmUnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3BhdHJvbCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdQJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgfVxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9leHBvcnQgZGVmYXVsdCBzaGlwXG4vL21vZHVsZS5leHBvcnRzID0gc2hpcFxuXG4iXSwibmFtZXMiOlsiZ2FtZWJvYXJkIiwic2hpcCIsImh1bWFuUGxheWVyIiwiY29tcFBsYXllciIsInBsYXllcjEiLCJjb21wdXRlciIsImdiIiwicGxhY2VOZXdTaGlwIiwiY29udGFpbmVyUDEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyUDIiLCJ0ZXN0QnV0dG9uIiwiY2xpY2tGbiIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsImJvYXJkIiwiY29sQ29udmVydCIsImxldHRlciIsImFscGhhYmV0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIml0ZW0iLCJlbCIsIm51bSIsImZpbmRJbmRleCIsImxvb2tVcCIsIkxldCIsIk51bSIsImFycmF5IiwiYyIsInIiLCJ0YXJnZXQiLCJjb2wiLCJyb3ciLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVCb2FyZCIsInNoaXBzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnYW1lQm9hcmQiLCJyb3dzIiwiaiIsInB1c2giLCJjaGVja09uQm9hcmQiLCJ4IiwieSIsImNoZWNrT3BlbkJvYXJkIiwidHlwZSIsImRpciIsIlR5cGVFcnJvciIsIm5ld1NoaXAiLCJsZW5ndGgiLCJpZCIsInJlY2VpdmVBdHRhY2siLCJoaXQiLCJjaGVja1N1bmsiLCJzdGF0dXMiLCJpc1N1bmsiLCJldmVyeSIsIm5hbWUiLCJ3aW5zIiwibG9zc2VzIiwic3RyZWFrIiwibGV2ZWwiLCJkYW1hZ2UiLCJzdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==