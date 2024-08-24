"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.style.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Anchor2.png */ "./src/images/Anchor2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/carrier.png */ "./src/images/carrier.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/submarine.png */ "./src/images/submarine.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/destroyer.png */ "./src/images/destroyer.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/patrol.png */ "./src/images/patrol.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Ship pacement buttons */
.p1 {
    background-color: cadetblue;
    height: 2.5em;
    width: 8em;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
}
.p1.deployedShip {
    background-color: gray;
    color: white;
    border: 3px bold black;
}
#random {
    background-color: rgb(148, 128, 90);
    height: 2.5em;
    width: 14em;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
}
.p1:hover, #random:hover{
    color: white;
    font-weight: 1000;

}


#deployed-p1,
#deployed-com {
    display: none;
    flex-direction: column;
}

#shipDamaged,
#shipDamage-com {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-items: center;
}

/* Ships stat displays - may consider moving to a separate style sheet*/
/*Outermost ship stat divs*/
.p1Ship, .comShip {
    width: 15vw;
    margin: 1.5em;
    padding-left: 0.5em;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: .25em solid black;
}
.p1Ship {
    background-color: rgb(3, 115, 167);
}
.comShip {
    background-color: rgb(104, 81, 39);
}
.stats {
    display: flex;
}
.life {
    height: 2em;
    width: 2em;
    background-position: center;
    background-size: contain;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.damaged {
    height: 2.8em;
    width: 2.8em;
    background-position: center;
    background-size: contain;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___})
}
.sunk {
    background-color: rgb(139, 22, 22);
    border: 3px solid orange;
}
/*Div contains life/damage for each ship*/
#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {
    display: flex;
    justify-content: space-around;
}
/*Outer most div for ship stats*/
#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {
    text-align: center;
    color: white;
    font-weight: bolder;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1em;
}

#p1-C, #com-C {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: 75%;
}

#p1-B, #com-B {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: 100%;
}

#p1-S, #com-S {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: 100%;
}

#p1-D, #com-D {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: 100%;
}

#p1-P, #com-P {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
    background-size: 50%;
}


`, "",{"version":3,"sources":["webpack://./src/styles/buttons.style.css"],"names":[],"mappings":"AAAA,yBAAyB;AACzB;IACI,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,mCAAmC;IACnC,aAAa;IACb,WAAW;IACX,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,iBAAiB;;AAErB;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA,uEAAuE;AACvE,2BAA2B;AAC3B;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB,yDAA4C;AAChD;AACA;IACI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;IACxB;AACJ;AACA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;AACA,yCAAyC;AACzC;IACI,aAAa;IACb,6BAA6B;AACjC;AACA,gCAAgC;AAChC;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,yDAA8C;IAC9C,oBAAoB;AACxB;;AAEA;IACI,yDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAA6C;IAC7C,oBAAoB;AACxB","sourcesContent":["/*Ship pacement buttons */\n.p1 {\n    background-color: cadetblue;\n    height: 2.5em;\n    width: 8em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n.p1.deployedShip {\n    background-color: gray;\n    color: white;\n    border: 3px bold black;\n}\n#random {\n    background-color: rgb(148, 128, 90);\n    height: 2.5em;\n    width: 14em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n.p1:hover, #random:hover{\n    color: white;\n    font-weight: 1000;\n\n}\n\n\n#deployed-p1,\n#deployed-com {\n    display: none;\n    flex-direction: column;\n}\n\n#shipDamaged,\n#shipDamage-com {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    align-items: center;\n}\n\n/* Ships stat displays - may consider moving to a separate style sheet*/\n/*Outermost ship stat divs*/\n.p1Ship, .comShip {\n    width: 15vw;\n    margin: 1.5em;\n    padding-left: 0.5em;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: .25em solid black;\n}\n.p1Ship {\n    background-color: rgb(3, 115, 167);\n}\n.comShip {\n    background-color: rgb(104, 81, 39);\n}\n.stats {\n    display: flex;\n}\n.life {\n    height: 2em;\n    width: 2em;\n    background-position: center;\n    background-size: contain;\n    background-image: url(../images/Anchor2.png);\n}\n.damaged {\n    height: 2.8em;\n    width: 2.8em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/hit.png')\n}\n.sunk {\n    background-color: rgb(139, 22, 22);\n    border: 3px solid orange;\n}\n/*Div contains life/damage for each ship*/\n#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {\n    display: flex;\n    justify-content: space-around;\n}\n/*Outer most div for ship stats*/\n#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {\n    text-align: center;\n    color: white;\n    font-weight: bolder;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 1em;\n}\n\n#p1-C, #com-C {\n    background-image: url('../images/carrier.png');\n    background-size: 75%;\n}\n\n#p1-B, #com-B {\n    background-image: url('../images/battleship.png');\n    background-size: 100%;\n}\n\n#p1-S, #com-S {\n    background-image: url('../images/submarine.png');\n    background-size: 100%;\n}\n\n#p1-D, #com-D {\n    background-image: url('../images/destroyer.png');\n    background-size: 100%;\n}\n\n#p1-P, #com-P {\n    background-image: url('../images/patrol.png');\n    background-size: 50%;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Ocean-Board.jpg */ "./src/images/Ocean-Board.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/miss.png */ "./src/images/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Battleship2.png */ "./src/images/Battleship2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Destroyer2.png */ "./src/images/Destroyer2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/submarine2.png */ "./src/images/submarine2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Patrol2.png */ "./src/images/Patrol2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/carrier2.png */ "./src/images/carrier2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#comConsole {
    display: none;
    grid-template-columns: 3fr 1fr;
}
#p1Console {
    display: grid;
    grid-template-columns: 3fr 1fr;
    row-gap: 5x;
}

#container-p1,
#container-p2 {
    position: relative;
    display: grid;
    justify-self: center;
    aspect-ratio: 1 / 1;
    height:85vh;
    gap: 0;
    border: 4px solid black;
    border-radius: 5px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}
#shipButtons {
    justify-self: center;
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
    color: transparent;
}


#container-p1 .boat,
#container-p2 .boat {
    background-color: none;
    color: transparent;
}

#container-p1 .miss,
#container-p2 .miss {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
}

#container-p1 .C-HIT,
#container-p1 .B-HIT,
#container-p1 .D-HIT,
#container-p1 .S-HIT,
#container-p1 .P-HIT,
#container-p2 .C-HIT,
#container-p2 .B-HIT,
#container-p2 .D-HIT,
#container-p2 .S-HIT,
#container-p2 .P-HIT {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    color: transparent;
}


/*Ship icons on board*/
#overlay-B {
    pointer-events: none;
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: 100% 120%;
    background-repeat: no-repeat;
}

.horz-overlay-B {
    height: 130%;
    transform: rotate(-8deg);
    transform-origin: center;
}

.vert-overlay-B {
    transform: translateY(-10%);
}

#overlay-D {
    pointer-events: none;
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: 100% 120%;
    background-repeat: no-repeat;
}

.horz-overlay-D {
    transform: rotate(-10deg);
    transform-origin: center;
}

.vert-overlay-D {
    transform: translateY(-10%);
}

#overlay-S {
    pointer-events: none;
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.horz-overlay-S {
    transform: rotate(-10deg);
    transform-origin: center;
}

#overlay-P {
    pointer-events: none;
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
/*
.horz-overlay-P {
    transform: rotate(-20deg);
    transform-origin: center;
}

.horz-overlay-P {
    transform: rotate(-20deg);
    transform-origin: center;
}
*/

#overlay-C {
    pointer-events: none;
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.horz-overlay-C {
    height: 120%;
    transform: rotate(-8deg);
    transform-origin: center;
    
}

.vert-overlay-C {
    height: 100%
}

`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;;AAEA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;AACtB;;;AAGA;;IAEI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,yDAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;;;;;;;;;;IAUI,yDAA0C;IAC1C,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yDAAkD;IAClD,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;;;;;;;;;;CAUC;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;;AAE5B;;AAEA;IACI;AACJ","sourcesContent":["\n#comConsole {\n    display: none;\n    grid-template-columns: 3fr 1fr;\n}\n#p1Console {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    row-gap: 5x;\n}\n\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    justify-self: center;\n    aspect-ratio: 1 / 1;\n    height:85vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n#shipButtons {\n    justify-self: center;\n}\n\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    color: transparent;\n}\n\n\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: none;\n    color: transparent;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-image: url('../images/miss.png');\n    background-size: cover;\n}\n\n#container-p1 .C-HIT,\n#container-p1 .B-HIT,\n#container-p1 .D-HIT,\n#container-p1 .S-HIT,\n#container-p1 .P-HIT,\n#container-p2 .C-HIT,\n#container-p2 .B-HIT,\n#container-p2 .D-HIT,\n#container-p2 .S-HIT,\n#container-p2 .P-HIT {\n    background-image: url('../images/hit.png');\n    background-size: cover;\n    color: transparent;\n}\n\n\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n/*\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n*/\n\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n    \n}\n\n.vert-overlay-C {\n    height: 100%\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shipform.style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shipform.style.css ***!
  \*****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#placement {
    display:none;
    grid-template-columns: repeat(2, 1fr);
    border: 2px solid black;
    border-radius: 4px;
    width: 20vw;
    height: 20vw;
}

#placement #formTitle {
    grid-column-start: 1;
    grid-column-end: 3;

}

#placement .formLable {
    width: 5em;
    margin-right: 1em;
    padding: 1em;
    grid-column-start: 1;
    grid-column-end: 2;
}

#placement .formInput {
    max-width: 3em;
    border: 1px solid black;
    border-radius: 4px;
    grid-column-start: 2;
    grid-column-end: 3;
}

#placement #placeBtn {
    grid-column-start: 1;
    grid-column-end: 3;
}

