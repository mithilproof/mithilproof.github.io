"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922,820];
exports.modules = {

/***/ 7513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageComponent),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4818);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9961);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_mdxUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1618);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3593);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6041);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_postutils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7075);
/* harmony import */ var _components_tool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8257);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const components = {
    Image: (next_legacy_image__WEBPACK_IMPORTED_MODULE_9___default()),
    a: _components_postutils__WEBPACK_IMPORTED_MODULE_10__/* .CustomLink */ .x,
    hr: _components_postutils__WEBPACK_IMPORTED_MODULE_10__/* .HorizontalRule */ .b,
    br: _components_postutils__WEBPACK_IMPORTED_MODULE_10__.Br,
    Tool: _components_tool__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
};
function Posts({ source , frontMatter  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_seo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: frontMatter.title,
                og: frontMatter.og,
                description: frontMatter.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, {
                    ...source,
                    components: components
                })
            })
        ]
    });
}
const getStaticProps$1 = async ({ params  })=>{
    const postFilePath = path__WEBPACK_IMPORTED_MODULE_5___default().join(_lib_mdxUtils__WEBPACK_IMPORTED_MODULE_6__/* .POSTS_PATH */ .j, `${params.slug}.mdx`);
    const source = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(postFilePath);
    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__.serialize)(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        },
        scope: data
    });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = _lib_mdxUtils__WEBPACK_IMPORTED_MODULE_6__/* .postFilePaths */ .B// Remove file extensions for page paths
    .map((path)=>path.replace(/\.mdx?$/, ""))// Map the path into the static paths object required by Next.js
    .map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

var origModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Posts,
    getStaticProps: getStaticProps$1,
    getStaticPaths: getStaticPaths
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
  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapAppGetInitialPropsWithSentry,
  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapDocumentGetInitialPropsWithSentry,
  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapErrorGetInitialPropsWithSentry,
};

const getInitialPropsWrapper = getInitialPropsWrappers['/posts/[slug]'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapGetInitialPropsWithSentry;

if (typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/posts/[slug]')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_12__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/posts/[slug]')
    : undefined;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/posts/[slug]","pathname":"/posts/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_posts_slug_js__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Br: () => (/* binding */ Br),
/* harmony export */   b: () => (/* binding */ HorizontalRule),
/* harmony export */   x: () => (/* binding */ CustomLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const CustomLink = (props)=>{
    const href = props.href;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        ...props
    });
};
const Br = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-4"
    });
const HorizontalRule = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-row content-center justify-center my-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-tertiary dark:text-darkTertiary opacity-40",
            children: "\xb7 \xb7 \xb7 \xb7"
        })
    });


/***/ }),

/***/ 8257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3386);


const Tool = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-start py-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "flex flex-row items-center",
                href: props.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    props.name,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg__WEBPACK_IMPORTED_MODULE_1__/* .ArrowExternal */ .BX, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-tertiary dark:text-darkTertiary",
                children: props.description
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tool);


/***/ }),

/***/ 1618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ postFilePaths),
/* harmony export */   j: () => (/* binding */ POSTS_PATH)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "/data/posts");
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH)// Only include md(x) files
.filter((path)=>/\.mdx?$/.test(path));


/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,308,755,106,869], () => (__webpack_exec__(5106), __webpack_exec__(3543)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[slug].js.map