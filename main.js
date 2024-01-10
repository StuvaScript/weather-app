/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/* ---------------------------------------- */
/* My additions at the very bottom */
/* ---------------------------------------- */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}

/* ---------------------------------------- */
/* Stu's Addition */

/* makes sizing simpler */

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* no margins or padding */

* {
  margin: 0;
  padding: 0;
}
/* ---------------------------------------- */
`, "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E,6CAA6C;AAC7C,oCAAoC;AACpC,6CAA6C;;AAE7C;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA,6CAA6C;AAC7C,mBAAmB;;AAEnB,yBAAyB;;AAEzB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;;AAE1B;EACE,SAAS;EACT,UAAU;AACZ;AACA,6CAA6C","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/* ---------------------------------------- */\n/* My additions at the very bottom */\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n\n/* ---------------------------------------- */\n/* Stu's Addition */\n\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* no margins or padding */\n\n* {\n  margin: 0;\n  padding: 0;\n}\n/* ---------------------------------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: sans-serif;
}

main {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
}

#search-input {
  padding: 5px 10px;
  border-radius: 50px;
  width: 350px;
  text-align: center;
}

#search-input::placeholder {
  text-align: center;
  opacity: 1;
}

#search-input:focus::placeholder {
  opacity: 0;
  transition: opacity 500ms;
}

#submit-button {
  background: rgba(0, 0, 0, 0);
  border: none;
  transform: scale(0.35) scaleX(-1);
  position: relative;
  left: -60px;
  bottom: -25px;
  cursor: pointer;
}

#city-wrapper {
  background: rebeccapurple;
  color: white;
}

#current-weather-wrapper {
  background: #1ce;
}

#forecast-weather-wrapper {
  background: #bada55;
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#forecast-weather-wrapper > * {
  border: 2px solid #000;
}

.temp_c::after,
.temp_f::after {
  content: '°';
}

.mintemp_c::after,
.mintemp_f::after {
  content: '° low';
}

.maxtemp_c::after,
.maxtemp_f::after {
  content: '° high';
}

.daily_chance_of_rain::after {
  content: '% chance of rain';
}

.daily_chance_of_snow::after {
  content: '% chance of snow';
}

.totalprecip_in::after,
.totalsnow_in::after {
  content: ' in';
}

.totalprecip_mm::after {
  content: ' mm';
}

.totalsnow_cm::after {
  content: ' cm';
}

.multi-city-wrapper {
  background: rgb(255, 206, 150);
  width: fit-content;
}

.city-choice:hover {
  background: orange;
  cursor: pointer;
}

/*? **\`\` This is controlled by javascript */
.measure-hidden {
  display: none;
}

.weather-hidden {
  display: none;
}

.irrelevant-hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;;EAEnB,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,2CAA2C;AAC3C;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  font-family: sans-serif;\n}\n\nmain {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#search-input {\n  padding: 5px 10px;\n  border-radius: 50px;\n  width: 350px;\n  text-align: center;\n}\n\n#search-input::placeholder {\n  text-align: center;\n  opacity: 1;\n}\n\n#search-input:focus::placeholder {\n  opacity: 0;\n  transition: opacity 500ms;\n}\n\n#submit-button {\n  background: rgba(0, 0, 0, 0);\n  border: none;\n  transform: scale(0.35) scaleX(-1);\n  position: relative;\n  left: -60px;\n  bottom: -25px;\n  cursor: pointer;\n}\n\n#city-wrapper {\n  background: rebeccapurple;\n  color: white;\n}\n\n#current-weather-wrapper {\n  background: #1ce;\n}\n\n#forecast-weather-wrapper {\n  background: #bada55;\n  grid-column: 1 / -1;\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#forecast-weather-wrapper > * {\n  border: 2px solid #000;\n}\n\n.temp_c::after,\n.temp_f::after {\n  content: '°';\n}\n\n.mintemp_c::after,\n.mintemp_f::after {\n  content: '° low';\n}\n\n.maxtemp_c::after,\n.maxtemp_f::after {\n  content: '° high';\n}\n\n.daily_chance_of_rain::after {\n  content: '% chance of rain';\n}\n\n.daily_chance_of_snow::after {\n  content: '% chance of snow';\n}\n\n.totalprecip_in::after,\n.totalsnow_in::after {\n  content: ' in';\n}\n\n.totalprecip_mm::after {\n  content: ' mm';\n}\n\n.totalsnow_cm::after {\n  content: ' cm';\n}\n\n.multi-city-wrapper {\n  background: rgb(255, 206, 150);\n  width: fit-content;\n}\n\n.city-choice:hover {\n  background: orange;\n  cursor: pointer;\n}\n\n/*? **`` This is controlled by javascript */\n.measure-hidden {\n  display: none;\n}\n\n.weather-hidden {\n  display: none;\n}\n\n.irrelevant-hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/dom-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMultiCityDisplay: () => (/* binding */ createMultiCityDisplay),
/* harmony export */   displayC: () => (/* binding */ displayC),
/* harmony export */   displayData: () => (/* binding */ displayData),
/* harmony export */   displayF: () => (/* binding */ displayF),
/* harmony export */   removeCityDisplay: () => (/* binding */ removeCityDisplay)
/* harmony export */ });
/* harmony import */ var _icon_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-handler */ "./src/modules/icon-handler.js");




//? **`` This gets all our necessary data and displays it
function displayData(data) {
  const main = document.querySelector('main');

  //? **`` This removes all the child elements inside the 'main' element
  main.replaceChildren();

  //? **`` Display city
  const cityDiv = document.createElement('div');
  cityDiv.setAttribute('id', 'city-wrapper');
  manipulateData(cityDiv, data.location);

  //? **`` Displays the current weather
  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.setAttribute('id', 'current-weather-wrapper');
  manipulateData(currentWeatherDiv, data.current);

  //? **`` This loops thru and displays the forecast data
  const forecastWeatherDiv = document.createElement('div');
  forecastWeatherDiv.setAttribute('id', 'forecast-weather-wrapper');

  data.forecastday.forEach((element) => {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day');
    manipulateData(forecastDayDiv, element);
    forecastWeatherDiv.append(forecastDayDiv);
  });

  main.append(cityDiv, currentWeatherDiv, forecastWeatherDiv);

  measurementSystemCheck(data);
  checkForRainOrSnow(data);
  regionCorrection();
  hideIrrelevantData();
}

//? **`` Creates divs with the inputted data, adds class names, adds the C or F class, checks if it's day or night then sets the weather icon, rounds off longer numbers
function manipulateData(parentElement, weatherInfo) {
  let isDay;
  for (const [key, value] of Object.entries(weatherInfo)) {
    const div = document.createElement('div');
    measurementClassAdder(key, div);
    div.classList.add(`${key}`);
    div.innerText = `${value}`;
    if (key === 'is_day' && value === 0) {
      isDay = false;
    }
    setIcon(div, key, value, isDay);
    roundOffNumbers(key, value, div);

    parentElement.append(div);
  }
}

//? **`` Displays either the C or F data accordingly depending on the radio buttons
function measurementSystemCheck(data) {
  const fToggle = document.querySelector('#F-toggle');
  const cToggle = document.querySelector('#C-toggle');

  //? **`` This toggles F or C on the initial IP fetch
  if (!fToggle.checked && !cToggle.checked) {
    if (
      data.location.country === 'United States of America' ||
      data.location.country === 'Liberia'
    ) {
      fToggle.checked = true;
      displayF();
    } else {
      cToggle.checked = true;
      displayC();
    }
  }

  //? **`` Checks for the checked radio button when searching for a new location and displays either C or F data
  if (fToggle.checked) {
    displayF();
  } else {
    displayC();
  }
}

//? **`` This adds a class of either 'celsius' or 'fahrenheit' to the correct measurement data
function measurementClassAdder(key, div) {
  const celsiusArray = [
    'temp_c',
    'mintemp_c',
    'maxtemp_c',
    'totalprecip_mm',
    'totalsnow_cm',
  ];
  const fahrenheitArray = [
    'temp_f',
    'mintemp_f',
    'maxtemp_f',
    'totalprecip_in',
    'totalsnow_in',
  ];

  celsiusArray.forEach((item) => {
    if (key === item) {
      return div.classList.add('celsius');
    }
  });

  fahrenheitArray.forEach((item) => {
    if (key === item) {
      return div.classList.add('fahrenheit');
    }
  });
}

//? **`` Hides all the data with the class of 'celsius' and shows all the data with the class 'fahrenheit'
function displayF() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.remove('measure-hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.add('measure-hidden');
  });
}

//? **`` Hides all the data with the class of 'fahrenheit' and shows all the data with the class 'celsius'
function displayC() {
  [...document.querySelectorAll('.fahrenheit')].forEach((item) => {
    item.classList.add('measure-hidden');
  });
  [...document.querySelectorAll('.celsius')].forEach((item) => {
    item.classList.remove('measure-hidden');
  });
}

//? **`` Detects if the key is an icon, takes the icon value, gets the icon from the 'icon-handler.js' file, then displays it
function setIcon(div, key, value, isDay) {
  if (key === 'icon') {
    const img = document.createElement('img');
    if (isDay === false) {
      img.setAttribute('src', _icon_handler__WEBPACK_IMPORTED_MODULE_0__.night[`${value}`]);
      isDay = '';
    } else {
      img.setAttribute('src', _icon_handler__WEBPACK_IMPORTED_MODULE_0__.day[`${value}`]);
    }
    img.setAttribute('alt', 'Icon representing the weather');
    div.innerText = '';
    div.append(img);
  }
}

//? **`` Checks if the forecast day will rain or snow and hides data if no rain or snow is present
function checkForRainOrSnow(data) {
  data.forecastday.forEach((day, index) => {
    //? **`` This counter simulates the day being checked
    const dayCounter = index + 1;
    //? **`` Checks for rain
    if (day.daily_will_it_rain === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_rain, .forecast-day:nth-child(${dayCounter}) > .totalprecip_in, .forecast-day:nth-child(${dayCounter}) > .totalprecip_mm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }

    //? **`` Checks for snow
    if (day.daily_will_it_snow === 0) {
      document
        .querySelectorAll(
          `.forecast-day:nth-child(${dayCounter}) > .daily_chance_of_snow, .forecast-day:nth-child(${dayCounter}) > .totalsnow_in, .forecast-day:nth-child(${dayCounter}) > .totalsnow_cm`,
        )
        .forEach((e) => {
          e.classList.add('weather-hidden');
        });
    }
  });
}

//? **`` Adds a 'hidden' class to data that doesn't need to be displayed
function hideIrrelevantData() {
  document
    .querySelectorAll('.is_day, .daily_will_it_rain, .daily_will_it_snow ')
    .forEach((e) => {
      e.classList.add('irrelevant-hidden');
    });
}

//? **`` If the fetched region data is empty or is the same name as the city, make the region data hidden
function regionCorrection() {
  const city = document.querySelector('.city_name');
  const region = document.querySelector('.region');
  if (city.innerText == region.innerText || region.innerText === '') {
    region.classList.add('irrelevant-hidden');
  }
}

//? **`` Makes sure certain numbers are rounded
function roundOffNumbers(key, value, div) {
  //? **`` Rounds to the tenth position
  if (
    key === 'totalsnow_in' ||
    key === 'totalsnow_cm' ||
    key === 'totalprecip_mm'
  ) {
    div.innerText = value.toFixed(1);
  }

  //? **`` Rounds to the whole number
  if (key === 'temp_f' || key === 'mintemp_f' || key === 'maxtemp_f') {
    div.innerText = value.toFixed();
  }
}

//? **`` Creates a menu to select a city when multiple cities are an option
function createMultiCityDisplay(array) {
  const body = document.querySelector('body');
  const multiCityWrapper = document.createElement('div');
  multiCityWrapper.classList.add('multi-city-wrapper');
  array.forEach((location, index) => {
    const div = document.createElement('div');
    //? **`` Won't display the region if the city and region share the same name or if the region data is empty
    if (location.name == location.region || location.region === '') {
      div.innerText = `${location.name}, ${location.country}`;
    } else {
      div.innerText = `${location.name}, ${location.region}, ${location.country}`;
    }
    div.classList.add(`city-choice`);
    multiCityWrapper.append(div);
  });
  //? **`` Final option to search again
  const div = document.createElement('div');
  div.innerText = 'City not here? Try searching postal code.';
  div.classList.add(`city-choice`);
  multiCityWrapper.append(div);

  body.prepend(multiCityWrapper);
}

//? **`` Removes the city display window
function removeCityDisplay() {
  document.querySelector('.multi-city-wrapper').remove();
}


/***/ }),

/***/ "./src/modules/event-handlers.js":
/*!***************************************!*\
  !*** ./src/modules/event-handlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchInputLogic: () => (/* binding */ searchInputLogic),
/* harmony export */   toggleMeasurementData: () => (/* binding */ toggleMeasurementData)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");





//? **`` This activates the autocomplete, the user selects a city if there are multiples, then the coordinates are sent to the weather fetcher, then displayed.
function searchInputLogic() {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let inputField = document.querySelector('#search-input');
    //? **`` This returns if the input is submitted empty
    if (inputField.value === '') {
      //todo **`` Need to pop up a warning or something that it's empty
      console.warn('Empty search field');
      return;
    }

    try {
      const response = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.fetchAutocomplete)(inputField.value);
      const multiCheck = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.multipleCityChecker)(response);
      //? **`` Checks to see if the user hit the last option to 'search again' in the city picker
      if (multiCheck === 'Search cancelled') {
        return;
      } else {
        const weatherData = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(multiCheck);
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayData)(weatherData);
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      //todo **`` Need to pop up a warning or something that it can't find the location
      console.warn("Can't find location");
    }
  });
}

//? **`` When clicking the C or F radio buttons, it displays the correct data accordingly
function toggleMeasurementData() {
  const toggleWrapper = document.querySelector('#toggle-wrapper');
  const fToggle = document.querySelector('#F-toggle');

  toggleWrapper.addEventListener('click', () => {
    fToggle.checked ? (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayF)() : (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayC)();
  });
}


/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayInitialWeather: () => (/* binding */ displayInitialWeather),
/* harmony export */   fetchAutocomplete: () => (/* binding */ fetchAutocomplete),
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),
/* harmony export */   multipleCityChecker: () => (/* binding */ multipleCityChecker)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/modules/dom-manipulation.js");




//? **`` Gets the user's IP address, sends the location to the weather fetcher which fetches the weather data, then logs it to the console
async function displayInitialWeather() {
  try {
    const ipData = await fetchIPAddress();
    console.log(ipData);
    const weatherData = await fetchWeather(ipData);
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayData)(weatherData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches our weather data, converts it to a JS object, then returns the data
async function fetchWeather(receivedData) {
  const inputData = `${receivedData.lat},${receivedData.lon}`;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a6926baa03824f759bd20713231912&q=${inputData}&days=3`,
      { mode: 'cors' },
    );
    const data = await response.json();
    console.group('%cOriginal Data', 'background:rebeccapurple');
    console.log(data);
    console.groupEnd();

    const dataObject = createWeatherDataObject(data);

    console.group('%cFiltered Weather', 'background:gold; color:black');
    console.log(dataObject);
    console.groupEnd();

    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches the user's location to be used in the initial displayed weather and converts it to a JS object