#deployed {
    display: none;
    border: 2px solid black;
    border-radius: 4px;
    width: 20vw;
    height: 20vw;
}`, "",{"version":3,"sources":["webpack://./src/styles/shipform.style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;;AAEtB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB","sourcesContent":["#placement {\n    display:none;\n    grid-template-columns: repeat(2, 1fr);\n    border: 2px solid black;\n    border-radius: 4px;\n    width: 20vw;\n    height: 20vw;\n}\n\n#placement #formTitle {\n    grid-column-start: 1;\n    grid-column-end: 3;\n\n}\n\n#placement .formLable {\n    width: 5em;\n    margin-right: 1em;\n    padding: 1em;\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n#placement .formInput {\n    max-width: 3em;\n    border: 1px solid black;\n    border-radius: 4px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n#placement #placeBtn {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n#deployed {\n    display: none;\n    border: 2px solid black;\n    border-radius: 4px;\n    width: 20vw;\n    height: 20vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/startscreen.style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/startscreen.style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/shipmain.png */ "./src/images/shipmain.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --welcomeTextColor: rgb(119, 86, 26);
    --welcomeFontFam:'Courier New', Courier, monospace;
    --btnInputBorder: .2em solid white;
}
#startscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#startscreen #welcome {
    position: fixed;
    top: 40vh;
    color:white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#welcomeTitle {
    color: var(--welcomeTextColor);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    font-size: 3.8em;
    font-style: italic;
}
#welcomePic {
    position: fixed;
    top: 5vh;
    height: 25vh;
    width: 25vw;
    display: block;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-color: white;
}
#welcomeForm {
    display: grid;
    color: white;
    font-family: var(--welcomeFontFam);
    gap: 1em;

}
#welcomeForm select {
    font-family: var(--welcomeFontFam);
    color: black;
    font-weight: bolder;
    height: 2.5vh;
    border: var(--btnInputBorder);
    background-color:rgb(170, 218, 218);

}
#welcomeForm input {
    border-radius: 5px;
    height: 2.5vh;
    border: var(--btnInputBorder);
    background-color:rgb(170, 218, 218);
}

#startBtn {
    height: 5vh;
    margin-top: 2em;
    background-color: var(--welcomeTextColor);
    color: white;
    font-family: var(--welcomeFontFam);
    font-weight: 600;
    border: var(--btnInputBorder);
    border-radius: 5px;
}`, "",{"version":3,"sources":["webpack://./src/styles/startscreen.style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,kDAAkD;IAClD,kCAAkC;AACtC;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,8BAA8B;IAC9B,yCAAyC;IACzC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,yDAA6C;IAC7C,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kCAAkC;IAClC,QAAQ;;AAEZ;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;;AAEvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yCAAyC;IACzC,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;AACtB","sourcesContent":[":root {\n    --welcomeTextColor: rgb(119, 86, 26);\n    --welcomeFontFam:'Courier New', Courier, monospace;\n    --btnInputBorder: .2em solid white;\n}\n#startscreen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n    background-color: black;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#startscreen #welcome {\n    position: fixed;\n    top: 40vh;\n    color:white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n#welcomeTitle {\n    color: var(--welcomeTextColor);\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 3.8em;\n    font-style: italic;\n}\n#welcomePic {\n    position: fixed;\n    top: 5vh;\n    height: 25vh;\n    width: 25vw;\n    display: block;\n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    background-image: url(../images/shipmain.png);\n    background-color: white;\n}\n#welcomeForm {\n    display: grid;\n    color: white;\n    font-family: var(--welcomeFontFam);\n    gap: 1em;\n\n}\n#welcomeForm select {\n    font-family: var(--welcomeFontFam);\n    color: black;\n    font-weight: bolder;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n\n}\n#welcomeForm input {\n    border-radius: 5px;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n}\n\n#startBtn {\n    height: 5vh;\n    margin-top: 2em;\n    background-color: var(--welcomeTextColor);\n    color: white;\n    font-family: var(--welcomeFontFam);\n    font-weight: 600;\n    border: var(--btnInputBorder);\n    border-radius: 5px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/buttons.style.css":
/*!**************************************!*\
  !*** ./src/styles/buttons.style.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./buttons.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_buttons_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_buttons_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_buttons_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_buttons_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/styles/shipform.style.css":
/*!***************************************!*\
  !*** ./src/styles/shipform.style.css ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shipform.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shipform.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/startscreen.style.css":
/*!******************************************!*\
  !*** ./src/styles/startscreen.style.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./startscreen.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/startscreen.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/images/Anchor2.png":
/*!********************************!*\
  !*** ./src/images/Anchor2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef8e700951c4376402b5.png";

/***/ }),

/***/ "./src/images/Battleship2.png":
/*!************************************!*\
  !*** ./src/images/Battleship2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12c51f4d0fa3ae37fbfc.png";

/***/ }),

/***/ "./src/images/Destroyer2.png":
/*!***********************************!*\
  !*** ./src/images/Destroyer2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd6adf262ccc35f37bc7.png";

/***/ }),

/***/ "./src/images/Ocean-Board.jpg":
/*!************************************!*\
  !*** ./src/images/Ocean-Board.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25dc30eff6a58764f5a4.jpg";

/***/ }),

/***/ "./src/images/Patrol2.png":
/*!********************************!*\
  !*** ./src/images/Patrol2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f08a2fc7b7d4a811e12.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2da40b66f5630a69de4.png";

/***/ }),

/***/ "./src/images/carrier.png":
/*!********************************!*\
  !*** ./src/images/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "901b62dfa30856141daa.png";

/***/ }),

/***/ "./src/images/carrier2.png":
/*!*********************************!*\
  !*** ./src/images/carrier2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b21395f35eec02dd775.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "166c28fae31e58b764d4.png";

/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bd6cae6eee0fcc282b7.png";

/***/ }),

/***/ "./src/images/miss.png":
/*!*****************************!*\
  !*** ./src/images/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e8bdb0eb8dfc1fe4361.png";

/***/ }),

/***/ "./src/images/patrol.png":
/*!*******************************!*\
  !*** ./src/images/patrol.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0cf4f82ce2718fd27cf.png";

/***/ }),

/***/ "./src/images/shipmain.png":
/*!*********************************!*\
  !*** ./src/images/shipmain.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecd4dbf79cbcef2b70a2.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "272192f91c8a06f565d6.png";

/***/ }),

/***/ "./src/images/submarine2.png":
/*!***********************************!*\
  !*** ./src/images/submarine2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd6bea9f4a2a885c9686.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardSize: () => (/* binding */ boardSize),
/* harmony export */   computer: () => (/* binding */ computer),
/* harmony export */   player1: () => (/* binding */ player1)
/* harmony export */ });
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_computer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/computer.js */ "./src/modules/computer.js");
/* harmony import */ var _styles_gameboard_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/gameboard.style.css */ "./src/styles/gameboard.style.css");
/* harmony import */ var _styles_shipform_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/shipform.style.css */ "./src/styles/shipform.style.css");
/* harmony import */ var _styles_startscreen_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/startscreen.style.css */ "./src/styles/startscreen.style.css");
/* harmony import */ var _styles_buttons_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/buttons.style.css */ "./src/styles/buttons.style.css");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }









var player1;
var computer;

//welcome form
var boardSize;
var level = document.getElementById('level');
(function welcomeForm() {
  // document.addEventListener('DOMContentLoaded', ()=> {
  var welcomeForm = document.getElementById('welcomeForm');
  welcomeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    boardSize = document.getElementById('size').value;

    //create players
    player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.humanPlayer('Andrew');
    computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.compPlayer('computer', 'easy');
    //place computer ships
    //placeComputer(computer);
    //print boards
    //printBoard(computer.gb.board, 'container-p2', computer.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.welcomeFormDOM)();
  });
})();

//player place all player ships randomly on button push
(function randomSetPlayer() {
  var randomBtn = document.getElementById('random');
  randomBtn.addEventListener('click', function () {
    (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeComputer)(player1);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.playerShipOverlay)();
    //remove all buttons
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.removeShipBtns)();
    //place and print computer board and ships
    document.getElementById('mainpage').classList.add('mainPage');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayComputer)();
    (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeComputer)(computer);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
  });
})();

//player place ships on board manually
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('placement');
  var randomBtn = document.getElementById('random');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    //ship count prior to placement
    var startCount = player1.gb.ships.length;
    //store vales from input form
    var row = document.getElementById('shipRow').value;
    var col = document.getElementById('shipCol').value;
    var shipType = document.getElementById('formTitle').innerText;
    var direction = document.getElementById('direction').value;
    var shipID = shipType.slice(0, 1);
    //place ship
    player1.gb.placeNewShip(shipType, row, col, direction);
    //ship count after attemtped placement
    var newCount = player1.gb.ships.length;
    //print player board, overlay, ship stats
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.playerShipOverlay)();
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, shipType, shipID, 'p1');
    form.style.display = 'none';
    //remove all buttons if all five ships placed
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.removeShipBtns)();
    randomBtn.remove();
    //check if ship was placed
    if (newCount > startCount && newCount < 5) {
      // if so add deployed class ship btn
      var targetBtn = document.getElementById("btn-".concat(shipType));
      targetBtn.classList.add('deployedShip');
    }
    //if all ships place display computer
    if (player1.gb.ships.length === 5) {
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.displayComputer)();
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeComputer)(computer);
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    }
  });
});

//listen for player turn
var playerContainer = document.getElementById('container-p1');
var compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', function () {
  compContainer.addEventListener('click', function () {
    console.log('player moves');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(computer, 'Carrier', 'C', 'com');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(computer, 'Battleship', 'B', 'com');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(computer, 'Destroyer', 'D', 'com');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(computer, 'Submarine', 'S', 'com');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(computer, 'Patrol Boat', 'P', 'com');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
  });
});
//Listen for computer board click by player, handler is computer attack
compContainer.addEventListener('click', function RandomMove() {
  setTimeout(function RandomMove() {
    //Level easy - computer always randomly attacks player 1
    if (level.value === 'easy') {
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomAttack)(player1);
      player1.gb.receiveAttack(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomCol);
    }
    ;
    //Level medium - computer will check adjacent spaces
    if (level.value === 'medium') {
      console.log("randomRow ".concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomRow, " randomCol ").concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomCol));
      console.log("savedRow ".concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.savedRow, " savedCol ").concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.savedCol, " "));
      console.log("targetdRow ".concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.targetRow, " targetCol ").concat(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.targetCol, " "));
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.targetedAttack)(player1);
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.lastHit)(player1, _modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomCol);
      player1.gb.receiveAttack(_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.randomCol);
    }
    ;
    //print player ship stats
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, 'Carrier', 'C', 'p1');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, 'Battleship', 'B', 'p1');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, 'Destroyer', 'D', 'p1');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, 'Submarine', 'S', 'p1');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printStats)(player1, 'Patrol Boat', 'P', 'p1');
    //print player boad
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.playerShipOverlay)();
    //Displays form pacement upon btn press
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.shipBtnHandler)('.p1', 'p1');
    console.log('computer moves');
  }, 1000);
});
(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.shipBtnHandler)();

//console.log(computer.gb.ships);

/*
console.log(boardTest[0][0].value);
console.log(boardTest[3][4].c);
console.log(boardTest[3][4].r);
*/
//attacks
/*
player1.gb.receiveAttack(0, 1);
player1.gb.receiveAttack(1, 0);

computer.gb.receiveAttack(0, 0);
computer.gb.receiveAttack(6, 4);

//how to print ships
console.log(boardTest);
console.log(player1.gb.ships);
console.log(player1.gb.ships[0]);
*/

/***/ }),

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastHit: () => (/* binding */ lastHit),
/* harmony export */   placeComputer: () => (/* binding */ placeComputer),
/* harmony export */   placeShip: () => (/* binding */ placeShip),
/* harmony export */   randomAttack: () => (/* binding */ randomAttack),
/* harmony export */   randomCol: () => (/* binding */ randomCol),
/* harmony export */   randomRow: () => (/* binding */ randomRow),
/* harmony export */   savedCol: () => (/* binding */ savedCol),
/* harmony export */   savedRow: () => (/* binding */ savedRow),
/* harmony export */   storedHit: () => (/* binding */ storedHit),
/* harmony export */   targetCol: () => (/* binding */ targetCol),
/* harmony export */   targetRow: () => (/* binding */ targetRow),
/* harmony export */   targetedAttack: () => (/* binding */ targetedAttack)
/* harmony export */ });
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");





//Utility function, random row/col
var randomNum = {
  get value() {
    return Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_3__.boardSize);
  }
};
//Utility function, random direction
function randomDir() {
  var value = Math.floor(Math.random() * 4);
  if (value === 0) {
    return 'Up';
  }
  if (value === 1) {
    return 'Down';
  }
  if (value === 2) {
    return 'Right';
  }
  if (value === 3) {
    return 'Left';
  }
}
;

//Randomly place ship
function placeShip(ship, cpu) {
  function tryAgain() {
    var length = cpu.gb.ships.length;
    cpu.gb.placeNewShip(ship, randomNum.value, randomNum.value, randomDir());
    //if the ship fails to place on the board run again
    if (cpu.gb.ships.length === length) {
      tryAgain();
    }
    ;
  }
  tryAgain();
}
;
function placeComputer(user) {
  placeShip('Carrier', user);
  placeShip('Battleship', user);
  placeShip('Destroyer', user);
  placeShip('Submarine', user);
  placeShip('Patrol Boat', user);
}
;

//Computer attack random move
var randomRow;
var randomCol;
function randomAttack(user) {
  console.log('randomAttack fn');
  randomRow = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_3__.boardSize);
  randomCol = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_3__.boardSize);
  if (user.gb.checkOpenBoard(randomRow, randomCol) === 'invalid') {
    randomRow = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_3__.boardSize);
    randomCol = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_3__.boardSize);
    randomAttack(user);
  }
  ;
}

