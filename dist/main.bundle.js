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
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }









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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDN0IsTUFBTSxFQUFFO0lBQ2pCO0VBQUM7SUFBQWtCLEdBQUE7SUFBQTFLLEtBQUEsRUFDRCxTQUFBNkMsT0FBQSxFQUFRO01BQ0osSUFBSSxJQUFJLENBQUMyRyxNQUFNLEtBQUssSUFBSSxDQUFDOUksTUFBTSxFQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDaUwsSUFBSSxHQUFHLElBQUk7TUFDM0IsQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLO01BQUM7SUFDMUI7RUFBQztBQUFBO0FBQ0o7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvYnV0dG9ucy5zdHlsZS5jc3M/OGJhMSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuc3R5bGUuY3NzPzU2YWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcGZvcm0uc3R5bGUuY3NzPzBmZGMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3RhcnRzY3JlZW4uc3R5bGUuY3NzPzIxNDQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0FuY2hvcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2Fycmllci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc3VibWFyaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZXN0cm95ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BhdHJvbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWRlcGxveUJ1dHRvbnM6IHJnYigxNDgsIDEyOCwgOTApO1xufVxuXG4vKlNoaXAgcGFjZW1lbnQgYnV0dG9ucyAqL1xuLnAxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB3aWR0aDogOGVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wMS5kZXBsb3llZFNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogM3B4IGJvbGQgYmxhY2s7XG59XG4jcmFuZG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXBsb3lCdXR0b25zKTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiAxNGVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi8qc2hpcCBwYWNlbWVudCBmb3JtKi9cbiNwbGFjZW1lbnQge1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGdhcDogLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIlO1xufVxuI3BsYWNlbWVudCBzZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgaGVpZ2h0OiAyLjV2aDtcbiAgICB3aWR0aDogNGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4jcGxhY2VCdG4ge1xuICAgIHdpZHRoOiAxM2VtO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwbG95QnV0dG9ucyk7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3BsYWNlQnRuOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbn1cbiNwYWNlbWVudCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAyMzApO1xufVxuXG5cblxuXG4ucDE6aG92ZXIsICNyYW5kb206aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuI2RlcGxveWVkLXAxLFxuI2RlcGxveWVkLWNvbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI3NoaXBEYW1hZ2VkLFxuI3NoaXBEYW1hZ2UtY29tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIFNoaXBzIHN0YXQgZGlzcGxheXMgLSBtYXkgY29uc2lkZXIgbW92aW5nIHRvIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQqL1xuLypPdXRlcm1vc3Qgc2hpcCBzdGF0IGRpdnMqL1xuXG4ucDFTaGlwLCAuY29tU2hpcCB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIG1hcmdpbjogLjQ1ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogLjI1ZW0gc29saWQgYmxhY2s7XG59XG4ucDFTaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTE1LCAxNjcpO1xufVxuLmNvbVNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XG59XG4uc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlmZSB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbi5kYW1hZ2VkIHtcbiAgICBoZWlnaHQ6IDIuOGVtO1xuICAgIHdpZHRoOiAyLjhlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KVxufVxuLnN1bmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIyLCAyMik7XG4gICAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xufVxuLypEaXYgY29udGFpbnMgbGlmZS9kYW1hZ2UgZm9yIGVhY2ggc2hpcCovXG4jcDEtc3RhdC1DLCAjcDEtc3RhdC1CLCAjcDEtc3RhdC1ELCAjcDEtc3RhdC1TLCAjcDEtc3RhdC1QLCAjY29tLXN0YXQtQywgI2NvbS1zdGF0LUIsICNjb20tc3RhdC1ELCAjY29tLXN0YXQtUywgI2NvbS1zdGF0LVAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4vKk91dGVyIG1vc3QgZGl2IGZvciBzaGlwIHN0YXRzKi9cbiNwMS1DLCAjcDEtQiwgI3AxLVMsICNwMS1ELCAjcDEtUCwgI2NvbS1DLCAjY29tLUIsICNjb20tRCwgI2NvbS1TLCAjY29tLVAgICB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbiNwMS1DLCAjY29tLUMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDc1JTtcbn1cblxuI3AxLUIsICNjb20tQiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuI3AxLVMsICNjb20tUyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuI3AxLUQsICNjb20tRCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuI3AxLVAsICNjb20tUCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9idXR0b25zLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2QjtBQUNBLHFCQUFxQjtBQUNyQjtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLG1CQUFtQjtBQUN2QjtBQUNBO1FBQ1EsWUFBWTtRQUNaLGlCQUFpQjtBQUN6QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7OztBQUtBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBLHVFQUF1RTtBQUN2RSwyQkFBMkI7O0FBRTNCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qix5REFBNEM7QUFDaEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QjtBQUNKO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0FBQzVCO0FBQ0EseUNBQXlDO0FBQ3pDO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBLGdDQUFnQztBQUNoQztJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5REFBOEM7SUFDOUMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseURBQWlEO0lBQ2pELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZGVwbG95QnV0dG9uczogcmdiKDE0OCwgMTI4LCA5MCk7XFxufVxcblxcbi8qU2hpcCBwYWNlbWVudCBidXR0b25zICovXFxuLnAxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICB3aWR0aDogOGVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucDEuZGVwbG95ZWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBib2xkIGJsYWNrO1xcbn1cXG4jcmFuZG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVwbG95QnV0dG9ucyk7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiAxNGVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKnNoaXAgcGFjZW1lbnQgZm9ybSovXFxuI3BsYWNlbWVudCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBnYXA6IC4yZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcbiNwbGFjZW1lbnQgc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBoZWlnaHQ6IDIuNXZoO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3BsYWNlbWVudCAuZm9ybUlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuI3BsYWNlQnRuIHtcXG4gICAgd2lkdGg6IDEzZW07XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlcGxveUJ1dHRvbnMpO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jcGxhY2VCdG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxufVxcbiNwYWNlbWVudCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMjMwKTtcXG59XFxuXFxuXFxuXFxuXFxuLnAxOmhvdmVyLCAjcmFuZG9tOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbn1cXG4jZGVwbG95ZWQtcDEsXFxuI2RlcGxveWVkLWNvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNzaGlwRGFtYWdlZCxcXG4jc2hpcERhbWFnZS1jb20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBTaGlwcyBzdGF0IGRpc3BsYXlzIC0gbWF5IGNvbnNpZGVyIG1vdmluZyB0byBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0Ki9cXG4vKk91dGVybW9zdCBzaGlwIHN0YXQgZGl2cyovXFxuXFxuLnAxU2hpcCwgLmNvbVNoaXAge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW46IC40NWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogLjI1ZW0gc29saWQgYmxhY2s7XFxufVxcbi5wMVNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTE1LCAxNjcpO1xcbn1cXG4uY29tU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQsIDgxLCAzOSk7XFxufVxcbi5zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5saWZlIHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL0FuY2hvcjIucG5nKTtcXG59XFxuLmRhbWFnZWQge1xcbiAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICB3aWR0aDogMi44ZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oaXQucG5nJylcXG59XFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyMiwgMjIpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcbi8qRGl2IGNvbnRhaW5zIGxpZmUvZGFtYWdlIGZvciBlYWNoIHNoaXAqL1xcbiNwMS1zdGF0LUMsICNwMS1zdGF0LUIsICNwMS1zdGF0LUQsICNwMS1zdGF0LVMsICNwMS1zdGF0LVAsICNjb20tc3RhdC1DLCAjY29tLXN0YXQtQiwgI2NvbS1zdGF0LUQsICNjb20tc3RhdC1TLCAjY29tLXN0YXQtUCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKk91dGVyIG1vc3QgZGl2IGZvciBzaGlwIHN0YXRzKi9cXG4jcDEtQywgI3AxLUIsICNwMS1TLCAjcDEtRCwgI3AxLVAsICNjb20tQywgI2NvbS1CLCAjY29tLUQsICNjb20tUywgI2NvbS1QICAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuI3AxLUMsICNjb20tQyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2NhcnJpZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzUlO1xcbn1cXG5cXG4jcDEtQiwgI2NvbS1CIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcDEtUywgI2NvbS1TIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwMS1ELCAjY29tLUQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9kZXN0cm95ZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI3AxLVAsICNjb20tUCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BhdHJvbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9taXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0JhdHRsZXNoaXAyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9EZXN0cm95ZXIyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdWJtYXJpbmUyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9QYXRyb2wyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYXJyaWVyMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiNjb21Db25zb2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNjQsIDY0KTtcbn1cbiNwMUNvbnNvbGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMjMwKTtcbn1cblxuI2NvbnRhaW5lci1wMSxcbiNjb250YWluZXItcDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgaGVpZ2h0Ojg1dmg7XG4gICAgZ2FwOiAwO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNzaGlwQnV0dG9ucyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXItcDEgLmNlbGwsXG4jY29udGFpbmVyLXAyIC5jZWxsLFxuI2NvbnRhaW5lci1wMSAuaGl0LFxuI2NvbnRhaW5lci1wMiAuaGl0LFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcbiNjb250YWluZXItcDIgLmJvYXQsXG4jY29udGFpbmVyLXAxIC5taXNzLFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4jY29udGFpbmVyLXAxIC5jZWxsLFxuI2NvbnRhaW5lci1wMiAuY2VsbCB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbiNjb250YWluZXItcDEgLmJvYXQsXG4jY29udGFpbmVyLXAyIC5ib2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2NvbnRhaW5lci1wMSAubWlzcyxcbiNjb250YWluZXItcDIgLm1pc3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jY29udGFpbmVyLXAxIC5DLUhJVCxcbiNjb250YWluZXItcDEgLkItSElULFxuI2NvbnRhaW5lci1wMSAuRC1ISVQsXG4jY29udGFpbmVyLXAxIC5TLUhJVCxcbiNjb250YWluZXItcDEgLlAtSElULFxuI2NvbnRhaW5lci1wMiAuQy1ISVQsXG4jY29udGFpbmVyLXAyIC5CLUhJVCxcbiNjb250YWluZXItcDIgLkQtSElULFxuI2NvbnRhaW5lci1wMiAuUy1ISVQsXG4jY29udGFpbmVyLXAyIC5QLUhJVCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbi8qU2hpcCBpY29ucyBvbiBib2FyZCovXG4jb3ZlcmxheS1CIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5ob3J6LW92ZXJsYXktQiB7XG4gICAgaGVpZ2h0OiAxMzAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi52ZXJ0LW92ZXJsYXktQiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG4jb3ZlcmxheS1EIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5ob3J6LW92ZXJsYXktRCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi52ZXJ0LW92ZXJsYXktRCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG4jb3ZlcmxheS1TIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5ob3J6LW92ZXJsYXktUyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbiNvdmVybGF5LVAge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi8qXG4uaG9yei1vdmVybGF5LVAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4uaG9yei1vdmVybGF5LVAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuKi9cblxuI292ZXJsYXktQyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaG9yei1vdmVybGF5LUMge1xuICAgIGhlaWdodDogMTIwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIFxufVxuXG4udmVydC1vdmVybGF5LUMge1xuICAgIGhlaWdodDogMTAwJVxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5REFBa0Q7SUFDbEQsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7O0lBUUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5REFBMkM7SUFDM0Msc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7O0lBVUkseURBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7OztBQUdBLHNCQUFzQjtBQUN0QjtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix5REFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1EQUEyQztJQUMzQywwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbURBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7Ozs7OztDQVVDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsbURBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuI2NvbUNvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE2NCwgNjQpO1xcbn1cXG4jcDFDb25zb2xlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDIzMCk7XFxufVxcblxcbiNjb250YWluZXItcDEsXFxuI2NvbnRhaW5lci1wMiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGhlaWdodDo4NXZoO1xcbiAgICBnYXA6IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL09jZWFuLUJvYXJkLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jc2hpcEJ1dHRvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsLFxcbiNjb250YWluZXItcDEgLmhpdCxcXG4jY29udGFpbmVyLXAyIC5oaXQsXFxuI2NvbnRhaW5lci1wMSAuYm9hdCxcXG4jY29udGFpbmVyLXAyIC5ib2F0LFxcbiNjb250YWluZXItcDEgLm1pc3MsXFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuI2NvbnRhaW5lci1wMSAuY2VsbCxcXG4jY29udGFpbmVyLXAyIC5jZWxsIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5cXG4jY29udGFpbmVyLXAxIC5ib2F0LFxcbiNjb250YWluZXItcDIgLmJvYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNjb250YWluZXItcDEgLm1pc3MsXFxuI2NvbnRhaW5lci1wMiAubWlzcyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL21pc3MucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250YWluZXItcDEgLkMtSElULFxcbiNjb250YWluZXItcDEgLkItSElULFxcbiNjb250YWluZXItcDEgLkQtSElULFxcbiNjb250YWluZXItcDEgLlMtSElULFxcbiNjb250YWluZXItcDEgLlAtSElULFxcbiNjb250YWluZXItcDIgLkMtSElULFxcbiNjb250YWluZXItcDIgLkItSElULFxcbiNjb250YWluZXItcDIgLkQtSElULFxcbiNjb250YWluZXItcDIgLlMtSElULFxcbiNjb250YWluZXItcDIgLlAtSElUIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGl0LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcbi8qU2hpcCBpY29ucyBvbiBib2FyZCovXFxuI292ZXJsYXktQiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQmF0dGxlc2hpcDIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LUIge1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4udmVydC1vdmVybGF5LUIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbiNvdmVybGF5LUQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL0Rlc3Ryb3llcjIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LUQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0LW92ZXJsYXktRCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuI292ZXJsYXktUyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc3VibWFyaW5lMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3J6LW92ZXJsYXktUyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuI292ZXJsYXktUCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvUGF0cm9sMi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi8qXFxuLmhvcnotb3ZlcmxheS1QIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4uaG9yei1vdmVybGF5LVAge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbiovXFxuXFxuI292ZXJsYXktQyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2NhcnJpZXIyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmhvcnotb3ZlcmxheS1DIHtcXG4gICAgaGVpZ2h0OiAxMjAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi52ZXJ0LW92ZXJsYXktQyB7XFxuICAgIGhlaWdodDogMTAwJVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNwbGFjZW1lbnQge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDIwdnc7XG59XG5cbiNwbGFjZW1lbnQgI2Zvcm1UaXRsZSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG59XG5cbiNwbGFjZW1lbnQgLmZvcm1MYWJsZSB7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xufVxuXG4jcGxhY2VtZW50IC5mb3JtSW5wdXQge1xuICAgIG1heC13aWR0aDogM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbiNwbGFjZW1lbnQgI3BsYWNlQnRuIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbiNkZXBsb3llZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZ3O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwZm9ybS5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwbGFjZW1lbnQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxufVxcblxcbiNwbGFjZW1lbnQgI2Zvcm1UaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxufVxcblxcbiNwbGFjZW1lbnQgLmZvcm1MYWJsZSB7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbiNwbGFjZW1lbnQgLmZvcm1JbnB1dCB7XFxuICAgIG1heC13aWR0aDogM2VtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4jcGxhY2VtZW50ICNwbGFjZUJ0biB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbiNkZXBsb3llZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3NoaXBtYWluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0td2VsY29tZVRleHRDb2xvcjogcmdiKDExOSwgODYsIDI2KTtcbiAgICAtLXdlbGNvbWVGb250RmFtOidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAtLWJ0bklucHV0Qm9yZGVyOiAuMmVtIHNvbGlkIHdoaXRlO1xufVxuI3N0YXJ0c2NyZWVuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzdGFydHNjcmVlbiAjd2VsY29tZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDB2aDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuI3dlbGNvbWVUaXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAzLjhlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4jd2VsY29tZVBpYyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNXZoO1xuICAgIGhlaWdodDogMjV2aDtcbiAgICB3aWR0aDogMjV2dztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuI3dlbGNvbWVGb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xuICAgIGdhcDogMWVtO1xuXG59XG4jd2VsY29tZUZvcm0gc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGhlaWdodDogMi41dmg7XG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XG5cbn1cbiN3ZWxjb21lRm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMi41dmg7XG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTcwLCAyMTgsIDIxOCk7XG59XG5cbiNzdGFydEJ0biB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdGFydHNjcmVlbi5zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0RBQWtEO0lBQ2xELGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHlEQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFFBQVE7O0FBRVo7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUNBQW1DOztBQUV2QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0td2VsY29tZVRleHRDb2xvcjogcmdiKDExOSwgODYsIDI2KTtcXG4gICAgLS13ZWxjb21lRm9udEZhbTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIC0tYnRuSW5wdXRCb3JkZXI6IC4yZW0gc29saWQgd2hpdGU7XFxufVxcbiNzdGFydHNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3N0YXJ0c2NyZWVuICN3ZWxjb21lIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDQwdmg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4jd2VsY29tZVRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLXdlbGNvbWVUZXh0Q29sb3IpO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAzLjhlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4jd2VsY29tZVBpYyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1dmg7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9zaGlwbWFpbi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3dlbGNvbWVGb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0td2VsY29tZUZvbnRGYW0pO1xcbiAgICBnYXA6IDFlbTtcXG5cXG59XFxuI3dlbGNvbWVGb3JtIHNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13ZWxjb21lRm9udEZhbSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgaGVpZ2h0OiAyLjV2aDtcXG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3MCwgMjE4LCAyMTgpO1xcblxcbn1cXG4jd2VsY29tZUZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMi41dmg7XFxuICAgIGJvcmRlcjogdmFyKC0tYnRuSW5wdXRCb3JkZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsIDIxOCwgMjE4KTtcXG59XFxuXFxuI3N0YXJ0QnRuIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2VsY29tZVRleHRDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXdlbGNvbWVGb250RmFtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiB2YXIoLS1idG5JbnB1dEJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbnMuc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9ucy5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcGZvcm0uc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcGZvcm0uc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0c2NyZWVuLnN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0c2NyZWVuLnN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkLCAgfSBmcm9tICcuL21vZHVsZXMvZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgaHVtYW5QbGF5ZXIsIGNvbXBQbGF5ZXIgfSBmcm9tICcuL21vZHVsZXMvcGxheWVyLmpzJ1xuaW1wb3J0IHsgcHJpbnRCb2FyZCwgd2VsY29tZUZvcm1ET00sIGRpc3BsYXlDb21wdXRlciwgc2hpcEJ0bkhhbmRsZXIsIHJlbW92ZVNoaXBCdG5zLCBwcmludFN0YXRzLCBwbGF5ZXJTaGlwT3ZlcmxheSB9IGZyb20gJy4vbW9kdWxlcy9kb20uanMnXG5pbXBvcnQgeyBwbGFjZUNvbXB1dGVyLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgcmFuZG9tQXR0YWNrLCB0YXJnZXRlZEF0dGFjaywgbGFzdEhpdCwgc3RvcmVkSGl0ICwgdGFyZ2V0Q29sLCB0YXJnZXRSb3csIHNhdmVkUm93LCBzYXZlZENvbCB9IGZyb20gJy4vbW9kdWxlcy9jb21wdXRlci5qcydcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoaXBmb3JtLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0YXJ0c2NyZWVuLnN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2J1dHRvbnMuc3R5bGUuY3NzJztcblxuZXhwb3J0IGxldCBwbGF5ZXIxO1xuZXhwb3J0IGxldCBjb21wdXRlcjtcbmV4cG9ydCBsZXQgYXVkaW9FdmVudDtcblxuLy9jdXN0b20gYXVkaW8gZXZlbnRzIC0gY3JlYXRlcyBhdWRpbyBldmVudFxuZXhwb3J0IGZ1bmN0aW9uIEF1ZGlvRXZlbnRGbiAoRXZlbnROYW1lKXtcbiAgICBhdWRpb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdBdWRpb0V2ZW50Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEV2ZW50TmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdWNjZXNzIC0gZXhlY3V0ZSAke0V2ZW50TmFtZX1gLFxuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdBdWRpb0V2ZW50JywgKCk9PiB7XG4gICAgLy9jb25zdCBtaXNzaWxlU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzc2lsZVNvdW5kJyk7XG4gICAgY29uc29sZS5sb2coYXVkaW9FdmVudCk7XG59KVxuXG4vL3dlbGNvbWUgZm9ybVxuZXhwb3J0IGxldCBib2FyZFNpemU7XG5jb25zdCBsZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xuKGZ1bmN0aW9uIHdlbGNvbWVGb3JtICgpe1xuICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgICAgICBjb25zdCB3ZWxjb21lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lRm9ybScpO1xuICAgICAgICBcbiAgICAgICAgd2VsY29tZUZvcm0uYWRkRXZlbnRMaXN0ZW5lciAoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJvYXJkU2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vY3JlYXRlIHBsYXllcnNcbiAgICAgICAgICAgIHBsYXllcjEgPSBuZXcgaHVtYW5QbGF5ZXIoJ0FuZHJldycpO1xuICAgICAgICAgICAgY29tcHV0ZXIgPSBuZXcgY29tcFBsYXllcignY29tcHV0ZXInLCAnZWFzeScpO1xuICAgICAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgICAgICB3ZWxjb21lRm9ybURPTSgpO1xuICAgIH0pXG59KSgpO1xuXG4vL3BsYXllciBwbGFjZSBhbGwgcGxheWVyIHNoaXBzIHJhbmRvbWx5IG9uIGJ1dHRvbiBwdXNoXG4oZnVuY3Rpb24gcmFuZG9tU2V0UGxheWVyICgpe1xuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwbGFjZUNvbXB1dGVyKHBsYXllcjEpO1xuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgLy9yZW1vdmUgYWxsIGJ1dHRvbnNcbiAgICAgICAgcmVtb3ZlU2hpcEJ0bnMgKCk7XG4gICAgICAgIC8vcGxhY2UgYW5kIHByaW50IGNvbXB1dGVyIGJvYXJkIGFuZCBzaGlwc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdtYWluUGFnZScpO1xuICAgICAgICBkaXNwbGF5Q29tcHV0ZXIoKTtcbiAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgIHByaW50Qm9hcmQoY29tcHV0ZXIuZ2IuYm9hcmQsICdjb250YWluZXItcDInLCBjb21wdXRlci5nYik7XG4gICAgfSlcblxufSkoKTtcblxuLy9wbGF5ZXIgcGxhY2Ugc2hpcHMgb24gYm9hcmQgbWFudWFsbHlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lciAoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3NoaXAgY291bnQgcHJpb3IgdG8gcGxhY2VtZW50XG4gICAgICAgIGxldCBzdGFydENvdW50ID0gcGxheWVyMS5nYi5zaGlwcy5sZW5ndGg7XG4gICAgICAgIC8vc3RvcmUgdmFsZXMgZnJvbSBpbnB1dCBmb3JtXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwUm93JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwQ29sJykudmFsdWU7XG4gICAgICAgIGxldCBzaGlwVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKS52YWx1ZTtcbiAgICAgICAgbGV0IHNoaXBJRCA9IHNoaXBUeXBlLnNsaWNlKDAsIDEpO1xuICAgICAgICAvL3BsYWNlIHNoaXBcbiAgICAgICAgcGxheWVyMS5nYi5wbGFjZU5ld1NoaXAoc2hpcFR5cGUsIHJvdywgY29sLCBkaXJlY3Rpb24pO1xuICAgICAgICAvL3NoaXAgY291bnQgYWZ0ZXIgYXR0ZW10cGVkIHBsYWNlbWVudFxuICAgICAgICBsZXQgbmV3Q291bnQgPSBwbGF5ZXIxLmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgYm9hcmQsIG92ZXJsYXksIHNoaXAgc3RhdHNcbiAgICAgICAgcHJpbnRCb2FyZChwbGF5ZXIxLmdiLmJvYXJkLCAnY29udGFpbmVyLXAxJywgcGxheWVyMS5nYik7XG4gICAgICAgIHBsYXllclNoaXBPdmVybGF5KCk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgc2hpcFR5cGUsIHNoaXBJRCwgJ3AxJyk7XG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy9yZW1vdmUgYWxsIGJ1dHRvbnMgaWYgYWxsIGZpdmUgc2hpcHMgcGxhY2VkXG4gICAgICAgIHJlbW92ZVNoaXBCdG5zKCk7XG4gICAgICAgIHJhbmRvbUJ0bi5yZW1vdmUoKVxuICAgICAgICAvL2NoZWNrIGlmIHNoaXAgd2FzIHBsYWNlZFxuICAgICAgICBpZigobmV3Q291bnQgPiBzdGFydENvdW50KSAmJiAobmV3Q291bnQgPCA1KSl7XG4gICAgICAgICAgICAvLyBpZiBzbyBhZGQgZGVwbG95ZWQgY2xhc3Mgc2hpcCBidG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnRuLSR7c2hpcFR5cGV9YCk7XG4gICAgICAgICAgICB0YXJnZXRCdG4uY2xhc3NMaXN0LmFkZCgnZGVwbG95ZWRTaGlwJylcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGFsbCBzaGlwcyBwbGFjZSBkaXNwbGF5IGNvbXB1dGVyXG4gICAgICAgIGlmKHBsYXllcjEuZ2Iuc2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgICAgIGRpc3BsYXlDb21wdXRlcigpO1xuICAgICAgICAgICAgcGxhY2VDb21wdXRlcihjb21wdXRlcik7XG4gICAgICAgICAgICBwcmludEJvYXJkKGNvbXB1dGVyLmdiLmJvYXJkLCAnY29udGFpbmVyLXAyJywgY29tcHV0ZXIuZ2IpO1xuICAgICAgICB9XG4gICAgfSl9XG4pXG5cbi8vbGlzdGVuIGZvciBwbGF5ZXIgdHVyblxubGV0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItcDEnKTtcbmxldCBjb21wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1wMicpO1xuXG4vL0xpc3RlbiBmb3IgcGxheWVyIGNsaWNrIG9uIGNvbXB1dGVyIGJvYXJkIHRvIGxvZyBhdHRhY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcbiAgICBjb21wQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsICgpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIG1vdmVzJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdDYXJyaWVyJywgJ0MnLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdCYXR0bGVzaGlwJywgJ0InLCAnY29tJyk7XG4gICAgICAgIHByaW50U3RhdHMoY29tcHV0ZXIsICdEZXN0cm95ZXInLCAnRCcsICdjb20nKTtcbiAgICAgICAgcHJpbnRTdGF0cyhjb21wdXRlciwgJ1N1Ym1hcmluZScsICdTJywgJ2NvbScpO1xuICAgICAgICBwcmludFN0YXRzKGNvbXB1dGVyLCAnUGF0cm9sIEJvYXQnLCAnUCcsICdjb20nKTtcbiAgICAgICAgcHJpbnRCb2FyZChjb21wdXRlci5nYi5ib2FyZCwgJ2NvbnRhaW5lci1wMicsIGNvbXB1dGVyLmdiKTtcbiAgICB9KVxuXG59XG4pO1xuLy9MaXN0ZW4gZm9yIGNvbXB1dGVyIGJvYXJkIGNsaWNrIGJ5IHBsYXllciwgaGFuZGxlciBpcyBjb21wdXRlciBhdHRhY2tcbmNvbXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgZnVuY3Rpb24gUmFuZG9tTW92ZSAoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiBSYW5kb21Nb3ZlICgpe1xuICAgICAgICBcbiAgICAgICAgLy9MZXZlbCBlYXN5IC0gY29tcHV0ZXIgYWx3YXlzIHJhbmRvbWx5IGF0dGFja3MgcGxheWVyIDFcbiAgICAgICAgaWYgKGxldmVsLnZhbHVlID09PSAnZWFzeScpe1xuICAgICAgICAgICAgcmFuZG9tQXR0YWNrKHBsYXllcjEpO1xuICAgICAgICAgICAgcGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9MZXZlbCBtZWRpdW0gLSBjb21wdXRlciB3aWxsIGNoZWNrIGFkamFjZW50IHNwYWNlc1xuICAgICAgICBpZiAobGV2ZWwudmFsdWUgPT09ICdtZWRpdW0nKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5kb21Sb3cgJHtyYW5kb21Sb3d9IHJhbmRvbUNvbCAke3JhbmRvbUNvbH1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkUm93ICR7c2F2ZWRSb3d9IHNhdmVkQ29sICR7c2F2ZWRDb2x9IGApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGFyZ2V0ZFJvdyAke3RhcmdldFJvd30gdGFyZ2V0Q29sICR7dGFyZ2V0Q29sfSBgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXJnZXRlZEF0dGFjayhwbGF5ZXIxKTtcbiAgICAgICAgICAgIGxhc3RIaXQocGxheWVyMSwgcmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICAgICAgcGxheWVyMS5nYi5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgc2hpcCBzdGF0c1xuICAgICAgICBwcmludFN0YXRzKHBsYXllcjEsICdDYXJyaWVyJywgJ0MnLCAncDEnKTtcbiAgICAgICAgcHJpbnRTdGF0cyhwbGF5ZXIxLCAnQmF0dGxlc2hpcCcsICdCJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ0Rlc3Ryb3llcicsICdEJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ1N1Ym1hcmluZScsICdTJywgJ3AxJyk7XG4gICAgICAgIHByaW50U3RhdHMocGxheWVyMSwgJ1BhdHJvbCBCb2F0JywgJ1AnLCAncDEnKTtcbiAgICAgICAgLy9wcmludCBwbGF5ZXIgYm9hZFxuICAgICAgICBwcmludEJvYXJkKHBsYXllcjEuZ2IuYm9hcmQsICdjb250YWluZXItcDEnLCBwbGF5ZXIxLmdiKTtcbiAgICAgICAgcGxheWVyU2hpcE92ZXJsYXkoKTtcbiAgICAgICAgLy9EaXNwbGF5cyBmb3JtIHBhY2VtZW50IHVwb24gYnRuIHByZXNzXG4gICAgICAgIHNoaXBCdG5IYW5kbGVyKCcucDEnLCAncDEnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wdXRlciBtb3ZlcycpO1xuICAgIH0sIDEwMDApO1xufSk7XG5cbnNoaXBCdG5IYW5kbGVyKCk7XG5cbi8vY29uc29sZS5sb2coY29tcHV0ZXIuZ2Iuc2hpcHMpO1xuXG4vKlxuY29uc29sZS5sb2coYm9hcmRUZXN0WzBdWzBdLnZhbHVlKTtcbmNvbnNvbGUubG9nKGJvYXJkVGVzdFszXVs0XS5jKTtcbmNvbnNvbGUubG9nKGJvYXJkVGVzdFszXVs0XS5yKTtcbiovXG4vL2F0dGFja3Ncbi8qXG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMCwgMSk7XG5wbGF5ZXIxLmdiLnJlY2VpdmVBdHRhY2soMSwgMCk7XG5cbmNvbXB1dGVyLmdiLnJlY2VpdmVBdHRhY2soMCwgMCk7XG5jb21wdXRlci5nYi5yZWNlaXZlQXR0YWNrKDYsIDQpO1xuXG4vL2hvdyB0byBwcmludCBzaGlwc1xuY29uc29sZS5sb2coYm9hcmRUZXN0KTtcbmNvbnNvbGUubG9nKHBsYXllcjEuZ2Iuc2hpcHMpO1xuY29uc29sZS5sb2cocGxheWVyMS5nYi5zaGlwc1swXSk7XG4qL1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBzaGlwIH0gZnJvbSAnLi4vbW9kdWxlcy9zaGlwLmpzJ1xuaW1wb3J0IHsgYXJyYXlTaGlwcyB9IGZyb20gJy4uL21vZHVsZXMvZG9tLmpzJ1xuaW1wb3J0IHsgYm9hcmRTaXplIH0gZnJvbSAnLi4vaW5kZXguanMnXG5cbi8vVXRpbGl0eSBmdW5jdGlvbiwgcmFuZG9tIHJvdy9jb2xcbmNvbnN0IHJhbmRvbU51bSA9IHtcbiAgICBnZXQgdmFsdWUgKCl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIH1cbn07XG4vL1V0aWxpdHkgZnVuY3Rpb24sIHJhbmRvbSBkaXJlY3Rpb25cbmZ1bmN0aW9uIHJhbmRvbURpciAoKXtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKXsgcmV0dXJuICdVcCcgfSBcbiAgICAgICAgaWYgKHZhbHVlID09PSAxKXsgcmV0dXJuICdEb3duJyB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMil7IHJldHVybiAnUmlnaHQnIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAzKXsgcmV0dXJuICdMZWZ0JyB9XG59O1xuXG5cbi8vUmFuZG9tbHkgcGxhY2Ugc2hpcFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcCAoc2hpcCwgY3B1KSB7XG4gICAgZnVuY3Rpb24gdHJ5QWdhaW4gKCl7XG4gICAgICBsZXQgbGVuZ3RoID0gY3B1LmdiLnNoaXBzLmxlbmd0aDtcbiAgICAgIGNwdS5nYi5wbGFjZU5ld1NoaXAoc2hpcCwgcmFuZG9tTnVtLnZhbHVlLCByYW5kb21OdW0udmFsdWUsIHJhbmRvbURpciAoKSk7XG4gICAgICAvL2lmIHRoZSBzaGlwIGZhaWxzIHRvIHBsYWNlIG9uIHRoZSBib2FyZCBydW4gYWdhaW5cbiAgICAgIGlmIChjcHUuZ2Iuc2hpcHMubGVuZ3RoID09PSBsZW5ndGgpe1xuICAgICAgICAgIHRyeUFnYWluKCk7XG4gICAgICB9O1xuICAgfVxuICAgdHJ5QWdhaW4oKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyICh1c2VyKSB7XG4gICAgcGxhY2VTaGlwICgnQ2FycmllcicsIHVzZXIpO1xuICAgIHBsYWNlU2hpcCAoJ0JhdHRsZXNoaXAnLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdEZXN0cm95ZXInLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdTdWJtYXJpbmUnLCB1c2VyKTtcbiAgICBwbGFjZVNoaXAgKCdQYXRyb2wgQm9hdCcsIHVzZXIpO1xufTtcblxuLy9Db21wdXRlciBhdHRhY2sgcmFuZG9tIG1vdmVcbmV4cG9ydCBsZXQgcmFuZG9tUm93O1xuZXhwb3J0IGxldCByYW5kb21Db2w7XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQXR0YWNrICh1c2VyKXtcbiAgICBjb25zb2xlLmxvZygncmFuZG9tQXR0YWNrIGZuJylcbiAgICByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgaWYgKHVzZXIuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCByYW5kb21Db2wpID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcbiAgICAgICAgcmFuZG9tQXR0YWNrKHVzZXIpO1xuICAgIH07XG59XG5cbiAgLy91dGlsaXR5IGZ1bmN0aW9uICYgdmFyaWFibGVzIHRvIHN0b3JlIGxhc3QgaGl0XG4gIGV4cG9ydCBsZXQgdGFyZ2V0Um93ID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGZ1bmN0aW9uIGxhc3RIaXQgKGVuZW15LCByb3csIGNvbCl7XG4gICAgaWYgKGVuZW15LmdiLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0MnIHx8IFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdCJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdEJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdTJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdQJylcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcgbGFzdGhpdCBmbiAtIHN0b3JlIGhpdCcpO1xuXG4gICAgICAgICAgdGFyZ2V0Um93ID0gcm93O1xuICAgICAgICAgIHRhcmdldENvbCA9IGNvbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbGFzdGhpdCBmbiAtIG5vIGRhdGEgZm9yIGhpdCcpfVxuICB9O1xuXG4gIGV4cG9ydCBsZXQgc2F2ZWRSb3cgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBmdW5jdGlvbiBzdG9yZWRIaXQgKHJvdywgY29sKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRSb3cgPT09ICdudW1iZXInKXtcbiAgICAgICAgc2F2ZWRSb3cgPSByb3c7XG4gICAgICAgIHNhdmVkQ29sID0gY29sO1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlZFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRDb2wgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfTtcblxuICAvL3V0aWxpdHkgZm4gLSBpZiBhIHNoaXAgd2FzIHN1bmsgbGFzdCB0dXJuIGdvIHRvIHJhbmRvbSBhdHRhY2tcbiAgbGV0IGxhc3RDb3VudCA9IDA7XG4gIGZ1bmN0aW9uIHBvc3RTdW5rQXR0IChlbmVteSkge1xuICAgIGxldCBjYXJTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbMF0uaXNTdW5rKCk7XG4gICAgbGV0IGJhdFN1bmsgPSBlbmVteS5nYi5zaGlwc1sxXS5pc1N1bmsoKTtcbiAgICBsZXQgZGlzU3VuayA9IGVuZW15LmdiLnNoaXBzWzJdLmlzU3VuaygpO1xuICAgIGxldCBzdWJTdW5rID0gZW5lbXkuZ2Iuc2hpcHNbM10uaXNTdW5rKCk7XG4gICAgbGV0IHBhdFN1bmsgPSBlbmVteS5nYi5zaGlwc1s0XS5pc1N1bmsoKTtcbiAgICBsZXQgc2hpcHMgPSBbY2FyU3VuaywgYmF0U3VuaywgZGlzU3Vuaywgc3ViU3VuaywgcGF0U3Vua107XG4gICAgbGV0IGNvdW50VHJ1ZSA9IHNoaXBzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkubGVuZ3RoXG5cbiAgICBpZiAobGFzdENvdW50IDwgY291bnRUcnVlKSB7IFxuICAgICAgICArK2xhc3RDb3VudFxuICAgICAgICB0YXJnZXRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRhcmdldFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgc2F2ZWRSb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgIHNhdmVkQ29sID0gdW5kZWZpbmVkO1xuICAgICAgICByYW5kb21BdHRhY2sgKGVuZW15KTtcbiAgICB9O1xufTtcblxuLy91dGlsaXR5IGZuIC0gY2hlY2sgc3BhY2UgYWRqYWNlbnQgdG8gYXR0YWNrIGZvciBuZXh0IGF0dGFja1xuZnVuY3Rpb24gYWRqYWNlbnQgKGVuZW15LCByb3csIGNvbCkge1xuICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgIH1cbn07XG5cbiAgLy9wb3NzaWJsZSBhZGphY2VudCBtb3ZlcyBmcm9tIGEgaGl0XG4gIGxldCByb3dQbHVzO1xuICBsZXQgcm93TWludXM7XG4gIGxldCBjb2xQbHVzO1xuICBsZXQgY29sTWludXM7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHRhcmdldGVkQXR0YWNrIChlbmVteSl7XG4gICBcbiAgICAvL2ZpcnN0IG1vdmVcbiAgICBpZiAocmFuZG9tUm93ICA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByYW5kb21BdHRhY2sgKGVuZW15KSAgXG4gICAgfTtcbiAgICAvL2NoZWNrIGlmIGEgc2hpcCB3YXMgc3VuayBsYXN0IHR1cm5cbiAgICBwb3N0U3Vua0F0dChlbmVteSk7XG5cbiAgICAvL0lmIGxhc3QgYXR0YWNrIHdhcyBhIGhpdFxuICAgIGlmIChlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdDLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnQi1ISVQnIHx8XG4gICAgICAgIGVuZW15LmdiLmJvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS52YWx1ZSA9PT0gJ0QtSElUJyB8fFxuICAgICAgICBlbmVteS5nYi5ib2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0udmFsdWUgPT09ICdTLUhJVCcgfHxcbiAgICAgICAgZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnUC1ISVQnXG4gICAgKSB7XG4gICAgICAgIFxuICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgIHJvd01pbnVzID0gcmFuZG9tUm93IC0xO1xuICAgICAgICBjb2xQbHVzID0gcmFuZG9tQ29sICsgMTtcbiAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICBcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBub3QgYSBzYXZlZCBoaXQgY2hlY2sgZWFjaCBvZiB0aGUgYWRqYWNlbnQgc3BvdHNcbiAgICAgICAgaWYgKHNhdmVkUm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJvd1BsdXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMScpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICBzdG9yZWRIaXQodGFyZ2V0Um93LCB0YXJnZXRDb2wpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Sb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sUGx1cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMycpO1xuICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tQ29sO1xuICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocmFuZG9tUm93LCBjb2xNaW51cykgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgc3RvcmVkSGl0KHRhcmdldFJvdywgdGFyZ2V0Q29sKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gNCcpO1xuICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICB9O1xuICAgICAgICAvL2lmIHRoZXJlIGFyZSB0d28gaGl0cyBjaGVjayB0byBzZWUgaWYgYWRqYWNlbnQgc3BvdCBvbiB0aGUgY28vcm93IGlzIG9wZW5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJvd1ZhbCA9IE1hdGguYWJzKHJhbmRvbVJvdyAtIHNhdmVkUm93KTtcbiAgICAgICAgICAgIGxldCBjb2xWYWwgPSBNYXRoLmFicyhyYW5kb21Db2wtIHNhdmVkQ29sKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQgYW5kIHJhbmRvbSB2YWx1ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93VmFsID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BpY2sgcm93cycpO1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dQbHVzLCByYW5kb21Db2wpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Sb3c7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93TWludXMsIHJhbmRvbUNvbCkgPT09ICd2YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDJiJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtLXJhbmRvbVJvdztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbFZhbCA+IDApe1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdiLmNoZWNrT3BlbkJvYXJkKHJhbmRvbVJvdywgY29sTWludXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0YicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLS1yYW5kb21Db2w7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9pZiB0aGVyZSBpcyBhIHN0b3JlZCBoaXQgYW5kIGxhc3QgbW92ZSBpcyBhIG1pc3MgcmVydW4gYWRqYWNlbnQgY2hlY2tzXG4gICAgaWYgKCAoZW5lbXkuZ2IuYm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLnZhbHVlID09PSAnWCcpICYmICh0eXBlb2YgdGFyZ2V0Um93ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0IGF0dCAtIG1pc3MsIGdvIGJhY2sgdG8gbGFzdCBoaXQnKTtcblxuICAgICAgICAgICAgcmFuZG9tUm93ID0gdGFyZ2V0Um93O1xuICAgICAgICAgICAgcmFuZG9tQ29sID0gdGFyZ2V0Q29sO1xuXG4gICAgICAgICAgICByb3dQbHVzID0gIHJhbmRvbVJvdyArIDE7XG4gICAgICAgICAgICByb3dNaW51cyA9IHJhbmRvbVJvdyAtMTtcbiAgICAgICAgICAgIGNvbFBsdXMgPSByYW5kb21Db2wgKyAxO1xuICAgICAgICAgICAgY29sTWludXMgPSByYW5kb21Db2wgLSAxO1xuXG4gICAgICAgICAgICBpZiAoZW5lbXkuZ2IuY2hlY2tPcGVuQm9hcmQocm93UGx1cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAxJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsrcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyb3dNaW51cywgcmFuZG9tQ29sKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiAyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tUm93O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbFBsdXMpID09PSAndmFsaWQnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKytyYW5kb21Db2w7XG4gICAgICAgICAgICB9OyBcbiAgICAgICAgICAgIGlmIChlbmVteS5nYi5jaGVja09wZW5Cb2FyZChyYW5kb21Sb3csIGNvbE1pbnVzKSA9PT0gJ3ZhbGlkJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiA0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0tcmFuZG9tQ29sO1xuICAgICAgICAgICAgfSBcbiAgICB9XG5cbiAgY29uc29sZS5sb2coJ3RhcmdldCBhdHQgLSBkZWZhdWx0IHJhbmRvbSAnKVxuICB0YXJnZXRSb3cgPSB1bmRlZmluZWQ7XG4gIHRhcmdldENvbCA9IHVuZGVmaW5lZDtcbiAgcmFuZG9tQXR0YWNrIChlbmVteSk7XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyMSwgY29tcHV0ZXIsIGJvYXJkU2l6ZSB9IGZyb20gJy4uL2luZGV4LmpzJ1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG5cbi8vRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eSBmb3Igc3VibWl0IG9uIHdlbGNvbWUgZm9ybVxuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWVGb3JtRE9NICgpe1xuICAgIGNvbnN0IHdlbGNvbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVGb3JtJyk7XG4gICAgY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRzY3JlZW4nKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlucGFnZScpOyAgICBcbiAgICAvL3ByaW50IHBsYXllciBuYW1lXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJykudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgLy9yZW1vdmUgc3RhcnQgc2NyZWVuIGFuZCB3ZWxjb21lIGZvcm1cbiAgICB3ZWxjb21lRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9yZXZlYWwgdGhlIG1haW4gcGFnZVxuICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFpblBhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbn07XG5cbmV4cG9ydCBsZXQgYXJyYXlTaGlwcyA9IFtdO1xuXG4vL3V0aWxpdHkgZm4gLSBjb252ZXJ0IHJvdyBjb29yZGluYXRlIGZyb20gIyB0byBsZXR0ZXJcbmZ1bmN0aW9uIHJvd0NvbnYgKG51bWJlcil7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbLi4uQXJyYXkoMjYpXS5tYXAoKF8saSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICs5NykpO1xuICAgICAgICBsZXQgbGV0dGVyID0gYWxwaGFiZXRbbnVtYmVyXTtcbiAgICAgICAgcmV0dXJuIGxldHRlcjtcbn07XG5cbi8vcHJpbnQgcGxheWVyLyBjb21wdXRlciBnYW1lYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkIChib2FyZCwgY29udGFpbmVyLCBwbGF5ZXIpe1xuICAgIGxldCBnYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcik7XG4gICAgbGV0IHNoaXBSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFJvdycpO1xuICAgIGxldCBzaGlwQ29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKTtcblxuICAgIC8vZHluYW1pY2FsbHkgc2V0IHRoZSBtYXggcm93L2NvbCBzaXplIG9uIHBsYWNlbWVudCBmb3JtXG4gICAgc2hpcFJvdy5tYXggPSBib2FyZFNpemUtMTtcbiAgICBzaGlwQ29sLm1heCA9IGJvYXJkU2l6ZS0xO1xuXG4gICAgLy9keW5hbWljYWxseSBzZXQgdGhlIGdyaWQgc2l6ZVxuICAgIGdiLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XG4gICAgZ2Iuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcblxuICAgIC8vcHJpbnQgZWFjaCBjZWxsIHdpdGggdmFsdWVzXG4gICAgZ2IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpe1xuICAgICAgICBmb3IobGV0IGNlbGwgb2Ygcm93KXtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ0MtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdDLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdCLUhJVCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnQi1ISVQnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnRC1ISVQnKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0QtSElUJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1MtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdTLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ1AtSElUJyl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQLUhJVCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09ICdYJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSAnQycgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnQicgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnRCcgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnUycgfHwgXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID09PSAnUCcpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9hdCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnJvdyA9IGNlbGwucjtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5jb2wgPSBjZWxsLmM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vaG92ZXIgdG8gcmV2ZWFsIHNwYWNlIGRhdGFzZXRcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQucm93KTtcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC5jb2wpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgcm93Q29udmVydGVkID0gcm93Q29udihyb3cpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Jvd0NvbnZlcnRlZH0ke2NvbH1gO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkZXInO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vaG92ZXIgb3V0XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNlbGwudmFsdWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9jbGljayBib2FyZCB0byBhdHRhY2tcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAvL2lmIHBsYXllciBoYXNuJ3QgcGxhY2UgYWxsIHNoaXBzIGRvIG5vdCBsb2cgYXR0YWNrXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5zaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVsZW1lbnQuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICAgICAgLy9yZWNvcmQgYXR0YWNrXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgcGxheWVyIHdpbnMgZ2FtZVxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBnYi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcnJheVNoaXBzID0gcGxheWVyLnNoaXBzO1xufVxuXG4vL0NyZWF0ZXMgb3ZlcmxheSBvZiBzaGlwIG9udG8gYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwcmludEJvYXJkU2hpcHMgKHByZWZpeCwgdGFyZ2V0Qm9hcmQpeyBcbiAgICAvL2NhbGwgbWluL21heCBvdXRzaWRlIHRoZSBwb3NzaWJlIHJhbmdlXG4gICAgbGV0IG1pbkdyaWRSb3cgPSAxMDAwO1xuICAgIGxldCBtYXhHcmlkUm93ID0gLTEwMDA7XG5cbiAgICBsZXQgbWluR3JpZENvbCA9IDEwMDA7XG4gICAgbGV0IG1heEdyaWRDb2wgPSAtMTAwMDtcbiAgICBcbiAgICAvL3JldHVybiB0aGUgbWF4L21pbiByb3cvY29sIGZvciBzaGlwIGxvY2F0aW9uXG4gICAgY29uc3QgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhcmdldEJvYXJkfS4ke3ByZWZpeH0sIC4ke3RhcmdldEJvYXJkfS4ke3ByZWZpeH0tSElUYCk7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudEdyaWRSb3cgPSB0YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgICAgIGlmIChjdXJyZW50R3JpZFJvdyA8IG1pbkdyaWRSb3cpIHtcbiAgICAgICAgICAgIG1pbkdyaWRSb3cgPSBwYXJzZUludChjdXJyZW50R3JpZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkUm93ID4gbWF4R3JpZFJvdykge1xuICAgICAgICAgICAgbWF4R3JpZFJvdyA9IHBhcnNlSW50KGN1cnJlbnRHcmlkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudEdyaWRDb2wgPSB0YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgICAgIGlmIChjdXJyZW50R3JpZENvbCA8IG1pbkdyaWRDb2wpIHtcbiAgICAgICAgICAgIG1pbkdyaWRDb2wgPSBwYXJzZUludChjdXJyZW50R3JpZENvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRHcmlkQ29sID4gbWF4R3JpZENvbCkge1xuICAgICAgICAgICAgbWF4R3JpZENvbCA9IHBhcnNlSW50KGN1cnJlbnRHcmlkQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4pXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0Qm9hcmQpO1xubGV0IHNoaXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwT3ZlcmxheS5pZCA9IChgb3ZlcmxheS0ke3ByZWZpeH1gKTtcblxuLy9pZiBubyB2YWx1ZXMgZG8gbm90IG92ZXJsYXkgLSB1c2VkIGZvciBwbGF5ZXIgcGxhY2VtZW50XG5pZiAobWluR3JpZFJvdyA9PT0gMTAwMCl7cmV0dXJufTtcbi8vQWRkIDEgdG8gYWxsIGZvciBjb252ZXJzaW9uIGZyb20gc3F1YXJlcyB0byBncmlkIGxpbmVzXG4vL0FkZCAyIHRvIGFueSBzaW5nbGUgbGVuZ3RoIG9yaWVudGF0aW9uXG4vL3ZlcnRpY2FsXG5pZiAobWluR3JpZENvbCA9PT0gbWF4R3JpZENvbCl7XG4gICAgbGV0IHJvd0VuZCA9IG1pbkdyaWRSb3cgKyBzaGlwTGVuZ3RoICsgMTtcbiAgICBzaGlwT3ZlcmxheS5jbGFzc0xpc3QuYWRkKGB2ZXJ0LW92ZXJsYXktJHtwcmVmaXh9YCk7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtblN0YXJ0ID0gbWluR3JpZENvbCArIDE7XG4gICAgc2hpcE92ZXJsYXkuc3R5bGUuZ3JpZENvbHVtbkVuZCA9IG1pbkdyaWRDb2wgKyAyO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dTdGFydCA9IG1pbkdyaWRSb3cgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSByb3dFbmQ7XG4vL2hvcml6b250YWxcbn0gZWxzZSB7XG4gICAgbGV0IGNvbEVuZCA9ICBtaW5HcmlkQ29sICsgc2hpcExlbmd0aCArIDE7XG4gICAgc2hpcE92ZXJsYXkuY2xhc3NMaXN0LmFkZChgaG9yei1vdmVybGF5LSR7cHJlZml4fWApO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dTdGFydCA9IG1pbkdyaWRSb3cgKyAxO1xuICAgIHNoaXBPdmVybGF5LnN0eWxlLmdyaWRSb3dFbmQgPSBtaW5HcmlkUm93ICsgMjtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uU3RhcnQgPSBtaW5HcmlkQ29sICsgMTtcbiAgICBzaGlwT3ZlcmxheS5zdHlsZS5ncmlkQ29sdW1uRW5kID0gY29sRW5kO1xufVxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBPdmVybGF5KTtcbn07XG4vL2Z1bmN0aW9uIHRvIG92ZXJsYXkgYWxsIHBsYXllciBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclNoaXBPdmVybGF5ICgpe1xuICAgIHByaW50Qm9hcmRTaGlwcygnUCcsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0InLCAnY29udGFpbmVyLXAxJyk7XG4gICAgcHJpbnRCb2FyZFNoaXBzKCdEJywgJ2NvbnRhaW5lci1wMScpO1xuICAgIHByaW50Qm9hcmRTaGlwcygnUycsICdjb250YWluZXItcDEnKTtcbiAgICBwcmludEJvYXJkU2hpcHMoJ0MnLCAnY29udGFpbmVyLXAxJyk7XG59O1xuXG4vL1NoaXAgYnV0dG9ucyBoYW5kZXIgdG8gZGlzcGxheSBmb3JtIHdpdGggY29ycmVjdCB0aXRsZVxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBCdG5IYW5kbGVyICgpe1xuICAgIGNvbnN0IHNoaXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAxJyk7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlbWVudCcpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGl0bGUnKTtcbiAgICBjb25zdCBjb2x1bWVuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBDb2wnKTtcbiAgICBjb25zdCByb3dTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcFJvdycpO1xuXG4gICAgc2hpcEJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgcGxhY2VtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgICBsZXQgZGF0YVNoaXBUeXBlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLXR5cGUnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSBkYXRhU2hpcFR5cGU7XG4gICAgICAgICAgICBjb2x1bWVuU2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICByb3dTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIC8vYWRkIG9wdGlvbnMgdGV4dCBmb3IgY29sdW1uIC0gYWRkIDEgdG8gY29udmVydCBmcm9tIDAgYmFzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdC52YWx1ZSA9IGk7XG4gICAgICAgICAgICAgICAgb3B0LnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgY29sdW1lblNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9hZGQgb3B0aW9ucyB0ZXh0IGZvciByb3cgLSBjb252ZXJ0IG51bWJlciB0byBsZXR0ZXJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRTaXplOyBqKyspe1xuICAgICAgICAgICAgICAgIGxldCBvcHRSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnZlcnRlZCA9IHJvd0NvbnYoaikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBvcHRSLnZhbHVlID0gajtcbiAgICAgICAgICAgICAgICBvcHRSLnRleHRDb250ZW50ID0gY29udmVydGVkO1xuICAgICAgICAgICAgICAgIHJvd1NlbGVjdC5hcHBlbmRDaGlsZChvcHRSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIHBsYWNlZFxuICAgICAgICAgICAgaWYgKGFycmF5U2hpcHMuc29tZShzaGlwID0+IHNoaXAudHlwZSA9PT0gZGF0YVNoaXBUeXBlKSl7XG4gICAgICAgICAgICBwbGFjZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn19KX0pfVxuXG5cbi8vaWYgYWxsIHNoaXBzIHBsYWNlZCByZW1vdmUgYnV0dG9uc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNoaXBCdG5zICgpIHtcbiAgICBpZiAoYXJyYXlTaGlwcy5sZW5ndGggPT09IDUpe1xuICAgICAgICBsZXQgc2hpcEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcEJ1dHRvbnMnKTtcbiAgICAgICAgc2hpcEJ0bnMucmVtb3ZlKCk7XG4gICAgfVxufVxuLy9kaXNwbGF5IGNvbXB1dGVyIGNvbnNvbGUvYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tcHV0ZXIgKCkge1xuICAgIGlmIChhcnJheVNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgIGxldCBjb21wdXRlckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tQ29uc29sZScpO1xuICAgICAgICBjb21wdXRlckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICB9XG59XG5cblxuLy9wcmludCBzdGF0cyB0byBlYWNoIHNoaXBzIHN0YXQgZGl2IChsaWZlLyBkYW1hZ2UpXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRTdGF0cyAocGxheWVyLCBzaGlwLCBzdWZmaXgsIHByZWZpeCkge1xuICAgIC8vc2hpcCBkYXRhXG4gICAgY29uc3QgZmxlZXQgPSBwbGF5ZXIuZ2Iuc2hpcHM7XG4gICAgY29uc3QgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQudHlwZSA9PT0gc2hpcCk7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpc1NoaXAubGVuZ3RoO1xuICAgIGNvbnN0IGRhbWFnZSA9IHRoaXNTaGlwLmRhbWFnZTtcbiAgICAvL2NvbnRhaW5lcnMgZm9yIGxpZmUtZGFtYWdlXG4gICAgY29uc3QgZGFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3RhdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyAnLXN0YXQtJyArIHN1ZmZpeCk7XG4gICAgLy9wcmV2ZW50IHJlcHJpbnRpbmcgcHJpb3IgZGF0YVxuICAgIHN0YXRzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy9wcmludCBkYW1hZ2UgYW5kIGxpZmVcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhbWFnZTsgaisrKXtcbiAgICAgICAgbGV0IGRhbWFnZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGFtYWdlZC5jbGFzc0xpc3QuYWRkKCdkYW1hZ2VkJyk7XG4gICAgICAgIHN0YXRzRGl2LmFwcGVuZENoaWxkKGRhbWFnZWQpO1xuICAgIH0gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobGVuZ3RoIC0gZGFtYWdlKTsgaSsrKXtcbiAgICAgICAgbGV0IGxpZmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlmZS5jbGFzc0xpc3QuYWRkKCdsaWZlJyk7XG4gICAgICAgIHN0YXRzRGl2LmFwcGVuZENoaWxkKGxpZmUpO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoID09PSBkYW1hZ2Upe1xuICAgICAgICBsZXQgdGhpc0lEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgJy0nICsgc3VmZml4KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpc0lEKTtcbiAgICAgICAgdGhpc0lELmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9XG59OyIsIi8vY29uc3Qgc2hpcCA9IHJlcXVpcmUgKCcuL3NoaXAuanMnKVxuaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4uL21vZHVsZXMvc2hpcC5qcydcbmltcG9ydCB7IGJvYXJkU2l6ZSwgQXVkaW9FdmVudEZuLCBhdWRpb0V2ZW50IH0gZnJvbSAnLi4vaW5kZXguanMnXG4vL2ltcG9ydCB7IHNoaXBzRE9NIH0gZnJvbSAnLi4vbW9kdWxlcy9kb20uanMnXG5cblxuLy90byBhY2Nlc3Mgc3F1YXJlIG9uIGJvYXJkIHVzIG1lIGJvYXJkLmJvYXJkW3JdW2NdXG5cbi8vTmV2ZXIgdXNlZCB1dGlsaXR5OiBjb252ZXJ0cyBjb2x1bW4gbGV0dGVyIHRvIG51bWJlciBmb3IgbG9va1VwXG5mdW5jdGlvbiBjb2xDb252ZXJ0IChsZXR0ZXIpe1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWy4uLkFycmF5KGJvYXJkU2l6ZSldLm1hcCgoXyxpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKzk3KSk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSAoZWwpID0+IGVsID09PSBsZXR0ZXI7XG4gICAgICAgIGNvbnN0IG51bSA9IGFscGhhYmV0LmZpbmRJbmRleChpdGVtKTtcbiAgICAgICAgcmV0dXJuIG51bVxufTtcblxuXG4vL05ldmVyIHVzZWQgdXRpbGl0eTogYm9hcmQgYXMgdmFyaWFibGVuYW1lLmJvYXJkLCBvbmx5IHdvcmtzIGZvciBmaXJzdCByb3dcbmZ1bmN0aW9uIGxvb2tVcCAoTGV0LCBOdW0sIGFycmF5KXtcbiAgICBjb25zdCBjID0gY29sQ29udmVydChMZXQpO1xuICAgIGNvbnN0IHIgPSBOdW07XG4gICAgY29uc3QgdGFyZ2V0ID0gYXJyYXkuYm9hcmRbY11bcl07XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGNsYXNzIGdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IgKGNvbCwgcm93KSB7XG4gICAgICAgIHRoaXMuY29sID0gY29sO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMucm93OyByKyspe1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb2w7IGMrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goeyB2YWx1ZSwgciwgYyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVCb2FyZC5wdXNoKHJvd3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmQ7XG4gICAgfVxuICAgIFxuICAgIC8vdXRpbGl0eSBmdW5jdGlvblxuICAgIGNoZWNrT3BlbkJvYXJkIChyb3csIGNvbCl7XG4gICAgICAgIGlmICgocm93IDwgMCApIHx8IChyb3cgPj0gYm9hcmRTaXplICkpIHsgcmV0dXJuICdpbnZhbGlkJyB9XG4gICAgICAgIGlmICgoY29sIDwgMCApIHx8IChjb2wgPj0gYm9hcmRTaXplICkpIHsgcmV0dXJuICdpbnZhbGlkJyB9XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ1gnIHx8IFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdDLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnQi1ISVQnIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS52YWx1ZSA9PT0gJ0QtSElUJyB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0udmFsdWUgPT09ICdTLUhJVCcgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLnZhbHVlID09PSAnUC1ISVQnXG4gICAgICAgICl7XG4gICAgICAgICAgICByZXR1cm4gJ2ludmFsaWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd2YWxpZCd9XG4gICAgfVxuXG4gICAgcGxhY2VOZXdTaGlwKHR5cGUsIHIsIGMsIGRpcikge1xuICAgICAgICBsZXQgcm93ID0gcjtcbiAgICAgICAgbGV0IGNvbCA9IGM7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAodHlwZSk7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gJ0Rvd24nKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoKHItMSkgKyBuZXdTaGlwLmxlbmd0aCA+IChib2FyZFNpemUtMSkpIHt0aHJvdyBuZXcgRXJyb3IoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHJvdyArIGkpIDwgKHJvdyArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmJvYXJkW3JvdysrXVtjXSkudmFsdWUgIT09IDApIHt0aHJvdyBuZXcgRXJyb3IoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwLicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBlcnJvcnMgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IChyICsgaSkgPCAociArIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyKytdW2NdLnZhbHVlID0gbmV3U2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyID09PSAnVXAnKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAociAtIChuZXdTaGlwLmxlbmd0aC0xKSA8IDApIHt0aHJvdyBuZXcgRXJyb3IoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHJvdyAtIGkpID4gKHJvdyAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93LS1dW2NdLnZhbHVlICE9PSAwKSB7dGhyb3cgbmV3IEVycm9yKCdOZWFyIGNvbGxpc29uISBNb3ZlIHRoYXQgc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKHIgLSBpKSA+IChyIC0gbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ItLV1bY10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09ICdSaWdodCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgoYy0xKSArIG5ld1NoaXAubGVuZ3RoID4gKGJvYXJkU2l6ZS0xKSkge3Rocm93IG5ldyBFcnJvciAoXCJZb3UndmUgZ29uZSBvZmYgY291cnNlISBSZWRlcGxveSBzaGlwLlwiKX1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgdG9rZW4gaXMgcGxhY2VkIG9mZiB0aGUgYm9hcmQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHNwYWNlcyBhcmUgYXZhaWxhYmxlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoY29sICsgaSkgPCAoY29sICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjb2wrK10udmFsdWUgIT09IDApe3Rocm93IG5ldyBFcnJvciAoJ05lYXIgY29sbGlzb24hIE1vdmUgdGhhdCBzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIG5vIGVycm9ycyBwbGFjZSBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGMgKyBpKSA8IChjICsgbmV3U2hpcC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JdW2MrK10udmFsdWUgPSBuZXdTaGlwLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnTGVmdCcpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjIC0gKG5ld1NoaXAubGVuZ3RoICsgMSkgPCAwKSB7dGhyb3cgbmV3IEVycm9yIChcIllvdSd2ZSBnb25lIG9mZiBjb3Vyc2UhIFJlZGVwbG95IHNoaXAuXCIpfVxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHRva2VuIGlzIHBsYWNlZCBvZmYgdGhlIGJvYXJkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVjayBpZiBzcGFjZXMgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGNvbCAtIGkpID4gKGNvbCAtIG5ld1NoaXAubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NvbC0tXS52YWx1ZSAhPT0gMCl7dGhyb3cgbmV3IEVycm9yICgnTmVhciBjb2xsaXNvbiEgTW92ZSB0aGF0IHNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwYWNlcyBhcmUgb2NjdXBpZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgbm8gZXJyb3JzIHBsYWNlIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoYyAtIGkpID4gKGMgLSBuZXdTaGlwLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcl1bYy0tXS52YWx1ZSA9IG5ld1NoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrIChyLCBjKSB7XG4gICAgICAgIGxldCBmbGVldCA9IHRoaXMuc2hpcHM7XG4gICAgICAgIGxldCB0aGlzU2hpcDtcbiAgICAgICAgLy9NaXNzaWxlIGZpcmVkIGF1ZGlvIGV2ZW50IGNyZWF0ZSBhbmQgZGlzcGF0Y2hlZFxuICAgICAgICBBdWRpb0V2ZW50Rm4gKCdNaXNzaWxlJyk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoYXVkaW9FdmVudCk7XG4gICAgICAgIC8vaWYgYWxyZWFkeSBtaXNzIHJlY29yZCBhbm90aGVyIG1pc3NcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdYJyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9ICdYJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHdhdGVyIHJlY29yZCBtaXNzXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID0gJ1gnO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGNhcnJpZXIgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ0MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnQycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IGJhdHRlc2hpcCByZWNvcmQgaGl0XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3JdW2NdLnZhbHVlID09PSAnQicpe1xuICAgICAgICAgICAgdGhpc1NoaXAgPSBmbGVldC5maW5kKHRhcmdldCA9PiB0YXJnZXQuaWQgPT09ICdCJyk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZmxlZXQuaW5kZXhPZih0aGlzU2hpcCkpO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0uaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBoaXQgZGVzdG9yeWVyIHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdEJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ0QnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGhpdCBzdWJtYXJpbmUgcmVjb3JkIGhpdFxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9PT0gJ1MnKXtcbiAgICAgICAgICAgIHRoaXNTaGlwID0gZmxlZXQuZmluZCh0YXJnZXQgPT4gdGFyZ2V0LmlkID09PSAnUycpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGZsZWV0LmluZGV4T2YodGhpc1NoaXApKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaGl0IHBhdHJvbCBib2F0IHJlY29yZCBoaXRcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcl1bY10udmFsdWUgPT09ICdQJyl7XG4gICAgICAgICAgICB0aGlzU2hpcCA9IGZsZWV0LmZpbmQodGFyZ2V0ID0+IHRhcmdldC5pZCA9PT0gJ1AnKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChmbGVldC5pbmRleE9mKHRoaXNTaGlwKSk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JlY29yZCBoaXQgdG8gYm9hcmRcbiAgICAgICAgbGV0IHNoaXBIaXQgPSB0aGlzLmJvYXJkW3JdW2NdLnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXS52YWx1ZSA9IGAke3NoaXBIaXR9LUhJVGA7XG4gICAgfVxuICAgIGNoZWNrU3VuayAoKXtcbiAgICAgICAgbGV0IHN0YXR1cyA9IFtdO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzBdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1sxXS5pc1N1bmsoKSk7XG4gICAgICAgIHN0YXR1cy5wdXNoKHRoaXMuc2hpcHNbMl0uaXNTdW5rKCkpO1xuICAgICAgICBzdGF0dXMucHVzaCh0aGlzLnNoaXBzWzNdLmlzU3VuaygpKTtcbiAgICAgICAgc3RhdHVzLnB1c2godGhpcy5zaGlwc1s0XS5pc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiBzdGF0dXMuZXZlcnkoaXRlbSA9PiBpdGVtID09PSB0cnVlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi4vbW9kdWxlcy9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBib2FyZFNpemUgfSBmcm9tICcuLi9pbmRleC5qcydcblxuXG5leHBvcnQgY2xhc3MgaHVtYW5QbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMud2lucyA9IDA7XG4gICAgICAgIHRoaXMubG9zc2VzID0gMDtcbiAgICAgICAgdGhpcy5zdHJlYWsgPSAwO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsYm9hcmRTaXplKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBjb21wUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGV2ZWwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmdiID0gbmV3IGdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG4gICAgfVxufVxuLypcbm1vZHVsZS5leHBvcnRzID0gaHVtYW5QbGF5ZXJcbm1vZHVsZS5leHBvcnRzID0gY29tcFBsYXllclxuKi8iLCJleHBvcnQgY2xhc3Mgc2hpcCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdDYXJyaWVyJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdCYXR0bGVzaGlwJyl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICB0aGlzLmlkID0gJ0InO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdEZXN0cm95ZXInKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnRCc7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1N1Ym1hcmluZScpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICdTJztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnUGF0cm9sIEJvYXQnKXtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMjtcbiAgICAgICAgICAgIHRoaXMuaWQgPSAnUCc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgIH1cbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgICB9XG59O1xuXG4vL2V4cG9ydCBkZWZhdWx0IHNoaXBcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwXG5cbiJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJzaGlwIiwiaHVtYW5QbGF5ZXIiLCJjb21wUGxheWVyIiwicHJpbnRCb2FyZCIsIndlbGNvbWVGb3JtRE9NIiwiZGlzcGxheUNvbXB1dGVyIiwic2hpcEJ0bkhhbmRsZXIiLCJyZW1vdmVTaGlwQnRucyIsInByaW50U3RhdHMiLCJwbGF5ZXJTaGlwT3ZlcmxheSIsInBsYWNlQ29tcHV0ZXIiLCJyYW5kb21Sb3ciLCJyYW5kb21Db2wiLCJyYW5kb21BdHRhY2siLCJ0YXJnZXRlZEF0dGFjayIsImxhc3RIaXQiLCJzdG9yZWRIaXQiLCJ0YXJnZXRDb2wiLCJ0YXJnZXRSb3ciLCJzYXZlZFJvdyIsInNhdmVkQ29sIiwicGxheWVyMSIsImNvbXB1dGVyIiwiYXVkaW9FdmVudCIsIkF1ZGlvRXZlbnRGbiIsIkV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidHlwZSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJzdGF0dXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYm9hcmRTaXplIiwibGV2ZWwiLCJnZXRFbGVtZW50QnlJZCIsIndlbGNvbWVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZ2IiLCJib2FyZCIsInJhbmRvbVNldFBsYXllciIsInJhbmRvbUJ0biIsImNsYXNzTGlzdCIsImFkZCIsImZvcm0iLCJzdGFydENvdW50Iiwic2hpcHMiLCJsZW5ndGgiLCJyb3ciLCJjb2wiLCJzaGlwVHlwZSIsImlubmVyVGV4dCIsImRpcmVjdGlvbiIsInNoaXBJRCIsInNsaWNlIiwicGxhY2VOZXdTaGlwIiwibmV3Q291bnQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiLCJ0YXJnZXRCdG4iLCJwbGF5ZXJDb250YWluZXIiLCJjb21wQ29udGFpbmVyIiwiUmFuZG9tTW92ZSIsInNldFRpbWVvdXQiLCJyZWNlaXZlQXR0YWNrIiwiYXJyYXlTaGlwcyIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbURpciIsInBsYWNlU2hpcCIsImNwdSIsInRyeUFnYWluIiwidXNlciIsImNoZWNrT3BlbkJvYXJkIiwidW5kZWZpbmVkIiwiZW5lbXkiLCJsYXN0Q291bnQiLCJwb3N0U3Vua0F0dCIsImNhclN1bmsiLCJpc1N1bmsiLCJiYXRTdW5rIiwiZGlzU3VuayIsInN1YlN1bmsiLCJwYXRTdW5rIiwiY291bnRUcnVlIiwiZmlsdGVyIiwiYWRqYWNlbnQiLCJyb3dQbHVzIiwicm93TWludXMiLCJjb2xQbHVzIiwiY29sTWludXMiLCJyb3dWYWwiLCJhYnMiLCJjb2xWYWwiLCJzdGFydFNjcmVlbiIsIm1haW5QYWdlIiwibmFtZSIsInRleHRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicm93Q29udiIsIm51bWJlciIsImFscGhhYmV0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImxldHRlciIsImNvbnRhaW5lciIsInBsYXllciIsInNoaXBSb3ciLCJzaGlwQ29sIiwibWF4IiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJpbm5lckhUTUwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9sb29wIiwiY2VsbCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsInIiLCJjIiwiTnVtYmVyIiwicm93Q29udmVydGVkIiwidG9VcHBlckNhc2UiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjaGVja1N1bmsiLCJhbGVydCIsImFwcGVuZENoaWxkIiwiZXJyIiwiZSIsImYiLCJwcmludEJvYXJkU2hpcHMiLCJwcmVmaXgiLCJ0YXJnZXRCb2FyZCIsIm1pbkdyaWRSb3ciLCJtYXhHcmlkUm93IiwibWluR3JpZENvbCIsIm1heEdyaWRDb2wiLCJ0YXJnZXRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBMZW5ndGgiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY3VycmVudEdyaWRSb3ciLCJwYXJzZUludCIsImN1cnJlbnRHcmlkQ29sIiwic2hpcE92ZXJsYXkiLCJpZCIsInJvd0VuZCIsImdyaWRDb2x1bW5TdGFydCIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93U3RhcnQiLCJncmlkUm93RW5kIiwiY29sRW5kIiwic2hpcEJ1dHRvbnMiLCJwbGFjZW1lbnQiLCJmb3JtVGl0bGUiLCJjb2x1bWVuU2VsZWN0Iiwicm93U2VsZWN0IiwiYnRuIiwiZGF0YVNoaXBUeXBlIiwiZ2V0QXR0cmlidXRlIiwib3B0IiwiaiIsIm9wdFIiLCJjb252ZXJ0ZWQiLCJzb21lIiwic2hpcEJ0bnMiLCJjb21wdXRlckRpc3BsYXkiLCJzdWZmaXgiLCJmbGVldCIsInRoaXNTaGlwIiwiZmluZCIsImRhbWFnZSIsImRhbURpdiIsInN0YXRzRGl2IiwiZGFtYWdlZCIsImxpZmUiLCJ0aGlzSUQiLCJjb2xDb252ZXJ0IiwiaXRlbSIsImVsIiwibnVtIiwiZmluZEluZGV4IiwibG9va1VwIiwiTGV0IiwiTnVtIiwiYXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVCb2FyZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdhbWVCb2FyZCIsInJvd3MiLCJwdXNoIiwiZGlyIiwibmV3U2hpcCIsIkVycm9yIiwiZXJyb3IiLCJkaXNwYXRjaEV2ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiaGl0Iiwic2hpcEhpdCIsImV2ZXJ5Iiwid2lucyIsImxvc3NlcyIsInN0cmVhayIsInN1bmsiXSwic291cmNlUm9vdCI6IiJ9