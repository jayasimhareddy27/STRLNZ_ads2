"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["legacyVideos"],{

/***/ "./node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadLegacyVideoPlugins: function() { return /* binding */ loadLegacyVideoPlugins; }\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.mjs\");\n\nfunction loadLegacyVideoPlugins(analytics) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {\n        var plugins;\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() */ \"node_modules_segment_analytics_js-video-plugins_dist_index_umd_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @segment/analytics.js-video-plugins/dist/index.umd.js */ \"./node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js\", 23))\n                    // This is super gross, but we need to support the `window.analytics.plugins` namespace\n                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic\n                    // @ts-expect-error\n                ];\n                case 1:\n                    plugins = _a.sent();\n                    // This is super gross, but we need to support the `window.analytics.plugins` namespace\n                    // that is linked in the segment docs in order to be backwards compatible with ajs-classic\n                    // @ts-expect-error\n                    analytics._plugins = plugins;\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHNlZ21lbnQvYW5hbHl0aWNzLW5leHQvZGlzdC9wa2cvcGx1Z2lucy9sZWdhY3ktdmlkZW8tcGx1Z2lucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUN4QztBQUNQLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0EsNkNBQTZDLHlTQUUrQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzZWdtZW50L2FuYWx5dGljcy1uZXh0L2Rpc3QvcGtnL3BsdWdpbnMvbGVnYWN5LXZpZGVvLXBsdWdpbnMvaW5kZXguanM/ZjNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5leHBvcnQgZnVuY3Rpb24gbG9hZExlZ2FjeVZpZGVvUGx1Z2lucyhhbmFseXRpY3MpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwbHVnaW5zO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgJ0BzZWdtZW50L2FuYWx5dGljcy5qcy12aWRlby1wbHVnaW5zL2Rpc3QvaW5kZXgudW1kLmpzJylcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBzdXBlciBncm9zcywgYnV0IHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgYHdpbmRvdy5hbmFseXRpY3MucGx1Z2luc2AgbmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgbGlua2VkIGluIHRoZSBzZWdtZW50IGRvY3MgaW4gb3JkZXIgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aCBhanMtY2xhc3NpY1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgc3VwZXIgZ3Jvc3MsIGJ1dCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGB3aW5kb3cuYW5hbHl0aWNzLnBsdWdpbnNgIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGlzIGxpbmtlZCBpbiB0aGUgc2VnbWVudCBkb2NzIGluIG9yZGVyIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGggYWpzLWNsYXNzaWNcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3MuX3BsdWdpbnMgPSBwbHVnaW5zO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js\n"));

/***/ })

}]);