async function fetchIPAddress() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/ip.json?key=a6926baa03824f759bd20713231912&q=auto:ip',
      { mode: 'cors' },
    );
    const data = await response.json();
    const dataObject = createIPDataObject(data);

    console.group('%cIP Address', 'background:green');
    console.log(`We detect that you're in ${data.city}`);
    console.log(dataObject);
    console.groupEnd();

    return dataObject;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` This fetches multiple cities that match the inputted city.
async function fetchAutocomplete(receivedData) {
  //? **`` This clears out the search bar
  document.querySelector('#search-input').value = '';
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=a6926baa03824f759bd20713231912&q=${receivedData}`,
      { mode: 'cors' },
    );
    const data = await response.json();
    const dataArray = createAutocompleteDataArray(data);

    console.group('%cAutocomplete', 'background:#1ce; color:black');
    console.log(dataArray);
    console.groupEnd();

    return dataArray;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Takes the data from the fetchIPAddress API and returns only what we need
function createIPDataObject(data) {
  const lat = data.lat;
  const lon = data.lon;

  return { lat, lon };
}

//? **`` Takes the data from the fetchWeather API and returns only what we need
function createWeatherDataObject(data) {
  //? **`` Creating an object for the current day with only the needed data
  const current = {};
  current.temp_c = data.current.temp_c;
  current.temp_f = data.current.temp_f;
  current.condition = data.current.condition.text;
  current.is_day = data.current.is_day;
  current.icon = data.current.condition.icon.slice(-7);

  //? **`` Creating an array with objects for the forecast with only the needed data
  const forecastday = [];
  data.forecast.forecastday.forEach((element, index) => {
    forecastday[index] = {};
    forecastday[index].date = element.date;
    forecastday[index].mintemp_c = element.day.mintemp_c;
    forecastday[index].maxtemp_c = element.day.maxtemp_c;
    forecastday[index].mintemp_f = element.day.mintemp_f;
    forecastday[index].maxtemp_f = element.day.maxtemp_f;
    forecastday[index].condition = element.day.condition.text;
    forecastday[index].icon = element.day.condition.icon.slice(-7);
    forecastday[index].daily_will_it_rain = element.day.daily_will_it_rain;
    forecastday[index].daily_will_it_snow = element.day.daily_will_it_snow;
    forecastday[index].daily_chance_of_rain = element.day.daily_chance_of_rain;
    forecastday[index].totalprecip_in = element.day.totalprecip_in;
    forecastday[index].totalprecip_mm = element.day.totalprecip_mm;
    forecastday[index].daily_chance_of_snow = element.day.daily_chance_of_snow;
    forecastday[index].totalsnow_in = element.day.totalsnow_cm / 2.54;
    forecastday[index].totalsnow_cm = element.day.totalsnow_cm;
  });

  //? **`` Creating an object with the city name
  const location = {};
  location.city_name = data.location.name;
  location.region = data.location.region;
  location.country = data.location.country;

  return { current, forecastday, location };
}

