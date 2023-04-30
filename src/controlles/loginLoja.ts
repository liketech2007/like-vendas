 export async function loginLoja(email:string) {
     const form = JSON.stringify({
      query:`
      query MyQuery {
        lojas(where: {emailDaLoja:"${email}"}) {
          id
          senha
          nomeDaLoja
          emailDaLoja
          dataDeEscricaoDoServico
          dataDeIncerramentoDoServico
          validadeDoServico
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
  
      const loja = data.data.lojas
    return loja[0]
  }