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


`, "",{"version":3,"sources":["webpack://./src/styles/buttons.style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;AACtC;;AAEA,yBAAyB;AACzB;IACI,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,WAAW;IACX,8CAA8C;IAC9C,mBAAmB;AACvB;AACA,qBAAqB;AACrB;IACI,WAAW;IACX,SAAS;IACT,2BAA2B;IAC3B,8CAA8C;IAC9C,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,8CAA8C;IAC9C,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,sCAAsC;IACtC,8CAA8C;IAC9C,mBAAmB;AACvB;AACA;QACQ,YAAY;QACZ,iBAAiB;AACzB;AACA;IACI,oCAAoC;AACxC;;;;;AAKA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA,uEAAuE;AACvE,2BAA2B;;AAE3B;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB,yDAA4C;AAChD;AACA;IACI,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;IACxB;AACJ;AACA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;AACA,yCAAyC;AACzC;IACI,aAAa;IACb,6BAA6B;AACjC;AACA,gCAAgC;AAChC;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,yDAA8C;IAC9C,oBAAoB;AACxB;;AAEA;IACI,yDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,yDAA6C;IAC7C,oBAAoB;AACxB","sourcesContent":[":root {\n    --deployButtons: rgb(148, 128, 90);\n}\n\n/*Ship pacement buttons */\n.p1 {\n    background-color: cadetblue;\n    height: 2.5em;\n    width: 8em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n.p1.deployedShip {\n    background-color: gray;\n    color: white;\n    border: 3px bold black;\n}\n#random {\n    background-color: var(--deployButtons);\n    height: 2.5em;\n    width: 14em;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n/*ship pacement form*/\n#placement {\n    width: 25vw;\n    gap: .2em;\n    background-color: cadetblue;\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n    padding: 2%;\n}\n#placement select {\n    font-family: 'Courier New', Courier, monospace;\n    color: black;\n    font-weight: bolder;\n    height: 2.5vh;\n    width: 4em;\n    background-color: white;\n}\n#placement .formInput {\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bolder;\n}\n#placeBtn {\n    width: 13em;\n    height: 2.5em;\n    background-color: var(--deployButtons);\n    font-family: 'Courier New', Courier, monospace;\n    border-radius: 10px;\n}\n#placeBtn:hover {\n        color: white;\n        font-weight: 1000;\n}\n#pacement input {\n    background-color: rgb(103, 103, 230);\n}\n\n\n\n\n.p1:hover, #random:hover{\n    color: white;\n    font-weight: 1000;\n}\n#deployed-p1,\n#deployed-com {\n    display: none;\n    flex-direction: column;\n}\n#shipDamaged,\n#shipDamage-com {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: auto;\n    align-items: center;\n}\n\n/* Ships stat displays - may consider moving to a separate style sheet*/\n/*Outermost ship stat divs*/\n\n.p1Ship, .comShip {\n    height: 10vh;\n    width: 15vw;\n    margin: .45em;\n    padding-left: 0.5em;\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    border: .25em solid black;\n}\n.p1Ship {\n    background-color: rgb(3, 115, 167);\n}\n.comShip {\n    background-color: rgb(104, 81, 39);\n}\n.stats {\n    display: flex;\n}\n.life {\n    height: 2em;\n    width: 2em;\n    background-position: center;\n    background-size: contain;\n    background-image: url(../images/Anchor2.png);\n}\n.damaged {\n    height: 2.8em;\n    width: 2.8em;\n    background-position: center;\n    background-size: contain;\n    background-image: url('../images/hit.png')\n}\n.sunk {\n    background-color: rgb(139, 22, 22);\n    border: 3px solid orange;\n}\n/*Div contains life/damage for each ship*/\n#p1-stat-C, #p1-stat-B, #p1-stat-D, #p1-stat-S, #p1-stat-P, #com-stat-C, #com-stat-B, #com-stat-D, #com-stat-S, #com-stat-P {\n    display: flex;\n    justify-content: space-around;\n}\n/*Outer most div for ship stats*/\n#p1-C, #p1-B, #p1-S, #p1-D, #p1-P, #com-C, #com-B, #com-D, #com-S, #com-P   {\n    text-align: center;\n    color: white;\n    font-weight: bolder;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 1em;\n}\n\n#p1-C, #com-C {\n    background-image: url('../images/carrier.png');\n    background-size: 75%;\n}\n\n#p1-B, #com-B {\n    background-image: url('../images/battleship.png');\n    background-size: 100%;\n}\n\n#p1-S, #com-S {\n    background-image: url('../images/submarine.png');\n    background-size: 100%;\n}\n\n#p1-D, #com-D {\n    background-image: url('../images/destroyer.png');\n    background-size: 100%;\n}\n\n#p1-P, #com-P {\n    background-image: url('../images/patrol.png');\n    background-size: 50%;\n}\n\n\n"],"sourceRoot":""}]);
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
    background-color: rgb(103, 103, 230);
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

`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.style.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;AACvC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,MAAM;IACN,uBAAuB;IACvB,kBAAkB;IAClB,yDAAkD;IAClD,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;;AAEA;;;;;;;;IAQI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;AACtB;;;AAGA;;IAEI,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,yDAA2C;IAC3C,sBAAsB;AAC1B;;AAEA;;;;;;;;;;IAUI,yDAA0C;IAC1C,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA,sBAAsB;AACtB;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yDAAkD;IAClD,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAA2C;IAC3C,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;;;;;;;;;;CAUC;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mDAAyC;IACzC,0BAA0B;IAC1B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;;AAE5B;;AAEA;IACI;AACJ","sourcesContent":["\n#comConsole {\n    display: none;\n    grid-template-columns: 3fr 1fr;\n    background-color: rgb(218, 164, 64);\n}\n#p1Console {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    background-color: rgb(103, 103, 230);\n}\n\n#container-p1,\n#container-p2 {\n    position: relative;\n    display: grid;\n    justify-self: center;\n    aspect-ratio: 1 / 1;\n    height:85vh;\n    gap: 0;\n    border: 4px solid black;\n    border-radius: 5px;\n    background-image: url('../images/Ocean-Board.jpg');\n    background-size: cover;\n}\n#shipButtons {\n    justify-self: center;\n}\n\n#container-p1 .cell,\n#container-p2 .cell,\n#container-p1 .hit,\n#container-p2 .hit,\n#container-p1 .boat,\n#container-p2 .boat,\n#container-p1 .miss,\n#container-p2 .miss {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: solid black 1px;\n}\n\n#container-p1 .cell,\n#container-p2 .cell {\n    color: transparent;\n}\n\n\n#container-p1 .boat,\n#container-p2 .boat {\n    background-color: none;\n    color: transparent;\n}\n\n#container-p1 .miss,\n#container-p2 .miss {\n    background-image: url('../images/miss.png');\n    background-size: cover;\n}\n\n#container-p1 .C-HIT,\n#container-p1 .B-HIT,\n#container-p1 .D-HIT,\n#container-p1 .S-HIT,\n#container-p1 .P-HIT,\n#container-p2 .C-HIT,\n#container-p2 .B-HIT,\n#container-p2 .D-HIT,\n#container-p2 .S-HIT,\n#container-p2 .P-HIT {\n    background-image: url('../images/hit.png');\n    background-size: cover;\n    color: transparent;\n}\n\n\n/*Ship icons on board*/\n#overlay-B {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('../images/Battleship2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-B {\n    height: 130%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n}\n\n.vert-overlay-B {\n    transform: translateY(-10%);\n}\n\n#overlay-D {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Destroyer2.png');\n    background-size: 100% 120%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-D {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n.vert-overlay-D {\n    transform: translateY(-10%);\n}\n\n#overlay-S {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/submarine2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.horz-overlay-S {\n    transform: rotate(-10deg);\n    transform-origin: center;\n}\n\n#overlay-P {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url('../images/Patrol2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n/*\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n\n.horz-overlay-P {\n    transform: rotate(-20deg);\n    transform-origin: center;\n}\n*/\n\n#overlay-C {\n    pointer-events: none;\n    display: grid;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: url('../images/carrier2.png');\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n.horz-overlay-C {\n    height: 120%;\n    transform: rotate(-8deg);\n    transform-origin: center;\n    \n}\n\n.vert-overlay-C {\n    height: 100%\n}\n\n"],"sourceRoot":""}]);
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
  console.log(audioEvent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUVELFNBQUFxTCxHQUFHQSxDQUFBLEVBQUU7TUFDRCxJQUFJLENBQUM3QixNQUFNLEVBQUU7SUFDakI7RUFBQztJQUFBa0IsR0FBQTtJQUFBMUssS0FBQSxFQUNELFNBQUE2QyxNQUFNQSxDQUFBLEVBQUU7TUFDSixJQUFJLElBQUksQ0FBQzJHLE1BQU0sS0FBSyxJQUFJLENBQUM5SSxNQUFNLEVBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUNpTCxJQUFJLEdBQUcsSUFBSTtNQUMzQixDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUs7TUFBQztJQUMxQjtFQUFDO0FBQUE7QUFDSjs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzcz84YmExIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3M/NTZhZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3M/MGZkYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3M/MjE0NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQW5jaG9yMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGF0cm9sLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGVwbG95QnV0dG9uczogcmdiKDE0OCwgMTI4LCA5MCk7XG59XG5cbi8qU2hpcCBwYWNlbWVudCBidXR0b25zICovXG4ucDEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiA4ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnAxLmRlcGxveWVkU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggYm9sZCBibGFjaztcbn1cbiNyYW5kb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDE0ZW07XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLypzaGlwIHBhY2VtZW50IGZvcm0qL1xuI3BsYWNlbWVudCB7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgZ2FwOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMiU7XG59XG4jcGxhY2VtZW50IHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBoZWlnaHQ6IDIuNXZoO1xuICAgIHdpZHRoOiA0ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiNwbGFjZUJ0biB7XG4gICAgd2lkdGg6IDEzZW07XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXBsb3lCdXR0b25zKTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jcGxhY2VCdG46aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuI3BhY2VtZW50IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDIzMCk7XG59XG5cblxuXG5cbi5wMTpob3ZlciwgI3JhbmRvbTpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG59XG4jZGVwbG95ZWQtcDEsXG4jZGVwbG95ZWQtY29tIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jc2hpcERhbWFnZWQsXG4jc2hpcERhbWFnZS1jb20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU2hpcHMgc3RhdCBkaXNwbGF5cyAtIG1heSBjb25zaWRlciBtb3ZpbmcgdG8gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCovXG4vKk91dGVybW9zdCBzaGlwIHN0YXQgZGl2cyovXG5cbi5wMVNoaXAsIC5jb21TaGlwIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgbWFyZ2luOiAuNDVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcbn1cbi5wMVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XG59XG4uY29tU2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcbn1cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5saWZlIHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuLmRhbWFnZWQge1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgd2lkdGg6IDIuOGVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pXG59XG4uc3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjIsIDIyKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XG59XG4vKkRpdiBjb250YWlucyBsaWZlL2RhbWFnZSBmb3IgZWFjaCBzaGlwKi9cbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi8qT3V0ZXIgbW9zdCBkaXYgZm9yIHNoaXAgc3RhdHMqL1xuI3AxLUMsICNwMS1CLCAjcDEtUywgI3AxLUQsICNwMS1QLCAjY29tLUMsICNjb20tQiwgI2NvbS1ELCAjY29tLVMsICNjb20tUCAgIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3AxLUMsICNjb20tQyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xufVxuXG4jcDEtQiwgI2NvbS1CIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUywgI2NvbS1TIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtRCwgI2NvbS1EIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4jcDEtUCwgI2NvbS1QIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0EscUJBQXFCO0FBQ3JCO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7UUFDUSxZQUFZO1FBQ1osaUJBQWlCO0FBQ3pCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUEsdUVBQXVFO0FBQ3ZFLDJCQUEyQjs7QUFFM0I7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHlEQUE0QztBQUNoRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7QUFDQSx5Q0FBeUM7QUFDekM7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5REFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0Msb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kZXBsb3lCdXR0b25zOiByZ2IoMTQ4LCAxMjgsIDkwKTtcXG59XFxuXFxuLypTaGlwIHBhY2VtZW50IGJ1dHRvbnMgKi9cXG4ucDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wMS5kZXBsb3llZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IGJvbGQgYmxhY2s7XFxufVxcbiNyYW5kb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXBsb3lCdXR0b25zKTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgd2lkdGg6IDE0ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi8qc2hpcCBwYWNlbWVudCBmb3JtKi9cXG4jcGxhY2VtZW50IHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGdhcDogLjJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuI3BsYWNlbWVudCBzZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4jcGxhY2VCdG4ge1xcbiAgICB3aWR0aDogMTNlbTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwbG95QnV0dG9ucyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNwbGFjZUJ0bjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcXG59XFxuI3BhY2VtZW50IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAyMzApO1xcbn1cXG5cXG5cXG5cXG5cXG4ucDE6aG92ZXIsICNyYW5kb206aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcbiNkZXBsb3llZC1wMSxcXG4jZGVwbG95ZWQtY29tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NoaXBEYW1hZ2VkLFxcbiNzaGlwRGFtYWdlLWNvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFNoaXBzIHN0YXQgZGlzcGxheXMgLSBtYXkgY29uc2lkZXIgbW92aW5nIHRvIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQqL1xcbi8qT3V0ZXJtb3N0IHNoaXAgc3RhdCBkaXZzKi9cXG5cXG4ucDFTaGlwLCAuY29tU2hpcCB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIG1hcmdpbjogLjQ1ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAuMjVlbSBzb2xpZCBibGFjaztcXG59XFxuLnAxU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTUsIDE2Nyk7XFxufVxcbi5jb21TaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgODEsIDM5KTtcXG59XFxuLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmxpZmUge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvQW5jaG9yMi5wbmcpO1xcbn1cXG4uZGFtYWdlZCB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hpdC5wbmcnKVxcbn1cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIyLCAyMik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuLypEaXYgY29udGFpbnMgbGlmZS9kYW1hZ2UgZm9yIGVhY2ggc2hpcCovXFxuI3AxLXN0YXQtQywgI3AxLXN0YXQtQiwgI3AxLXN0YXQtRCwgI3AxLXN0YXQtUywgI3AxLXN0YXQtUCwgI2NvbS1zdGF0LUMsICNjb20tc3RhdC1CLCAjY29tLXN0YXQtRCwgI2NvbS1zdGF0LVMsICNjb20tc3RhdC1QIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qT3V0ZXIgbW9zdCBkaXYgZm9yIHNoaXAgc3RhdHMqL1xcbiNwMS1DLCAjcDEtQiwgI3AxLVMsICNwMS1ELCAjcDEtUCwgI2NvbS1DLCAjY29tLUIsICNjb20tRCwgI2NvbS1TLCAjY29tLVAgICB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4jcDEtQywgI2NvbS1DIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvY2Fycmllci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3NSU7XFxufVxcblxcbiNwMS1CLCAjY29tLUIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1TLCAjY29tLVMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9zdWJtYXJpbmUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLUQsICNjb20tRCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtUCwgI2NvbS1QIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcGF0cm9sLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvT2NlYW4tQm9hcmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21pc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N1Ym1hcmluZTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1BhdHJvbDIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhcnJpZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuI2NvbUNvbnNvbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE2NCwgNjQpO1xufVxuI3AxQ29uc29sZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAyMzApO1xufVxuXG4jY29udGFpbmVyLXAxLFxuI2NvbnRhaW5lci1wMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBoZWlnaHQ6ODV2aDtcbiAgICBnYXA6IDA7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI3NoaXBCdXR0b25zIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lci1wMSAuY2VsbCxcbiNjb250YWluZXItcDIgLmNlbGwsXG4jY29udGFpbmVyLXAxIC5oaXQsXG4jY29udGFpbmVyLXAyIC5oaXQsXG4jY29udGFpbmVyLXAxIC5ib2F0LFxuI2NvbnRhaW5lci1wMiAuYm9hdCxcbiNjb250YWluZXItcDEgLm1pc3MsXG4jY29udGFpbmVyLXAyIC5taXNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbiNjb250YWluZXItcDEgLmNlbGwsXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuI2NvbnRhaW5lci1wMSAuYm9hdCxcbiNjb250YWluZXItcDIgLmJvYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jY29udGFpbmVyLXAxIC5taXNzLFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250YWluZXItcDEgLkMtSElULFxuI2NvbnRhaW5lci1wMSAuQi1ISVQsXG4jY29udGFpbmVyLXAxIC5ELUhJVCxcbiNjb250YWluZXItcDEgLlMtSElULFxuI2NvbnRhaW5lci1wMSAuUC1ISVQsXG4jY29udGFpbmVyLXAyIC5DLUhJVCxcbiNjb250YWluZXItcDIgLkItSElULFxuI2NvbnRhaW5lci1wMiAuRC1ISVQsXG4jY29udGFpbmVyLXAyIC5TLUhJVCxcbiNjb250YWluZXItcDIgLlAtSElUIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuLypTaGlwIGljb25zIG9uIGJvYXJkKi9cbiNvdmVybGF5LUIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1CIHtcbiAgICBoZWlnaHQ6IDEzMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnZlcnQtb3ZlcmxheS1CIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiNvdmVybGF5LUQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1EIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLnZlcnQtb3ZlcmxheS1EIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiNvdmVybGF5LVMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhvcnotb3ZlcmxheS1TIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuI292ZXJsYXktUCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLypcbi5ob3J6LW92ZXJsYXktUCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi5ob3J6LW92ZXJsYXktUCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG4qL1xuXG4jb3ZlcmxheS1DIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5ob3J6LW92ZXJsYXktQyB7XG4gICAgaGVpZ2h0OiAxMjAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgXG59XG5cbi52ZXJ0LW92ZXJsYXktQyB7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlEQUFrRDtJQUNsRCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOzs7QUFHQTs7SUFFSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlEQUEyQztJQUMzQyxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSx5REFBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBR0Esc0JBQXNCO0FBQ3RCO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBOzs7Ozs7Ozs7O0NBVUM7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxtREFBeUM7SUFDekMsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4jY29tQ29uc29sZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTY0LCA2NCk7XFxufVxcbiNwMUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMjMwKTtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSxcXG4jY29udGFpbmVyLXAyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgaGVpZ2h0Ojg1dmg7XFxuICAgIGdhcDogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvT2NlYW4tQm9hcmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbiNzaGlwQnV0dG9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5jZWxsLFxcbiNjb250YWluZXItcDIgLmNlbGwsXFxuI2NvbnRhaW5lci1wMSAuaGl0LFxcbiNjb250YWluZXItcDIgLmhpdCxcXG4jY29udGFpbmVyLXAxIC5ib2F0LFxcbiNjb250YWluZXItcDIgLmJvYXQsXFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4jY29udGFpbmVyLXAxIC5jZWxsLFxcbiNjb250YWluZXItcDIgLmNlbGwge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcbiNjb250YWluZXItcDEgLmJvYXQsXFxuI2NvbnRhaW5lci1wMiAuYm9hdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAubWlzcyxcXG4jY29udGFpbmVyLXAyIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbWlzcy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuQy1ISVQsXFxuI2NvbnRhaW5lci1wMSAuQi1ISVQsXFxuI2NvbnRhaW5lci1wMSAuRC1ISVQsXFxuI2NvbnRhaW5lci1wMSAuUy1ISVQsXFxuI2NvbnRhaW5lci1wMSAuUC1ISVQsXFxuI2NvbnRhaW5lci1wMiAuQy1ISVQsXFxuI2NvbnRhaW5lci1wMiAuQi1ISVQsXFxuI2NvbnRhaW5lci1wMiAuRC1ISVQsXFxuI2NvbnRhaW5lci1wMiAuUy1ISVQsXFxuI2NvbnRhaW5lci1wMiAuUC1ISVQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oaXQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuLypTaGlwIGljb25zIG9uIGJvYXJkKi9cXG4jb3ZlcmxheS1CIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9CYXR0bGVzaGlwMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktQiB7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0LW92ZXJsYXktQiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuI292ZXJsYXktRCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvRGVzdHJveWVyMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktRCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1EIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4jb3ZlcmxheS1TIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zdWJtYXJpbmUyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvcnotb3ZlcmxheS1TIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4jb3ZlcmxheS1QIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9QYXRyb2wyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLypcXG4uaG9yei1vdmVybGF5LVAge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktUCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuKi9cXG5cXG4jb3ZlcmxheS1DIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvY2FycmllcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uaG9yei1vdmVybGF5LUMge1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnZlcnQtb3ZlcmxheS1DIHtcXG4gICAgaGVpZ2h0OiAxMDAlXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3BsYWNlbWVudCB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2dztcbn1cblxuI3BsYWNlbWVudCAjZm9ybVRpdGxlIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG5cbn1cblxuI3BsYWNlbWVudCAuZm9ybUxhYmxlIHtcbiAgICB3aWR0aDogNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG59XG5cbiNwbGFjZW1lbnQgLmZvcm1JbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuI3BsYWNlbWVudCAjcGxhY2VCdG4ge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuI2RlcGxveWVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDIwdnc7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NoaXBmb3JtLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BsYWNlbWVudCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogMjB2dztcXG59XFxuXFxuI3BsYWNlbWVudCAjZm9ybVRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG5cXG59XFxuXFxuI3BsYWNlbWVudCAuZm9ybUxhYmxlIHtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG59XFxuXFxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNwbGFjZW1lbnQgI3BsYWNlQnRuIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuI2RlcGxveWVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogMjB2dztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2hpcG1haW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS13ZWxjb21lVGV4dENvbG9yOiByZ2IoMTE5LCA4NiwgMjYpO1xuICAgIC0td2VsY29tZUZvbnRGYW06J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIC0tYnRuSW5wdXRCb3JkZXI6IC4yZW0gc29saWQgd2hpdGU7XG59XG4jc3RhcnRzY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3N0YXJ0c2NyZWVuICN3ZWxjb21lIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0MHZoO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4jd2VsY29tZVRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0td2VsY29tZVRleHRDb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDMuOGVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiN3ZWxjb21lUGljIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1dmg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jd2VsY29tZUZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XG4gICAgZ2FwOiAxZW07XG5cbn1cbiN3ZWxjb21lRm9ybSBzZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgaGVpZ2h0OiAyLjV2aDtcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcblxufVxuI3dlbGNvbWVGb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAyLjV2aDtcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcbn1cblxuI3N0YXJ0QnRuIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2VsY29tZVRleHRDb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxrREFBa0Q7SUFDbEQsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIseURBQTZDO0lBQzdDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsUUFBUTs7QUFFWjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQ0FBbUM7O0FBRXZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13ZWxjb21lVGV4dENvbG9yOiByZ2IoMTE5LCA4NiwgMjYpO1xcbiAgICAtLXdlbGNvbWVGb250RmFtOidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgLS1idG5JbnB1dEJvcmRlcjogLjJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuI3N0YXJ0c2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jc3RhcnRzY3JlZW4gI3dlbGNvbWUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDB2aDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbiN3ZWxjb21lVGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0td2VsY29tZVRleHRDb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDMuOGVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbiN3ZWxjb21lUGljIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDV2aDtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3NoaXBtYWluLnBuZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jd2VsY29tZUZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XFxuICAgIGdhcDogMWVtO1xcblxcbn1cXG4jd2VsY29tZUZvcm0gc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XFxuXFxufVxcbiN3ZWxjb21lRm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyLjV2aDtcXG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xcbn1cXG5cXG4jc3RhcnRCdG4ge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWxjb21lVGV4dENvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXI6IHZhcigtLWJ0bklucHV0Qm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b25zLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwZm9ybS5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRzY3JlZW4uc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQsICB9IGZyb20gJy4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBodW1hblBsYXllciwgY29tcFBsYXllciB9IGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIuanMnXG5pbXBvcnQgeyBwcmludEJvYXJkLCB3ZWxjb21lRm9ybURPTSwgZGlzcGxheUNvbXB1dGVyLCBzaGlwQnRuSGFuZGxlciwgcmVtb3ZlU2hpcEJ0bnMsIHByaW50U3RhdHMsIHBsYXllclNoaXBPdmVybGF5IH0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcydcbmltcG9ydCB7IHBsYWNlQ29tcHV0ZXIsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCByYW5kb21BdHRhY2ssIHRhcmdldGVkQXR0YWNrLCBsYXN0SGl0LCBzdG9yZWRIaXQgLCB0YXJnZXRDb2wsIHRhcmdldFJvdywgc2F2ZWRSb3csIHNhdmVkQ29sIH0gZnJvbSAnLi9tb2R1bGVzL2NvbXB1dGVyLmpzJ1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3MnO1xuXG5leHBvcnQgbGV0IHBsYXllcjE7XG5leHBvcnQgbGV0IGNvbXB1dGVyO1xuZXhwb3J0IGxldCBhdWRpb0V2ZW50O1xuXG4vL2N1c3RvbSBhdWRpbyBldmVudHMgLSBjcmVhdGVzIGF1ZGlvIGV2ZW50XG5leHBvcnQgZnVuY3Rpb24gQXVkaW9FdmVudEZuIChFdmVudE5hbWUpe1xuICAgIGF1ZGlvRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0F1ZGlvRXZlbnQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdHlwZTogRXZlbnROYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYFN1Y2Nlc3MgLSBleGVjdXRlICR7RXZlbnROYW1lfWAsXG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0F1ZGlvRXZlbnQnLCAoKT0+IHtcbiAgICAvL2NvbnN0IG1pc3NpbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNzaWxlU291bmQnKTtcbiAgICBjb25zb2xlLmxvZyhhdWRpb0V2ZW50KTtcbn0pXG5cbi8vd2VsY29tZSBmb3JtXG5leHBvcnQgbGV0IGJvYXJkU2l6ZTtcbmNvbnN0IGxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4oZnVuY3Rpb24gd2VsY29tZUZvcm0gKCl7XG4gICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICB3ZWxjb21lRm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYm9hcmRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS52YWx1ZTtcblxuICAgICAgICAgICAgLy9jcmVhdGUgcGxheWVyc1xuICAgICAgICAgICAgcGxheWVyMSA9IG5ldyBodW1hblBsYXllcignQW5kcmV3Jyk7XG4gICAgICAgICAgICBjb21wdXRlciA9IG5ldyBjb21wUGxheWVyKCdjb21wdXRlcicsICdlYXN5Jyk7XG4gICAgICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgICAgIHdlbGNvbWVGb3JtRE9NKCk7XG4gICAgfSlcbn0pKCk7XG5cbi8vcGxheWVyIHBsYWNlIGFsbCBwbGF5ZXIgc2hpcHMgcmFuZG9tbHkgb24gYnV0dG9uIHB1c2hcbihmdW5jdGlvbiByYW5kb21TZXRQbGF5ZXIgKCl7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIHBsYWNlQ29tcHV0ZXIocGxheWVyMSk7XG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9uc1xuICAgICAgICByZW1vdmVTaGlwQnRucyAoKTtcbiAgICAgICAgLy9wbGFjZSBhbmQgcHJpbnQgY29tcHV0ZXIgYm9hcmQgYW5kIHNoaXBzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucGFnZScpLmNsYXNzTGlzdC5hZGQoJ21haW5QYWdlJyk7XG4gICAgICAgIGRpc3BsYXlDb21wdXRlcigpO1xuICAgICAgICBwbGFjZUNvbXB1dGVyKGNvbXB1dGVyKTtcbiAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICB9KVxuXG59KSgpO1xuXG4vL3BsYXllciBwbGFjZSBzaGlwcyBvbiBib2FyZCBtYW51YWxseVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50JylcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyICgnc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vc2hpcCBjb3VudCBwcmlvciB0byBwbGFjZW1lbnRcbiAgICAgICAgbGV0IHN0YXJ0Q291bnQgPSBwbGF5ZXIxLmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgLy9zdG9yZSB2YWxlcyBmcm9tIGlucHV0IGZvcm1cbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBSb3cnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKS52YWx1ZTtcbiAgICAgICAgbGV0IHNoaXBUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgc2hpcElEID0gc2hpcFR5cGUuc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vcGxhY2Ugc2hpcFxuICAgICAgICBwbGF5ZXIxLmdiLnBsYWNlTmV3U2hpcChzaGlwVHlwZSwgcm93LCBjb2wsIGRpcmVjdGlvbik7XG4gICAgICAgIC8vc2hpcCBjb3VudCBhZnRlciBhdHRlbXRwZWQgcGxhY2VtZW50XG4gICAgICAgIGxldCBuZXdDb3VudCA9IHBsYXllcjEuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FyZCwgb3ZlcmxheSwgc2hpcCBzdGF0c1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCBzaGlwVHlwZSwgc2hpcElELCAncDEnKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvL3JlbW92ZSBhbGwgYnV0dG9ucyBpZiBhbGwgZml2ZSBzaGlwcyBwbGFjZWRcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMoKTtcbiAgICAgICAgcmFuZG9tQnRuLnJlbW92ZSgpXG4gICAgICAgIC8vY2hlY2sgaWYgc2hpcCB3YXMgcGxhY2VkXG4gICAgICAgIGlmKChuZXdDb3VudCA+IHN0YXJ0Q291bnQpICYmIChuZXdDb3VudCA8IDUpKXtcbiAgICAgICAgICAgIC8vIGlmIHNvIGFkZCBkZXBsb3llZCBjbGFzcyBzaGlwIGJ0blxuICAgICAgICAgICAgbGV0IHRhcmdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4tJHtzaGlwVHlwZX1gKTtcbiAgICAgICAgICAgIHRhcmdldEJ0bi5jbGFzc0xpc3QuYWRkKCdkZXBsb3llZFNoaXAnKVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgYWxsIHNoaXBzIHBsYWNlIGRpc3BsYXkgY29tcHV0ZXJcbiAgICAgICAgaWYocGxheWVyMS5nYi5zaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICAgICAgZGlzcGxheUNvbXB1dGVyKCk7XG4gICAgICAgICAgICBwbGFjZUNvbXB1dGVyKGNvbXB1dGVyKTtcbiAgICAgICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgICAgIH1cbiAgICB9KX1cbilcblxuLy9saXN0ZW4gZm9yIHBsYXllciB0dXJuXG5sZXQgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMScpO1xubGV0IGNvbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXAyJyk7XG5cbi8vTGlzdGVuIGZvciBwbGF5ZXIgY2xpY2sgb24gY29tcHV0ZXIgYm9hcmQgdG8gbG9nIGF0dGFja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbW92ZXMnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0NhcnJpZXInLCAnQycsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0JhdHRsZXNoaXAnLCAnQicsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ0Rlc3Ryb3llcicsICdEJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnU3VibWFyaW5lJywgJ1MnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdQYXRyb2wgQm9hdCcsICdQJywgJ2NvbScpO1xuICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgIH0pXG5cbn1cbik7XG4vL0xpc3RlbiBmb3IgY29tcHV0ZXIgYm9hcmQgY2xpY2sgYnkgcGxheWVyLCBoYW5kbGVyIGlzIGNvbXB1dGVyIGF0dGFja1xuY29tcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCBmdW5jdGlvbiBSYW5kb21Nb3ZlICgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIFJhbmRvbU1vdmUgKCl7XG4gICAgICAgIFxuICAgICAgICAvL0xldmVsIGVhc3kgLSBjb21wdXRlciBhbHdheXMgcmFuZG9tbHkgYXR0YWNrcyBwbGF5ZXIgMVxuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdlYXN5Jyl7XG4gICAgICAgICAgICByYW5kb21BdHRhY2socGxheWVyMSk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL0xldmVsIG1lZGl1bSAtIGNvbXB1dGVyIHdpbGwgY2hlY2sgYWRqYWNlbnQgc3BhY2VzXG4gICAgICAgIGlmIChsZXZlbC52YWx1ZSA9PT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHJhbmRvbVJvdyAke3JhbmRvbVJvd30gcmFuZG9tQ29sICR7cmFuZG9tQ29sfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWRSb3cgJHtzYXZlZFJvd30gc2F2ZWRDb2wgJHtzYXZlZENvbH0gYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0YXJnZXRkUm93ICR7dGFyZ2V0Um93fSB0YXJnZXRDb2wgJHt0YXJnZXRDb2x9IGApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldGVkQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgbGFzdEhpdChwbGF5ZXIxLCByYW5kb21Sb3csIHJhbmRvbUNvbCk7XG4gICAgICAgICAgICBwbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9O1xuICAgICAgICAvL3ByaW50IHBsYXllciBzaGlwIHN0YXRzXG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0NhcnJpZXInLCAnQycsICdwMScpO1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdCYXR0bGVzaGlwJywgJ0InLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnRGVzdHJveWVyJywgJ0QnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnU3VibWFyaW5lJywgJ1MnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnUGF0cm9sIEJvYXQnLCAnUCcsICdwMScpO1xuICAgICAgICAvL3ByaW50IHBsYXllciBib2FkXG4gICAgICAgIHByaW50Qm9hcmQocGxheWVyMS5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMScsIHBsYXllcjEuZ2IpO1xuICAgICAgICBwbGF5ZXJTaGlwT3ZlcmxheSgpO1xuICAgICAgICAvL0Rpc3BsYXlzIGZvcm0gcGFjZW1lbnQgdXBvbiBidG4gcHJlc3NcbiAgICAgICAgc2hpcEJ0bkhhbmRsZXIoJy5wMScsICdwMScpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVyIG1vdmVzJyk7XG4gICAgfSwgMTAwMCk7XG59KTtcblxuc2hpcEJ0bkhhbmRsZXIoKTtcblxuLy9jb25zb2xlLmxvZyhjb21wdXRlci5nYi5zaGlwcyk7XG5cbi8qXG5jb25zb2xlLmxvZyhib2FyZFRlc3RbMF1bMF0udmFsdWUpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLmMpO1xuY29uc29sZS5sb2coYm9hcmRUZXN0WzNdWzRdLnIpO1xuKi9cbi8vYXR0YWNrc1xuLypcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygwLCAxKTtcbnBsYXllcjEuZ2IucmVjZWl2ZUF0dGFjaygxLCAwKTtcblxuY29tcHV0ZXIuZ2IucmVjZWl2ZUF0dGFjaygwLCAwKTtcbmNvbXB1dGVyLmdiLnJlY2VpdmVBdHRhY2soNiwgNCk7XG5cbi8vaG93IHRvIHByaW50IHNoaXBzXG5jb25zb2xlLmxvZyhib2FyZFRlc3QpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwcyk7XG5jb25zb2xlLmxvZyhwbGF5ZXIxLmdiLnNoaXBzWzBdKTtcbiovXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IHNoaXAgfSBmcm9tICcuLi9tb2R1bGVzL3NoaXAuanMnXG5pbXBvcnQgeyBhcnJheVNoaXBzIH0gZnJvbSAnLi4vbW9kdWxlcy9kb20uanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuLy9VdGlsaXR5IGZ1bmN0aW9uLCByYW5kb20gcm93L2NvbFxuY29uc3QgcmFuZG9tTnVtID0ge1xuICAgIGdldCB2YWx1ZSAoKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgfVxufTtcbi8vVXRpbGl0eSBmdW5jdGlvbiwgcmFuZG9tIGRpcmVjdGlvblxuZnVuY3Rpb24gcmFuZG9tRGlyICgpe1xuICAgIGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBpZiAodmFsdWUgPT09IDApeyByZXR1cm4gJ1VwJyB9IFxuICAgICAgICBpZiAodmFsdWUgPT09IDEpeyByZXR1cm4gJ0Rvd24nIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAyKXsgcmV0dXJuICdSaWdodCcgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDMpeyByZXR1cm4gJ0xlZnQnIH1cbn07XG5cblxuLy9SYW5kb21seSBwbGFjZSBzaGlwXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwIChzaGlwLCBjcHUpIHtcbiAgICBmdW5jdGlvbiB0cnlBZ2FpbiAoKXtcbiAgICAgIGxldCBsZW5ndGggPSBjcHUuZ2Iuc2hpcHMubGVuZ3RoO1xuICAgICAgY3B1LmdiLnBsYWNlTmV3U2hpcChzaGlwLCByYW5kb21OdW0udmFsdWUsIHJhbmRvbU51bS52YWx1ZSwgcmFuZG9tRGlyICgpKTtcbiAgICAgIC8vaWYgdGhlIHNoaXAgZmFpbHMgdG8gcGxhY2Ugb24gdGhlIGJvYXJkIHJ1biBhZ2FpblxuICAgICAgaWYgKGNwdS5nYi5zaGlwcy5sZW5ndGggPT09IGxlbmd0aCl7XG4gICAgICAgICAgdHJ5QWdhaW4oKTtcbiAgICAgIH07XG4gICB9XG4gICB0cnlBZ2FpbigpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXIgKHVzZXIpIHtcbiAgICBwbGFjZVNoaXAgKCdDYXJyaWVyJywgdXNlcik7XG4gICAgcGxhY2VTaGlwICgnQmF0dGxlc2hpcCcsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ0Rlc3Ryb3llcicsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1N1Ym1hcmluZScsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ1BhdHJvbCBCb2F0JywgdXNlcik7XG59O1xuXG4vL0NvbXB1dGVyIGF0dGFjayByYW5kb20gbW92ZVxuZXhwb3J0IGxldCByYW5kb21Sb3c7XG5leHBvcnQgbGV0IHJhbmRvbUNvbDtcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BdHRhY2sgKHVzZXIpe1xuICAgIGNvbnNvbGUubG9nKCdyYW5kb21BdHRhY2sgZm4nKVxuICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICBpZiAodXNlci5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIHJhbmRvbUNvbCkgPT09ICdpbnZhbGlkJykge1xuICAgICAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICByYW5kb21BdHRhY2sodXNlcik7XG4gICAgfTtcbn1cblxuICAvL3V0aWxpdHkgZnVuY3Rpb24gJiB2YXJpYWJsZXMgdG8gc3RvcmUgbGFzdCBoaXRcbiAgZXhwb3J0IGxldCB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICBleHBvcnQgZnVuY3Rpb24gbGFzdEhpdCAoZW5lbXksIHJvdywgY29sKXtcbiAgICBpZiAoZW5lbXkuZ2IuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQycgfHwgXG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0InIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1AnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBsYXN0aGl0IGZuIC0gc3RvcmUgaGl0Jyk7XG5cbiAgICAgICAgICB0YXJnZXRSb3cgPSByb3c7XG4gICAgICAgICAgdGFyZ2V0Q29sID0gY29sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0aGl0IGZuIC0gbm8gZGF0YSBmb3IgaGl0Jyl9XG4gIH07XG5cbiAgZXhwb3J0IGxldCBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIHN0b3JlZEhpdCAocm93LCBjb2wpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFJvdyA9PT0gJ251bWJlcicpe1xuICAgICAgICBzYXZlZFJvdyA9IHJvdztcbiAgICAgICAgc2F2ZWRDb2wgPSBjb2w7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVkUm93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZENvbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9O1xuXG4gIC8vdXRpbGl0eSBmbiAtIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm4gZ28gdG8gcmFuZG9tIGF0dGFja1xuICBsZXQgbGFzdENvdW50ID0gMDtcbiAgZnVuY3Rpb24gcG9zdFN1bmtBdHQgKGVuZW15KSB7XG4gICAgbGV0IGNhclN1bmsgPSBlbmVteS5nYi5zaGlwc1swXS5pc1N1bmsoKTtcbiAgICBsZXQgYmF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzFdLmlzU3VuaygpO1xuICAgIGxldCBkaXNTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgbGV0IHN1YlN1bmsgPSBlbmVteS5nYi5zaGlwc1szXS5pc1N1bmsoKTtcbiAgICBsZXQgcGF0U3VuayA9IGVuZW15LmdiLnNoaXBzWzRdLmlzU3VuaygpO1xuICAgIGxldCBzaGlwcyA9IFtjYXJTdW5rLCBiYXRTdW5rLCBkaXNTdW5rLCBzdWJTdW5rLCBwYXRTdW5rXTtcbiAgICBsZXQgY291bnRUcnVlID0gc2hpcHMuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSB0cnVlKS5sZW5ndGhcblxuICAgIGlmIChsYXN0Q291bnQgPCBjb3VudFRydWUpIHsgXG4gICAgICAgICsrbGFzdENvdW50XG4gICAgICAgIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJhbmRvbUF0dGFjayAoZW5lbXkpO1xuICAgIH07XG59O1xuXG4vL3V0aWxpdHkgZm4gLSBjaGVjayBzcGFjZSBhZGphY2VudCB0byBhdHRhY2sgZm9yIG5leHQgYXR0YWNrXG5mdW5jdGlvbiBhZGphY2VudCAoZW5lbXksIHJvdywgY29sKSB7XG4gICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgfVxufTtcblxuICAvL3Bvc3NpYmxlIGFkamFjZW50IG1vdmVzIGZyb20gYSBoaXRcbiAgbGV0IHJvd1BsdXM7XG4gIGxldCByb3dNaW51cztcbiAgbGV0IGNvbFBsdXM7XG4gIGxldCBjb2xNaW51cztcblxuICBleHBvcnQgZnVuY3Rpb24gdGFyZ2V0ZWRBdHRhY2sgKGVuZW15KXtcbiAgIFxuICAgIC8vZmlyc3QgbW92ZVxuICAgIGlmIChyYW5kb21Sb3cgID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayAoZW5lbXkpICBcbiAgICB9O1xuICAgIC8vY2hlY2sgaWYgYSBzaGlwIHdhcyBzdW5rIGxhc3QgdHVyblxuICAgIHBvc3RTdW5rQXR0KGVuZW15KTtcblxuICAgIC8vSWYgbGFzdCBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICApIHtcbiAgICAgICAgXG4gICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgcm93TWludXMgPSByYW5kb21Sb3cgLTE7XG4gICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgIFxuICAgICAgICAvL2lmIHRoZXJlIGlzIG5vdCBhIHNhdmVkIGhpdCBjaGVjayBlYWNoIG9mIHRoZSBhZGphY2VudCBzcG90c1xuICAgICAgICBpZiAoc2F2ZWRSb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgIHN0b3JlZEhpdCh0YXJnZXRSb3csIHRhcmdldENvbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xQbHVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzJyk7XG4gICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgIH07XG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIHR3byBoaXRzIGNoZWNrIHRvIHNlZSBpZiBhZGphY2VudCBzcG90IG9uIHRoZSBjby9yb3cgaXMgb3BlblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcm93VmFsID0gTWF0aC5hYnMocmFuZG9tUm93IC0gc2F2ZWRSb3cpO1xuICAgICAgICAgICAgbGV0IGNvbFZhbCA9IE1hdGguYWJzKHJhbmRvbUNvbC0gc2F2ZWRDb2wpO1xuICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlZCBhbmQgcmFuZG9tIHZhbHVlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3dWYWwgPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGljayByb3dzJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDFiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMmInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sVmFsID4gMCl7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDNiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDRiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbUNvbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL2lmIHRoZXJlIGlzIGEgc3RvcmVkIGhpdCBhbmQgbGFzdCBtb3ZlIGlzIGEgbWlzcyByZXJ1biBhZGphY2VudCBjaGVja3NcbiAgICBpZiAoIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdYJykgJiYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQgYXR0IC0gbWlzcywgZ28gYmFjayB0byBsYXN0IGhpdCcpO1xuXG4gICAgICAgICAgICByYW5kb21Sb3cgPSB0YXJnZXRSb3c7XG4gICAgICAgICAgICByYW5kb21Db2wgPSB0YXJnZXRDb2w7XG5cbiAgICAgICAgICAgIHJvd1BsdXMgPSAgcmFuZG9tUm93ICsgMTtcbiAgICAgICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICAgICAgY29sUGx1cyA9IHJhbmRvbUNvbCArIDE7XG4gICAgICAgICAgICBjb2xNaW51cyA9IHJhbmRvbUNvbCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd01pbnVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgICAgIHJldHVybiArK3JhbmRvbUNvbDtcbiAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIGRlZmF1bHQgcmFuZG9tICcpXG4gIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgdGFyZ2V0Q29sID0gdW5kZWZpbmVkO1xuICByYW5kb21BdHRhY2sgKGVuZW15KTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBjb21wdXRlciwgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5pbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cblxuLy9ET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5IGZvciBzdWJtaXQgb24gd2VsY29tZSBmb3JtXG5leHBvcnQgZnVuY3Rpb24gd2VsY29tZUZvcm1ET00gKCl7XG4gICAgY29uc3Qgd2VsY29tZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUZvcm0nKTtcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHNjcmVlbicpO1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5wYWdlJyk7ICAgIFxuICAgIC8vcHJpbnQgcGxheWVyIG5hbWVcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAvL3JlbW92ZSBzdGFydCBzY3JlZW4gYW5kIHdlbGNvbWUgZm9ybVxuICAgIHdlbGNvbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL3JldmVhbCB0aGUgbWFpbiBwYWdlXG4gICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluUGFnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xufTtcblxuZXhwb3J0IGxldCBhcnJheVNoaXBzID0gW107XG5cbi8vdXRpbGl0eSBmbiAtIGNvbnZlcnQgcm93IGNvb3JkaW5hdGUgZnJvbSAjIHRvIGxldHRlclxuZnVuY3Rpb24gcm93Q29udiAobnVtYmVyKXtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsuLi5BcnJheSgyNildLm1hcCgoXyxpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKzk3KSk7XG4gICAgICAgIGxldCBsZXR0ZXIgPSBhbHBoYWJldFtudW1iZXJdO1xuICAgICAgICByZXR1cm4gbGV0dGVyO1xufTtcblxuLy9wcmludCBwbGF5ZXIvIGNvbXB1dGVyIGdhbWVib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmQgKGJvYXJkLCBjb250YWluZXIsIHBsYXllcil7XG4gICAgbGV0IGdiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyKTtcbiAgICBsZXQgc2hpcFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG4gICAgbGV0IHNoaXBDb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIG1heCByb3cvY29sIHNpemUgb24gcGxhY2VtZW50IGZvcm1cbiAgICBzaGlwUm93Lm1heCA9IGJvYXJkU2l6ZS0xO1xuICAgIHNoaXBDb2wubWF4ID0gYm9hcmRTaXplLTE7XG5cbiAgICAvL2R5bmFtaWNhbGx5IHNldCB0aGUgZ3JpZCBzaXplXG4gICAgZ2Iuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcbiAgICBnYi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2JvYXJkU2l6ZX0sIDFmcilgO1xuXG4gICAgLy9wcmludCBlYWNoIGNlbGwgd2l0aCB2YWx1ZXNcbiAgICBnYi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCl7XG4gICAgICAgIGZvcihsZXQgY2VsbCBvZiByb3cpe1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQy1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0MtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0ItSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdCLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdELUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnRC1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnUy1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1MtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSAnUC1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1AtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdDJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdEJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdTJyB8fCBcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdQJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2F0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQucm93ID0gY2VsbC5yO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmNvbCA9IGNlbGwuYztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9ob3ZlciB0byByZXZlYWwgc3BhY2UgZGF0YXNldFxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5yb3cpO1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LmNvbCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCByb3dDb252ZXJ0ZWQgPSByb3dDb252KHJvdykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7cm93Q29udmVydGVkfSR7Y29sfWA7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGRlcic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9ob3ZlciBvdXRcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NsaWNrIGJvYXJkIHRvIGF0dGFja1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgIC8vaWYgcGxheWVyIGhhc24ndCBwbGFjZSBhbGwgc2hpcHMgZG8gbm90IGxvZyBhdHRhY2tcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWxlbWVudC5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgICAgICAvL3JlY29yZCBhdHRhY2tcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBwbGF5ZXIgd2lucyBnYW1lXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5jaGVja1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGdiLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFycmF5U2hpcHMgPSBwbGF5ZXIuc2hpcHM7XG59XG5cbi8vQ3JlYXRlcyBvdmVybGF5IG9mIHNoaXAgb250byBib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50Qm9hcmRTaGlwcyAocHJlZml4LCB0YXJnZXRCb2FyZCl7IFxuICAgIC8vY2FsbCBtaW4vbWF4IG91dHNpZGUgdGhlIHBvc3NpYmUgcmFuZ2VcbiAgICBsZXQgbWluR3JpZFJvdyA9IDEwMDA7XG4gICAgbGV0IG1heEdyaWRSb3cgPSAtMTAwMDtcblxuICAgIGxldCBtaW5HcmlkQ29sID0gMTAwMDtcbiAgICBsZXQgbWF4R3JpZENvbCA9IC0xMDAwO1xuICAgIFxuICAgIC8vcmV0dXJuIHRoZSBtYXgvbWluIHJvdy9jb2wgZm9yIHNoaXAgbG9jYXRpb25cbiAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFyZ2V0Qm9hcmR9LiR7cHJlZml4fSwgLiR7dGFyZ2V0Qm9hcmR9LiR7cHJlZml4fS1ISVRgKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50R3JpZFJvdyA9IHRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93IDwgbWluR3JpZFJvdykge1xuICAgICAgICAgICAgbWluR3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRSb3cgPiBtYXhHcmlkUm93KSB7XG4gICAgICAgICAgICBtYXhHcmlkUm93ID0gcGFyc2VJbnQoY3VycmVudEdyaWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50R3JpZENvbCA9IHRhcmdldC5kYXRhc2V0LmNvbDtcbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sIDwgbWluR3JpZENvbCkge1xuICAgICAgICAgICAgbWluR3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEdyaWRDb2wgPiBtYXhHcmlkQ29sKSB7XG4gICAgICAgICAgICBtYXhHcmlkQ29sID0gcGFyc2VJbnQoY3VycmVudEdyaWRDb2wpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbilcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRCb2FyZCk7XG5sZXQgc2hpcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBPdmVybGF5LmlkID0gKGBvdmVybGF5LSR7cHJlZml4fWApO1xuXG4vL2lmIG5vIHZhbHVlcyBkbyBub3Qgb3ZlcmxheSAtIHVzZWQgZm9yIHBsYXllciBwbGFjZW1lbnRcbmlmIChtaW5HcmlkUm93ID09PSAxMDAwKXtyZXR1cm59O1xuLy9BZGQgMSB0byBhbGwgZm9yIGNvbnZlcnNpb24gZnJvbSBzcXVhcmVzIHRvIGdyaWQgbGluZXNcbi8vQWRkIDIgdG8gYW55IHNpbmdsZSBsZW5ndGggb3JpZW50YXRpb25cbi8vdmVydGljYWxcbmlmIChtaW5HcmlkQ29sID09PSBtYXhHcmlkQ29sKXtcbiAgICBsZXQgcm93RW5kID0gbWluR3JpZFJvdyArIHNoaXBMZW5ndGggKyAxO1xuICAgIHNoaXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoYHZlcnQtb3ZlcmxheS0ke3ByZWZpeH1gKTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBtaW5HcmlkQ29sICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gbWluR3JpZENvbCArIDI7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IHJvd0VuZDtcbi8vaG9yaXpvbnRhbFxufSBlbHNlIHtcbiAgICBsZXQgY29sRW5kID0gIG1pbkdyaWRDb2wgKyBzaGlwTGVuZ3RoICsgMTtcbiAgICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBob3J6LW92ZXJsYXktJHtwcmVmaXh9YCk7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd1N0YXJ0ID0gbWluR3JpZFJvdyArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZFJvd0VuZCA9IG1pbkdyaWRSb3cgKyAyO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5TdGFydCA9IG1pbkdyaWRDb2wgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRDb2x1bW5FbmQgPSBjb2xFbmQ7XG59XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcE92ZXJsYXkpO1xufTtcbi8vZnVuY3Rpb24gdG8gb3ZlcmxheSBhbGwgcGxheWVyIHNoaXBzXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyU2hpcE92ZXJsYXkgKCl7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdQJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQicsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0QnLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdTJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnQycsICdjb250YWluZXItcDEnKTtcbn07XG5cbi8vU2hpcCBidXR0b25zIGhhbmRlciB0byBkaXNwbGF5IGZvcm0gd2l0aCBjb3JyZWN0IHRpdGxlXG5leHBvcnQgZnVuY3Rpb24gc2hpcEJ0bkhhbmRsZXIgKCl7XG4gICAgY29uc3Qgc2hpcEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucDEnKTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VtZW50Jyk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UaXRsZScpO1xuICAgIGNvbnN0IGNvbHVtZW5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcENvbCcpO1xuICAgIGNvbnN0IHJvd1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93Jyk7XG5cbiAgICBzaGlwQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIGxldCBkYXRhU2hpcFR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtdHlwZScpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IGRhdGFTaGlwVHlwZTtcbiAgICAgICAgICAgIGNvbHVtZW5TZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHJvd1NlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgLy9hZGQgb3B0aW9ucyB0ZXh0IGZvciBjb2x1bW4gLSBhZGQgMSB0byBjb252ZXJ0IGZyb20gMCBiYXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICBjb2x1bWVuU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2FkZCBvcHRpb25zIHRleHQgZm9yIHJvdyAtIGNvbnZlcnQgbnVtYmVyIHRvIGxldHRlclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IG9wdFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydGVkID0gcm93Q29udihqKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG9wdFIudmFsdWUgPSBqO1xuICAgICAgICAgICAgICAgIG9wdFIudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0LmFwcGVuZENoaWxkKG9wdFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBzaGlwIGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkXG4gICAgICAgICAgICBpZiAoYXJyYXlTaGlwcy5zb21lKHNoaXAgPT4gc2hpcC50eXBlID09PSBkYXRhU2hpcFR5cGUpKXtcbiAgICAgICAgICAgIHBsYWNlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufX0pfSl9XG5cblxuLy9pZiBhbGwgc2hpcHMgcGxhY2VkIHJlbW92ZSBidXR0b25zXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2hpcEJ0bnMgKCkge1xuICAgIGlmIChhcnJheVNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgIGxldCBzaGlwQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQnV0dG9ucycpO1xuICAgICAgICBzaGlwQnRucy5yZW1vdmUoKTtcbiAgICB9XG59XG4vL2Rpc3BsYXkgY29tcHV0ZXIgY29uc29sZS9ib2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb21wdXRlciAoKSB7XG4gICAgaWYgKGFycmF5U2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgbGV0IGNvbXB1dGVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21Db25zb2xlJyk7XG4gICAgICAgIGNvbXB1dGVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIH1cbn1cblxuXG4vL3ByaW50IHN0YXRzIHRvIGVhY2ggc2hpcHMgc3RhdCBkaXYgKGxpZmUvIGRhbWFnZSlcbmV4cG9ydCBmdW5jdGlvbiBwcmludFN0YXRzIChwbGF5ZXIsIHNoaXAsIHN1ZmZpeCwgcHJlZml4KSB7XG4gICAgLy9zaGlwIGRhdGFcbiAgICBjb25zdCBmbGVldCA9IHBsYXllci5nYi5zaGlwcztcbiAgICBjb25zdCB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC50eXBlID09PSBzaGlwKTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzU2hpcC5sZW5ndGg7XG4gICAgY29uc3QgZGFtYWdlID0gdGhpc1NoaXAuZGFtYWdlO1xuICAgIC8vY29udGFpbmVycyBmb3IgbGlmZS1kYW1hZ2VcbiAgICBjb25zdCBkYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGF0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArICctc3RhdC0nICsgc3VmZml4KTtcbiAgICAvL3ByZXZlbnQgcmVwcmludGluZyBwcmlvciBkYXRhXG4gICAgc3RhdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvL3ByaW50IGRhbWFnZSBhbmQgbGlmZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGFtYWdlOyBqKyspe1xuICAgICAgICBsZXQgZGFtYWdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYW1hZ2VkLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQoZGFtYWdlZCk7XG4gICAgfSAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsZW5ndGggLSBkYW1hZ2UpOyBpKyspe1xuICAgICAgICBsZXQgbGlmZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaWZlLmNsYXNzTGlzdC5hZGQoJ2xpZmUnKTtcbiAgICAgICAgc3RhdHNEaXYuYXBwZW5kQ2hpbGQobGlmZSk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT09IGRhbWFnZSl7XG4gICAgICAgIGxldCB0aGlzSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyAnLScgKyBzdWZmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzSUQpO1xuICAgICAgICB0aGlzSUQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH1cbn07IiwiLy9jb25zdCBzaGlwID0gcmVxdWlyZSAoJy4vc2hpcC5qcycpXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplLCBBdWRpb0V2ZW50Rm4sIGF1ZGlvRXZlbnQgfSBmcm9tICcuLi9pbmRleC5qcydcbi8vaW1wb3J0IHsgc2hpcHNET00gfSBmcm9tICcuLi9tb2R1bGVzL2RvbS5qcydcblxuXG4vL3RvIGFjY2VzcyBzcXVhcmUgb24gYm9hcmQgdXMgbWUgYm9hcmQuYm9hcmRbcl1bY11cblxuLy9OZXZlciB1c2VkIHV0aWxpdHk6IGNvbnZlcnRzIGNvbHVtbiBsZXR0ZXIgdG8gbnVtYmVyIGZvciBsb29rVXBcbmZ1bmN0aW9uIGNvbENvbnZlcnQgKGxldHRlcil7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbLi4uQXJyYXkoYm9hcmRTaXplKV0ubWFwKChfLGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArOTcpKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IChlbCkgPT4gZWwgPT09IGxldHRlcjtcbiAgICAgICAgY29uc3QgbnVtID0gYWxwaGFiZXQuZmluZEluZGV4KGl0ZW0pO1xuICAgICAgICByZXR1cm4gbnVtXG59O1xuXG5cbi8vTmV2ZXIgdXNlZCB1dGlsaXR5OiBib2FyZCBhcyB2YXJpYWJsZW5hbWUuYm9hcmQsIG9ubHkgd29ya3MgZm9yIGZpcnN0IHJvd1xuZnVuY3Rpb24gbG9va1VwIChMZXQsIE51bSwgYXJyYXkpe1xuICAgIGNvbnN0IGMgPSBjb2xDb252ZXJ0KExldCk7XG4gICAgY29uc3QgciA9IE51bTtcbiAgICBjb25zdCB0YXJnZXQgPSBhcnJheS5ib2FyZFtjXVtyXTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvciAoY29sLCByb3cpIHtcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKyl7XG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbDsgYysrKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7IHZhbHVlLCByLCBjIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnB1c2gocm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgICB9XG4gICAgXG4gICAgLy91dGlsaXR5IGZ1bmN0aW9uXG4gICAgY2hlY2tPcGVuQm9hcmQgKHJvdywgY29sKXtcbiAgICAgICAgaWYgKChyb3cgPCAwICkgfHwgKHJvdyA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKChjb2wgPCAwICkgfHwgKGNvbCA+PSBib2FyZFNpemUgKSkgeyByZXR1cm4gJ2ludmFsaWQnIH1cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnWCcgfHwgXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnRC1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1MtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQLUhJVCdcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhbGlkJ31cbiAgICB9XG5cbiAgICBwbGFjZU5ld1NoaXAodHlwZSwgciwgYywgZGlyKSB7XG4gICAgICAgIGxldCByb3cgPSByO1xuICAgICAgICBsZXQgY29sID0gYztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcCh0eXBlKTtcblxuICAgICAgICBpZiAoZGlyID09PSAnRG93bicpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoci0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93ICsgaSkgPCAocm93ICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuYm9hcmRbcm93KytdW2NdKS52YWx1ZSAhPT0gMCkge3Rocm93IG5ldyBFcnJvcignTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAuJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgKyBpKSA8IChyICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3IrK11bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdVcCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChyIC0gKG5ld1NoaXAubGVuZ3RoLTEpIDwgMCkge3Rocm93IG5ldyBFcnJvcihcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAocm93IC0gaSkgPiAocm93IC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ctLV1bY10udmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAociAtIGkpID4gKHIgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbci0tXVtjXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpciA9PT0gJ1JpZ2h0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKChjLTEpICsgbmV3U2hpcC5sZW5ndGggPiAoYm9hcmRTaXplLTEpKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSB0b2tlbiBpcyBwbGFjZWQgb2ZmIHRoZSBib2FyZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3BhY2VzIGFyZSBhdmFpbGFibGVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjb2wgKyBpKSA8IChjb2wgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbCsrXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyArIGkpIDwgKGMgKyBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYysrXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdMZWZ0Jyl7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgLSAobmV3U2hpcC5sZW5ndGggKyAxKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IgKFwiWW91J3ZlIGdvbmUgb2ZmIGNvdXJzZSEgUmVkZXBsb3kgc2hpcC5cIil9XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sIC0gaSkgPiAoY29sIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY29sLS1dLnZhbHVlICE9PSAwKXt0aHJvdyBuZXcgRXJyb3IgKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3BhY2VzIGFyZSBvY2N1cGllZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChjIC0gaSkgPiAoYyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyXVtjLS1dLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2sgKHIsIGMpIHtcbiAgICAgICAgbGV0IGZsZWV0ID0gdGhpcy5zaGlwcztcbiAgICAgICAgbGV0IHRoaXNTaGlwO1xuICAgICAgICAvL01pc3NpbGUgZmlyZWQgYXVkaW8gZXZlbnQgY3JlYXRlIGFuZCBkaXNwYXRjaGVkXG4gICAgICAgIEF1ZGlvRXZlbnRGbiAoJ01pc3NpbGUnKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChhdWRpb0V2ZW50KTtcbiAgICAgICAgLy9pZiBhbHJlYWR5IG1pc3MgcmVjb3JkIGFub3RoZXIgbWlzc1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1gnKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgd2F0ZXIgcmVjb3JkIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgY2FycmllciByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQycpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdDJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgYmF0dGVzaGlwIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdCJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0InKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBkZXN0b3J5ZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0QnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnRCcpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHN1Ym1hcmluZSByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnUycpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdTJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgcGF0cm9sIGJvYXQgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1AnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnUCcpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVjb3JkIGhpdCB0byBib2FyZFxuICAgICAgICBsZXQgc2hpcEhpdCA9IHRoaXMuYm9hcmRbcl1bY10udmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gYCR7c2hpcEhpdH0tSElUYDtcbiAgICB9XG4gICAgY2hlY2tTdW5rICgpe1xuICAgICAgICBsZXQgc3RhdHVzID0gW107XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMF0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzFdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1syXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbM10uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzRdLmlzU3VuaygpKTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cy5ldmVyeShpdGVtID0+IGl0ZW0gPT09IHRydWUpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuLi9tb2R1bGVzL2dhbWVib2FyZC5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuXG5cbmV4cG9ydCBjbGFzcyBodW1hblBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy53aW5zID0gMDtcbiAgICAgICAgdGhpcy5sb3NzZXMgPSAwO1xuICAgICAgICB0aGlzLnN0cmVhayA9IDA7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKGJvYXJkU2l6ZSxib2FyZFNpemUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIGNvbXBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBsZXZlbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuZ2IgPSBuZXcgZ2FtZWJvYXJkKGJvYXJkU2l6ZSwgYm9hcmRTaXplKTtcbiAgICB9XG59XG4vKlxubW9kdWxlLmV4cG9ydHMgPSBodW1hblBsYXllclxubW9kdWxlLmV4cG9ydHMgPSBjb21wUGxheWVyXG4qLyIsImV4cG9ydCBjbGFzcyBzaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0NhcnJpZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0JhdHRsZXNoaXAnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnQic7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0Rlc3Ryb3llcicpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdEJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnU3VibWFyaW5lJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ1MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdQYXRyb2wgQm9hdCcpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdQJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgfVxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gZmFsc2UgfVxuICAgIH1cbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgc2hpcFxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBcblxuIl0sIm5hbWVzIjpbImdhbWVib2FyZCIsInNoaXAiLCJodW1hblBsYXllciIsImNvbXBQbGF5ZXIiLCJwcmludEJvYXJkIiwid2VsY29tZUZvcm1ET00iLCJkaXNwbGF5Q29tcHV0ZXIiLCJzaGlwQnRuSGFuZGxlciIsInJlbW92ZVNoaXBCdG5zIiwicHJpbnRTdGF0cyIsInBsYXllclNoaXBPdmVybGF5IiwicGxhY2VDb21wdXRlciIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsInJhbmRvbUF0dGFjayIsInRhcmdldGVkQXR0YWNrIiwibGFzdEhpdCIsInN0b3JlZEhpdCIsInRhcmdldENvbCIsInRhcmdldFJvdyIsInNhdmVkUm93Iiwic2F2ZWRDb2wiLCJwbGF5ZXIxIiwiY29tcHV0ZXIiLCJhdWRpb0V2ZW50IiwiQXVkaW9FdmVudEZuIiwiRXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJ0eXBlIiwibWVzc2FnZSIsImNvbmNhdCIsInN0YXR1cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJib2FyZFNpemUiLCJsZXZlbCIsImdldEVsZW1lbnRCeUlkIiwid2VsY29tZUZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJnYiIsImJvYXJkIiwicmFuZG9tU2V0UGxheWVyIiwicmFuZG9tQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsInN0YXJ0Q291bnQiLCJzaGlwcyIsImxlbmd0aCIsInJvdyIsImNvbCIsInNoaXBUeXBlIiwiaW5uZXJUZXh0IiwiZGlyZWN0aW9uIiwic2hpcElEIiwic2xpY2UiLCJwbGFjZU5ld1NoaXAiLCJuZXdDb3VudCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsInRhcmdldEJ0biIsInBsYXllckNvbnRhaW5lciIsImNvbXBDb250YWluZXIiLCJSYW5kb21Nb3ZlIiwic2V0VGltZW91dCIsInJlY2VpdmVBdHRhY2siLCJhcnJheVNoaXBzIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tRGlyIiwicGxhY2VTaGlwIiwiY3B1IiwidHJ5QWdhaW4iLCJ1c2VyIiwiY2hlY2tPcGVuQm9hcmQiLCJ1bmRlZmluZWQiLCJlbmVteSIsImxhc3RDb3VudCIsInBvc3RTdW5rQXR0IiwiY2FyU3VuayIsImlzU3VuayIsImJhdFN1bmsiLCJkaXNTdW5rIiwic3ViU3VuayIsInBhdFN1bmsiLCJjb3VudFRydWUiLCJmaWx0ZXIiLCJhZGphY2VudCIsInJvd1BsdXMiLCJyb3dNaW51cyIsImNvbFBsdXMiLCJjb2xNaW51cyIsInJvd1ZhbCIsImFicyIsImNvbFZhbCIsInN0YXJ0U2NyZWVuIiwibWFpblBhZ2UiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyb3dDb252IiwibnVtYmVyIiwiYWxwaGFiZXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibGV0dGVyIiwiY29udGFpbmVyIiwicGxheWVyIiwic2hpcFJvdyIsInNoaXBDb2wiLCJtYXgiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImlubmVySFRNTCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2xvb3AiLCJjZWxsIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiciIsImMiLCJOdW1iZXIiLCJyb3dDb252ZXJ0ZWQiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNoZWNrU3VuayIsImFsZXJ0IiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsInByaW50Qm9hcmRTaGlwcyIsInByZWZpeCIsInRhcmdldEJvYXJkIiwibWluR3JpZFJvdyIsIm1heEdyaWRSb3ciLCJtaW5HcmlkQ29sIiwibWF4R3JpZENvbCIsInRhcmdldHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hpcExlbmd0aCIsImZvckVhY2giLCJ0YXJnZXQiLCJjdXJyZW50R3JpZFJvdyIsInBhcnNlSW50IiwiY3VycmVudEdyaWRDb2wiLCJzaGlwT3ZlcmxheSIsImlkIiwicm93RW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsImdyaWRSb3dTdGFydCIsImdyaWRSb3dFbmQiLCJjb2xFbmQiLCJzaGlwQnV0dG9ucyIsInBsYWNlbWVudCIsImZvcm1UaXRsZSIsImNvbHVtZW5TZWxlY3QiLCJyb3dTZWxlY3QiLCJidG4iLCJkYXRhU2hpcFR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJvcHQiLCJqIiwib3B0UiIsImNvbnZlcnRlZCIsInNvbWUiLCJzaGlwQnRucyIsImNvbXB1dGVyRGlzcGxheSIsInN1ZmZpeCIsImZsZWV0IiwidGhpc1NoaXAiLCJmaW5kIiwiZGFtYWdlIiwiZGFtRGl2Iiwic3RhdHNEaXYiLCJkYW1hZ2VkIiwibGlmZSIsInRoaXNJRCIsImNvbENvbnZlcnQiLCJpdGVtIiwiZWwiLCJudW0iLCJmaW5kSW5kZXgiLCJsb29rVXAiLCJMZXQiLCJOdW0iLCJhcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImNyZWF0ZUJvYXJkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2FtZUJvYXJkIiwicm93cyIsInB1c2giLCJkaXIiLCJuZXdTaGlwIiwiRXJyb3IiLCJlcnJvciIsImRpc3BhdGNoRXZlbnQiLCJpbmRleCIsImluZGV4T2YiLCJoaXQiLCJzaGlwSGl0IiwiZXZlcnkiLCJ3aW5zIiwibG9zc2VzIiwic3RyZWFrIiwic3VuayJdLCJzb3VyY2VSb290IjoiIn0=