//? **`` Takes the data from the fetchAutocomplete API and creates an array with objects for the autocomplete with only the needed data
function createAutocompleteDataArray(data) {
  const autocompleteArray = [];
  data.forEach((element, index) => {
    autocompleteArray[index] = {};
    autocompleteArray[index].name = element.name;
    autocompleteArray[index].region = element.region;
    autocompleteArray[index].country = element.country;
    autocompleteArray[index].lat = element.lat;
    autocompleteArray[index].lon = element.lon;
  });

  return autocompleteArray;
}

//? **`` This checks to see if there is more than one value in the Autocomplete fetch, displays the choices if so, then removes the city picker window. If theres only one city when searched, it returns that one.
async function multipleCityChecker(array) {
  if (array[1]) {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createMultiCityDisplay)(array);
    console.log(array);
    const city = await selectCity(array);
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeCityDisplay)();
    return city;
  }
  return array[0];
}

//? **`` Creates a new Promise to let the user select the city before any other functions can continue
function selectCity(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.querySelectorAll('.city-choice').forEach((choice) => {
        choice.addEventListener('click', function () {
          const cityIndex = [...this.parentNode.childNodes].indexOf(this);
          //? **`` This checks to see if the user selected the last option which is to search again.
          if (cityIndex === [...this.parentNode.childNodes].length - 1) {
            resolve('Search cancelled');
          } else {
            resolve(array[cityIndex]);
          }
        });
      });
    }, 0);
  });
}


