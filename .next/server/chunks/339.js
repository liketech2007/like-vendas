exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 4874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8715))

/***/ }),

/***/ 4838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("C:\\Users\\Jay-c\\Documents\\like vendas\\like-vendas\\src\\app\\layout.tsx");


/***/ }),

/***/ 8715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(8360);
// EXTERNAL MODULE: ./src/contexts/contextLoja.tsx
var contextLoja = __webpack_require__(3595);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-seo/lib/next-seo.js
var next_seo = __webpack_require__(8733);
;// CONCATENATED MODULE: ./src/components/nextSeo.tsx


function NextSeoLocal() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_seo/* NextSeo */.PB, {
            title: "LIKE VENDAS",
            description: "O Like Vendas \xe9 um site de controle de estoque   desenvolvido por \xd2scar Jeremias, um jovem angolano de 16 anos.    A plataforma foi criada para ajudar empresas a gerenciar    suas vendas e estoque de forma eficiente.   O site apresenta uma interface amig\xe1vel e f\xe1cil de usar, com recursos que permitem   aos usu\xe1rios registrar produtos, gerenciar entradas e sa\xeddas, monitorar n\xedveis    de estoque em tempo real e gerar relat\xf3rios de vendas e estoque.   Em resumo, o Like Vendas \xe9 um site de controle de estoque criado por   um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a   gerenciar suas vendas e estoque de forma eficiente e eficaz.",
            canonical: "like-vendas.vercel.app",
            openGraph: {
                url: "like-vendas.vercel.app",
                title: "LIKE VENDAS",
                description: `O Like Vendas é um site de controle de estoque
                desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
                A plataforma foi criada para ajudar empresas a gerenciar 
                suas vendas e estoque de forma eficiente.
                O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
                aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
                de estoque em tempo real e gerar relatórios de vendas e estoque.
                Em resumo, o Like Vendas é um site de controle de estoque criado por
                um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
                gerenciar suas vendas e estoque de forma eficiente e eficaz.`,
                images: [
                    {
                        url: "https://media.graphassets.com/output=format:jpg/00kwLz9HR6qzC4G7ojl9",
                        width: 800,
                        height: 600,
                        alt: "Logo do LIKE VENDAS",
                        type: "image/jpeg"
                    }
                ],
                siteName: "LIKE VENDAS"
            },
            twitter: {
                handle: "@LIKE VENDAS",
                site: "@like-vendas.vercel.app",
                cardType: `O Like Vendas é um site de controle de estoque
                desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
                A plataforma foi criada para ajudar empresas a gerenciar 
                suas vendas e estoque de forma eficiente.
                O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
                aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
                de estoque em tempo real e gerar relatórios de vendas e estoque.
                Em resumo, o Like Vendas é um site de controle de estoque criado por
                um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
                gerenciar suas vendas e estoque de forma eficiente e eficaz.`
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx





function RootLayout({ children  }) {
    const [loja, setLoja] = (0,react_.useState)({});
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "pt",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "LIkE VENDAS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "O Like Vendas \xe9 um site de controle de estoque   desenvolvido por \xd2scar Jeremias, um jovem angolano de 16 anos.    A plataforma foi criada para ajudar empresas a gerenciar    suas vendas e estoque de forma eficiente.   O site apresenta uma interface amig\xe1vel e f\xe1cil de usar, com recursos que permitem   aos usu\xe1rios registrar produtos, gerenciar entradas e sa\xeddas, monitorar n\xedveis    de estoque em tempo real e gerar relat\xf3rios de vendas e estoque.   Em resumo, o Like Vendas \xe9 um site de controle de estoque criado por   um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a   gerenciar suas vendas e estoque de forma eficiente e eficaz."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: "https://media.graphassets.com/output=format:jpg/00kwLz9HR6qzC4G7ojl9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NextSeoLocal, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(contextLoja/* ContextLoja.Provider */.E.Provider, {
                value: {
                    loja,
                    setLoja
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                    className: "flex flex-col justify-center items-center",
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 3595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ContextLoja)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ContextLoja = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    loja: {},
    setLoja (loja) {}
});


/***/ }),

/***/ 8360:
/***/ (() => {



/***/ })

};
;