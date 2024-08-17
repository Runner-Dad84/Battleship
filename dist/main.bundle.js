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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
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


#container-p1 .boat,
#container-p2 .boat {
    outline: red;
}

#container-p1 .miss,
#container-p2 .miss {
    background-color: rgb(109, 109, 244);
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
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

`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;AAChB;;;AAGA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;;;;;;;;;;IAUI,yDAA0C;IAC1C,sBAAsB;AAC1B;;;AAGA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yDAAkD;IAClD,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;;;;;;;;;;CAUC;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;;AAE5B;;AAEA;IACI;AACJ","sourcesContent":["#comConsole,\n#p1Console {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n}\n\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    width: 70vh;\n    height: 70vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    color: white;\n}\n\n\n#container-p1 .boat,\n#container-p2 .boat {\n    outline: red;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-color: rgb(109, 109, 244);\n}\n\n#container-p1 .C-HIT,\n#container-p1 .B-HIT,\n#container-p1 .D-HIT,\n#container-p1 .S-HIT,\n#container-p1 .P-HIT,\n#container-p2 .C-HIT,\n#container-p2 .B-HIT,\n#container-p2 .D-HIT,\n#container-p2 .S-HIT,\n#container-p2 .P-HIT {\n    background-image: url('../images/hit.png');\n    background-size: cover;\n}\n\n\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n/*\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n*/\n\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n    \n}\n\n.vert-overlay-C {\n    height: 100%\n}\n\n"],"sourceRoot":""}]);
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
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.playerShipOverlay)();
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
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
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_3__.playerShipOverlay)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUE7SUFBQTJMLEdBQUE7SUFBQTVKLEtBQUEsRUFFRCxTQUFBdUssSUFBQSxFQUFLO01BQ0QsSUFBSSxDQUFDdEMsTUFBTSxFQUFFO0lBQ2pCO0VBQUM7SUFBQTJCLEdBQUE7SUFBQTVKLEtBQUEsRUFDRCxTQUFBeUMsT0FBQSxFQUFRO01BQ0osSUFBSSxJQUFJLENBQUN3RixNQUFNLEtBQUssSUFBSSxDQUFDaEcsTUFBTSxFQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDNkksSUFBSSxHQUFHLElBQUk7TUFDM0IsQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLO01BQUM7SUFDMUI7RUFBQztBQUFBO0FBQ0o7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3M/OGJhMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzPzU2YWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzPzBmZGMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzPzIxNDQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2Fycmllci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc3VibWFyaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZXN0cm95ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BhdHJvbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4jZGVwbG95ZWQtcDEsXG4jZGVwbG95ZWQtY29tIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzaGlwRGFtYWdlZCxcbiNzaGlwRGFtYWdlLWNvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsdWUgOTAlLCByZWQgMTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXG5cbi5wMVNoaXAsIC5jb21TaGlwIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBtYXJnaW46IDEuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIGJsYWNrO1xufVxuLnAxU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDExNSwgMTY3KTtcbn1cblxuLmNvbVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XG59XG5cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxpZmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAuMWVtIHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZGFtYWdlZCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KVxufVxuXG4jcDEtc3RhdC1DLCAjcDEtc3RhdC1CLCAjcDEtc3RhdC1ELCAjcDEtc3RhdC1TLCAjcDEtc3RhdC1QLCAjY29tLXN0YXQtQywgI2NvbS1zdGF0LUIsICNjb20tc3RhdC1ELCAjY29tLXN0YXQtUywgI2NvbS1zdGF0LVAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbn1cblxuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuXG4jcDEtQiwgI2NvbS1CIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUywgI2NvbS1TIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUCwgI2NvbS1QIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0Qiw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBR0EsdUVBQXVFOztBQUV2RTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5REFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0Msb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiNkZXBsb3llZC1wMSxcXG4jZGVwbG95ZWQtY29tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NoaXBEYW1hZ2VkLFxcbiNzaGlwRGFtYWdlLWNvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSA5MCUsIHJlZCAxMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBTaGlwcyBzdGF0IGRpc3BsYXlzIC0gbWF5IGNvbnNpZGVyIG1vdmluZyB0byBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0Ki9cXG5cXG4ucDFTaGlwLCAuY29tU2hpcCB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW46IDEuNWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogLjI1ZW0gc29saWQgYmxhY2s7XFxufVxcbi5wMVNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTE1LCAxNjcpO1xcbn1cXG5cXG4uY29tU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XFxufVxcblxcbi5zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saWZlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAuMWVtIHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG5cXG4uZGFtYWdlZCB7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGl0LnBuZycpXFxufVxcblxcbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbn1cXG5cXG4jcDEtQywgI3AxLUIsICNwMS1TLCAjcDEtRCwgI3AxLVAsICNjb20tQywgI2NvbS1CLCAjY29tLUQsICNjb20tUywgI2NvbS1QICAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuI3AxLUMsICNjb20tQyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2NhcnJpZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xcbn1cXG5cXG4jcDEtQiwgI2NvbS1CIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtUywgI2NvbS1TIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1ELCAjY29tLUQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLVAsICNjb20tUCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BhdHJvbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0JhdHRsZXNoaXAyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9EZXN0cm95ZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9QYXRyb2wyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjb21Db25zb2xlLFxuI3AxQ29uc29sZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG59XG5cbiNjb250YWluZXItcDEsXG4jY29udGFpbmVyLXAyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogNzB2aDtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgZ2FwOiAwO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNjb250YWluZXItcDEgLmNlbGwsXG4jY29udGFpbmVyLXAyIC5jZWxsLFxuI2NvbnRhaW5lci1wMSAuaGl0LFxuI2NvbnRhaW5lci1wMiAuaGl0LFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcbiNjb250YWluZXItcDIgLmJvYXQsXG4jY29udGFpbmVyLXAxIC5taXNzLFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcbiAgICBvdXRsaW5lOiByZWQ7XG59XG5cbiNjb250YWluZXItcDEgLm1pc3MsXG4jY29udGFpbmVyLXAyIC5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDI0NCk7XG59XG5cbiNjb250YWluZXItcDEgLkMtSElULFxuI2NvbnRhaW5lci1wMSAuQi1ISVQsXG4jY29udGFpbmVyLXAxIC5ELUhJVCxcbiNjb250YWluZXItcDEgLlMtSElULFxuI2NvbnRhaW5lci1wMSAuUC1ISVQsXG4jY29udGFpbmVyLXAyIC5DLUhJVCxcbiNjb250YWluZXItcDIgLkItSElULFxuI2NvbnRhaW5lci1wMiAuRC1ISVQsXG4jY29udGFpbmVyLXAyIC5TLUhJVCxcbiNjb250YWluZXItcDIgLlAtSElUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4vKlNoaXAgaWNvbnMgb24gYm9hcmQqL1xuI292ZXJsYXktQiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUIge1xuICAgIGhlaWdodDogMTMwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktRCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktUyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LVMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4jb3ZlcmxheS1QIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4vKlxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cbiovXG5cbiNvdmVybGF5LUMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhvcnotb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEyMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBcbn1cblxuLnZlcnQtb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseURBQWtEO0lBQ2xELHNCQUFzQjtBQUMxQjtBQUNBOzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7Ozs7Ozs7OztJQVVJLHlEQUEwQztJQUMxQyxzQkFBc0I7QUFDMUI7OztBQUdBLHNCQUFzQjtBQUN0QjtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix5REFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7Ozs7OztDQVVDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbURBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbUNvbnNvbGUsXFxuI3AxQ29uc29sZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSxcXG4jY29udGFpbmVyLXAyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzB2aDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jY29udGFpbmVyLXAxIC5jZWxsLFxcbiNjb250YWluZXItcDIgLmNlbGwsXFxuI2NvbnRhaW5lci1wMSAuaGl0LFxcbiNjb250YWluZXItcDIgLmhpdCxcXG4jY29udGFpbmVyLXAxIC5ib2F0LFxcbiNjb250YWluZXItcDIgLmJvYXQsXFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5jZWxsLFxcbiNjb250YWluZXItcDIgLmNlbGwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbiNjb250YWluZXItcDEgLmJvYXQsXFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XFxuICAgIG91dGxpbmU6IHJlZDtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAyNDQpO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5DLUhJVCxcXG4jY29udGFpbmVyLXAxIC5CLUhJVCxcXG4jY29udGFpbmVyLXAxIC5ELUhJVCxcXG4jY29udGFpbmVyLXAxIC5TLUhJVCxcXG4jY29udGFpbmVyLXAxIC5QLUhJVCxcXG4jY29udGFpbmVyLXAyIC5DLUhJVCxcXG4jY29udGFpbmVyLXAyIC5CLUhJVCxcXG4jY29udGFpbmVyLXAyIC5ELUhJVCxcXG4jY29udGFpbmVyLXAyIC5TLUhJVCxcXG4jY29udGFpbmVyLXAyIC5QLUhJVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hpdC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuXFxuLypTaGlwIGljb25zIG9uIGJvYXJkKi9cXG4jb3ZlcmxheS1CIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9CYXR0bGVzaGlwMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktQiB7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0LW92ZXJsYXktQiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuI292ZXJsYXktRCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvRGVzdHJveWVyMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktRCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1EIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4jb3ZlcmxheS1TIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zdWJtYXJpbmUyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1TIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4jb3ZlcmxheS1QIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9QYXRyb2wyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLypcXG4uaG9yei1vdmVybGF5LVAge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktUCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuKi9cXG5cXG4jb3ZlcmxheS1DIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvY2FycmllcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaG9yei1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1DIHtcXG4gICAgaGVpZ2h0OiAxMDAlXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3BsYWNlbWVudCB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbn1cblxuI3BsYWNlbWVudCAjZm9ybVRpdGxlIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG5cbn1cblxuI3BsYWNlbWVudCAuZm9ybUxhYmxlIHtcbiAgICB3aWR0aDogNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG59XG5cbiNwbGFjZW1lbnQgLmZvcm1JbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuI3BsYWNlbWVudCAjcGxhY2VCdG4ge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuI2RlcGxveWVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDIwdnc7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NoaXBmb3JtLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BsYWNlbWVudCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogMjB2dztcXG59XFxuXFxuI3BsYWNlbWVudCAjZm9ybVRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG5cXG59XFxuXFxuI3BsYWNlbWVudCAuZm9ybUxhYmxlIHtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNwbGFjZW1lbnQgI3BsYWNlQnRuIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI2RlcGxveWVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogMjB2dztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjc3RhcnRzY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI3N0YXJ0c2NyZWVuICN3ZWxjb21lIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNzdGFydHNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuI3N0YXJ0c2NyZWVuICN3ZWxjb21lIHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVib2FyZCwgIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcydcbmltcG9ydCB7IHdlbGNvbWVGb3JtLCBwcmludEJvYXJkLCB3ZWxjb21lRm9ybURPTSwgc2hpcEJ0bkhhbmRsZXIsIHJlbW92ZVNoaXBCdG5zLCBwcmludFNoaXBTdGF0cyAsIHByaW50U3RhdHMsIHBsYXllclNoaXBPdmVybGF5IH0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcydcbmltcG9ydCB7IHBsYWNlU2hpcCwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbUF0dGFjaywgdGFyZ2V0ZWRBdHRhY2ssIGxhc3RIaXQsIHN0b3JlZEhpdCAsIHRhcmdldENvbCwgdGFyZ2V0Um93LCBzYXZlZFJvdywgc2F2ZWRDb2wgfSBmcm9tICcuL21vZHVsZXMvY29tcHV0ZXIuanMnXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcyc7XG5cblxuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBjb21wdXRlcjtcblxuLy93ZWxjb21lIGZvcm1cbmV4cG9ydCBsZXQgYm9hcmRTaXplO1xuY29uc3QgbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcblxuXG4oZnVuY3Rpb24gd2VsY29tZUZvcm0gKCl7XG4gICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUnKTtcbiAgICAgICAgXG4gICAgICAgIHdlbGNvbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIgKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBib2FyZFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLnZhbHVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBwbGF5ZXJzXG4gICAgICAgICAgICBwbGF5ZXIxID0gbmV3IGh1bWFuUGxheWVyKCdBbmRyZXcnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyID0gbmV3IGNvbXBQbGF5ZXIoJ2NvbXB1dGVyJywgJ2Vhc3knKTtcbiAgICAgICAgICAgIC8vcGxhY2UgY29tcHV0ZXIgc2hpcHNcbiAgICAgICAgICAgIHBsYWNlQ29tcHV0ZXIoY29tcHV0ZXIpO1xuICAgICAgICAgICAgLy9wcmludCBib2FyZHNcbiAgICAgICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgICAgIHdlbGNvbWVGb3JtRE9NKCk7XG4gICAgfSlcbn0pKCk7XG5cbi8vcGxhY2UgdXNlciBzaGlwcyByYW5kb21seVxuZnVuY3Rpb24gcGxhY2VDb21wdXRlciAodXNlcikge1xuICAgIHBsYWNlU2hpcCAoJ0NhcnJpZXInLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdCYXR0bGVzaGlwJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnRGVzdHJveWVyJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnU3VibWFyaW5lJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnUGF0cm9sIEJvYXQnLCB1c2VyKTtcbn07XG4vL1BsYWNlIHBsYXllciBzaGlwcyByYW5kb21seSBvbiBidXR0b24gcHVzaFxuKGZ1bmN0aW9uIHJhbmRvbVNldFBsYXllciAoKXtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcGxhY2VDb21wdXRlcihwbGF5ZXIxKTtcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHBsYXllclNoaXBPdmVybGF5KCk7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBidXR0b25zXG4gICAgICAgIHJhbmRvbUJ0bi5yZW1vdmUoKTtcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMgKCk7XG4gICAgfSlcblxufSkoKTtcblxuLy9wbGF5ZXIgcGxhY2Ugc2hpcHMgb24gYm9hcmRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lciAoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFJvdycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRpdGxlJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uJykudmFsdWU7XG4gICAgICAgIHBsYXllcjEuZ2IucGxhY2VOZXdTaGlwKHNoaXBUeXBlLCByb3csIGNvbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHBsYXllclNoaXBPdmVybGF5KCk7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy9yZW1vdmUgYWxsIGJ1dHRvbnMgaWYgYWxsIGZpdmUgc2hpcHMgcGxhY2VkXG4gICAgICAgIHJlbW92ZVNoaXBCdG5zKCk7XG4gICAgICAgIHJhbmRvbUJ0bi5yZW1vdmUoKVxuICAgIH0pfSlcblxuXG4vL2xpc3RlbiBmb3IgcGxheWVyIHR1cm5cbmxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAxJyk7XG5sZXQgY29tcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItcDInKTtcblxuLy9MaXN0ZW4gZm9yIHBsYXllciBjbGljayBvbiBjb21wdXRlciBib2FyZCB0byBsb2cgYXR0YWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgY29tcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoKT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciBtb3ZlcycpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnQ2FycmllcicsICdDJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnQmF0dGxlc2hpcCcsICdCJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnRGVzdHJveWVyJywgJ0QnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdTdWJtYXJpbmUnLCAnUycsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ1BhdHJvbCBCb2F0JywgJ1AnLCAnY29tJyk7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgfSlcblxufVxuKTtcbi8vTGlzdGVuIGZvciBjb21wdXRlciBib2FyZCBjbGljayBieSBwbGF5ZXIsIGhhbmRsZXIgaXMgY29tcHV0ZXIgYXR0YWNrXG5jb21wQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIGZ1bmN0aW9uIFJhbmRvbU1vdmUgKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gUmFuZG9tTW92ZSAoKXtcbiAgICAgICAgXG4gICAgICAgIC8vTGV2ZWwgZWFzeSAtIGNvbXB1dGVyIGFsd2F5cyByYW5kb21seSBhdHRhY2tzIHBsYXllciAxXG4gICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gJ2Vhc3knKXtcbiAgICAgICAgICAgIHJhbmRvbUF0dGFjayhwbGF5ZXIxKTtcbiAgICAgICAgICAgIHBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjayhyYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vTGV2ZWwgbWVkaXVtIC0gY29tcHV0ZXIgd2lsbCBjaGVjayBhZGphY2VudCBzcGFjZXNcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmFuZG9tUm93ICR7cmFuZG9tUm93fSByYW5kb21Db2wgJHtyYW5kb21Db2x9YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzYXZlZFJvdyAke3NhdmVkUm93fSBzYXZlZENvbCAke3NhdmVkQ29sfSBgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHRhcmdldGRSb3cgJHt0YXJnZXRSb3d9IHRhcmdldENvbCAke3RhcmdldENvbH0gYClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFyZ2V0ZWRBdHRhY2socGxheWVyMSk7XG4gICAgICAgICAgICBsYXN0SGl0KHBsYXllcjEsIHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgICAgIHBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjayhyYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vcHJpbnQgcGxheWVyIHNoaXAgc3RhdHNcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnQ2FycmllcicsICdDJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0JhdHRsZXNoaXAnLCAnQicsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdEZXN0cm95ZXInLCAnRCcsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdTdWJtYXJpbmUnLCAnUycsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdQYXRyb2wgQm9hdCcsICdQJywgJ3AxJyk7XG4gICAgICAgIC8vcHJpbnQgcGxheWVyIGJvYWRcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHBsYXllclNoaXBPdmVybGF5KCk7XG4gICAgICAgIC8vRGlzcGxheXMgZm9ybSBwYWNlbWVudCB1cG9uIGJ0biBwcmVzc1xuICAgICAgICBzaGlwQnRuSGFuZGxlcignLnAxJywgJ3AxJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY29tcHV0ZXIgbW92ZXMnKTtcbiAgICB9LCAxMDAwKTtcbn0pO1xuXG5zaGlwQnRuSGFuZGxlcigpO1xuXG4vL2NvbnNvbGUubG9nKGNvbXB1dGVyLmdiLnNoaXBzKTtcblxuLypcbmNvbnNvbGUubG9nKGJvYXJkVGVzdFswXVswXS52YWx1ZSk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0uYyk7XG5jb25zb2xlLmxvZyhib2FyZFRlc3RbM11bNF0ucik7XG4qL1xuLy9hdHRhY2tzXG4vKlxucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDAsIDEpO1xucGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKDEsIDApO1xuXG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDAsIDApO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjayg2LCA0KTtcblxuLy9ob3cgdG8gcHJpbnQgc2hpcHNcbmNvbnNvbGUubG9nKGJvYXJkVGVzdCk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzKTtcbmNvbnNvbGUubG9nKHBsYXllcjEuZ2Iuc2hpcHNbMF0pO1xuKi9cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4uL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGFycmF5U2hpcHMgfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuXG4vL1V0aWxpdHkgZnVuY3Rpb24sIHJhbmRvbSByb3cvY29sXG5jb25zdCByYW5kb21OdW0gPSB7XG4gICAgZ2V0IHZhbHVlICgpe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICB9XG59O1xuLy9VdGlsaXR5IGZ1bmN0aW9uLCByYW5kb20gZGlyZWN0aW9uXG5mdW5jdGlvbiByYW5kb21EaXIgKCl7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCl7IHJldHVybiAnVXAnIH0gXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSl7IHJldHVybiAnRG93bicgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDIpeyByZXR1cm4gJ1JpZ2h0JyB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMyl7IHJldHVybiAnTGVmdCcgfVxufTtcblxuXG4vL1JhbmRvbWx5IHBsYWNlIHNoaXBcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXAgKHNoaXAsIGNwdSkge1xuICAgIGZ1bmN0aW9uIHRyeUFnYWluICgpe1xuICAgICAgbGV0IGxlbmd0aCA9IGNwdS5nYi5zaGlwcy5sZW5ndGg7XG4gICAgICBjcHUuZ2IucGxhY2VOZXdTaGlwKHNoaXAsIHJhbmRvbU51bS52YWx1ZSwgcmFuZG9tTnVtLnZhbHVlLCByYW5kb21EaXIgKCkpO1xuICAgICAgLy9pZiB0aGUgc2hpcCBmYWlscyB0byBwbGFjZSBvbiB0aGUgYm9hcmQgcnVuIGFnYWluXG4gICAgICBpZiAoY3B1LmdiLnNoaXBzLmxlbmd0aCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICB0cnlBZ2FpbigpO1xuICAgICAgfTtcbiAgIH1cbiAgIHRyeUFnYWluKCk7XG59O1xuXG4vL0NvbXB1dGVyIGF0dGFjayByYW5kb20gbW92ZVxuZXhwb3J0IGxldCByYW5kb21Sb3c7XG5leHBvcnQgbGV0IHJhbmRvbUNvbDtcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BdHRhY2sgKHVzZXIpe1xuICAgIGNvbnNvbGUubG9nKCdyYW5kb21BdHRhY2sgZm4nKVxuICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICBpZiAodXNlci5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21BdHRhY2sodXNlcik7XG4gICAgfTtcbn1cblxuICAvL3V0aWxpdHkgZnVuY3Rpb24gJiB2YXJpYWJsZXMgdG8gc3RvcmUgbGFzdCBoaXRcbiAgZXhwb3J0IGxldCB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICBleHBvcnQgZnVuY3Rpb24gbGFzdEhpdCAoZW5lbXksIHJvdywgY29sKXtcbiAgICBpZiAoZW5lbXkuZ2IuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQycgfHwgXG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0InIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1AnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBsYXN0aGl0IGZuIC0gc3RvcmUgaGl0Jyk7XG5cbiAgICAgICAgICB0YXJnZXRSb3cgPSByb3c7XG4gICAgICAgICAgdGFyZ2V0Q29sID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0aGl0IGZuIC0gbm8gZGF0YSBmb3IgaGl0Jyl9XG4gIH07XG5cbiAgZXhwb3J0IGxldCBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZEhpdCAocm93LCBjb2wpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFJvdyA9PT0gJ251bWJlcicpe1xuICAgICAgICBzYXZlZFJvdyA9IHJvdztcbiAgICAgICAgc2F2ZWRDb2wgPSBjb2w7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkUm93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIC8vdXRpbGl0eSBmbiAtIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm4gZ28gdG8gcmFuZG9tIGF0dGFja1xuICBsZXQgbGFzdENvdW50ID0gMDtcbiAgZnVuY3Rpb24gcG9zdFN1bmtBdHQgKGVuZW15KSB7XG4gICAgbGV0IGNhclN1bmsgPSBlbmVteS5nYi5zaGlwc1swXS5pc1N1bmsoKTtcbiAgICBsZXQgYmF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzFdLmlzU3VuaygpO1xuICAgIGxldCBkaXNTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgbGV0IHN1YlN1bmsgPSBlbmVteS5nYi5zaGlwc1szXS5pc1N1bmsoKTtcbiAgICBsZXQgcGF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzRdLmlzU3VuaygpO1xuICAgIGxldCBzaGlwcyA9IFtjYXJTdW5rLCBiYXRTdW5rLCBkaXNTdW5rLCBzdWJTdW5rLCBwYXRTdW5rXTtcbiAgICBsZXQgY291bnRUcnVlID0gc2hpcHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGhcblxuICAgIGlmIChsYXN0Q291bnQgPCBjb3VudFRydWUpIHsgXG4gICAgICAgICsrbGFzdENvdW50XG4gICAgICAgIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJhbmRvbUF0dGFjayAoZW5lbXkpO1xuICAgIH07XG59O1xuXG4vL3V0aWxpdHkgZm4gLSBjaGVjayBzcGFjZSBhZGphY2VudCB0byBhdHRhY2sgZm9yIG5leHQgYXR0YWNrXG5mdW5jdGlvbiBhZGphY2VudCAoZW5lbXksIHJvdywgY29sKSB7XG4gICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgfVxufTtcblxuICAvL3Bvc3NpYmxlIGFkamFjZW50IG1vdmVzIGZyb20gYSBoaXRcbiAgbGV0IHJvd1BsdXM7XG4gIGxldCByb3dNaW51cztcbiAgbGV0IGNvbFBsdXM7XG4gIGxldCBjb2xNaW51cztcblxuICBleHBvcnQgZnVuY3Rpb24gdGFyZ2V0ZWRBdHRhY2sgKGVuZW15KXtcbiAgIFxuICAgIC8vZmlyc3QgbW92ZVxuICAgIGlmIChyYW5kb21Sb3cgID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayAoZW5lbXkpICBcbiAgICB9O1xuICAgIC8vY2hlY2sgaWYgYSBzaGlwIHdhcyBzdW5rIGxhc3QgdHVyblxuICAgIHBvc3RTdW5rQXR0KGVuZW15KTtcblxuICAgIC8vSWYgbGFzdCBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICApIHtcbiAgICAgICAgXG4gICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgcm93TWludXMgPSByYW5kb21Sb3cgLTE7XG4gICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgIFxuICAgICAgICAvL2lmIHRoZXJlIGlzIG5vdCBhIHNhdmVkIGhpdCBjaGVjayBlYWNoIG9mIHRoZSBhZGphY2VudCBzcG90c1xuICAgICAgICBpZiAoc2F2ZWRSb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgIHN0b3JlZEhpdCh0YXJnZXRSb3csIHRhcmdldENvbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xQbHVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgIH07XG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIHR3byBoaXRzIGNoZWNrIHRvIHNlZSBpZiBhZGphY2VudCBzcG90IG9uIHRoZSBjby9yb3cgaXMgb3BlblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcm93VmFsID0gTWF0aC5hYnMocmFuZG9tUm93IC0gc2F2ZWRSb3cpO1xuICAgICAgICAgICAgbGV0IGNvbFZhbCA9IE1hdGguYWJzKHJhbmRvbUNvbC0gc2F2ZWRDb2wpO1xuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlZCBhbmQgcmFuZG9tIHZhbHVlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3dWYWwgPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGljayByb3dzJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDFiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMmInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sVmFsID4gMCl7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDNiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDRiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL2lmIHRoZXJlIGlzIGEgc3RvcmVkIGhpdCBhbmQgbGFzdCBtb3ZlIGlzIGEgbWlzcyByZXJ1biBhZGphY2VudCBjaGVja3NcbiAgICBpZiAoIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdYJykgJiYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQgYXR0IC0gbWlzcywgZ28gYmFjayB0byBsYXN0IGhpdCcpO1xuXG4gICAgICAgICAgICByYW5kb21Sb3cgPSB0YXJnZXRSb3c7XG4gICAgICAgICAgICByYW5kb21Db2wgPSB0YXJnZXRDb2w7XG5cbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIGRlZmF1bHQgcmFuZG9tICcpXG4gIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICByYW5kb21BdHRhY2sgKGVuZW15KTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBjb21wdXRlciwgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbi8vRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eSBmb3Igc3VibWl0IG9uIHdlbGNvbWUgZm9ybVxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVGb3JtRE9NICgpe1xuICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUnKTtcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHNjcmVlbicpO1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5wYWdlJyk7ICAgIFxuICAgIC8vcHJpbnQgcGxheWVyIG5hbWVcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAvL3JlbW92ZSBzdGFydCBzY3JlZW4gYW5kIHdlbGNvbWUgZm9ybVxuICAgIHdlbGNvbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL3JldmVhbCB0aGUgbWFpbiBwYWdlXG4gICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWFpblBhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBcbn07XG5cbmV4cG9ydCBsZXQgYXJyYXlTaGlwcyA9IFtdO1xuXG4vL3ByaW50IHBsYXllci8gY29tcHV0ZXIgZ2FtZWJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCb2FyZCAoYm9hcmQsIGNvbnRhaW5lciwgcGxheWVyKXtcbiAgICBsZXQgZ2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgIGxldCBzaGlwUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKTtcbiAgICBsZXQgc2hpcENvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQ29sJyk7XG5cbiAgICAvL2R5bmFtaWNhbGx5IHNldCB0aGUgbWF4IHJvdy9jb2wgc2l6ZSBvbiBwbGFjZW1lbnQgZm9ybVxuICAgIHNoaXBSb3cubWF4ID0gYm9hcmRTaXplO1xuICAgIHNoaXBDb2wubWF4ID0gYm9hcmRTaXplO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIGdyaWQgc2l6ZVxuICAgIGdiLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XG4gICAgZ2Iuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcblxuICAgIC8vcHJpbnQgZWFjaCBjZWxsIHdpdGggdmFsdWVzXG4gICAgZ2IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpe1xuICAgICAgICBmb3IobGV0IGNlbGwgb2Ygcm93KXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0MtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQi1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnRC1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0QtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1MtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdTLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1AtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdYJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQycgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnQicgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnRCcgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnUycgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnUCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9hdCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnJvdyA9IGNlbGwucjtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5jb2wgPSBjZWxsLmM7XG4gICAgICAgICAgICAvL2hvdmVyIHRvIHJldmVhbCBzcGFjZSBkYXRhc2V0XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LnJvdyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7cm93fSwgJHtjb2x9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2hvdmVyIG91dFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY2xpY2sgYm9hcmQgdG8gYXR0YWNrXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICAgICAgLy9yZWNvcmQgYXR0YWNrXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgcGxheWVyIHdpbnMgZ2FtZVxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBnYi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcnJheVNoaXBzID0gcGxheWVyLnNoaXBzO1xufVxuXG4vL0NyZWF0ZXMgb3ZlcmxheSBvZiBzaGlwIG9udG8gYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkU2hpcHMgKHByZWZpeCwgdGFyZ2V0Qm9hcmQpeyBcbiAgICAvL2NhbGwgbWluL21heCBvdXRzaWRlIHRoZSBwb3NzaWJlIHJhbmdlXG4gICAgbGV0IG1pbkdyaWRSb3cgPSAxMDAwO1xuICAgIGxldCBtYXhHcmlkUm93ID0gLTEwMDA7XG5cbiAgICBsZXQgbWluR3JpZENvbCA9IDEwMDA7XG4gICAgbGV0IG1heEdyaWRDb2wgPSAtMTAwMDtcbiAgICBcbiAgICAvL3JldHVybiB0aGUgbWF4L21pbiByb3cvY29sIGZvciBzaGlwIGxvY2F0aW9uXG4gICAgY29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhcmdldEJvYXJkfS4ke3ByZWZpeH0sIC4ke3RhcmdldEJvYXJkfS4ke3ByZWZpeH0tSElUYCk7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHRhcmdldHMubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKHRhcmdldHMpO1xuICAgIC8vISFDSEFOR0UgY2xhc3MgbmFtZS0gcmVtb3ZlICEgYW5kIGNoYW5nZSB0byAnSGl0JylcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50R3JpZFJvdyA9IHRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93IDwgbWluR3JpZFJvdykge1xuICAgICAgICAgICAgbWluR3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRSb3cgPiBtYXhHcmlkUm93KSB7XG4gICAgICAgICAgICBtYXhHcmlkUm93ID0gcGFyc2VJbnQoY3VycmVudEdyaWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50R3JpZENvbCA9IHRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sIDwgbWluR3JpZENvbCkge1xuICAgICAgICAgICAgbWluR3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRDb2wgPiBtYXhHcmlkQ29sKSB7XG4gICAgICAgICAgICBtYXhHcmlkQ29sID0gcGFyc2VJbnQoY3VycmVudEdyaWRDb2wpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbilcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRCb2FyZCk7XG5sZXQgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBPdmVybGF5LmlkID0gKGBvdmVybGF5LSR7cHJlZml4fWApO1xuXG4vL2lmIG5vIHZhbHVlcyBkbyBub3Qgb3ZlcmxheSAtIHVzZWQgZm9yIHBsYXllciBwbGFjZW1lbnRcbmlmIChtaW5HcmlkUm93ID09PSAxMDAwKXtyZXR1cm59O1xuLy9BZGQgMSB0byBhbGwgZm9yIGNvbnZlcnNpb24gZnJvbSBzcXVhcmVzIHRvIGdyaWQgbGluZXNcbi8vQWRkIDIgdG8gYW55IHNpbmdsZSBsZW5ndGggb3JpZW50YXRpb25cbi8vdmVydGljYWxcbmlmIChtaW5HcmlkQ29sID09PSBtYXhHcmlkQ29sKXtcbiAgICBsZXQgcm93RW5kID0gbWluR3JpZFJvdyArIHNoaXBMZW5ndGggKyAxO1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoYHZlcnQtb3ZlcmxheS0ke3ByZWZpeH1gKTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBtaW5HcmlkQ29sICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gbWluR3JpZENvbCArIDI7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IHJvd0VuZDtcbi8vaG9yaXpvbnRhbFxufSBlbHNlIHtcbiAgICBsZXQgY29sRW5kID0gIG1pbkdyaWRDb2wgKyBzaGlwTGVuZ3RoICsgMTtcbiAgICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBob3J6LW92ZXJsYXktJHtwcmVmaXh9YCk7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IG1pbkdyaWRSb3cgKyAyO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IG1pbkdyaWRDb2wgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBjb2xFbmQ7XG59XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xufTtcbi8vZnVuY3Rpb24gdG8gb3ZlcmxheSBhbGwgcGxheWVyIHNoaXBzXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyU2hpcE92ZXJsYXkgKCl7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdQJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQicsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0QnLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdTJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQycsICdjb250YWluZXItcDEnKTtcbn1cblxuXG4vL1NoaXAgYnV0dG9ucyBoYW5kZXIgdG8gZGlzcGxheSBmb3JtIHdpdGggY29ycmVjdCB0aXRsZVxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBCdG5IYW5kbGVyICgpe1xuICAgIGNvbnN0IHNoaXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAxJyk7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBcbiAgICBzaGlwQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGxldCBkYXRhU2hpcFR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtdHlwZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IGRhdGFTaGlwVHlwZTtcblxuICAgICAgICAgICAgLy9pZiBzaGlwIGhhcyBiZWVuIHBsYWNlZFxuICAgICAgICAgICAgaWYgKGFycmF5U2hpcHMuc29tZShzaGlwID0+IHNoaXAudHlwZSA9PT0gZGF0YVNoaXBUeXBlKSl7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn19KX0pfVxuXG4vL2lmIGFsbCBzaGlwcyBwbGFjZWQgcmVtb3ZlIGJ1dHRvbnNcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaGlwQnRucyAoKSB7XG4gICAgaWYgKGFycmF5U2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgbGV0IHNoaXBCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBCdXR0b25zJyk7XG4gICAgICAgIHNoaXBCdG5zLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U3RhdHMgKHBsYXllciwgc2hpcCwgc3VmZml4LCBwcmVmaXgpIHtcbiAgICAvL3NoaXAgZGF0YVxuICAgIGNvbnN0IGZsZWV0ID0gcGxheWVyLmdiLnNoaXBzO1xuICAgIGNvbnN0IHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LnR5cGUgPT09IHNoaXApO1xuICAgIGNvbnNvbGUubG9nKGZsZWV0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzU2hpcC5sZW5ndGg7XG4gICAgY29uc3QgZGFtYWdlID0gdGhpc1NoaXAuZGFtYWdlO1xuICAgIC8vY29udGFpbmVycyBmb3IgbGlmZS1kYW1hZ2VcbiAgICBjb25zdCBkYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctc3RhdC0nICsgc3VmZml4KTtcbiAgICAvL3ByZXZlbnQgcmVwcmludGluZyBwcmlvciBkYXRhXG4gICAgc3RhdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvL3ByaW50IGRhbWFnZSBhbmQgbGlmZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGFtYWdlOyBqKyspe1xuICAgICAgICBsZXQgZGFtYWdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYW1hZ2VkLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQoZGFtYWdlZCk7XG4gICAgfSAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW5ndGggLSBkYW1hZ2UpOyBpKyspe1xuICAgICAgICBsZXQgbGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWZlLmNsYXNzTGlzdC5hZGQoJ2xpZmUnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQobGlmZSk7XG4gICAgfVxufTsiLCIvL2NvbnN0IHNoaXAgPSByZXF1aXJlICgnLi9zaGlwLmpzJylcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuLy90byBhY2Nlc3Mgc3F1YXJlIG9uIGJvYXJkIHVzIG1lIGJvYXJkLmJvYXJkW3JdW2NdXG5cbi8vdXRpbGl0eTogY29udmVydHMgY29sdW1uIGxldHRlciB0byBudW1iZXIgZm9yIGxvb2tVcFxuZnVuY3Rpb24gY29sQ29udmVydCAobGV0dGVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheShib2FyZFNpemUpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBjb25zdCBpdGVtID0gKGVsKSA9PiBlbCA9PT0gbGV0dGVyO1xuICAgICAgICBjb25zdCBudW0gPSBhbHBoYWJldC5maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgIHJldHVybiBudW1cbn07XG4vL3V0aWxpdHk6IGJvYXJkIGFzIHZhcmlhYmxlbmFtZS5ib2FyZCwgb25seSB3b3JrcyBmb3IgZmlyc3Qgcm93XG5leHBvcnQgZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHJvdywgY29sKXtcbiAgICAgICAgaWYgKChyb3cgPCAwICkgfHwgKHJvdyA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKChjb2wgPCAwICkgfHwgKGNvbCA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnWCcgfHwgXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhbGlkJ31cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgciwgYywgZGlyKSB7XG4gICAgICAgIGxldCByb3cgPSByO1xuICAgICAgICBsZXQgY29sID0gYztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcblxuICAgICAgICBpZiAoZGlyID09PSAnRG93bicpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoci0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93ICsgaSkgPCAocm93ICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuYm9hcmRbcm93KytdW2NdKS52YWx1ZSAhPT0gMCkge3Rocm93IG5ldyBFcnJvcignTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAuJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdVcCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChyIC0gKG5ld1NoaXAubGVuZ3RoLTEpIDwgMCkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93IC0gaSkgPiAocm93IC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ctLV1bY10udmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ1JpZ2h0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKChjLTEpICsgbmV3U2hpcC5sZW5ndGggPiAoYm9hcmRTaXplLTEpKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjb2wgKyBpKSA8IChjb2wgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbCsrXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyArIGkpIDwgKGMgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYysrXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdMZWZ0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgLSAobmV3U2hpcC5sZW5ndGggKyAxKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IgKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIil9XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sIC0gaSkgPiAoY29sIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY29sLS1dLnZhbHVlICE9PSAwKXt0aHJvdyBuZXcgRXJyb3IgKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sgKHIsIGMpIHtcbiAgICAgICAgbGV0IGZsZWV0ID0gdGhpcy5zaGlwcztcbiAgICAgICAgbGV0IHRoaXNTaGlwO1xuICAgICAgICAvL2lmIGFscmVhZHkgbWlzcyByZWNvcmQgYW5vdGhlciBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnWCcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB3YXRlciByZWNvcmQgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBjYXJyaWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdDJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0MnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBiYXR0ZXNoaXAgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0InKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnQicpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGRlc3RvcnllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnRCcpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdEJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgc3VibWFyaW5lIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdTJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ1MnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBwYXRyb2wgYm9hdCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUCcpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdQJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZWNvcmQgaGl0IHRvIGJvYXJkXG4gICAgICAgIGxldCBzaGlwSGl0ID0gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSBgJHtzaGlwSGl0fS1ISVRgO1xuICAgIH1cbiAgICBjaGVja1N1bmsgKCl7XG4gICAgICAgIGxldCBzdGF0dXMgPSBbXTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1swXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMV0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzJdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1szXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbNF0uaXNTdW5rKCkpO1xuICAgICAgICByZXR1cm4gc3RhdHVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbSA9PT0gdHJ1ZSlcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4uL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5cblxuZXhwb3J0IGNsYXNzIGh1bWFuUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLndpbnMgPSAwO1xuICAgICAgICB0aGlzLmxvc3NlcyA9IDA7XG4gICAgICAgIHRoaXMuc3RyZWFrID0gMDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoYm9hcmRTaXplLGJvYXJkU2l6ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgY29tcFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGxldmVsKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBnYW1lYm9hcmQoYm9hcmRTaXplLCBib2FyZFNpemUpO1xuICAgIH1cbn1cbi8qXG5tb2R1bGUuZXhwb3J0cyA9IGh1bWFuUGxheWVyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBQbGF5ZXJcbiovIiwiZXhwb3J0IGNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnQ2Fycmllcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdDJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnQmF0dGxlc2hpcCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSA0O1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdCJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnRGVzdHJveWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0QnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdTdWJtYXJpbmUnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1BhdHJvbCBCb2F0Jyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1AnO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5kYW1hZ2UrKztcbiAgICB9XG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiBmYWxzZSB9XG4gICAgfVxufTtcblxuLy9leHBvcnQgZGVmYXVsdCBzaGlwXG4vL21vZHVsZS5leHBvcnRzID0gc2hpcFxuXG4iXSwibmFtZXMiOlsiZ2FtZWJvYXJkIiwic2hpcCIsImh1bWFuUGxheWVyIiwiY29tcFBsYXllciIsIndlbGNvbWVGb3JtIiwicHJpbnRCb2FyZCIsIndlbGNvbWVGb3JtRE9NIiwic2hpcEJ0bkhhbmRsZXIiLCJyZW1vdmVTaGlwQnRucyIsInByaW50U2hpcFN0YXRzIiwicHJpbnRTdGF0cyIsInBsYXllclNoaXBPdmVybGF5IiwicGxhY2VTaGlwIiwicmFuZG9tUm93IiwicmFuZG9tQ29sIiwicmFuZG9tQXR0YWNrIiwidGFyZ2V0ZWRBdHRhY2siLCJsYXN0SGl0Iiwic3RvcmVkSGl0IiwidGFyZ2V0Q29sIiwidGFyZ2V0Um93Iiwic2F2ZWRSb3ciLCJzYXZlZENvbCIsInBsYXllcjEiLCJjb21wdXRlciIsImJvYXJkU2l6ZSIsImxldmVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJwbGFjZUNvbXB1dGVyIiwiZ2IiLCJib2FyZCIsInVzZXIiLCJyYW5kb21TZXRQbGF5ZXIiLCJyYW5kb21CdG4iLCJyZW1vdmUiLCJmb3JtIiwicm93IiwiY29sIiwic2hpcFR5cGUiLCJpbm5lclRleHQiLCJkaXJlY3Rpb24iLCJwbGFjZU5ld1NoaXAiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGF5ZXJDb250YWluZXIiLCJjb21wQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsIlJhbmRvbU1vdmUiLCJzZXRUaW1lb3V0IiwicmVjZWl2ZUF0dGFjayIsImNvbmNhdCIsImFycmF5U2hpcHMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21EaXIiLCJjcHUiLCJ0cnlBZ2FpbiIsImxlbmd0aCIsInNoaXBzIiwiY2hlY2tPcGVuQm9hcmQiLCJ1bmRlZmluZWQiLCJlbmVteSIsImxhc3RDb3VudCIsInBvc3RTdW5rQXR0IiwiY2FyU3VuayIsImlzU3VuayIsImJhdFN1bmsiLCJkaXNTdW5rIiwic3ViU3VuayIsInBhdFN1bmsiLCJjb3VudFRydWUiLCJmaWx0ZXIiLCJhZGphY2VudCIsInJvd1BsdXMiLCJyb3dNaW51cyIsImNvbFBsdXMiLCJjb2xNaW51cyIsInJvd1ZhbCIsImFicyIsImNvbFZhbCIsInN0YXJ0U2NyZWVuIiwibWFpblBhZ2UiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250YWluZXIiLCJwbGF5ZXIiLCJzaGlwUm93Iiwic2hpcENvbCIsIm1heCIsImdyaWRUZW1wbGF0ZVJvd3MiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiaW5uZXJIVE1MIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfbG9vcCIsImNlbGwiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJyIiwiYyIsIk51bWJlciIsImNoZWNrU3VuayIsImFsZXJ0IiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsInByaW50Qm9hcmRTaGlwcyIsInByZWZpeCIsInRhcmdldEJvYXJkIiwibWluR3JpZFJvdyIsIm1heEdyaWRSb3ciLCJtaW5HcmlkQ29sIiwibWF4R3JpZENvbCIsInRhcmdldHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hpcExlbmd0aCIsImZvckVhY2giLCJ0YXJnZXQiLCJjdXJyZW50R3JpZFJvdyIsInBhcnNlSW50IiwiY3VycmVudEdyaWRDb2wiLCJzaGlwT3ZlcmxheSIsImlkIiwicm93RW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsImdyaWRSb3dTdGFydCIsImdyaWRSb3dFbmQiLCJjb2xFbmQiLCJzaGlwQnV0dG9ucyIsInBsYWNlbWVudCIsImZvcm1UaXRsZSIsImJ0biIsImRhdGFTaGlwVHlwZSIsImdldEF0dHJpYnV0ZSIsInNvbWUiLCJ0eXBlIiwic2hpcEJ0bnMiLCJzdWZmaXgiLCJmbGVldCIsInRoaXNTaGlwIiwiZmluZCIsImRhbWFnZSIsImRhbURpdiIsInN0YXRzRGl2IiwiaiIsImRhbWFnZWQiLCJpIiwibGlmZSIsImNvbENvbnZlcnQiLCJsZXR0ZXIiLCJhbHBoYWJldCIsIl90b0NvbnN1bWFibGVBcnJheSIsIkFycmF5IiwibWFwIiwiXyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIml0ZW0iLCJlbCIsIm51bSIsImZpbmRJbmRleCIsImxvb2tVcCIsIkxldCIsIk51bSIsImFycmF5IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlQm9hcmQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnYW1lQm9hcmQiLCJyb3dzIiwicHVzaCIsImRpciIsIm5ld1NoaXAiLCJFcnJvciIsImVycm9yIiwibWVzc2FnZSIsImluZGV4IiwiaW5kZXhPZiIsImhpdCIsInNoaXBIaXQiLCJzdGF0dXMiLCJldmVyeSIsIndpbnMiLCJsb3NzZXMiLCJzdHJlYWsiLCJzdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==