/***/ }),

/***/ "./src/modules/icon-handler.js":
/*!*************************************!*\
  !*** ./src/modules/icon-handler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   day: () => (/* binding */ day),
/* harmony export */   night: () => (/* binding */ night)
/* harmony export */ });
/* harmony import */ var _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather/64x64/day/113.png */ "./src/images/weather/64x64/day/113.png");
/* harmony import */ var _images_weather_64x64_day_116_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/weather/64x64/day/116.png */ "./src/images/weather/64x64/day/116.png");
/* harmony import */ var _images_weather_64x64_day_119_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/weather/64x64/day/119.png */ "./src/images/weather/64x64/day/119.png");
/* harmony import */ var _images_weather_64x64_day_122_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather/64x64/day/122.png */ "./src/images/weather/64x64/day/122.png");
/* harmony import */ var _images_weather_64x64_day_143_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weather/64x64/day/143.png */ "./src/images/weather/64x64/day/143.png");
/* harmony import */ var _images_weather_64x64_day_176_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/weather/64x64/day/176.png */ "./src/images/weather/64x64/day/176.png");
/* harmony import */ var _images_weather_64x64_day_179_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/weather/64x64/day/179.png */ "./src/images/weather/64x64/day/179.png");
/* harmony import */ var _images_weather_64x64_day_182_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/weather/64x64/day/182.png */ "./src/images/weather/64x64/day/182.png");
/* harmony import */ var _images_weather_64x64_day_185_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/weather/64x64/day/185.png */ "./src/images/weather/64x64/day/185.png");
/* harmony import */ var _images_weather_64x64_day_200_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/weather/64x64/day/200.png */ "./src/images/weather/64x64/day/200.png");
/* harmony import */ var _images_weather_64x64_day_227_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather/64x64/day/227.png */ "./src/images/weather/64x64/day/227.png");
/* harmony import */ var _images_weather_64x64_day_230_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/weather/64x64/day/230.png */ "./src/images/weather/64x64/day/230.png");
/* harmony import */ var _images_weather_64x64_day_248_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/weather/64x64/day/248.png */ "./src/images/weather/64x64/day/248.png");
/* harmony import */ var _images_weather_64x64_day_260_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/weather/64x64/day/260.png */ "./src/images/weather/64x64/day/260.png");
/* harmony import */ var _images_weather_64x64_day_263_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/weather/64x64/day/263.png */ "./src/images/weather/64x64/day/263.png");
/* harmony import */ var _images_weather_64x64_day_266_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/weather/64x64/day/266.png */ "./src/images/weather/64x64/day/266.png");
/* harmony import */ var _images_weather_64x64_day_281_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/weather/64x64/day/281.png */ "./src/images/weather/64x64/day/281.png");
/* harmony import */ var _images_weather_64x64_day_284_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/weather/64x64/day/284.png */ "./src/images/weather/64x64/day/284.png");
/* harmony import */ var _images_weather_64x64_day_293_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/weather/64x64/day/293.png */ "./src/images/weather/64x64/day/293.png");
/* harmony import */ var _images_weather_64x64_day_296_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/weather/64x64/day/296.png */ "./src/images/weather/64x64/day/296.png");
/* harmony import */ var _images_weather_64x64_day_299_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/weather/64x64/day/299.png */ "./src/images/weather/64x64/day/299.png");
/* harmony import */ var _images_weather_64x64_day_302_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/weather/64x64/day/302.png */ "./src/images/weather/64x64/day/302.png");
/* harmony import */ var _images_weather_64x64_day_305_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/weather/64x64/day/305.png */ "./src/images/weather/64x64/day/305.png");
/* harmony import */ var _images_weather_64x64_day_308_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/weather/64x64/day/308.png */ "./src/images/weather/64x64/day/308.png");
/* harmony import */ var _images_weather_64x64_day_311_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/weather/64x64/day/311.png */ "./src/images/weather/64x64/day/311.png");
/* harmony import */ var _images_weather_64x64_day_314_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/weather/64x64/day/314.png */ "./src/images/weather/64x64/day/314.png");
/* harmony import */ var _images_weather_64x64_day_317_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../images/weather/64x64/day/317.png */ "./src/images/weather/64x64/day/317.png");
/* harmony import */ var _images_weather_64x64_day_320_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../images/weather/64x64/day/320.png */ "./src/images/weather/64x64/day/320.png");
/* harmony import */ var _images_weather_64x64_day_323_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../images/weather/64x64/day/323.png */ "./src/images/weather/64x64/day/323.png");
/* harmony import */ var _images_weather_64x64_day_326_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../images/weather/64x64/day/326.png */ "./src/images/weather/64x64/day/326.png");
/* harmony import */ var _images_weather_64x64_day_329_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../images/weather/64x64/day/329.png */ "./src/images/weather/64x64/day/329.png");
/* harmony import */ var _images_weather_64x64_day_332_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../images/weather/64x64/day/332.png */ "./src/images/weather/64x64/day/332.png");
/* harmony import */ var _images_weather_64x64_day_335_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../images/weather/64x64/day/335.png */ "./src/images/weather/64x64/day/335.png");
/* harmony import */ var _images_weather_64x64_day_338_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../images/weather/64x64/day/338.png */ "./src/images/weather/64x64/day/338.png");
/* harmony import */ var _images_weather_64x64_day_350_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../images/weather/64x64/day/350.png */ "./src/images/weather/64x64/day/350.png");
/* harmony import */ var _images_weather_64x64_day_353_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../images/weather/64x64/day/353.png */ "./src/images/weather/64x64/day/353.png");
/* harmony import */ var _images_weather_64x64_day_356_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../images/weather/64x64/day/356.png */ "./src/images/weather/64x64/day/356.png");
/* harmony import */ var _images_weather_64x64_day_359_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../images/weather/64x64/day/359.png */ "./src/images/weather/64x64/day/359.png");
/* harmony import */ var _images_weather_64x64_day_362_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../images/weather/64x64/day/362.png */ "./src/images/weather/64x64/day/362.png");
/* harmony import */ var _images_weather_64x64_day_365_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../images/weather/64x64/day/365.png */ "./src/images/weather/64x64/day/365.png");
/* harmony import */ var _images_weather_64x64_day_368_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../images/weather/64x64/day/368.png */ "./src/images/weather/64x64/day/368.png");
/* harmony import */ var _images_weather_64x64_day_371_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../images/weather/64x64/day/371.png */ "./src/images/weather/64x64/day/371.png");
/* harmony import */ var _images_weather_64x64_day_374_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../images/weather/64x64/day/374.png */ "./src/images/weather/64x64/day/374.png");
/* harmony import */ var _images_weather_64x64_day_377_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../images/weather/64x64/day/377.png */ "./src/images/weather/64x64/day/377.png");
/* harmony import */ var _images_weather_64x64_day_386_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../images/weather/64x64/day/386.png */ "./src/images/weather/64x64/day/386.png");
/* harmony import */ var _images_weather_64x64_day_389_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../images/weather/64x64/day/389.png */ "./src/images/weather/64x64/day/389.png");
/* harmony import */ var _images_weather_64x64_day_392_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../images/weather/64x64/day/392.png */ "./src/images/weather/64x64/day/392.png");
/* harmony import */ var _images_weather_64x64_day_395_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../images/weather/64x64/day/395.png */ "./src/images/weather/64x64/day/395.png");
/* harmony import */ var _images_weather_64x64_night_113_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../images/weather/64x64/night/113.png */ "./src/images/weather/64x64/night/113.png");
/* harmony import */ var _images_weather_64x64_night_116_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../images/weather/64x64/night/116.png */ "./src/images/weather/64x64/night/116.png");
/* harmony import */ var _images_weather_64x64_night_119_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../images/weather/64x64/night/119.png */ "./src/images/weather/64x64/night/119.png");
/* harmony import */ var _images_weather_64x64_night_122_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../images/weather/64x64/night/122.png */ "./src/images/weather/64x64/night/122.png");
/* harmony import */ var _images_weather_64x64_night_143_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../images/weather/64x64/night/143.png */ "./src/images/weather/64x64/night/143.png");
/* harmony import */ var _images_weather_64x64_night_176_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../images/weather/64x64/night/176.png */ "./src/images/weather/64x64/night/176.png");
/* harmony import */ var _images_weather_64x64_night_179_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../images/weather/64x64/night/179.png */ "./src/images/weather/64x64/night/179.png");
/* harmony import */ var _images_weather_64x64_night_182_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../images/weather/64x64/night/182.png */ "./src/images/weather/64x64/night/182.png");
/* harmony import */ var _images_weather_64x64_night_185_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../images/weather/64x64/night/185.png */ "./src/images/weather/64x64/night/185.png");
/* harmony import */ var _images_weather_64x64_night_200_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../images/weather/64x64/night/200.png */ "./src/images/weather/64x64/night/200.png");
/* harmony import */ var _images_weather_64x64_night_227_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../images/weather/64x64/night/227.png */ "./src/images/weather/64x64/night/227.png");
/* harmony import */ var _images_weather_64x64_night_230_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../images/weather/64x64/night/230.png */ "./src/images/weather/64x64/night/230.png");
/* harmony import */ var _images_weather_64x64_night_248_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../images/weather/64x64/night/248.png */ "./src/images/weather/64x64/night/248.png");
/* harmony import */ var _images_weather_64x64_night_260_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../images/weather/64x64/night/260.png */ "./src/images/weather/64x64/night/260.png");
/* harmony import */ var _images_weather_64x64_night_263_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../images/weather/64x64/night/263.png */ "./src/images/weather/64x64/night/263.png");
/* harmony import */ var _images_weather_64x64_night_266_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../images/weather/64x64/night/266.png */ "./src/images/weather/64x64/night/266.png");
/* harmony import */ var _images_weather_64x64_night_281_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../images/weather/64x64/night/281.png */ "./src/images/weather/64x64/night/281.png");
/* harmony import */ var _images_weather_64x64_night_284_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../images/weather/64x64/night/284.png */ "./src/images/weather/64x64/night/284.png");
/* harmony import */ var _images_weather_64x64_night_293_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../images/weather/64x64/night/293.png */ "./src/images/weather/64x64/night/293.png");
/* harmony import */ var _images_weather_64x64_night_296_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../images/weather/64x64/night/296.png */ "./src/images/weather/64x64/night/296.png");
/* harmony import */ var _images_weather_64x64_night_299_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../images/weather/64x64/night/299.png */ "./src/images/weather/64x64/night/299.png");
/* harmony import */ var _images_weather_64x64_night_302_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../images/weather/64x64/night/302.png */ "./src/images/weather/64x64/night/302.png");
/* harmony import */ var _images_weather_64x64_night_305_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../images/weather/64x64/night/305.png */ "./src/images/weather/64x64/night/305.png");
/* harmony import */ var _images_weather_64x64_night_308_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../images/weather/64x64/night/308.png */ "./src/images/weather/64x64/night/308.png");
/* harmony import */ var _images_weather_64x64_night_311_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../images/weather/64x64/night/311.png */ "./src/images/weather/64x64/night/311.png");
/* harmony import */ var _images_weather_64x64_night_314_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../images/weather/64x64/night/314.png */ "./src/images/weather/64x64/night/314.png");
/* harmony import */ var _images_weather_64x64_night_317_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../images/weather/64x64/night/317.png */ "./src/images/weather/64x64/night/317.png");
/* harmony import */ var _images_weather_64x64_night_320_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../images/weather/64x64/night/320.png */ "./src/images/weather/64x64/night/320.png");
/* harmony import */ var _images_weather_64x64_night_323_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../images/weather/64x64/night/323.png */ "./src/images/weather/64x64/night/323.png");
/* harmony import */ var _images_weather_64x64_night_326_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../images/weather/64x64/night/326.png */ "./src/images/weather/64x64/night/326.png");
/* harmony import */ var _images_weather_64x64_night_329_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../images/weather/64x64/night/329.png */ "./src/images/weather/64x64/night/329.png");
/* harmony import */ var _images_weather_64x64_night_332_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../images/weather/64x64/night/332.png */ "./src/images/weather/64x64/night/332.png");
/* harmony import */ var _images_weather_64x64_night_335_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../images/weather/64x64/night/335.png */ "./src/images/weather/64x64/night/335.png");
/* harmony import */ var _images_weather_64x64_night_338_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../images/weather/64x64/night/338.png */ "./src/images/weather/64x64/night/338.png");
/* harmony import */ var _images_weather_64x64_night_350_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../images/weather/64x64/night/350.png */ "./src/images/weather/64x64/night/350.png");
/* harmony import */ var _images_weather_64x64_night_353_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../images/weather/64x64/night/353.png */ "./src/images/weather/64x64/night/353.png");
/* harmony import */ var _images_weather_64x64_night_356_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../images/weather/64x64/night/356.png */ "./src/images/weather/64x64/night/356.png");
/* harmony import */ var _images_weather_64x64_night_359_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../images/weather/64x64/night/359.png */ "./src/images/weather/64x64/night/359.png");
/* harmony import */ var _images_weather_64x64_night_362_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../images/weather/64x64/night/362.png */ "./src/images/weather/64x64/night/362.png");
/* harmony import */ var _images_weather_64x64_night_365_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../images/weather/64x64/night/365.png */ "./src/images/weather/64x64/night/365.png");
/* harmony import */ var _images_weather_64x64_night_368_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../images/weather/64x64/night/368.png */ "./src/images/weather/64x64/night/368.png");
/* harmony import */ var _images_weather_64x64_night_371_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../images/weather/64x64/night/371.png */ "./src/images/weather/64x64/night/371.png");
/* harmony import */ var _images_weather_64x64_night_374_png__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../images/weather/64x64/night/374.png */ "./src/images/weather/64x64/night/374.png");
/* harmony import */ var _images_weather_64x64_night_377_png__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../images/weather/64x64/night/377.png */ "./src/images/weather/64x64/night/377.png");
/* harmony import */ var _images_weather_64x64_night_386_png__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../images/weather/64x64/night/386.png */ "./src/images/weather/64x64/night/386.png");
/* harmony import */ var _images_weather_64x64_night_389_png__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../images/weather/64x64/night/389.png */ "./src/images/weather/64x64/night/389.png");
/* harmony import */ var _images_weather_64x64_night_392_png__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../images/weather/64x64/night/392.png */ "./src/images/weather/64x64/night/392.png");
/* harmony import */ var _images_weather_64x64_night_395_png__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../images/weather/64x64/night/395.png */ "./src/images/weather/64x64/night/395.png");




































































































