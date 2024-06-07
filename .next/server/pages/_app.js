"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/analytics.tsx":
/*!**********************************!*\
  !*** ./components/analytics.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Analytics)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/segment */ \"./lib/segment.ts\");\n\n\n\nfunction Analytics() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        _lib_segment__WEBPACK_IMPORTED_MODULE_2__.analytics.page();\n        router.events.on(\"routeChangeComplete\", ()=>_lib_segment__WEBPACK_IMPORTED_MODULE_2__.analytics.page());\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", ()=>_lib_segment__WEBPACK_IMPORTED_MODULE_2__.analytics.page());\n        };\n    }, [\n        router.events\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuYWx5dGljcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDRTtBQUUzQixTQUFTRztJQUN0QixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1JFLG1EQUFTQSxDQUFDRyxJQUFJO1FBRWRELE9BQU9FLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QixJQUFNTCxtREFBU0EsQ0FBQ0csSUFBSTtRQUU1RCxPQUFPO1lBQ0xELE9BQU9FLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1QixJQUFNTixtREFBU0EsQ0FBQ0csSUFBSTtRQUMvRDtJQUNGLEdBQUc7UUFBQ0QsT0FBT0UsTUFBTTtLQUFDO0lBRWxCLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5hbHl0aWNzLnRzeD9hZTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSBcIkAvbGliL3NlZ21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljcygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFuYWx5dGljcy5wYWdlKCk7XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gYW5hbHl0aWNzLnBhZ2UoKSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IGFuYWx5dGljcy5wYWdlKCkpO1xyXG4gICAgfTtcclxuICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYW5hbHl0aWNzIiwiQW5hbHl0aWNzIiwicm91dGVyIiwicGFnZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/analytics.tsx\n");

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/track\",\n                            children: \"Track\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/events\",\n                            children: \"Events\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n            lineNumber: 6,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\components\\\\header.tsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBRWQsU0FBU0M7SUFDdkIscUJBQ0MsOERBQUNDO2tCQUNBLDRFQUFDQztzQkFDQSw0RUFBQ0M7O2tDQUNBLDhEQUFDQztrQ0FDQSw0RUFBQ0wsa0RBQUlBOzRCQUFDTSxNQUFLO3NDQUFJOzs7Ozs7Ozs7OztrQ0FFaEIsOERBQUNEO2tDQUNBLDRFQUFDTCxrREFBSUE7NEJBQUNNLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0Q7a0NBQ0EsNEVBQUNMLGtEQUFJQTs0QkFBQ00sTUFBSztzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyPlxyXG5cdFx0XHQ8bmF2PlxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90cmFja1wiPlRyYWNrPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ldmVudHNcIj5FdmVudHM8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWRlciIsImhlYWRlciIsIm5hdiIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ }),

/***/ "./lib/segment.ts":
/*!************************!*\
  !*** ./lib/segment.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: () => (/* binding */ analytics)\n/* harmony export */ });\n/* harmony import */ var _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @segment/analytics-next */ \"@segment/analytics-next\");\n/* harmony import */ var _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__);\n\nconst analytics = _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__.AnalyticsBrowser.load({\n    cdnURL: \"https://cdn.segment.com\",\n    writeKey: \"tC4NmXFAvn8sKBk8j7IV6dYDbnYarrRA\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VnbWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFcEQsTUFBTUMsWUFBWUQscUVBQWdCQSxDQUFDRSxJQUFJLENBQUM7SUFDOUNDLFFBQVFDLHlCQUF1QztJQUMvQ0csVUFBVUgsa0NBQXlDO0FBQ3BELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2VnbWVudC50cz8xMmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuYWx5dGljc0Jyb3dzZXIgfSBmcm9tIFwiQHNlZ21lbnQvYW5hbHl0aWNzLW5leHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBBbmFseXRpY3NCcm93c2VyLmxvYWQoe1xyXG5cdGNkblVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VHTUVOVF9DRE5fVVJMISxcclxuXHR3cml0ZUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VHTUVOVF9XUklURV9LRVkhLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIkFuYWx5dGljc0Jyb3dzZXIiLCJhbmFseXRpY3MiLCJsb2FkIiwiY2RuVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFR01FTlRfQ0ROX1VSTCIsIndyaXRlS2V5IiwiTkVYVF9QVUJMSUNfU0VHTUVOVF9XUklURV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/segment.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"./components/header.tsx\");\n/* harmony import */ var _components_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/analytics */ \"./components/analytics.tsx\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_analytics__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\nani projects\\\\storylinz\\\\segment_trail_1\\\\ads_2\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtNQTtBQUhtQztBQUNNO0FBSWhDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVdQLDBKQUFlOzswQkFDOUIsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILDZEQUFTQTs7Ozs7Ozs7Ozs7QUFHaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBBbmFseXRpY3MgZnJvbSBcIkAvY29tcG9uZW50cy9hbmFseXRpY3NcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEFuYWx5dGljcyAvPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZGVyIiwiQW5hbHl0aWNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@segment/analytics-next":
/*!******************************************!*\
  !*** external "@segment/analytics-next" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@segment/analytics-next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();