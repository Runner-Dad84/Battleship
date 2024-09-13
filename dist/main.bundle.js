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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --deployButtons: rgb(148, 128, 90);
}

/*Ship pacement buttons */
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
    background-color: var(--deployButtons);
    height: 2.5em;
    width: 14em;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
}
/*ship placement form*/
#placement {
    position: fixed;
    left: 70%;
    top: 10%;

    width: 10vw;
    gap: .2em;
    background-color: cadetblue;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    padding: 2%;
}
#placement select {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    font-weight: bolder;
    height: 2.5vh;
    width: 4em;
    background-color: white;
}
#placement .formInput {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bolder;
}
#placeBtn {
    width: 13em;
    height: 2.5em;
    background-color: var(--deployButtons);
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
}
#placeBtn:hover {
        color: white;
        font-weight: 1000;
}
#pacement input {
    background-color: rgb(103, 103, 230);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/buttons.style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;AAEA,yBAAyB;AACzB;IACI,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,WAAW;IACX,8CAA8C;IAC9C,mBAAmB;AACvB;AACA,sBAAsB;AACtB;IACI,eAAe;IACf,SAAS;IACT,QAAQ;;IAER,WAAW;IACX,SAAS;IACT,2BAA2B;IAC3B,8CAA8C;IAC9C,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,8CAA8C;IAC9C,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,sCAAsC;IACtC,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;QACQ,YAAY;QACZ,iBAAiB;AACzB;AACA;IACI,oCAAoC;AACxC;;;;;AAKA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[":root {\n    --deployButtons: rgb(148, 128, 90);\n}\n\n/*Ship pacement buttons */\n.p1 {\n    background-color: cadetblue;\n    height: 2.5em;\n    width: 8em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n.p1.deployedShip {\n    background-color: gray;\n    color: white;\n    border: 3px bold black;\n}\n#random {\n    background-color: var(--deployButtons);\n    height: 2.5em;\n    width: 14em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n/*ship placement form*/\n#placement {\n    position: fixed;\n    left: 70%;\n    top: 10%;\n\n    width: 10vw;\n    gap: .2em;\n    background-color: cadetblue;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n    padding: 2%;\n}\n#placement select {\n    font-family: 'Courier New', Courier, monospace;\n    color: black;\n    font-weight: bolder;\n    height: 2.5vh;\n    width: 4em;\n    background-color: white;\n}\n#placement .formInput {\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bolder;\n}\n#placeBtn {\n    width: 13em;\n    height: 2.5em;\n    background-color: var(--deployButtons);\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n#placeBtn:hover {\n        color: white;\n        font-weight: 1000;\n}\n#pacement input {\n    background-color: rgb(103, 103, 230);\n}\n\n\n\n\n.p1:hover, #random:hover{\n    color: white;\n    font-weight: 1000;\n}\n#deployed-p1,\n#deployed-com {\n    display: none;\n    flex-direction: column;\n}\n#shipDamaged,\n#shipDamage-com {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/endgame.style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/endgame.style.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#winner,
#loser {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: lightgray;
    border-radius: 10%;
    position: fixed;
    top: 30%;
    left: 30%;
    height: 35vh;
    width: 35vw;
}
.resetBtn {
    font-size: 1em;
    border-radius: 10%;
    margin: .5em;
}
`, "",{"version":3,"sources":["webpack://./src/styles/endgame.style.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,WAAW;AACf;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["#winner,\n#loser {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    background-color: lightgray;\n    border-radius: 10%;\n    position: fixed;\n    top: 30%;\n    left: 30%;\n    height: 35vh;\n    width: 35vw;\n}\n.resetBtn {\n    font-size: 1em;\n    border-radius: 10%;\n    margin: .5em;\n}\n"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/miss.png */ "./src/images/miss.png"), __webpack_require__.b);
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
___CSS_LOADER_EXPORT___.push([module.id, `/*gameboard spaces*/
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
    user-select: none;
}
#container-p1 .boat,
#container-p2 .boat {
    background-color: none;
    color: transparent;
    user-select: none;
}
#container-p1 .miss,
#container-p2 .miss {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    color: transparent;
    user-select: none;
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
.horz-overlay-P {
    transform: rotate(-20deg);
    transform-origin: center;
}

.horz-overlay-P {
    transform: rotate(-20deg);
    transform-origin: center;
}
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

`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;;IAEI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;IAEI,yDAA2C;IAC3C,sBAAsB;AAC1B;AACA;;;;;;;;;;IAUI,yDAA0C;IAC1C,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;AACA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yDAAkD;IAClD,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;AACA;IACI;AACJ","sourcesContent":["/*gameboard spaces*/\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n#container-p1 .cell,\n#container-p2 .cell {\n    color: transparent;\n    user-select: none;\n}\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: none;\n    color: transparent;\n    user-select: none;\n}\n#container-p1 .miss,\n#container-p2 .miss {\n    background-image: url('../images/miss.png');\n    background-size: cover;\n}\n#container-p1 .C-HIT,\n#container-p1 .B-HIT,\n#container-p1 .D-HIT,\n#container-p1 .S-HIT,\n#container-p1 .P-HIT,\n#container-p2 .C-HIT,\n#container-p2 .B-HIT,\n#container-p2 .D-HIT,\n#container-p2 .S-HIT,\n#container-p2 .P-HIT {\n    background-image: url('../images/hit.png');\n    background-size: cover;\n    color: transparent;\n    user-select: none;\n}\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n.vert-overlay-C {\n    height: 100%\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/mainpage.style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/mainpage.style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f7f7fb%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f7f7fb%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Ocean-Board.jpg */ "./src/images/Ocean-Board.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --playerTrim: rgb(218, 164, 64);
    --computerTrim: rgb(111, 111, 231);
}
html body {
    height: 100%;
    padding: 0;
    margin: 0;
}
body #mainpage {
    height: 100vh;
    width: 100vw;
}
#comConsole {
    display: none;
    align-items: center;
    grid-template-columns: 4fr 1fr;
    background-color: var(--playerTrim);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
#p1Console {
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 1fr;
    background-color: var(--computerTrim);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    box-shadow: 5px 0 10px rgba(0, 0, 0, .5);
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
}
.shipStats {
    display:flex;
    flex-direction: column;
}
#shipButtons {
    justify-self: center;
}
.p1Ship,
.comShip {
    flex-basis: 5%;
    flex-grow: 1;
}
#playerName, #comName {
    color: white;
    position: fixed;
    font-size: 2em;
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: .075em solid black;
    padding: .12em;
    border-radius: .05em;
}
#playerName {
    top: -3%;
    background-color:var(--computerTrim);
}
#comName {
    top: -4%;
    background-color: var(--playerTrim);
}`, "",{"version":3,"sources":["webpack://./src/styles/mainpage.style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mCAAmC;IACnC,yDAAwrD;AAC5rD;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,qCAAqC;IACrC,yDAAwrD;IACxrD,wCAAwC;AAC5C;AACA;;IAEI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;AACA;;IAEI,cAAc;IACd,YAAY;AAChB;AACA;IACI,YAAY;IACZ,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,wEAAwE;IACxE,0BAA0B;IAC1B,cAAc;IACd,oBAAoB;AACxB;AACA;IACI,QAAQ;IACR,oCAAoC;AACxC;AACA;IACI,QAAQ;IACR,mCAAmC;AACvC","sourcesContent":[":root {\n    --playerTrim: rgb(218, 164, 64);\n    --computerTrim: rgb(111, 111, 231);\n}\nhtml body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n}\nbody #mainpage {\n    height: 100vh;\n    width: 100vw;\n}\n#comConsole {\n    display: none;\n    align-items: center;\n    grid-template-columns: 4fr 1fr;\n    background-color: var(--playerTrim);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f7f7fb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n#p1Console {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 4fr 1fr;\n    background-color: var(--computerTrim);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f7f7fb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n    box-shadow: 5px 0 10px rgba(0, 0, 0, .5);\n}\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    justify-self: center;\n    aspect-ratio: 1 / 1;\n    height:85vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n.shipStats {\n    display:flex;\n    flex-direction: column;\n}\n#shipButtons {\n    justify-self: center;\n}\n.p1Ship,\n.comShip {\n    flex-basis: 5%;\n    flex-grow: 1;\n}\n#playerName, #comName {\n    color: white;\n    position: fixed;\n    font-size: 2em;\n    font-weight: 600;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    border: .075em solid black;\n    padding: .12em;\n    border-radius: .05em;\n}\n#playerName {\n    top: -3%;\n    background-color:var(--computerTrim);\n}\n#comName {\n    top: -4%;\n    background-color: var(--playerTrim);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shipstats.style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shipstats.style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Ships stat displays*/
/*Outermost ship stat divs*/
.p1Ship, .comShip {
    height: 8vh;
    width: 11vw;
    margin: .45em;
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


`, "",{"version":3,"sources":["webpack://./src/styles/shipstats.style.css"],"names":[],"mappings":"AAAA,uBAAuB;AACvB,2BAA2B;AAC3B;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB,yDAA8C;AAClD;AACA;IACI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;IACxB;AACJ;AACA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;AACA,yCAAyC;AACzC;IACI,aAAa;IACb,6BAA6B;AACjC;AACA,gCAAgC;AAChC;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;AAChB;AACA;IACI,yDAA8C;IAC9C,oBAAoB;AACxB;AACA;IACI,yDAAiD;IACjD,qBAAqB;AACzB;AACA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;AACA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;AACA;IACI,yDAA6C;IAC7C,oBAAoB;AACxB","sourcesContent":["/* Ships stat displays*/\n/*Outermost ship stat divs*/\n.p1Ship, .comShip {\n    height: 8vh;\n    width: 11vw;\n    margin: .45em;\n    padding-left: 0.5em;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: .25em solid black;\n}\n.p1Ship {\n    background-color: rgb(3, 115, 167);\n}\n.comShip {\n    background-color: rgb(104, 81, 39);\n}\n.stats {\n    display: flex;\n}\n.life {\n    height: 2em;\n    width: 2em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/Anchor2.png');\n}\n.damaged {\n    height: 2.8em;\n    width: 2.8em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/hit.png')\n}\n.sunk {\n    background-color: rgb(139, 22, 22);\n    border: 3px solid orange;\n}\n/*Div contains life/damage for each ship*/\n#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {\n    display: flex;\n    justify-content: space-around;\n}\n/*Outer most div for ship stats*/\n#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {\n    text-align: center;\n    color: white;\n    font-weight: bolder;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 1em;\n}\n#p1-C, #com-C {\n    background-image: url('../images/carrier.png');\n    background-size: 75%;\n}\n#p1-B, #com-B {\n    background-image: url('../images/battleship.png');\n    background-size: 100%;\n}\n#p1-S, #com-S {\n    background-image: url('../images/submarine.png');\n    background-size: 100%;\n}\n#p1-D, #com-D {\n    background-image: url('../images/destroyer.png');\n    background-size: 100%;\n}\n#p1-P, #com-P {\n    background-image: url('../images/patrol.png');\n    background-size: 50%;\n}\n\n\n"],"sourceRoot":""}]);
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
    margin-top: 3em;
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
    display: flex;
    flex-direction: column;
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
#startBtn, #creditsBtn, #closeCreditsBtn {
    height: 5vh;
    margin-top: 2em;
    background-color: var(--welcomeTextColor);
    color: white;
    font-family: var(--welcomeFontFam);
    font-weight: 600;
    border: var(--btnInputBorder);
    border-radius: 5px;
}
/*credit screen*/
#creditScreen {
    display: none;
    position: fixed;
    z-index: 1001;
    height:100vh;
    width: 100vw;
    background-color: black;
    color: white;
}
#creditScreen {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding-left: 48%;
}

.creditLi {
    list-style: none;
}
#closeCredits {
    margin: auto;
}
`, "",{"version":3,"sources":["webpack://./src/styles/startscreen.style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,kDAAkD;IAClD,kCAAkC;AACtC;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,8BAA8B;IAC9B,yCAAyC;IACzC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,eAAe;IACf,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,yDAA6C;IAC7C,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kCAAkC;IAClC,QAAQ;;AAEZ;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;;AAEvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;AACvC;AACA;IACI,WAAW;IACX,eAAe;IACf,yCAAyC;IACzC,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,gBAAgB;AAChB;IACI,aAAa;IACb,eAAe;IACf,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,qGAAqG;IACrG,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB","sourcesContent":[":root {\n    --welcomeTextColor: rgb(119, 86, 26);\n    --welcomeFontFam:'Courier New', Courier, monospace;\n    --btnInputBorder: .2em solid white;\n}\n#startscreen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n    background-color: black;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#startscreen #welcome {\n    position: fixed;\n    top: 40vh;\n    color:white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n#welcomeTitle {\n    color: var(--welcomeTextColor);\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 3.8em;\n    font-style: italic;\n    margin-top: 3em;\n}\n#welcomePic {\n    position: fixed;\n    top: 5vh;\n    height: 25vh;\n    width: 25vw;\n    display: block;\n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    background-image: url(../images/shipmain.png);\n    background-color: white;\n}\n#welcomeForm {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    font-family: var(--welcomeFontFam);\n    gap: 1em;\n\n}\n#welcomeForm select {\n    font-family: var(--welcomeFontFam);\n    color: black;\n    font-weight: bolder;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n\n}\n#welcomeForm input {\n    border-radius: 5px;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n}\n#startBtn, #creditsBtn, #closeCreditsBtn {\n    height: 5vh;\n    margin-top: 2em;\n    background-color: var(--welcomeTextColor);\n    color: white;\n    font-family: var(--welcomeFontFam);\n    font-weight: 600;\n    border: var(--btnInputBorder);\n    border-radius: 5px;\n}\n/*credit screen*/\n#creditScreen {\n    display: none;\n    position: fixed;\n    z-index: 1001;\n    height:100vh;\n    width: 100vw;\n    background-color: black;\n    color: white;\n}\n#creditScreen {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    padding-left: 48%;\n}\n\n.creditLi {\n    list-style: none;\n}\n#closeCredits {\n    margin: auto;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/endgame.style.css":
/*!**************************************!*\
  !*** ./src/styles/endgame.style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_endgame_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./endgame.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/endgame.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_endgame_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_endgame_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_endgame_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_endgame_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/styles/mainpage.style.css":
/*!***************************************!*\
  !*** ./src/styles/mainpage.style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainpage_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainpage.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/mainpage.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainpage_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainpage_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainpage_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainpage_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/styles/shipstats.style.css":
/*!****************************************!*\
  !*** ./src/styles/shipstats.style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shipstats_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shipstats.style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shipstats.style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shipstats_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shipstats_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shipstats_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shipstats_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f7f7fb%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f7f7fb%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23f7f7fb%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "./src/audio/boathorn.wav":
/*!********************************!*\
  !*** ./src/audio/boathorn.wav ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "boathorn..wav";

/***/ }),

/***/ "./src/audio/explosion.wav":
/*!*********************************!*\
  !*** ./src/audio/explosion.wav ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "explosion..wav";

/***/ }),

/***/ "./src/audio/missileFired.wav":
/*!************************************!*\
  !*** ./src/audio/missileFired.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "missileFired..wav";

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
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/computer.js */ "./src/modules/computer.js");
/* harmony import */ var _modules_audio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/audio.js */ "./src/modules/audio.js");
/* harmony import */ var _styles_gameboard_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/gameboard.style.css */ "./src/styles/gameboard.style.css");
/* harmony import */ var _styles_shipform_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/shipform.style.css */ "./src/styles/shipform.style.css");
/* harmony import */ var _styles_startscreen_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/startscreen.style.css */ "./src/styles/startscreen.style.css");
/* harmony import */ var _styles_buttons_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/buttons.style.css */ "./src/styles/buttons.style.css");
/* harmony import */ var _styles_mainpage_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/mainpage.style.css */ "./src/styles/mainpage.style.css");
/* harmony import */ var _styles_shipstats_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/shipstats.style.css */ "./src/styles/shipstats.style.css");
/* harmony import */ var _styles_endgame_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/endgame.style.css */ "./src/styles/endgame.style.css");
/* harmony import */ var _audio_missileFired_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/missileFired.wav */ "./src/audio/missileFired.wav");
/* harmony import */ var _audio_boathorn_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audio/boathorn.wav */ "./src/audio/boathorn.wav");
/* harmony import */ var _audio_explosion_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audio/explosion.wav */ "./src/audio/explosion.wav");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }














