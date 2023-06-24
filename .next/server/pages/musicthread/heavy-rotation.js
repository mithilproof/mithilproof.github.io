"use strict";
(() => {
var exports = {};
exports.id = 171;
exports.ids = [171,820];
exports.modules = {

/***/ 4576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/musicthread/heavy-rotation.js
var heavy_rotation_namespaceObject = {};
__webpack_require__.r(heavy_rotation_namespaceObject);
__webpack_require__.d(heavy_rotation_namespaceObject, {
  "default": () => (pageComponent),
  getServerSideProps: () => (getServerSideProps),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(6041);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(3593);
// EXTERNAL MODULE: ./components/musicthread.js + 1 modules
var musicthread = __webpack_require__(1978);
// EXTERNAL MODULE: external "@sentry/nextjs"
var nextjs_ = __webpack_require__(8097);
;// CONCATENATED MODULE: ./pages/musicthread/heavy-rotation.js






const HeavyRotation = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(seo/* default */.Z, {
                title: "Heavy Rotation",
                og: "heavyrotationog.png",
                description: `${data.thread.description}, powered by musicthread.app.`
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(musicthread/* default */.Z, {
                links: data.links,
                title: "Heavy Rotation",
                subtitle: data.thread.description
            })
        ]
    });
async function getStaticProps$1() {
    const res = await fetch(`https://musicthread.app/api/v0/thread/1mhhP6pYnnOic8X8SvzJxPsikRU`);
    const data = await res.json();
    return {
        revalidate: 60 * 60 * 6,
        props: {
            data
        }
    };
}

var origModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getStaticProps: getStaticProps$1,
    'default': HeavyRotation
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
  '/_app': nextjs_.wrapAppGetInitialPropsWithSentry,
  '/_document': nextjs_.wrapDocumentGetInitialPropsWithSentry,
  '/_error': nextjs_.wrapErrorGetInitialPropsWithSentry,
};

const getInitialPropsWrapper = getInitialPropsWrappers['/musicthread/heavy-rotation'] || nextjs_.wrapGetInitialPropsWithSentry;

if (typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? nextjs_.wrapGetStaticPropsWithSentry(origGetStaticProps, '/musicthread/heavy-rotation')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? nextjs_.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/musicthread/heavy-rotation')
    : undefined;



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fmusicthread%2Fheavy-rotation&absolutePagePath=private-next-pages%2Fmusicthread%2Fheavy-rotation.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_ = ((0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_getStaticProps = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fmusicthread_2Fheavy_rotation_absolutePagePath_private_next_pages_2Fmusicthread_2Fheavy_rotation_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(heavy_rotation_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/musicthread/heavy-rotation","pathname":"/musicthread/heavy-rotation","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: heavy_rotation_namespaceObject })
        
        
    

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,308,755,106,869,978], () => (__webpack_exec__(5106), __webpack_exec__(4576)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=heavy-rotation.js.map