//? **`` Sets the imported icon to a value in an object
const day = {
  '113.png': _images_weather_64x64_day_113_png__WEBPACK_IMPORTED_MODULE_0__,
  '116.png': _images_weather_64x64_day_116_png__WEBPACK_IMPORTED_MODULE_1__,
  '119.png': _images_weather_64x64_day_119_png__WEBPACK_IMPORTED_MODULE_2__,
  '122.png': _images_weather_64x64_day_122_png__WEBPACK_IMPORTED_MODULE_3__,
  '143.png': _images_weather_64x64_day_143_png__WEBPACK_IMPORTED_MODULE_4__,
  '176.png': _images_weather_64x64_day_176_png__WEBPACK_IMPORTED_MODULE_5__,
  '179.png': _images_weather_64x64_day_179_png__WEBPACK_IMPORTED_MODULE_6__,
  '182.png': _images_weather_64x64_day_182_png__WEBPACK_IMPORTED_MODULE_7__,
  '185.png': _images_weather_64x64_day_185_png__WEBPACK_IMPORTED_MODULE_8__,
  '200.png': _images_weather_64x64_day_200_png__WEBPACK_IMPORTED_MODULE_9__,
  '227.png': _images_weather_64x64_day_227_png__WEBPACK_IMPORTED_MODULE_10__,
  '230.png': _images_weather_64x64_day_230_png__WEBPACK_IMPORTED_MODULE_11__,
  '248.png': _images_weather_64x64_day_248_png__WEBPACK_IMPORTED_MODULE_12__,
  '260.png': _images_weather_64x64_day_260_png__WEBPACK_IMPORTED_MODULE_13__,
  '263.png': _images_weather_64x64_day_263_png__WEBPACK_IMPORTED_MODULE_14__,
  '266.png': _images_weather_64x64_day_266_png__WEBPACK_IMPORTED_MODULE_15__,
  '281.png': _images_weather_64x64_day_281_png__WEBPACK_IMPORTED_MODULE_16__,
  '284.png': _images_weather_64x64_day_284_png__WEBPACK_IMPORTED_MODULE_17__,
  '293.png': _images_weather_64x64_day_293_png__WEBPACK_IMPORTED_MODULE_18__,
  '296.png': _images_weather_64x64_day_296_png__WEBPACK_IMPORTED_MODULE_19__,
  '299.png': _images_weather_64x64_day_299_png__WEBPACK_IMPORTED_MODULE_20__,
  '302.png': _images_weather_64x64_day_302_png__WEBPACK_IMPORTED_MODULE_21__,
  '305.png': _images_weather_64x64_day_305_png__WEBPACK_IMPORTED_MODULE_22__,
  '308.png': _images_weather_64x64_day_308_png__WEBPACK_IMPORTED_MODULE_23__,
  '311.png': _images_weather_64x64_day_311_png__WEBPACK_IMPORTED_MODULE_24__,
  '314.png': _images_weather_64x64_day_314_png__WEBPACK_IMPORTED_MODULE_25__,
  '317.png': _images_weather_64x64_day_317_png__WEBPACK_IMPORTED_MODULE_26__,
  '320.png': _images_weather_64x64_day_320_png__WEBPACK_IMPORTED_MODULE_27__,
  '323.png': _images_weather_64x64_day_323_png__WEBPACK_IMPORTED_MODULE_28__,
  '326.png': _images_weather_64x64_day_326_png__WEBPACK_IMPORTED_MODULE_29__,
  '329.png': _images_weather_64x64_day_329_png__WEBPACK_IMPORTED_MODULE_30__,
  '332.png': _images_weather_64x64_day_332_png__WEBPACK_IMPORTED_MODULE_31__,
  '335.png': _images_weather_64x64_day_335_png__WEBPACK_IMPORTED_MODULE_32__,
  '338.png': _images_weather_64x64_day_338_png__WEBPACK_IMPORTED_MODULE_33__,
  '350.png': _images_weather_64x64_day_350_png__WEBPACK_IMPORTED_MODULE_34__,
  '353.png': _images_weather_64x64_day_353_png__WEBPACK_IMPORTED_MODULE_35__,
  '356.png': _images_weather_64x64_day_356_png__WEBPACK_IMPORTED_MODULE_36__,
  '359.png': _images_weather_64x64_day_359_png__WEBPACK_IMPORTED_MODULE_37__,
  '362.png': _images_weather_64x64_day_362_png__WEBPACK_IMPORTED_MODULE_38__,
  '365.png': _images_weather_64x64_day_365_png__WEBPACK_IMPORTED_MODULE_39__,
  '368.png': _images_weather_64x64_day_368_png__WEBPACK_IMPORTED_MODULE_40__,
  '371.png': _images_weather_64x64_day_371_png__WEBPACK_IMPORTED_MODULE_41__,
  '374.png': _images_weather_64x64_day_374_png__WEBPACK_IMPORTED_MODULE_42__,
  '377.png': _images_weather_64x64_day_377_png__WEBPACK_IMPORTED_MODULE_43__,
  '386.png': _images_weather_64x64_day_386_png__WEBPACK_IMPORTED_MODULE_44__,
  '389.png': _images_weather_64x64_day_389_png__WEBPACK_IMPORTED_MODULE_45__,
  '392.png': _images_weather_64x64_day_392_png__WEBPACK_IMPORTED_MODULE_46__,
  '395.png': _images_weather_64x64_day_395_png__WEBPACK_IMPORTED_MODULE_47__,
};

