export async function getProdutos(email:string) {
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
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form
      })
      const data = await res.json()
      
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
    })

    const res1 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form1
      })
      const data1 = await res1.json()

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
    })

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form2
      })
      const data2 = await res2.json()

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
    })

    const res3 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form3
      })
      const data3 = await res3.json()

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
    })

    const res4 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form4
      })
      const data4 = await res4.json()

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
    })

    const res5 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form5
      })
      const data5 = await res5.json()
    
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
    })

    const res6 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form6
      })
      const data6 = await res6.json()

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
    })

    const res7 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form7
      })
      const data7 = await res7.json()

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
    })

    const res8 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form8
      })
      const data8 = await res8.json()

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
    })

    const res9 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
        },
        body: form9
      })
      const data9 = await res9.json()

      const arry = data.data.produtoDaLoja.produtos.concat(data1.data.produtoDaLoja.produtos,data2.data.produtoDaLoja.produtos,data3.data.produtoDaLoja.produtos,data4.data.produtoDaLoja.produtos,data5.data.produtoDaLoja.produtos,data6.data.produtoDaLoja.produtos,data7.data.produtoDaLoja.produtos,data8.data.produtoDaLoja.produtos,data9.data.produtoDaLoja.produtos)

     

      return arry
}