//utility function & variables to store last hit
var targetRow = undefined;
var targetCol = undefined;
function lastHit(enemy, row, col) {
  if (enemy.gb.board[row][col].value === 'C' || enemy.gb.board[row][col].value === 'B' || enemy.gb.board[row][col].value === 'D' || enemy.gb.board[row][col].value === 'S' || enemy.gb.board[row][col].value === 'P') {
    console.log(' lasthit fn - store hit');
    targetRow = row;
    targetCol = col;
  } else {
    console.log('lasthit fn - no data for hit');
  }
}
;
var savedRow = undefined;
var savedCol = undefined;
function storedHit(row, col) {
  if (typeof targetRow === 'number') {
    savedRow = row;
    savedCol = col;
    return;
  } else {
    savedRow = undefined;
    savedCol = undefined;
  }
  ;
}
;

//utility fn - if a ship was sunk last turn go to random attack
var lastCount = 0;
function postSunkAtt(enemy) {
  var carSunk = enemy.gb.ships[0].isSunk();
  var batSunk = enemy.gb.ships[1].isSunk();
  var disSunk = enemy.gb.ships[2].isSunk();
  var subSunk = enemy.gb.ships[3].isSunk();
  var patSunk = enemy.gb.ships[4].isSunk();
  var ships = [carSunk, batSunk, disSunk, subSunk, patSunk];
  var countTrue = ships.filter(function (value) {
    return value === true;
  }).length;
  if (lastCount < countTrue) {
    ++lastCount;
    targetCol = undefined;
    targetRow = undefined;
    savedRow = undefined;
    savedCol = undefined;
    randomAttack(enemy);
  }
  ;
}
;

//utility fn - check space adjacent to attack for next attack
function adjacent(enemy, row, col) {
  if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid') {
    return ++randomRow;
  }
}
;

//possible adjacent moves from a hit
var rowPlus;
var rowMinus;
var colPlus;
var colMinus;
function targetedAttack(enemy) {
  //first move
  if (randomRow === undefined) {
    return randomAttack(enemy);
  }
  ;
  //check if a ship was sunk last turn
  postSunkAtt(enemy);

  //If last attack was a hit
  if (enemy.gb.board[randomRow][randomCol].value === 'C-HIT' || enemy.gb.board[randomRow][randomCol].value === 'B-HIT' || enemy.gb.board[randomRow][randomCol].value === 'D-HIT' || enemy.gb.board[randomRow][randomCol].value === 'S-HIT' || enemy.gb.board[randomRow][randomCol].value === 'P-HIT') {
    rowPlus = randomRow + 1;
    rowMinus = randomRow - 1;
    colPlus = randomCol + 1;
    colMinus = randomCol - 1;

    //if there is not a saved hit check each of the adjacent spots
    if (savedRow === undefined) {
      if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid') {
        storedHit(targetRow, targetCol);
        console.log('condition 1');
        return ++randomRow;
      }
      ;
      if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid') {
        storedHit(targetRow, targetCol);
        console.log('condition 2');
        return --randomRow;
      }
      ;
      if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid') {
        storedHit(targetRow, targetCol);
        console.log('condition 3');
        return ++randomCol;
      }
      ;
      if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid') {
        storedHit(targetRow, targetCol);
        console.log('condition 4');
        return --randomCol;
      }
      ;
      //if there are two hits check to see if adjacent spot on the co/row is open
    } else {
      var rowVal = Math.abs(randomRow - savedRow);
      var colVal = Math.abs(randomCol - savedCol);
      console.log('stored and random value');
      rowPlus = randomRow + 1;
      rowMinus = randomRow - 1;
      colPlus = randomCol + 1;
      colMinus = randomCol - 1;
      if (rowVal > 0) {
        console.log('pick rows');
        if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid') {
          console.log('condition 1b');
          return ++randomRow;
        }
        ;
        if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid') {
          console.log('condition 2b');
          return --randomRow;
        }
        ;
      }
      if (colVal > 0) {
        if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid') {
          console.log('condition 3b');
          return ++randomCol;
        }
        ;
        if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid') {
          console.log('condition 4b');
          return --randomCol;
        }
        ;
      }
    }
  }
  ;

  //if there is a stored hit and last move is a miss rerun adjacent checks
  if (enemy.gb.board[randomRow][randomCol].value === 'X' && typeof targetRow === 'number') {
    console.log('target att - miss, go back to last hit');
    randomRow = targetRow;
    randomCol = targetCol;
    rowPlus = randomRow + 1;
    rowMinus = randomRow - 1;
    colPlus = randomCol + 1;
    colMinus = randomCol - 1;
    if (enemy.gb.checkOpenBoard(rowPlus, randomCol) === 'valid') {
      console.log('condition 1');
      return ++randomRow;
    }
    ;
    if (enemy.gb.checkOpenBoard(rowMinus, randomCol) === 'valid') {
      console.log('condition 2');
      return --randomRow;
    }
    ;
    if (enemy.gb.checkOpenBoard(randomRow, colPlus) === 'valid') {
      console.log('condition 3');
      return ++randomCol;
    }
    ;
    if (enemy.gb.checkOpenBoard(randomRow, colMinus) === 'valid') {
      console.log('condition 4');
      return --randomCol;
    }
  }
  console.log('target att - default random ');
  targetRow = undefined;
  targetCol = undefined;
  randomAttack(enemy);
}
;

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayShips: () => (/* binding */ arrayShips),
/* harmony export */   displayComputer: () => (/* binding */ displayComputer),
/* harmony export */   playerShipOverlay: () => (/* binding */ playerShipOverlay),
/* harmony export */   printBoard: () => (/* binding */ printBoard),
/* harmony export */   printBoardShips: () => (/* binding */ printBoardShips),
/* harmony export */   printStats: () => (/* binding */ printStats),
/* harmony export */   removeShipBtns: () => (/* binding */ removeShipBtns),
/* harmony export */   shipBtnHandler: () => (/* binding */ shipBtnHandler),
/* harmony export */   welcomeFormDOM: () => (/* binding */ welcomeFormDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/modules/gameboard.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



//DOM related functionality for submit on welcome form
function welcomeFormDOM() {
  var welcomeForm = document.getElementById('welcomeForm');
  var startScreen = document.getElementById('startscreen');
  var mainPage = document.getElementById('mainpage');
  //print player name
  var name = document.getElementById('name').value;
  document.getElementById('playerName').textContent = name;

  //remove start screen and welcome form
  welcomeForm.style.display = 'none';
  startScreen.style.display = 'none';
  //reveal the main page
  mainPage.style.display = 'flex';
  mainPage.style.backgroundColor = 'white';
  //mainPage.style.gridTemplateColumns = '1fr 1fr';
}
;
var arrayShips = [];

//print player/ computer gameboard
function printBoard(board, container, player) {
  var gb = document.getElementById(container);
  var shipRow = document.getElementById('shipRow');
  var shipCol = document.getElementById('shipCol');

  //dynamically set the max row/col size on placement form
  shipRow.max = _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize;
  shipCol.max = _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize;

  //dynamically set the grid size
  gb.style.gridTemplateRows = "repeat(".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize, ", 1fr)");
  gb.style.gridTemplateColumns = "repeat(".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize, ", 1fr)");

  //print each cell with values
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
          if (element.textContent === 'C-HIT') {
            element.classList.add('C-HIT');
            element.classList.add(container);
          }
          if (element.textContent === 'B-HIT') {
            element.classList.add('B-HIT');
            element.classList.add(container);
          }
          if (element.textContent === 'D-HIT') {
            element.classList.add('D-HIT');
            element.classList.add(container);
          }
          if (element.textContent === 'S-HIT') {
            element.classList.add('S-HIT');
            element.classList.add(container);
          }
          if (element.textContent === 'P-HIT') {
            element.classList.add('P-HIT');
            element.classList.add(container);
          }
          if (element.textContent === 'X') {
            element.classList.add('miss');
          }
          ;
          if (element.textContent === 'C' || element.textContent === 'B' || element.textContent === 'D' || element.textContent === 'S' || element.textContent === 'P') {
            element.classList.add('boat');
            element.classList.add(container);
            element.classList.add(element.textContent);
          }
          element.dataset.row = cell.r;
          element.dataset.col = cell.c;
          //hover to reveal space dataset
          element.addEventListener('mouseover', function () {
            var row = Number(element.dataset.row);
            var col = Number(element.dataset.col);
            element.textContent = "".concat(row, ", ").concat(col);
            element.style.color = 'white';
          });
          //hover out
          element.addEventListener('mouseout', function () {
            var row = element.dataset.row;
            var col = element.dataset.col;
            element.textContent = cell.value;
            element.style.color = 'transparent';
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
  arrayShips = player.ships;
}

//Creates overlay of ship onto board
function printBoardShips(prefix, targetBoard) {
  //call min/max outside the possibe range
  var minGridRow = 1000;
  var maxGridRow = -1000;
  var minGridCol = 1000;
  var maxGridCol = -1000;

  //return the max/min row/col for ship location
  var targets = document.querySelectorAll(".".concat(targetBoard, ".").concat(prefix, ", .").concat(targetBoard, ".").concat(prefix, "-HIT"));
  var shipLength = targets.length;
  console.log(targets);
  //!!CHANGE class name- remove ! and change to 'Hit')
  targets.forEach(function (target) {
    var currentGridRow = target.dataset.row;
    if (currentGridRow < minGridRow) {
      minGridRow = parseInt(currentGridRow);
    }
    if (currentGridRow > maxGridRow) {
      maxGridRow = parseInt(currentGridRow);
    }
    var currentGridCol = target.dataset.col;
    if (currentGridCol < minGridCol) {
      minGridCol = parseInt(currentGridCol);
    }
    if (currentGridCol > maxGridCol) {
      maxGridCol = parseInt(currentGridCol);
    }
  });
  var container = document.getElementById(targetBoard);
  var shipOverlay = document.createElement('div');
  shipOverlay.id = "overlay-".concat(prefix);

  //if no values do not overlay - used for player placement
  if (minGridRow === 1000) {
    return;
  }
  ;
  //Add 1 to all for conversion from squares to grid lines
  //Add 2 to any single length orientation
  //vertical
  if (minGridCol === maxGridCol) {
    var rowEnd = minGridRow + shipLength + 1;
    shipOverlay.classList.add("vert-overlay-".concat(prefix));
    shipOverlay.style.gridColumnStart = minGridCol + 1;
    shipOverlay.style.gridColumnEnd = minGridCol + 2;
    shipOverlay.style.gridRowStart = minGridRow + 1;
    shipOverlay.style.gridRowEnd = rowEnd;
    //horizontal
  } else {
    var colEnd = minGridCol + shipLength + 1;
    shipOverlay.classList.add("horz-overlay-".concat(prefix));
    shipOverlay.style.gridRowStart = minGridRow + 1;
    shipOverlay.style.gridRowEnd = minGridRow + 2;
    shipOverlay.style.gridColumnStart = minGridCol + 1;
    shipOverlay.style.gridColumnEnd = colEnd;
  }
  container.appendChild(shipOverlay);
}
;
//function to overlay all player ships
function playerShipOverlay() {
  printBoardShips('P', 'container-p1');
  printBoardShips('B', 'container-p1');
  printBoardShips('D', 'container-p1');
  printBoardShips('S', 'container-p1');
  printBoardShips('C', 'container-p1');
}

//Ship buttons hander to display form with correct title
function shipBtnHandler() {
  var shipButtons = document.querySelectorAll('.p1');
  var placement = document.getElementById('placement');
  var formTitle = document.getElementById('formTitle');
  shipButtons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      placement.style.display = 'grid';
      var dataShipType = event.target.getAttribute('data-ship-type');
      formTitle.innerText = dataShipType;

      //if ship has been placed
      if (arrayShips.some(function (ship) {
        return ship.type === dataShipType;
      })) {
        placement.style.display = 'none';
      }
    });
  });
}

