export async function  createEntrada({preco,quat,email,id,quatTotal}:any) {
    const date = new Date()
    const form = JSON.stringify({
        query:`mutation MyMutation {
          updateProdutoDaLoja(
            where: {emailDaLoja:"${email}"}
            data: {produtos: {update: {where: {id: "${id}"}, data: {entrada: {create: {data: {data: "${date}", quat: "${quat}", valorDeAquisicao: "${preco}", total: "${Number(preco) * Number(quat)}"}}}}}}}
          ) {
            id
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