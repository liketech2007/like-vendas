export async function ListLojasAPI() {

    const form = JSON.stringify({
        query:`
            query MyQuery {
                lojas(first: 2000) {
                    id
                    emailDaLoja
                    nomeDaLoja
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
    return data.data.lojas   
}