//if all ships placed remove buttons
function removeShipBtns() {
  if (arrayShips.length === 5) {
    var shipBtns = document.getElementById('shipButtons');
    shipBtns.remove();
  }
}
//display computer console/board
function displayComputer() {
  if (arrayShips.length === 5) {
    var computerDisplay = document.getElementById('comConsole');
    computerDisplay.style.display = 'grid';
  }
}

//print stats to each ships stat div (life/ damage)
function printStats(player, ship, suffix, prefix) {
  //ship data
  var fleet = player.gb.ships;
  var thisShip = fleet.find(function (target) {
    return target.type === ship;
  });
  console.log(fleet);
  var length = thisShip.length;
  var damage = thisShip.damage;
  //containers for life-damage
  var damDiv = document.createElement('div');
  var statsDiv = document.getElementById(prefix + '-stat-' + suffix);
  //prevent reprinting prior data
  statsDiv.innerHTML = "";
  //print damage and life
  for (var j = 0; j < damage; j++) {
    var damaged = document.createElement('div');
    damaged.classList.add('damaged');
    statsDiv.appendChild(damaged);
  }
  for (var i = 0; i < length - damage; i++) {
    var life = document.createElement('div');
    life.classList.add('life');
    statsDiv.appendChild(life);
  }
  if (length === damage) {
    var thisID = document.getElementById(prefix + '-' + suffix);
    console.log(thisID);
    thisID.classList.add('sunk');
  }
}
;

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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
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


//import { shipsDOM } from '../modules/dom.js'

//to access square on board us me board.board[r][c]

