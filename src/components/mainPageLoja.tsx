export function MainPageLoja({loja}:any) {
    const data1 = new Date(loja.dataDeEscricaoDoServico)
    const inscricao = `${data1.getDate()}/${data1.getMonth() + 1}/${data1.getFullYear()}` 
    const data2 = new Date(loja.dataDeIncerramentoDoServico)
    const termino = `${data2.getDate()}/${data2.getMonth() + 1}/${data2.getFullYear()}` 

    return (
        <main className="w-full p-6 flex flex-col items-center justify-center md:w-[70%] h-[70vh] md:py-4">
            <div className="py-2">{loja.nomeDaLoja}</div>
            <div className="py-2">{loja.emailDaLoja}</div>
            <div className="py-2">Data de inscrição: {inscricao}</div>
            <div className="py-2">Data de termino: {termino}</div>
        </main>
    )
}