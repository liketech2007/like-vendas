export async function  deleteEntrada(id: any,email:any,idEntrada:any) {
    const form = JSON.stringify({
        query:`
        mutation MyMutation {
            updateProdutoDaLoja(
              data: {produtos: {update: {where: {id: "${id}"}, data: {entrada: {delete: {id: "${idEntrada}"}}}}}}
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