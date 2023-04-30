export async function getProduto(id:any,email:any) {
    const form = JSON.stringify({
        query: `
        query MyQuery {
          produtoDaLoja(where: {emailDaLoja:"${email}"}) {
            produtos(where: {id:"${id}"}) {
              name
              preco
              quat
              id
              venda(last: 2000) {
                id
                quat
                preco
                data
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
    return data.data.produtoDaLoja.produtos
}