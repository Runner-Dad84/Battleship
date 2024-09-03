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
/*ship pacement form*/
#placement {
    width: 25vw;
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
}

/* Ships stat displays - may consider moving to a separate style sheet*/
/*Outermost ship stat divs*/

.p1Ship, .comShip {
    height: 10vh;
    width: 15vw;
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


`, "",{"version":3,"sources":["webpack://./src/styles/buttons.style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;AAEA,yBAAyB;AACzB;IACI,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,WAAW;IACX,8CAA8C;IAC9C,mBAAmB;AACvB;AACA,qBAAqB;AACrB;IACI,WAAW;IACX,SAAS;IACT,2BAA2B;IAC3B,8CAA8C;IAC9C,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,8CAA8C;IAC9C,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,sCAAsC;IACtC,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;QACQ,YAAY;QACZ,iBAAiB;AACzB;AACA;IACI,oCAAoC;AACxC;;;;;AAKA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA,uEAAuE;AACvE,2BAA2B;;AAE3B;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB,yDAA8C;AAClD;AACA;IACI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;IACxB;AACJ;AACA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;AACA,yCAAyC;AACzC;IACI,aAAa;IACb,6BAA6B;AACjC;AACA,gCAAgC;AAChC;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,yDAA8C;IAC9C,oBAAoB;AACxB;;AAEA;IACI,yDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAA6C;IAC7C,oBAAoB;AACxB","sourcesContent":[":root {\n    --deployButtons: rgb(148, 128, 90);\n}\n\n/*Ship pacement buttons */\n.p1 {\n    background-color: cadetblue;\n    height: 2.5em;\n    width: 8em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n.p1.deployedShip {\n    background-color: gray;\n    color: white;\n    border: 3px bold black;\n}\n#random {\n    background-color: var(--deployButtons);\n    height: 2.5em;\n    width: 14em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n/*ship pacement form*/\n#placement {\n    width: 25vw;\n    gap: .2em;\n    background-color: cadetblue;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n    padding: 2%;\n}\n#placement select {\n    font-family: 'Courier New', Courier, monospace;\n    color: black;\n    font-weight: bolder;\n    height: 2.5vh;\n    width: 4em;\n    background-color: white;\n}\n#placement .formInput {\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bolder;\n}\n#placeBtn {\n    width: 13em;\n    height: 2.5em;\n    background-color: var(--deployButtons);\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n#placeBtn:hover {\n        color: white;\n        font-weight: 1000;\n}\n#pacement input {\n    background-color: rgb(103, 103, 230);\n}\n\n\n\n\n.p1:hover, #random:hover{\n    color: white;\n    font-weight: 1000;\n}\n#deployed-p1,\n#deployed-com {\n    display: none;\n    flex-direction: column;\n}\n#shipDamaged,\n#shipDamage-com {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    align-items: center;\n}\n\n/* Ships stat displays - may consider moving to a separate style sheet*/\n/*Outermost ship stat divs*/\n\n.p1Ship, .comShip {\n    height: 10vh;\n    width: 15vw;\n    margin: .45em;\n    padding-left: 0.5em;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: .25em solid black;\n}\n.p1Ship {\n    background-color: rgb(3, 115, 167);\n}\n.comShip {\n    background-color: rgb(104, 81, 39);\n}\n.stats {\n    display: flex;\n}\n.life {\n    height: 2em;\n    width: 2em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/Anchor2.png');\n}\n.damaged {\n    height: 2.8em;\n    width: 2.8em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/hit.png')\n}\n.sunk {\n    background-color: rgb(139, 22, 22);\n    border: 3px solid orange;\n}\n/*Div contains life/damage for each ship*/\n#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {\n    display: flex;\n    justify-content: space-around;\n}\n/*Outer most div for ship stats*/\n#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {\n    text-align: center;\n    color: white;\n    font-weight: bolder;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 1em;\n}\n\n#p1-C, #com-C {\n    background-image: url('../images/carrier.png');\n    background-size: 75%;\n}\n\n#p1-B, #com-B {\n    background-image: url('../images/battleship.png');\n    background-size: 100%;\n}\n\n#p1-S, #com-S {\n    background-image: url('../images/submarine.png');\n    background-size: 100%;\n}\n\n#p1-D, #com-D {\n    background-image: url('../images/destroyer.png');\n    background-size: 100%;\n}\n\n#p1-P, #com-P {\n    background-image: url('../images/patrol.png');\n    background-size: 50%;\n}\n\n\n"],"sourceRoot":""}]);
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
    background-color: rgb(218, 164, 64);
}
#p1Console {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: rgb(111, 111, 231);
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

`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;AACvC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;;AAEA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;AACtB;;;AAGA;;IAEI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,yDAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;;;;;;;;;;IAUI,yDAA0C;IAC1C,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yDAAkD;IAClD,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;;;;;;;;;;CAUC;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;;AAE5B;;AAEA;IACI;AACJ","sourcesContent":["\n#comConsole {\n    display: none;\n    grid-template-columns: 3fr 1fr;\n    background-color: rgb(218, 164, 64);\n}\n#p1Console {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    background-color: rgb(111, 111, 231);\n}\n\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    justify-self: center;\n    aspect-ratio: 1 / 1;\n    height:85vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n#shipButtons {\n    justify-self: center;\n}\n\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    color: transparent;\n}\n\n\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: none;\n    color: transparent;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-image: url('../images/miss.png');\n    background-size: cover;\n}\n\n#container-p1 .C-HIT,\n#container-p1 .B-HIT,\n#container-p1 .D-HIT,\n#container-p1 .S-HIT,\n#container-p1 .P-HIT,\n#container-p2 .C-HIT,\n#container-p2 .B-HIT,\n#container-p2 .D-HIT,\n#container-p2 .S-HIT,\n#container-p2 .P-HIT {\n    background-image: url('../images/hit.png');\n    background-size: cover;\n    color: transparent;\n}\n\n\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n/*\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n*/\n\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n    \n}\n\n.vert-overlay-C {\n    height: 100%\n}\n\n"],"sourceRoot":""}]);
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
    color: white;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/startscreen.style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,kDAAkD;IAClD,kCAAkC;AACtC;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,8BAA8B;IAC9B,yCAAyC;IACzC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,2BAA2B;IAC3B,sBAAsB;IACtB,yDAA6C;IAC7C,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kCAAkC;IAClC,QAAQ;;AAEZ;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;;AAEvC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yCAAyC;IACzC,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;AACtB","sourcesContent":[":root {\n    --welcomeTextColor: rgb(119, 86, 26);\n    --welcomeFontFam:'Courier New', Courier, monospace;\n    --btnInputBorder: .2em solid white;\n}\n#startscreen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1000;\n    background-color: black;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n#startscreen #welcome {\n    position: fixed;\n    top: 40vh;\n    color:white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n#welcomeTitle {\n    color: var(--welcomeTextColor);\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 3.8em;\n    font-style: italic;\n}\n#welcomePic {\n    position: fixed;\n    top: 5vh;\n    height: 25vh;\n    width: 25vw;\n    display: block;\n    border-radius: 50%;\n    background-position: center;\n    background-size: cover;\n    background-image: url(../images/shipmain.png);\n    background-color: white;\n}\n#welcomeForm {\n    display: grid;\n    color: white;\n    font-family: var(--welcomeFontFam);\n    gap: 1em;\n\n}\n#welcomeForm select {\n    font-family: var(--welcomeFontFam);\n    color: white;\n    font-weight: bolder;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n\n}\n#welcomeForm input {\n    border-radius: 5px;\n    height: 2.5vh;\n    border: var(--btnInputBorder);\n    background-color:rgb(170, 218, 218);\n}\n\n#startBtn {\n    height: 5vh;\n    margin-top: 2em;\n    background-color: var(--welcomeTextColor);\n    color: white;\n    font-family: var(--welcomeFontFam);\n    font-weight: 600;\n    border: var(--btnInputBorder);\n    border-radius: 5px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   AudioEventFn: () => (/* binding */ AudioEventFn),
/* harmony export */   audioEvent: () => (/* binding */ audioEvent),
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
/* harmony import */ var _audio_missileFired_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/missileFired.wav */ "./src/audio/missileFired.wav");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }










var player1;
var computer;
var audioEvent;

//custom audio events - creates audio event
function AudioEventFn(EventName) {
  audioEvent = new CustomEvent('AudioEvent', {
    detail: {
      type: EventName,
      message: "Success - execute ".concat(EventName),
      status: 'success'
    }
  });
}
;
document.addEventListener('AudioEvent', function () {
  //const missileSound = document.getElementById('missileSound');
  var missileSound = new Audio(_audio_missileFired_wav__WEBPACK_IMPORTED_MODULE_9__);
  console.log(audioEvent);
  missileSound.play();
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
    player1 = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.humanPlayer('Andrew');
    computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_2__.compPlayer('computer', 'easy');
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
  //print player name
  var name = document.getElementById('name').value;
  document.getElementById('playerName').textContent = name;

  //remove start screen and welcome form
  welcomeForm.style.display = 'none';
  startScreen.style.display = 'none';
  //reveal the main page
  mainPage.style.display = 'flex';
  mainPage.style.backgroundColor = 'white';
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
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ship.js */ "./src/modules/ship.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
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

//to access square on board us me board.board[r][c]

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
      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.AudioEventFn)('Missile');
      document.dispatchEvent(_index_js__WEBPACK_IMPORTED_MODULE_1__.audioEvent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7TUFDZixJQUFJLENBQUNvSCxFQUFFLEdBQUcsR0FBRztJQUNqQjtJQUFDO0VBQ0w7RUFBQyxPQUFBMkMsWUFBQSxDQUFBdk4sSUFBQTtJQUFBd04sR0FBQTtJQUFBMUssS0FBQSxFQUVELFNBQUFxTCxHQUFHQSxDQUFBLEVBQUU7TUFDRCxJQUFJLENBQUM3QixNQUFNLEVBQUU7SUFDakI7RUFBQztJQUFBa0IsR0FBQTtJQUFBMUssS0FBQSxFQUNELFNBQUE2QyxNQUFNQSxDQUFBLEVBQUU7TUFDSixJQUFJLElBQUksQ0FBQzJHLE1BQU0sS0FBSyxJQUFJLENBQUM5SSxNQUFNLEVBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUNpTCxJQUFJLEdBQUcsSUFBSTtNQUMzQixDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUs7TUFBQztJQUMxQjtFQUFDO0FBQUE7QUFDSjs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcz84YmExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3M/NTZhZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3M/MGZkYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3M/MjE0NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQW5jaG9yMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGF0cm9sLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGVwbG95QnV0dG9uczogcmdiKDE0OCwgMTI4LCA5MCk7XG59XG5cbi8qU2hpcCBwYWNlbWVudCBidXR0b25zICovXG4ucDEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiA4ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnAxLmRlcGxveWVkU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggYm9sZCBibGFjaztcbn1cbiNyYW5kb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDE0ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLypzaGlwIHBhY2VtZW50IGZvcm0qL1xuI3BsYWNlbWVudCB7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgZ2FwOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMiU7XG59XG4jcGxhY2VtZW50IHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIHdpZHRoOiA0ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiNwbGFjZUJ0biB7XG4gICAgd2lkdGg6IDEzZW07XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXBsb3lCdXR0b25zKTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jcGxhY2VCdG46aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuI3BhY2VtZW50IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDIzMCk7XG59XG5cblxuXG5cbi5wMTpob3ZlciwgI3JhbmRvbTpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59XG4jZGVwbG95ZWQtcDEsXG4jZGVwbG95ZWQtY29tIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jc2hpcERhbWFnZWQsXG4jc2hpcERhbWFnZS1jb20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXG4vKk91dGVybW9zdCBzaGlwIHN0YXQgZGl2cyovXG5cbi5wMVNoaXAsIC5jb21TaGlwIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgbWFyZ2luOiAuNDVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcbn1cbi5wMVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XG59XG4uY29tU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcbn1cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5saWZlIHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuLmRhbWFnZWQge1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgd2lkdGg6IDIuOGVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pXG59XG4uc3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjIsIDIyKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG4vKkRpdiBjb250YWlucyBsaWZlL2RhbWFnZSBmb3IgZWFjaCBzaGlwKi9cbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi8qT3V0ZXIgbW9zdCBkaXYgZm9yIHNoaXAgc3RhdHMqL1xuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuXG4jcDEtQiwgI2NvbS1CIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUywgI2NvbS1TIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUCwgI2NvbS1QIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0EscUJBQXFCO0FBQ3JCO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7UUFDUSxZQUFZO1FBQ1osaUJBQWlCO0FBQ3pCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUEsdUVBQXVFO0FBQ3ZFLDJCQUEyQjs7QUFFM0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHlEQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7QUFDQSx5Q0FBeUM7QUFDekM7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5REFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0Msb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kZXBsb3lCdXR0b25zOiByZ2IoMTQ4LCAxMjgsIDkwKTtcXG59XFxuXFxuLypTaGlwIHBhY2VtZW50IGJ1dHRvbnMgKi9cXG4ucDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wMS5kZXBsb3llZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IGJvbGQgYmxhY2s7XFxufVxcbiNyYW5kb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXBsb3lCdXR0b25zKTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgd2lkdGg6IDE0ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi8qc2hpcCBwYWNlbWVudCBmb3JtKi9cXG4jcGxhY2VtZW50IHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGdhcDogLjJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuI3BsYWNlbWVudCBzZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4jcGxhY2VCdG4ge1xcbiAgICB3aWR0aDogMTNlbTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwbG95QnV0dG9ucyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNwbGFjZUJ0bjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcXG59XFxuI3BhY2VtZW50IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAyMzApO1xcbn1cXG5cXG5cXG5cXG5cXG4ucDE6aG92ZXIsICNyYW5kb206aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcbiNkZXBsb3llZC1wMSxcXG4jZGVwbG95ZWQtY29tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NoaXBEYW1hZ2VkLFxcbiNzaGlwRGFtYWdlLWNvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFNoaXBzIHN0YXQgZGlzcGxheXMgLSBtYXkgY29uc2lkZXIgbW92aW5nIHRvIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQqL1xcbi8qT3V0ZXJtb3N0IHNoaXAgc3RhdCBkaXZzKi9cXG5cXG4ucDFTaGlwLCAuY29tU2hpcCB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbjogLjQ1ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcXG59XFxuLnAxU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XFxufVxcbi5jb21TaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcXG59XFxuLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmxpZmUge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0FuY2hvcjIucG5nJyk7XFxufVxcbi5kYW1hZ2VkIHtcXG4gICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgd2lkdGg6IDIuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGl0LnBuZycpXFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjIsIDIyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG4vKkRpdiBjb250YWlucyBsaWZlL2RhbWFnZSBmb3IgZWFjaCBzaGlwKi9cXG4jcDEtc3RhdC1DLCAjcDEtc3RhdC1CLCAjcDEtc3RhdC1ELCAjcDEtc3RhdC1TLCAjcDEtc3RhdC1QLCAjY29tLXN0YXQtQywgI2NvbS1zdGF0LUIsICNjb20tc3RhdC1ELCAjY29tLXN0YXQtUywgI2NvbS1zdGF0LVAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLypPdXRlciBtb3N0IGRpdiBmb3Igc2hpcCBzdGF0cyovXFxuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbiNwMS1DLCAjY29tLUMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jYXJyaWVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcXG59XFxuXFxuI3AxLUIsICNjb20tQiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLVMsICNjb20tUyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtRCwgI2NvbS1EIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZGVzdHJveWVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1QLCAjY29tLVAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wYXRyb2wucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9PY2Vhbi1Cb2FyZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWlzcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9CYXR0bGVzaGlwMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvRGVzdHJveWVyMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc3VibWFyaW5lMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvUGF0cm9sMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FycmllcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4jY29tQ29uc29sZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTY0LCA2NCk7XG59XG4jcDFDb25zb2xlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDIzMSk7XG59XG5cbiNjb250YWluZXItcDEsXG4jY29udGFpbmVyLXAyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGhlaWdodDo4NXZoO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4jc2hpcEJ1dHRvbnMge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcbiNjb250YWluZXItcDEgLmhpdCxcbiNjb250YWluZXItcDIgLmhpdCxcbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0LFxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4jY29udGFpbmVyLXAxIC5ib2F0LFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNjb250YWluZXItcDEgLm1pc3MsXG4jY29udGFpbmVyLXAyIC5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRhaW5lci1wMSAuQy1ISVQsXG4jY29udGFpbmVyLXAxIC5CLUhJVCxcbiNjb250YWluZXItcDEgLkQtSElULFxuI2NvbnRhaW5lci1wMSAuUy1ISVQsXG4jY29udGFpbmVyLXAxIC5QLUhJVCxcbiNjb250YWluZXItcDIgLkMtSElULFxuI2NvbnRhaW5lci1wMiAuQi1ISVQsXG4jY29udGFpbmVyLXAyIC5ELUhJVCxcbiNjb250YWluZXItcDIgLlMtSElULFxuI2NvbnRhaW5lci1wMiAuUC1ISVQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4vKlNoaXAgaWNvbnMgb24gYm9hcmQqL1xuI292ZXJsYXktQiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUIge1xuICAgIGhlaWdodDogMTMwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktRCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udmVydC1vdmVybGF5LUQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuI292ZXJsYXktUyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaG9yei1vdmVybGF5LVMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4jb3ZlcmxheS1QIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4vKlxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLmhvcnotb3ZlcmxheS1QIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cbiovXG5cbiNvdmVybGF5LUMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhvcnotb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEyMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBcbn1cblxuLnZlcnQtb3ZlcmxheS1DIHtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseURBQWtEO0lBQ2xELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7Ozs7OztJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7OztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseURBQTJDO0lBQzNDLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7Ozs7OztJQVVJLHlEQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxzQkFBc0I7QUFDdEI7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1oseURBQWtEO0lBQ2xELDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7Ozs7Ozs7Ozs7Q0FVQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG1EQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiNjb21Db25zb2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNjQsIDY0KTtcXG59XFxuI3AxQ29uc29sZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyMzEpO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxLFxcbiNjb250YWluZXItcDIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBoZWlnaHQ6ODV2aDtcXG4gICAgZ2FwOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9PY2Vhbi1Cb2FyZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI3NoaXBCdXR0b25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXItcDEgLmNlbGwsXFxuI2NvbnRhaW5lci1wMiAuY2VsbCxcXG4jY29udGFpbmVyLXAxIC5oaXQsXFxuI2NvbnRhaW5lci1wMiAuaGl0LFxcbiNjb250YWluZXItcDEgLmJvYXQsXFxuI2NvbnRhaW5lci1wMiAuYm9hdCxcXG4jY29udGFpbmVyLXAxIC5taXNzLFxcbiNjb250YWluZXItcDIgLm1pc3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbiNjb250YWluZXItcDEgLmNlbGwsXFxuI2NvbnRhaW5lci1wMiAuY2VsbCB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5taXNzLFxcbiNjb250YWluZXItcDIgLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9taXNzLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5DLUhJVCxcXG4jY29udGFpbmVyLXAxIC5CLUhJVCxcXG4jY29udGFpbmVyLXAxIC5ELUhJVCxcXG4jY29udGFpbmVyLXAxIC5TLUhJVCxcXG4jY29udGFpbmVyLXAxIC5QLUhJVCxcXG4jY29udGFpbmVyLXAyIC5DLUhJVCxcXG4jY29udGFpbmVyLXAyIC5CLUhJVCxcXG4jY29udGFpbmVyLXAyIC5ELUhJVCxcXG4jY29udGFpbmVyLXAyIC5TLUhJVCxcXG4jY29udGFpbmVyLXAyIC5QLUhJVCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hpdC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5cXG4vKlNoaXAgaWNvbnMgb24gYm9hcmQqL1xcbiNvdmVybGF5LUIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0JhdHRsZXNoaXAyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1CIHtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1CIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4jb3ZlcmxheS1EIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9EZXN0cm95ZXIyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1EIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4udmVydC1vdmVybGF5LUQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbiNvdmVybGF5LVMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3N1Ym1hcmluZTIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LVMge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbiNvdmVybGF5LVAge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL1BhdHJvbDIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4vKlxcbi5ob3J6LW92ZXJsYXktUCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1QIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG4qL1xcblxcbiNvdmVybGF5LUMge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9jYXJyaWVyMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5ob3J6LW92ZXJsYXktQyB7XFxuICAgIGhlaWdodDogMTIwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udmVydC1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEwMCVcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcGxhY2VtZW50IHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufVxuXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcblxufVxuXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xuICAgIHdpZHRoOiA1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cblxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDNlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jcGxhY2VtZW50ICNwbGFjZUJ0biB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4jZGVwbG95ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGxhY2VtZW50IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cXG5cXG4jcGxhY2VtZW50ICNmb3JtVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtTGFibGUge1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI3BsYWNlbWVudCAjcGxhY2VCdG4ge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jZGVwbG95ZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHZ3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zaGlwbWFpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXdlbGNvbWVUZXh0Q29sb3I6IHJnYigxMTksIDg2LCAyNik7XG4gICAgLS13ZWxjb21lRm9udEZhbTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLS1idG5JbnB1dEJvcmRlcjogLjJlbSBzb2xpZCB3aGl0ZTtcbn1cbiNzdGFydHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc3RhcnRzY3JlZW4gI3dlbGNvbWUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwdmg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiN3ZWxjb21lVGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMy44ZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI3dlbGNvbWVQaWMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDV2aDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiN3ZWxjb21lRm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBnYXA6IDFlbTtcblxufVxuI3dlbGNvbWVGb3JtIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xuXG59XG4jd2VsY29tZUZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xufVxuXG4jc3RhcnRCdG4ge1xuICAgIGhlaWdodDogNXZoO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtEQUFrRDtJQUNsRCxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5REFBNkM7SUFDN0MsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxRQUFROztBQUVaO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1DQUFtQzs7QUFFdkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXdlbGNvbWVUZXh0Q29sb3I6IHJnYigxMTksIDg2LCAyNik7XFxuICAgIC0td2VsY29tZUZvbnRGYW06J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAtLWJ0bklucHV0Qm9yZGVyOiAuMmVtIHNvbGlkIHdoaXRlO1xcbn1cXG4jc3RhcnRzY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzdGFydHNjcmVlbiAjd2VsY29tZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0MHZoO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuI3dlbGNvbWVUaXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMy44ZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuI3dlbGNvbWVQaWMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvc2hpcG1haW4ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiN3ZWxjb21lRm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcXG4gICAgZ2FwOiAxZW07XFxuXFxufVxcbiN3ZWxjb21lRm9ybSBzZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcXG5cXG59XFxuI3dlbGNvbWVGb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XFxufVxcblxcbiNzdGFydEJ0biB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBmb3JtLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVib2FyZCwgIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllci5qcydcbmltcG9ydCB7IHByaW50Qm9hcmQsIHdlbGNvbWVGb3JtRE9NLCBkaXNwbGF5Q29tcHV0ZXIsIHNoaXBCdG5IYW5kbGVyLCByZW1vdmVTaGlwQnRucywgcHJpbnRTdGF0cywgcGxheWVyU2hpcE92ZXJsYXkgfSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0IHsgcGxhY2VDb21wdXRlciwgcmFuZG9tUm93LCByYW5kb21Db2wsIHJhbmRvbUF0dGFjaywgdGFyZ2V0ZWRBdHRhY2ssIGxhc3RIaXQsIHN0b3JlZEhpdCAsIHRhcmdldENvbCwgdGFyZ2V0Um93LCBzYXZlZFJvdywgc2F2ZWRDb2wgfSBmcm9tICcuL21vZHVsZXMvY29tcHV0ZXIuanMnXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcyc7XG5pbXBvcnQgbWlzc2lsZUZpcmVkIGZyb20gJy4vYXVkaW8vbWlzc2lsZUZpcmVkLndhdidcblxuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBjb21wdXRlcjtcbmV4cG9ydCBsZXQgYXVkaW9FdmVudDtcblxuLy9jdXN0b20gYXVkaW8gZXZlbnRzIC0gY3JlYXRlcyBhdWRpbyBldmVudFxuZXhwb3J0IGZ1bmN0aW9uIEF1ZGlvRXZlbnRGbiAoRXZlbnROYW1lKXtcbiAgICBhdWRpb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdBdWRpb0V2ZW50Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEV2ZW50TmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWNjZXNzIC0gZXhlY3V0ZSAke0V2ZW50TmFtZX1gLFxuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdBdWRpb0V2ZW50JywgKCk9PiB7XG4gICAgLy9jb25zdCBtaXNzaWxlU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzc2lsZVNvdW5kJyk7XG4gICAgY29uc3QgbWlzc2lsZVNvdW5kID0gbmV3IEF1ZGlvKG1pc3NpbGVGaXJlZCk7XG4gICAgY29uc29sZS5sb2coYXVkaW9FdmVudCk7XG4gICAgbWlzc2lsZVNvdW5kLnBsYXkoKTtcbn0pXG5cbi8vd2VsY29tZSBmb3JtXG5leHBvcnQgbGV0IGJvYXJkU2l6ZTtcbmNvbnN0IGxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4oZnVuY3Rpb24gd2VsY29tZUZvcm0gKCl7XG4gICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICB3ZWxjb21lRm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYm9hcmRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS52YWx1ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgcGxheWVyc1xuICAgICAgICAgICAgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcignQW5kcmV3Jyk7XG4gICAgICAgICAgICBjb21wdXRlciA9IG5ldyBjb21wUGxheWVyKCdjb21wdXRlcicsICdlYXN5Jyk7XG4gICAgICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgICAgIHdlbGNvbWVGb3JtRE9NKCk7XG4gICAgfSlcbn0pKCk7XG5cbi8vcGxheWVyIHBsYWNlIGFsbCBwbGF5ZXIgc2hpcHMgcmFuZG9tbHkgb24gYnV0dG9uIHB1c2hcbihmdW5jdGlvbiByYW5kb21TZXRQbGF5ZXIgKCl7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHBsYWNlQ29tcHV0ZXIocGxheWVyMSk7XG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9uc1xuICAgICAgICByZW1vdmVTaGlwQnRucyAoKTtcbiAgICAgICAgLy9wbGFjZSBhbmQgcHJpbnQgY29tcHV0ZXIgYm9hcmQgYW5kIHNoaXBzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucGFnZScpLmNsYXNzTGlzdC5hZGQoJ21haW5QYWdlJyk7XG4gICAgICAgIGRpc3BsYXlDb21wdXRlcigpO1xuICAgICAgICBwbGFjZUNvbXB1dGVyKGNvbXB1dGVyKTtcbiAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vL3BsYXllciBwbGFjZSBzaGlwcyBvbiBib2FyZCBtYW51YWxseVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50JylcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vc2hpcCBjb3VudCBwcmlvciB0byBwbGFjZW1lbnRcbiAgICAgICAgbGV0IHN0YXJ0Q291bnQgPSBwbGF5ZXIxLmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgLy9zdG9yZSB2YWxlcyBmcm9tIGlucHV0IGZvcm1cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKS52YWx1ZTtcbiAgICAgICAgbGV0IHNoaXBUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcElEID0gc2hpcFR5cGUuc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vcGxhY2Ugc2hpcFxuICAgICAgICBwbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcChzaGlwVHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbik7XG4gICAgICAgIC8vc2hpcCBjb3VudCBhZnRlciBhdHRlbXRwZWQgcGxhY2VtZW50XG4gICAgICAgIGxldCBuZXdDb3VudCA9IHBsYXllcjEuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FyZCwgb3ZlcmxheSwgc2hpcCBzdGF0c1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCBzaGlwVHlwZSwgc2hpcElELCAncDEnKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9ucyBpZiBhbGwgZml2ZSBzaGlwcyBwbGFjZWRcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMoKTtcbiAgICAgICAgcmFuZG9tQnRuLnJlbW92ZSgpXG4gICAgICAgIC8vY2hlY2sgaWYgc2hpcCB3YXMgcGxhY2VkXG4gICAgICAgIGlmKChuZXdDb3VudCA+IHN0YXJ0Q291bnQpICYmIChuZXdDb3VudCA8IDUpKXtcbiAgICAgICAgICAgIC8vIGlmIHNvIGFkZCBkZXBsb3llZCBjbGFzcyBzaGlwIGJ0blxuICAgICAgICAgICAgbGV0IHRhcmdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4tJHtzaGlwVHlwZX1gKTtcbiAgICAgICAgICAgIHRhcmdldEJ0bi5jbGFzc0xpc3QuYWRkKCdkZXBsb3llZFNoaXAnKVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgYWxsIHNoaXBzIHBsYWNlIGRpc3BsYXkgY29tcHV0ZXJcbiAgICAgICAgaWYocGxheWVyMS5nYi5zaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgZGlzcGxheUNvbXB1dGVyKCk7XG4gICAgICAgICAgICBwbGFjZUNvbXB1dGVyKGNvbXB1dGVyKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgIH1cbiAgICB9KX1cbilcblxuLy9saXN0ZW4gZm9yIHBsYXllciB0dXJuXG5sZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xubGV0IGNvbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAyJyk7XG5cbi8vTGlzdGVuIGZvciBwbGF5ZXIgY2xpY2sgb24gY29tcHV0ZXIgYm9hcmQgdG8gbG9nIGF0dGFja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbW92ZXMnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0NhcnJpZXInLCAnQycsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0JhdHRsZXNoaXAnLCAnQicsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0Rlc3Ryb3llcicsICdEJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnU3VibWFyaW5lJywgJ1MnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdQYXRyb2wgQm9hdCcsICdQJywgJ2NvbScpO1xuICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgIH0pXG5cbn1cbik7XG4vL0xpc3RlbiBmb3IgY29tcHV0ZXIgYm9hcmQgY2xpY2sgYnkgcGxheWVyLCBoYW5kbGVyIGlzIGNvbXB1dGVyIGF0dGFja1xuY29tcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCBmdW5jdGlvbiBSYW5kb21Nb3ZlICgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIFJhbmRvbU1vdmUgKCl7XG4gICAgICAgIFxuICAgICAgICAvL0xldmVsIGVhc3kgLSBjb21wdXRlciBhbHdheXMgcmFuZG9tbHkgYXR0YWNrcyBwbGF5ZXIgMVxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdlYXN5Jyl7XG4gICAgICAgICAgICByYW5kb21BdHRhY2socGxheWVyMSk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL0xldmVsIG1lZGl1bSAtIGNvbXB1dGVyIHdpbGwgY2hlY2sgYWRqYWNlbnQgc3BhY2VzXG4gICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHJhbmRvbVJvdyAke3JhbmRvbVJvd30gcmFuZG9tQ29sICR7cmFuZG9tQ29sfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWRSb3cgJHtzYXZlZFJvd30gc2F2ZWRDb2wgJHtzYXZlZENvbH0gYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0YXJnZXRkUm93ICR7dGFyZ2V0Um93fSB0YXJnZXRDb2wgJHt0YXJnZXRDb2x9IGApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldGVkQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgbGFzdEhpdChwbGF5ZXIxLCByYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL3ByaW50IHBsYXllciBzaGlwIHN0YXRzXG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0NhcnJpZXInLCAnQycsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdCYXR0bGVzaGlwJywgJ0InLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnRGVzdHJveWVyJywgJ0QnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnU3VibWFyaW5lJywgJ1MnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnUGF0cm9sIEJvYXQnLCAnUCcsICdwMScpO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FkXG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpO1xuICAgICAgICAvL0Rpc3BsYXlzIGZvcm0gcGFjZW1lbnQgdXBvbiBidG4gcHJlc3NcbiAgICAgICAgc2hpcEJ0bkhhbmRsZXIoJy5wMScsICdwMScpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyIG1vdmVzJyk7XG4gICAgfSwgMTAwMCk7XG59KTtcblxuc2hpcEJ0bkhhbmRsZXIoKTtcblxuLy9jb25zb2xlLmxvZyhjb21wdXRlci5nYi5zaGlwcyk7XG5cbi8qXG5jb25zb2xlLmxvZyhib2FyZFRlc3RbMF1bMF0udmFsdWUpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLmMpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLnIpO1xuKi9cbi8vYXR0YWNrc1xuLypcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygwLCAxKTtcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygxLCAwKTtcblxuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjaygwLCAwKTtcbmNvbXB1dGVyLmdiLnJlY2VpdmVBdHRhY2soNiwgNCk7XG5cbi8vaG93IHRvIHByaW50IHNoaXBzXG5jb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBhcnJheVNoaXBzIH0gZnJvbSAnLi4vbW9kdWxlcy9kb20uanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuLy9VdGlsaXR5IGZ1bmN0aW9uLCByYW5kb20gcm93L2NvbFxuY29uc3QgcmFuZG9tTnVtID0ge1xuICAgIGdldCB2YWx1ZSAoKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgfVxufTtcbi8vVXRpbGl0eSBmdW5jdGlvbiwgcmFuZG9tIGRpcmVjdGlvblxuZnVuY3Rpb24gcmFuZG9tRGlyICgpe1xuICAgIGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBpZiAodmFsdWUgPT09IDApeyByZXR1cm4gJ1VwJyB9IFxuICAgICAgICBpZiAodmFsdWUgPT09IDEpeyByZXR1cm4gJ0Rvd24nIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAyKXsgcmV0dXJuICdSaWdodCcgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDMpeyByZXR1cm4gJ0xlZnQnIH1cbn07XG5cblxuLy9SYW5kb21seSBwbGFjZSBzaGlwXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwIChzaGlwLCBjcHUpIHtcbiAgICBmdW5jdGlvbiB0cnlBZ2FpbiAoKXtcbiAgICAgIGxldCBsZW5ndGggPSBjcHUuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgY3B1LmdiLnBsYWNlTmV3U2hpcChzaGlwLCByYW5kb21OdW0udmFsdWUsIHJhbmRvbU51bS52YWx1ZSwgcmFuZG9tRGlyICgpKTtcbiAgICAgIC8vaWYgdGhlIHNoaXAgZmFpbHMgdG8gcGxhY2Ugb24gdGhlIGJvYXJkIHJ1biBhZ2FpblxuICAgICAgaWYgKGNwdS5nYi5zaGlwcy5sZW5ndGggPT09IGxlbmd0aCl7XG4gICAgICAgICAgdHJ5QWdhaW4oKTtcbiAgICAgIH07XG4gICB9XG4gICB0cnlBZ2FpbigpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXIgKHVzZXIpIHtcbiAgICBwbGFjZVNoaXAgKCdDYXJyaWVyJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnQmF0dGxlc2hpcCcsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ0Rlc3Ryb3llcicsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1N1Ym1hcmluZScsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1BhdHJvbCBCb2F0JywgdXNlcik7XG59O1xuXG4vL0NvbXB1dGVyIGF0dGFjayByYW5kb20gbW92ZVxuZXhwb3J0IGxldCByYW5kb21Sb3c7XG5leHBvcnQgbGV0IHJhbmRvbUNvbDtcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BdHRhY2sgKHVzZXIpe1xuICAgIGNvbnNvbGUubG9nKCdyYW5kb21BdHRhY2sgZm4nKVxuICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICBpZiAodXNlci5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21BdHRhY2sodXNlcik7XG4gICAgfTtcbn1cblxuICAvL3V0aWxpdHkgZnVuY3Rpb24gJiB2YXJpYWJsZXMgdG8gc3RvcmUgbGFzdCBoaXRcbiAgZXhwb3J0IGxldCB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICBleHBvcnQgZnVuY3Rpb24gbGFzdEhpdCAoZW5lbXksIHJvdywgY29sKXtcbiAgICBpZiAoZW5lbXkuZ2IuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQycgfHwgXG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0InIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1AnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBsYXN0aGl0IGZuIC0gc3RvcmUgaGl0Jyk7XG5cbiAgICAgICAgICB0YXJnZXRSb3cgPSByb3c7XG4gICAgICAgICAgdGFyZ2V0Q29sID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0aGl0IGZuIC0gbm8gZGF0YSBmb3IgaGl0Jyl9XG4gIH07XG5cbiAgZXhwb3J0IGxldCBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZEhpdCAocm93LCBjb2wpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFJvdyA9PT0gJ251bWJlcicpe1xuICAgICAgICBzYXZlZFJvdyA9IHJvdztcbiAgICAgICAgc2F2ZWRDb2wgPSBjb2w7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkUm93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIC8vdXRpbGl0eSBmbiAtIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm4gZ28gdG8gcmFuZG9tIGF0dGFja1xuICBsZXQgbGFzdENvdW50ID0gMDtcbiAgZnVuY3Rpb24gcG9zdFN1bmtBdHQgKGVuZW15KSB7XG4gICAgbGV0IGNhclN1bmsgPSBlbmVteS5nYi5zaGlwc1swXS5pc1N1bmsoKTtcbiAgICBsZXQgYmF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzFdLmlzU3VuaygpO1xuICAgIGxldCBkaXNTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgbGV0IHN1YlN1bmsgPSBlbmVteS5nYi5zaGlwc1szXS5pc1N1bmsoKTtcbiAgICBsZXQgcGF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzRdLmlzU3VuaygpO1xuICAgIGxldCBzaGlwcyA9IFtjYXJTdW5rLCBiYXRTdW5rLCBkaXNTdW5rLCBzdWJTdW5rLCBwYXRTdW5rXTtcbiAgICBsZXQgY291bnRUcnVlID0gc2hpcHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGhcblxuICAgIGlmIChsYXN0Q291bnQgPCBjb3VudFRydWUpIHsgXG4gICAgICAgICsrbGFzdENvdW50XG4gICAgICAgIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJhbmRvbUF0dGFjayAoZW5lbXkpO1xuICAgIH07XG59O1xuXG4vL3V0aWxpdHkgZm4gLSBjaGVjayBzcGFjZSBhZGphY2VudCB0byBhdHRhY2sgZm9yIG5leHQgYXR0YWNrXG5mdW5jdGlvbiBhZGphY2VudCAoZW5lbXksIHJvdywgY29sKSB7XG4gICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgfVxufTtcblxuICAvL3Bvc3NpYmxlIGFkamFjZW50IG1vdmVzIGZyb20gYSBoaXRcbiAgbGV0IHJvd1BsdXM7XG4gIGxldCByb3dNaW51cztcbiAgbGV0IGNvbFBsdXM7XG4gIGxldCBjb2xNaW51cztcblxuICBleHBvcnQgZnVuY3Rpb24gdGFyZ2V0ZWRBdHRhY2sgKGVuZW15KXtcbiAgIFxuICAgIC8vZmlyc3QgbW92ZVxuICAgIGlmIChyYW5kb21Sb3cgID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayAoZW5lbXkpICBcbiAgICB9O1xuICAgIC8vY2hlY2sgaWYgYSBzaGlwIHdhcyBzdW5rIGxhc3QgdHVyblxuICAgIHBvc3RTdW5rQXR0KGVuZW15KTtcblxuICAgIC8vSWYgbGFzdCBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICApIHtcbiAgICAgICAgXG4gICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgcm93TWludXMgPSByYW5kb21Sb3cgLTE7XG4gICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgIFxuICAgICAgICAvL2lmIHRoZXJlIGlzIG5vdCBhIHNhdmVkIGhpdCBjaGVjayBlYWNoIG9mIHRoZSBhZGphY2VudCBzcG90c1xuICAgICAgICBpZiAoc2F2ZWRSb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgIHN0b3JlZEhpdCh0YXJnZXRSb3csIHRhcmdldENvbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xQbHVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgIH07XG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIHR3byBoaXRzIGNoZWNrIHRvIHNlZSBpZiBhZGphY2VudCBzcG90IG9uIHRoZSBjby9yb3cgaXMgb3BlblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcm93VmFsID0gTWF0aC5hYnMocmFuZG9tUm93IC0gc2F2ZWRSb3cpO1xuICAgICAgICAgICAgbGV0IGNvbFZhbCA9IE1hdGguYWJzKHJhbmRvbUNvbC0gc2F2ZWRDb2wpO1xuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlZCBhbmQgcmFuZG9tIHZhbHVlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3dWYWwgPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGljayByb3dzJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDFiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMmInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sVmFsID4gMCl7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDNiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDRiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL2lmIHRoZXJlIGlzIGEgc3RvcmVkIGhpdCBhbmQgbGFzdCBtb3ZlIGlzIGEgbWlzcyByZXJ1biBhZGphY2VudCBjaGVja3NcbiAgICBpZiAoIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdYJykgJiYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQgYXR0IC0gbWlzcywgZ28gYmFjayB0byBsYXN0IGhpdCcpO1xuXG4gICAgICAgICAgICByYW5kb21Sb3cgPSB0YXJnZXRSb3c7XG4gICAgICAgICAgICByYW5kb21Db2wgPSB0YXJnZXRDb2w7XG5cbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIGRlZmF1bHQgcmFuZG9tICcpXG4gIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICByYW5kb21BdHRhY2sgKGVuZW15KTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBjb21wdXRlciwgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cblxuLy9ET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5IGZvciBzdWJtaXQgb24gd2VsY29tZSBmb3JtXG5leHBvcnQgZnVuY3Rpb24gd2VsY29tZUZvcm1ET00gKCl7XG4gICAgY29uc3Qgd2VsY29tZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUZvcm0nKTtcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHNjcmVlbicpO1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5wYWdlJyk7ICAgIFxuICAgIC8vcHJpbnQgcGxheWVyIG5hbWVcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAvL3JlbW92ZSBzdGFydCBzY3JlZW4gYW5kIHdlbGNvbWUgZm9ybVxuICAgIHdlbGNvbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL3JldmVhbCB0aGUgbWFpbiBwYWdlXG4gICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluUGFnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xufTtcblxuZXhwb3J0IGxldCBhcnJheVNoaXBzID0gW107XG5cbi8vdXRpbGl0eSBmbiAtIGNvbnZlcnQgcm93IGNvb3JkaW5hdGUgZnJvbSAjIHRvIGxldHRlclxuZnVuY3Rpb24gcm93Q29udiAobnVtYmVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheSgyNildLm1hcCgoXyxpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKzk3KSk7XG4gICAgICAgIGxldCBsZXR0ZXIgPSBhbHBoYWJldFtudW1iZXJdO1xuICAgICAgICByZXR1cm4gbGV0dGVyO1xufTtcblxuLy9wcmludCBwbGF5ZXIvIGNvbXB1dGVyIGdhbWVib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmQgKGJvYXJkLCBjb250YWluZXIsIHBsYXllcil7XG4gICAgbGV0IGdiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKTtcbiAgICBsZXQgc2hpcFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG4gICAgbGV0IHNoaXBDb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIG1heCByb3cvY29sIHNpemUgb24gcGxhY2VtZW50IGZvcm1cbiAgICBzaGlwUm93Lm1heCA9IGJvYXJkU2l6ZS0xO1xuICAgIHNoaXBDb2wubWF4ID0gYm9hcmRTaXplLTE7XG5cbiAgICAvL2R5bmFtaWNhbGx5IHNldCB0aGUgZ3JpZCBzaXplXG4gICAgZ2Iuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcbiAgICBnYi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2JvYXJkU2l6ZX0sIDFmcilgO1xuXG4gICAgLy9wcmludCBlYWNoIGNlbGwgd2l0aCB2YWx1ZXNcbiAgICBnYi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCl7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiByb3cpe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQy1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0MtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0ItSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdCLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdELUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnRC1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnUy1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1MtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSAnUC1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1AtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdEJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQucm93ID0gY2VsbC5yO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmNvbCA9IGNlbGwuYztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9ob3ZlciB0byByZXZlYWwgc3BhY2UgZGF0YXNldFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5yb3cpO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LmNvbCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCByb3dDb252ZXJ0ZWQgPSByb3dDb252KHJvdykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7cm93Q29udmVydGVkfSR7Y29sfWA7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGRlcic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9ob3ZlciBvdXRcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NsaWNrIGJvYXJkIHRvIGF0dGFja1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgIC8vaWYgcGxheWVyIGhhc24ndCBwbGFjZSBhbGwgc2hpcHMgZG8gbm90IGxvZyBhdHRhY2tcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICAvL3JlY29yZCBhdHRhY2tcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBwbGF5ZXIgd2lucyBnYW1lXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5jaGVja1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGdiLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFycmF5U2hpcHMgPSBwbGF5ZXIuc2hpcHM7XG59XG5cbi8vQ3JlYXRlcyBvdmVybGF5IG9mIHNoaXAgb250byBib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmRTaGlwcyAocHJlZml4LCB0YXJnZXRCb2FyZCl7IFxuICAgIC8vY2FsbCBtaW4vbWF4IG91dHNpZGUgdGhlIHBvc3NpYmUgcmFuZ2VcbiAgICBsZXQgbWluR3JpZFJvdyA9IDEwMDA7XG4gICAgbGV0IG1heEdyaWRSb3cgPSAtMTAwMDtcblxuICAgIGxldCBtaW5HcmlkQ29sID0gMTAwMDtcbiAgICBsZXQgbWF4R3JpZENvbCA9IC0xMDAwO1xuICAgIFxuICAgIC8vcmV0dXJuIHRoZSBtYXgvbWluIHJvdy9jb2wgZm9yIHNoaXAgbG9jYXRpb25cbiAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFyZ2V0Qm9hcmR9LiR7cHJlZml4fSwgLiR7dGFyZ2V0Qm9hcmR9LiR7cHJlZml4fS1ISVRgKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50R3JpZFJvdyA9IHRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93IDwgbWluR3JpZFJvdykge1xuICAgICAgICAgICAgbWluR3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRSb3cgPiBtYXhHcmlkUm93KSB7XG4gICAgICAgICAgICBtYXhHcmlkUm93ID0gcGFyc2VJbnQoY3VycmVudEdyaWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50R3JpZENvbCA9IHRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sIDwgbWluR3JpZENvbCkge1xuICAgICAgICAgICAgbWluR3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRDb2wgPiBtYXhHcmlkQ29sKSB7XG4gICAgICAgICAgICBtYXhHcmlkQ29sID0gcGFyc2VJbnQoY3VycmVudEdyaWRDb2wpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbilcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRCb2FyZCk7XG5sZXQgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBPdmVybGF5LmlkID0gKGBvdmVybGF5LSR7cHJlZml4fWApO1xuXG4vL2lmIG5vIHZhbHVlcyBkbyBub3Qgb3ZlcmxheSAtIHVzZWQgZm9yIHBsYXllciBwbGFjZW1lbnRcbmlmIChtaW5HcmlkUm93ID09PSAxMDAwKXtyZXR1cm59O1xuLy9BZGQgMSB0byBhbGwgZm9yIGNvbnZlcnNpb24gZnJvbSBzcXVhcmVzIHRvIGdyaWQgbGluZXNcbi8vQWRkIDIgdG8gYW55IHNpbmdsZSBsZW5ndGggb3JpZW50YXRpb25cbi8vdmVydGljYWxcbmlmIChtaW5HcmlkQ29sID09PSBtYXhHcmlkQ29sKXtcbiAgICBsZXQgcm93RW5kID0gbWluR3JpZFJvdyArIHNoaXBMZW5ndGggKyAxO1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoYHZlcnQtb3ZlcmxheS0ke3ByZWZpeH1gKTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBtaW5HcmlkQ29sICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gbWluR3JpZENvbCArIDI7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IHJvd0VuZDtcbi8vaG9yaXpvbnRhbFxufSBlbHNlIHtcbiAgICBsZXQgY29sRW5kID0gIG1pbkdyaWRDb2wgKyBzaGlwTGVuZ3RoICsgMTtcbiAgICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBob3J6LW92ZXJsYXktJHtwcmVmaXh9YCk7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IG1pbkdyaWRSb3cgKyAyO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IG1pbkdyaWRDb2wgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBjb2xFbmQ7XG59XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xufTtcbi8vZnVuY3Rpb24gdG8gb3ZlcmxheSBhbGwgcGxheWVyIHNoaXBzXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyU2hpcE92ZXJsYXkgKCl7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdQJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQicsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0QnLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdTJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQycsICdjb250YWluZXItcDEnKTtcbn07XG5cbi8vU2hpcCBidXR0b25zIGhhbmRlciB0byBkaXNwbGF5IGZvcm0gd2l0aCBjb3JyZWN0IHRpdGxlXG5leHBvcnQgZnVuY3Rpb24gc2hpcEJ0bkhhbmRsZXIgKCl7XG4gICAgY29uc3Qgc2hpcEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucDEnKTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50Jyk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGNvbHVtZW5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuICAgIGNvbnN0IHJvd1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG5cbiAgICBzaGlwQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGxldCBkYXRhU2hpcFR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtdHlwZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IGRhdGFTaGlwVHlwZTtcbiAgICAgICAgICAgIGNvbHVtZW5TZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHJvd1NlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgLy9hZGQgb3B0aW9ucyB0ZXh0IGZvciBjb2x1bW4gLSBhZGQgMSB0byBjb252ZXJ0IGZyb20gMCBiYXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICBjb2x1bWVuU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2FkZCBvcHRpb25zIHRleHQgZm9yIHJvdyAtIGNvbnZlcnQgbnVtYmVyIHRvIGxldHRlclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IG9wdFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydGVkID0gcm93Q29udihqKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG9wdFIudmFsdWUgPSBqO1xuICAgICAgICAgICAgICAgIG9wdFIudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0LmFwcGVuZENoaWxkKG9wdFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBzaGlwIGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkXG4gICAgICAgICAgICBpZiAoYXJyYXlTaGlwcy5zb21lKHNoaXAgPT4gc2hpcC50eXBlID09PSBkYXRhU2hpcFR5cGUpKXtcbiAgICAgICAgICAgIHBsYWNlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufX0pfSl9XG5cblxuLy9pZiBhbGwgc2hpcHMgcGxhY2VkIHJlbW92ZSBidXR0b25zXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2hpcEJ0bnMgKCkge1xuICAgIGlmIChhcnJheVNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgIGxldCBzaGlwQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQnV0dG9ucycpO1xuICAgICAgICBzaGlwQnRucy5yZW1vdmUoKTtcbiAgICB9XG59XG4vL2Rpc3BsYXkgY29tcHV0ZXIgY29uc29sZS9ib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb21wdXRlciAoKSB7XG4gICAgaWYgKGFycmF5U2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgbGV0IGNvbXB1dGVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21Db25zb2xlJyk7XG4gICAgICAgIGNvbXB1dGVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIH1cbn1cblxuXG4vL3ByaW50IHN0YXRzIHRvIGVhY2ggc2hpcHMgc3RhdCBkaXYgKGxpZmUvIGRhbWFnZSlcbmV4cG9ydCBmdW5jdGlvbiBwcmludFN0YXRzIChwbGF5ZXIsIHNoaXAsIHN1ZmZpeCwgcHJlZml4KSB7XG4gICAgLy9zaGlwIGRhdGFcbiAgICBjb25zdCBmbGVldCA9IHBsYXllci5nYi5zaGlwcztcbiAgICBjb25zdCB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC50eXBlID09PSBzaGlwKTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzU2hpcC5sZW5ndGg7XG4gICAgY29uc3QgZGFtYWdlID0gdGhpc1NoaXAuZGFtYWdlO1xuICAgIC8vY29udGFpbmVycyBmb3IgbGlmZS1kYW1hZ2VcbiAgICBjb25zdCBkYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctc3RhdC0nICsgc3VmZml4KTtcbiAgICAvL3ByZXZlbnQgcmVwcmludGluZyBwcmlvciBkYXRhXG4gICAgc3RhdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvL3ByaW50IGRhbWFnZSBhbmQgbGlmZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGFtYWdlOyBqKyspe1xuICAgICAgICBsZXQgZGFtYWdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYW1hZ2VkLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQoZGFtYWdlZCk7XG4gICAgfSAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW5ndGggLSBkYW1hZ2UpOyBpKyspe1xuICAgICAgICBsZXQgbGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWZlLmNsYXNzTGlzdC5hZGQoJ2xpZmUnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQobGlmZSk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT09IGRhbWFnZSl7XG4gICAgICAgIGxldCB0aGlzSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyAnLScgKyBzdWZmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzSUQpO1xuICAgICAgICB0aGlzSUQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH1cbn07IiwiLy9jb25zdCBzaGlwID0gcmVxdWlyZSAoJy4vc2hpcC5qcycpXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplLCBBdWRpb0V2ZW50Rm4sIGF1ZGlvRXZlbnQgfSBmcm9tICcuLi9pbmRleC5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuXG4vL3RvIGFjY2VzcyBzcXVhcmUgb24gYm9hcmQgdXMgbWUgYm9hcmQuYm9hcmRbcl1bY11cblxuLy9OZXZlciB1c2VkIHV0aWxpdHk6IGNvbnZlcnRzIGNvbHVtbiBsZXR0ZXIgdG8gbnVtYmVyIGZvciBsb29rVXBcbmZ1bmN0aW9uIGNvbENvbnZlcnQgKGxldHRlcil7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbLi4uQXJyYXkoYm9hcmRTaXplKV0ubWFwKChfLGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArOTcpKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IChlbCkgPT4gZWwgPT09IGxldHRlcjtcbiAgICAgICAgY29uc3QgbnVtID0gYWxwaGFiZXQuZmluZEluZGV4KGl0ZW0pO1xuICAgICAgICByZXR1cm4gbnVtXG59O1xuXG5cbi8vTmV2ZXIgdXNlZCB1dGlsaXR5OiBib2FyZCBhcyB2YXJpYWJsZW5hbWUuYm9hcmQsIG9ubHkgd29ya3MgZm9yIGZpcnN0IHJvd1xuZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHJvdywgY29sKXtcbiAgICAgICAgaWYgKChyb3cgPCAwICkgfHwgKHJvdyA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKChjb2wgPCAwICkgfHwgKGNvbCA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnWCcgfHwgXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhbGlkJ31cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgciwgYywgZGlyKSB7XG4gICAgICAgIGxldCByb3cgPSByO1xuICAgICAgICBsZXQgY29sID0gYztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcblxuICAgICAgICBpZiAoZGlyID09PSAnRG93bicpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoci0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93ICsgaSkgPCAocm93ICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuYm9hcmRbcm93KytdW2NdKS52YWx1ZSAhPT0gMCkge3Rocm93IG5ldyBFcnJvcignTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAuJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdVcCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChyIC0gKG5ld1NoaXAubGVuZ3RoLTEpIDwgMCkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93IC0gaSkgPiAocm93IC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ctLV1bY10udmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ1JpZ2h0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKChjLTEpICsgbmV3U2hpcC5sZW5ndGggPiAoYm9hcmRTaXplLTEpKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjb2wgKyBpKSA8IChjb2wgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbCsrXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyArIGkpIDwgKGMgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYysrXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdMZWZ0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgLSAobmV3U2hpcC5sZW5ndGggKyAxKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IgKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIil9XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sIC0gaSkgPiAoY29sIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY29sLS1dLnZhbHVlICE9PSAwKXt0aHJvdyBuZXcgRXJyb3IgKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sgKHIsIGMpIHtcbiAgICAgICAgbGV0IGZsZWV0ID0gdGhpcy5zaGlwcztcbiAgICAgICAgbGV0IHRoaXNTaGlwO1xuICAgICAgICAvL01pc3NpbGUgZmlyZWQgYXVkaW8gZXZlbnQgY3JlYXRlIGFuZCBkaXNwYXRjaGVkXG4gICAgICAgIEF1ZGlvRXZlbnRGbiAoJ01pc3NpbGUnKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChhdWRpb0V2ZW50KTtcbiAgICAgICAgLy9pZiBhbHJlYWR5IG1pc3MgcmVjb3JkIGFub3RoZXIgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1gnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgd2F0ZXIgcmVjb3JkIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgY2FycmllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQycpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdDJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgYmF0dGVzaGlwIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdCJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0InKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBkZXN0b3J5ZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0QnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnRCcpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHN1Ym1hcmluZSByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUycpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdTJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgcGF0cm9sIGJvYXQgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1AnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnUCcpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVjb3JkIGhpdCB0byBib2FyZFxuICAgICAgICBsZXQgc2hpcEhpdCA9IHRoaXMuYm9hcmRbcl1bY10udmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gYCR7c2hpcEhpdH0tSElUYDtcbiAgICB9XG4gICAgY2hlY2tTdW5rICgpe1xuICAgICAgICBsZXQgc3RhdHVzID0gW107XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMF0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzFdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1syXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbM10uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzRdLmlzU3VuaygpKTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cy5ldmVyeShpdGVtID0+IGl0ZW0gPT09IHRydWUpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuXG5cbmV4cG9ydCBjbGFzcyBodW1hblBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy53aW5zID0gMDtcbiAgICAgICAgdGhpcy5sb3NzZXMgPSAwO1xuICAgICAgICB0aGlzLnN0cmVhayA9IDA7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKGJvYXJkU2l6ZSxib2FyZFNpemUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGNvbXBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBsZXZlbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKGJvYXJkU2l6ZSwgYm9hcmRTaXplKTtcbiAgICB9XG59XG4vKlxubW9kdWxlLmV4cG9ydHMgPSBodW1hblBsYXllclxubW9kdWxlLmV4cG9ydHMgPSBjb21wUGxheWVyXG4qLyIsImV4cG9ydCBjbGFzcyBzaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0NhcnJpZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0JhdHRsZXNoaXAnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQic7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0Rlc3Ryb3llcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdEJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnU3VibWFyaW5lJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdQYXRyb2wgQm9hdCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdQJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgfVxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gZmFsc2UgfVxuICAgIH1cbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgc2hpcFxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBcblxuIl0sIm5hbWVzIjpbImdhbWVib2FyZCIsInNoaXAiLCJodW1hblBsYXllciIsImNvbXBQbGF5ZXIiLCJwcmludEJvYXJkIiwid2VsY29tZUZvcm1ET00iLCJkaXNwbGF5Q29tcHV0ZXIiLCJzaGlwQnRuSGFuZGxlciIsInJlbW92ZVNoaXBCdG5zIiwicHJpbnRTdGF0cyIsInBsYXllclNoaXBPdmVybGF5IiwicGxhY2VDb21wdXRlciIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsInJhbmRvbUF0dGFjayIsInRhcmdldGVkQXR0YWNrIiwibGFzdEhpdCIsInN0b3JlZEhpdCIsInRhcmdldENvbCIsInRhcmdldFJvdyIsInNhdmVkUm93Iiwic2F2ZWRDb2wiLCJtaXNzaWxlRmlyZWQiLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJhdWRpb0V2ZW50IiwiQXVkaW9FdmVudEZuIiwiRXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJ0eXBlIiwibWVzc2FnZSIsImNvbmNhdCIsInN0YXR1cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1pc3NpbGVTb3VuZCIsIkF1ZGlvIiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJib2FyZFNpemUiLCJsZXZlbCIsImdldEVsZW1lbnRCeUlkIiwid2VsY29tZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJnYiIsImJvYXJkIiwicmFuZG9tU2V0UGxheWVyIiwicmFuZG9tQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsInN0YXJ0Q291bnQiLCJzaGlwcyIsImxlbmd0aCIsInJvdyIsImNvbCIsInNoaXBUeXBlIiwiaW5uZXJUZXh0IiwiZGlyZWN0aW9uIiwic2hpcElEIiwic2xpY2UiLCJwbGFjZU5ld1NoaXAiLCJuZXdDb3VudCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsInRhcmdldEJ0biIsInBsYXllckNvbnRhaW5lciIsImNvbXBDb250YWluZXIiLCJSYW5kb21Nb3ZlIiwic2V0VGltZW91dCIsInJlY2VpdmVBdHRhY2siLCJhcnJheVNoaXBzIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tRGlyIiwicGxhY2VTaGlwIiwiY3B1IiwidHJ5QWdhaW4iLCJ1c2VyIiwiY2hlY2tPcGVuQm9hcmQiLCJ1bmRlZmluZWQiLCJlbmVteSIsImxhc3RDb3VudCIsInBvc3RTdW5rQXR0IiwiY2FyU3VuayIsImlzU3VuayIsImJhdFN1bmsiLCJkaXNTdW5rIiwic3ViU3VuayIsInBhdFN1bmsiLCJjb3VudFRydWUiLCJmaWx0ZXIiLCJhZGphY2VudCIsInJvd1BsdXMiLCJyb3dNaW51cyIsImNvbFBsdXMiLCJjb2xNaW51cyIsInJvd1ZhbCIsImFicyIsImNvbFZhbCIsInN0YXJ0U2NyZWVuIiwibWFpblBhZ2UiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyb3dDb252IiwibnVtYmVyIiwiYWxwaGFiZXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibGV0dGVyIiwiY29udGFpbmVyIiwicGxheWVyIiwic2hpcFJvdyIsInNoaXBDb2wiLCJtYXgiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImlubmVySFRNTCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2xvb3AiLCJjZWxsIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiciIsImMiLCJOdW1iZXIiLCJyb3dDb252ZXJ0ZWQiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNoZWNrU3VuayIsImFsZXJ0IiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsInByaW50Qm9hcmRTaGlwcyIsInByZWZpeCIsInRhcmdldEJvYXJkIiwibWluR3JpZFJvdyIsIm1heEdyaWRSb3ciLCJtaW5HcmlkQ29sIiwibWF4R3JpZENvbCIsInRhcmdldHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hpcExlbmd0aCIsImZvckVhY2giLCJ0YXJnZXQiLCJjdXJyZW50R3JpZFJvdyIsInBhcnNlSW50IiwiY3VycmVudEdyaWRDb2wiLCJzaGlwT3ZlcmxheSIsImlkIiwicm93RW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsImdyaWRSb3dTdGFydCIsImdyaWRSb3dFbmQiLCJjb2xFbmQiLCJzaGlwQnV0dG9ucyIsInBsYWNlbWVudCIsImZvcm1UaXRsZSIsImNvbHVtZW5TZWxlY3QiLCJyb3dTZWxlY3QiLCJidG4iLCJkYXRhU2hpcFR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJvcHQiLCJqIiwib3B0UiIsImNvbnZlcnRlZCIsInNvbWUiLCJzaGlwQnRucyIsImNvbXB1dGVyRGlzcGxheSIsInN1ZmZpeCIsImZsZWV0IiwidGhpc1NoaXAiLCJmaW5kIiwiZGFtYWdlIiwiZGFtRGl2Iiwic3RhdHNEaXYiLCJkYW1hZ2VkIiwibGlmZSIsInRoaXNJRCIsImNvbENvbnZlcnQiLCJpdGVtIiwiZWwiLCJudW0iLCJmaW5kSW5kZXgiLCJsb29rVXAiLCJMZXQiLCJOdW0iLCJhcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZUJvYXJkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2FtZUJvYXJkIiwicm93cyIsInB1c2giLCJkaXIiLCJuZXdTaGlwIiwiRXJyb3IiLCJlcnJvciIsImRpc3BhdGNoRXZlbnQiLCJpbmRleCIsImluZGV4T2YiLCJoaXQiLCJzaGlwSGl0IiwiZXZlcnkiLCJ3aW5zIiwibG9zc2VzIiwic3RyZWFrIiwic3VuayJdLCJzb3VyY2VSb290IjoiIn0=