"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 1978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ musicthread)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(9755);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./components/svg.js
var svg = __webpack_require__(3386);
;// CONCATENATED MODULE: ./components/musicentry.js



const MusicEntry = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-start md:flex-row",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                className: "rounded-sm",
                src: props.src,
                width: 256,
                height: 256,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-row self-stretch justify-between mt-2 md:flex-col-reverse md:mt-0 md:ml-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-start self-stretch justify-end max-w-256",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            className: "max-w-full md:max-w-256 md:max-h-256",
                            href: props.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            alt: "album artwork",
                            "aria-label": "album artwork",
                            children: [
                                props.title,
                                /*#__PURE__*/ jsx_runtime.jsx(svg/* ArrowExternal */.BX, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "self-stretch text-tertiary dark:text-darkTertiary",
                            children: props.artist
                        })
                    ]
                })
            })
        ]
    });
/* harmony default export */ const musicentry = (MusicEntry);

;// CONCATENATED MODULE: ./components/musicthread.js


const MusicThread = (props)=>{
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const formattedData = props.links.reduce((carry, item)=>{
        const timestamp = new Date(item.submitted_at);
        const monthYearStamp = `${monthNames[timestamp.getMonth()]}, ${timestamp.getFullYear()}`;
        if (monthYearStamp in carry) {
            carry[monthYearStamp].push(item);
        } else {
            carry[monthYearStamp] = [
                item
            ];
        }
        return carry;
    }, {});
    const dateKeys = Object.keys(formattedData);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    props.subtitle,
                    ", powered by",
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://musicthread.app/",
                        children: "MusicThread"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-8",
                children: dateKeys.map((entry, key)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: entry
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-row items-end mt-4 mb-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "self-stretch w-0.5  bg-code dark:bg-darkCode md:-mt-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid gap-8 ml-4 ",
                                        children: formattedData[entry].map((data, key)=>{
                                            return /*#__PURE__*/ jsx_runtime.jsx(musicentry, {
                                                link: data.page_url,
                                                src: data.thumbnail_url,
                                                title: data.title,
                                                artist: data.artist
                                            }, data.key);
                                        })
                                    })
                                ]
                            })
                        ]
                    }, key);
                })
            })
        ]
    });
};
/* harmony default export */ const musicthread = (MusicThread);


/***/ })

};
;
//# sourceMappingURL=978.js.map