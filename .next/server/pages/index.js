"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
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
;// CONCATENATED MODULE: ./components/section.js

const Section = ({ title , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "mb-4 text-base",
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/post.js


const Post = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-118-auto",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: " text-tertiary dark:text-darkTertiary",
                children: props.date
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                as: `posts/${props.href}`,
                href: "posts/[slug]",
                className: "text-secondary dark:text-darkSecondary",
                children: props.title
            })
        ]
    });
/* harmony default export */ const components_post = (Post);
const Feature = (props)=>/*#__PURE__*/ _jsxs("div", {
        className: "grid grid-cols-118-auto",
        children: [
            /*#__PURE__*/ _jsx("p", {
                className: " text-tertiary dark:text-darkTertiary",
                children: props.date
            }),
            /*#__PURE__*/ _jsx(Link, {
                href: props.href,
                className: "text-secondary dark:text-darkSecondary",
                children: props.title
            })
        ]
    });

;// CONCATENATED MODULE: ./components/project.js


const Project = (props)=>/*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: props.link,
                passHref: true,
                children: props.title
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "text-tertiary dark:text-darkTertiary",
                children: props.description
            })
        ]
    });
/* harmony default export */ const project = ((/* unused pure expression or super */ null && (Project)));
const ExternalProject = (props)=>/*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ _jsx("a", {
                href: props.link,
                children: props.title
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "text-tertiary dark:text-darkTertiary",
                children: props.description
            })
        ]
    });
const MultiProject = (props)=>/*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx(Link, {
                        href: props.link1,
                        passHref: true,
                        className: "inline",
                        children: props.title1
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "inline mx-3",
                        children: " \xb7 "
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: props.link2,
                        passHref: true,
                        className: "inline",
                        children: props.title2
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "inline mx-3",
                        children: " \xb7 "
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: props.link3,
                        passHref: true,
                        className: "inline",
                        children: props.title3
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "text-tertiary dark:text-darkTertiary",
                children: props.description
            })
        ]
    });

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./lib/mdxUtils.js
var mdxUtils = __webpack_require__(1618);
// EXTERNAL MODULE: external "@sentry/nextjs"
var nextjs_ = __webpack_require__(8097);
;// CONCATENATED MODULE: ./pages/index.js














const IndexPage = ({ posts  })=>{
    const orderedPosts = posts.sort((a, b)=>Number(new Date(b.data.modified)) - Number(new Date(a.data.modified)));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(seo/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid max-w-full gap-16 auto-rows-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "mt-8 md:mt-4",
                                children: [
                                    "I'm the founder and CEO of ",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        className: "text-tertiary dark:text-darkTertiary",
                                        href: "https://oleic.co",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Oleic"
                                    }),
                                    "."
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(section, {
                            title: "Contact",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-row self-stretch justify-between sm:justify-start ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        className: "sm:mr-8 text-tertiary dark:text-darkTertiary",
                                        href: "mailto:mithil@duck.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        className: "sm:mr-8 text-tertiary dark:text-darkTertiary",
                                        href: "https://twitter.com/mithilproof",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Twitter"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        className: "sm:mr-8 text-tertiary dark:text-darkTertiary",
                                        href: "https://github.com/mithilproof",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "GitHub"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        className: "sm:mr-8 text-tertiary dark:text-darkTertiary",
                                        href: "https://dribbble.com/mithilproof/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Dribbble"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(section, {
                            title: "Writing",
                            children: orderedPosts.map((post, key)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_post, {
                                        title: post.data.title,
                                        date: post.data.date,
                                        href: `${post.filePath.replace(/\.mdx?$/, "")}`
                                    }, key)
                                });
                            })
                        })
                    ]
                })
            ]
        })
    });
};
function getStaticProps$1() {
    const posts = mdxUtils/* postFilePaths */.B.map((filePath)=>{
        const source = external_fs_default().readFileSync(external_path_default().join(mdxUtils/* POSTS_PATH */.j, filePath));
        const { data  } = external_gray_matter_default()(source);
        return {
            data,
            filePath
        };
    });
    return {
        props: {
            posts
        }
    };
}

var origModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': IndexPage,
    getStaticProps: getStaticProps$1
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

const getInitialPropsWrapper = getInitialPropsWrappers['/'] || nextjs_.wrapGetInitialPropsWithSentry;

if (typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? nextjs_.wrapGetStaticPropsWithSentry(origGetStaticProps, '/')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? nextjs_.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/')
    : undefined;



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,106,869], () => (__webpack_exec__(5106), __webpack_exec__(7355)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=index.js.map