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
var playerContainer = document.getElementById('container-p1');
document.addEventListener('DOMContentLoaded', function () {
  playerContainer.addEventListener('click', function () {
    console.log('update players');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3M/NTZhZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjb250YWluZXItcDEsXG4jY29udGFpbmVyLXAyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gICAgd2lkdGg6IDUwdmg7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhaW5lci1wMSxcXG4jY29udGFpbmVyLXAyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcydcbmltcG9ydCB7IHByaW50Qm9hcmQgfSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzJztcblxuLy9jcmVhdGUgcGxheWVyc1xubGV0IHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIoJ0FuZHJldycpO1xubGV0IGNvbXB1dGVyID0gbmV3IGNvbXBQbGF5ZXIoJ2NvbXB1dGVyJywgJ2Vhc3knKTtcblxuLy9zZXQgc2hpcHNcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdjYXJyaWVyJywgMCwgMCwgJ3NvdXRoJyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnYmF0dGxlc2hpcCcsIDQsIDEsICdlYXN0Jyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnc3VibWFyaW5lJywgMSwgMSwgJ2Vhc3QnKTtcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdkZXN0cm95ZXInLCA2LCAwLCAnZWFzdCcpO1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ3BhdHJvbCcsIDAsIDQsICdzb3V0aCcpO1xuXG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ2NhcnJpZXInLCA1LCAyLCAnbm9ydGgnKTtcbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgnYmF0dGxlc2hpcCcsIDAsIDAsICdlYXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ3N1Ym1hcmluZScsIDAsIDYsICd3ZXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ2Rlc3Ryb3llcicsIDYsIDQsICdlYXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ3BhdHJvbCcsIDQsIDYsICdub3J0aCcpO1xuXG5cbmdsb2JhbFRoaXMuYm9hcmRUZXN0ID0gcGxheWVyMS5nYi5ib2FyZDtcbi8qXG5jb25zb2xlLmxvZyhib2FyZFRlc3RbMF1bMF0udmFsdWUpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLmMpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLnIpO1xuKi9cbi8vYXR0YWNrc1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDAsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDEsIDApO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDYsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDEsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDAsIDQpO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjaygwLCAwKTtcbmNvbXB1dGVyLmdiLnJlY2VpdmVBdHRhY2soNiwgNCk7XG5cbi8vdXBkYXRlIGdhbWUgYm9hcmRcbnByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xucHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcblxuLy9ob3cgdG8gcHJpbnQgc2hpcHNcbi8qY29uc29sZS5sb2coYm9hcmRUZXN0KTtcbmNvbnNvbGUubG9nKHBsYXllcjEuZ2Iuc2hpcHMpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwc1swXSk7XG4qL1xuXG4vL2xpc3RlbiBmb3IgcGxheWVyIHR1cm5cbmxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAxJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBwbGF5ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgcGxheWVycycpXG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgIH0pXG59XG4pO1xuXG5cbi8vZm9yIHRlc3QgcHVycG9zZXMgb25seVxuXG5jb25zdCBidG5Db20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQ29tJyk7XG5jb25zdCBidG5QbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blBsYXknKTtcbi8qXG5idG5QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlUGxheSl9KVxuKi9cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcydcblxuLy9wcmludCBwbGF5ZXIvIGNvbXB1dGVyIGdhbWVib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmQgKGJvYXJkLCBjb250YWluZXIsIHBsYXllcil7XG4gICAgbGV0IGdiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKTtcbiAgICBnYi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCl7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiByb3cpe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNlbGwudmFsdWU7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQucm93ID0gY2VsbC5yO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmNvbCA9IGNlbGwuYztcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZ2IuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuIiwiLy9jb25zdCBzaGlwID0gcmVxdWlyZSAoJy4vc2hpcC5qcycpXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuXG4vL3RvIGFjY2VzcyBzcXVhcmUgb24gYm9hcmQgdXMgbWUgYm9hcmQuYm9hcmRbcl1bY11cblxuLy91dGlsaXR5OiBjb252ZXJ0cyBjb2x1bW4gbGV0dGVyIHRvIG51bWJlciBmb3IgbG9va1VwXG5mdW5jdGlvbiBjb2xDb252ZXJ0IChsZXR0ZXIpe1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWy4uLkFycmF5KDcpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBjb25zdCBpdGVtID0gKGVsKSA9PiBlbCA9PT0gbGV0dGVyO1xuICAgICAgICBjb25zdCBudW0gPSBhbHBoYWJldC5maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgIHJldHVybiBudW1cbn07XG4vL3V0aWxpdHk6IGJvYXJkIGFzIHZhcmlhYmxlbmFtZS5ib2FyZCwgb25seSB3b3JrcyBmb3IgZmlyc3Qgcm93XG5leHBvcnQgZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPbkJvYXJkICh4LCB5KXtcbiAgICAgICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+IDYpIHx8ICh5ID4gNikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vdXRpbGl0eSBmdW5jdGlvblxuICAgIGNoZWNrT3BlbkJvYXJkICh4LCB5KXtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VOZXdTaGlwKHR5cGUsIHIsIGMsIGRpcikge1xuICAgICAgICBjb25zdCByb3cgPSByO1xuICAgICAgICBjb25zdCBjb2wgPSBjO1xuICAgICAgICBcbiAgICAgICAgLyppZiAodGhpcy5jaGVja09uQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICByZXR1cm4gVHlwZUVycm9yO1xuICAgICAgICAqL1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAodHlwZSk7XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gJ3NvdXRoJyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnbm9ydGgnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdlYXN0Jyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgKyBpKSA8IChjICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MrK10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnd2VzdCcpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayAociwgYykge1xuICAgICAgICBcbiAgICAgICAgLy9pZiB3YXRlciByZWNvcmQgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBjYXJyaWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdDJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzBdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGJhdHRlc2hpcCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQicpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1sxXS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBkZXN0b3J5ZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0QnKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbMl0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgc3VibWFyaW5lIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdTJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzNdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHN1Ym1hcmluZSByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUCcpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1s0XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlY29yZCBoaXQgdG8gYm9hcmRcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnISc7XG4gICAgfVxuICAgIGNoZWNrU3VuayAoKXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IFtdO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzBdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1sxXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMl0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzNdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1s0XS5pc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiBzdGF0dXMuZXZlcnkoaXRlbSA9PiBpdGVtID09PSB0cnVlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5cblxuZXhwb3J0IGNsYXNzIGh1bWFuUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLndpbnMgPSAwO1xuICAgICAgICB0aGlzLmxvc3NlcyA9IDA7XG4gICAgICAgIHRoaXMuc3RyZWFrID0gMDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoNyw3KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBjb21wUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGV2ZWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZCg3LDcpO1xuICAgIH1cbn1cbi8qXG5tb2R1bGUuZXhwb3J0cyA9IGh1bWFuUGxheWVyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBQbGF5ZXJcbiovIiwiZXhwb3J0IGNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnY2Fycmllcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdDJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA0O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdCJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZGVzdHJveWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0QnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdzdWJtYXJpbmUnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3BhdHJvbCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdQJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgfVxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9leHBvcnQgZGVmYXVsdCBzaGlwXG4vL21vZHVsZS5leHBvcnRzID0gc2hpcFxuXG4iXSwibmFtZXMiOlsiZ2FtZWJvYXJkIiwic2hpcCIsImh1bWFuUGxheWVyIiwiY29tcFBsYXllciIsInByaW50Qm9hcmQiLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJnYiIsInBsYWNlTmV3U2hpcCIsImdsb2JhbFRoaXMiLCJib2FyZFRlc3QiLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJwbGF5ZXJDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJidG5Db20iLCJidG5QbGF5IiwiY29udGFpbmVyIiwicGxheWVyIiwiaW5uZXJIVE1MIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInJvdyIsInZhbHVlIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9sb29wIiwiY2VsbCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJkYXRhc2V0IiwiciIsImNvbCIsImMiLCJhcHBlbmRDaGlsZCIsImVyciIsImUiLCJmIiwiY29sQ29udmVydCIsImxldHRlciIsImFscGhhYmV0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIml0ZW0iLCJlbCIsIm51bSIsImZpbmRJbmRleCIsImxvb2tVcCIsIkxldCIsIk51bSIsImFycmF5IiwidGFyZ2V0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlQm9hcmQiLCJzaGlwcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdhbWVCb2FyZCIsInJvd3MiLCJwdXNoIiwiY2hlY2tPbkJvYXJkIiwieCIsInkiLCJjaGVja09wZW5Cb2FyZCIsInR5cGUiLCJkaXIiLCJuZXdTaGlwIiwiaWQiLCJsZW5ndGgiLCJoaXQiLCJjaGVja1N1bmsiLCJzdGF0dXMiLCJpc1N1bmsiLCJldmVyeSIsIm5hbWUiLCJ3aW5zIiwibG9zc2VzIiwic3RyZWFrIiwibGV2ZWwiLCJkYW1hZ2UiLCJzdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==