//? **`` Sets the imported icon to a value in an object
const night = {
  '113.png': _images_weather_64x64_night_113_png__WEBPACK_IMPORTED_MODULE_48__,
  '116.png': _images_weather_64x64_night_116_png__WEBPACK_IMPORTED_MODULE_49__,
  '119.png': _images_weather_64x64_night_119_png__WEBPACK_IMPORTED_MODULE_50__,
  '122.png': _images_weather_64x64_night_122_png__WEBPACK_IMPORTED_MODULE_51__,
  '143.png': _images_weather_64x64_night_143_png__WEBPACK_IMPORTED_MODULE_52__,
  '176.png': _images_weather_64x64_night_176_png__WEBPACK_IMPORTED_MODULE_53__,
  '179.png': _images_weather_64x64_night_179_png__WEBPACK_IMPORTED_MODULE_54__,
  '182.png': _images_weather_64x64_night_182_png__WEBPACK_IMPORTED_MODULE_55__,
  '185.png': _images_weather_64x64_night_185_png__WEBPACK_IMPORTED_MODULE_56__,
  '200.png': _images_weather_64x64_night_200_png__WEBPACK_IMPORTED_MODULE_57__,
  '227.png': _images_weather_64x64_night_227_png__WEBPACK_IMPORTED_MODULE_58__,
  '230.png': _images_weather_64x64_night_230_png__WEBPACK_IMPORTED_MODULE_59__,
  '248.png': _images_weather_64x64_night_248_png__WEBPACK_IMPORTED_MODULE_60__,
  '260.png': _images_weather_64x64_night_260_png__WEBPACK_IMPORTED_MODULE_61__,
  '263.png': _images_weather_64x64_night_263_png__WEBPACK_IMPORTED_MODULE_62__,
  '266.png': _images_weather_64x64_night_266_png__WEBPACK_IMPORTED_MODULE_63__,
  '281.png': _images_weather_64x64_night_281_png__WEBPACK_IMPORTED_MODULE_64__,
  '284.png': _images_weather_64x64_night_284_png__WEBPACK_IMPORTED_MODULE_65__,
  '293.png': _images_weather_64x64_night_293_png__WEBPACK_IMPORTED_MODULE_66__,
  '296.png': _images_weather_64x64_night_296_png__WEBPACK_IMPORTED_MODULE_67__,
  '299.png': _images_weather_64x64_night_299_png__WEBPACK_IMPORTED_MODULE_68__,
  '302.png': _images_weather_64x64_night_302_png__WEBPACK_IMPORTED_MODULE_69__,
  '305.png': _images_weather_64x64_night_305_png__WEBPACK_IMPORTED_MODULE_70__,
  '308.png': _images_weather_64x64_night_308_png__WEBPACK_IMPORTED_MODULE_71__,
  '311.png': _images_weather_64x64_night_311_png__WEBPACK_IMPORTED_MODULE_72__,
  '314.png': _images_weather_64x64_night_314_png__WEBPACK_IMPORTED_MODULE_73__,
  '317.png': _images_weather_64x64_night_317_png__WEBPACK_IMPORTED_MODULE_74__,
  '320.png': _images_weather_64x64_night_320_png__WEBPACK_IMPORTED_MODULE_75__,
  '323.png': _images_weather_64x64_night_323_png__WEBPACK_IMPORTED_MODULE_76__,
  '326.png': _images_weather_64x64_night_326_png__WEBPACK_IMPORTED_MODULE_77__,
  '329.png': _images_weather_64x64_night_329_png__WEBPACK_IMPORTED_MODULE_78__,
  '332.png': _images_weather_64x64_night_332_png__WEBPACK_IMPORTED_MODULE_79__,
  '335.png': _images_weather_64x64_night_335_png__WEBPACK_IMPORTED_MODULE_80__,
  '338.png': _images_weather_64x64_night_338_png__WEBPACK_IMPORTED_MODULE_81__,
  '350.png': _images_weather_64x64_night_350_png__WEBPACK_IMPORTED_MODULE_82__,
  '353.png': _images_weather_64x64_night_353_png__WEBPACK_IMPORTED_MODULE_83__,
  '356.png': _images_weather_64x64_night_356_png__WEBPACK_IMPORTED_MODULE_84__,
  '359.png': _images_weather_64x64_night_359_png__WEBPACK_IMPORTED_MODULE_85__,
  '362.png': _images_weather_64x64_night_362_png__WEBPACK_IMPORTED_MODULE_86__,
  '365.png': _images_weather_64x64_night_365_png__WEBPACK_IMPORTED_MODULE_87__,
  '368.png': _images_weather_64x64_night_368_png__WEBPACK_IMPORTED_MODULE_88__,
  '371.png': _images_weather_64x64_night_371_png__WEBPACK_IMPORTED_MODULE_89__,
  '374.png': _images_weather_64x64_night_374_png__WEBPACK_IMPORTED_MODULE_90__,
  '377.png': _images_weather_64x64_night_377_png__WEBPACK_IMPORTED_MODULE_91__,
  '386.png': _images_weather_64x64_night_386_png__WEBPACK_IMPORTED_MODULE_92__,
  '389.png': _images_weather_64x64_night_389_png__WEBPACK_IMPORTED_MODULE_93__,
  '392.png': _images_weather_64x64_night_392_png__WEBPACK_IMPORTED_MODULE_94__,
  '395.png': _images_weather_64x64_night_395_png__WEBPACK_IMPORTED_MODULE_95__,
};


