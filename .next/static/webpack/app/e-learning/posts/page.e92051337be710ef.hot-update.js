"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/e-learning/posts/page",{

/***/ "(app-pages-browser)/./src/sections/_elearning/view/elearning-posts-view.js":
/*!**************************************************************!*\
  !*** ./src/sections/_elearning/view/elearning-posts-view.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ElearningPostsView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Unstable_Grid2 */ \"(app-pages-browser)/./node_modules/@mui/material/Unstable_Grid2/Grid2.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_mock */ \"(app-pages-browser)/./src/_mock/index.js\");\n/* harmony import */ var _blog_common_post_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blog/common/post-sidebar */ \"(app-pages-browser)/./src/sections/blog/common/post-sidebar.js\");\n/* harmony import */ var _elearning_newsletter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elearning-newsletter */ \"(app-pages-browser)/./src/sections/_elearning/elearning-newsletter.js\");\n/* harmony import */ var _blog_elearning_elearning_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blog/elearning/elearning-posts */ \"(app-pages-browser)/./src/sections/blog/elearning/elearning-posts.js\");\n/* harmony import */ var _blog_common_post_search_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blog/common/post-search-mobile */ \"(app-pages-browser)/./src/sections/blog/common/post-search-mobile.js\");\n/* harmony import */ var _blog_elearning_elearning_featured_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blog/elearning/elearning-featured-post */ \"(app-pages-browser)/./src/sections/blog/elearning/elearning-featured-post.js\");\n/* harmony import */ var src_hooks_use_podcast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/hooks/use-podcast */ \"(app-pages-browser)/./src/hooks/use-podcast.js\");\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// ----------------------------------------------------------------------\nfunction ElearningPostsView() {\n    _s();\n    const [podcastData, podcastEpisodes, podcastServers] = (0,src_hooks_use_podcast__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blog_common_post_search_mobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                sx: {\n                    pt: 10\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    container: true,\n                    spacing: {\n                        md: 8\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            xs: 12,\n                            md: 8,\n                            children: [\n                                podcastEpisodes.map((episode)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        children: episode.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blog_elearning_elearning_posts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    posts: src_mock__WEBPACK_IMPORTED_MODULE_1__._coursePosts\n                                }, void 0, false, {\n                                    fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            xs: 12,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blog_common_post_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                popularTags: src_mock__WEBPACK_IMPORTED_MODULE_1__._tags,\n                                categories: src_mock__WEBPACK_IMPORTED_MODULE_1__._categories,\n                                recentPosts: {\n                                    list: src_mock__WEBPACK_IMPORTED_MODULE_1__._coursePosts.slice(-4)\n                                },\n                                advertisement: {\n                                    title: \"Advertisement\",\n                                    description: \"Duis leo. Donec orci lectus, aliquam ut, faucibus non\",\n                                    imageUrl: src_mock__WEBPACK_IMPORTED_MODULE_1__._mock.image.course(10),\n                                    path: \"\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/sections/_elearning/view/elearning-posts-view.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ElearningPostsView, \"hd5J1SQLLp5WXHnvzMGv3QR1VNU=\", false, function() {\n    return [\n        src_hooks_use_podcast__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = ElearningPostsView;\nvar _c;\n$RefreshReg$(_c, \"ElearningPostsView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9fZWxlYXJuaW5nL3ZpZXcvZWxlYXJuaW5nLXBvc3RzLXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDQTtBQUVvQjtBQUVYO0FBQ0M7QUFDUTtBQUNFO0FBQ2E7QUFDbEM7QUFDSjtBQUUzQyx5RUFBeUU7QUFFMUQsU0FBU2E7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsaUJBQWlCQyxlQUFlLEdBQUdMLGlFQUFVQTtJQUVqRSxxQkFDRTs7MEJBQ0UsOERBQUNGLHVFQUFnQkE7Ozs7OzBCQUlqQiw4REFBQ1IsK0RBQVNBO2dCQUNSZ0IsSUFBSTtvQkFDRkMsSUFBSTtnQkFDTjswQkFFQSw0RUFBQ2xCLG9FQUFJQTtvQkFBQ21CLFNBQVM7b0JBQUNDLFNBQVM7d0JBQUVDLElBQUk7b0JBQUU7O3NDQUMvQiw4REFBQ3JCLG9FQUFJQTs0QkFBQ3NCLElBQUk7NEJBQUlELElBQUk7O2dDQUNmTixnQkFBZ0JRLEdBQUcsQ0FBQyxDQUFDQyx3QkFDcEIsOERBQUNaLHVGQUFVQTtrREFBRVksUUFBUUMsS0FBSzs7Ozs7OzhDQUU1Qiw4REFBQ2pCLHVFQUFjQTtvQ0FBQ2tCLE9BQU9yQixrREFBWUE7Ozs7Ozs7Ozs7OztzQ0FHckMsOERBQUNMLG9FQUFJQTs0QkFBQ3NCLElBQUk7NEJBQUlELElBQUk7c0NBQ2hCLDRFQUFDZixpRUFBV0E7Z0NBQ1ZxQixhQUFhekIsMkNBQUtBO2dDQUNsQjBCLFlBQVl4QixpREFBV0E7Z0NBQ3ZCeUIsYUFBYTtvQ0FBRUMsTUFBTXpCLGtEQUFZQSxDQUFDMEIsS0FBSyxDQUFDLENBQUM7Z0NBQUc7Z0NBQzVDQyxlQUFlO29DQUNiUCxPQUFPO29DQUNQUSxhQUNFO29DQUNGQyxVQUFVL0IsMkNBQUtBLENBQUNnQyxLQUFLLENBQUNDLE1BQU0sQ0FBQztvQ0FDN0JDLE1BQU07Z0NBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFkO0dBekN3QnhCOztRQUNpQ0YsNkRBQVVBOzs7S0FEM0NFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9fZWxlYXJuaW5nL3ZpZXcvZWxlYXJuaW5nLXBvc3RzLXZpZXcuanM/YTM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVW5zdGFibGVfR3JpZDJcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5cbmltcG9ydCB7IF90YWdzLCBfbW9jaywgX2NhdGVnb3JpZXMsIF9jb3Vyc2VQb3N0cyB9IGZyb20gXCJzcmMvX21vY2tcIjtcblxuaW1wb3J0IFBvc3RTaWRlYmFyIGZyb20gXCIuLi8uLi9ibG9nL2NvbW1vbi9wb3N0LXNpZGViYXJcIjtcbmltcG9ydCBFbGVhcm5pbmdOZXdzbGV0dGVyIGZyb20gXCIuLi9lbGVhcm5pbmctbmV3c2xldHRlclwiO1xuaW1wb3J0IEVsZWFybmluZ1Bvc3RzIGZyb20gXCIuLi8uLi9ibG9nL2VsZWFybmluZy9lbGVhcm5pbmctcG9zdHNcIjtcbmltcG9ydCBQb3N0U2VhcmNoTW9iaWxlIGZyb20gXCIuLi8uLi9ibG9nL2NvbW1vbi9wb3N0LXNlYXJjaC1tb2JpbGVcIjtcbmltcG9ydCBFbGVhcm5pbmdGZWF0dXJlZFBvc3QgZnJvbSBcIi4uLy4uL2Jsb2cvZWxlYXJuaW5nL2VsZWFybmluZy1mZWF0dXJlZC1wb3N0XCI7XG5pbXBvcnQgdXNlUG9kY2FzdCBmcm9tIFwic3JjL2hvb2tzL3VzZS1wb2RjYXN0XCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbGVhcm5pbmdQb3N0c1ZpZXcoKSB7XG4gIGNvbnN0IFtwb2RjYXN0RGF0YSwgcG9kY2FzdEVwaXNvZGVzLCBwb2RjYXN0U2VydmVyc10gPSB1c2VQb2RjYXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBvc3RTZWFyY2hNb2JpbGUgLz5cblxuICAgICAgey8qIDxFbGVhcm5pbmdGZWF0dXJlZFBvc3QgcG9zdD17bnVsbH0gLz4gKi99XG5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwdDogMTAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXt7IG1kOiA4IH19PlxuICAgICAgICAgIDxHcmlkIHhzPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgICAge3BvZGNhc3RFcGlzb2Rlcy5tYXAoKGVwaXNvZGUpID0+IChcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2VwaXNvZGUudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8RWxlYXJuaW5nUG9zdHMgcG9zdHM9e19jb3Vyc2VQb3N0c30gLz5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8R3JpZCB4cz17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxQb3N0U2lkZWJhclxuICAgICAgICAgICAgICBwb3B1bGFyVGFncz17X3RhZ3N9XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM9e19jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICByZWNlbnRQb3N0cz17eyBsaXN0OiBfY291cnNlUG9zdHMuc2xpY2UoLTQpIH19XG4gICAgICAgICAgICAgIGFkdmVydGlzZW1lbnQ9e3tcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBZHZlcnRpc2VtZW50XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICBcIkR1aXMgbGVvLiBEb25lYyBvcmNpIGxlY3R1cywgYWxpcXVhbSB1dCwgZmF1Y2lidXMgbm9uXCIsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IF9tb2NrLmltYWdlLmNvdXJzZSgxMCksXG4gICAgICAgICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIHsvKiA8RWxlYXJuaW5nTmV3c2xldHRlciAvPiAqL31cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHcmlkIiwiQ29udGFpbmVyIiwiX3RhZ3MiLCJfbW9jayIsIl9jYXRlZ29yaWVzIiwiX2NvdXJzZVBvc3RzIiwiUG9zdFNpZGViYXIiLCJFbGVhcm5pbmdOZXdzbGV0dGVyIiwiRWxlYXJuaW5nUG9zdHMiLCJQb3N0U2VhcmNoTW9iaWxlIiwiRWxlYXJuaW5nRmVhdHVyZWRQb3N0IiwidXNlUG9kY2FzdCIsIlR5cG9ncmFwaHkiLCJFbGVhcm5pbmdQb3N0c1ZpZXciLCJwb2RjYXN0RGF0YSIsInBvZGNhc3RFcGlzb2RlcyIsInBvZGNhc3RTZXJ2ZXJzIiwic3giLCJwdCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJtZCIsInhzIiwibWFwIiwiZXBpc29kZSIsInRpdGxlIiwicG9zdHMiLCJwb3B1bGFyVGFncyIsImNhdGVnb3JpZXMiLCJyZWNlbnRQb3N0cyIsImxpc3QiLCJzbGljZSIsImFkdmVydGlzZW1lbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiaW1hZ2UiLCJjb3Vyc2UiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/_elearning/view/elearning-posts-view.js\n"));

/***/ })

});