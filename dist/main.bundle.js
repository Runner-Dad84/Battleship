"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#container-p1,
#container-p2 {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 50vh;
    height: 50vh;
    gap: 0;
    border: 2px solid black;
}

#container-p1 .cell,
#container-p2 .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
}`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,qCAAqC;IACrC,WAAW;IACX,YAAY;IACZ,MAAM;IACN,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":["#container-p1,\n#container-p2 {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    width: 50vh;\n    height: 50vh;\n    gap: 0;\n    border: 2px solid black;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/gameboard.style.css":
/*!****************************************!*\
  !*** ./src/styles/gameboard.style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _styles_gameboard_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/gameboard.style.css */ "./src/styles/gameboard.style.css");






//create players
var player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.humanPlayer('Andrew');
var computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.compPlayer('computer', 'easy');

//set ships
player1.gb.placeNewShip('carrier', 0, 0, 'south');
player1.gb.placeNewShip('battleship', 4, 1, 'east');
player1.gb.placeNewShip('submarine', 1, 1, 'east');
player1.gb.placeNewShip('destroyer', 6, 0, 'east');
player1.gb.placeNewShip('patrol', 0, 4, 'south');
computer.gb.placeNewShip('carrier', 5, 2, 'north');
computer.gb.placeNewShip('battleship', 0, 0, 'east');
computer.gb.placeNewShip('submarine', 0, 6, 'west');
computer.gb.placeNewShip('destroyer', 6, 4, 'east');
computer.gb.placeNewShip('patrol', 4, 6, 'north');
globalThis.boardTest = player1.gb.board;
/*
console.log(boardTest[0][0].value);
console.log(boardTest[3][4].c);
console.log(boardTest[3][4].r);
*/
//attacks
player1.gb.receiveAttack(0, 1);
player1.gb.receiveAttack(1, 0);
player1.gb.receiveAttack(6, 1);
player1.gb.receiveAttack(1, 1);
player1.gb.receiveAttack(0, 4);
computer.gb.receiveAttack(0, 0);
computer.gb.receiveAttack(6, 4);

//update game board
(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);

//how to print ships
/*console.log(boardTest);
console.log(player1.gb.ships);
console.log(player1.gb.ships[0]);
*/

//listen for player turn
function updatePlayer() {
  console.log('update players');
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
}
var playerContainer = document.getElementById('container-p1');
document.addEventListener('DOMContentLoaded', function () {
  playerContainer.addEventListener('click', updatePlayer);
});

//for test purposes only

var btnCom = document.getElementById('btnCom');
var btnPlay = document.getElementById('btnPlay');
/*
btnPlay.addEventListener('click', updatePlay)})
*/

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printBoard: () => (/* binding */ printBoard)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/modules/gameboard.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


//print player/ computer gameboard
function printBoard(board, container, player) {
  var gb = document.getElementById(container);
  gb.innerHTML = "";
  var _iterator = _createForOfIteratorHelper(board),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      var _iterator2 = _createForOfIteratorHelper(row),
        _step2;
      try {
        var _loop = function _loop() {
          var cell = _step2.value;
          var element = document.createElement('div');
          element.classList.add('cell');
          element.textContent = cell.value;
          element.dataset.row = cell.r;
          element.dataset.col = cell.c;
          element.addEventListener('click', function () {
            var row = element.dataset.row;
            var col = element.dataset.col;
            player.receiveAttack(row, col);
            console.log(element);
          });
          gb.appendChild(element);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

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
      for (var r = 0; r < this.row; r++) {
        var rows = [];
        for (var c = 0; c < this.col; c++) {
          var value = 0;
          rows.push({
            value: value,
            r: r,
            c: c
          });
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
    value: function placeNewShip(type, r, c, dir) {
      var row = r;
      var col = c;

      /*if (this.checkOnBoard(col, row) === false){
          return TypeError;
      */
      var newShip = new _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship(type);
      this.ships.push(newShip);
      this.board[row][col].value = newShip.id;
      if (dir === 'south') {
        for (var i = 0; r + i < r + newShip.length; i++) {
          this.board[r++][c].value = newShip.id;
        }
      }
      ;
      if (dir === 'north') {
        for (var _i = 0; r - _i > r - newShip.length; _i++) {
          this.board[r--][c].value = newShip.id;
        }
      }
      ;
      if (dir === 'east') {
        for (var _i2 = 0; c + _i2 < c + newShip.length; _i2++) {
          this.board[r][c++].value = newShip.id;
        }
      }
      ;
      if (dir === 'west') {
        for (var _i3 = 0; c - _i3 > c - newShip.length; _i3++) {
          this.board[r][c--].value = newShip.id;
        }
      }
      ;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(r, c) {
      //if water record miss
      if (this.board[r][c].value === 0) {
        return this.board[r][c].value = 'X';
      }
      //if hit carrier record hit
      if (this.board[r][c].value === 'C') {
        this.ships[0].hit();
      }
      //if hit batteship record hit
      if (this.board[r][c].value === 'B') {
        this.ships[1].hit();
      }
      //if hit destoryer record hit
      if (this.board[r][c].value === 'D') {
        this.ships[2].hit();
      }
      //if hit submarine record hit
      if (this.board[r][c].value === 'S') {
        this.ships[3].hit();
      }
      //if hit submarine record hit
      if (this.board[r][c].value === 'P') {
        this.ships[4].hit();
      }
      //record hit to board
      return this.board[r][c].value = '!';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcz81NmFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2NvbnRhaW5lci1wMSxcbiNjb250YWluZXItcDIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgICB3aWR0aDogNTB2aDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgZ2FwOiAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFpbmVyLXAxLFxcbiNjb250YWluZXItcDIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICB3aWR0aDogNTB2aDtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5jZWxsLFxcbiNjb250YWluZXItcDIgLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgaHVtYW5QbGF5ZXIsIGNvbXBQbGF5ZXIgfSBmcm9tICcuL21vZHVsZXMvcGxheWVyLmpzJ1xuaW1wb3J0IHsgcHJpbnRCb2FyZCB9IGZyb20gJy4vbW9kdWxlcy9kb20uanMnXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MnO1xuXG4vL2NyZWF0ZSBwbGF5ZXJzXG5sZXQgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcignQW5kcmV3Jyk7XG5sZXQgY29tcHV0ZXIgPSBuZXcgY29tcFBsYXllcignY29tcHV0ZXInLCAnZWFzeScpO1xuXG4vL3NldCBzaGlwc1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ2NhcnJpZXInLCAwLCAwLCAnc291dGgnKTtcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdiYXR0bGVzaGlwJywgNCwgMSwgJ2Vhc3QnKTtcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdzdWJtYXJpbmUnLCAxLCAxLCAnZWFzdCcpO1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ2Rlc3Ryb3llcicsIDYsIDAsICdlYXN0Jyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgncGF0cm9sJywgMCwgNCwgJ3NvdXRoJyk7XG5cbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgnY2FycmllcicsIDUsIDIsICdub3J0aCcpO1xuY29tcHV0ZXIuZ2IucGxhY2VOZXdTaGlwKCdiYXR0bGVzaGlwJywgMCwgMCwgJ2Vhc3QnKTtcbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgnc3VibWFyaW5lJywgMCwgNiwgJ3dlc3QnKTtcbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgnZGVzdHJveWVyJywgNiwgNCwgJ2Vhc3QnKTtcbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgncGF0cm9sJywgNCwgNiwgJ25vcnRoJyk7XG5cblxuZ2xvYmFsVGhpcy5ib2FyZFRlc3QgPSBwbGF5ZXIxLmdiLmJvYXJkO1xuLypcbmNvbnNvbGUubG9nKGJvYXJkVGVzdFswXVswXS52YWx1ZSk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0uYyk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0ucik7XG4qL1xuLy9hdHRhY2tzXG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMCwgMSk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMSwgMCk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soNiwgMSk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMSwgMSk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMCwgNCk7XG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDAsIDApO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjayg2LCA0KTtcblxuLy91cGRhdGUgZ2FtZSBib2FyZFxucHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG5wcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuXG4vL2hvdyB0byBwcmludCBzaGlwc1xuLypjb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG5cbi8vbGlzdGVuIGZvciBwbGF5ZXIgdHVyblxuZnVuY3Rpb24gdXBkYXRlUGxheWVyICgpIHtcbiAgICBjb25zb2xlLmxvZygndXBkYXRlIHBsYXllcnMnKVxuICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xufVxuXG5sZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgcGxheWVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIHVwZGF0ZVBsYXllcilcbn1cbik7XG5cblxuLy9mb3IgdGVzdCBwdXJwb3NlcyBvbmx5XG5cbmNvbnN0IGJ0bkNvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Db20nKTtcbmNvbnN0IGJ0blBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuUGxheScpO1xuLypcbmJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVQbGF5KX0pXG4qL1xuXG5cblxuXG5cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJ1xuXG4vL3ByaW50IHBsYXllci8gY29tcHV0ZXIgZ2FtZWJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCb2FyZCAoYm9hcmQsIGNvbnRhaW5lciwgcGxheWVyKXtcbiAgICBsZXQgZ2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgIGdiLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgcm93IG9mIGJvYXJkKXtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHJvdyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5yb3cgPSBjZWxsLnI7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuY29sID0gY2VsbC5jO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBnYi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCIvL2NvbnN0IHNoaXAgPSByZXF1aXJlICgnLi9zaGlwLmpzJylcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5cbi8vdG8gYWNjZXNzIHNxdWFyZSBvbiBib2FyZCB1cyBtZSBib2FyZC5ib2FyZFtyXVtjXVxuXG4vL3V0aWxpdHk6IGNvbnZlcnRzIGNvbHVtbiBsZXR0ZXIgdG8gbnVtYmVyIGZvciBsb29rVXBcbmZ1bmN0aW9uIGNvbENvbnZlcnQgKGxldHRlcil7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbLi4uQXJyYXkoNyldLm1hcCgoXyxpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKzk3KSk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSAoZWwpID0+IGVsID09PSBsZXR0ZXI7XG4gICAgICAgIGNvbnN0IG51bSA9IGFscGhhYmV0LmZpbmRJbmRleChpdGVtKTtcbiAgICAgICAgcmV0dXJuIG51bVxufTtcbi8vdXRpbGl0eTogYm9hcmQgYXMgdmFyaWFibGVuYW1lLmJvYXJkLCBvbmx5IHdvcmtzIGZvciBmaXJzdCByb3dcbmV4cG9ydCBmdW5jdGlvbiBsb29rVXAgKExldCwgTnVtLCBhcnJheSl7XG4gICAgY29uc3QgYyA9IGNvbENvbnZlcnQoTGV0KTtcbiAgICBjb25zdCByID0gTnVtO1xuICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmJvYXJkW2NdW3JdO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBnYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yIChjb2wsIHJvdykge1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB9XG4gICAgY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBnYW1lQm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLnJvdzsgcisrKXtcbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29sOyBjKyspe1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHsgdmFsdWUsIHIsIGMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQm9hcmQucHVzaChyb3dzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICAgIH1cbiAgICBcbiAgICAvL3V0aWxpdHkgZnVuY3Rpb25cbiAgICBjaGVja09uQm9hcmQgKHgsIHkpe1xuICAgICAgICBpZiAoKHggPCAwKSB8fCAoeSA8IDApIHx8ICh4ID4gNikgfHwgKHkgPiA2KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHgsIHkpe1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgciwgYywgZGlyKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHI7XG4gICAgICAgIGNvbnN0IGNvbCA9IGM7XG4gICAgICAgIFxuICAgICAgICAvKmlmICh0aGlzLmNoZWNrT25Cb2FyZChjb2wsIHJvdykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHJldHVybiBUeXBlRXJyb3I7XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID0gbmV3U2hpcC5pZDtcblxuICAgICAgICBpZiAoZGlyID09PSAnc291dGgnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociArIGkpIDwgKHIgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcisrXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdub3J0aCcpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyIC0gaSkgPiAociAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyLS1dW2NdLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ2Vhc3QnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyArIGkpIDwgKGMgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYysrXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICd3ZXN0Jyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgLSBpKSA+IChjIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MtLV0udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrIChyLCBjKSB7XG4gICAgICAgIFxuICAgICAgICAvL2lmIHdhdGVyIHJlY29yZCBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGNhcnJpZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbMF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgYmF0dGVzaGlwIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdCJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzFdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGRlc3RvcnllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnRCcpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1syXS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBzdWJtYXJpbmUgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1MnKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbM10uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgc3VibWFyaW5lIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdQJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzRdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVjb3JkIGhpdCB0byBib2FyZFxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICchJztcbiAgICB9XG4gICAgY2hlY2tTdW5rICgpe1xuICAgICAgICBsZXQgc3RhdHVzID0gW107XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMF0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzFdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1syXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbM10uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzRdLmlzU3VuaygpKTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cy5ldmVyeShpdGVtID0+IGl0ZW0gPT09IHRydWUpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcblxuXG5leHBvcnQgY2xhc3MgaHVtYW5QbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMud2lucyA9IDA7XG4gICAgICAgIHRoaXMubG9zc2VzID0gMDtcbiAgICAgICAgdGhpcy5zdHJlYWsgPSAwO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZCg3LDcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGNvbXBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBsZXZlbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKDcsNyk7XG4gICAgfVxufVxuLypcbm1vZHVsZS5leHBvcnRzID0gaHVtYW5QbGF5ZXJcbm1vZHVsZS5leHBvcnRzID0gY29tcFBsYXllclxuKi8iLCJleHBvcnQgY2xhc3Mgc2hpcCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjYXJyaWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdiYXR0bGVzaGlwJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0InO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdkZXN0cm95ZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnRCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N1Ym1hcmluZScpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdTJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAncGF0cm9sJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1AnO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5kYW1hZ2UrKztcbiAgICB9XG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IHNoaXBcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwXG5cbiJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJzaGlwIiwiaHVtYW5QbGF5ZXIiLCJjb21wUGxheWVyIiwicHJpbnRCb2FyZCIsInBsYXllcjEiLCJjb21wdXRlciIsImdiIiwicGxhY2VOZXdTaGlwIiwiZ2xvYmFsVGhpcyIsImJvYXJkVGVzdCIsImJvYXJkIiwicmVjZWl2ZUF0dGFjayIsInVwZGF0ZVBsYXllciIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ0bkNvbSIsImJ0blBsYXkiLCJjb250YWluZXIiLCJwbGF5ZXIiLCJpbm5lckhUTUwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwicm93IiwidmFsdWUiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2xvb3AiLCJjZWxsIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImRhdGFzZXQiLCJyIiwiY29sIiwiYyIsImFwcGVuZENoaWxkIiwiZXJyIiwiZSIsImYiLCJjb2xDb252ZXJ0IiwibGV0dGVyIiwiYWxwaGFiZXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiaXRlbSIsImVsIiwibnVtIiwiZmluZEluZGV4IiwibG9va1VwIiwiTGV0IiwiTnVtIiwiYXJyYXkiLCJ0YXJnZXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVCb2FyZCIsInNoaXBzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2FtZUJvYXJkIiwicm93cyIsInB1c2giLCJjaGVja09uQm9hcmQiLCJ4IiwieSIsImNoZWNrT3BlbkJvYXJkIiwidHlwZSIsImRpciIsIm5ld1NoaXAiLCJpZCIsImxlbmd0aCIsImhpdCIsImNoZWNrU3VuayIsInN0YXR1cyIsImlzU3VuayIsImV2ZXJ5IiwibmFtZSIsIndpbnMiLCJsb3NzZXMiLCJzdHJlYWsiLCJsZXZlbCIsImRhbWFnZSIsInN1bmsiXSwic291cmNlUm9vdCI6IiJ9