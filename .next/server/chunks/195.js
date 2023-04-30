"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Header1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4458);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3428);
/* harmony import */ var _buttonSecond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2153);



function Header1() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "w-full p-3 flex items-center justify-between md:w-[80%] md:py-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_1__/* .Logo */ .T, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-end gap-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttonSecond__WEBPACK_IMPORTED_MODULE_2__/* .ButtonSecond */ .i, {
                    text: "Sobre n\xf3s",
                    url: "/sobre-nos"
                })
            })
        ]
    });
}


/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ButtonSecond)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function ButtonSecond({ text , url , sizeText  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: url,
        className: "py-2 px-6 border border-t-0 border-l-0 border-r-0 border-b-1 rounded-lg boder-blue-500 hover:bg-blue-500 hover:text-white transition-all " + sizeText,
        children: text
    });
}


/***/ }),

/***/ 5320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ verificarEmail)
/* harmony export */ });
async function verificarEmail(email) {
    const form = JSON.stringify({
        query: `
        query MyQuery {
          lojas {
            id
            emailDaLoja
            senha
          }
        }
    `
    });
    const res = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form
    });
    const data = await res.json();
    const lojas = data.data.lojas;
    const emailExiste = lojas.find((loja)=>{
        return loja.emailDaLoja === email;
    });
    return emailExiste;
}


/***/ })

};
;