"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ VerificarPage)
});

;// CONCATENATED MODULE: ./src/controlles/verificarValidadeDoServico.ts
function verificarValidadeDoServico(dataDeTermino) {
    const data = new Date();
    const newDataDeTermino = new Date(dataDeTermino);
    if (newDataDeTermino >= data) {
        return true;
    } else {
        return false;
    }
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/verificarPage.tsx


function VerificarPage() {
    (0,react_.useEffect)(()=>{
        const res = localStorage.getItem("loja");
        if (res === null) {
            document.location = "/login";
        } else {
            const resLoja = JSON.parse(`${res}`);
            const dataDeTermino = `${resLoja.dataDeIncerramentoDoServico}`;
            const isValidade = verificarValidadeDoServico(dataDeTermino);
            if (isValidade === false) {
                localStorage.clear();
                document.location = "/pagamento";
            }
        }
    }, []);
}


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getProdutos)
/* harmony export */ });
async function getProdutos(email) {
    const form = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
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
    const form1 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 100) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res1 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form1
    });
    const data1 = await res1.json();
    const form2 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 200) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res2 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form2
    });
    const data2 = await res2.json();
    const form3 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 300) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res3 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form3
    });
    const data3 = await res3.json();
    const form4 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 400) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res4 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form4
    });
    const data4 = await res4.json();
    const form5 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 500) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res5 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form5
    });
    const data5 = await res5.json();
    const form6 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 600) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res6 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form6
    });
    const data6 = await res6.json();
    const form7 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 700) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res7 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form7
    });
    const data7 = await res7.json();
    const form8 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 800) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res8 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form8
    });
    const data8 = await res8.json();
    const form9 = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja: "${email}"}) {
            produtos(first: 2000,skip: 900) {
              id
              name
              preco
              quat
              venda(last: 2000) {
                data
                quat
                preco
                total
              }
              entrada(last: 2000) {
                data
                id
                quat
                valorDeAquisicao
                total
              }
            }
          }
        }
        `
    });
    const res9 = await fetch(`${"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf3t977q4d2a01td0x7p5qd2/master"}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg5NTMyMjIsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsZjN0OTc3cTRkMmEwMXRkMHg3cDVxZDIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6Ijc1NTc4NzVmLTAzMTEtNDc0Ni1iOGU0LTM0MDIwZDMzNjQ2ZSIsImp0aSI6ImNsZmF0ZWRjZDI3aWUwMXVwYjZkNWU2bHcifQ.5E1UZmbFSQJgknSIup5_m78yCIOv7aqrLVhzc_ibmhIDWd__bL5h5G4-NIgptuSiFGRPPuOhjpMWMGKeXVLq7UZBpdRqbqXxiPN5IbnAHLthLYnH4GwjlxEUBQ1bfAS8NpqyvKmJktjALwRczFBjVU8q33XO79WtdsyEExKD7kxBjHrvstfSQ7fBmA5d416mvqygyhCSa45Wd02tEOSiRPzSZHHiMr5av_DPEnjix21bfwzRtvFsX3Y_MHDC67EXHCK0n7vvPTFx-6laTOrXk7tY1HzBqNqEHRme-7pkygn7ecyhmyTQAxIoQrGVJ9mo9jo-ByX0CQ96kDf6hujvslxd6IqIw7rGFBNOKqKV-cjkdUZX4KVZmCY5z7t1pOJl5445HojELIBkOqPEUzBU0Rh7OW9BmAQItlFFXA19qFNxT3vs79B6mva2OMbxkAbrullHVRmXD5ktePosxsoKkUoJdgK_-5l9a305z4ZCBUcL__ak270j4G_tsYfu1EOEUGSzsqhZuQdF--Amo4u0nSXo9SiAxa2M1nvqfvH2OyTIIBIuY9NGkDBGj8vo6XKuHeHWVqgMXpB561bC29b-B3uSC5XUAfQwbji9GZIonsl4SZ5adLhs8-Nb_weZ0mzlKhTJdiLyp0zH0GYIAfYcl2_MNToC-whTaI5Ocpub5OE"}`
        },
        body: form9
    });
    const data9 = await res9.json();
    const arry = data.data.produtoDaLoja.produtos.concat(data1.data.produtoDaLoja.produtos, data2.data.produtoDaLoja.produtos, data3.data.produtoDaLoja.produtos, data4.data.produtoDaLoja.produtos, data5.data.produtoDaLoja.produtos, data6.data.produtoDaLoja.produtos, data7.data.produtoDaLoja.produtos, data8.data.produtoDaLoja.produtos, data9.data.produtoDaLoja.produtos);
    return arry;
}


/***/ })

};
;