/***/ }),

/***/ "./src/images/weather/64x64/day/113.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/113.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17608b0baa1391eb05a0.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/116.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/116.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ea9e73debaf4c25a8cf.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/119.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/119.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e740cebbccd7be04d824.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/122.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/122.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "036a7f4b9402e1d74535.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/143.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/143.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a93c5cdce8f09616fc0e.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/176.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/176.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/179.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/179.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/182.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/182.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/185.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/185.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/200.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/200.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/227.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/227.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b129e818f96bfd5302e9.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/230.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/230.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8b0bf9be35bccc67ed8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/248.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/248.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a1d4434712ee44f9ba.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/260.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/260.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e24a5eb9c1903d153a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/263.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/263.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/266.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/266.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/281.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/281.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/284.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/284.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56ec9edb8b4e68fe86cd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/293.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/293.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/296.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/296.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/299.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/299.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/302.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/302.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/305.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/305.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/308.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/308.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abccde130cb90d6b8d28.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/311.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/311.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/314.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/314.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/317.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/317.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/320.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/320.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/323.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/323.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/326.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/326.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/329.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/329.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/332.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/332.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/335.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/335.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/338.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/338.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33ecc25ad9b9bcdead64.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/350.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/350.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2ffeba8f660e868882d.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/353.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/353.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/356.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/356.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/359.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/359.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4e620fd4749c3b4e4e0.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/362.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/362.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/365.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/365.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de693c69934c56d7621b.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/368.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/368.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/371.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/371.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/374.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/374.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbb2a9027eb47dd6fc81.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/377.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/377.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5b7ec94bf807ad7a1f5.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/386.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/386.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/389.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/389.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f01fba5ae744838fbf95.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/392.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/392.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "654b4a200e85db363fc9.png";

