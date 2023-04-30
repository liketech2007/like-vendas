export async function  updateQuatProduto({id,email,isVenda,quat,quatTotal}: any) {
    const newQuat = isVenda == true ? Number(quatTotal) - Number(quat) : Number(quatTotal) + Number(quat)
    const form = JSON.stringify({
        query:`mutation MyMutation {
            updateProdutoDaLoja(
              data: {produtos: {update: {where: {id: "${id}"}, data: {quat: "${newQuat}"}}}}
              where: {emailDaLoja: "${email}"}
            ){
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