export async function  deleteProduto(id: any,email:any) {
    const form = JSON.stringify({
        query:`mutation MyMutation {
            updateProdutoDaLoja(
              data: {produtos: {delete: {id: "${id}"}}}
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