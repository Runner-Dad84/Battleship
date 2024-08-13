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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/carrier.png */ "./src/images/carrier.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/submarine.png */ "./src/images/submarine.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/destroyer.png */ "./src/images/destroyer.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/patrol.png */ "./src/images/patrol.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#deployed-p1,
#deployed-com {
    display: none;
    flex-direction: column;
}

#shipDamaged,
#shipDamage-com {
    background-color: blue;
    background-image: linear-gradient(to right, blue 90%, red 10%);
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-items: center;
}


/* Ships stat displays - may consider moving to a separate style sheet*/

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
    border-radius: 100%;
    border: .1em solid black;
    height: 1.5em;
    width: 1.5em;
    background: green;
}

.damaged {
    height: 2em;
    width: 2em;
    background-position: center;
    background-size: contain;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
}

#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {
    display: flex;
    justify-content: space-around;

}

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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 75%;
}

#p1-B, #com-B {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: 100%;
}

#p1-S, #com-S {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: 100%;
}

#p1-D, #com-D {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: 100%;
}

#p1-P, #com-P {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: 50%;
}


`, "",{"version":3,"sources":["webpack://./src/styles/buttons.style.css"],"names":[],"mappings":";AACA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,sBAAsB;IACtB,8DAA8D;IAC9D,aAAa;IACb,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA,uEAAuE;;AAEvE;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB;AACJ;;AAEA;IACI,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,yDAA8C;IAC9C,oBAAoB;AACxB;;AAEA;IACI,yDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAA6C;IAC7C,oBAAoB;AACxB","sourcesContent":["\n#deployed-p1,\n#deployed-com {\n    display: none;\n    flex-direction: column;\n}\n\n#shipDamaged,\n#shipDamage-com {\n    background-color: blue;\n    background-image: linear-gradient(to right, blue 90%, red 10%);\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    align-items: center;\n}\n\n\n/* Ships stat displays - may consider moving to a separate style sheet*/\n\n.p1Ship, .comShip {\n    width: 15vw;\n    margin: 1.5em;\n    padding-left: 0.5em;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: .25em solid black;\n}\n.p1Ship {\n    background-color: rgb(3, 115, 167);\n}\n\n.comShip {\n    background-color: rgb(104, 81, 39);\n}\n\n.stats {\n    display: flex;\n}\n\n.life {\n    border-radius: 100%;\n    border: .1em solid black;\n    height: 1.5em;\n    width: 1.5em;\n    background: green;\n}\n\n.damaged {\n    height: 2em;\n    width: 2em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/hit.png')\n}\n\n#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {\n    display: flex;\n    justify-content: space-around;\n\n}\n\n#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {\n    text-align: center;\n    color: white;\n    font-weight: bolder;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 1em;\n}\n\n#p1-C, #com-C {\n    background-image: url('../images/carrier.png');\n    background-size: 75%;\n}\n\n#p1-B, #com-B {\n    background-image: url('../images/battleship.png');\n    background-size: 100%;\n}\n\n#p1-S, #com-S {\n    background-image: url('../images/submarine.png');\n    background-size: 100%;\n}\n\n#p1-D, #com-D {\n    background-image: url('../images/destroyer.png');\n    background-size: 100%;\n}\n\n#p1-P, #com-P {\n    background-image: url('../images/patrol.png');\n    background-size: 50%;\n}\n\n\n"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Smoke.jpg */ "./src/images/Smoke.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Battleship2.png */ "./src/images/Battleship2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Destroyer2.png */ "./src/images/Destroyer2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/submarine2.png */ "./src/images/submarine2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Patrol2.png */ "./src/images/Patrol2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/carrier2.png */ "./src/images/carrier2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#comConsole,
#p1Console {
    display: grid;
    grid-template-columns: 4fr 1fr;
}

#container-p1,
#container-p2 {
    position: relative;
    display: grid;
    width: 70vh;
    height: 70vh;
    gap: 0;
    border: 4px solid black;
    border-radius: 5px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
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
    color: white;
}

#container-p1 .hit,
#container-p2 .hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
}

#container-p1 .boat,
#container-p2 .boat {
    background-color: darkgray;
}

#container-p1 .miss,
#container-p2 .miss {
    background-color: rgb(109, 109, 244);
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
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


`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,yDAA4C;IAC5C,sBAAsB;AAC1B;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA4C;IAC5C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;;;;;;;;;;CAUC;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;;AAE5B;;AAEA;IACI;AACJ","sourcesContent":["#comConsole,\n#p1Console {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n}\n\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    width: 70vh;\n    height: 70vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    color: white;\n}\n\n#container-p1 .hit,\n#container-p2 .hit {\n    background-image: url('../images/Smoke.jpg');\n    background-size: cover;\n}\n\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: darkgray;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-color: rgb(109, 109, 244);\n}\n\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n/*\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n*/\n\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n    \n}\n\n.vert-overlay-C {\n    height: 100%\n}\n\n\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#startscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: black;
}

