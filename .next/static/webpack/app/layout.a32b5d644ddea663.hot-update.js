"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"da6040110185\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2JiNTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYTYwNDAxMTAxODVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/AddToFavorites.tsx":
/*!***************************************!*\
  !*** ./components/AddToFavorites.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToFavorites; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/StarIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/StarIcon.js\");\n/* harmony import */ var _heroicons_react_20_solid_esm_StarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/20/solid/esm/StarIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/20/solid/esm/StarIcon.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddToFavorites(param) {\n    let { productId } = param;\n    var _session;\n    _s();\n    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [favorite, setFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const id = (_session = session) === null || _session === void 0 ? void 0 : _session.user.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const evalFavorite = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/favorites/isFavorite?userId=\".concat(id, \"&productId=\").concat(productId)).then((res)=>{\n                setFavorite(res.data.favorite);\n                console.log(res.data.favorite);\n                if (res.data.favorite && res.data.favorite._id === productId) {\n                    setIsFavorite(true);\n                }\n            });\n        };\n        evalFavorite();\n    }, [\n        id,\n        productId\n    ]);\n    const addToFavorite = async ()=>{\n        if (!isFavorite) {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/favorites?userId=\".concat(id), productId).then(()=>setIsFavorite(true));\n        }\n    };\n    const deleteToFavorite = async ()=>{\n        var _favorite;\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/favorites/isFavorite?userId=\".concat(id, \"&productId=\").concat((_favorite = favorite) === null || _favorite === void 0 ? void 0 : _favorite._id)).then(()=>setIsFavorite(false));\n    };\n    return session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid justify-items-end mr-12 mt-6\",\n        children: !isFavorite ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"h-10 w-10 cursor-pointer mb-6 text-amber-500\",\n            onClick: ()=>addToFavorite\n        }, void 0, false, {\n            fileName: \"/project/Ecommerce-Tickets/components/AddToFavorites.tsx\",\n            lineNumber: 49,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_20_solid_esm_StarIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"h-10 w-10 cursor-pointer mb-6 text-amber-500\",\n            onClick: ()=>{}\n        }, void 0, false, {\n            fileName: \"/project/Ecommerce-Tickets/components/AddToFavorites.tsx\",\n            lineNumber: 54,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/project/Ecommerce-Tickets/components/AddToFavorites.tsx\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, this);\n}\n_s(AddToFavorites, \"qigT3A0vMnWpuBxqVaTx08KO/uA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = AddToFavorites;\nvar _c;\n$RefreshReg$(_c, \"AddToFavorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWRkVG9GYXZvcml0ZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1c7QUFDVztBQUNyQjtBQUNuQjtBQUdYLFNBQVNNLGVBQWUsS0FBb0M7UUFBcEMsRUFBRUMsU0FBUyxFQUF5QixHQUFwQztRQUkxQkM7O0lBSFgsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBc0I7SUFDOUQsTUFBTSxFQUFFWSxNQUFNTCxPQUFPLEVBQUUsR0FBUUosMkRBQVVBO0lBQ3pDLE1BQU1VLE1BQUtOLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU08sSUFBSSxDQUFDRCxFQUFFO0lBRTNCZCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixlQUFlO1lBQ25CLE1BQU1YLDZDQUFLQSxDQUNSWSxHQUFHLENBQUMsb0NBQW9EVixPQUFoQk8sSUFBRyxlQUF1QixPQUFWUCxZQUN4RFcsSUFBSSxDQUFDLENBQUNDO2dCQUNMUCxZQUFZTyxJQUFJTixJQUFJLENBQUNGLFFBQVE7Z0JBQzdCUyxRQUFRQyxHQUFHLENBQUNGLElBQUlOLElBQUksQ0FBQ0YsUUFBUTtnQkFDN0IsSUFBSVEsSUFBSU4sSUFBSSxDQUFDRixRQUFRLElBQUlRLElBQUlOLElBQUksQ0FBQ0YsUUFBUSxDQUFDVyxHQUFHLEtBQUtmLFdBQVc7b0JBQzVERyxjQUFjO2dCQUNoQjtZQUNGO1FBQ0o7UUFDQU07SUFDRixHQUFHO1FBQUNGO1FBQUlQO0tBQVU7SUFFbEIsTUFBTWdCLGdCQUFnQjtRQUNwQixJQUFJLENBQUNkLFlBQVk7WUFDZixNQUFNSiw2Q0FBS0EsQ0FDUm1CLElBQUksQ0FBQyx5QkFBNEIsT0FBSFYsS0FBTVAsV0FDcENXLElBQUksQ0FBQyxJQUFNUixjQUFjO1FBQzlCO0lBQ0Y7SUFFQSxNQUFNZSxtQkFBbUI7WUFHaUNkO1FBRnhELE1BQU1OLDZDQUFLQSxDQUNScUIsTUFBTSxDQUNMLDJDQUFvQ1osSUFBRyxlQUEyQixRQUFkSCxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVXLEdBQUcsR0FFbEVKLElBQUksQ0FBQyxJQUFNUixjQUFjO0lBQzlCO0lBRUEsT0FDRUYseUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVO2tCQUNaLENBQUNuQiwyQkFDQSw4REFBQ1AsZ0ZBQVFBO1lBQ1AwQixXQUFVO1lBQ1ZDLFNBQVMsSUFBTU47Ozs7O2lDQUdqQiw4REFBQ3BCLDhFQUFTQTtZQUNSeUIsV0FBVTtZQUNWQyxTQUFTLEtBQU87Ozs7Ozs7Ozs7O0FBTTVCO0dBdER3QnZCOztRQUdTRix1REFBVUE7OztLQUhuQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb0Zhdm9yaXRlcy50c3g/MDU1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiBhcyBTdGFySWNvbjIgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEZhdm9yaXRlVHlwZSB9IGZyb20gXCIuL0Zhdm9yaXRlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9GYXZvcml0ZXMoeyBwcm9kdWN0SWQgfTogeyBwcm9kdWN0SWQ6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgW2lzRmF2b3JpdGUsIHNldElzRmF2b3JpdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmYXZvcml0ZSwgc2V0RmF2b3JpdGVdID0gdXNlU3RhdGU8RmF2b3JpdGVUeXBlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH06IGFueSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBpZCA9IHNlc3Npb24/LnVzZXIuaWQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBldmFsRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgL2FwaS9mYXZvcml0ZXMvaXNGYXZvcml0ZT91c2VySWQ9JHtpZH0mcHJvZHVjdElkPSR7cHJvZHVjdElkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0RmF2b3JpdGUocmVzLmRhdGEuZmF2b3JpdGUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZmF2b3JpdGUpO1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmZhdm9yaXRlICYmIHJlcy5kYXRhLmZhdm9yaXRlLl9pZCA9PT0gcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgIHNldElzRmF2b3JpdGUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZXZhbEZhdm9yaXRlKCk7XHJcbiAgfSwgW2lkLCBwcm9kdWN0SWRdKTtcclxuXHJcbiAgY29uc3QgYWRkVG9GYXZvcml0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghaXNGYXZvcml0ZSkge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAvYXBpL2Zhdm9yaXRlcz91c2VySWQ9JHtpZH1gLCBwcm9kdWN0SWQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0SXNGYXZvcml0ZSh0cnVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVG9GYXZvcml0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5kZWxldGUoXHJcbiAgICAgICAgYC9hcGkvZmF2b3JpdGVzL2lzRmF2b3JpdGU/dXNlcklkPSR7aWR9JnByb2R1Y3RJZD0ke2Zhdm9yaXRlPy5faWR9YCxcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoKSA9PiBzZXRJc0Zhdm9yaXRlKGZhbHNlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHNlc3Npb24gJiYgKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQganVzdGlmeS1pdGVtcy1lbmQgbXItMTIgbXQtNlwiPlxyXG4gICAgICAgIHshaXNGYXZvcml0ZSA/IChcclxuICAgICAgICAgIDxTdGFySWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgY3Vyc29yLXBvaW50ZXIgbWItNiB0ZXh0LWFtYmVyLTUwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRvRmF2b3JpdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U3Rhckljb24yXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCBjdXJzb3ItcG9pbnRlciBtYi02IHRleHQtYW1iZXItNTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3Rhckljb24iLCJTdGFySWNvbjIiLCJ1c2VTZXNzaW9uIiwiYXhpb3MiLCJBZGRUb0Zhdm9yaXRlcyIsInByb2R1Y3RJZCIsInNlc3Npb24iLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsImZhdm9yaXRlIiwic2V0RmF2b3JpdGUiLCJkYXRhIiwiaWQiLCJ1c2VyIiwiZXZhbEZhdm9yaXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJhZGRUb0Zhdm9yaXRlIiwicG9zdCIsImRlbGV0ZVRvRmF2b3JpdGUiLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AddToFavorites.tsx\n"));

/***/ })

});