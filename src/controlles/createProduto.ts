interface IProduto {
    name: string;
    preco: string;
    quat: string;
    emailDaLoja: string;
}

export async function createProduto({ name,preco,quat,emailDaLoja}:IProduto) {
    const form = JSON.stringify({
        query:`        
      mutation MyMutation {
        updateProdutoDaLoja(
          data: {produtos: {create: {data: {name: "${name.toLowerCase()}", preco: "${preco}", quat: "${quat}"}}}}
          where: {emailDaLoja: "${emailDaLoja}"}
        ) {
          produtos(first: 2000)  {
            id
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
    
      return data.data
}