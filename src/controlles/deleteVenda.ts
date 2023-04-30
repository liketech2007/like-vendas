export async function  deleteVenda(id: any,email:any,idVenda:any) {
    const form = JSON.stringify({
        query:`mutation MyMutation {
            updateProdutoDaLoja(
              data: {produtos: {update: {where: {id: "${id}"}, data: {venda: {delete: {id: "${idVenda}"}}}}}}
              where: {emailDaLoja: "${email}"}
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