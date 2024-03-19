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

/***/ "(app-pages-browser)/./src/hooks/use-podcast.js":
/*!**********************************!*\
  !*** ./src/hooks/use-podcast.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePodcast; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _json_data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-data-api */ \"(app-pages-browser)/./src/hooks/json-data-api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nasync function fetchPodcastData(url) {\n    try {\n        const response = await fetch(url);\n        const xmlText = await response.text();\n        const parser = new DOMParser();\n        const xml = parser.parseFromString(xmlText, \"application/xml\");\n        const channel = xml.querySelector(\"channel\");\n        const podcastData = {\n            title: channel.querySelector(\"title\").textContent,\n            description: channel.querySelector(\"description\").textContent,\n            image: channel.querySelector(\"image url\").textContent,\n            link: channel.querySelector(\"link\").textContent\n        };\n        return podcastData;\n    } catch (error) {\n        console.error(\"Error fetching podcast data:\", error);\n        return null;\n    }\n}\nasync function fetchPodcastEpisodes(url) {\n    try {\n        const response = await fetch(url);\n        const xmlText = await response.text();\n        const parser = new DOMParser();\n        const xml = parser.parseFromString(xmlText, \"application/xml\");\n        const items = xml.querySelectorAll(\"item\");\n        const episodes = Array.from(items).map((item)=>{\n            console.log(item);\n            const titleElement = item.querySelector(\"title\");\n            const title = titleElement ? titleElement.textContent : \"Unknown Title\";\n            const episodeMatch = title.match(/Episode #(\\d+):/);\n            const episodeNumber = episodeMatch ? parseInt(episodeMatch[1]) : null;\n            const descriptionElement = item.querySelector(\"description\");\n            const description = descriptionElement ? descriptionElement.textContent : \"No Description\";\n            const linkElement = item.querySelector(\"link\");\n            const link = linkElement ? linkElement.textContent : \"#\";\n            const pubDateElement = item.querySelector(\"pubDate\");\n            const pubDate = pubDateElement ? pubDateElement.textContent : \"Unknown Date\";\n            const enclosureElement = item.querySelector(\"enclosure\");\n            const enclosure = enclosureElement ? {\n                url: enclosureElement.getAttribute(\"url\"),\n                type: enclosureElement.getAttribute(\"type\")\n            } : null;\n            let coverArt = null;\n            const itunesImage = item.getElementsByTagNameNS(\"http://www.itunes.com/dtds/podcast-1.0.dtd\", \"image\")[0];\n            if (itunesImage) {\n                coverArt = itunesImage.getAttribute(\"href\");\n            }\n            let duration = null;\n            const itunesDuration = item.getElementsByTagNameNS(\"http://www.itunes.com/dtds/podcast-1.0.dtd\", \"duration\")[0];\n            if (itunesDuration) {\n                duration = itunesDuration.text;\n            }\n            return {\n                title: title,\n                description: description,\n                link: link,\n                pubDate: pubDate,\n                enclosure: enclosure,\n                episodeNumber: episodeNumber,\n                duration: duration,\n                coverArt: coverArt\n            };\n        });\n        console.log(episodes);\n        return episodes;\n    } catch (error) {\n        console.error(\"Error fetching podcast episodes:\", error);\n        return [];\n    }\n}\nfunction usePodcast(url) {\n    _s();\n    const [podcastData, setPodcastData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n    const [podcastEpisodes, setPodcastEpisodes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [podcastServers, setPodcastServers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{\n        const podcast = await fetchPodcastData(url);\n        const episodes = await fetchPodcastEpisodes(url);\n        const json = await _json_data_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].podcastServers();\n        console.log(episodes);\n        setPodcastData(podcast);\n        setPodcastEpisodes(episodes);\n        setPodcastServers(json);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    return [\n        podcastData,\n        podcastEpisodes,\n        podcastServers\n    ];\n}\n_s(usePodcast, \"rca0M10HvwHOs7DxOzneIWLKJqM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2UtcG9kY2FzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5RDtBQUNsQjtBQUV2QyxlQUFlSSxpQkFBaUJDLEdBQUc7SUFDakMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUY7UUFDN0IsTUFBTUcsVUFBVSxNQUFNRixTQUFTRyxJQUFJO1FBQ25DLE1BQU1DLFNBQVMsSUFBSUM7UUFDbkIsTUFBTUMsTUFBTUYsT0FBT0csZUFBZSxDQUFDTCxTQUFTO1FBQzVDLE1BQU1NLFVBQVVGLElBQUlHLGFBQWEsQ0FBQztRQUVsQyxNQUFNQyxjQUFjO1lBQ2xCQyxPQUFPSCxRQUFRQyxhQUFhLENBQUMsU0FBU0csV0FBVztZQUNqREMsYUFBYUwsUUFBUUMsYUFBYSxDQUFDLGVBQWVHLFdBQVc7WUFDN0RFLE9BQU9OLFFBQVFDLGFBQWEsQ0FBQyxhQUFhRyxXQUFXO1lBQ3JERyxNQUFNUCxRQUFRQyxhQUFhLENBQUMsUUFBUUcsV0FBVztRQUNqRDtRQUVBLE9BQU9GO0lBQ1QsRUFBRSxPQUFPTSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU87SUFDVDtBQUNGO0FBRUEsZUFBZUUscUJBQXFCbkIsR0FBRztJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRjtRQUM3QixNQUFNRyxVQUFVLE1BQU1GLFNBQVNHLElBQUk7UUFDbkMsTUFBTUMsU0FBUyxJQUFJQztRQUNuQixNQUFNQyxNQUFNRixPQUFPRyxlQUFlLENBQUNMLFNBQVM7UUFDNUMsTUFBTWlCLFFBQVFiLElBQUljLGdCQUFnQixDQUFDO1FBRW5DLE1BQU1DLFdBQVdDLE1BQU1DLElBQUksQ0FBQ0osT0FBT0ssR0FBRyxDQUFDLENBQUNDO1lBQ3RDUixRQUFRUyxHQUFHLENBQUNEO1lBRVosTUFBTUUsZUFBZUYsS0FBS2hCLGFBQWEsQ0FBQztZQUN4QyxNQUFNRSxRQUFRZ0IsZUFBZUEsYUFBYWYsV0FBVyxHQUFHO1lBQ3hELE1BQU1nQixlQUFlakIsTUFBTWtCLEtBQUssQ0FBQztZQUNqQyxNQUFNQyxnQkFBZ0JGLGVBQWVHLFNBQVNILFlBQVksQ0FBQyxFQUFFLElBQUk7WUFFakUsTUFBTUkscUJBQXFCUCxLQUFLaEIsYUFBYSxDQUFDO1lBQzlDLE1BQU1JLGNBQWNtQixxQkFDaEJBLG1CQUFtQnBCLFdBQVcsR0FDOUI7WUFFSixNQUFNcUIsY0FBY1IsS0FBS2hCLGFBQWEsQ0FBQztZQUN2QyxNQUFNTSxPQUFPa0IsY0FBY0EsWUFBWXJCLFdBQVcsR0FBRztZQUVyRCxNQUFNc0IsaUJBQWlCVCxLQUFLaEIsYUFBYSxDQUFDO1lBQzFDLE1BQU0wQixVQUFVRCxpQkFDWkEsZUFBZXRCLFdBQVcsR0FDMUI7WUFFSixNQUFNd0IsbUJBQW1CWCxLQUFLaEIsYUFBYSxDQUFDO1lBQzVDLE1BQU00QixZQUFZRCxtQkFDZDtnQkFDRXJDLEtBQUtxQyxpQkFBaUJFLFlBQVksQ0FBQztnQkFDbkNDLE1BQU1ILGlCQUFpQkUsWUFBWSxDQUFDO1lBQ3RDLElBQ0E7WUFFSixJQUFJRSxXQUFXO1lBQ2YsTUFBTUMsY0FBY2hCLEtBQUtpQixzQkFBc0IsQ0FDN0MsOENBQ0EsUUFDRCxDQUFDLEVBQUU7WUFDSixJQUFJRCxhQUFhO2dCQUNmRCxXQUFXQyxZQUFZSCxZQUFZLENBQUM7WUFDdEM7WUFFQSxJQUFJSyxXQUFXO1lBQ2YsTUFBTUMsaUJBQWlCbkIsS0FBS2lCLHNCQUFzQixDQUNoRCw4Q0FDQSxXQUNELENBQUMsRUFBRTtZQUNKLElBQUlFLGdCQUFnQjtnQkFDbEJELFdBQVdDLGVBQWV6QyxJQUFJO1lBQ2hDO1lBRUEsT0FBTztnQkFDTFEsT0FBT0E7Z0JBQ1BFLGFBQWFBO2dCQUNiRSxNQUFNQTtnQkFDTm9CLFNBQVNBO2dCQUNURSxXQUFXQTtnQkFDWFAsZUFBZUE7Z0JBQ2ZhLFVBQVVBO2dCQUNWSCxVQUFVQTtZQUNaO1FBQ0Y7UUFFQXZCLFFBQVFTLEdBQUcsQ0FBQ0w7UUFDWixPQUFPQTtJQUNULEVBQUUsT0FBT0wsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsb0NBQW9DQTtRQUNsRCxPQUFPLEVBQUU7SUFDWDtBQUNGO0FBRWUsU0FBUzZCLFdBQVc5QyxHQUFHOztJQUNwQyxNQUFNLENBQUNXLGFBQWFvQyxlQUFlLEdBQUdsRCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ21ELGlCQUFpQkMsbUJBQW1CLEdBQUdwRCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ3FELGdCQUFnQkMsa0JBQWtCLEdBQUd0RCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZELE1BQU11RCxZQUFZekQsa0RBQVdBLENBQUM7UUFDNUIsTUFBTTBELFVBQVUsTUFBTXRELGlCQUFpQkM7UUFDdkMsTUFBTXNCLFdBQVcsTUFBTUgscUJBQXFCbkI7UUFDNUMsTUFBTXNELE9BQU8sTUFBTXhELHNEQUFRQSxDQUFDb0QsY0FBYztRQUUxQ2hDLFFBQVFTLEdBQUcsQ0FBQ0w7UUFDWnlCLGVBQWVNO1FBQ2ZKLG1CQUFtQjNCO1FBQ25CNkIsa0JBQWtCRztJQUNwQixHQUFHLEVBQUU7SUFFTDFELGdEQUFTQSxDQUFDO1FBQ1J3RDtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFBQ3pDO1FBQWFxQztRQUFpQkU7S0FBZTtBQUN2RDtHQXJCd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2UtcG9kY2FzdC5qcz9mMzk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzaXRlRGF0YSBmcm9tIFwiLi9qc29uLWRhdGEtYXBpXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUG9kY2FzdERhdGEodXJsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHhtbFRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sVGV4dCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG4gICAgY29uc3QgY2hhbm5lbCA9IHhtbC5xdWVyeVNlbGVjdG9yKFwiY2hhbm5lbFwiKTtcblxuICAgIGNvbnN0IHBvZGNhc3REYXRhID0ge1xuICAgICAgdGl0bGU6IGNoYW5uZWwucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLnRleHRDb250ZW50LFxuICAgICAgZGVzY3JpcHRpb246IGNoYW5uZWwucXVlcnlTZWxlY3RvcihcImRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50LFxuICAgICAgaW1hZ2U6IGNoYW5uZWwucXVlcnlTZWxlY3RvcihcImltYWdlIHVybFwiKS50ZXh0Q29udGVudCxcbiAgICAgIGxpbms6IGNoYW5uZWwucXVlcnlTZWxlY3RvcihcImxpbmtcIikudGV4dENvbnRlbnQsXG4gICAgfTtcblxuICAgIHJldHVybiBwb2RjYXN0RGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcG9kY2FzdCBkYXRhOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hQb2RjYXN0RXBpc29kZXModXJsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHhtbFRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sVGV4dCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG4gICAgY29uc3QgaXRlbXMgPSB4bWwucXVlcnlTZWxlY3RvckFsbChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBlcGlzb2RlcyA9IEFycmF5LmZyb20oaXRlbXMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaXRlbSk7XG5cbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVsZW1lbnQgPyB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgOiBcIlVua25vd24gVGl0bGVcIjtcbiAgICAgIGNvbnN0IGVwaXNvZGVNYXRjaCA9IHRpdGxlLm1hdGNoKC9FcGlzb2RlICMoXFxkKyk6Lyk7XG4gICAgICBjb25zdCBlcGlzb2RlTnVtYmVyID0gZXBpc29kZU1hdGNoID8gcGFyc2VJbnQoZXBpc29kZU1hdGNoWzFdKSA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnRcbiAgICAgICAgPyBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgICAgOiBcIk5vIERlc2NyaXB0aW9uXCI7XG5cbiAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwibGlua1wiKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rRWxlbWVudCA/IGxpbmtFbGVtZW50LnRleHRDb250ZW50IDogXCIjXCI7XG5cbiAgICAgIGNvbnN0IHB1YkRhdGVFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwicHViRGF0ZVwiKTtcbiAgICAgIGNvbnN0IHB1YkRhdGUgPSBwdWJEYXRlRWxlbWVudFxuICAgICAgICA/IHB1YkRhdGVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgIDogXCJVbmtub3duIERhdGVcIjtcblxuICAgICAgY29uc3QgZW5jbG9zdXJlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImVuY2xvc3VyZVwiKTtcbiAgICAgIGNvbnN0IGVuY2xvc3VyZSA9IGVuY2xvc3VyZUVsZW1lbnRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICB1cmw6IGVuY2xvc3VyZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidXJsXCIpLFxuICAgICAgICAgICAgdHlwZTogZW5jbG9zdXJlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xuXG4gICAgICBsZXQgY292ZXJBcnQgPSBudWxsO1xuICAgICAgY29uc3QgaXR1bmVzSW1hZ2UgPSBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMoXG4gICAgICAgIFwiaHR0cDovL3d3dy5pdHVuZXMuY29tL2R0ZHMvcG9kY2FzdC0xLjAuZHRkXCIsXG4gICAgICAgIFwiaW1hZ2VcIlxuICAgICAgKVswXTtcbiAgICAgIGlmIChpdHVuZXNJbWFnZSkge1xuICAgICAgICBjb3ZlckFydCA9IGl0dW5lc0ltYWdlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICB9XG5cbiAgICAgIGxldCBkdXJhdGlvbiA9IG51bGw7XG4gICAgICBjb25zdCBpdHVuZXNEdXJhdGlvbiA9IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhcbiAgICAgICAgXCJodHRwOi8vd3d3Lml0dW5lcy5jb20vZHRkcy9wb2RjYXN0LTEuMC5kdGRcIixcbiAgICAgICAgXCJkdXJhdGlvblwiXG4gICAgICApWzBdO1xuICAgICAgaWYgKGl0dW5lc0R1cmF0aW9uKSB7XG4gICAgICAgIGR1cmF0aW9uID0gaXR1bmVzRHVyYXRpb24udGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGxpbms6IGxpbmssXG4gICAgICAgIHB1YkRhdGU6IHB1YkRhdGUsXG4gICAgICAgIGVuY2xvc3VyZTogZW5jbG9zdXJlLFxuICAgICAgICBlcGlzb2RlTnVtYmVyOiBlcGlzb2RlTnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIGNvdmVyQXJ0OiBjb3ZlckFydCxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhlcGlzb2Rlcyk7XG4gICAgcmV0dXJuIGVwaXNvZGVzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwb2RjYXN0IGVwaXNvZGVzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBvZGNhc3QodXJsKSB7XG4gIGNvbnN0IFtwb2RjYXN0RGF0YSwgc2V0UG9kY2FzdERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbcG9kY2FzdEVwaXNvZGVzLCBzZXRQb2RjYXN0RXBpc29kZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcG9kY2FzdFNlcnZlcnMsIHNldFBvZGNhc3RTZXJ2ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9kY2FzdCA9IGF3YWl0IGZldGNoUG9kY2FzdERhdGEodXJsKTtcbiAgICBjb25zdCBlcGlzb2RlcyA9IGF3YWl0IGZldGNoUG9kY2FzdEVwaXNvZGVzKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHNpdGVEYXRhLnBvZGNhc3RTZXJ2ZXJzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhlcGlzb2Rlcyk7XG4gICAgc2V0UG9kY2FzdERhdGEocG9kY2FzdCk7XG4gICAgc2V0UG9kY2FzdEVwaXNvZGVzKGVwaXNvZGVzKTtcbiAgICBzZXRQb2RjYXN0U2VydmVycyhqc29uKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3BvZGNhc3REYXRhLCBwb2RjYXN0RXBpc29kZXMsIHBvZGNhc3RTZXJ2ZXJzXTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2l0ZURhdGEiLCJmZXRjaFBvZGNhc3REYXRhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsInhtbFRleHQiLCJ0ZXh0IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sIiwicGFyc2VGcm9tU3RyaW5nIiwiY2hhbm5lbCIsInF1ZXJ5U2VsZWN0b3IiLCJwb2RjYXN0RGF0YSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibGluayIsImVycm9yIiwiY29uc29sZSIsImZldGNoUG9kY2FzdEVwaXNvZGVzIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXBpc29kZXMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJpdGVtIiwibG9nIiwidGl0bGVFbGVtZW50IiwiZXBpc29kZU1hdGNoIiwibWF0Y2giLCJlcGlzb2RlTnVtYmVyIiwicGFyc2VJbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJsaW5rRWxlbWVudCIsInB1YkRhdGVFbGVtZW50IiwicHViRGF0ZSIsImVuY2xvc3VyZUVsZW1lbnQiLCJlbmNsb3N1cmUiLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiY292ZXJBcnQiLCJpdHVuZXNJbWFnZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lTlMiLCJkdXJhdGlvbiIsIml0dW5lc0R1cmF0aW9uIiwidXNlUG9kY2FzdCIsInNldFBvZGNhc3REYXRhIiwicG9kY2FzdEVwaXNvZGVzIiwic2V0UG9kY2FzdEVwaXNvZGVzIiwicG9kY2FzdFNlcnZlcnMiLCJzZXRQb2RjYXN0U2VydmVycyIsImZldGNoRGF0YSIsInBvZGNhc3QiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/use-podcast.js\n"));

/***/ })

});