//utility: converts column letter to number for lookUp
function colConvert(letter) {
  var alphabet = _toConsumableArray(Array(_index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize)).map(function (_, i) {
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
    key: "checkOpenBoard",
    value: function checkOpenBoard(row, col) {
      if (row < 0 || row >= _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize) {
        return 'invalid';
      }
      if (col < 0 || col >= _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize) {
        return 'invalid';
      }
      if (this.board[row][col].value === 'X' || this.board[row][col].value === 'C-HIT' || this.board[row][col].value === 'B-HIT' || this.board[row][col].value === 'D-HIT' || this.board[row][col].value === 'S-HIT' || this.board[row][col].value === 'P-HIT') {
        return 'invalid';
      } else {
        return 'valid';
      }
    }
  }, {
    key: "placeNewShip",
    value: function placeNewShip(type, r, c, dir) {
      var row = r;
      var col = c;
      var newShip = new _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship(type);
      if (dir === 'Down') {
        //check if ship on board
        try {
          if (r - 1 + newShip.length > _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize - 1) {
            throw new Error("You've gone off course! Redeploy ship.");
          }
        } catch (error) {
          console.error('The token is placed off the board:', error.message);
          return;
        }
        //check if spaces are available
        try {
          for (var i = 0; row + i < row + newShip.length; i++) {
            if (this.board[row++][c].value !== 0) {
              throw new Error('Near collison! Move that ship.');
            }
          }
        } catch (error) {
          console.error('Spaces are occupied:', error.message);
          return;
        }
        //if no errors place ship
        for (var _i = 0; r + _i < r + newShip.length; _i++) {
          this.board[r++][c].value = newShip.id;
        }
        this.ships.push(newShip);
      }
      if (dir === 'Up') {
        //check if ship on board
        try {
          if (r - (newShip.length - 1) < 0) {
            throw new Error("You've gone off course! Redeploy ship.");
          }
        } catch (error) {
          console.error('The token is placed off the board:', error.message);
          return;
        }
        //check if spaces are available
        try {
          for (var _i2 = 0; row - _i2 > row - newShip.length; _i2++) {
            if (this.board[row--][c].value !== 0) {
              throw new Error('Near collison! Move that ship');
            }
          }
        } catch (error) {
          console.error('Spaces are occupied:', error.message);
          return;
        }
        //if no errors place ship
        for (var _i3 = 0; r - _i3 > r - newShip.length; _i3++) {
          this.board[r--][c].value = newShip.id;
        }
        this.ships.push(newShip);
      }
      if (dir === 'Right') {
        //check if ship on board
        try {
          if (c - 1 + newShip.length > _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize - 1) {
            throw new Error("You've gone off course! Redeploy ship.");
          }
        } catch (error) {
          return console.error('The token is placed off the board:', error.message);
        }
        //check if spaces are available
        try {
          for (var _i4 = 0; col + _i4 < col + newShip.length; _i4++) {
            if (this.board[r][col++].value !== 0) {
              throw new Error('Near collison! Move that ship');
            }
          }
        } catch (error) {
          console.error('Spaces are occupied:', error.message);
          return;
        }
        //if no errors place ship
        for (var _i5 = 0; c + _i5 < c + newShip.length; _i5++) {
          this.board[r][c++].value = newShip.id;
        }
        this.ships.push(newShip);
      }
      ;
      if (dir === 'Left') {
        //check if ship on board
        try {
          if (c - (newShip.length + 1) < 0) {
            throw new Error("You've gone off course! Redeploy ship.");
          }
        } catch (error) {
          console.error('The token is placed off the board:', error.message);
          return;
        }
        //check if spaces are available
        try {
          for (var _i6 = 0; col - _i6 > col - newShip.length; _i6++) {
            if (this.board[r][col--].value !== 0) {
              throw new Error('Near collison! Move that ship');
            }
          }
        } catch (error) {
          console.error('Spaces are occupied:', error.message);
          return;
        }
        //if no errors place ship
        for (var _i7 = 0; c - _i7 > c - newShip.length; _i7++) {
          this.board[r][c--].value = newShip.id;
        }
        this.ships.push(newShip);
      }
      ;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(r, c) {
      var fleet = this.ships;
      var thisShip;
      //if already miss record another miss
      if (this.board[r][c].value === 'X') {
        return this.board[r][c].value = 'X';
      }
      //if water record miss
      if (this.board[r][c].value === 0) {
        return this.board[r][c].value = 'X';
      }
      //if hit carrier record hit
      if (this.board[r][c].value === 'C') {
        thisShip = fleet.find(function (target) {
          return target.id === 'C';
        });
        var index = fleet.indexOf(thisShip);
        this.ships[index].hit();
      }
      //if hit batteship record hit
      if (this.board[r][c].value === 'B') {
        thisShip = fleet.find(function (target) {
          return target.id === 'B';
        });
        var _index = fleet.indexOf(thisShip);
        this.ships[_index].hit();
      }
      //if hit destoryer record hit
      if (this.board[r][c].value === 'D') {
        thisShip = fleet.find(function (target) {
          return target.id === 'D';
        });
        var _index2 = fleet.indexOf(thisShip);
        this.ships[_index2].hit();
      }
      //if hit submarine record hit
      if (this.board[r][c].value === 'S') {
        thisShip = fleet.find(function (target) {
          return target.id === 'S';
        });
        var _index3 = fleet.indexOf(thisShip);
        this.ships[_index3].hit();
      }
      //if hit patrol boat record hit
      if (this.board[r][c].value === 'P') {
        thisShip = fleet.find(function (target) {
          return target.id === 'P';
        });
        var _index4 = fleet.indexOf(thisShip);
        this.ships[_index4].hit();
      }
      //record hit to board
      var shipHit = this.board[r][c].value;
      return this.board[r][c].value = "".concat(shipHit, "-HIT");
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
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
  this.gb = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(_index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize, _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize);
});
var compPlayer = /*#__PURE__*/_createClass(function compPlayer(name, level) {
  _classCallCheck(this, compPlayer);
  this.name = name;
  this.level = level;
  this.gb = new _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(_index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize, _index_js__WEBPACK_IMPORTED_MODULE_1__.boardSize);
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
    if (this.type === 'Carrier') {
      this.length = 5;
      this.id = 'C';
    }
    ;
    if (this.type === 'Battleship') {
      this.length = 4;
      this.id = 'B';
    }
    ;
    if (this.type === 'Destroyer') {
      this.length = 3;
      this.id = 'D';
    }
    ;
    if (this.type === 'Submarine') {
      this.length = 3;
      this.id = 'S';
    }
    ;
    if (this.type === 'Patrol Boat') {
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
      } else {
        return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksS0FBSyxXQUFXLEVBQUM7TUFDMUIsSUFBSSxDQUFDdkgsTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUN5RyxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0lBRUQsSUFBSSxJQUFJLENBQUNjLElBQUksS0FBSyxXQUFXLEVBQUM7TUFDMUIsSUFBSSxDQUFDdkgsTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUN5RyxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0lBRUQsSUFBSSxJQUFJLENBQUNjLElBQUksS0FBSyxhQUFhLEVBQUM7TUFDNUIsSUFBSSxDQUFDdkgsTUFBTSxHQUFHLENBQUM7TUFDZixJQUFJLENBQUN5RyxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0VBQ0w7RUFBQyxPQUFBZ0QsWUFBQSxDQUFBbk0sSUFBQTtJQUFBb00sR0FBQTtJQUFBcEssS0FBQSxFQUVELFNBQUErSyxJQUFBLEVBQUs7TUFDRCxJQUFJLENBQUN2QyxNQUFNLEVBQUU7SUFDakI7RUFBQztJQUFBNEIsR0FBQTtJQUFBcEssS0FBQSxFQUNELFNBQUFnRCxPQUFBLEVBQVE7TUFDSixJQUFJLElBQUksQ0FBQ3dGLE1BQU0sS0FBSyxJQUFJLENBQUM5SCxNQUFNLEVBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM0SyxJQUFJLEdBQUcsSUFBSTtNQUMzQixDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUs7TUFBQztJQUMxQjtFQUFDO0FBQUE7QUFDSjs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcz84YmExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3M/NTZhZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3M/MGZkYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3M/MjE0NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQW5jaG9yMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGF0cm9sLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypTaGlwIHBhY2VtZW50IGJ1dHRvbnMgKi9cbi5wMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDhlbTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucDEuZGVwbG95ZWRTaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBib2xkIGJsYWNrO1xufVxuI3JhbmRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTI4LCA5MCk7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB3aWR0aDogMTRlbTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucDE6aG92ZXIsICNyYW5kb206aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuXG59XG5cblxuI2RlcGxveWVkLXAxLFxuI2RlcGxveWVkLWNvbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jc2hpcERhbWFnZWQsXG4jc2hpcERhbWFnZS1jb20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXG4vKk91dGVybW9zdCBzaGlwIHN0YXQgZGl2cyovXG4ucDFTaGlwLCAuY29tU2hpcCB7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgbWFyZ2luOiAxLjVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcbn1cbi5wMVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XG59XG4uY29tU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcbn1cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5saWZlIHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuLmRhbWFnZWQge1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgd2lkdGg6IDIuOGVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pXG59XG4uc3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjIsIDIyKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG4vKkRpdiBjb250YWlucyBsaWZlL2RhbWFnZSBmb3IgZWFjaCBzaGlwKi9cbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi8qT3V0ZXIgbW9zdCBkaXYgZm9yIHNoaXAgc3RhdHMqL1xuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuXG4jcDEtQiwgI2NvbS1CIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUywgI2NvbS1TIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUCwgI2NvbS1QIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5QjtBQUN6QjtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBLHVFQUF1RTtBQUN2RSwyQkFBMkI7QUFDM0I7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIseURBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdCQUF3QjtBQUM1QjtBQUNBLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQSxnQ0FBZ0M7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseURBQThDO0lBQzlDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlEQUFpRDtJQUNqRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUE2QztJQUM3QyxvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypTaGlwIHBhY2VtZW50IGJ1dHRvbnMgKi9cXG4ucDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wMS5kZXBsb3llZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IGJvbGQgYmxhY2s7XFxufVxcbiNyYW5kb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxMjgsIDkwKTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgd2lkdGg6IDE0ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wMTpob3ZlciwgI3JhbmRvbTpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG5cXG59XFxuXFxuXFxuI2RlcGxveWVkLXAxLFxcbiNkZXBsb3llZC1jb20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2hpcERhbWFnZWQsXFxuI3NoaXBEYW1hZ2UtY29tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmbGV4LXNocmluazogMTtcXG4gICAgZmxleC1iYXNpczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXFxuLypPdXRlcm1vc3Qgc2hpcCBzdGF0IGRpdnMqL1xcbi5wMVNoaXAsIC5jb21TaGlwIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbjogMS41ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcXG59XFxuLnAxU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XFxufVxcbi5jb21TaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcXG59XFxuLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmxpZmUge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvQW5jaG9yMi5wbmcpO1xcbn1cXG4uZGFtYWdlZCB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hpdC5wbmcnKVxcbn1cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIyLCAyMik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuLypEaXYgY29udGFpbnMgbGlmZS9kYW1hZ2UgZm9yIGVhY2ggc2hpcCovXFxuI3AxLXN0YXQtQywgI3AxLXN0YXQtQiwgI3AxLXN0YXQtRCwgI3AxLXN0YXQtUywgI3AxLXN0YXQtUCwgI2NvbS1zdGF0LUMsICNjb20tc3RhdC1CLCAjY29tLXN0YXQtRCwgI2NvbS1zdGF0LVMsICNjb20tc3RhdC1QIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qT3V0ZXIgbW9zdCBkaXYgZm9yIHNoaXAgc3RhdHMqL1xcbiNwMS1DLCAjcDEtQiwgI3AxLVMsICNwMS1ELCAjcDEtUCwgI2NvbS1DLCAjY29tLUIsICNjb20tRCwgI2NvbS1TLCAjY29tLVAgICB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4jcDEtQywgI2NvbS1DIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvY2Fycmllci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3NSU7XFxufVxcblxcbiNwMS1CLCAjY29tLUIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1TLCAjY29tLVMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9zdWJtYXJpbmUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLUQsICNjb20tRCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtUCwgI2NvbS1QIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcGF0cm9sLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvT2NlYW4tQm9hcmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21pc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N1Ym1hcmluZTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1BhdHJvbDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhcnJpZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuI2NvbUNvbnNvbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xufVxuI3AxQ29uc29sZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgcm93LWdhcDogNXg7XG59XG5cbiNjb250YWluZXItcDEsXG4jY29udGFpbmVyLXAyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGhlaWdodDo4NXZoO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jc2hpcEJ1dHRvbnMge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcbiNjb250YWluZXItcDEgLmhpdCxcbiNjb250YWluZXItcDIgLmhpdCxcbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0LFxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4jY29udGFpbmVyLXAxIC5ib2F0LFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNjb250YWluZXItcDEgLm1pc3MsXG4jY29udGFpbmVyLXAyIC5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRhaW5lci1wMSAuQy1ISVQsXG4jY29udGFpbmVyLXAxIC5CLUhJVCxcbiNjb250YWluZXItcDEgLkQtSElULFxuI2NvbnRhaW5lci1wMSAuUy1ISVQsXG4jY29udGFpbmVyLXAxIC5QLUhJVCxcbiNjb250YWluZXItcDIgLkMtSElULFxuI2NvbnRhaW5lci1wMiAuQi1ISVQsXG4jY29udGFpbmVyLXAyIC5ELUhJVCxcbiNjb250YWluZXItcDIgLlMtSElULFxuI2NvbnRhaW5lci1wMiAuUC1ISVQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4vKlNoaXAgaWNvbnMgb24gYm9hcmQqL1xuI292ZXJsYXktQiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUIge1xuICAgIGhlaWdodDogMTMwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktRCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktUyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LVMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4jb3ZlcmxheS1QIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4vKlxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cbiovXG5cbiNvdmVybGF5LUMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhvcnotb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEyMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBcbn1cblxuLnZlcnQtb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5REFBa0Q7SUFDbEQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7O0lBUUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5REFBMkM7SUFDM0Msc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7O0lBVUkseURBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7OztBQUdBLHNCQUFzQjtBQUN0QjtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix5REFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7Ozs7OztDQVVDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbURBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuI2NvbUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcbiNwMUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIHJvdy1nYXA6IDV4O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxLFxcbiNjb250YWluZXItcDIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBoZWlnaHQ6ODV2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9PY2Vhbi1Cb2FyZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI3NoaXBCdXR0b25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXItcDEgLmNlbGwsXFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcXG4jY29udGFpbmVyLXAxIC5oaXQsXFxuI2NvbnRhaW5lci1wMiAuaGl0LFxcbiNjb250YWluZXItcDEgLmJvYXQsXFxuI2NvbnRhaW5lci1wMiAuYm9hdCxcXG4jY29udGFpbmVyLXAxIC5taXNzLFxcbiNjb250YWluZXItcDIgLm1pc3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbiNjb250YWluZXItcDEgLmNlbGwsXFxuI2NvbnRhaW5lci1wMiAuY2VsbCB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5taXNzLFxcbiNjb250YWluZXItcDIgLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9taXNzLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5DLUhJVCxcXG4jY29udGFpbmVyLXAxIC5CLUhJVCxcXG4jY29udGFpbmVyLXAxIC5ELUhJVCxcXG4jY29udGFpbmVyLXAxIC5TLUhJVCxcXG4jY29udGFpbmVyLXAxIC5QLUhJVCxcXG4jY29udGFpbmVyLXAyIC5DLUhJVCxcXG4jY29udGFpbmVyLXAyIC5CLUhJVCxcXG4jY29udGFpbmVyLXAyIC5ELUhJVCxcXG4jY29udGFpbmVyLXAyIC5TLUhJVCxcXG4jY29udGFpbmVyLXAyIC5QLUhJVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hpdC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5cXG4vKlNoaXAgaWNvbnMgb24gYm9hcmQqL1xcbiNvdmVybGF5LUIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0JhdHRsZXNoaXAyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1CIHtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1CIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4jb3ZlcmxheS1EIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9EZXN0cm95ZXIyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1EIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4udmVydC1vdmVybGF5LUQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbiNvdmVybGF5LVMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3N1Ym1hcmluZTIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LVMge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbiNvdmVybGF5LVAge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL1BhdHJvbDIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4vKlxcbi5ob3J6LW92ZXJsYXktUCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1QIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG4qL1xcblxcbiNvdmVybGF5LUMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9jYXJyaWVyMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5ob3J6LW92ZXJsYXktQyB7XFxuICAgIGhlaWdodDogMTIwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udmVydC1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEwMCVcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcGxhY2VtZW50IHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufVxuXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcblxufVxuXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xuICAgIHdpZHRoOiA1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cblxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDNlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jcGxhY2VtZW50ICNwbGFjZUJ0biB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jZGVwbG95ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGxhY2VtZW50IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cXG5cXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3BsYWNlbWVudCAjcGxhY2VCdG4ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jZGVwbG95ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zaGlwbWFpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXdlbGNvbWVUZXh0Q29sb3I6IHJnYigxMTksIDg2LCAyNik7XG4gICAgLS13ZWxjb21lRm9udEZhbTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLS1idG5JbnB1dEJvcmRlcjogLjJlbSBzb2xpZCB3aGl0ZTtcbn1cbiNzdGFydHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc3RhcnRzY3JlZW4gI3dlbGNvbWUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwdmg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiN3ZWxjb21lVGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMy44ZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI3dlbGNvbWVQaWMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDV2aDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiN3ZWxjb21lRm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBnYXA6IDFlbTtcblxufVxuI3dlbGNvbWVGb3JtIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xuXG59XG4jd2VsY29tZUZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xufVxuXG4jc3RhcnRCdG4ge1xuICAgIGhlaWdodDogNXZoO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtEQUFrRDtJQUNsRCxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5REFBNkM7SUFDN0MsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxRQUFROztBQUVaO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1DQUFtQzs7QUFFdkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXdlbGNvbWVUZXh0Q29sb3I6IHJnYigxMTksIDg2LCAyNik7XFxuICAgIC0td2VsY29tZUZvbnRGYW06J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAtLWJ0bklucHV0Qm9yZGVyOiAuMmVtIHNvbGlkIHdoaXRlO1xcbn1cXG4jc3RhcnRzY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzdGFydHNjcmVlbiAjd2VsY29tZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0MHZoO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuI3dlbGNvbWVUaXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMy44ZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuI3dlbGNvbWVQaWMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvc2hpcG1haW4ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiN3ZWxjb21lRm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcXG4gICAgZ2FwOiAxZW07XFxuXFxufVxcbiN3ZWxjb21lRm9ybSBzZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcXG5cXG59XFxuI3dlbGNvbWVGb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XFxufVxcblxcbiNzdGFydEJ0biB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVib2FyZCwgIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcydcbmltcG9ydCB7IHdlbGNvbWVGb3JtLCBwcmludEJvYXJkLCB3ZWxjb21lRm9ybURPTSwgZGlzcGxheUNvbXB1dGVyLCBzaGlwQnRuSGFuZGxlciwgcmVtb3ZlU2hpcEJ0bnMsIHByaW50U2hpcFN0YXRzICwgcHJpbnRTdGF0cywgcGxheWVyU2hpcE92ZXJsYXkgfSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0IHsgcGxhY2VDb21wdXRlciwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbUF0dGFjaywgdGFyZ2V0ZWRBdHRhY2ssIGxhc3RIaXQsIHN0b3JlZEhpdCAsIHRhcmdldENvbCwgdGFyZ2V0Um93LCBzYXZlZFJvdywgc2F2ZWRDb2wgfSBmcm9tICcuL21vZHVsZXMvY29tcHV0ZXIuanMnXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcyc7XG5cblxuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBjb21wdXRlcjtcblxuLy93ZWxjb21lIGZvcm1cbmV4cG9ydCBsZXQgYm9hcmRTaXplO1xuY29uc3QgbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcblxuXG4oZnVuY3Rpb24gd2VsY29tZUZvcm0gKCl7XG4gICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICB3ZWxjb21lRm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYm9hcmRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS52YWx1ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgcGxheWVyc1xuICAgICAgICAgICAgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcignQW5kcmV3Jyk7XG4gICAgICAgICAgICBjb21wdXRlciA9IG5ldyBjb21wUGxheWVyKCdjb21wdXRlcicsICdlYXN5Jyk7XG4gICAgICAgICAgICAvL3BsYWNlIGNvbXB1dGVyIHNoaXBzXG4gICAgICAgICAgICAvL3BsYWNlQ29tcHV0ZXIoY29tcHV0ZXIpO1xuICAgICAgICAgICAgLy9wcmludCBib2FyZHNcbiAgICAgICAgICAgIC8vcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICAgICAgd2VsY29tZUZvcm1ET00oKTtcbiAgICB9KVxufSkoKTtcblxuXG4vL3BsYXllciBwbGFjZSBhbGwgcGxheWVyIHNoaXBzIHJhbmRvbWx5IG9uIGJ1dHRvbiBwdXNoXG4oZnVuY3Rpb24gcmFuZG9tU2V0UGxheWVyICgpe1xuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwbGFjZUNvbXB1dGVyKHBsYXllcjEpO1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgLy9yZW1vdmUgYWxsIGJ1dHRvbnNcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMgKCk7XG4gICAgICAgIC8vcGxhY2UgYW5kIHByaW50IGNvbXB1dGVyIGJvYXJkIGFuZCBzaGlwc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdtYWluUGFnZScpO1xuICAgICAgICBkaXNwbGF5Q29tcHV0ZXIoKTtcbiAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgfSlcblxufSkoKTtcblxuXG4vL3BsYXllciBwbGFjZSBzaGlwcyBvbiBib2FyZCBtYW51YWxseVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50JylcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vc2hpcCBjb3VudCBwcmlvciB0byBwbGFjZW1lbnRcbiAgICAgICAgbGV0IHN0YXJ0Q291bnQgPSBwbGF5ZXIxLmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgLy9zdG9yZSB2YWxlcyBmcm9tIGlucHV0IGZvcm1cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKS52YWx1ZTtcbiAgICAgICAgbGV0IHNoaXBUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcElEID0gc2hpcFR5cGUuc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vcGxhY2Ugc2hpcFxuICAgICAgICBwbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcChzaGlwVHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbik7XG4gICAgICAgIC8vc2hpcCBjb3VudCBhZnRlciBhdHRlbXRwZWQgcGxhY2VtZW50XG4gICAgICAgIGxldCBuZXdDb3VudCA9IHBsYXllcjEuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FyZCwgb3ZlcmxheSwgc2hpcCBzdGF0c1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCBzaGlwVHlwZSwgc2hpcElELCAncDEnKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9ucyBpZiBhbGwgZml2ZSBzaGlwcyBwbGFjZWRcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMoKTtcbiAgICAgICAgcmFuZG9tQnRuLnJlbW92ZSgpXG4gICAgICAgIC8vY2hlY2sgaWYgc2hpcCB3YXMgcGxhY2VkXG4gICAgICAgIGlmKChuZXdDb3VudCA+IHN0YXJ0Q291bnQpICYmIChuZXdDb3VudCA8IDUpKXtcbiAgICAgICAgICAgIC8vIGlmIHNvIGFkZCBkZXBsb3llZCBjbGFzcyBzaGlwIGJ0blxuICAgICAgICAgICAgbGV0IHRhcmdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4tJHtzaGlwVHlwZX1gKTtcbiAgICAgICAgICAgIHRhcmdldEJ0bi5jbGFzc0xpc3QuYWRkKCdkZXBsb3llZFNoaXAnKVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgYWxsIHNoaXBzIHBsYWNlIGRpc3BsYXkgY29tcHV0ZXJcbiAgICAgICAgaWYocGxheWVyMS5nYi5zaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgZGlzcGxheUNvbXB1dGVyKCk7XG4gICAgICAgICAgICBwbGFjZUNvbXB1dGVyKGNvbXB1dGVyKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgIH1cbiAgICB9KX1cbilcblxuLy9saXN0ZW4gZm9yIHBsYXllciB0dXJuXG5sZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xubGV0IGNvbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAyJyk7XG5cbi8vTGlzdGVuIGZvciBwbGF5ZXIgY2xpY2sgb24gY29tcHV0ZXIgYm9hcmQgdG8gbG9nIGF0dGFja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbW92ZXMnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0NhcnJpZXInLCAnQycsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0JhdHRsZXNoaXAnLCAnQicsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0Rlc3Ryb3llcicsICdEJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnU3VibWFyaW5lJywgJ1MnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdQYXRyb2wgQm9hdCcsICdQJywgJ2NvbScpO1xuICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgIH0pXG5cbn1cbik7XG4vL0xpc3RlbiBmb3IgY29tcHV0ZXIgYm9hcmQgY2xpY2sgYnkgcGxheWVyLCBoYW5kbGVyIGlzIGNvbXB1dGVyIGF0dGFja1xuY29tcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCBmdW5jdGlvbiBSYW5kb21Nb3ZlICgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIFJhbmRvbU1vdmUgKCl7XG4gICAgICAgIFxuICAgICAgICAvL0xldmVsIGVhc3kgLSBjb21wdXRlciBhbHdheXMgcmFuZG9tbHkgYXR0YWNrcyBwbGF5ZXIgMVxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdlYXN5Jyl7XG4gICAgICAgICAgICByYW5kb21BdHRhY2socGxheWVyMSk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL0xldmVsIG1lZGl1bSAtIGNvbXB1dGVyIHdpbGwgY2hlY2sgYWRqYWNlbnQgc3BhY2VzXG4gICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHJhbmRvbVJvdyAke3JhbmRvbVJvd30gcmFuZG9tQ29sICR7cmFuZG9tQ29sfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWRSb3cgJHtzYXZlZFJvd30gc2F2ZWRDb2wgJHtzYXZlZENvbH0gYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0YXJnZXRkUm93ICR7dGFyZ2V0Um93fSB0YXJnZXRDb2wgJHt0YXJnZXRDb2x9IGApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldGVkQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgbGFzdEhpdChwbGF5ZXIxLCByYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL3ByaW50IHBsYXllciBzaGlwIHN0YXRzXG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0NhcnJpZXInLCAnQycsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdCYXR0bGVzaGlwJywgJ0InLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnRGVzdHJveWVyJywgJ0QnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnU3VibWFyaW5lJywgJ1MnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnUGF0cm9sIEJvYXQnLCAnUCcsICdwMScpO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FkXG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpO1xuICAgICAgICAvL0Rpc3BsYXlzIGZvcm0gcGFjZW1lbnQgdXBvbiBidG4gcHJlc3NcbiAgICAgICAgc2hpcEJ0bkhhbmRsZXIoJy5wMScsICdwMScpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyIG1vdmVzJyk7XG4gICAgfSwgMTAwMCk7XG59KTtcblxuc2hpcEJ0bkhhbmRsZXIoKTtcblxuLy9jb25zb2xlLmxvZyhjb21wdXRlci5nYi5zaGlwcyk7XG5cbi8qXG5jb25zb2xlLmxvZyhib2FyZFRlc3RbMF1bMF0udmFsdWUpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLmMpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLnIpO1xuKi9cbi8vYXR0YWNrc1xuLypcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygwLCAxKTtcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygxLCAwKTtcblxuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjaygwLCAwKTtcbmNvbXB1dGVyLmdiLnJlY2VpdmVBdHRhY2soNiwgNCk7XG5cbi8vaG93IHRvIHByaW50IHNoaXBzXG5jb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBhcnJheVNoaXBzIH0gZnJvbSAnLi4vbW9kdWxlcy9kb20uanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuLy9VdGlsaXR5IGZ1bmN0aW9uLCByYW5kb20gcm93L2NvbFxuY29uc3QgcmFuZG9tTnVtID0ge1xuICAgIGdldCB2YWx1ZSAoKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgfVxufTtcbi8vVXRpbGl0eSBmdW5jdGlvbiwgcmFuZG9tIGRpcmVjdGlvblxuZnVuY3Rpb24gcmFuZG9tRGlyICgpe1xuICAgIGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBpZiAodmFsdWUgPT09IDApeyByZXR1cm4gJ1VwJyB9IFxuICAgICAgICBpZiAodmFsdWUgPT09IDEpeyByZXR1cm4gJ0Rvd24nIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAyKXsgcmV0dXJuICdSaWdodCcgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDMpeyByZXR1cm4gJ0xlZnQnIH1cbn07XG5cblxuLy9SYW5kb21seSBwbGFjZSBzaGlwXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwIChzaGlwLCBjcHUpIHtcbiAgICBmdW5jdGlvbiB0cnlBZ2FpbiAoKXtcbiAgICAgIGxldCBsZW5ndGggPSBjcHUuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgY3B1LmdiLnBsYWNlTmV3U2hpcChzaGlwLCByYW5kb21OdW0udmFsdWUsIHJhbmRvbU51bS52YWx1ZSwgcmFuZG9tRGlyICgpKTtcbiAgICAgIC8vaWYgdGhlIHNoaXAgZmFpbHMgdG8gcGxhY2Ugb24gdGhlIGJvYXJkIHJ1biBhZ2FpblxuICAgICAgaWYgKGNwdS5nYi5zaGlwcy5sZW5ndGggPT09IGxlbmd0aCl7XG4gICAgICAgICAgdHJ5QWdhaW4oKTtcbiAgICAgIH07XG4gICB9XG4gICB0cnlBZ2FpbigpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXIgKHVzZXIpIHtcbiAgICBwbGFjZVNoaXAgKCdDYXJyaWVyJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnQmF0dGxlc2hpcCcsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ0Rlc3Ryb3llcicsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1N1Ym1hcmluZScsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1BhdHJvbCBCb2F0JywgdXNlcik7XG59O1xuXG4vL0NvbXB1dGVyIGF0dGFjayByYW5kb20gbW92ZVxuZXhwb3J0IGxldCByYW5kb21Sb3c7XG5leHBvcnQgbGV0IHJhbmRvbUNvbDtcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BdHRhY2sgKHVzZXIpe1xuICAgIGNvbnNvbGUubG9nKCdyYW5kb21BdHRhY2sgZm4nKVxuICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICBpZiAodXNlci5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21BdHRhY2sodXNlcik7XG4gICAgfTtcbn1cblxuICAvL3V0aWxpdHkgZnVuY3Rpb24gJiB2YXJpYWJsZXMgdG8gc3RvcmUgbGFzdCBoaXRcbiAgZXhwb3J0IGxldCB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICBleHBvcnQgZnVuY3Rpb24gbGFzdEhpdCAoZW5lbXksIHJvdywgY29sKXtcbiAgICBpZiAoZW5lbXkuZ2IuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQycgfHwgXG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0InIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1AnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBsYXN0aGl0IGZuIC0gc3RvcmUgaGl0Jyk7XG5cbiAgICAgICAgICB0YXJnZXRSb3cgPSByb3c7XG4gICAgICAgICAgdGFyZ2V0Q29sID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0aGl0IGZuIC0gbm8gZGF0YSBmb3IgaGl0Jyl9XG4gIH07XG5cbiAgZXhwb3J0IGxldCBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZEhpdCAocm93LCBjb2wpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFJvdyA9PT0gJ251bWJlcicpe1xuICAgICAgICBzYXZlZFJvdyA9IHJvdztcbiAgICAgICAgc2F2ZWRDb2wgPSBjb2w7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkUm93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIC8vdXRpbGl0eSBmbiAtIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm4gZ28gdG8gcmFuZG9tIGF0dGFja1xuICBsZXQgbGFzdENvdW50ID0gMDtcbiAgZnVuY3Rpb24gcG9zdFN1bmtBdHQgKGVuZW15KSB7XG4gICAgbGV0IGNhclN1bmsgPSBlbmVteS5nYi5zaGlwc1swXS5pc1N1bmsoKTtcbiAgICBsZXQgYmF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzFdLmlzU3VuaygpO1xuICAgIGxldCBkaXNTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgbGV0IHN1YlN1bmsgPSBlbmVteS5nYi5zaGlwc1szXS5pc1N1bmsoKTtcbiAgICBsZXQgcGF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzRdLmlzU3VuaygpO1xuICAgIGxldCBzaGlwcyA9IFtjYXJTdW5rLCBiYXRTdW5rLCBkaXNTdW5rLCBzdWJTdW5rLCBwYXRTdW5rXTtcbiAgICBsZXQgY291bnRUcnVlID0gc2hpcHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGhcblxuICAgIGlmIChsYXN0Q291bnQgPCBjb3VudFRydWUpIHsgXG4gICAgICAgICsrbGFzdENvdW50XG4gICAgICAgIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJhbmRvbUF0dGFjayAoZW5lbXkpO1xuICAgIH07XG59O1xuXG4vL3V0aWxpdHkgZm4gLSBjaGVjayBzcGFjZSBhZGphY2VudCB0byBhdHRhY2sgZm9yIG5leHQgYXR0YWNrXG5mdW5jdGlvbiBhZGphY2VudCAoZW5lbXksIHJvdywgY29sKSB7XG4gICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgfVxufTtcblxuICAvL3Bvc3NpYmxlIGFkamFjZW50IG1vdmVzIGZyb20gYSBoaXRcbiAgbGV0IHJvd1BsdXM7XG4gIGxldCByb3dNaW51cztcbiAgbGV0IGNvbFBsdXM7XG4gIGxldCBjb2xNaW51cztcblxuICBleHBvcnQgZnVuY3Rpb24gdGFyZ2V0ZWRBdHRhY2sgKGVuZW15KXtcbiAgIFxuICAgIC8vZmlyc3QgbW92ZVxuICAgIGlmIChyYW5kb21Sb3cgID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayAoZW5lbXkpICBcbiAgICB9O1xuICAgIC8vY2hlY2sgaWYgYSBzaGlwIHdhcyBzdW5rIGxhc3QgdHVyblxuICAgIHBvc3RTdW5rQXR0KGVuZW15KTtcblxuICAgIC8vSWYgbGFzdCBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICApIHtcbiAgICAgICAgXG4gICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgcm93TWludXMgPSByYW5kb21Sb3cgLTE7XG4gICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgIFxuICAgICAgICAvL2lmIHRoZXJlIGlzIG5vdCBhIHNhdmVkIGhpdCBjaGVjayBlYWNoIG9mIHRoZSBhZGphY2VudCBzcG90c1xuICAgICAgICBpZiAoc2F2ZWRSb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgIHN0b3JlZEhpdCh0YXJnZXRSb3csIHRhcmdldENvbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xQbHVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgIH07XG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIHR3byBoaXRzIGNoZWNrIHRvIHNlZSBpZiBhZGphY2VudCBzcG90IG9uIHRoZSBjby9yb3cgaXMgb3BlblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcm93VmFsID0gTWF0aC5hYnMocmFuZG9tUm93IC0gc2F2ZWRSb3cpO1xuICAgICAgICAgICAgbGV0IGNvbFZhbCA9IE1hdGguYWJzKHJhbmRvbUNvbC0gc2F2ZWRDb2wpO1xuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlZCBhbmQgcmFuZG9tIHZhbHVlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3dWYWwgPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGljayByb3dzJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDFiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMmInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sVmFsID4gMCl7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDNiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDRiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL2lmIHRoZXJlIGlzIGEgc3RvcmVkIGhpdCBhbmQgbGFzdCBtb3ZlIGlzIGEgbWlzcyByZXJ1biBhZGphY2VudCBjaGVja3NcbiAgICBpZiAoIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdYJykgJiYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQgYXR0IC0gbWlzcywgZ28gYmFjayB0byBsYXN0IGhpdCcpO1xuXG4gICAgICAgICAgICByYW5kb21Sb3cgPSB0YXJnZXRSb3c7XG4gICAgICAgICAgICByYW5kb21Db2wgPSB0YXJnZXRDb2w7XG5cbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIGRlZmF1bHQgcmFuZG9tICcpXG4gIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICByYW5kb21BdHRhY2sgKGVuZW15KTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBjb21wdXRlciwgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbi8vRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eSBmb3Igc3VibWl0IG9uIHdlbGNvbWUgZm9ybVxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVGb3JtRE9NICgpe1xuICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVGb3JtJyk7XG4gICAgY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRzY3JlZW4nKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucGFnZScpOyAgICBcbiAgICAvL3ByaW50IHBsYXllciBuYW1lXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJykudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgLy9yZW1vdmUgc3RhcnQgc2NyZWVuIGFuZCB3ZWxjb21lIGZvcm1cbiAgICB3ZWxjb21lRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9yZXZlYWwgdGhlIG1haW4gcGFnZVxuICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFpblBhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAvL21haW5QYWdlLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyIDFmcic7XG59O1xuXG5leHBvcnQgbGV0IGFycmF5U2hpcHMgPSBbXTtcblxuLy9wcmludCBwbGF5ZXIvIGNvbXB1dGVyIGdhbWVib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmQgKGJvYXJkLCBjb250YWluZXIsIHBsYXllcil7XG4gICAgbGV0IGdiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKTtcbiAgICBsZXQgc2hpcFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG4gICAgbGV0IHNoaXBDb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIG1heCByb3cvY29sIHNpemUgb24gcGxhY2VtZW50IGZvcm1cbiAgICBzaGlwUm93Lm1heCA9IGJvYXJkU2l6ZTtcbiAgICBzaGlwQ29sLm1heCA9IGJvYXJkU2l6ZTtcblxuICAgIC8vZHluYW1pY2FsbHkgc2V0IHRoZSBncmlkIHNpemVcbiAgICBnYi5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2JvYXJkU2l6ZX0sIDFmcilgO1xuICAgIGdiLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XG5cbiAgICAvL3ByaW50IGVhY2ggY2VsbCB3aXRoIHZhbHVlc1xuICAgIGdiLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgcm93IG9mIGJvYXJkKXtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHJvdyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNlbGwudmFsdWU7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQy1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQi1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0ItSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0QtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdELUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUy1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUC1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0MnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0InIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0QnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1MnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1AnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5yb3cgPSBjZWxsLnI7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuY29sID0gY2VsbC5jO1xuICAgICAgICAgICAgLy9ob3ZlciB0byByZXZlYWwgc3BhY2UgZGF0YXNldFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5yb3cpO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LmNvbCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Jvd30sICR7Y29sfWA7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9ob3ZlciBvdXRcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NsaWNrIGJvYXJkIHRvIGF0dGFja1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIC8vcmVjb3JkIGF0dGFja1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHBsYXllciB3aW5zIGdhbWVcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZ2IuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJyYXlTaGlwcyA9IHBsYXllci5zaGlwcztcbn1cblxuLy9DcmVhdGVzIG92ZXJsYXkgb2Ygc2hpcCBvbnRvIGJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCb2FyZFNoaXBzIChwcmVmaXgsIHRhcmdldEJvYXJkKXsgXG4gICAgLy9jYWxsIG1pbi9tYXggb3V0c2lkZSB0aGUgcG9zc2liZSByYW5nZVxuICAgIGxldCBtaW5HcmlkUm93ID0gMTAwMDtcbiAgICBsZXQgbWF4R3JpZFJvdyA9IC0xMDAwO1xuXG4gICAgbGV0IG1pbkdyaWRDb2wgPSAxMDAwO1xuICAgIGxldCBtYXhHcmlkQ29sID0gLTEwMDA7XG4gICAgXG4gICAgLy9yZXR1cm4gdGhlIG1heC9taW4gcm93L2NvbCBmb3Igc2hpcCBsb2NhdGlvblxuICAgIGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0YXJnZXRCb2FyZH0uJHtwcmVmaXh9LCAuJHt0YXJnZXRCb2FyZH0uJHtwcmVmaXh9LUhJVGApO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0YXJnZXRzLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRzKTtcbiAgICAvLyEhQ0hBTkdFIGNsYXNzIG5hbWUtIHJlbW92ZSAhIGFuZCBjaGFuZ2UgdG8gJ0hpdCcpXG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudEdyaWRSb3cgPSB0YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgICAgIGlmIChjdXJyZW50R3JpZFJvdyA8IG1pbkdyaWRSb3cpIHtcbiAgICAgICAgICAgIG1pbkdyaWRSb3cgPSBwYXJzZUludChjdXJyZW50R3JpZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93ID4gbWF4R3JpZFJvdykge1xuICAgICAgICAgICAgbWF4R3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudEdyaWRDb2wgPSB0YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgICAgIGlmIChjdXJyZW50R3JpZENvbCA8IG1pbkdyaWRDb2wpIHtcbiAgICAgICAgICAgIG1pbkdyaWRDb2wgPSBwYXJzZUludChjdXJyZW50R3JpZENvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sID4gbWF4R3JpZENvbCkge1xuICAgICAgICAgICAgbWF4R3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4pXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0Qm9hcmQpO1xubGV0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwT3ZlcmxheS5pZCA9IChgb3ZlcmxheS0ke3ByZWZpeH1gKTtcblxuLy9pZiBubyB2YWx1ZXMgZG8gbm90IG92ZXJsYXkgLSB1c2VkIGZvciBwbGF5ZXIgcGxhY2VtZW50XG5pZiAobWluR3JpZFJvdyA9PT0gMTAwMCl7cmV0dXJufTtcbi8vQWRkIDEgdG8gYWxsIGZvciBjb252ZXJzaW9uIGZyb20gc3F1YXJlcyB0byBncmlkIGxpbmVzXG4vL0FkZCAyIHRvIGFueSBzaW5nbGUgbGVuZ3RoIG9yaWVudGF0aW9uXG4vL3ZlcnRpY2FsXG5pZiAobWluR3JpZENvbCA9PT0gbWF4R3JpZENvbCl7XG4gICAgbGV0IHJvd0VuZCA9IG1pbkdyaWRSb3cgKyBzaGlwTGVuZ3RoICsgMTtcbiAgICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKGB2ZXJ0LW92ZXJsYXktJHtwcmVmaXh9YCk7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gbWluR3JpZENvbCArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IG1pbkdyaWRDb2wgKyAyO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dTdGFydCA9IG1pbkdyaWRSb3cgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSByb3dFbmQ7XG4vL2hvcml6b250YWxcbn0gZWxzZSB7XG4gICAgbGV0IGNvbEVuZCA9ICBtaW5HcmlkQ29sICsgc2hpcExlbmd0aCArIDE7XG4gICAgc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaG9yei1vdmVybGF5LSR7cHJlZml4fWApO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dTdGFydCA9IG1pbkdyaWRSb3cgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSBtaW5HcmlkUm93ICsgMjtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBtaW5HcmlkQ29sICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gY29sRW5kO1xufVxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBPdmVybGF5KTtcbn07XG4vL2Z1bmN0aW9uIHRvIG92ZXJsYXkgYWxsIHBsYXllciBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclNoaXBPdmVybGF5ICgpe1xuICAgIHByaW50Qm9hcmRTaGlwcygnUCcsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0InLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdEJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnUycsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0MnLCAnY29udGFpbmVyLXAxJyk7XG59XG5cblxuLy9TaGlwIGJ1dHRvbnMgaGFuZGVyIHRvIGRpc3BsYXkgZm9ybSB3aXRoIGNvcnJlY3QgdGl0bGVcbmV4cG9ydCBmdW5jdGlvbiBzaGlwQnRuSGFuZGxlciAoKXtcbiAgICBjb25zdCBzaGlwQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wMScpO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnQnKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJyk7XG4gICAgXG4gICAgc2hpcEJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgcGxhY2VtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgICBsZXQgZGF0YVNoaXBUeXBlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLXR5cGUnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSBkYXRhU2hpcFR5cGU7XG5cbiAgICAgICAgICAgIC8vaWYgc2hpcCBoYXMgYmVlbiBwbGFjZWRcbiAgICAgICAgICAgIGlmIChhcnJheVNoaXBzLnNvbWUoc2hpcCA9PiBzaGlwLnR5cGUgPT09IGRhdGFTaGlwVHlwZSkpe1xuICAgICAgICAgICAgcGxhY2VtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbn19KX0pfVxuXG5cbi8vaWYgYWxsIHNoaXBzIHBsYWNlZCByZW1vdmUgYnV0dG9uc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNoaXBCdG5zICgpIHtcbiAgICBpZiAoYXJyYXlTaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICBsZXQgc2hpcEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJ1dHRvbnMnKTtcbiAgICAgICAgc2hpcEJ0bnMucmVtb3ZlKCk7XG4gICAgfVxufVxuLy9kaXNwbGF5IGNvbXB1dGVyIGNvbnNvbGUvYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tcHV0ZXIgKCkge1xuICAgIGlmIChhcnJheVNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgIGxldCBjb21wdXRlckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tQ29uc29sZScpO1xuICAgICAgICBjb21wdXRlckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB9XG59XG5cblxuLy9wcmludCBzdGF0cyB0byBlYWNoIHNoaXBzIHN0YXQgZGl2IChsaWZlLyBkYW1hZ2UpXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRTdGF0cyAocGxheWVyLCBzaGlwLCBzdWZmaXgsIHByZWZpeCkge1xuICAgIC8vc2hpcCBkYXRhXG4gICAgY29uc3QgZmxlZXQgPSBwbGF5ZXIuZ2Iuc2hpcHM7XG4gICAgY29uc3QgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQudHlwZSA9PT0gc2hpcCk7XG4gICAgY29uc29sZS5sb2coZmxlZXQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXNTaGlwLmxlbmd0aDtcbiAgICBjb25zdCBkYW1hZ2UgPSB0aGlzU2hpcC5kYW1hZ2U7XG4gICAgLy9jb250YWluZXJzIGZvciBsaWZlLWRhbWFnZVxuICAgIGNvbnN0IGRhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN0YXRzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgJy1zdGF0LScgKyBzdWZmaXgpO1xuICAgIC8vcHJldmVudCByZXByaW50aW5nIHByaW9yIGRhdGFcbiAgICBzdGF0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vcHJpbnQgZGFtYWdlIGFuZCBsaWZlXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYW1hZ2U7IGorKyl7XG4gICAgICAgIGxldCBkYW1hZ2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhbWFnZWQuY2xhc3NMaXN0LmFkZCgnZGFtYWdlZCcpO1xuICAgICAgICBzdGF0c0Rpdi5hcHBlbmRDaGlsZChkYW1hZ2VkKTtcbiAgICB9ICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGxlbmd0aCAtIGRhbWFnZSk7IGkrKyl7XG4gICAgICAgIGxldCBsaWZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpZmUuY2xhc3NMaXN0LmFkZCgnbGlmZScpO1xuICAgICAgICBzdGF0c0Rpdi5hcHBlbmRDaGlsZChsaWZlKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA9PT0gZGFtYWdlKXtcbiAgICAgICAgbGV0IHRoaXNJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctJyArIHN1ZmZpeCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNJRCk7XG4gICAgICAgIHRoaXNJRC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgfVxufTsiLCIvL2NvbnN0IHNoaXAgPSByZXF1aXJlICgnLi9zaGlwLmpzJylcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuLy90byBhY2Nlc3Mgc3F1YXJlIG9uIGJvYXJkIHVzIG1lIGJvYXJkLmJvYXJkW3JdW2NdXG5cbi8vdXRpbGl0eTogY29udmVydHMgY29sdW1uIGxldHRlciB0byBudW1iZXIgZm9yIGxvb2tVcFxuZnVuY3Rpb24gY29sQ29udmVydCAobGV0dGVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheShib2FyZFNpemUpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBjb25zdCBpdGVtID0gKGVsKSA9PiBlbCA9PT0gbGV0dGVyO1xuICAgICAgICBjb25zdCBudW0gPSBhbHBoYWJldC5maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgIHJldHVybiBudW1cbn07XG4vL3V0aWxpdHk6IGJvYXJkIGFzIHZhcmlhYmxlbmFtZS5ib2FyZCwgb25seSB3b3JrcyBmb3IgZmlyc3Qgcm93XG5leHBvcnQgZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHJvdywgY29sKXtcbiAgICAgICAgaWYgKChyb3cgPCAwICkgfHwgKHJvdyA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKChjb2wgPCAwICkgfHwgKGNvbCA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnWCcgfHwgXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhbGlkJ31cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgciwgYywgZGlyKSB7XG4gICAgICAgIGxldCByb3cgPSByO1xuICAgICAgICBsZXQgY29sID0gYztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcblxuICAgICAgICBpZiAoZGlyID09PSAnRG93bicpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoci0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93ICsgaSkgPCAocm93ICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuYm9hcmRbcm93KytdW2NdKS52YWx1ZSAhPT0gMCkge3Rocm93IG5ldyBFcnJvcignTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAuJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdVcCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChyIC0gKG5ld1NoaXAubGVuZ3RoLTEpIDwgMCkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93IC0gaSkgPiAocm93IC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ctLV1bY10udmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ1JpZ2h0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKChjLTEpICsgbmV3U2hpcC5sZW5ndGggPiAoYm9hcmRTaXplLTEpKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjb2wgKyBpKSA8IChjb2wgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbCsrXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyArIGkpIDwgKGMgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYysrXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdMZWZ0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgLSAobmV3U2hpcC5sZW5ndGggKyAxKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IgKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIil9XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sIC0gaSkgPiAoY29sIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY29sLS1dLnZhbHVlICE9PSAwKXt0aHJvdyBuZXcgRXJyb3IgKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sgKHIsIGMpIHtcbiAgICAgICAgbGV0IGZsZWV0ID0gdGhpcy5zaGlwcztcbiAgICAgICAgbGV0IHRoaXNTaGlwO1xuICAgICAgICAvL2lmIGFscmVhZHkgbWlzcyByZWNvcmQgYW5vdGhlciBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnWCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB3YXRlciByZWNvcmQgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBjYXJyaWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdDJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0MnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBiYXR0ZXNoaXAgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0InKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnQicpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGRlc3RvcnllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnRCcpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdEJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgc3VibWFyaW5lIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdTJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ1MnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBwYXRyb2wgYm9hdCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUCcpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdQJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZWNvcmQgaGl0IHRvIGJvYXJkXG4gICAgICAgIGxldCBzaGlwSGl0ID0gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSBgJHtzaGlwSGl0fS1ISVRgO1xuICAgIH1cbiAgICBjaGVja1N1bmsgKCl7XG4gICAgICAgIGxldCBzdGF0dXMgPSBbXTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1swXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMV0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzJdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1szXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbNF0uaXNTdW5rKCkpO1xuICAgICAgICByZXR1cm4gc3RhdHVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbSA9PT0gdHJ1ZSlcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5cblxuZXhwb3J0IGNsYXNzIGh1bWFuUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLndpbnMgPSAwO1xuICAgICAgICB0aGlzLmxvc3NlcyA9IDA7XG4gICAgICAgIHRoaXMuc3RyZWFrID0gMDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoYm9hcmRTaXplLGJvYXJkU2l6ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgY29tcFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGxldmVsKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoYm9hcmRTaXplLCBib2FyZFNpemUpO1xuICAgIH1cbn1cbi8qXG5tb2R1bGUuZXhwb3J0cyA9IGh1bWFuUGxheWVyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBQbGF5ZXJcbiovIiwiZXhwb3J0IGNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnQ2Fycmllcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdDJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnQmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA0O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdCJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnRGVzdHJveWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0QnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdTdWJtYXJpbmUnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1BhdHJvbCBCb2F0Jyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1AnO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5kYW1hZ2UrKztcbiAgICB9XG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiBmYWxzZSB9XG4gICAgfVxufTtcblxuLy9leHBvcnQgZGVmYXVsdCBzaGlwXG4vL21vZHVsZS5leHBvcnRzID0gc2hpcFxuXG4iXSwibmFtZXMiOlsiZ2FtZWJvYXJkIiwic2hpcCIsImh1bWFuUGxheWVyIiwiY29tcFBsYXllciIsIndlbGNvbWVGb3JtIiwicHJpbnRCb2FyZCIsIndlbGNvbWVGb3JtRE9NIiwiZGlzcGxheUNvbXB1dGVyIiwic2hpcEJ0bkhhbmRsZXIiLCJyZW1vdmVTaGlwQnRucyIsInByaW50U2hpcFN0YXRzIiwicHJpbnRTdGF0cyIsInBsYXllclNoaXBPdmVybGF5IiwicGxhY2VDb21wdXRlciIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsInJhbmRvbUF0dGFjayIsInRhcmdldGVkQXR0YWNrIiwibGFzdEhpdCIsInN0b3JlZEhpdCIsInRhcmdldENvbCIsInRhcmdldFJvdyIsInNhdmVkUm93Iiwic2F2ZWRDb2wiLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJib2FyZFNpemUiLCJsZXZlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZ2IiLCJib2FyZCIsInJhbmRvbVNldFBsYXllciIsInJhbmRvbUJ0biIsImNsYXNzTGlzdCIsImFkZCIsImZvcm0iLCJzdGFydENvdW50Iiwic2hpcHMiLCJsZW5ndGgiLCJyb3ciLCJjb2wiLCJzaGlwVHlwZSIsImlubmVyVGV4dCIsImRpcmVjdGlvbiIsInNoaXBJRCIsInNsaWNlIiwicGxhY2VOZXdTaGlwIiwibmV3Q291bnQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiLCJ0YXJnZXRCdG4iLCJjb25jYXQiLCJwbGF5ZXJDb250YWluZXIiLCJjb21wQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsIlJhbmRvbU1vdmUiLCJzZXRUaW1lb3V0IiwicmVjZWl2ZUF0dGFjayIsImFycmF5U2hpcHMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21EaXIiLCJwbGFjZVNoaXAiLCJjcHUiLCJ0cnlBZ2FpbiIsInVzZXIiLCJjaGVja09wZW5Cb2FyZCIsInVuZGVmaW5lZCIsImVuZW15IiwibGFzdENvdW50IiwicG9zdFN1bmtBdHQiLCJjYXJTdW5rIiwiaXNTdW5rIiwiYmF0U3VuayIsImRpc1N1bmsiLCJzdWJTdW5rIiwicGF0U3VuayIsImNvdW50VHJ1ZSIsImZpbHRlciIsImFkamFjZW50Iiwicm93UGx1cyIsInJvd01pbnVzIiwiY29sUGx1cyIsImNvbE1pbnVzIiwicm93VmFsIiwiYWJzIiwiY29sVmFsIiwic3RhcnRTY3JlZW4iLCJtYWluUGFnZSIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImNvbnRhaW5lciIsInBsYXllciIsInNoaXBSb3ciLCJzaGlwQ29sIiwibWF4IiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJpbm5lckhUTUwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9sb29wIiwiY2VsbCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInIiLCJjIiwiTnVtYmVyIiwiY29sb3IiLCJjaGVja1N1bmsiLCJhbGVydCIsImFwcGVuZENoaWxkIiwiZXJyIiwiZSIsImYiLCJwcmludEJvYXJkU2hpcHMiLCJwcmVmaXgiLCJ0YXJnZXRCb2FyZCIsIm1pbkdyaWRSb3ciLCJtYXhHcmlkUm93IiwibWluR3JpZENvbCIsIm1heEdyaWRDb2wiLCJ0YXJnZXRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBMZW5ndGgiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY3VycmVudEdyaWRSb3ciLCJwYXJzZUludCIsImN1cnJlbnRHcmlkQ29sIiwic2hpcE92ZXJsYXkiLCJpZCIsInJvd0VuZCIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93U3RhcnQiLCJncmlkUm93RW5kIiwiY29sRW5kIiwic2hpcEJ1dHRvbnMiLCJwbGFjZW1lbnQiLCJmb3JtVGl0bGUiLCJidG4iLCJkYXRhU2hpcFR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJzb21lIiwidHlwZSIsInNoaXBCdG5zIiwiY29tcHV0ZXJEaXNwbGF5Iiwic3VmZml4IiwiZmxlZXQiLCJ0aGlzU2hpcCIsImZpbmQiLCJkYW1hZ2UiLCJkYW1EaXYiLCJzdGF0c0RpdiIsImoiLCJkYW1hZ2VkIiwiaSIsImxpZmUiLCJ0aGlzSUQiLCJjb2xDb252ZXJ0IiwibGV0dGVyIiwiYWxwaGFiZXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsIl8iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJpdGVtIiwiZWwiLCJudW0iLCJmaW5kSW5kZXgiLCJsb29rVXAiLCJMZXQiLCJOdW0iLCJhcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZUJvYXJkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2FtZUJvYXJkIiwicm93cyIsInB1c2giLCJkaXIiLCJuZXdTaGlwIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmRleCIsImluZGV4T2YiLCJoaXQiLCJzaGlwSGl0Iiwic3RhdHVzIiwiZXZlcnkiLCJ3aW5zIiwibG9zc2VzIiwic3RyZWFrIiwic3VuayJdLCJzb3VyY2VSb290IjoiIn0=