/***/ }),

/***/ "./src/images/weather/64x64/day/395.png":
/*!**********************************************!*\
  !*** ./src/images/weather/64x64/day/395.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/113.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/113.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a181351a22b54059f46.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/116.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/116.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "337f58255916e54ea1e1.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/119.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/119.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "877a68f87ae89bb957ef.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/122.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/122.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe1ad0ff1820050f573a.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/143.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/143.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a38774211eb11741b54.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/176.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/176.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/179.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/179.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/182.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/182.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/185.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/185.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/200.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/200.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/227.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/227.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a417dc841fb787a3121e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/230.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/230.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af63c80cb02f1b88520b.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/248.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/248.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "360b1cd2a1b3bf3eccf0.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/260.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/260.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb1570c9ecb894bc1087.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/263.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/263.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/266.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/266.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/281.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/281.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/284.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/284.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf216d4d2f4aa9d2a734.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/293.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/293.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/296.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/296.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/299.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/299.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/302.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/302.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/305.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/305.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/308.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/308.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b4d7dcbbedd8be85713.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/311.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/311.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/314.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/314.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/317.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/317.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/320.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/320.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/323.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/323.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/326.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/326.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/329.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/329.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/332.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/332.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/335.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/335.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/338.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/338.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68e33fb0d2d3d215a5fe.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/350.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/350.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c33e3dd2cb58a8c51b7.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/353.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/353.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/356.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/356.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/359.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/359.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0ea4e443a205a9cfbbf.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/362.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/362.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/365.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/365.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3b2a1ad34b9471b980.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/368.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/368.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/371.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/371.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c7b41d4dea564886958.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/374.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/374.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42f4df0e587e14e2ec2d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/377.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/377.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2821934c72b0870a790d.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/386.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/386.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/389.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/389.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "815a9988eef459cc98c3.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/392.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/392.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "972cf01edfd40c105c6c.png";

/***/ }),

/***/ "./src/images/weather/64x64/night/395.png":
/*!************************************************!*\
  !*** ./src/images/weather/64x64/night/395.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_event_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/event-handlers */ "./src/modules/event-handlers.js");
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions */ "./src/modules/functions.js");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_modules_functions__WEBPACK_IMPORTED_MODULE_1__.displayInitialWeather)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_0__.searchInputLogic)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_0__.toggleMeasurementData)();

//! **`` WATCH YOUR PROJECT WITH 'NPX WEBPACK --WATCH' FOOOOOOOOL!!!! :)

//* File: event-handlers.js | Line: 19
//todo **`` Need to pop up a warning or something that it's empty

//* File: event-handlers.js | Line: 31
//todo **`` Need to pop up a warning or something that it can't find the location

//* File: README.md | Line: 1
//todo **`` Update README.md

})();

/******/ })()
;
//# sourceMappingURL=main.js.map