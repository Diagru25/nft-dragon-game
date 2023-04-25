(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/header/Header.tsx

function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed top-0 left-0 w-full flex justify-between items-center px-8 py-2 bg-sky-600 z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "https://aishibaog.xyz/static/media/logo.adf6243f.png",
                    alt: "img",
                    width: 60,
                    height: 60
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-8 pr-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "AirDrop"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "Perks"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "Staking"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "Tokenomics"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-white hover:cursor-pointer",
                                children: "Roadmap"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "text-white shadow-md p-2 rounded-md hover:bg-blue-800",
                        style: {
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
                        },
                        children: "CONNECT WALLET"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx


function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            props.children
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(927));
module.exports = __webpack_exports__;

})();