var player1;
var computer;
document.addEventListener('AudioEvent', function (e) {
  if (e.detail.type === 'Missile') {
    var missileSound = new Audio(_audio_missileFired_wav__WEBPACK_IMPORTED_MODULE_11__);
    missileSound.play();
  }
  if (e.detail.type === 'horn') {
    var hornSound = new Audio(_audio_boathorn_wav__WEBPACK_IMPORTED_MODULE_12__);
    hornSound.play();
  }
  if (e.detail.type === 'explosion') {
    var explosionSound = new Audio(_audio_explosion_wav__WEBPACK_IMPORTED_MODULE_13__);
    setTimeout(function () {
      explosionSound.play();
    }, 3000);
  }
});

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
    player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_0__.humanPlayer('Andrew');
    computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_0__.compPlayer('computer', 'easy');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.welcomeFormDOM)();
  });
})();

//player place all player ships randomly on button push
(function randomSetPlayer() {
  var randomBtn = document.getElementById('random');
  var playerName = document.getElementById('playerName');
  randomBtn.addEventListener('click', function () {
    (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.placeComputer)(player1);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.playerShipOverlay)();
    //remove all buttons
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeShipBtns)();
    //place and print computer board and ships
    playerName.style.left = '90%';
    document.getElementById('placement').style.display = 'none';
    document.getElementById('mainpage').classList.add('mainPage');
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayComputer)();
    (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.placeComputer)(computer);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    var hornSound = (0,_modules_audio_js__WEBPACK_IMPORTED_MODULE_3__.AudioEventFn)('horn');
    document.dispatchEvent(hornSound);
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
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.playerShipOverlay)();
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printStats)(player1, shipType, shipID, 'p1');
    form.style.display = 'none';
    //remove all buttons if all five ships placed
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeShipBtns)();
    randomBtn.remove();
    //check if ship was placed
    var hornSound = (0,_modules_audio_js__WEBPACK_IMPORTED_MODULE_3__.AudioEventFn)('horn');
    if (newCount > startCount && newCount < 5) {
      document.dispatchEvent(hornSound);
      // if so add deployed class ship btn
      var targetBtn = document.getElementById("btn-".concat(shipType));
      targetBtn.classList.add('deployedShip');
    }
    //if all ships place display computer
    if (player1.gb.ships.length === 5) {
      var playerName = document.getElementById('playerName');
      playerName.style.left = '90%';
      document.dispatchEvent(hornSound);
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayComputer)();
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.placeComputer)(computer);
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    }
  });
});

//listen for player turn
var playerContainer = document.getElementById('container-p1');
var compContainer = document.getElementById('container-p2');

//Listen for player click on computer board to log attack
document.addEventListener('DOMContentLoaded', function () {
  compContainer.addEventListener('click', function () {
    //print board and stats after sec delay (no overlay on computer board)
    function printComBoardStats() {
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printComStats)();
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(computer.gb.board, 'container-p2', computer.gb);
    }
    ;
    setTimeout(function () {
      printComBoardStats();
    }, 3000);
    if (computer.gb.checkSunk() === true) {
      var winAlert = document.getElementById('winner');
      winAlert.style.display = "flex";
    }
  });
});

//Listen for computer board click by player, handler is computer attack
compContainer.addEventListener('click', function RandomMove() {
  setTimeout(function RandomMove() {
    //Level easy - computer always randomly attacks player 1
    if (level.value === 'easy') {
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomAttack)(player1);
      player1.gb.receiveAttack(_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomCol);
      if (player1.gb.checkSunk() === true) {
        var loseAlert = document.getElementById('loser');
        loseAlert.style.display = "flex";
      }
    }
    ;
    //Level medium - computer will check adjacent spaces
    if (level.value === 'medium') {
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.targetedAttack)(player1);
      (0,_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.lastHit)(player1, _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomCol);
      player1.gb.receiveAttack(_modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomRow, _modules_computer_js__WEBPACK_IMPORTED_MODULE_2__.randomCol);
      if (player1.gb.checkSunk() === true) {
        var _loseAlert = document.getElementById('loser');
        _loseAlert.style.display = "flex";
      }
    }
    ;

    //print player boad, ship overlays & ship stats with 3 sec delay from audio
    function printBoardandOverlays() {
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printBoard)(player1.gb.board, 'container-p1', player1.gb);
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.playerShipOverlay)();
      (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.printPlayerStats)();
    }
    ;
    setTimeout(function () {
      printBoardandOverlays();
    }, 3000);
    (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.shipBtnHandler)('.p1', 'p1');
  }, 5500);
});

//event listener for reset button
(function gameReset() {
  var resetBtn = document.querySelectorAll('.resetBtn');
  resetBtn.forEach(function (element) {
    return element.addEventListener('click', function () {
      window.location.reload();
    });
  });
})();
(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.shipBtnHandler)();

//event credits
(function creditScreen() {
  var creditSn = document.getElementById('creditScreen');
  document.getElementById('creditsBtn').addEventListener('click', function () {
    creditSn.style.display = 'block';
  });
  document.getElementById('closeCreditsBtn').addEventListener('click', function () {
    creditSn.style.display = 'none';
  });
})();

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

/***/ "./src/modules/audio.js":
/*!******************************!*\
  !*** ./src/modules/audio.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioEventFn: () => (/* binding */ AudioEventFn)
