"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/loading",{

/***/ "(app-pages-browser)/./src/components/loading-screen/splash-screen.js":
/*!********************************************************!*\
  !*** ./src/components/loading-screen/splash-screen.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SplashScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var src_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/theme/css */ \"(app-pages-browser)/./src/theme/css.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"(app-pages-browser)/./src/components/logo/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// ----------------------------------------------------------------------\nfunction SplashScreen(param) {\n    let { sx, ...other } = param;\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    ...(0,src_theme_css__WEBPACK_IMPORTED_MODULE_1__.bgBlur)({\n                        blur: 2,\n                        opacity: 0.24,\n                        color: theme.palette.background.default\n                    }),\n                    top: 0,\n                    left: 0,\n                    width: 1,\n                    height: 1,\n                    zIndex: 9999,\n                    display: \"flex\",\n                    position: \"absolute\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    ...sx\n                },\n                ...other,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {\n                    animate: {\n                        scale: [\n                            1,\n                            0.96,\n                            1,\n                            0.96,\n                            1\n                        ],\n                        opacity: [\n                            1,\n                            0.48,\n                            1,\n                            0.48,\n                            1\n                        ]\n                    },\n                    transition: {\n                        duration: 2,\n                        ease: \"easeInOut\",\n                        repeatDelay: 1,\n                        repeat: Infinity\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        single: true,\n                        sx: {\n                            width: 360,\n                            height: 360\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/components/loading-screen/splash-screen.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/components/loading-screen/splash-screen.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/components/loading-screen/splash-screen.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    width: 1,\n                    height: \"100vh\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/Payton/web-development/The-Inquiry-Room/src/components/loading-screen/splash-screen.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SplashScreen, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SplashScreen;\nSplashScreen.propTypes = {\n    sx: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)\n};\nvar _c;\n$RefreshReg$(_c, \"SplashScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvYWRpbmctc2NyZWVuL3NwbGFzaC1zY3JlZW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDQztBQUVDO0FBQ1k7QUFFVDtBQUVaO0FBRTNCLHlFQUF5RTtBQUUxRCxTQUFTTSxhQUFhLEtBQWdCO1FBQWhCLEVBQUVDLEVBQUUsRUFBRSxHQUFHQyxPQUFPLEdBQWhCOztJQUNuQyxNQUFNQyxRQUFRTixnRUFBUUE7SUFFdEIscUJBQ0U7OzBCQUNFLDhEQUFDRCx5REFBR0E7Z0JBQ0ZLLElBQUk7b0JBQ0YsR0FBR0gscURBQU1BLENBQUM7d0JBQ1JNLE1BQU07d0JBQ05DLFNBQVM7d0JBQ1RDLE9BQU9ILE1BQU1JLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPO29CQUN6QyxFQUFFO29CQUNGQyxLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxRQUFRO29CQUNSQyxTQUFTO29CQUNUQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxnQkFBZ0I7b0JBQ2hCLEdBQUdqQixFQUFFO2dCQUNQO2dCQUNDLEdBQUdDLEtBQUs7MEJBRVQsNEVBQUNSLDRDQUFDQSxDQUFDeUIsR0FBRztvQkFDSkMsU0FBUzt3QkFDUEMsT0FBTzs0QkFBQzs0QkFBRzs0QkFBTTs0QkFBRzs0QkFBTTt5QkFBRTt3QkFDNUJoQixTQUFTOzRCQUFDOzRCQUFHOzRCQUFNOzRCQUFHOzRCQUFNO3lCQUFFO29CQUNoQztvQkFDQWlCLFlBQVk7d0JBQ1ZDLFVBQVU7d0JBQ1ZDLE1BQU07d0JBQ05DLGFBQWE7d0JBQ2JDLFFBQVFDO29CQUNWOzhCQUVBLDRFQUFDNUIsNkNBQUlBO3dCQUFDNkIsTUFBTTt3QkFBQzNCLElBQUk7NEJBQUVXLE9BQU87NEJBQUtDLFFBQVE7d0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSS9DLDhEQUFDakIseURBQUdBO2dCQUFDSyxJQUFJO29CQUFFVyxPQUFPO29CQUFHQyxRQUFRO2dCQUFROzs7Ozs7OztBQUczQztHQTVDd0JiOztRQUNSSCw0REFBUUE7OztLQURBRztBQThDeEJBLGFBQWE2QixTQUFTLEdBQUc7SUFDdkI1QixJQUFJTiwwREFBZ0I7QUFDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9hZGluZy1zY3JlZW4vc3BsYXNoLXNjcmVlbi5qcz9jOTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcblxuaW1wb3J0IHsgYmdCbHVyIH0gZnJvbSBcInNyYy90aGVtZS9jc3NcIjtcblxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2xvZ29cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhc2hTY3JlZW4oeyBzeCwgLi4ub3RoZXIgfSkge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIC4uLmJnQmx1cih7XG4gICAgICAgICAgICBibHVyOiAyLFxuICAgICAgICAgICAgb3BhY2l0eTogMC4yNCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAuLi5zeCxcbiAgICAgICAgfX1cbiAgICAgICAgey4uLm90aGVyfVxuICAgICAgPlxuICAgICAgICA8bS5kaXZcbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZTogWzEsIDAuOTYsIDEsIDAuOTYsIDFdLFxuICAgICAgICAgICAgb3BhY2l0eTogWzEsIDAuNDgsIDEsIDAuNDgsIDFdLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgcmVwZWF0RGVsYXk6IDEsXG4gICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TG9nbyBzaW5nbGUgc3g9e3sgd2lkdGg6IDM2MCwgaGVpZ2h0OiAzNjAgfX0gLz5cbiAgICAgICAgPC9tLmRpdj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiAxLCBoZWlnaHQ6IFwiMTAwdmhcIiB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5TcGxhc2hTY3JlZW4ucHJvcFR5cGVzID0ge1xuICBzeDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iXSwibmFtZXMiOlsibSIsIlByb3BUeXBlcyIsIkJveCIsInVzZVRoZW1lIiwiYmdCbHVyIiwiTG9nbyIsIlNwbGFzaFNjcmVlbiIsInN4Iiwib3RoZXIiLCJ0aGVtZSIsImJsdXIiLCJvcGFjaXR5IiwiY29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJhbmltYXRlIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwicmVwZWF0RGVsYXkiLCJyZXBlYXQiLCJJbmZpbml0eSIsInNpbmdsZSIsInByb3BUeXBlcyIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/loading-screen/splash-screen.js\n"));

/***/ })

});