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
#container-p2 .cell,
#container-p1 .hit,
#container-p2 .hit,
#container-p1 .boat,
#container-p2 .boat,
#container-p1 .miss,
#container-p2 .miss {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
}

#container-p1 .cell,
#container-p2 .cell {
    background-color: navy;
    color: white;
}

#container-p1 .hit,
#container-p2 .hit {
    background-color: red;
}

#container-p1 .boat,
#container-p2 .boat {
    background-color: darkgray;
}

#container-p1 .miss,
#container-p2 .miss {
    background-color: rgb(109, 109, 244);
}

#placement {
    display:none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,qCAAqC;IACrC,WAAW;IACX,YAAY;IACZ,MAAM;IACN,uBAAuB;AAC3B;AACA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB","sourcesContent":["#container-p1,\n#container-p2 {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    width: 50vh;\n    height: 50vh;\n    gap: 0;\n    border: 2px solid black;\n}\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    background-color: navy;\n    color: white;\n}\n\n#container-p1 .hit,\n#container-p2 .hit {\n    background-color: red;\n}\n\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: darkgray;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-color: rgb(109, 109, 244);\n}\n\n#placement {\n    display:none;\n}\n"],"sourceRoot":""}]);
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
var compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', function () {
  compContainer.addEventListener('click', function () {
    console.log('player moves');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
  });
});
//Listen for computer board click by player, handler is computer attack
compContainer.addEventListener('click', function RandomMove() {
  setTimeout(function RandomMove() {
    //check if square is open, if not generate new numbers and check again
    function findOpen() {
      if (player1.gb.checkOpenBoard(randomRow, randomCol) === false) {
        randomRow = Math.floor(Math.random() * 7);
        randomCol = Math.floor(Math.random() * 7);
        findOpen(randomRow, randomCol);
      }
      ;
    }
    var randomRow = Math.floor(Math.random() * 7);
    var randomCol = Math.floor(Math.random() * 7);
    findOpen();
    player1.gb.receiveAttack(randomRow, randomCol);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    console.log('computer moves');
  }, 1000);
});

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
          element.textContent = cell.value;
          if (element.textContent === '0') {
            element.classList.add('cell');
          }
          ;
          if (element.textContent === '!') {
            element.classList.add('hit');
          }
          ;
          if (element.textContent === 'X') {
            element.classList.add('miss');
          }
          ;
          if (element.textContent === 'C' || element.textContent === 'B' || element.textContent === 'D' || element.textContent === 'C' || element.textContent === 'S' || element.textContent === 'P') {
            element.classList.add('boat');
          }
          element.dataset.row = cell.r;
          element.dataset.col = cell.c;
          //hover to reveal space dataset
          element.addEventListener('mouseover', function () {
            var row = Number(element.dataset.row) + 1;
            var col = Number(element.dataset.col) + 1;
            element.textContent = "".concat(row, ", ").concat(col);
          });
          //hover out
          element.addEventListener('mouseout', function () {
            var row = element.dataset.row;
            var col = element.dataset.col;
            element.textContent = cell.value;
          });
          //click board to attack
          element.addEventListener('click', function () {
            var row = element.dataset.row;
            var col = element.dataset.col;
            //record attack
            player.receiveAttack(row, col);
            //check if player wins game
            if (player.checkSunk() === true) {
              return alert('Game Over!');
            }
            ;
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

//Player placements of ships

//Click handler for Carrier
document.getElementById('p1-C').addEventListener('click', function () {
  document.getElementById('placement').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Carrier';
});
//Click halder for Battleship
document.getElementById('p1-B').addEventListener('click', function () {
  document.getElementById('placement').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Battle Ship';
});
//Click handler for Destroyer
document.getElementById('p1-D').addEventListener('click', function () {
  document.getElementById('placement').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Destroyer';
});
//Click handler for Submarine
document.getElementById('p1-S').addEventListener('click', function () {
  document.getElementById('placement').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Submarine';
});
//Click handler for Patrol Boat
document.getElementById('p1-P').addEventListener('click', function () {
  document.getElementById('placement').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Patrol Boat';
});

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

    /*
    checkOnBoard (x, y){
        if ((x < 0) || (y < 0) || (x > 6) || (y > 6)) {
            return false
        }
    }
    */
    //utility function
  }, {
    key: "checkOpenBoard",
    value: function checkOpenBoard(r, c) {
      if (this.board[r][c].value === 'X' || this.board[r][c].value === '!') {
        console.log('You already fired here!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtHQUFrRyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLHlEQUF5RCxvQkFBb0IsNENBQTRDLGtCQUFrQixtQkFBbUIsYUFBYSw4QkFBOEIsR0FBRywrS0FBK0ssb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLEdBQUcsK0NBQStDLDZCQUE2QixtQkFBbUIsR0FBRyw2Q0FBNkMsNEJBQTRCLEdBQUcsK0NBQStDLGlDQUFpQyxHQUFHLCtDQUErQywyQ0FBMkMsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2x2QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3REMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWdIO0FBQ2hIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0dBQU87Ozs7QUFJMEQ7QUFDbEYsT0FBTyxpRUFBZSxnR0FBTyxJQUFJLGdHQUFPLFVBQVUsZ0dBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0Q7QUFDVjtBQUNxQjtBQUNoQjtBQUNQOztBQUV0QztBQUNBLElBQUlLLE9BQU8sR0FBRyxJQUFJSCwyREFBVyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxJQUFJSSxRQUFRLEdBQUcsSUFBSUgsMERBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDOztBQUVqRDtBQUNBRSxPQUFPLENBQUNFLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUNqREgsT0FBTyxDQUFDRSxFQUFFLENBQUNDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7QUFDbkRILE9BQU8sQ0FBQ0UsRUFBRSxDQUFDQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQ2xESCxPQUFPLENBQUNFLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUNsREgsT0FBTyxDQUFDRSxFQUFFLENBQUNDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7QUFFaERGLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDO0FBQ2xERixRQUFRLENBQUNDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUNwREYsUUFBUSxDQUFDQyxFQUFFLENBQUNDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7QUFDbkRGLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQ25ERixRQUFRLENBQUNDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUdqREMsVUFBVSxDQUFDQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDSSxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTixPQUFPLENBQUNFLEVBQUUsQ0FBQ0ssYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUJQLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDSyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUU5Qk4sUUFBUSxDQUFDQyxFQUFFLENBQUNLLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9CTixRQUFRLENBQUNDLEVBQUUsQ0FBQ0ssYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRS9CO0FBQ0FSLDJEQUFVLENBQUNDLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDSSxLQUFLLEVBQUUsY0FBYyxFQUFFTixPQUFPLENBQUNFLEVBQUUsQ0FBQztBQUN4REgsMkRBQVUsQ0FBQ0UsUUFBUSxDQUFDQyxFQUFFLENBQUNJLEtBQUssRUFBRSxjQUFjLEVBQUVMLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSU0sZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDN0QsSUFBSUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7O0FBRTNEO0FBQ0FELFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBSztFQUMvQ0QsYUFBYSxDQUFDQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsWUFBSztJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNCZiwyREFBVSxDQUFDRSxRQUFRLENBQUNDLEVBQUUsQ0FBQ0ksS0FBSyxFQUFFLGNBQWMsRUFBRUwsUUFBUSxDQUFDQyxFQUFFLENBQUM7RUFDOUQsQ0FBQyxDQUFDO0FBRU4sQ0FDQSxDQUFDO0FBQ0Q7QUFDQVMsYUFBYSxDQUFDQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsU0FBU0csVUFBVUEsQ0FBQSxFQUFJO0VBQzVEQyxVQUFVLENBQUMsU0FBU0QsVUFBVUEsQ0FBQSxFQUFHO0lBQzdCO0lBQ0EsU0FBU0UsUUFBUUEsQ0FBQSxFQUFHO01BQ2hCLElBQUlqQixPQUFPLENBQUNFLEVBQUUsQ0FBQ2dCLGNBQWMsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDM0RELFNBQVMsR0FBR0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekNILFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekNOLFFBQVEsQ0FBQ0UsU0FBUyxFQUFFQyxTQUFTLENBQUM7TUFDbEM7TUFBQztJQUNMO0lBQ0EsSUFBSUQsU0FBUyxHQUFHRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxJQUFJSCxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDTixRQUFRLENBQUMsQ0FBQztJQUNWakIsT0FBTyxDQUFDRSxFQUFFLENBQUNLLGFBQWEsQ0FBQ1ksU0FBUyxFQUFFQyxTQUFTLENBQUM7SUFDOUNyQiwyREFBVSxDQUFDQyxPQUFPLENBQUNFLEVBQUUsQ0FBQ0ksS0FBSyxFQUFFLGNBQWMsRUFBRU4sT0FBTyxDQUFDRSxFQUFFLENBQUM7SUFDeERXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDWixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFd0M7O0FBRTFDO0FBQ08sU0FBU2YsVUFBVUEsQ0FBRU8sS0FBSyxFQUFFa0IsU0FBUyxFQUFFQyxNQUFNLEVBQUM7RUFDakQsSUFBSXZCLEVBQUUsR0FBR08sUUFBUSxDQUFDQyxjQUFjLENBQUNjLFNBQVMsQ0FBQztFQUMzQ3RCLEVBQUUsQ0FBQ3dCLFNBQVMsR0FBRyxFQUFFO0VBQUMsSUFBQUMsU0FBQSxHQUFBQywwQkFBQSxDQUNGdEIsS0FBSztJQUFBdUIsS0FBQTtFQUFBO0lBQXJCLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQXNCO01BQUEsSUFBYkMsR0FBRyxHQUFBSixLQUFBLENBQUFLLEtBQUE7TUFBQSxJQUFBQyxVQUFBLEdBQUFQLDBCQUFBLENBQ1FLLEdBQUc7UUFBQUcsTUFBQTtNQUFBO1FBQUEsSUFBQUMsS0FBQSxZQUFBQSxNQUFBLEVBQUM7VUFBQSxJQUFaQyxJQUFJLEdBQUFGLE1BQUEsQ0FBQUYsS0FBQTtVQUNSLElBQUlLLE9BQU8sR0FBRzlCLFFBQVEsQ0FBQytCLGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDM0NELE9BQU8sQ0FBQ0UsV0FBVyxHQUFHSCxJQUFJLENBQUNKLEtBQUs7VUFDaEMsSUFBSUssT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQzdCRixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUNqQztVQUFDO1VBQ0QsSUFBSUosT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQzdCRixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztVQUNoQztVQUFDO1VBQ0QsSUFBSUosT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQzdCRixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUNqQztVQUFDO1VBQ0QsSUFBSUosT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxJQUMvQkYsT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxJQUMzQkYsT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxJQUMzQkYsT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxJQUMzQkYsT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxJQUMzQkYsT0FBTyxDQUFDRSxXQUFXLEtBQUssR0FBRyxFQUFDO1lBQ3hCRixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUNqQztVQUVBSixPQUFPLENBQUNLLE9BQU8sQ0FBQ1gsR0FBRyxHQUFHSyxJQUFJLENBQUNPLENBQUM7VUFDNUJOLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDRSxHQUFHLEdBQUdSLElBQUksQ0FBQ1MsQ0FBQztVQUM1QjtVQUNBUixPQUFPLENBQUMzQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsWUFBSztZQUN2QyxJQUFJcUIsR0FBRyxHQUFHZSxNQUFNLENBQUNULE9BQU8sQ0FBQ0ssT0FBTyxDQUFDWCxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3pDLElBQUlhLEdBQUcsR0FBR0UsTUFBTSxDQUFDVCxPQUFPLENBQUNLLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN6Q1AsT0FBTyxDQUFDRSxXQUFXLE1BQUFRLE1BQUEsQ0FBTWhCLEdBQUcsUUFBQWdCLE1BQUEsQ0FBS0gsR0FBRyxDQUFFO1VBQzFDLENBQUMsQ0FBQztVQUNGO1VBQ0FQLE9BQU8sQ0FBQzNCLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFLO1lBQ3RDLElBQUlxQixHQUFHLEdBQUdNLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDWCxHQUFHO1lBQzdCLElBQUlhLEdBQUcsR0FBR1AsT0FBTyxDQUFDSyxPQUFPLENBQUNFLEdBQUc7WUFDN0JQLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHSCxJQUFJLENBQUNKLEtBQUs7VUFDcEMsQ0FBQyxDQUFDO1VBQ0Y7VUFDQUssT0FBTyxDQUFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7WUFDbkMsSUFBSXFCLEdBQUcsR0FBR00sT0FBTyxDQUFDSyxPQUFPLENBQUNYLEdBQUc7WUFDN0IsSUFBSWEsR0FBRyxHQUFHUCxPQUFPLENBQUNLLE9BQU8sQ0FBQ0UsR0FBRztZQUM3QjtZQUNBckIsTUFBTSxDQUFDbEIsYUFBYSxDQUFDMEIsR0FBRyxFQUFFYSxHQUFHLENBQUM7WUFDOUI7WUFDQSxJQUFJckIsTUFBTSxDQUFDeUIsU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7Y0FDN0IsT0FBT0MsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUM5QjtZQUFDO1VBQ0wsQ0FBQyxDQUFDO1VBQ0ZqRCxFQUFFLENBQUNrRCxXQUFXLENBQUNiLE9BQU8sQ0FBQztRQUMzQixDQUFDO1FBL0NELEtBQUFKLFVBQUEsQ0FBQUwsQ0FBQSxNQUFBTSxNQUFBLEdBQUFELFVBQUEsQ0FBQUosQ0FBQSxJQUFBQyxJQUFBO1VBQUFLLEtBQUE7UUFBQTtNQStDQyxTQUFBZ0IsR0FBQTtRQUFBbEIsVUFBQSxDQUFBbUIsQ0FBQSxDQUFBRCxHQUFBO01BQUE7UUFBQWxCLFVBQUEsQ0FBQW9CLENBQUE7TUFBQTtJQUNMO0VBQUMsU0FBQUYsR0FBQTtJQUFBMUIsU0FBQSxDQUFBMkIsQ0FBQSxDQUFBRCxHQUFBO0VBQUE7SUFBQTFCLFNBQUEsQ0FBQTRCLENBQUE7RUFBQTtBQUNMOztBQUVBOztBQUVBO0FBQ0E5QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNURILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDOEMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztFQUM1RGhELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDZ0QsU0FBUyxHQUFHLFNBQVM7QUFDOUQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQWpELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1REgsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM4QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQzVEaEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNnRCxTQUFTLEdBQUcsYUFBYTtBQUNsRSxDQUFDLENBQUM7QUFDRjtBQUNBakQsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzVESCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzhDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDNURoRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ2dELFNBQVMsR0FBRyxXQUFXO0FBQ2hFLENBQUMsQ0FBQztBQUNGO0FBQ0FqRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNURILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDOEMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztFQUM1RGhELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDZ0QsU0FBUyxHQUFHLFdBQVc7QUFDaEUsQ0FBQyxDQUFDO0FBQ0Y7QUFDQWpELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1REgsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM4QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQzVEaEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNnRCxTQUFTLEdBQUcsYUFBYTtBQUNsRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkY7QUFDeUM7O0FBRXpDOztBQUVBO0FBQ0EsU0FBU0MsVUFBVUEsQ0FBRUMsTUFBTSxFQUFDO0VBQ3hCLElBQU1DLFFBQVEsR0FBR0Msa0JBQUEsQ0FBSUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUMsVUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO0lBQUEsT0FBS0MsTUFBTSxDQUFDQyxZQUFZLENBQUNGLENBQUMsR0FBRSxFQUFFLENBQUM7RUFBQSxFQUFDO0VBQ25FLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFJQyxFQUFFO0lBQUEsT0FBS0EsRUFBRSxLQUFLVixNQUFNO0VBQUE7RUFDbEMsSUFBTVcsR0FBRyxHQUFHVixRQUFRLENBQUNXLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDO0VBQ3BDLE9BQU9FLEdBQUc7QUFDbEI7QUFBQztBQUNEO0FBQ08sU0FBU0UsTUFBTUEsQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBQztFQUNwQyxJQUFNN0IsQ0FBQyxHQUFHWSxVQUFVLENBQUNlLEdBQUcsQ0FBQztFQUN6QixJQUFNN0IsQ0FBQyxHQUFHOEIsR0FBRztFQUNiLElBQU1FLE1BQU0sR0FBR0QsS0FBSyxDQUFDdEUsS0FBSyxDQUFDeUMsQ0FBQyxDQUFDLENBQUNGLENBQUMsQ0FBQztFQUNoQyxPQUFPZ0MsTUFBTTtBQUNqQjtBQUVPLElBQU1sRixTQUFTO0VBQ2xCLFNBQUFBLFVBQWFtRCxHQUFHLEVBQUViLEdBQUcsRUFBRTtJQUFBNkMsZUFBQSxPQUFBbkYsU0FBQTtJQUNuQixJQUFJLENBQUNtRCxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNiLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQzNCLEtBQUssR0FBRyxJQUFJLENBQUN5RSxXQUFXLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0VBQ25CO0VBQUMsT0FBQUMsWUFBQSxDQUFBdEYsU0FBQTtJQUFBdUYsR0FBQTtJQUFBaEQsS0FBQSxFQUNELFNBQUE2QyxZQUFBLEVBQWM7TUFDVixJQUFJSSxTQUFTLEdBQUcsRUFBRTtNQUNsQixLQUFLLElBQUl0QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDWixHQUFHLEVBQUVZLENBQUMsRUFBRSxFQUFDO1FBQzlCLElBQUl1QyxJQUFJLEdBQUcsRUFBRTtRQUNiLEtBQUssSUFBSXJDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNELEdBQUcsRUFBRUMsQ0FBQyxFQUFFLEVBQUM7VUFDOUIsSUFBSWIsS0FBSyxHQUFHLENBQUM7VUFDYmtELElBQUksQ0FBQ0MsSUFBSSxDQUFDO1lBQUVuRCxLQUFLLEVBQUxBLEtBQUs7WUFBRVcsQ0FBQyxFQUFEQSxDQUFDO1lBQUVFLENBQUMsRUFBREE7VUFBRSxDQUFDLENBQUM7UUFDOUI7UUFDQW9DLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJLENBQUM7TUFDeEI7TUFDQSxPQUFPRCxTQUFTO0lBQ3BCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0k7RUFBQTtJQUFBRCxHQUFBO0lBQUFoRCxLQUFBLEVBQ0EsU0FBQWhCLGVBQWdCMkIsQ0FBQyxFQUFFRSxDQUFDLEVBQUM7TUFDakIsSUFBSSxJQUFJLENBQUN6QyxLQUFLLENBQUN1QyxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNiLEtBQUssS0FBSyxHQUFHLElBQ2xDLElBQUksQ0FBQzVCLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBRTtRQUM1QnJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO1FBQ3RDLE9BQU8sS0FBSztNQUNoQjtJQUNKO0VBQUM7SUFBQW9FLEdBQUE7SUFBQWhELEtBQUEsRUFFRCxTQUFBL0IsYUFBYW1GLElBQUksRUFBRXpDLENBQUMsRUFBRUUsQ0FBQyxFQUFFd0MsR0FBRyxFQUFFO01BQzFCLElBQU10RCxHQUFHLEdBQUdZLENBQUM7TUFDYixJQUFNQyxHQUFHLEdBQUdDLENBQUM7O01BRWI7QUFDUjtBQUNBO01BQ1EsSUFBTXlDLE9BQU8sR0FBRyxJQUFJNUYsa0RBQUksQ0FBQzBGLElBQUksQ0FBQztNQUM5QixJQUFJLENBQUNOLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRyxPQUFPLENBQUM7TUFFeEIsSUFBSSxDQUFDbEYsS0FBSyxDQUFDMkIsR0FBRyxDQUFDLENBQUNhLEdBQUcsQ0FBQyxDQUFDWixLQUFLLEdBQUdzRCxPQUFPLENBQUNDLEVBQUU7TUFFdkMsSUFBSUYsR0FBRyxLQUFLLE9BQU8sRUFBQztRQUNoQixLQUFLLElBQUlyQixDQUFDLEdBQUcsQ0FBQyxFQUFHckIsQ0FBQyxHQUFHcUIsQ0FBQyxHQUFLckIsQ0FBQyxHQUFHMkMsT0FBTyxDQUFDRSxNQUFPLEVBQUV4QixDQUFDLEVBQUUsRUFBRTtVQUNqRCxJQUFJLENBQUM1RCxLQUFLLENBQUN1QyxDQUFDLEVBQUUsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxHQUFHc0QsT0FBTyxDQUFDQyxFQUFFO1FBQ3pDO01BQ0o7TUFBQztNQUNELElBQUlGLEdBQUcsS0FBSyxPQUFPLEVBQUM7UUFDaEIsS0FBSyxJQUFJckIsRUFBQyxHQUFHLENBQUMsRUFBR3JCLENBQUMsR0FBR3FCLEVBQUMsR0FBS3JCLENBQUMsR0FBRzJDLE9BQU8sQ0FBQ0UsTUFBTyxFQUFFeEIsRUFBQyxFQUFFLEVBQUU7VUFDakQsSUFBSSxDQUFDNUQsS0FBSyxDQUFDdUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNiLEtBQUssR0FBR3NELE9BQU8sQ0FBQ0MsRUFBRTtRQUN6QztNQUNKO01BQUM7TUFDRCxJQUFJRixHQUFHLEtBQUssTUFBTSxFQUFDO1FBQ2YsS0FBSyxJQUFJckIsR0FBQyxHQUFHLENBQUMsRUFBR25CLENBQUMsR0FBR21CLEdBQUMsR0FBS25CLENBQUMsR0FBR3lDLE9BQU8sQ0FBQ0UsTUFBTyxFQUFFeEIsR0FBQyxFQUFFLEVBQUU7VUFDakQsSUFBSSxDQUFDNUQsS0FBSyxDQUFDdUMsQ0FBQyxDQUFDLENBQUNFLENBQUMsRUFBRSxDQUFDLENBQUNiLEtBQUssR0FBR3NELE9BQU8sQ0FBQ0MsRUFBRTtRQUN6QztNQUNKO01BQUM7TUFDRCxJQUFJRixHQUFHLEtBQUssTUFBTSxFQUFDO1FBQ2YsS0FBSyxJQUFJckIsR0FBQyxHQUFHLENBQUMsRUFBR25CLENBQUMsR0FBR21CLEdBQUMsR0FBS25CLENBQUMsR0FBR3lDLE9BQU8sQ0FBQ0UsTUFBTyxFQUFFeEIsR0FBQyxFQUFFLEVBQUU7VUFDakQsSUFBSSxDQUFDNUQsS0FBSyxDQUFDdUMsQ0FBQyxDQUFDLENBQUNFLENBQUMsRUFBRSxDQUFDLENBQUNiLEtBQUssR0FBR3NELE9BQU8sQ0FBQ0MsRUFBRTtRQUN6QztNQUNKO01BQUM7SUFDTDtFQUFDO0lBQUFQLEdBQUE7SUFBQWhELEtBQUEsRUFDRCxTQUFBM0IsY0FBZXNDLENBQUMsRUFBRUUsQ0FBQyxFQUFFO01BRWpCO01BQ0EsSUFBSSxJQUFJLENBQUN6QyxLQUFLLENBQUN1QyxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNiLEtBQUssS0FBSyxDQUFDLEVBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM1QixLQUFLLENBQUN1QyxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNiLEtBQUssR0FBRyxHQUFHO01BQ3ZDO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQzVCLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBQztRQUMvQixJQUFJLENBQUM4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBQztRQUMvQixJQUFJLENBQUM4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBQztRQUMvQixJQUFJLENBQUM4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBQztRQUMvQixJQUFJLENBQUM4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxLQUFLLEdBQUcsRUFBQztRQUMvQixJQUFJLENBQUM4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxPQUFPLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2IsS0FBSyxHQUFHLEdBQUc7SUFDdkM7RUFBQztJQUFBZ0QsR0FBQTtJQUFBaEQsS0FBQSxFQUNELFNBQUFnQixVQUFBLEVBQVk7TUFDUixJQUFJMEMsTUFBTSxHQUFHLEVBQUU7TUFDZkEsTUFBTSxDQUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNhLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDbkNELE1BQU0sQ0FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ25DRCxNQUFNLENBQUNQLElBQUksQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNuQ0QsTUFBTSxDQUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNhLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDbkNELE1BQU0sQ0FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ25DLE9BQU9ELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLFVBQUF6QixJQUFJO1FBQUEsT0FBSUEsSUFBSSxLQUFLLElBQUk7TUFBQSxFQUFDO0lBQzlDO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIOEM7QUFHNUMsSUFBTXhFLFdBQVcsZ0JBQUFvRixZQUFBLENBQ3BCLFNBQUFwRixZQUFha0csSUFBSSxFQUFFO0VBQUFqQixlQUFBLE9BQUFqRixXQUFBO0VBQ2YsSUFBSSxDQUFDa0csSUFBSSxHQUFHQSxJQUFJO0VBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7RUFDYixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0VBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztFQUNmLElBQUksQ0FBQ2hHLEVBQUUsR0FBRyxJQUFJUCw0REFBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUdFLElBQU1HLFVBQVUsZ0JBQUFtRixZQUFBLENBQ25CLFNBQUFuRixXQUFhaUcsSUFBSSxFQUFFSSxLQUFLLEVBQUU7RUFBQXJCLGVBQUEsT0FBQWhGLFVBQUE7RUFDdEIsSUFBSSxDQUFDaUcsSUFBSSxHQUFHQSxJQUFJO0VBQ2hCLElBQUksQ0FBQ0ksS0FBSyxHQUFHQSxLQUFLO0VBQ2xCLElBQUksQ0FBQ2pHLEVBQUUsR0FBRyxJQUFJUCw0REFBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTyxJQUFNQyxJQUFJO0VBQ2IsU0FBQUEsS0FBWTBGLElBQUksRUFBRTtJQUFBUixlQUFBLE9BQUFsRixJQUFBO0lBQ2QsSUFBSSxDQUFDMEYsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0csRUFBRSxHQUFHLENBQUM7SUFDWCxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDVSxNQUFNLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHLEtBQUs7SUFFakIsSUFBSSxJQUFJLENBQUNmLElBQUksS0FBSyxTQUFTLEVBQUM7TUFDeEIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQztNQUNmLElBQUksQ0FBQ0QsRUFBRSxHQUFHLEdBQUc7SUFDakI7SUFBQztJQUVELElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUssWUFBWSxFQUFDO01BQzNCLElBQUksQ0FBQ0ksTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUNELEVBQUUsR0FBRyxHQUFHO0lBQ2pCO0lBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ0gsSUFBSSxLQUFLLFdBQVcsRUFBQztNQUMxQixJQUFJLENBQUNJLE1BQU0sR0FBRyxDQUFDO01BQ2YsSUFBSSxDQUFDRCxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0lBRUQsSUFBSSxJQUFJLENBQUNILElBQUksS0FBSyxXQUFXLEVBQUM7TUFDMUIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQztNQUNmLElBQUksQ0FBQ0QsRUFBRSxHQUFHLEdBQUc7SUFDakI7SUFBQztJQUVELElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUssUUFBUSxFQUFDO01BQ3ZCLElBQUksQ0FBQ0ksTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUNELEVBQUUsR0FBRyxHQUFHO0lBQ2pCO0lBQUM7RUFDTDtFQUFDLE9BQUFSLFlBQUEsQ0FBQXJGLElBQUE7SUFBQXNGLEdBQUE7SUFBQWhELEtBQUEsRUFFRCxTQUFBeUQsSUFBQSxFQUFLO01BQ0QsSUFBSSxDQUFDUyxNQUFNLEVBQUU7SUFDakI7RUFBQztJQUFBbEIsR0FBQTtJQUFBaEQsS0FBQSxFQUNELFNBQUEyRCxPQUFBLEVBQVE7TUFDSixJQUFJLElBQUksQ0FBQ08sTUFBTSxLQUFLLElBQUksQ0FBQ1YsTUFBTSxFQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDVyxJQUFJLEdBQUcsSUFBSTtNQUMzQjtJQUNKO0VBQUM7QUFBQTtBQUNKOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzPzU2YWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjY29udGFpbmVyLXAxLFxuI2NvbnRhaW5lci1wMiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIHdpZHRoOiA1MHZoO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBnYXA6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcbiNjb250YWluZXItcDEgLmhpdCxcbiNjb250YWluZXItcDIgLmhpdCxcbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0LFxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGFpbmVyLXAxIC5oaXQsXG4jY29udGFpbmVyLXAyIC5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2NvbnRhaW5lci1wMSAuYm9hdCxcbiNjb250YWluZXItcDIgLmJvYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4jY29udGFpbmVyLXAxIC5taXNzLFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAyNDQpO1xufVxuXG4jcGxhY2VtZW50IHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLHVCQUF1QjtBQUMzQjtBQUNBOzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhaW5lci1wMSxcXG4jY29udGFpbmVyLXAyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsLFxcbiNjb250YWluZXItcDEgLmhpdCxcXG4jY29udGFpbmVyLXAyIC5oaXQsXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0LFxcbiNjb250YWluZXItcDEgLm1pc3MsXFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5oaXQsXFxuI2NvbnRhaW5lci1wMiAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5ib2F0LFxcbiNjb250YWluZXItcDIgLmJvYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAyNDQpO1xcbn1cXG5cXG4jcGxhY2VtZW50IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcydcbmltcG9ydCB7IHByaW50Qm9hcmQgfSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzJztcblxuLy9jcmVhdGUgcGxheWVyc1xubGV0IHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIoJ0FuZHJldycpO1xubGV0IGNvbXB1dGVyID0gbmV3IGNvbXBQbGF5ZXIoJ2NvbXB1dGVyJywgJ2Vhc3knKTtcblxuLy9zZXQgc2hpcHNcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdjYXJyaWVyJywgMCwgMCwgJ3NvdXRoJyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnYmF0dGxlc2hpcCcsIDQsIDEsICdlYXN0Jyk7XG5wbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcCgnc3VibWFyaW5lJywgMSwgMSwgJ2Vhc3QnKTtcbnBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKCdkZXN0cm95ZXInLCA2LCAwLCAnZWFzdCcpO1xucGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoJ3BhdHJvbCcsIDAsIDQsICdzb3V0aCcpO1xuXG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ2NhcnJpZXInLCA1LCAyLCAnbm9ydGgnKTtcbmNvbXB1dGVyLmdiLnBsYWNlTmV3U2hpcCgnYmF0dGxlc2hpcCcsIDAsIDAsICdlYXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ3N1Ym1hcmluZScsIDAsIDYsICd3ZXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ2Rlc3Ryb3llcicsIDYsIDQsICdlYXN0Jyk7XG5jb21wdXRlci5nYi5wbGFjZU5ld1NoaXAoJ3BhdHJvbCcsIDQsIDYsICdub3J0aCcpO1xuXG5cbmdsb2JhbFRoaXMuYm9hcmRUZXN0ID0gcGxheWVyMS5nYi5ib2FyZDtcbi8qXG5jb25zb2xlLmxvZyhib2FyZFRlc3RbMF1bMF0udmFsdWUpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLmMpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLnIpO1xuKi9cbi8vYXR0YWNrc1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDAsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDEsIDApO1xuXG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDAsIDApO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjayg2LCA0KTtcblxuLy91cGRhdGUgZ2FtZSBib2FyZFxucHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG5wcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuXG4vL2hvdyB0byBwcmludCBzaGlwc1xuLypjb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG5cbi8vbGlzdGVuIGZvciBwbGF5ZXIgdHVyblxubGV0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItcDEnKTtcbmxldCBjb21wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMicpO1xuXG4vL0xpc3RlbiBmb3IgcGxheWVyIGNsaWNrIG9uIGNvbXB1dGVyIGJvYXJkIHRvIGxvZyBhdHRhY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb21wQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIG1vdmVzJyk7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgfSlcblxufVxuKTtcbi8vTGlzdGVuIGZvciBjb21wdXRlciBib2FyZCBjbGljayBieSBwbGF5ZXIsIGhhbmRsZXIgaXMgY29tcHV0ZXIgYXR0YWNrXG5jb21wQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIGZ1bmN0aW9uIFJhbmRvbU1vdmUgKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gUmFuZG9tTW92ZSAoKXtcbiAgICAgICAgLy9jaGVjayBpZiBzcXVhcmUgaXMgb3BlbiwgaWYgbm90IGdlbmVyYXRlIG5ldyBudW1iZXJzIGFuZCBjaGVjayBhZ2FpblxuICAgICAgICBmdW5jdGlvbiBmaW5kT3BlbiAoKXtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgcmFuZG9tQ29sKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgICAgICAgICBmaW5kT3BlbihyYW5kb21Sb3csIHJhbmRvbUNvbClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgICAgICBsZXQgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICAgIGZpbmRPcGVuKCk7XG4gICAgICAgIHBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjayhyYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcHV0ZXIgbW92ZXMnKTtcbiAgICB9LCAxMDAwKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnXG5cbi8vcHJpbnQgcGxheWVyLyBjb21wdXRlciBnYW1lYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkIChib2FyZCwgY29udGFpbmVyLCBwbGF5ZXIpe1xuICAgIGxldCBnYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcik7XG4gICAgZ2IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpe1xuICAgICAgICBmb3IobGV0IGNlbGwgb2Ygcm93KXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdEJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5yb3cgPSBjZWxsLnI7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuY29sID0gY2VsbC5jO1xuICAgICAgICAgICAgLy9ob3ZlciB0byByZXZlYWwgc3BhY2UgZGF0YXNldFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5yb3cpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5jb2wpICsgMTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7cm93fSwgJHtjb2x9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2hvdmVyIG91dFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY2xpY2sgYm9hcmQgdG8gYXR0YWNrXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICAgICAgLy9yZWNvcmQgYXR0YWNrXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgcGxheWVyIHdpbnMgZ2FtZVxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBnYi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9QbGF5ZXIgcGxhY2VtZW50cyBvZiBzaGlwc1xuXG4vL0NsaWNrIGhhbmRsZXIgZm9yIENhcnJpZXJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMS1DJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKS5pbm5lclRleHQgPSAnQ2Fycmllcic7XG59KVxuLy9DbGljayBoYWxkZXIgZm9yIEJhdHRsZXNoaXBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMS1CJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKS5pbm5lclRleHQgPSAnQmF0dGxlIFNoaXAnO1xufSlcbi8vQ2xpY2sgaGFuZGxlciBmb3IgRGVzdHJveWVyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEtRCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJykuaW5uZXJUZXh0ID0gJ0Rlc3Ryb3llcic7XG59KVxuLy9DbGljayBoYW5kbGVyIGZvciBTdWJtYXJpbmVcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMS1TJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKS5pbm5lclRleHQgPSAnU3VibWFyaW5lJztcbn0pXG4vL0NsaWNrIGhhbmRsZXIgZm9yIFBhdHJvbCBCb2F0XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEtUCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJykuaW5uZXJUZXh0ID0gJ1BhdHJvbCBCb2F0Jztcbn0pXG5cblxuXG5cbiIsIi8vY29uc3Qgc2hpcCA9IHJlcXVpcmUgKCcuL3NoaXAuanMnKVxuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4uL21vZHVsZXMvc2hpcC5qcydcblxuLy90byBhY2Nlc3Mgc3F1YXJlIG9uIGJvYXJkIHVzIG1lIGJvYXJkLmJvYXJkW3JdW2NdXG5cbi8vdXRpbGl0eTogY29udmVydHMgY29sdW1uIGxldHRlciB0byBudW1iZXIgZm9yIGxvb2tVcFxuZnVuY3Rpb24gY29sQ29udmVydCAobGV0dGVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheSg3KV0ubWFwKChfLGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArOTcpKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IChlbCkgPT4gZWwgPT09IGxldHRlcjtcbiAgICAgICAgY29uc3QgbnVtID0gYWxwaGFiZXQuZmluZEluZGV4KGl0ZW0pO1xuICAgICAgICByZXR1cm4gbnVtXG59O1xuLy91dGlsaXR5OiBib2FyZCBhcyB2YXJpYWJsZW5hbWUuYm9hcmQsIG9ubHkgd29ya3MgZm9yIGZpcnN0IHJvd1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2tVcCAoTGV0LCBOdW0sIGFycmF5KXtcbiAgICBjb25zdCBjID0gY29sQ29udmVydChMZXQpO1xuICAgIGNvbnN0IHIgPSBOdW07XG4gICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuYm9hcmRbY11bcl07XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGNsYXNzIGdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IgKGNvbCwgcm93KSB7XG4gICAgICAgIHRoaXMuY29sID0gY29sO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMucm93OyByKyspe1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb2w7IGMrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goeyB2YWx1ZSwgciwgYyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVCb2FyZC5wdXNoKHJvd3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgY2hlY2tPbkJvYXJkICh4LCB5KXtcbiAgICAgICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSB8fCAoeCA+IDYpIHx8ICh5ID4gNikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgICovXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHIsIGMpe1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1gnIHx8XG4gICAgICAgIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICchJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBhbHJlYWR5IGZpcmVkIGhlcmUhJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VOZXdTaGlwKHR5cGUsIHIsIGMsIGRpcikge1xuICAgICAgICBjb25zdCByb3cgPSByO1xuICAgICAgICBjb25zdCBjb2wgPSBjO1xuICAgICAgICBcbiAgICAgICAgLyppZiAodGhpcy5jaGVja09uQm9hcmQoY29sLCByb3cpID09PSBmYWxzZSl7XG4gICAgICAgICAgICByZXR1cm4gVHlwZUVycm9yO1xuICAgICAgICAqL1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAodHlwZSk7XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gJ3NvdXRoJyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnbm9ydGgnKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdlYXN0Jyl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgKyBpKSA8IChjICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MrK10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnd2VzdCcpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayAociwgYykge1xuXG4gICAgICAgIC8vaWYgd2F0ZXIgcmVjb3JkIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgY2FycmllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQycpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1swXS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBiYXR0ZXNoaXAgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0InKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbMV0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgZGVzdG9yeWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdEJyl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzWzJdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHN1Ym1hcmluZSByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUycpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc1szXS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBzdWJtYXJpbmUgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1AnKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbNF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZWNvcmQgaGl0IHRvIGJvYXJkXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJyEnO1xuICAgIH1cbiAgICBjaGVja1N1bmsgKCl7XG4gICAgICAgIGxldCBzdGF0dXMgPSBbXTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1swXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMV0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzJdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1szXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbNF0uaXNTdW5rKCkpO1xuICAgICAgICByZXR1cm4gc3RhdHVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbSA9PT0gdHJ1ZSlcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuXG5cbmV4cG9ydCBjbGFzcyBodW1hblBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy53aW5zID0gMDtcbiAgICAgICAgdGhpcy5sb3NzZXMgPSAwO1xuICAgICAgICB0aGlzLnN0cmVhayA9IDA7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKDcsNyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgY29tcFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGxldmVsKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoNyw3KTtcbiAgICB9XG59XG4vKlxubW9kdWxlLmV4cG9ydHMgPSBodW1hblBsYXllclxubW9kdWxlLmV4cG9ydHMgPSBjb21wUGxheWVyXG4qLyIsImV4cG9ydCBjbGFzcyBzaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NhcnJpZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2JhdHRsZXNoaXAnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQic7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Rlc3Ryb3llcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdEJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnc3VibWFyaW5lJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdwYXRyb2wnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMjtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUCc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgIH1cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgc2hpcFxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBcblxuIl0sIm5hbWVzIjpbImdhbWVib2FyZCIsInNoaXAiLCJodW1hblBsYXllciIsImNvbXBQbGF5ZXIiLCJwcmludEJvYXJkIiwicGxheWVyMSIsImNvbXB1dGVyIiwiZ2IiLCJwbGFjZU5ld1NoaXAiLCJnbG9iYWxUaGlzIiwiYm9hcmRUZXN0IiwiYm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwicGxheWVyQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbXBDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIlJhbmRvbU1vdmUiLCJzZXRUaW1lb3V0IiwiZmluZE9wZW4iLCJjaGVja09wZW5Cb2FyZCIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnRhaW5lciIsInBsYXllciIsImlubmVySFRNTCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJyb3ciLCJ2YWx1ZSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfbG9vcCIsImNlbGwiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInIiLCJjb2wiLCJjIiwiTnVtYmVyIiwiY29uY2F0IiwiY2hlY2tTdW5rIiwiYWxlcnQiLCJhcHBlbmRDaGlsZCIsImVyciIsImUiLCJmIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5uZXJUZXh0IiwiY29sQ29udmVydCIsImxldHRlciIsImFscGhhYmV0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIml0ZW0iLCJlbCIsIm51bSIsImZpbmRJbmRleCIsImxvb2tVcCIsIkxldCIsIk51bSIsImFycmF5IiwidGFyZ2V0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlQm9hcmQiLCJzaGlwcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdhbWVCb2FyZCIsInJvd3MiLCJwdXNoIiwidHlwZSIsImRpciIsIm5ld1NoaXAiLCJpZCIsImxlbmd0aCIsImhpdCIsInN0YXR1cyIsImlzU3VuayIsImV2ZXJ5IiwibmFtZSIsIndpbnMiLCJsb3NzZXMiLCJzdHJlYWsiLCJsZXZlbCIsImRhbWFnZSIsInN1bmsiXSwic291cmNlUm9vdCI6IiJ9