/* harmony export */ });
//custom audio events - creates audio event
function AudioEventFn(EventName) {
  var audioEvent = new CustomEvent('AudioEvent', {
    detail: {
      type: EventName,
      message: "Success - execute ".concat(EventName),
      status: 'success'
    }
  });
  return audioEvent;
}
;

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
/* harmony export */   printComStats: () => (/* binding */ printComStats),
/* harmony export */   printPlayerStats: () => (/* binding */ printPlayerStats),
/* harmony export */   printStats: () => (/* binding */ printStats),
/* harmony export */   removeShipBtns: () => (/* binding */ removeShipBtns),
/* harmony export */   shipBtnHandler: () => (/* binding */ shipBtnHandler),
/* harmony export */   welcomeFormDOM: () => (/* binding */ welcomeFormDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/modules/gameboard.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



//DOM related functionality for submit on welcome form
function welcomeFormDOM() {
  var welcomeForm = document.getElementById('welcomeForm');
  var startScreen = document.getElementById('startscreen');
  var mainPage = document.getElementById('mainpage');
  var playerName = document.getElementById('playerName');
  //print player name
  var name = document.getElementById('name').value;
  playerName.textContent = name;
  //remove start screen and welcome form
  welcomeForm.style.display = 'none';
  startScreen.style.display = 'none';
  //reveal the main page
  mainPage.style.display = 'flex';
  mainPage.style.backgroundColor = 'gray';
}
;
var arrayShips = [];

//utility fn - convert row coordinate from # to letter
function rowConv(number) {
  var alphabet = _toConsumableArray(Array(26)).map(function (_, i) {
    return String.fromCharCode(i + 97);
  });
  var letter = alphabet[number];
  return letter;
}
;

//print player/ computer gameboard
function printBoard(board, container, player) {
  var gb = document.getElementById(container);
  var shipRow = document.getElementById('shipRow');
  var shipCol = document.getElementById('shipCol');

  //dynamically set the max row/col size on placement form
  shipRow.max = _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize - 1;
  shipCol.max = _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize - 1;

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
            var col = Number(element.dataset.col) + 1;
            var rowConverted = rowConv(row).toUpperCase();
            element.textContent = "".concat(rowConverted).concat(col);
            element.style.color = 'white';
            element.style.fontWeight = 'bolder';
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
            //if player hasn't place all ships do not log attack
            if (player.ships.length < 5) {
              return;
            }
            ;
            var row = element.dataset.row;
            var col = element.dataset.col;
            //record attack
            player.receiveAttack(row, col);
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
;
//Ship buttons hander to display form with correct title
function shipBtnHandler() {
  var shipButtons = document.querySelectorAll('.p1');
  var placement = document.getElementById('placement');
  var formTitle = document.getElementById('formTitle');
  var columenSelect = document.getElementById('shipCol');
  var rowSelect = document.getElementById('shipRow');
  shipButtons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      placement.style.display = 'grid';
      var dataShipType = event.target.getAttribute('data-ship-type');
      formTitle.innerText = dataShipType;
      columenSelect.innerHTML = "";
      rowSelect.innerHTML = "";
      //add options text for column - add 1 to convert from 0 base
      for (var i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i + 1;
        columenSelect.appendChild(opt);
      }
      //add options text for row - convert number to letter
      for (var j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.boardSize; j++) {
        var optR = document.createElement('option');
        var converted = rowConv(j).toUpperCase();
        optR.value = j;
        optR.textContent = converted;
        rowSelect.appendChild(optR);
      }
      //if ship has already been placed
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
    thisID.classList.add('sunk');
  }
}
;
function printPlayerStats() {
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.player1, 'Carrier', 'C', 'p1');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.player1, 'Battleship', 'B', 'p1');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.player1, 'Destroyer', 'D', 'p1');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.player1, 'Submarine', 'S', 'p1');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.player1, 'Patrol Boat', 'P', 'p1');
}
;
function printComStats() {
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.computer, 'Carrier', 'C', 'com');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.computer, 'Battleship', 'B', 'com');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.computer, 'Destroyer', 'D', 'com');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.computer, 'Submarine', 'S', 'com');
  printStats(_index_js__WEBPACK_IMPORTED_MODULE_0__.computer, 'Patrol Boat', 'P', 'com');
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
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/audio.js */ "./src/modules/audio.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//const ship = require ('./ship.js')



//import { shipsDOM } from '../modules/dom.js'

//to access square on board use gb.board[r][c]

//Never used utility: converts column letter to number for lookUp
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

