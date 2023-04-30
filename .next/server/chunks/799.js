exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 6547:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2054));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3716, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2918))

/***/ }),

/***/ 8428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ MainPageLogin */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("C:\\Users\\Jay-c\\Documents\\like vendas\\like-vendas\\src\\components\\mainPageLogin.tsx");


/***/ }),

/***/ 2918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MainPageLogin": () => (/* binding */ MainPageLogin)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/input.tsx
var input = __webpack_require__(643);
// EXTERNAL MODULE: ./src/components/buttonSecond.tsx
var buttonSecond = __webpack_require__(2940);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/phosphor-react/dist/phosphor-react.cjs.production.min.js
var phosphor_react_cjs_production_min = __webpack_require__(5849);
;// CONCATENATED MODULE: ./src/components/inputPassword.tsx




function InputPassword({ isLogin , text , setPassword  }) {
    const [isEye, setIsEye] = (0,react_.useState)(false);
    const [value, setValue] = (0,react_.useState)("");
    const [typeInput, setTypeInput] = (0,react_.useState)("password");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-[300px] flex flex-col gap-4 items-end",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex gap-2 border-b border-black",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: typeInput,
                        value: value,
                        placeholder: text,
                        onChange: async (e)=>{
                            setValue(e.target.value);
                            setPassword(e.target.value);
                        },
                        className: "p-3 outline-none w-[80%]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[20%]",
                        children: isEye === false ? /*#__PURE__*/ jsx_runtime_.jsx(phosphor_react_cjs_production_min/* EyeClosed */.MuW, {
                            size: 32,
                            onClick: ()=>{
                                setIsEye(true);
                                setTypeInput("text");
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(phosphor_react_cjs_production_min/* Eye */.bAj, {
                            size: 32,
                            onClick: ()=>{
                                setIsEye(false);
                                setTypeInput("password");
                            }
                        })
                    })
                ]
            }),
            isLogin == true ? /*#__PURE__*/ jsx_runtime_.jsx(buttonSecond/* ButtonSecond */.i, {
                text: "Esquece a minha senha",
                url: "/esquece-senha",
                sizeText: "text-xs"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs font-light",
                children: "Letra maiuscula no inicio e pelo menos um n\xfamero"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/controlles/createLoja.ts
async function createLoja({ name , email , password , idLogo  }) {
    const dataDeEscricaoDoServico = new Date();
    const date = new Date();
    const diasDeServico = 30;
    date.setDate(date.getDate() + diasDeServico);
    const form = JSON.stringify({
        query: `mutation MyMutation {
            createLoja(
              data: {emailDaLoja: "${email}", nomeDaLoja: "${name}", senha: "${password}", dataDeEscricaoDoServico: "${dataDeEscricaoDoServico}", dataDeIncerramentoDoServico: "${date}", validadeDoServico: "true"}
            ) {
              id
              nomeDaLoja
              senha
              validadeDoServico
              dataDeEscricaoDoServico
              dataDeIncerramentoDoServico
              emailDaLoja
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
    return data.data;
}

;// CONCATENATED MODULE: ./src/utils/checkEmail.ts
function checkEmail(email) {
    const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const check = exp.test(email);
    return check;
}

;// CONCATENATED MODULE: ./src/utils/checkPassword.ts
function checkPassword(password) {
    const exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const check = exp.test(password);
    return check;
}

;// CONCATENATED MODULE: ./src/controlles/loginLoja.ts
async function loginLoja(email) {
    const form = JSON.stringify({
        query: `
      query MyQuery {
        lojas(where: {emailDaLoja:"${email}"}) {
          id
          senha
          nomeDaLoja
          emailDaLoja
          dataDeEscricaoDoServico
          dataDeIncerramentoDoServico
          validadeDoServico
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
    const loja = data.data.lojas;
    return loja[0];
}

// EXTERNAL MODULE: ./src/controlles/verificarEmail.ts
var verificarEmail = __webpack_require__(5320);
// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(9872);
var crypto_js_default = /*#__PURE__*/__webpack_require__.n(crypto_js);
;// CONCATENATED MODULE: ./src/controlles/encryptoPassword.ts

function encryptoPassword(password) {
    return crypto_js_default().enc.Base64.stringify(crypto_js_default().enc.Utf8.parse(password));
}

// EXTERNAL MODULE: ./src/contexts/contextLoja.tsx
var contextLoja = __webpack_require__(3595);
;// CONCATENATED MODULE: ./src/controlles/createInitialProduto.ts
async function createInitialProduto(email) {
    const form = JSON.stringify({
        query: `
        mutation MyMutation {
          createProdutoDaLoja(data: {emailDaLoja:"${email}"}) {
            id
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
}

;// CONCATENATED MODULE: ./src/components/mainPageLogin.tsx















function MainPageLogin({ heading , paragrh , url , isLogin  }) {
    const [email, setEmail] = (0,react_.useState)("");
    const [password, setPassword] = (0,react_.useState)("");
    const [name, setName] = (0,react_.useState)("");
    const [file, setFile] = (0,react_.useState)("");
    const [load, setLoad] = (0,react_.useState)(false);
    const [err, setErr] = (0,react_.useState)(false);
    const { loja , setLoja  } = (0,react_.useContext)(contextLoja/* ContextLoja */.E);
    (0,react_.useEffect)(()=>{
        localStorage.setItem("loja", JSON.stringify(loja));
    }, [
        loja
    ]);
    async function senLoja() {
        const checkemail = checkEmail(email);
        const checkpassword = checkPassword(password);
        if (checkemail == false || checkpassword == false || name.length == 0) {
            setErr(true);
            setErr("Para continuar o cadastro deves preencher todos os campos acima correctamente!");
        } else {
            setErr(false);
            setLoad(true);
            const verificaremail = await (0,verificarEmail/* verificarEmail */.u)(email);
            if (verificaremail != undefined) {
                setErr(true);
                setErr("J\xe1 exite uma loja cadastrada com esse email");
                setLoad(false);
            } else {
                setErr(false);
                const passwordEncrypto = encryptoPassword(password);
                const res = await createLoja({
                    name,
                    email,
                    password: passwordEncrypto,
                    idLogo: file
                });
                setLoja(res.createLoja);
                await createInitialProduto(`${res.createLoja.emailDaLoja}`);
                document.location = `/${res.createLoja.emailDaLoja}/dashbord`;
            }
            setLoad(false);
        }
    }
    async function login() {
        const checkemail = checkEmail(email);
        const checkpassword = checkPassword(password);
        if (checkemail == false || checkpassword == false) {
            setErr(true);
            setErr("Para fazer o login deves preencher todos os campos acima correctamente!");
        } else {
            setLoad(true);
            setErr(false);
            const res = await loginLoja(email);
            if (res === undefined) {
                setErr(true);
                setErr("N\xe3o exite nenhuma loja cadastrada com este email e senha");
                setLoad(false);
            } else {
                setLoja(res);
                document.location = `/${res.emailDaLoja}/dashbord`;
            }
            setLoad(false);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "w-full p-3  md:flex md:justify-center md:items-center md:h-[60vh]",
        children: isLogin === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl my-10",
                    children: heading
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-20 mb-16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                    typeInput: "email",
                                    text: "Email",
                                    setValue: setEmail
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(InputPassword, {
                                    text: "Senha",
                                    isLogin: true,
                                    setPassword: setPassword
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-[200px] flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all",
                                    onClick: login,
                                    children: "Entrar"
                                }),
                                load && /*#__PURE__*/ jsx_runtime_.jsx(phosphor_react_cjs_production_min/* Spinner */.$jN, {
                                    size: 32,
                                    className: "animate-spin"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center my-6",
                    children: err && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[300px] text-xs text-center",
                        children: err
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: url,
                    className: "text-blue-500 text-xs hover:text-black transition-all my-10 self-start",
                    children: paragrh
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-3xl my-10",
                        children: heading
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-center items-center gap-10 md:flex-row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col gap-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                                typeInput: "email",
                                                text: "Email",
                                                setValue: setEmail
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(InputPassword, {
                                                text: "Senha",
                                                isLogin: false,
                                                setPassword: setPassword
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col gap-10",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                            typeInput: "text",
                                            text: "Nome da Loja",
                                            setValue: setName
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center my-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-[200px] flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all",
                                            onClick: senLoja,
                                            children: "Criar conta"
                                        }),
                                        load && /*#__PURE__*/ jsx_runtime_.jsx(phosphor_react_cjs_production_min/* Spinner */.$jN, {
                                            size: 32,
                                            className: "animate-spin"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-center my-6",
                        children: err && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-[300px] text-xs text-center",
                            children: err
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: url,
                        className: "text-blue-500 text-xs hover:text-black transition-all my-10 self-start",
                        children: paragrh
                    })
                ]
            })
        })
    });
}


/***/ })

};
;