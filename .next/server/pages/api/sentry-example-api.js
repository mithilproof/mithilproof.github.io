"use strict";
(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 8097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 4650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ wrappedHandler$1)
/* harmony export */ });
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);


// A faulty API route to test Sentry's error monitoring
function handler(_req, res) {
    throw new Error("Sentry Example API Route Error");
}

var origModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': handler
});

/*
 * This file is a template for the code which will be substituted when our webpack loader handles API files in the
 * `pages/` directory.
 *
 * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,
 * this causes both TS and ESLint to complain, hence the pragma comments below.
 */

const userApiModule = origModule ;

// Default to undefined. It's possible for Next.js users to not define any exports/handlers in an API route. If that is
// the case Next.js wil crash during runtime but the Sentry SDK should definitely not crash so we need tohandle it.
let userProvidedHandler = undefined;

if ('default' in userApiModule && typeof userApiModule.default === 'function') {
  // Handle when user defines via ESM export: `export default myFunction;`
  userProvidedHandler = userApiModule.default;
} else if (typeof userApiModule === 'function') {
  // Handle when user defines via CJS export: "module.exports = myFunction;"
  userProvidedHandler = userApiModule;
}

const origConfig = userApiModule.config || {};

// Setting `externalResolver` to `true` prevents nextjs from throwing a warning in dev about API routes resolving
// without sending a response. It's a false positive (a response is sent, but only after we flush our send queue), and
// we throw a warning of our own to tell folks that, but it's better if we just don't have to deal with it in the first
// place.
const config = {
  ...origConfig,
  api: {
    ...origConfig.api,
    externalResolver: true,
  },
};

let wrappedHandler = userProvidedHandler;

if (wrappedHandler) {
  wrappedHandler = _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapApiHandlerWithSentry(wrappedHandler, '/api/sentry-example-api');
}

if (wrappedHandler && undefined) {}

const wrappedHandler$1 = wrappedHandler;




/***/ }),

/***/ 6115:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
var _sentryCollisionFreeGlobalObject = "undefined" === "undefined" ? global : window;
_sentryCollisionFreeGlobalObject["__sentryRewritesTunnelPath__"] = "/monitoring";
_sentryCollisionFreeGlobalObject["SENTRY_RELEASE"] = {
    "id": "UsB4kd93JH2R3DhPEGD3R"
};
_sentryCollisionFreeGlobalObject["__rewriteFramesDistDir__"] = ".next";
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({
    dsn: "https://4c6d6212510b4cc69eff28705edeedea@o1430018.ingest.sentry.io/4505414371704832",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6115), __webpack_exec__(4650));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=sentry-example-api.js.map