//Never used utility: board as variablename.board, only works for first row
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
      //Missile fired audio event create and dispatched
      var missileSound = (0,_modules_audio_js__WEBPACK_IMPORTED_MODULE_2__.AudioEventFn)('Missile');
      document.dispatchEvent(missileSound);
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
      //custom sound event explosion
      var boardhit = (0,_modules_audio_js__WEBPACK_IMPORTED_MODULE_2__.AudioEventFn)('explosion');
      document.dispatchEvent(boardhit);
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
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }


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
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZW5kZ2FtZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWlucGFnZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzdGF0cy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcz84YmExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2VuZGdhbWUuc3R5bGUuY3NzP2FhZDUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcz81NmFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW5wYWdlLnN0eWxlLmNzcz9mMGEwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBmb3JtLnN0eWxlLmNzcz8wZmRjIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzdGF0cy5zdHlsZS5jc3M/MWUzYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3M/MjE0NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2F1ZGlvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGVwbG95QnV0dG9uczogcmdiKDE0OCwgMTI4LCA5MCk7XG59XG5cbi8qU2hpcCBwYWNlbWVudCBidXR0b25zICovXG4ucDEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiA4ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnAxLmRlcGxveWVkU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggYm9sZCBibGFjaztcbn1cbiNyYW5kb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDE0ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLypzaGlwIHBsYWNlbWVudCBmb3JtKi9cbiNwbGFjZW1lbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA3MCU7XG4gICAgdG9wOiAxMCU7XG5cbiAgICB3aWR0aDogMTB2dztcbiAgICBnYXA6IC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyJTtcbn1cbiNwbGFjZW1lbnQgc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGhlaWdodDogMi41dmg7XG4gICAgd2lkdGg6IDRlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNwbGFjZW1lbnQgLmZvcm1JbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuI3BsYWNlQnRuIHtcbiAgICB3aWR0aDogMTNlbTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNwbGFjZUJ0bjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59XG4jcGFjZW1lbnQgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMjMwKTtcbn1cblxuXG5cblxuLnAxOmhvdmVyLCAjcmFuZG9tOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbn1cbiNkZXBsb3llZC1wMSxcbiNkZXBsb3llZC1jb20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNzaGlwRGFtYWdlZCxcbiNzaGlwRGFtYWdlLWNvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTs7SUFFUixXQUFXO0lBQ1gsU0FBUztJQUNULDJCQUEyQjtJQUMzQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksOENBQThDO0lBQzlDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtRQUNRLFlBQVk7UUFDWixpQkFBaUI7QUFDekI7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7Ozs7QUFLQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZGVwbG95QnV0dG9uczogcmdiKDE0OCwgMTI4LCA5MCk7XFxufVxcblxcbi8qU2hpcCBwYWNlbWVudCBidXR0b25zICovXFxuLnAxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICB3aWR0aDogOGVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucDEuZGVwbG95ZWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBib2xkIGJsYWNrO1xcbn1cXG4jcmFuZG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwbG95QnV0dG9ucyk7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiAxNGVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKnNoaXAgcGxhY2VtZW50IGZvcm0qL1xcbiNwbGFjZW1lbnQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDcwJTtcXG4gICAgdG9wOiAxMCU7XFxuXFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBnYXA6IC4yZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcbiNwbGFjZW1lbnQgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuI3BsYWNlQnRuIHtcXG4gICAgd2lkdGg6IDEzZW07XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jcGxhY2VCdG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcbiNwYWNlbWVudCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMjMwKTtcXG59XFxuXFxuXFxuXFxuXFxuLnAxOmhvdmVyLCAjcmFuZG9tOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG4jZGVwbG95ZWQtcDEsXFxuI2RlcGxveWVkLWNvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNzaGlwRGFtYWdlZCxcXG4jc2hpcERhbWFnZS1jb20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCN3aW5uZXIsXG4jbG9zZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgd2lkdGg6IDM1dnc7XG59XG4ucmVzZXRCdG4ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBtYXJnaW46IC41ZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZW5kZ2FtZS5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjd2lubmVyLFxcbiNsb3NlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICB3aWR0aDogMzV2dztcXG59XFxuLnJlc2V0QnRuIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAuNWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9taXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0JhdHRsZXNoaXAyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9EZXN0cm95ZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9QYXRyb2wyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qZ2FtZWJvYXJkIHNwYWNlcyovXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcbiNjb250YWluZXItcDEgLmhpdCxcbiNjb250YWluZXItcDIgLmhpdCxcbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0LFxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cbiNjb250YWluZXItcDEgLmNlbGwsXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4jY29udGFpbmVyLXAxIC5ib2F0LFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4jY29udGFpbmVyLXAxIC5taXNzLFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jY29udGFpbmVyLXAxIC5DLUhJVCxcbiNjb250YWluZXItcDEgLkItSElULFxuI2NvbnRhaW5lci1wMSAuRC1ISVQsXG4jY29udGFpbmVyLXAxIC5TLUhJVCxcbiNjb250YWluZXItcDEgLlAtSElULFxuI2NvbnRhaW5lci1wMiAuQy1ISVQsXG4jY29udGFpbmVyLXAyIC5CLUhJVCxcbiNjb250YWluZXItcDIgLkQtSElULFxuI2NvbnRhaW5lci1wMiAuUy1ISVQsXG4jY29udGFpbmVyLXAyIC5QLUhJVCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLypTaGlwIGljb25zIG9uIGJvYXJkKi9cbiNvdmVybGF5LUIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ob3J6LW92ZXJsYXktQiB7XG4gICAgaGVpZ2h0OiAxMzAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4udmVydC1vdmVybGF5LUIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cbiNvdmVybGF5LUQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ob3J6LW92ZXJsYXktRCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4udmVydC1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cbiNvdmVybGF5LVMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ob3J6LW92ZXJsYXktUyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4jb3ZlcmxheS1QIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaG9yei1vdmVybGF5LVAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4uaG9yei1vdmVybGF5LVAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuI292ZXJsYXktQyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaG9yei1vdmVybGF5LUMge1xuICAgIGhlaWdodDogMTIwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuLnZlcnQtb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1CO0FBQ25COzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHlEQUEyQztJQUMzQyxzQkFBc0I7QUFDMUI7QUFDQTs7Ozs7Ozs7OztJQVVJLHlEQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix5REFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbURBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qZ2FtZWJvYXJkIHNwYWNlcyovXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsLFxcbiNjb250YWluZXItcDEgLmhpdCxcXG4jY29udGFpbmVyLXAyIC5oaXQsXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0LFxcbiNjb250YWluZXItcDEgLm1pc3MsXFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbWlzcy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI2NvbnRhaW5lci1wMSAuQy1ISVQsXFxuI2NvbnRhaW5lci1wMSAuQi1ISVQsXFxuI2NvbnRhaW5lci1wMSAuRC1ISVQsXFxuI2NvbnRhaW5lci1wMSAuUy1ISVQsXFxuI2NvbnRhaW5lci1wMSAuUC1ISVQsXFxuI2NvbnRhaW5lci1wMiAuQy1ISVQsXFxuI2NvbnRhaW5lci1wMiAuQi1ISVQsXFxuI2NvbnRhaW5lci1wMiAuRC1ISVQsXFxuI2NvbnRhaW5lci1wMiAuUy1ISVQsXFxuI2NvbnRhaW5lci1wMiAuUC1ISVQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oaXQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qU2hpcCBpY29ucyBvbiBib2FyZCovXFxuI292ZXJsYXktQiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaG9yei1vdmVybGF5LUIge1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG4udmVydC1vdmVybGF5LUIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcbiNvdmVybGF5LUQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaG9yei1vdmVybGF5LUQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbi52ZXJ0LW92ZXJsYXktRCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuI292ZXJsYXktUyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5ob3J6LW92ZXJsYXktUyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuI292ZXJsYXktUCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvUGF0cm9sMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5ob3J6LW92ZXJsYXktUCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1QIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG4jb3ZlcmxheS1DIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvY2FycmllcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaG9yei1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG4udmVydC1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEwMCVcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzEwMCUyNyBoZWlnaHQ9JTI3MTAwJTI3IHZpZXdCb3g9JTI3MCAwIDEwMCAxMDAlMjclM0UlM0NnIGZpbGwtcnVsZT0lMjdldmVub2RkJTI3JTNFJTNDZyBmaWxsPSUyNyUyM2Y3ZjdmYiUyNyBmaWxsLW9wYWNpdHk9JTI3MC40JTI3JTNFJTNDcGF0aCBvcGFjaXR5PSUyNy41JTI3IGQ9JTI3TTk2IDk1aDR2MWgtNHY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNEgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djl6bS0xIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6JTI3LyUzRSUzQ3BhdGggZD0lMjdNNiA1VjBINXY1SDB2MWg1djk0aDFWNmg5NFY1SDZ6JTI3LyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXBsYXllclRyaW06IHJnYigyMTgsIDE2NCwgNjQpO1xuICAgIC0tY29tcHV0ZXJUcmltOiByZ2IoMTExLCAxMTEsIDIzMSk7XG59XG5odG1sIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cbmJvZHkgI21haW5wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbiNjb21Db25zb2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllclRyaW0pO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbiNwMUNvbnNvbGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcHV0ZXJUcmltKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYm94LXNoYWRvdzogNXB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIC41KTtcbn1cbiNjb250YWluZXItcDEsXG4jY29udGFpbmVyLXAyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGhlaWdodDo4NXZoO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2hpcFN0YXRzIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNzaGlwQnV0dG9ucyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4ucDFTaGlwLFxuLmNvbVNoaXAge1xuICAgIGZsZXgtYmFzaXM6IDUlO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbiNwbGF5ZXJOYW1lLCAjY29tTmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IC4wNzVlbSBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuMTJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMDVlbTtcbn1cbiNwbGF5ZXJOYW1lIHtcbiAgICB0b3A6IC0zJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbXB1dGVyVHJpbSk7XG59XG4jY29tTmFtZSB7XG4gICAgdG9wOiAtNCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyVHJpbSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW5wYWdlLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLHlEQUF3ckQ7QUFDNXJEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMseURBQXdyRDtJQUN4ckQsd0NBQXdDO0FBQzVDO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5REFBa0Q7SUFDbEQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdFQUF3RTtJQUN4RSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksUUFBUTtJQUNSLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksUUFBUTtJQUNSLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcGxheWVyVHJpbTogcmdiKDIxOCwgMTY0LCA2NCk7XFxuICAgIC0tY29tcHV0ZXJUcmltOiByZ2IoMTExLCAxMTEsIDIzMSk7XFxufVxcbmh0bWwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5ICNtYWlucGFnZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuI2NvbUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllclRyaW0pO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgdmlld0JveD0nMCAwIDEwMCAxMDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmN2Y3ZmInIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggb3BhY2l0eT0nLjUnIGQ9J005NiA5NWg0djFoLTR2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTVWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5em0tMSAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5eicvJTNFJTNDcGF0aCBkPSdNNiA1VjBINXY1SDB2MWg1djk0aDFWNmg5NFY1SDZ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG4jcDFDb25zb2xlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wdXRlclRyaW0pO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgdmlld0JveD0nMCAwIDEwMCAxMDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmN2Y3ZmInIGZpbGwtb3BhY2l0eT0nMC40JyUzRSUzQ3BhdGggb3BhY2l0eT0nLjUnIGQ9J005NiA5NWg0djFoLTR2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTVWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDlWMGgxdjE1aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5aDR2MWgtNHY5em0tMSAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em05LTEwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tOS0xMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5eicvJTNFJTNDcGF0aCBkPSdNNiA1VjBINXY1SDB2MWg1djk0aDFWNmg5NFY1SDZ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICBib3gtc2hhZG93OiA1cHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4jY29udGFpbmVyLXAxLFxcbiNjb250YWluZXItcDIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBoZWlnaHQ6ODV2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9PY2Vhbi1Cb2FyZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLnNoaXBTdGF0cyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NoaXBCdXR0b25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5wMVNoaXAsXFxuLmNvbVNoaXAge1xcbiAgICBmbGV4LWJhc2lzOiA1JTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4jcGxheWVyTmFtZSwgI2NvbU5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAuMDc1ZW0gc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IC4xMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMDVlbTtcXG59XFxuI3BsYXllck5hbWUge1xcbiAgICB0b3A6IC0zJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb21wdXRlclRyaW0pO1xcbn1cXG4jY29tTmFtZSB7XFxuICAgIHRvcDogLTQlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXJUcmltKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcGxhY2VtZW50IHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufVxuXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcblxufVxuXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xuICAgIHdpZHRoOiA1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cblxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDNlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jcGxhY2VtZW50ICNwbGFjZUJ0biB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jZGVwbG95ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGxhY2VtZW50IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cXG5cXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3BsYWNlbWVudCAjcGxhY2VCdG4ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jZGVwbG95ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9BbmNob3IyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhcnJpZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZGVzdHJveWVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wYXRyb2wucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTaGlwcyBzdGF0IGRpc3BsYXlzKi9cbi8qT3V0ZXJtb3N0IHNoaXAgc3RhdCBkaXZzKi9cbi5wMVNoaXAsIC5jb21TaGlwIHtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICB3aWR0aDogMTF2dztcbiAgICBtYXJnaW46IC40NWVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IC4yNWVtIHNvbGlkIGJsYWNrO1xufVxuLnAxU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDExNSwgMTY3KTtcbn1cbi5jb21TaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCA4MSwgMzkpO1xufVxuLnN0YXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmxpZmUge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4uZGFtYWdlZCB7XG4gICAgaGVpZ2h0OiAyLjhlbTtcbiAgICB3aWR0aDogMi44ZW07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSlcbn1cbi5zdW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyMiwgMjIpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbn1cbi8qRGl2IGNvbnRhaW5zIGxpZmUvZGFtYWdlIGZvciBlYWNoIHNoaXAqL1xuI3AxLXN0YXQtQywgI3AxLXN0YXQtQiwgI3AxLXN0YXQtRCwgI3AxLXN0YXQtUywgI3AxLXN0YXQtUCwgI2NvbS1zdGF0LUMsICNjb20tc3RhdC1CLCAjY29tLXN0YXQtRCwgI2NvbS1zdGF0LVMsICNjb20tc3RhdC1QIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLypPdXRlciBtb3N0IGRpdiBmb3Igc2hpcCBzdGF0cyovXG4jcDEtQywgI3AxLUIsICNwMS1TLCAjcDEtRCwgI3AxLVAsICNjb20tQywgI2NvbS1CLCAjY29tLUQsICNjb20tUywgI2NvbS1QICAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogMWVtO1xufVxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuI3AxLUIsICNjb20tQiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbiNwMS1TLCAjY29tLVMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuI3AxLVAsICNjb20tUCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwc3RhdHMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0I7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHlEQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7QUFDQSx5Q0FBeUM7QUFDekM7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseURBQThDO0lBQzlDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kseURBQWlEO0lBQ2pELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseURBQTZDO0lBQzdDLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaGlwcyBzdGF0IGRpc3BsYXlzKi9cXG4vKk91dGVybW9zdCBzaGlwIHN0YXQgZGl2cyovXFxuLnAxU2hpcCwgLmNvbVNoaXAge1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIG1hcmdpbjogLjQ1ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcXG59XFxuLnAxU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XFxufVxcbi5jb21TaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcXG59XFxuLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmxpZmUge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0FuY2hvcjIucG5nJyk7XFxufVxcbi5kYW1hZ2VkIHtcXG4gICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgd2lkdGg6IDIuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGl0LnBuZycpXFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjIsIDIyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG4vKkRpdiBjb250YWlucyBsaWZlL2RhbWFnZSBmb3IgZWFjaCBzaGlwKi9cXG4jcDEtc3RhdC1DLCAjcDEtc3RhdC1CLCAjcDEtc3RhdC1ELCAjcDEtc3RhdC1TLCAjcDEtc3RhdC1QLCAjY29tLXN0YXQtQywgI2NvbS1zdGF0LUIsICNjb20tc3RhdC1ELCAjY29tLXN0YXQtUywgI2NvbS1zdGF0LVAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLypPdXRlciBtb3N0IGRpdiBmb3Igc2hpcCBzdGF0cyovXFxuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcbiNwMS1DLCAjY29tLUMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jYXJyaWVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcXG59XFxuI3AxLUIsICNjb20tQiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuI3AxLVMsICNjb20tUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG4jcDEtRCwgI2NvbS1EIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZGVzdHJveWVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcbiNwMS1QLCAjY29tLVAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wYXRyb2wucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zaGlwbWFpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXdlbGNvbWVUZXh0Q29sb3I6IHJnYigxMTksIDg2LCAyNik7XG4gICAgLS13ZWxjb21lRm9udEZhbTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLS1idG5JbnB1dEJvcmRlcjogLjJlbSBzb2xpZCB3aGl0ZTtcbn1cbiNzdGFydHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc3RhcnRzY3JlZW4gI3dlbGNvbWUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwdmg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiN3ZWxjb21lVGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMy44ZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbn1cbiN3ZWxjb21lUGljIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jd2VsY29tZUZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBnYXA6IDFlbTtcblxufVxuI3dlbGNvbWVGb3JtIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xuXG59XG4jd2VsY29tZUZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xufVxuI3N0YXJ0QnRuLCAjY3JlZGl0c0J0biwgI2Nsb3NlQ3JlZGl0c0J0biB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLypjcmVkaXQgc2NyZWVuKi9cbiNjcmVkaXRTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDE7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY3JlZGl0U2NyZWVuIHtcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ4JTtcbn1cblxuLmNyZWRpdExpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuI2Nsb3NlQ3JlZGl0cyB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxrREFBa0Q7SUFDbEQsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5REFBNkM7SUFDN0MsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsUUFBUTs7QUFFWjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQ0FBbUM7O0FBRXZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxR0FBcUc7SUFDckcsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13ZWxjb21lVGV4dENvbG9yOiByZ2IoMTE5LCA4NiwgMjYpO1xcbiAgICAtLXdlbGNvbWVGb250RmFtOidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgLS1idG5JbnB1dEJvcmRlcjogLjJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuI3N0YXJ0c2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jc3RhcnRzY3JlZW4gI3dlbGNvbWUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDB2aDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbiN3ZWxjb21lVGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0td2VsY29tZVRleHRDb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDMuOGVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi10b3A6IDNlbTtcXG59XFxuI3dlbGNvbWVQaWMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvc2hpcG1haW4ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiN3ZWxjb21lRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcXG4gICAgZ2FwOiAxZW07XFxuXFxufVxcbiN3ZWxjb21lRm9ybSBzZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcXG5cXG59XFxuI3dlbGNvbWVGb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XFxufVxcbiNzdGFydEJ0biwgI2NyZWRpdHNCdG4sICNjbG9zZUNyZWRpdHNCdG4ge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4vKmNyZWRpdCBzY3JlZW4qL1xcbiNjcmVkaXRTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwMDE7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlZGl0U2NyZWVuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctbGVmdDogNDglO1xcbn1cXG5cXG4uY3JlZGl0TGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jY2xvc2VDcmVkaXRzIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lbmRnYW1lLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VuZGdhbWUuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5wYWdlLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5wYWdlLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHN0YXRzLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzdGF0cy5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBodW1hblBsYXllciwgY29tcFBsYXllciB9IGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIuanMnXG5pbXBvcnQgeyBwcmludEJvYXJkLCB3ZWxjb21lRm9ybURPTSwgZGlzcGxheUNvbXB1dGVyLCBzaGlwQnRuSGFuZGxlciwgcmVtb3ZlU2hpcEJ0bnMsIHByaW50U3RhdHMsIHByaW50UGxheWVyU3RhdHMsIHByaW50Q29tU3RhdHMsIHBsYXllclNoaXBPdmVybGF5IH0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcydcbmltcG9ydCB7IHBsYWNlQ29tcHV0ZXIsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCByYW5kb21BdHRhY2ssIHRhcmdldGVkQXR0YWNrLCBsYXN0SGl0IH0gZnJvbSAnLi9tb2R1bGVzL2NvbXB1dGVyLmpzJ1xuaW1wb3J0IHsgQXVkaW9FdmVudEZuIH0gZnJvbSAnLi9tb2R1bGVzL2F1ZGlvLmpzJ1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWlucGFnZS5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGlwc3RhdHMuc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZW5kZ2FtZS5zdHlsZS5jc3MnO1xuaW1wb3J0IG1pc3NpbGVGaXJlZCBmcm9tICcuL2F1ZGlvL21pc3NpbGVGaXJlZC53YXYnO1xuaW1wb3J0IGJvYXRob3JuIGZyb20gJy4vYXVkaW8vYm9hdGhvcm4ud2F2JztcbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi9hdWRpby9leHBsb3Npb24ud2F2JztcblxuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBjb21wdXRlcjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdBdWRpb0V2ZW50JywgKGUpPT4ge1xuXG4gICAgaWYgKGUuZGV0YWlsLnR5cGUgPT09ICdNaXNzaWxlJyl7XG4gICAgICAgIGNvbnN0IG1pc3NpbGVTb3VuZCA9IG5ldyBBdWRpbyhtaXNzaWxlRmlyZWQpO1xuICAgICAgICBtaXNzaWxlU291bmQucGxheSgpO1xuICAgIH1cbiAgICBpZiAoZS5kZXRhaWwudHlwZSA9PT0gJ2hvcm4nKXtcbiAgICAgICAgY29uc3QgaG9yblNvdW5kID0gbmV3IEF1ZGlvKGJvYXRob3JuKTtcbiAgICAgICAgaG9yblNvdW5kLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKGUuZGV0YWlsLnR5cGUgPT09ICdleHBsb3Npb24nKXtcbiAgICAgICAgY29uc3QgZXhwbG9zaW9uU291bmQgPSBuZXcgQXVkaW8oZXhwbG9zaW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBleHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgIH0sIDMwMDApXG4gICAgfVxuICAgIFxufSlcblxuLy93ZWxjb21lIGZvcm1cbmV4cG9ydCBsZXQgYm9hcmRTaXplO1xuY29uc3QgbGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbihmdW5jdGlvbiB3ZWxjb21lRm9ybSAoKXtcbiAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICAgICAgY29uc3Qgd2VsY29tZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIHdlbGNvbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIgKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBib2FyZFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLnZhbHVlO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBwbGF5ZXJzXG4gICAgICAgICAgICBwbGF5ZXIxID0gbmV3IGh1bWFuUGxheWVyKCdBbmRyZXcnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyID0gbmV3IGNvbXBQbGF5ZXIoJ2NvbXB1dGVyJywgJ2Vhc3knKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICAgICAgd2VsY29tZUZvcm1ET00oKTtcbiAgICB9KVxufSkoKTtcblxuLy9wbGF5ZXIgcGxhY2UgYWxsIHBsYXllciBzaGlwcyByYW5kb21seSBvbiBidXR0b24gcHVzaFxuKGZ1bmN0aW9uIHJhbmRvbVNldFBsYXllciAoKXtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJyk7XG4gICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgcGxhY2VDb21wdXRlcihwbGF5ZXIxKTtcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHBsYXllclNoaXBPdmVybGF5KCk7XG4gICAgICAgIC8vcmVtb3ZlIGFsbCBidXR0b25zXG4gICAgICAgIHJlbW92ZVNoaXBCdG5zICgpO1xuICAgICAgICAvL3BsYWNlIGFuZCBwcmludCBjb21wdXRlciBib2FyZCBhbmQgc2hpcHNcbiAgICAgICAgcGxheWVyTmFtZS5zdHlsZS5sZWZ0ID0gJzkwJSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZW1lbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdtYWluUGFnZScpO1xuICAgICAgICBkaXNwbGF5Q29tcHV0ZXIoKTtcbiAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgIGxldCBob3JuU291bmQgPSBBdWRpb0V2ZW50Rm4gKCdob3JuJyk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoaG9yblNvdW5kKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vL3BsYXllciBwbGFjZSBzaGlwcyBvbiBib2FyZCBtYW51YWxseVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50JylcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vc2hpcCBjb3VudCBwcmlvciB0byBwbGFjZW1lbnRcbiAgICAgICAgbGV0IHN0YXJ0Q291bnQgPSBwbGF5ZXIxLmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgLy9zdG9yZSB2YWxlcyBmcm9tIGlucHV0IGZvcm1cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKS52YWx1ZTtcbiAgICAgICAgbGV0IHNoaXBUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcElEID0gc2hpcFR5cGUuc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vcGxhY2Ugc2hpcFxuICAgICAgICBwbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcChzaGlwVHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbik7XG4gICAgICAgIC8vc2hpcCBjb3VudCBhZnRlciBhdHRlbXRwZWQgcGxhY2VtZW50XG4gICAgICAgIGxldCBuZXdDb3VudCA9IHBsYXllcjEuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FyZCwgb3ZlcmxheSwgc2hpcCBzdGF0c1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCBzaGlwVHlwZSwgc2hpcElELCAncDEnKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9ucyBpZiBhbGwgZml2ZSBzaGlwcyBwbGFjZWRcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMoKTtcbiAgICAgICAgcmFuZG9tQnRuLnJlbW92ZSgpXG4gICAgICAgIC8vY2hlY2sgaWYgc2hpcCB3YXMgcGxhY2VkXG4gICAgICAgIGxldCBob3JuU291bmQgPSBBdWRpb0V2ZW50Rm4gKCdob3JuJyk7XG4gICAgICAgIGlmKChuZXdDb3VudCA+IHN0YXJ0Q291bnQpICYmIChuZXdDb3VudCA8IDUpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoaG9yblNvdW5kKTtcbiAgICAgICAgICAgIC8vIGlmIHNvIGFkZCBkZXBsb3llZCBjbGFzcyBzaGlwIGJ0blxuICAgICAgICAgICAgbGV0IHRhcmdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4tJHtzaGlwVHlwZX1gKTtcbiAgICAgICAgICAgIHRhcmdldEJ0bi5jbGFzc0xpc3QuYWRkKCdkZXBsb3llZFNoaXAnKVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgYWxsIHNoaXBzIHBsYWNlIGRpc3BsYXkgY29tcHV0ZXJcbiAgICAgICAgaWYocGxheWVyMS5nYi5zaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJyk7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lLnN0eWxlLmxlZnQgPSAnOTAlJztcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoaG9yblNvdW5kKTtcbiAgICAgICAgICAgIGRpc3BsYXlDb21wdXRlcigpO1xuICAgICAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgICAgICB9XG4gICAgfSl9XG4pXG5cbi8vbGlzdGVuIGZvciBwbGF5ZXIgdHVyblxubGV0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItcDEnKTtcbmxldCBjb21wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMicpO1xuXG4vL0xpc3RlbiBmb3IgcGxheWVyIGNsaWNrIG9uIGNvbXB1dGVyIGJvYXJkIHRvIGxvZyBhdHRhY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb21wQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpPT4ge1xuICAgICAgICAvL3ByaW50IGJvYXJkIGFuZCBzdGF0cyBhZnRlciBzZWMgZGVsYXkgKG5vIG92ZXJsYXkgb24gY29tcHV0ZXIgYm9hcmQpXG4gICAgICAgIGZ1bmN0aW9uIHByaW50Q29tQm9hcmRTdGF0cygpe1xuICAgICAgICAgICAgcHJpbnRDb21TdGF0cygpO1xuICAgICAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKVxuICAgICAgICB9O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtwcmludENvbUJvYXJkU3RhdHMoKVxuICAgICAgICB9LCAzMDAwKVxuICAgICAgICBpZiAoY29tcHV0ZXIuZ2IuY2hlY2tTdW5rKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgbGV0IHdpbkFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcicpO1xuICAgICAgICAgICAgd2luQWxlcnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9XG4gICAgfSkgXG4gICAgfSlcblxuLy9MaXN0ZW4gZm9yIGNvbXB1dGVyIGJvYXJkIGNsaWNrIGJ5IHBsYXllciwgaGFuZGxlciBpcyBjb21wdXRlciBhdHRhY2tcbmNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgZnVuY3Rpb24gUmFuZG9tTW92ZSAoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiBSYW5kb21Nb3ZlICgpe1xuICAgICAgICBcbiAgICAgICAgLy9MZXZlbCBlYXN5IC0gY29tcHV0ZXIgYWx3YXlzIHJhbmRvbWx5IGF0dGFja3MgcGxheWVyIDFcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSAnZWFzeScpe1xuICAgICAgICAgICAgcmFuZG9tQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgcGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdiLmNoZWNrU3VuaygpID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBsZXQgbG9zZUFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvc2VyJyk7XG4gICAgICAgICAgICAgICAgbG9zZUFsZXJ0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy9MZXZlbCBtZWRpdW0gLSBjb21wdXRlciB3aWxsIGNoZWNrIGFkamFjZW50IHNwYWNlc1xuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgIHRhcmdldGVkQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgbGFzdEhpdChwbGF5ZXIxLCByYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2IuY2hlY2tTdW5rKCkgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIGxldCBsb3NlQWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9zZXInKTtcbiAgICAgICAgICAgICAgICBsb3NlQWxlcnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgYm9hZCwgc2hpcCBvdmVybGF5cyAmIHNoaXAgc3RhdHMgd2l0aCAzIHNlYyBkZWxheSBmcm9tIGF1ZGlvXG4gICAgICAgIGZ1bmN0aW9uIHByaW50Qm9hcmRhbmRPdmVybGF5cygpe1xuICAgICAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpXG4gICAgICAgICAgICBwcmludFBsYXllclN0YXRzKClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7cHJpbnRCb2FyZGFuZE92ZXJsYXlzKCl9LCAzMDAwKVxuICAgICAgICBzaGlwQnRuSGFuZGxlcignLnAxJywgJ3AxJyk7XG4gICAgfSwgNTUwMCk7XG59KTtcblxuLy9ldmVudCBsaXN0ZW5lciBmb3IgcmVzZXQgYnV0dG9uXG4oZnVuY3Rpb24gZ2FtZVJlc2V0ICgpe1xuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0QnRuJyk7XG4gICAgXG4gICAgcmVzZXRCdG4uZm9yRWFjaCgoZWxlbWVudCk9PlxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgKVxuXG4gfSkoKTtcblxuc2hpcEJ0bkhhbmRsZXIoKTtcblxuLy9ldmVudCBjcmVkaXRzXG4oZnVuY3Rpb24gY3JlZGl0U2NyZWVuICgpe1xuICAgIGNvbnN0IGNyZWRpdFNuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdFNjcmVlbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXRzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgY3JlZGl0U24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VDcmVkaXRzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgY3JlZGl0U24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxufSkoKTtcblxuXG4vL2F0dGFja3Ncbi8qXG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMCwgMSk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMSwgMCk7XG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDAsIDApO1xuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjayg2LCA0KTtcbi8vaG93IHRvIHByaW50IHNoaXBzXG5jb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG4iLCIvL2N1c3RvbSBhdWRpbyBldmVudHMgLSBjcmVhdGVzIGF1ZGlvIGV2ZW50XG5leHBvcnQgZnVuY3Rpb24gQXVkaW9FdmVudEZuIChFdmVudE5hbWUpe1xuICAgIGxldCBhdWRpb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdBdWRpb0V2ZW50Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEV2ZW50TmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWNjZXNzIC0gZXhlY3V0ZSAke0V2ZW50TmFtZX1gLFxuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGF1ZGlvRXZlbnQ7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgYXJyYXlTaGlwcyB9IGZyb20gJy4uL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5cbi8vVXRpbGl0eSBmdW5jdGlvbiwgcmFuZG9tIHJvdy9jb2xcbmNvbnN0IHJhbmRvbU51bSA9IHtcbiAgICBnZXQgdmFsdWUgKCl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIH1cbn07XG4vL1V0aWxpdHkgZnVuY3Rpb24sIHJhbmRvbSBkaXJlY3Rpb25cbmZ1bmN0aW9uIHJhbmRvbURpciAoKXtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKXsgcmV0dXJuICdVcCcgfSBcbiAgICAgICAgaWYgKHZhbHVlID09PSAxKXsgcmV0dXJuICdEb3duJyB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMil7IHJldHVybiAnUmlnaHQnIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAzKXsgcmV0dXJuICdMZWZ0JyB9XG59O1xuXG5cbi8vUmFuZG9tbHkgcGxhY2Ugc2hpcFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcCAoc2hpcCwgY3B1KSB7XG4gICAgZnVuY3Rpb24gdHJ5QWdhaW4gKCl7XG4gICAgICBsZXQgbGVuZ3RoID0gY3B1LmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgIGNwdS5nYi5wbGFjZU5ld1NoaXAoc2hpcCwgcmFuZG9tTnVtLnZhbHVlLCByYW5kb21OdW0udmFsdWUsIHJhbmRvbURpciAoKSk7XG4gICAgICAvL2lmIHRoZSBzaGlwIGZhaWxzIHRvIHBsYWNlIG9uIHRoZSBib2FyZCBydW4gYWdhaW5cbiAgICAgIGlmIChjcHUuZ2Iuc2hpcHMubGVuZ3RoID09PSBsZW5ndGgpe1xuICAgICAgICAgIHRyeUFnYWluKCk7XG4gICAgICB9O1xuICAgfVxuICAgdHJ5QWdhaW4oKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyICh1c2VyKSB7XG4gICAgcGxhY2VTaGlwICgnQ2FycmllcicsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ0JhdHRsZXNoaXAnLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdEZXN0cm95ZXInLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdTdWJtYXJpbmUnLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdQYXRyb2wgQm9hdCcsIHVzZXIpO1xufTtcblxuLy9Db21wdXRlciBhdHRhY2sgcmFuZG9tIG1vdmVcbmV4cG9ydCBsZXQgcmFuZG9tUm93O1xuZXhwb3J0IGxldCByYW5kb21Db2w7XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQXR0YWNrICh1c2VyKXtcbiAgICBjb25zb2xlLmxvZygncmFuZG9tQXR0YWNrIGZuJylcbiAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgaWYgKHVzZXIuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCByYW5kb21Db2wpID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgICAgcmFuZG9tQXR0YWNrKHVzZXIpO1xuICAgIH07XG59XG5cbiAgLy91dGlsaXR5IGZ1bmN0aW9uICYgdmFyaWFibGVzIHRvIHN0b3JlIGxhc3QgaGl0XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIGxhc3RIaXQgKGVuZW15LCByb3csIGNvbCl7XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MnIHx8IFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdEJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdTJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQJylcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcgbGFzdGhpdCBmbiAtIHN0b3JlIGhpdCcpO1xuXG4gICAgICAgICAgdGFyZ2V0Um93ID0gcm93O1xuICAgICAgICAgIHRhcmdldENvbCA9IGNvbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbGFzdGhpdCBmbiAtIG5vIGRhdGEgZm9yIGhpdCcpfVxuICB9O1xuXG4gIGV4cG9ydCBsZXQgc2F2ZWRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBmdW5jdGlvbiBzdG9yZWRIaXQgKHJvdywgY29sKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKXtcbiAgICAgICAgc2F2ZWRSb3cgPSByb3c7XG4gICAgICAgIHNhdmVkQ29sID0gY29sO1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfTtcblxuICAvL3V0aWxpdHkgZm4gLSBpZiBhIHNoaXAgd2FzIHN1bmsgbGFzdCB0dXJuIGdvIHRvIHJhbmRvbSBhdHRhY2tcbiAgbGV0IGxhc3RDb3VudCA9IDA7XG4gIGZ1bmN0aW9uIHBvc3RTdW5rQXR0IChlbmVteSkge1xuICAgIGxldCBjYXJTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMF0uaXNTdW5rKCk7XG4gICAgbGV0IGJhdFN1bmsgPSBlbmVteS5nYi5zaGlwc1sxXS5pc1N1bmsoKTtcbiAgICBsZXQgZGlzU3VuayA9IGVuZW15LmdiLnNoaXBzWzJdLmlzU3VuaygpO1xuICAgIGxldCBzdWJTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbM10uaXNTdW5rKCk7XG4gICAgbGV0IHBhdFN1bmsgPSBlbmVteS5nYi5zaGlwc1s0XS5pc1N1bmsoKTtcbiAgICBsZXQgc2hpcHMgPSBbY2FyU3VuaywgYmF0U3VuaywgZGlzU3Vuaywgc3ViU3VuaywgcGF0U3Vua107XG4gICAgbGV0IGNvdW50VHJ1ZSA9IHNoaXBzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkubGVuZ3RoXG5cbiAgICBpZiAobGFzdENvdW50IDwgY291bnRUcnVlKSB7IFxuICAgICAgICArK2xhc3RDb3VudFxuICAgICAgICB0YXJnZXRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRSb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgIHNhdmVkQ29sID0gdW5kZWZpbmVkO1xuICAgICAgICByYW5kb21BdHRhY2sgKGVuZW15KTtcbiAgICB9O1xufTtcblxuLy91dGlsaXR5IGZuIC0gY2hlY2sgc3BhY2UgYWRqYWNlbnQgdG8gYXR0YWNrIGZvciBuZXh0IGF0dGFja1xuZnVuY3Rpb24gYWRqYWNlbnQgKGVuZW15LCByb3csIGNvbCkge1xuICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgIH1cbn07XG5cbiAgLy9wb3NzaWJsZSBhZGphY2VudCBtb3ZlcyBmcm9tIGEgaGl0XG4gIGxldCByb3dQbHVzO1xuICBsZXQgcm93TWludXM7XG4gIGxldCBjb2xQbHVzO1xuICBsZXQgY29sTWludXM7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHRhcmdldGVkQXR0YWNrIChlbmVteSl7XG4gICBcbiAgICAvL2ZpcnN0IG1vdmVcbiAgICBpZiAocmFuZG9tUm93ICA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByYW5kb21BdHRhY2sgKGVuZW15KSAgXG4gICAgfTtcbiAgICAvL2NoZWNrIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm5cbiAgICBwb3N0U3Vua0F0dChlbmVteSk7XG5cbiAgICAvL0lmIGxhc3QgYXR0YWNrIHdhcyBhIGhpdFxuICAgIGlmIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdDLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnQi1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0QtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdTLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnUC1ISVQnXG4gICAgKSB7XG4gICAgICAgIFxuICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICBjb2xQbHVzID0gcmFuZG9tQ29sICsgMTtcbiAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICBcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBub3QgYSBzYXZlZCBoaXQgY2hlY2sgZWFjaCBvZiB0aGUgYWRqYWNlbnQgc3BvdHNcbiAgICAgICAgaWYgKHNhdmVkUm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMScpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tQ29sO1xuICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gNCcpO1xuICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICB9O1xuICAgICAgICAvL2lmIHRoZXJlIGFyZSB0d28gaGl0cyBjaGVjayB0byBzZWUgaWYgYWRqYWNlbnQgc3BvdCBvbiB0aGUgY28vcm93IGlzIG9wZW5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJvd1ZhbCA9IE1hdGguYWJzKHJhbmRvbVJvdyAtIHNhdmVkUm93KTtcbiAgICAgICAgICAgIGxldCBjb2xWYWwgPSBNYXRoLmFicyhyYW5kb21Db2wtIHNhdmVkQ29sKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQgYW5kIHJhbmRvbSB2YWx1ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93VmFsID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BpY2sgcm93cycpO1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93TWludXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDJiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbFZhbCA+IDApe1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0YicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9pZiB0aGVyZSBpcyBhIHN0b3JlZCBoaXQgYW5kIGxhc3QgbW92ZSBpcyBhIG1pc3MgcmVydW4gYWRqYWNlbnQgY2hlY2tzXG4gICAgaWYgKCAoZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnWCcpICYmICh0eXBlb2YgdGFyZ2V0Um93ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIG1pc3MsIGdvIGJhY2sgdG8gbGFzdCBoaXQnKTtcblxuICAgICAgICAgICAgcmFuZG9tUm93ID0gdGFyZ2V0Um93O1xuICAgICAgICAgICAgcmFuZG9tQ29sID0gdGFyZ2V0Q29sO1xuXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICAgICAgfSBcbiAgICB9XG5cbiAgY29uc29sZS5sb2coJ3RhcmdldCBhdHQgLSBkZWZhdWx0IHJhbmRvbSAnKVxuICB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgcmFuZG9tQXR0YWNrIChlbmVteSk7XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyMSwgY29tcHV0ZXIsIGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG4vL0RPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkgZm9yIHN1Ym1pdCBvbiB3ZWxjb21lIGZvcm1cbmV4cG9ydCBmdW5jdGlvbiB3ZWxjb21lRm9ybURPTSAoKXtcbiAgICBjb25zdCB3ZWxjb21lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lRm9ybScpO1xuICAgIGNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0c2NyZWVuJyk7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnBhZ2UnKTsgICAgXG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJyk7XG4gICAgLy9wcmludCBwbGF5ZXIgbmFtZVxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAvL3JlbW92ZSBzdGFydCBzY3JlZW4gYW5kIHdlbGNvbWUgZm9ybVxuICAgIHdlbGNvbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL3JldmVhbCB0aGUgbWFpbiBwYWdlXG4gICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluUGFnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JheSc7XG59O1xuXG5leHBvcnQgbGV0IGFycmF5U2hpcHMgPSBbXTtcblxuLy91dGlsaXR5IGZuIC0gY29udmVydCByb3cgY29vcmRpbmF0ZSBmcm9tICMgdG8gbGV0dGVyXG5mdW5jdGlvbiByb3dDb252IChudW1iZXIpe1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWy4uLkFycmF5KDI2KV0ubWFwKChfLGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArOTcpKTtcbiAgICAgICAgbGV0IGxldHRlciA9IGFscGhhYmV0W251bWJlcl07XG4gICAgICAgIHJldHVybiBsZXR0ZXI7XG59O1xuXG4vL3ByaW50IHBsYXllci8gY29tcHV0ZXIgZ2FtZWJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRCb2FyZCAoYm9hcmQsIGNvbnRhaW5lciwgcGxheWVyKXtcbiAgICBsZXQgZ2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgIGxldCBzaGlwUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKTtcbiAgICBsZXQgc2hpcENvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQ29sJyk7XG5cbiAgICAvL2R5bmFtaWNhbGx5IHNldCB0aGUgbWF4IHJvdy9jb2wgc2l6ZSBvbiBwbGFjZW1lbnQgZm9ybVxuICAgIHNoaXBSb3cubWF4ID0gYm9hcmRTaXplLTE7XG4gICAgc2hpcENvbC5tYXggPSBib2FyZFNpemUtMTtcblxuICAgIC8vZHluYW1pY2FsbHkgc2V0IHRoZSBncmlkIHNpemVcbiAgICBnYi5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2JvYXJkU2l6ZX0sIDFmcilgO1xuICAgIGdiLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XG5cbiAgICAvL3ByaW50IGVhY2ggY2VsbCB3aXRoIHZhbHVlc1xuICAgIGdiLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgcm93IG9mIGJvYXJkKXtcbiAgICAgICAgZm9yKGxldCBjZWxsIG9mIHJvdyl7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNlbGwudmFsdWU7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQy1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQi1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0ItSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0QtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdELUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUy1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUC1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0MnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0InIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0QnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1MnIHx8IFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1AnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvYXQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5yb3cgPSBjZWxsLnI7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuY29sID0gY2VsbC5jO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2hvdmVyIHRvIHJldmVhbCBzcGFjZSBkYXRhc2V0XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LnJvdyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQuY29sKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHJvd0NvbnZlcnRlZCA9IHJvd0NvbnYocm93KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyb3dDb252ZXJ0ZWR9JHtjb2x9YDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZGVyJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2hvdmVyIG91dFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY2xpY2sgYm9hcmQgdG8gYXR0YWNrXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgLy9pZiBwbGF5ZXIgaGFzbid0IHBsYWNlIGFsbCBzaGlwcyBkbyBub3QgbG9nIGF0dGFja1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc2hpcHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50LmRhdGFzZXQucm93O1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlbGVtZW50LmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgICAgIC8vcmVjb3JkIGF0dGFja1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBnYi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcnJheVNoaXBzID0gcGxheWVyLnNoaXBzO1xufVxuXG4vL0NyZWF0ZXMgb3ZlcmxheSBvZiBzaGlwIG9udG8gYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkU2hpcHMgKHByZWZpeCwgdGFyZ2V0Qm9hcmQpeyBcbiAgICAvL2NhbGwgbWluL21heCBvdXRzaWRlIHRoZSBwb3NzaWJlIHJhbmdlXG4gICAgbGV0IG1pbkdyaWRSb3cgPSAxMDAwO1xuICAgIGxldCBtYXhHcmlkUm93ID0gLTEwMDA7XG4gICAgbGV0IG1pbkdyaWRDb2wgPSAxMDAwO1xuICAgIGxldCBtYXhHcmlkQ29sID0gLTEwMDA7XG4gICAgXG4gICAgLy9yZXR1cm4gdGhlIG1heC9taW4gcm93L2NvbCBmb3Igc2hpcCBsb2NhdGlvblxuICAgIGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0YXJnZXRCb2FyZH0uJHtwcmVmaXh9LCAuJHt0YXJnZXRCb2FyZH0uJHtwcmVmaXh9LUhJVGApO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRHcmlkUm93ID0gdGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgICBpZiAoY3VycmVudEdyaWRSb3cgPCBtaW5HcmlkUm93KSB7XG4gICAgICAgICAgICBtaW5HcmlkUm93ID0gcGFyc2VJbnQoY3VycmVudEdyaWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50R3JpZFJvdyA+IG1heEdyaWRSb3cpIHtcbiAgICAgICAgICAgIG1heEdyaWRSb3cgPSBwYXJzZUludChjdXJyZW50R3JpZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRHcmlkQ29sID0gdGFyZ2V0LmRhdGFzZXQuY29sO1xuICAgICAgICBpZiAoY3VycmVudEdyaWRDb2wgPCBtaW5HcmlkQ29sKSB7XG4gICAgICAgICAgICBtaW5HcmlkQ29sID0gcGFyc2VJbnQoY3VycmVudEdyaWRDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50R3JpZENvbCA+IG1heEdyaWRDb2wpIHtcbiAgICAgICAgICAgIG1heEdyaWRDb2wgPSBwYXJzZUludChjdXJyZW50R3JpZENvbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuKVxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldEJvYXJkKTtcbmxldCBzaGlwT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcE92ZXJsYXkuaWQgPSAoYG92ZXJsYXktJHtwcmVmaXh9YCk7XG5cbi8vaWYgbm8gdmFsdWVzIGRvIG5vdCBvdmVybGF5IC0gdXNlZCBmb3IgcGxheWVyIHBsYWNlbWVudFxuaWYgKG1pbkdyaWRSb3cgPT09IDEwMDApe3JldHVybn07XG4vL0FkZCAxIHRvIGFsbCBmb3IgY29udmVyc2lvbiBmcm9tIHNxdWFyZXMgdG8gZ3JpZCBsaW5lc1xuLy9BZGQgMiB0byBhbnkgc2luZ2xlIGxlbmd0aCBvcmllbnRhdGlvblxuLy92ZXJ0aWNhbFxuaWYgKG1pbkdyaWRDb2wgPT09IG1heEdyaWRDb2wpe1xuICAgIGxldCByb3dFbmQgPSBtaW5HcmlkUm93ICsgc2hpcExlbmd0aCArIDE7XG4gICAgc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZChgdmVydC1vdmVybGF5LSR7cHJlZml4fWApO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IG1pbkdyaWRDb2wgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBtaW5HcmlkQ29sICsgMjtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93U3RhcnQgPSBtaW5HcmlkUm93ICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gcm93RW5kO1xuLy9ob3Jpem9udGFsXG59IGVsc2Uge1xuICAgIGxldCBjb2xFbmQgPSAgbWluR3JpZENvbCArIHNoaXBMZW5ndGggKyAxO1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoYGhvcnotb3ZlcmxheS0ke3ByZWZpeH1gKTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93U3RhcnQgPSBtaW5HcmlkUm93ICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkUm93RW5kID0gbWluR3JpZFJvdyArIDI7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gbWluR3JpZENvbCArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IGNvbEVuZDtcbn1cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwT3ZlcmxheSk7XG59O1xuLy9mdW5jdGlvbiB0byBvdmVybGF5IGFsbCBwbGF5ZXIgc2hpcHNcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJTaGlwT3ZlcmxheSAoKXtcbiAgICBwcmludEJvYXJkU2hpcHMoJ1AnLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdCJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnRCcsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ1MnLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdDJywgJ2NvbnRhaW5lci1wMScpO1xufTtcbi8vU2hpcCBidXR0b25zIGhhbmRlciB0byBkaXNwbGF5IGZvcm0gd2l0aCBjb3JyZWN0IHRpdGxlXG5leHBvcnQgZnVuY3Rpb24gc2hpcEJ0bkhhbmRsZXIgKCl7XG4gICAgY29uc3Qgc2hpcEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucDEnKTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50Jyk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGNvbHVtZW5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuICAgIGNvbnN0IHJvd1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG5cbiAgICBzaGlwQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGxldCBkYXRhU2hpcFR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtdHlwZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IGRhdGFTaGlwVHlwZTtcbiAgICAgICAgICAgIGNvbHVtZW5TZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHJvd1NlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgLy9hZGQgb3B0aW9ucyB0ZXh0IGZvciBjb2x1bW4gLSBhZGQgMSB0byBjb252ZXJ0IGZyb20gMCBiYXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICBjb2x1bWVuU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2FkZCBvcHRpb25zIHRleHQgZm9yIHJvdyAtIGNvbnZlcnQgbnVtYmVyIHRvIGxldHRlclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IG9wdFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydGVkID0gcm93Q29udihqKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG9wdFIudmFsdWUgPSBqO1xuICAgICAgICAgICAgICAgIG9wdFIudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0LmFwcGVuZENoaWxkKG9wdFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBzaGlwIGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkXG4gICAgICAgICAgICBpZiAoYXJyYXlTaGlwcy5zb21lKHNoaXAgPT4gc2hpcC50eXBlID09PSBkYXRhU2hpcFR5cGUpKXtcbiAgICAgICAgICAgIHBsYWNlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufX0pfSl9XG5cbi8vaWYgYWxsIHNoaXBzIHBsYWNlZCByZW1vdmUgYnV0dG9uc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNoaXBCdG5zICgpIHtcbiAgICBpZiAoYXJyYXlTaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICBsZXQgc2hpcEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJ1dHRvbnMnKTtcbiAgICAgICAgc2hpcEJ0bnMucmVtb3ZlKCk7XG4gICAgfVxufVxuLy9kaXNwbGF5IGNvbXB1dGVyIGNvbnNvbGUvYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tcHV0ZXIgKCkge1xuICAgIGlmIChhcnJheVNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgIGxldCBjb21wdXRlckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tQ29uc29sZScpO1xuICAgICAgICBjb21wdXRlckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB9XG59XG4vL3ByaW50IHN0YXRzIHRvIGVhY2ggc2hpcHMgc3RhdCBkaXYgKGxpZmUvIGRhbWFnZSlcbmV4cG9ydCBmdW5jdGlvbiBwcmludFN0YXRzIChwbGF5ZXIsIHNoaXAsIHN1ZmZpeCwgcHJlZml4KSB7XG4gICAgLy9zaGlwIGRhdGFcbiAgICBjb25zdCBmbGVldCA9IHBsYXllci5nYi5zaGlwcztcbiAgICBjb25zdCB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC50eXBlID09PSBzaGlwKTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzU2hpcC5sZW5ndGg7XG4gICAgY29uc3QgZGFtYWdlID0gdGhpc1NoaXAuZGFtYWdlO1xuICAgIC8vY29udGFpbmVycyBmb3IgbGlmZS1kYW1hZ2VcbiAgICBjb25zdCBkYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctc3RhdC0nICsgc3VmZml4KTtcbiAgICAvL3ByZXZlbnQgcmVwcmludGluZyBwcmlvciBkYXRhXG4gICAgc3RhdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvL3ByaW50IGRhbWFnZSBhbmQgbGlmZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGFtYWdlOyBqKyspe1xuICAgICAgICBsZXQgZGFtYWdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYW1hZ2VkLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQoZGFtYWdlZCk7XG4gICAgfSAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW5ndGggLSBkYW1hZ2UpOyBpKyspe1xuICAgICAgICBsZXQgbGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWZlLmNsYXNzTGlzdC5hZGQoJ2xpZmUnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQobGlmZSk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT09IGRhbWFnZSl7XG4gICAgICAgIGxldCB0aGlzSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyAnLScgKyBzdWZmaXgpO1xuICAgICAgICB0aGlzSUQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gcHJpbnRQbGF5ZXJTdGF0cygpe1xuICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0NhcnJpZXInLCAnQycsICdwMScpO1xuICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0JhdHRsZXNoaXAnLCAnQicsICdwMScpO1xuICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0Rlc3Ryb3llcicsICdEJywgJ3AxJyk7XG4gICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnU3VibWFyaW5lJywgJ1MnLCAncDEnKTtcbiAgICBwcmludFN0YXRzKHBsYXllcjEsICdQYXRyb2wgQm9hdCcsICdQJywgJ3AxJyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50Q29tU3RhdHMoKSB7XG4gICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0NhcnJpZXInLCAnQycsICdjb20nKTtcbiAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnQmF0dGxlc2hpcCcsICdCJywgJ2NvbScpO1xuICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdEZXN0cm95ZXInLCAnRCcsICdjb20nKTtcbiAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnU3VibWFyaW5lJywgJ1MnLCAnY29tJyk7XG4gICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ1BhdHJvbCBCb2F0JywgJ1AnLCAnY29tJyk7XG59OyIsIi8vY29uc3Qgc2hpcCA9IHJlcXVpcmUgKCcuL3NoaXAuanMnKVxuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4uL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuaW1wb3J0IHsgQXVkaW9FdmVudEZuIH0gZnJvbSAnLi4vbW9kdWxlcy9hdWRpby5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuXG4vL3RvIGFjY2VzcyBzcXVhcmUgb24gYm9hcmQgdXNlIGdiLmJvYXJkW3JdW2NdXG5cbi8vTmV2ZXIgdXNlZCB1dGlsaXR5OiBjb252ZXJ0cyBjb2x1bW4gbGV0dGVyIHRvIG51bWJlciBmb3IgbG9va1VwXG5mdW5jdGlvbiBjb2xDb252ZXJ0IChsZXR0ZXIpe1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWy4uLkFycmF5KGJvYXJkU2l6ZSldLm1hcCgoXyxpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKzk3KSk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSAoZWwpID0+IGVsID09PSBsZXR0ZXI7XG4gICAgICAgIGNvbnN0IG51bSA9IGFscGhhYmV0LmZpbmRJbmRleChpdGVtKTtcbiAgICAgICAgcmV0dXJuIG51bVxufTtcblxuXG4vL05ldmVyIHVzZWQgdXRpbGl0eTogYm9hcmQgYXMgdmFyaWFibGVuYW1lLmJvYXJkLCBvbmx5IHdvcmtzIGZvciBmaXJzdCByb3dcbmZ1bmN0aW9uIGxvb2tVcCAoTGV0LCBOdW0sIGFycmF5KXtcbiAgICBjb25zdCBjID0gY29sQ29udmVydChMZXQpO1xuICAgIGNvbnN0IHIgPSBOdW07XG4gICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuYm9hcmRbY11bcl07XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGNsYXNzIGdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IgKGNvbCwgcm93KSB7XG4gICAgICAgIHRoaXMuY29sID0gY29sO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMucm93OyByKyspe1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb2w7IGMrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goeyB2YWx1ZSwgciwgYyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVCb2FyZC5wdXNoKHJvd3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfVxuICAgIFxuICAgIC8vdXRpbGl0eSBmdW5jdGlvblxuICAgIGNoZWNrT3BlbkJvYXJkIChyb3csIGNvbCl7XG4gICAgICAgIGlmICgocm93IDwgMCApIHx8IChyb3cgPj0gYm9hcmRTaXplICkpIHsgcmV0dXJuICdpbnZhbGlkJyB9XG4gICAgICAgIGlmICgoY29sIDwgMCApIHx8IChjb2wgPj0gYm9hcmRTaXplICkpIHsgcmV0dXJuICdpbnZhbGlkJyB9XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1gnIHx8IFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdDLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQi1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdTLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnUC1ISVQnXG4gICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ2ludmFsaWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd2YWxpZCd9XG4gICAgfVxuXG4gICAgcGxhY2VOZXdTaGlwKHR5cGUsIHIsIGMsIGRpcikge1xuICAgICAgICBsZXQgcm93ID0gcjtcbiAgICAgICAgbGV0IGNvbCA9IGM7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAodHlwZSk7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gJ0Rvd24nKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoKHItMSkgKyBuZXdTaGlwLmxlbmd0aCA+IChib2FyZFNpemUtMSkpIHt0aHJvdyBuZXcgRXJyb3IoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHJvdyArIGkpIDwgKHJvdyArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmJvYXJkW3JvdysrXVtjXSkudmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwLicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyICsgaSkgPCAociArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyKytdW2NdLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyID09PSAnVXAnKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAociAtIChuZXdTaGlwLmxlbmd0aC0xKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHJvdyAtIGkpID4gKHJvdyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93LS1dW2NdLnZhbHVlICE9PSAwKSB7dGhyb3cgbmV3IEVycm9yKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgLSBpKSA+IChyIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ItLV1bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdSaWdodCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoYy0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvciAoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKX1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sICsgaSkgPCAoY29sICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjb2wrK10udmFsdWUgIT09IDApe3Rocm93IG5ldyBFcnJvciAoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgKyBpKSA8IChjICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MrK10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnTGVmdCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjIC0gKG5ld1NoaXAubGVuZ3RoICsgMSkgPCAwKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGNvbCAtIGkpID4gKGNvbCAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbC0tXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyAtIGkpID4gKGMgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYy0tXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrIChyLCBjKSB7XG4gICAgICAgIGxldCBmbGVldCA9IHRoaXMuc2hpcHM7XG4gICAgICAgIGxldCB0aGlzU2hpcDtcbiAgICAgICAgLy9NaXNzaWxlIGZpcmVkIGF1ZGlvIGV2ZW50IGNyZWF0ZSBhbmQgZGlzcGF0Y2hlZFxuICAgICAgICBsZXQgbWlzc2lsZVNvdW5kID0gQXVkaW9FdmVudEZuICgnTWlzc2lsZScpO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG1pc3NpbGVTb3VuZCk7XG4gICAgICAgIC8vaWYgYWxyZWFkeSBtaXNzIHJlY29yZCBhbm90aGVyIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdYJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHdhdGVyIHJlY29yZCBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGNhcnJpZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnQycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGJhdHRlc2hpcCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQicpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdCJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgZGVzdG9yeWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdEJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0QnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBzdWJtYXJpbmUgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnUycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHBhdHJvbCBib2F0IHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdQJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ1AnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2N1c3RvbSBzb3VuZCBldmVudCBleHBsb3Npb25cbiAgICAgICAgbGV0IGJvYXJkaGl0ID0gQXVkaW9FdmVudEZuICgnZXhwbG9zaW9uJyk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoYm9hcmRoaXQpO1xuICAgICAgICAvL3JlY29yZCBoaXQgdG8gYm9hcmRcbiAgICAgICAgbGV0IHNoaXBIaXQgPSB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9IGAke3NoaXBIaXR9LUhJVGA7XG4gICAgfVxuICAgIGNoZWNrU3VuayAoKXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IFtdO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzBdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1sxXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMl0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzNdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1s0XS5pc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiBzdGF0dXMuZXZlcnkoaXRlbSA9PiBpdGVtID09PSB0cnVlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuXG5leHBvcnQgY2xhc3MgaHVtYW5QbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMud2lucyA9IDA7XG4gICAgICAgIHRoaXMubG9zc2VzID0gMDtcbiAgICAgICAgdGhpcy5zdHJlYWsgPSAwO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsYm9hcmRTaXplKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBjb21wUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGV2ZWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG4gICAgfVxufVxuLypcbm1vZHVsZS5leHBvcnRzID0gaHVtYW5QbGF5ZXJcbm1vZHVsZS5leHBvcnRzID0gY29tcFBsYXllclxuKi8iLCJleHBvcnQgY2xhc3Mgc2hpcCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdDYXJyaWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdCYXR0bGVzaGlwJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0InO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdEZXN0cm95ZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnRCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1N1Ym1hcmluZScpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdTJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnUGF0cm9sIEJvYXQnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMjtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUCc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgIH1cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgICB9XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IHNoaXBcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwXG5cbiJdLCJuYW1lcyI6WyJodW1hblBsYXllciIsImNvbXBQbGF5ZXIiLCJwcmludEJvYXJkIiwid2VsY29tZUZvcm1ET00iLCJkaXNwbGF5Q29tcHV0ZXIiLCJzaGlwQnRuSGFuZGxlciIsInJlbW92ZVNoaXBCdG5zIiwicHJpbnRTdGF0cyIsInByaW50UGxheWVyU3RhdHMiLCJwcmludENvbVN0YXRzIiwicGxheWVyU2hpcE92ZXJsYXkiLCJwbGFjZUNvbXB1dGVyIiwicmFuZG9tUm93IiwicmFuZG9tQ29sIiwicmFuZG9tQXR0YWNrIiwidGFyZ2V0ZWRBdHRhY2siLCJsYXN0SGl0IiwiQXVkaW9FdmVudEZuIiwibWlzc2lsZUZpcmVkIiwiYm9hdGhvcm4iLCJleHBsb3Npb24iLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGV0YWlsIiwidHlwZSIsIm1pc3NpbGVTb3VuZCIsIkF1ZGlvIiwicGxheSIsImhvcm5Tb3VuZCIsImV4cGxvc2lvblNvdW5kIiwic2V0VGltZW91dCIsImJvYXJkU2l6ZSIsImxldmVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWxjb21lRm9ybSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImdiIiwiYm9hcmQiLCJyYW5kb21TZXRQbGF5ZXIiLCJyYW5kb21CdG4iLCJwbGF5ZXJOYW1lIiwic3R5bGUiLCJsZWZ0IiwiZGlzcGxheSIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BhdGNoRXZlbnQiLCJmb3JtIiwic3RhcnRDb3VudCIsInNoaXBzIiwibGVuZ3RoIiwicm93IiwiY29sIiwic2hpcFR5cGUiLCJpbm5lclRleHQiLCJkaXJlY3Rpb24iLCJzaGlwSUQiLCJzbGljZSIsInBsYWNlTmV3U2hpcCIsIm5ld0NvdW50IiwicmVtb3ZlIiwidGFyZ2V0QnRuIiwiY29uY2F0IiwicGxheWVyQ29udGFpbmVyIiwiY29tcENvbnRhaW5lciIsInByaW50Q29tQm9hcmRTdGF0cyIsImNoZWNrU3VuayIsIndpbkFsZXJ0IiwiUmFuZG9tTW92ZSIsInJlY2VpdmVBdHRhY2siLCJsb3NlQWxlcnQiLCJwcmludEJvYXJkYW5kT3ZlcmxheXMiLCJnYW1lUmVzZXQiLCJyZXNldEJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY3JlZGl0U2NyZWVuIiwiY3JlZGl0U24iLCJFdmVudE5hbWUiLCJhdWRpb0V2ZW50IiwiQ3VzdG9tRXZlbnQiLCJtZXNzYWdlIiwic3RhdHVzIiwiZ2FtZWJvYXJkIiwic2hpcCIsImFycmF5U2hpcHMiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21EaXIiLCJwbGFjZVNoaXAiLCJjcHUiLCJ0cnlBZ2FpbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tPcGVuQm9hcmQiLCJ0YXJnZXRSb3ciLCJ1bmRlZmluZWQiLCJ0YXJnZXRDb2wiLCJlbmVteSIsInNhdmVkUm93Iiwic2F2ZWRDb2wiLCJzdG9yZWRIaXQiLCJsYXN0Q291bnQiLCJwb3N0U3Vua0F0dCIsImNhclN1bmsiLCJpc1N1bmsiLCJiYXRTdW5rIiwiZGlzU3VuayIsInN1YlN1bmsiLCJwYXRTdW5rIiwiY291bnRUcnVlIiwiZmlsdGVyIiwiYWRqYWNlbnQiLCJyb3dQbHVzIiwicm93TWludXMiLCJjb2xQbHVzIiwiY29sTWludXMiLCJyb3dWYWwiLCJhYnMiLCJjb2xWYWwiLCJzdGFydFNjcmVlbiIsIm1haW5QYWdlIiwibmFtZSIsInRleHRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicm93Q29udiIsIm51bWJlciIsImFscGhhYmV0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImxldHRlciIsImNvbnRhaW5lciIsInBsYXllciIsInNoaXBSb3ciLCJzaGlwQ29sIiwibWF4IiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJpbm5lckhUTUwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9sb29wIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiciIsImMiLCJOdW1iZXIiLCJyb3dDb252ZXJ0ZWQiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImFwcGVuZENoaWxkIiwiZXJyIiwiZiIsInByaW50Qm9hcmRTaGlwcyIsInByZWZpeCIsInRhcmdldEJvYXJkIiwibWluR3JpZFJvdyIsIm1heEdyaWRSb3ciLCJtaW5HcmlkQ29sIiwibWF4R3JpZENvbCIsInRhcmdldHMiLCJzaGlwTGVuZ3RoIiwidGFyZ2V0IiwiY3VycmVudEdyaWRSb3ciLCJwYXJzZUludCIsImN1cnJlbnRHcmlkQ29sIiwic2hpcE92ZXJsYXkiLCJpZCIsInJvd0VuZCIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93U3RhcnQiLCJncmlkUm93RW5kIiwiY29sRW5kIiwic2hpcEJ1dHRvbnMiLCJwbGFjZW1lbnQiLCJmb3JtVGl0bGUiLCJjb2x1bWVuU2VsZWN0Iiwicm93U2VsZWN0IiwiYnRuIiwiZGF0YVNoaXBUeXBlIiwiZ2V0QXR0cmlidXRlIiwib3B0IiwiaiIsIm9wdFIiLCJjb252ZXJ0ZWQiLCJzb21lIiwic2hpcEJ0bnMiLCJjb21wdXRlckRpc3BsYXkiLCJzdWZmaXgiLCJmbGVldCIsInRoaXNTaGlwIiwiZmluZCIsImRhbWFnZSIsImRhbURpdiIsInN0YXRzRGl2IiwiZGFtYWdlZCIsImxpZmUiLCJ0aGlzSUQiLCJjb2xDb252ZXJ0IiwiaXRlbSIsImVsIiwibnVtIiwiZmluZEluZGV4IiwibG9va1VwIiwiTGV0IiwiTnVtIiwiYXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVCb2FyZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdhbWVCb2FyZCIsInJvd3MiLCJwdXNoIiwiZGlyIiwibmV3U2hpcCIsIkVycm9yIiwiZXJyb3IiLCJpbmRleCIsImluZGV4T2YiLCJoaXQiLCJib2FyZGhpdCIsInNoaXBIaXQiLCJldmVyeSIsIndpbnMiLCJsb3NzZXMiLCJzdHJlYWsiLCJzdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==