"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MeetupDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MeetupDetail(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.image,\n                alt: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wierz\\\\Documents\\\\GitHub\\\\NextJS\\\\nextJS part2\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 6,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wierz\\\\Documents\\\\GitHub\\\\NextJS\\\\nextJS part2\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: props.address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wierz\\\\Documents\\\\GitHub\\\\NextJS\\\\nextJS part2\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wierz\\\\Documents\\\\GitHub\\\\NextJS\\\\nextJS part2\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wierz\\\\Documents\\\\GitHub\\\\NextJS\\\\nextJS part2\\\\components\\\\meetups\\\\MeetupDetail.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, this));\n};\n_c = MeetupDetail;\nvar _c;\n$RefreshReg$(_c, \"MeetupDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUVoQyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDNUMsTUFBTSw2RUFDSkMsQ0FBTztRQUFDQyxTQUFTLEVBQUVKLHdFQUFjOzt3RkFDaENNLENBQUc7Z0JBQUNDLEdBQUcsRUFBRUwsS0FBSyxDQUFDTSxLQUFLO2dCQUFFQyxHQUFHLEVBQUVQLEtBQUssQ0FBQ1EsS0FBSzs7Ozs7O3dGQUN0Q0MsQ0FBRTswQkFBRVQsS0FBSyxDQUFDUSxLQUFLOzs7Ozs7d0ZBQ2ZFLENBQU87MEJBQUVWLEtBQUssQ0FBQ1UsT0FBTzs7Ozs7O3dGQUN0QkMsQ0FBQzswQkFBRVgsS0FBSyxDQUFDWSxXQUFXOzs7Ozs7Ozs7Ozs7QUFHeEIsQ0FBQztLQVR1QmIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzPzMxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcblx0XHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0+PC9pbWc+XHJcblx0XHRcdDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG5cdFx0XHQ8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXRhaWwiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDEiLCJhZGRyZXNzIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ })

});