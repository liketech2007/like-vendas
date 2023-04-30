export async function createInitialProduto(email:string) {
    
    const form = JSON.stringify({
        query:`
        mutation MyMutation {
          createProdutoDaLoja(data: {emailDaLoja:"${email}"}) {
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
}