"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-hexadecimal";
exports.ids = ["vendor-chunks/is-hexadecimal"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isHexadecimal: () => (/* binding */ isHexadecimal)\n/* harmony export */ });\n/**\n * Check if the given character code, or the character code at the first\n * character, is hexadecimal.\n *\n * @param {string|number} character\n * @returns {boolean} Whether `character` is hexadecimal\n */\nfunction isHexadecimal(character) {\n  const code =\n    typeof character === 'string' ? character.charCodeAt(0) : character\n\n  return (\n    (code >= 97 /* a */ && code <= 102) /* z */ ||\n    (code >= 65 /* A */ && code <= 70) /* Z */ ||\n    (code >= 48 /* A */ && code <= 57) /* Z */\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtaGV4YWRlY2ltYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQUNFUlxcRGVza3RvcFxcVGFsZW50IFRyYWNrZXJcXG5vZGVfbW9kdWxlc1xcaXMtaGV4YWRlY2ltYWxcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4gKiBjaGFyYWN0ZXIsIGlzIGhleGFkZWNpbWFsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY2hhcmFjdGVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBgY2hhcmFjdGVyYCBpcyBoZXhhZGVjaW1hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNIZXhhZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgY29uc3QgY29kZSA9XG4gICAgdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEwMikgLyogeiAqLyB8fFxuICAgIChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA3MCkgLyogWiAqLyB8fFxuICAgIChjb2RlID49IDQ4IC8qIEEgKi8gJiYgY29kZSA8PSA1NykgLyogWiAqL1xuICApXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-hexadecimal/index.js\n");

/***/ })

};
;