#startscreen #welcome {
    color:white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`, "",{"version":3,"sources":["webpack://./src/styles/startscreen.style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC","sourcesContent":["#startscreen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n    background-color: black;\n}\n\n#startscreen #welcome {\n    color:white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}"],"sourceRoot":""}]);
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

/***/ "./src/images/Smoke.jpg":
/*!******************************!*\
  !*** ./src/images/Smoke.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e96c51c961c320ac5fe8.jpg";

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

/***/ "./src/images/patrol.png":
/*!*******************************!*\
  !*** ./src/images/patrol.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0cf4f82ce2718fd27cf.png";

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
  var welcomeForm = document.getElementById('welcome');
  welcomeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    boardSize = document.getElementById('size').value;

    //create players
    player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.humanPlayer('Andrew');
    computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.compPlayer('computer', 'easy');
    //place computer ships
    placeComputer(computer);
    //print boards
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('P');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('B');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('D');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('S');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('C');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.welcomeFormDOM)();
  });
})();

//place user ships randomly
function placeComputer(user) {
  (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeShip)('Carrier', user);
  (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeShip)('Battleship', user);
  (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeShip)('Destroyer', user);
  (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeShip)('Submarine', user);
  (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_4__.placeShip)('Patrol Boat', user);
}
;
//Place player ships randomly on button push
(function randomSetPlayer() {
  var randomBtn = document.getElementById('random');
  randomBtn.addEventListener('click', function () {
    placeComputer(player1);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    //remove all buttons
    randomBtn.remove();
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.removeShipBtns)();
  });
})();

//player place ships on board
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('placement');
  var randomBtn = document.getElementById('random');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var row = document.getElementById('shipRow').value;
    var col = document.getElementById('shipCol').value;
    var shipType = document.getElementById('formTitle').innerText;
    var direction = document.getElementById('direction').value;
    player1.gb.placeNewShip(shipType, row, col, direction);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('B');
    form.style.display = 'none';
    //remove all buttons if all five ships placed
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.removeShipBtns)();
    randomBtn.remove();
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
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('B');
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
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoardShips)('B');
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
  if (enemy.gb.board[randomRow][randomCol].value === '!') {
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
  var welcomeForm = document.getElementById('welcome');
  var startScreen = document.getElementById('startscreen');
  var mainPage = document.getElementById('mainpage');
  //print player name
  var name = document.getElementById('name').value;
  document.getElementById('playerName').textContent = name;

  //remove start screen and welcome form
  welcomeForm.style.display = 'none';
  startScreen.style.display = 'none';
  //reveal the main page
  mainPage.style.display = 'block';
  mainPage.style.backgroundColor = 'white';
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
            element.classList.add(element.textContent);
          }
          element.dataset.row = cell.r;
          element.dataset.col = cell.c;
          //hover to reveal space dataset
          element.addEventListener('mouseover', function () {
            var row = Number(element.dataset.row);
            var col = Number(element.dataset.col);
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
  arrayShips = player.ships;
}
function printBoardShips(prefix) {
  //call min/max outside the possibe range
  var minGridRow = 1000;
  var maxGridRow = -1000;
  var minGridCol = 1000;
  var maxGridCol = -1000;

  //return the max/min row/col for ship location
  var targets = document.querySelectorAll(".".concat(prefix));
  var shipLength = targets.length;
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
  var container = document.getElementById('container-p2');
  var shipOverlay = document.createElement('div');
  shipOverlay.id = "overlay-".concat(prefix);

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
      if (this.board[row][col].value === 'X' || this.board[row][col].value === '!') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQ2YsSUFBSSxDQUFDMEUsRUFBRSxHQUFHLEdBQUc7SUFDakI7SUFBQztFQUNMO0VBQUMsT0FBQThDLFlBQUEsQ0FBQXhMLElBQUE7SUFBQXlMLEdBQUE7SUFBQTFKLEtBQUEsRUFFRCxTQUFBcUssSUFBQSxFQUFLO01BQ0QsSUFBSSxDQUFDdEMsTUFBTSxFQUFFO0lBQ2pCO0VBQUM7SUFBQTJCLEdBQUE7SUFBQTFKLEtBQUEsRUFDRCxTQUFBeUMsT0FBQSxFQUFRO01BQ0osSUFBSSxJQUFJLENBQUNzRixNQUFNLEtBQUssSUFBSSxDQUFDOUYsTUFBTSxFQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDMEksSUFBSSxHQUFHLElBQUk7TUFDM0IsQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLO01BQUM7SUFDMUI7RUFBQztBQUFBO0FBQ0o7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3M/OGJhMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzPzU2YWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzPzBmZGMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzPzIxNDQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2Fycmllci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc3VibWFyaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZXN0cm95ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BhdHJvbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4jZGVwbG95ZWQtcDEsXG4jZGVwbG95ZWQtY29tIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzaGlwRGFtYWdlZCxcbiNzaGlwRGFtYWdlLWNvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsdWUgOTAlLCByZWQgMTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXG5cbi5wMVNoaXAsIC5jb21TaGlwIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBtYXJnaW46IDEuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIGJsYWNrO1xufVxuLnAxU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDExNSwgMTY3KTtcbn1cblxuLmNvbVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XG59XG5cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxpZmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAuMWVtIHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZGFtYWdlZCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KVxufVxuXG4jcDEtc3RhdC1DLCAjcDEtc3RhdC1CLCAjcDEtc3RhdC1ELCAjcDEtc3RhdC1TLCAjcDEtc3RhdC1QLCAjY29tLXN0YXQtQywgI2NvbS1zdGF0LUIsICNjb20tc3RhdC1ELCAjY29tLXN0YXQtUywgI2NvbS1zdGF0LVAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbn1cblxuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuXG4jcDEtQiwgI2NvbS1CIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUywgI2NvbS1TIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUCwgI2NvbS1QIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0Qiw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBR0EsdUVBQXVFOztBQUV2RTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5REFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0Msb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiNkZXBsb3llZC1wMSxcXG4jZGVwbG95ZWQtY29tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NoaXBEYW1hZ2VkLFxcbiNzaGlwRGFtYWdlLWNvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSA5MCUsIHJlZCAxMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBTaGlwcyBzdGF0IGRpc3BsYXlzIC0gbWF5IGNvbnNpZGVyIG1vdmluZyB0byBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0Ki9cXG5cXG4ucDFTaGlwLCAuY29tU2hpcCB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW46IDEuNWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogLjI1ZW0gc29saWQgYmxhY2s7XFxufVxcbi5wMVNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTE1LCAxNjcpO1xcbn1cXG5cXG4uY29tU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XFxufVxcblxcbi5zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saWZlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAuMWVtIHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG5cXG4uZGFtYWdlZCB7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGl0LnBuZycpXFxufVxcblxcbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbn1cXG5cXG4jcDEtQywgI3AxLUIsICNwMS1TLCAjcDEtRCwgI3AxLVAsICNjb20tQywgI2NvbS1CLCAjY29tLUQsICNjb20tUywgI2NvbS1QICAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuI3AxLUMsICNjb20tQyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2NhcnJpZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xcbn1cXG5cXG4jcDEtQiwgI2NvbS1CIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtUywgI2NvbS1TIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1ELCAjY29tLUQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLVAsICNjb20tUCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BhdHJvbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9TbW9rZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N1Ym1hcmluZTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1BhdHJvbDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhcnJpZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2NvbUNvbnNvbGUsXG4jcDFDb25zb2xlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbn1cblxuI2NvbnRhaW5lci1wMSxcbiNjb250YWluZXItcDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA3MHZoO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBnYXA6IDA7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwsXG4jY29udGFpbmVyLXAxIC5oaXQsXG4jY29udGFpbmVyLXAyIC5oaXQsXG4jY29udGFpbmVyLXAxIC5ib2F0LFxuI2NvbnRhaW5lci1wMiAuYm9hdCxcbiNjb250YWluZXItcDEgLm1pc3MsXG4jY29udGFpbmVyLXAyIC5taXNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbiNjb250YWluZXItcDEgLmNlbGwsXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250YWluZXItcDEgLmhpdCxcbiNjb250YWluZXItcDIgLmhpdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMjQ0KTtcbn1cblxuLypTaGlwIGljb25zIG9uIGJvYXJkKi9cbiNvdmVybGF5LUIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1CIHtcbiAgICBoZWlnaHQ6IDEzMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnZlcnQtb3ZlcmxheS1CIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiNvdmVybGF5LUQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1EIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnZlcnQtb3ZlcmxheS1EIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiNvdmVybGF5LVMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1TIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuI292ZXJsYXktUCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLypcbi5ob3J6LW92ZXJsYXktUCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi5ob3J6LW92ZXJsYXktUCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4qL1xuXG4jb3ZlcmxheS1DIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ob3J6LW92ZXJsYXktQyB7XG4gICAgaGVpZ2h0OiAxMjAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgXG59XG5cbi52ZXJ0LW92ZXJsYXktQyB7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseURBQWtEO0lBQ2xELHNCQUFzQjtBQUMxQjtBQUNBOzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHlEQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7Ozs7Ozs7Ozs7Q0FVQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG1EQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb21Db25zb2xlLFxcbiNwMUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxufVxcblxcbiNjb250YWluZXItcDEsXFxuI2NvbnRhaW5lci1wMiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDcwdmg7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9PY2Vhbi1Cb2FyZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsLFxcbiNjb250YWluZXItcDEgLmhpdCxcXG4jY29udGFpbmVyLXAyIC5oaXQsXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0LFxcbiNjb250YWluZXItcDEgLm1pc3MsXFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5oaXQsXFxuI2NvbnRhaW5lci1wMiAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvU21va2UuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250YWluZXItcDEgLmJvYXQsXFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5taXNzLFxcbiNjb250YWluZXItcDIgLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDI0NCk7XFxufVxcblxcbi8qU2hpcCBpY29ucyBvbiBib2FyZCovXFxuI292ZXJsYXktQiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LUIge1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4udmVydC1vdmVybGF5LUIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbiNvdmVybGF5LUQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LUQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0LW92ZXJsYXktRCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuI292ZXJsYXktUyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktUyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuI292ZXJsYXktUCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvUGF0cm9sMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi8qXFxuLmhvcnotb3ZlcmxheS1QIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LVAge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbiovXFxuXFxuI292ZXJsYXktQyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2NhcnJpZXIyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmhvcnotb3ZlcmxheS1DIHtcXG4gICAgaGVpZ2h0OiAxMjAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi52ZXJ0LW92ZXJsYXktQyB7XFxuICAgIGhlaWdodDogMTAwJVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNwbGFjZW1lbnQge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDIwdnc7XG59XG5cbiNwbGFjZW1lbnQgI2Zvcm1UaXRsZSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG59XG5cbiNwbGFjZW1lbnQgLmZvcm1MYWJsZSB7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xufVxuXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xuICAgIG1heC13aWR0aDogM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbiNwbGFjZW1lbnQgI3BsYWNlQnRuIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbiNkZXBsb3llZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwbGFjZW1lbnQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxufVxcblxcbiNwbGFjZW1lbnQgI2Zvcm1UaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxufVxcblxcbiNwbGFjZW1lbnQgLmZvcm1MYWJsZSB7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiNwbGFjZW1lbnQgLmZvcm1JbnB1dCB7XFxuICAgIG1heC13aWR0aDogM2VtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jcGxhY2VtZW50ICNwbGFjZUJ0biB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNkZXBsb3llZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3N0YXJ0c2NyZWVuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiNzdGFydHNjcmVlbiAjd2VsY29tZSB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjc3RhcnRzY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNzdGFydHNjcmVlbiAjd2VsY29tZSB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQsICB9IGZyb20gJy4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBodW1hblBsYXllciwgY29tcFBsYXllciB9IGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIuanMnXG5pbXBvcnQgeyB3ZWxjb21lRm9ybSwgcHJpbnRCb2FyZCwgd2VsY29tZUZvcm1ET00sIHNoaXBCdG5IYW5kbGVyLCByZW1vdmVTaGlwQnRucywgcHJpbnRTaGlwU3RhdHMgLCBwcmludFN0YXRzLCBwcmludEJvYXJkU2hpcHMgfSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0IHsgcGxhY2VTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgcmFuZG9tQXR0YWNrLCB0YXJnZXRlZEF0dGFjaywgbGFzdEhpdCwgc3RvcmVkSGl0ICwgdGFyZ2V0Q29sLCB0YXJnZXRSb3csIHNhdmVkUm93LCBzYXZlZENvbCB9IGZyb20gJy4vbW9kdWxlcy9jb21wdXRlci5qcydcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoaXBmb3JtLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzJztcblxuXG5leHBvcnQgbGV0IHBsYXllcjE7XG5leHBvcnQgbGV0IGNvbXB1dGVyO1xuXG4vL3dlbGNvbWUgZm9ybVxuZXhwb3J0IGxldCBib2FyZFNpemU7XG5jb25zdCBsZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xuXG5cbihmdW5jdGlvbiB3ZWxjb21lRm9ybSAoKXtcbiAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICAgICAgY29uc3Qgd2VsY29tZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICAgICAgICBcbiAgICAgICAgd2VsY29tZUZvcm0uYWRkRXZlbnRMaXN0ZW5lciAoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJvYXJkU2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIHBsYXllcnNcbiAgICAgICAgICAgIHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIoJ0FuZHJldycpO1xuICAgICAgICAgICAgY29tcHV0ZXIgPSBuZXcgY29tcFBsYXllcignY29tcHV0ZXInLCAnZWFzeScpO1xuICAgICAgICAgICAgLy9wbGFjZSBjb21wdXRlciBzaGlwc1xuICAgICAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgICAgICAvL3ByaW50IGJvYXJkc1xuICAgICAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICAgICAgcHJpbnRCb2FyZFNoaXBzKCdQJyk7XG4gICAgICAgICAgICBwcmludEJvYXJkU2hpcHMoJ0InKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmRTaGlwcygnRCcpO1xuICAgICAgICAgICAgcHJpbnRCb2FyZFNoaXBzKCdTJyk7XG4gICAgICAgICAgICBwcmludEJvYXJkU2hpcHMoJ0MnKTtcbiAgICAgICAgICAgIHdlbGNvbWVGb3JtRE9NKCk7XG4gICAgfSlcbn0pKCk7XG5cbi8vcGxhY2UgdXNlciBzaGlwcyByYW5kb21seVxuZnVuY3Rpb24gcGxhY2VDb21wdXRlciAodXNlcikge1xuICAgIHBsYWNlU2hpcCAoJ0NhcnJpZXInLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdCYXR0bGVzaGlwJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnRGVzdHJveWVyJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnU3VibWFyaW5lJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnUGF0cm9sIEJvYXQnLCB1c2VyKTtcbn07XG4vL1BsYWNlIHBsYXllciBzaGlwcyByYW5kb21seSBvbiBidXR0b24gcHVzaFxuKGZ1bmN0aW9uIHJhbmRvbVNldFBsYXllciAoKXtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcGxhY2VDb21wdXRlcihwbGF5ZXIxKTtcbiAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBidXR0b25zXG4gICAgICAgIHJhbmRvbUJ0bi5yZW1vdmUoKTtcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMgKCk7XG4gICAgfSlcblxufSkoKTtcblxuLy9wbGF5ZXIgcGxhY2Ugc2hpcHMgb24gYm9hcmRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lciAoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFJvdycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uJykudmFsdWU7XG4gICAgICAgIHBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKHNoaXBUeXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHByaW50Qm9hcmRTaGlwcygnQicpO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBidXR0b25zIGlmIGFsbCBmaXZlIHNoaXBzIHBsYWNlZFxuICAgICAgICByZW1vdmVTaGlwQnRucygpO1xuICAgICAgICByYW5kb21CdG4ucmVtb3ZlKClcbiAgICB9KX0pXG5cblxuLy9saXN0ZW4gZm9yIHBsYXllciB0dXJuXG5sZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xubGV0IGNvbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAyJyk7XG5cbi8vTGlzdGVuIGZvciBwbGF5ZXIgY2xpY2sgb24gY29tcHV0ZXIgYm9hcmQgdG8gbG9nIGF0dGFja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbW92ZXMnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0NhcnJpZXInLCAnQycsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0JhdHRsZXNoaXAnLCAnQicsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0Rlc3Ryb3llcicsICdEJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnU3VibWFyaW5lJywgJ1MnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdQYXRyb2wgQm9hdCcsICdQJywgJ2NvbScpO1xuICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgICAgICBwcmludEJvYXJkU2hpcHMoJ0InKTtcbiAgICB9KVxuXG59XG4pO1xuLy9MaXN0ZW4gZm9yIGNvbXB1dGVyIGJvYXJkIGNsaWNrIGJ5IHBsYXllciwgaGFuZGxlciBpcyBjb21wdXRlciBhdHRhY2tcbmNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgZnVuY3Rpb24gUmFuZG9tTW92ZSAoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiBSYW5kb21Nb3ZlICgpe1xuICAgICAgICBcbiAgICAgICAgLy9MZXZlbCBlYXN5IC0gY29tcHV0ZXIgYWx3YXlzIHJhbmRvbWx5IGF0dGFja3MgcGxheWVyIDFcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSAnZWFzeScpe1xuICAgICAgICAgICAgcmFuZG9tQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgcGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9MZXZlbCBtZWRpdW0gLSBjb21wdXRlciB3aWxsIGNoZWNrIGFkamFjZW50IHNwYWNlc1xuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5kb21Sb3cgJHtyYW5kb21Sb3d9IHJhbmRvbUNvbCAke3JhbmRvbUNvbH1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkUm93ICR7c2F2ZWRSb3d9IHNhdmVkQ29sICR7c2F2ZWRDb2x9IGApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGFyZ2V0ZFJvdyAke3RhcmdldFJvd30gdGFyZ2V0Q29sICR7dGFyZ2V0Q29sfSBgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXRlZEF0dGFjayhwbGF5ZXIxKTtcbiAgICAgICAgICAgIGxhc3RIaXQocGxheWVyMSwgcmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICAgICAgcGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgc2hpcCBzdGF0c1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdDYXJyaWVyJywgJ0MnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnQmF0dGxlc2hpcCcsICdCJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0Rlc3Ryb3llcicsICdEJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ1N1Ym1hcmluZScsICdTJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ1BhdHJvbCBCb2F0JywgJ1AnLCAncDEnKTtcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgYm9hZFxuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcHJpbnRCb2FyZFNoaXBzKCdCJyk7XG4gICAgICAgIC8vRGlzcGxheXMgZm9ybSBwYWNlbWVudCB1cG9uIGJ0biBwcmVzc1xuICAgICAgICBzaGlwQnRuSGFuZGxlcignLnAxJywgJ3AxJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY29tcHV0ZXIgbW92ZXMnKTtcbiAgICB9LCAxMDAwKTtcbn0pO1xuXG5zaGlwQnRuSGFuZGxlcigpO1xuXG4vL2NvbnNvbGUubG9nKGNvbXB1dGVyLmdiLnNoaXBzKTtcblxuLypcbmNvbnNvbGUubG9nKGJvYXJkVGVzdFswXVswXS52YWx1ZSk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0uYyk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0ucik7XG4qL1xuLy9hdHRhY2tzXG4vKlxucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDAsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDEsIDApO1xuXG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDAsIDApO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjayg2LCA0KTtcblxuLy9ob3cgdG8gcHJpbnQgc2hpcHNcbmNvbnNvbGUubG9nKGJvYXJkVGVzdCk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzKTtcbmNvbnNvbGUubG9nKHBsYXllcjEuZ2Iuc2hpcHNbMF0pO1xuKi9cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4uL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGFycmF5U2hpcHMgfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuXG4vL1V0aWxpdHkgZnVuY3Rpb24sIHJhbmRvbSByb3cvY29sXG5jb25zdCByYW5kb21OdW0gPSB7XG4gICAgZ2V0IHZhbHVlICgpe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICB9XG59O1xuLy9VdGlsaXR5IGZ1bmN0aW9uLCByYW5kb20gZGlyZWN0aW9uXG5mdW5jdGlvbiByYW5kb21EaXIgKCl7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCl7IHJldHVybiAnVXAnIH0gXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSl7IHJldHVybiAnRG93bicgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDIpeyByZXR1cm4gJ1JpZ2h0JyB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMyl7IHJldHVybiAnTGVmdCcgfVxufTtcblxuXG4vL1JhbmRvbWx5IHBsYWNlIHNoaXBcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXAgKHNoaXAsIGNwdSkge1xuICAgIGZ1bmN0aW9uIHRyeUFnYWluICgpe1xuICAgICAgbGV0IGxlbmd0aCA9IGNwdS5nYi5zaGlwcy5sZW5ndGg7XG4gICAgICBjcHUuZ2IucGxhY2VOZXdTaGlwKHNoaXAsIHJhbmRvbU51bS52YWx1ZSwgcmFuZG9tTnVtLnZhbHVlLCByYW5kb21EaXIgKCkpO1xuICAgICAgLy9pZiB0aGUgc2hpcCBmYWlscyB0byBwbGFjZSBvbiB0aGUgYm9hcmQgcnVuIGFnYWluXG4gICAgICBpZiAoY3B1LmdiLnNoaXBzLmxlbmd0aCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICB0cnlBZ2FpbigpO1xuICAgICAgfTtcbiAgIH1cbiAgIHRyeUFnYWluKCk7XG59O1xuXG4vL0NvbXB1dGVyIGF0dGFjayByYW5kb20gbW92ZVxuZXhwb3J0IGxldCByYW5kb21Sb3c7XG5leHBvcnQgbGV0IHJhbmRvbUNvbDtcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BdHRhY2sgKHVzZXIpe1xuICAgIGNvbnNvbGUubG9nKCdyYW5kb21BdHRhY2sgZm4nKVxuICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICBpZiAodXNlci5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21BdHRhY2sodXNlcik7XG4gICAgfTtcbn1cblxuICAvL3V0aWxpdHkgZnVuY3Rpb24gJiB2YXJpYWJsZXMgdG8gc3RvcmUgbGFzdCBoaXRcbiAgZXhwb3J0IGxldCB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICBleHBvcnQgZnVuY3Rpb24gbGFzdEhpdCAoZW5lbXksIHJvdywgY29sKXtcbiAgICBpZiAoZW5lbXkuZ2IuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQycgfHwgXG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0InIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1AnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBsYXN0aGl0IGZuIC0gc3RvcmUgaGl0Jyk7XG5cbiAgICAgICAgICB0YXJnZXRSb3cgPSByb3c7XG4gICAgICAgICAgdGFyZ2V0Q29sID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0aGl0IGZuIC0gbm8gZGF0YSBmb3IgaGl0Jyl9XG4gIH07XG5cbiAgZXhwb3J0IGxldCBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZEhpdCAocm93LCBjb2wpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFJvdyA9PT0gJ251bWJlcicpe1xuICAgICAgICBzYXZlZFJvdyA9IHJvdztcbiAgICAgICAgc2F2ZWRDb2wgPSBjb2w7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkUm93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIC8vdXRpbGl0eSBmbiAtIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm4gZ28gdG8gcmFuZG9tIGF0dGFja1xuICBsZXQgbGFzdENvdW50ID0gMDtcbiAgZnVuY3Rpb24gcG9zdFN1bmtBdHQgKGVuZW15KSB7XG4gICAgbGV0IGNhclN1bmsgPSBlbmVteS5nYi5zaGlwc1swXS5pc1N1bmsoKTtcbiAgICBsZXQgYmF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzFdLmlzU3VuaygpO1xuICAgIGxldCBkaXNTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgbGV0IHN1YlN1bmsgPSBlbmVteS5nYi5zaGlwc1szXS5pc1N1bmsoKTtcbiAgICBsZXQgcGF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzRdLmlzU3VuaygpO1xuICAgIGxldCBzaGlwcyA9IFtjYXJTdW5rLCBiYXRTdW5rLCBkaXNTdW5rLCBzdWJTdW5rLCBwYXRTdW5rXTtcbiAgICBsZXQgY291bnRUcnVlID0gc2hpcHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGhcblxuICAgIGlmIChsYXN0Q291bnQgPCBjb3VudFRydWUpIHsgXG4gICAgICAgICsrbGFzdENvdW50XG4gICAgICAgIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJhbmRvbUF0dGFjayAoZW5lbXkpO1xuICAgIH07XG59O1xuXG4vL3V0aWxpdHkgZm4gLSBjaGVjayBzcGFjZSBhZGphY2VudCB0byBhdHRhY2sgZm9yIG5leHQgYXR0YWNrXG5mdW5jdGlvbiBhZGphY2VudCAoZW5lbXksIHJvdywgY29sKSB7XG4gICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgfVxufTtcblxuICAvL3Bvc3NpYmxlIGFkamFjZW50IG1vdmVzIGZyb20gYSBoaXRcbiAgbGV0IHJvd1BsdXM7XG4gIGxldCByb3dNaW51cztcbiAgbGV0IGNvbFBsdXM7XG4gIGxldCBjb2xNaW51cztcblxuICBleHBvcnQgZnVuY3Rpb24gdGFyZ2V0ZWRBdHRhY2sgKGVuZW15KXtcbiAgIFxuICAgIC8vZmlyc3QgbW92ZVxuICAgIGlmIChyYW5kb21Sb3cgID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayAoZW5lbXkpICBcbiAgICB9O1xuICAgIC8vY2hlY2sgaWYgYSBzaGlwIHdhcyBzdW5rIGxhc3QgdHVyblxuICAgIHBvc3RTdW5rQXR0KGVuZW15KTtcblxuICAgIC8vSWYgbGFzdCBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJyEnKSB7XG4gICAgICAgIFxuICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICBjb2xQbHVzID0gcmFuZG9tQ29sICsgMTtcbiAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICBcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBub3QgYSBzYXZlZCBoaXQgY2hlY2sgZWFjaCBvZiB0aGUgYWRqYWNlbnQgc3BvdHNcbiAgICAgICAgaWYgKHNhdmVkUm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMScpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tQ29sO1xuICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gNCcpO1xuICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICB9O1xuICAgICAgICAvL2lmIHRoZXJlIGFyZSB0d28gaGl0cyBjaGVjayB0byBzZWUgaWYgYWRqYWNlbnQgc3BvdCBvbiB0aGUgY28vcm93IGlzIG9wZW5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJvd1ZhbCA9IE1hdGguYWJzKHJhbmRvbVJvdyAtIHNhdmVkUm93KTtcbiAgICAgICAgICAgIGxldCBjb2xWYWwgPSBNYXRoLmFicyhyYW5kb21Db2wtIHNhdmVkQ29sKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQgYW5kIHJhbmRvbSB2YWx1ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93VmFsID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BpY2sgcm93cycpO1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93TWludXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDJiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbFZhbCA+IDApe1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0YicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9pZiB0aGVyZSBpcyBhIHN0b3JlZCBoaXQgYW5kIGxhc3QgbW92ZSBpcyBhIG1pc3MgcmVydW4gYWRqYWNlbnQgY2hlY2tzXG4gICAgaWYgKCAoZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnWCcpICYmICh0eXBlb2YgdGFyZ2V0Um93ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIG1pc3MsIGdvIGJhY2sgdG8gbGFzdCBoaXQnKTtcblxuICAgICAgICAgICAgcmFuZG9tUm93ID0gdGFyZ2V0Um93O1xuICAgICAgICAgICAgcmFuZG9tQ29sID0gdGFyZ2V0Q29sO1xuXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICAgICAgfSBcbiAgICB9XG5cbiAgY29uc29sZS5sb2coJ3RhcmdldCBhdHQgLSBkZWZhdWx0IHJhbmRvbSAnKVxuICB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgcmFuZG9tQXR0YWNrIChlbmVteSk7XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyMSwgY29tcHV0ZXIsIGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG4vL0RPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkgZm9yIHN1Ym1pdCBvbiB3ZWxjb21lIGZvcm1cbmV4cG9ydCBmdW5jdGlvbiB3ZWxjb21lRm9ybURPTSAoKXtcbiAgICBjb25zdCB3ZWxjb21lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lJyk7XG4gICAgY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRzY3JlZW4nKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucGFnZScpOyAgICBcbiAgICAvL3ByaW50IHBsYXllciBuYW1lXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJykudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgLy9yZW1vdmUgc3RhcnQgc2NyZWVuIGFuZCB3ZWxjb21lIGZvcm1cbiAgICB3ZWxjb21lRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9yZXZlYWwgdGhlIG1haW4gcGFnZVxuICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1haW5QYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgXG59O1xuXG5cbmV4cG9ydCBsZXQgYXJyYXlTaGlwcyA9IFtdO1xuXG4vL3ByaW50IHBsYXllci8gY29tcHV0ZXIgZ2FtZWJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCb2FyZCAoYm9hcmQsIGNvbnRhaW5lciwgcGxheWVyKXtcbiAgICBsZXQgZ2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgIGxldCBzaGlwUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKTtcbiAgICBsZXQgc2hpcENvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQ29sJyk7XG5cbiAgICAvL2R5bmFtaWNhbGx5IHNldCB0aGUgbWF4IHJvdy9jb2wgc2l6ZSBvbiBwbGFjZW1lbnQgZm9ybVxuICAgIHNoaXBSb3cubWF4ID0gYm9hcmRTaXplO1xuICAgIHNoaXBDb2wubWF4ID0gYm9hcmRTaXplO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIGdyaWQgc2l6ZVxuICAgIGdiLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XG4gICAgZ2Iuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcblxuICAgIC8vcHJpbnQgZWFjaCBjZWxsIHdpdGggdmFsdWVzXG4gICAgZ2IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpe1xuICAgICAgICBmb3IobGV0IGNlbGwgb2Ygcm93KXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdEJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQucm93ID0gY2VsbC5yO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmNvbCA9IGNlbGwuYztcbiAgICAgICAgICAgIC8vaG92ZXIgdG8gcmV2ZWFsIHNwYWNlIGRhdGFzZXRcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQucm93KTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5jb2wpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyb3d9LCAke2NvbH1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vaG92ZXIgb3V0XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNlbGwudmFsdWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9jbGljayBib2FyZCB0byBhdHRhY2tcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICAvL3JlY29yZCBhdHRhY2tcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBwbGF5ZXIgd2lucyBnYW1lXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5jaGVja1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGdiLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFycmF5U2hpcHMgPSBwbGF5ZXIuc2hpcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkU2hpcHMgKHByZWZpeCl7IFxuICAgIC8vY2FsbCBtaW4vbWF4IG91dHNpZGUgdGhlIHBvc3NpYmUgcmFuZ2VcbiAgICBsZXQgbWluR3JpZFJvdyA9IDEwMDA7XG4gICAgbGV0IG1heEdyaWRSb3cgPSAtMTAwMDtcblxuICAgIGxldCBtaW5HcmlkQ29sID0gMTAwMDtcbiAgICBsZXQgbWF4R3JpZENvbCA9IC0xMDAwO1xuICAgIFxuICAgIC8vcmV0dXJuIHRoZSBtYXgvbWluIHJvdy9jb2wgZm9yIHNoaXAgbG9jYXRpb25cbiAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7cHJlZml4fWApO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0YXJnZXRzLmxlbmd0aDtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50R3JpZFJvdyA9IHRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93IDwgbWluR3JpZFJvdykge1xuICAgICAgICAgICAgbWluR3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRSb3cgPiBtYXhHcmlkUm93KSB7XG4gICAgICAgICAgICBtYXhHcmlkUm93ID0gcGFyc2VJbnQoY3VycmVudEdyaWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50R3JpZENvbCA9IHRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sIDwgbWluR3JpZENvbCkge1xuICAgICAgICAgICAgbWluR3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRDb2wgPiBtYXhHcmlkQ29sKSB7XG4gICAgICAgICAgICBtYXhHcmlkQ29sID0gcGFyc2VJbnQoY3VycmVudEdyaWRDb2wpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbilcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAyJyk7XG5sZXQgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBPdmVybGF5LmlkID0gKGBvdmVybGF5LSR7cHJlZml4fWApO1xuXG4vL0FkZCAxIHRvIGFsbCBmb3IgY29udmVyc2lvbiBmcm9tIHNxdWFyZXMgdG8gZ3JpZCBsaW5lc1xuLy9BZGQgMiB0byBhbnkgc2luZ2xlIGxlbmd0aCBvcmllbnRhdGlvblxuLy92ZXJ0aWNhbFxuaWYgKG1pbkdyaWRDb2wgPT09IG1heEdyaWRDb2wpe1xuICAgIGxldCByb3dFbmQgPSBtaW5HcmlkUm93ICsgc2hpcExlbmd0aCArIDE7XG4gICAgc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZChgdmVydC1vdmVybGF5LSR7cHJlZml4fWApO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IG1pbkdyaWRDb2wgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBtaW5HcmlkQ29sICsgMjtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93U3RhcnQgPSBtaW5HcmlkUm93ICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gcm93RW5kO1xuLy9ob3Jpem9udGFsXG59IGVsc2Uge1xuICAgIGxldCBjb2xFbmQgPSAgbWluR3JpZENvbCArIHNoaXBMZW5ndGggKyAxO1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhvcnotb3ZlcmxheS0ke3ByZWZpeH1gKTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93U3RhcnQgPSBtaW5HcmlkUm93ICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gbWluR3JpZFJvdyArIDI7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gbWluR3JpZENvbCArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGNvbEVuZDtcbn1cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG59O1xuXG5cblxuXG4vL1NoaXAgYnV0dG9ucyBoYW5kZXIgdG8gZGlzcGxheSBmb3JtIHdpdGggY29ycmVjdCB0aXRsZVxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBCdG5IYW5kbGVyICgpe1xuICAgIGNvbnN0IHNoaXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAxJyk7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBcbiAgICBzaGlwQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGxldCBkYXRhU2hpcFR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtdHlwZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IGRhdGFTaGlwVHlwZTtcblxuICAgICAgICAgICAgLy9pZiBzaGlwIGhhcyBiZWVuIHBsYWNlZFxuICAgICAgICAgICAgaWYgKGFycmF5U2hpcHMuc29tZShzaGlwID0+IHNoaXAudHlwZSA9PT0gZGF0YVNoaXBUeXBlKSl7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn19KX0pfVxuXG4vL2lmIGFsbCBzaGlwcyBwbGFjZWQgcmVtb3ZlIGJ1dHRvbnNcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaGlwQnRucyAoKSB7XG4gICAgaWYgKGFycmF5U2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgbGV0IHNoaXBCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCdXR0b25zJyk7XG4gICAgICAgIHNoaXBCdG5zLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U3RhdHMgKHBsYXllciwgc2hpcCwgc3VmZml4LCBwcmVmaXgpIHtcbiAgICAvL3NoaXAgZGF0YVxuICAgIGNvbnN0IGZsZWV0ID0gcGxheWVyLmdiLnNoaXBzO1xuICAgIGNvbnN0IHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LnR5cGUgPT09IHNoaXApO1xuICAgIGNvbnNvbGUubG9nKGZsZWV0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzU2hpcC5sZW5ndGg7XG4gICAgY29uc3QgZGFtYWdlID0gdGhpc1NoaXAuZGFtYWdlO1xuICAgIC8vY29udGFpbmVycyBmb3IgbGlmZS1kYW1hZ2VcbiAgICBjb25zdCBkYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctc3RhdC0nICsgc3VmZml4KTtcbiAgICAvL3ByZXZlbnQgcmVwcmludGluZyBwcmlvciBkYXRhXG4gICAgc3RhdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvL3ByaW50IGRhbWFnZSBhbmQgbGlmZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGFtYWdlOyBqKyspe1xuICAgICAgICBsZXQgZGFtYWdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYW1hZ2VkLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQoZGFtYWdlZCk7XG4gICAgfSAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW5ndGggLSBkYW1hZ2UpOyBpKyspe1xuICAgICAgICBsZXQgbGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWZlLmNsYXNzTGlzdC5hZGQoJ2xpZmUnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQobGlmZSk7XG4gICAgfVxufTsiLCIvL2NvbnN0IHNoaXAgPSByZXF1aXJlICgnLi9zaGlwLmpzJylcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuLy90byBhY2Nlc3Mgc3F1YXJlIG9uIGJvYXJkIHVzIG1lIGJvYXJkLmJvYXJkW3JdW2NdXG5cbi8vdXRpbGl0eTogY29udmVydHMgY29sdW1uIGxldHRlciB0byBudW1iZXIgZm9yIGxvb2tVcFxuZnVuY3Rpb24gY29sQ29udmVydCAobGV0dGVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheShib2FyZFNpemUpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBjb25zdCBpdGVtID0gKGVsKSA9PiBlbCA9PT0gbGV0dGVyO1xuICAgICAgICBjb25zdCBudW0gPSBhbHBoYWJldC5maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgIHJldHVybiBudW1cbn07XG4vL3V0aWxpdHk6IGJvYXJkIGFzIHZhcmlhYmxlbmFtZS5ib2FyZCwgb25seSB3b3JrcyBmb3IgZmlyc3Qgcm93XG5leHBvcnQgZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHJvdywgY29sKXtcbiAgICAgICAgaWYgKChyb3cgPCAwICkgfHwgKHJvdyA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKChjb2wgPCAwICkgfHwgKGNvbCA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnWCcgfHwgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICchJykge1xuICAgICAgICAgICAgcmV0dXJuICdpbnZhbGlkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAndmFsaWQnfVxuICAgIH1cblxuICAgIHBsYWNlTmV3U2hpcCh0eXBlLCByLCBjLCBkaXIpIHtcbiAgICAgICAgbGV0IHJvdyA9IHI7XG4gICAgICAgIGxldCBjb2wgPSBjO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBzaGlwKHR5cGUpO1xuXG4gICAgICAgIGlmIChkaXIgPT09ICdEb3duJyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKChyLTEpICsgbmV3U2hpcC5sZW5ndGggPiAoYm9hcmRTaXplLTEpKSB7dGhyb3cgbmV3IEVycm9yKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyb3cgKyBpKSA8IChyb3cgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5ib2FyZFtyb3crK11bY10pLnZhbHVlICE9PSAwKSB7dGhyb3cgbmV3IEVycm9yKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcC4nKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcGFjZXMgYXJlIG9jY3VwaWVkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociArIGkpIDwgKHIgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcisrXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ1VwJyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHIgLSAobmV3U2hpcC5sZW5ndGgtMSkgPCAwKSB7dGhyb3cgbmV3IEVycm9yKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyb3cgLSBpKSA+IChyb3cgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvdy0tXVtjXS52YWx1ZSAhPT0gMCkge3Rocm93IG5ldyBFcnJvcignTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcGFjZXMgYXJlIG9jY3VwaWVkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyIC0gaSkgPiAociAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyLS1dW2NdLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyID09PSAnUmlnaHQnKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoKGMtMSkgKyBuZXdTaGlwLmxlbmd0aCA+IChib2FyZFNpemUtMSkpIHt0aHJvdyBuZXcgRXJyb3IgKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIil9XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGNvbCArIGkpIDwgKGNvbCArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY29sKytdLnZhbHVlICE9PSAwKXt0aHJvdyBuZXcgRXJyb3IgKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcGFjZXMgYXJlIG9jY3VwaWVkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjICsgaSkgPCAoYyArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjKytdLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ0xlZnQnKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoYyAtIChuZXdTaGlwLmxlbmd0aCArIDEpIDwgMCkge3Rocm93IG5ldyBFcnJvciAoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKX1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjb2wgLSBpKSA+IChjb2wgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjb2wtLV0udmFsdWUgIT09IDApe3Rocm93IG5ldyBFcnJvciAoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcGFjZXMgYXJlIG9jY3VwaWVkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgLSBpKSA+IChjIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MtLV0udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayAociwgYykge1xuICAgICAgICBsZXQgZmxlZXQgPSB0aGlzLnNoaXBzO1xuICAgICAgICBsZXQgdGhpc1NoaXA7XG4gICAgICAgIC8vaWYgYWxyZWFkeSBtaXNzIHJlY29yZCBhbm90aGVyIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdYJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHdhdGVyIHJlY29yZCBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGNhcnJpZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnQycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGJhdHRlc2hpcCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQicpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdCJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgZGVzdG9yeWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdEJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0QnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBzdWJtYXJpbmUgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnUycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHBhdHJvbCBib2F0IHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdQJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ1AnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlY29yZCBoaXQgdG8gYm9hcmRcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnISc7XG4gICAgfVxuICAgIGNoZWNrU3VuayAoKXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IFtdO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzBdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1sxXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMl0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzNdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1s0XS5pc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiBzdGF0dXMuZXZlcnkoaXRlbSA9PiBpdGVtID09PSB0cnVlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuXG5leHBvcnQgY2xhc3MgaHVtYW5QbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMud2lucyA9IDA7XG4gICAgICAgIHRoaXMubG9zc2VzID0gMDtcbiAgICAgICAgdGhpcy5zdHJlYWsgPSAwO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsYm9hcmRTaXplKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBjb21wUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGV2ZWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG4gICAgfVxufVxuLypcbm1vZHVsZS5leHBvcnRzID0gaHVtYW5QbGF5ZXJcbm1vZHVsZS5leHBvcnRzID0gY29tcFBsYXllclxuKi8iLCJleHBvcnQgY2xhc3Mgc2hpcCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdDYXJyaWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdCYXR0bGVzaGlwJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0InO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdEZXN0cm95ZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnRCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1N1Ym1hcmluZScpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdTJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnUGF0cm9sIEJvYXQnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMjtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUCc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgIH1cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgICB9XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IHNoaXBcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwXG5cbiJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJzaGlwIiwiaHVtYW5QbGF5ZXIiLCJjb21wUGxheWVyIiwid2VsY29tZUZvcm0iLCJwcmludEJvYXJkIiwid2VsY29tZUZvcm1ET00iLCJzaGlwQnRuSGFuZGxlciIsInJlbW92ZVNoaXBCdG5zIiwicHJpbnRTaGlwU3RhdHMiLCJwcmludFN0YXRzIiwicHJpbnRCb2FyZFNoaXBzIiwicGxhY2VTaGlwIiwicmFuZG9tUm93IiwicmFuZG9tQ29sIiwicmFuZG9tQXR0YWNrIiwidGFyZ2V0ZWRBdHRhY2siLCJsYXN0SGl0Iiwic3RvcmVkSGl0IiwidGFyZ2V0Q29sIiwidGFyZ2V0Um93Iiwic2F2ZWRSb3ciLCJzYXZlZENvbCIsInBsYXllcjEiLCJjb21wdXRlciIsImJvYXJkU2l6ZSIsImxldmVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJwbGFjZUNvbXB1dGVyIiwiZ2IiLCJib2FyZCIsInVzZXIiLCJyYW5kb21TZXRQbGF5ZXIiLCJyYW5kb21CdG4iLCJyZW1vdmUiLCJmb3JtIiwicm93IiwiY29sIiwic2hpcFR5cGUiLCJpbm5lclRleHQiLCJkaXJlY3Rpb24iLCJwbGFjZU5ld1NoaXAiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGF5ZXJDb250YWluZXIiLCJjb21wQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsIlJhbmRvbU1vdmUiLCJzZXRUaW1lb3V0IiwicmVjZWl2ZUF0dGFjayIsImNvbmNhdCIsImFycmF5U2hpcHMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21EaXIiLCJjcHUiLCJ0cnlBZ2FpbiIsImxlbmd0aCIsInNoaXBzIiwiY2hlY2tPcGVuQm9hcmQiLCJ1bmRlZmluZWQiLCJlbmVteSIsImxhc3RDb3VudCIsInBvc3RTdW5rQXR0IiwiY2FyU3VuayIsImlzU3VuayIsImJhdFN1bmsiLCJkaXNTdW5rIiwic3ViU3VuayIsInBhdFN1bmsiLCJjb3VudFRydWUiLCJmaWx0ZXIiLCJhZGphY2VudCIsInJvd1BsdXMiLCJyb3dNaW51cyIsImNvbFBsdXMiLCJjb2xNaW51cyIsInJvd1ZhbCIsImFicyIsImNvbFZhbCIsInN0YXJ0U2NyZWVuIiwibWFpblBhZ2UiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250YWluZXIiLCJwbGF5ZXIiLCJzaGlwUm93Iiwic2hpcENvbCIsIm1heCIsImdyaWRUZW1wbGF0ZVJvd3MiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiaW5uZXJIVE1MIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfbG9vcCIsImNlbGwiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJyIiwiYyIsIk51bWJlciIsImNoZWNrU3VuayIsImFsZXJ0IiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsInByZWZpeCIsIm1pbkdyaWRSb3ciLCJtYXhHcmlkUm93IiwibWluR3JpZENvbCIsIm1heEdyaWRDb2wiLCJ0YXJnZXRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBMZW5ndGgiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY3VycmVudEdyaWRSb3ciLCJwYXJzZUludCIsImN1cnJlbnRHcmlkQ29sIiwic2hpcE92ZXJsYXkiLCJpZCIsInJvd0VuZCIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93U3RhcnQiLCJncmlkUm93RW5kIiwiY29sRW5kIiwic2hpcEJ1dHRvbnMiLCJwbGFjZW1lbnQiLCJmb3JtVGl0bGUiLCJidG4iLCJkYXRhU2hpcFR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJzb21lIiwidHlwZSIsInNoaXBCdG5zIiwic3VmZml4IiwiZmxlZXQiLCJ0aGlzU2hpcCIsImZpbmQiLCJkYW1hZ2UiLCJkYW1EaXYiLCJzdGF0c0RpdiIsImoiLCJkYW1hZ2VkIiwiaSIsImxpZmUiLCJjb2xDb252ZXJ0IiwibGV0dGVyIiwiYWxwaGFiZXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsIl8iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJpdGVtIiwiZWwiLCJudW0iLCJmaW5kSW5kZXgiLCJsb29rVXAiLCJMZXQiLCJOdW0iLCJhcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZUJvYXJkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2FtZUJvYXJkIiwicm93cyIsInB1c2giLCJkaXIiLCJuZXdTaGlwIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmRleCIsImluZGV4T2YiLCJoaXQiLCJzdGF0dXMiLCJldmVyeSIsIndpbnMiLCJsb3NzZXMiLCJzdHJlYWsiLCJzdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==