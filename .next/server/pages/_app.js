(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageComponent),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3806);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2522);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_3__.Analytics, {})
        ]
    });
}

var origModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': MyApp
});

/*
 * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the
 * `pages/` directory.
 *
 * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,
 * this causes both TS and ESLint to complain, hence the pragma comments below.
 */

const userPageModule = origModule ;

const pageComponent = userPageModule.default;

const origGetInitialProps = pageComponent.getInitialProps;
const origGetStaticProps = userPageModule.getStaticProps;
const origGetServerSideProps = userPageModule.getServerSideProps;

const getInitialPropsWrappers = {
  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapAppGetInitialPropsWithSentry,
  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapDocumentGetInitialPropsWithSentry,
  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapErrorGetInitialPropsWithSentry,
};

const getInitialPropsWrapper = getInitialPropsWrappers['/_app'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapGetInitialPropsWithSentry;

if (typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_app')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_4__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_app')
    : undefined;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3806:
/***/ (() => {



/***/ }),

/***/ 2522:
/***/ (() => {



/***/ }),

/***/ 8097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,106], () => (__webpack_exec__(5106), __webpack_exec__(3197)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=_app.js.map