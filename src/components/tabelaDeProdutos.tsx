import Link from "next/link"

export function TabelaDeProdutos({ produtos,email,isDay,date1 }: any) {
    const data = produtos
    
    
    data.sort((a:any,b:any) => {
        const venda1 = a.venda.reduce((x:any,y:any) => {
            return x + Number(y.quat)
        },0)
        const venda2 = b.venda.reduce((x:any,y:any) => {
            return x + Number(y.quat)
        },0)
        if(venda1 > venda2) {
            return -1
        }else {
            return true
        }

    })
     return (
        <div className="flex flex-col bg-slate-100 rounded-lg text-[8px] md:text-xs">
            <div className="bg-slate-300 p-4 flex justify-between text-[8px] md:text-xs gap-3">
                <div className="w-1/6 text-center">Produtos</div>
                <div className="w-1/6 text-center">Quantidade</div>
                <div className="w-1/6 text-center">Valor de aquisição do produto</div>
                <div className="w-1/6 text-center">Preço Inicial</div>
                <div className="w-1/6 text-center">Vendas</div>
                <div className="w-1/6 text-center">Total vendido</div>
            </div>
            {
                data.length === 0 ? <div className="p-6 min-w-full min-h-[30vh] flex justify-center items-center text-xs text-center">Não tem nunhum produto cadastrado</div> :
                data.map((produto:any,key:any) => {
                    let x1 = 0
                    let x2 = 0
                    if(isDay == true) { 
                        const date = date1
                        const lVenda = new Date(produto.venda[produto.venda.length -1]?.data)
                        const lEntrada = new Date(produto.entrada[produto.entrada.length -1]?.data)
                        if(lVenda.getDate() == date.getDate() || lEntrada.getDate() == date.getDate()) {
                            return  <Link key={produto.id} href={`/${email}/${produto.id}`} className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all ">
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.name}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.quat == null ? 0 : produto.quat}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(produto.entrada.reduce((x:any,y:any) => {
                                return Number(y.valorDeAquisicao)
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(produto.preco)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : produto.venda.reduce((x:any,y:any) => {
                                const date = date1
                                const vendaData = new Date(y.data)
                                if(date.getDate() === vendaData.getDate()) {
                                return x1 += Number(y.quat)
                                } 
                            },0)}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : (produto.venda.reduce((x:any,y:any) => {
                                const date = date1
                                const vendaData = new Date(y.data)
                                if(date.getDate() === vendaData.getDate()) {
                                return x2 += Number(y.total)
                                }
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                        </Link>
                        }
                    }else if(isDay == false) {
                        const date = new Date()
                        const lVenda = new Date(produto.venda[produto.venda.length -1]?.data)
                        const lEntrada = new Date(produto.entrada[produto.entrada.length -1]?.data)
                        const diasDeServico = 30
                        date.setDate(date.getDate() - diasDeServico)
                        if(lVenda >= date || lEntrada >= date) {
                            return  <Link key={produto.id} href={`/${email}/${produto.id}`} className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all">
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.name}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.quat == null ? 0 : produto.quat}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(produto.entrada.reduce((x:any,y:any) => {
                                return Number(y.valorDeAquisicao)
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(produto.preco)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : produto.venda.reduce((x:any,y:any) => {
                                const date = new Date()
                                const diasDeServico = 30
                                date.setDate(date.getDate() - diasDeServico)
                                const vendaData = new Date(y.data)
                                if( vendaData >= date) {
                                return x += Number(y.quat)
                                }
                            },0)}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : (produto.venda.reduce((x:any,y:any) => {
                                const date = new Date()
                                const diasDeServico = 30
                                date.setDate(date.getDate() - diasDeServico)
                                const vendaData = new Date(y.data)
                                if( vendaData >= date) {
                                return x += Number(y.total)
                                }
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                        </Link>
                        }
                    }else if (isDay == null) {
                        const date = new Date()
                        const lVenda = new Date(produto.venda[produto.venda.length -1]?.data)
                        const lEntrada = new Date(produto.entrada[produto.entrada.length -1]?.data)
                        const diasDeServico = 30
                        date.setDate(date.getDate() - diasDeServico)
                        if(lVenda >= date || lEntrada >= date) {
                            if(key <= 15) {
                                return  <Link key={produto.id} href={`/${email}/${produto.id}`} className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all">
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.name}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.quat == null ? 0 : produto.quat}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(produto.entrada.reduce((x:any,y:any) => {
                                return Number(y.valorDeAquisicao)
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(produto.preco)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : produto.venda.reduce((x:any,y:any) => {
                                const date = new Date()
                                const diasDeServico = 30
                                date.setDate(date.getDate() - diasDeServico)
                                const vendaData = new Date(y.data)
                                if( vendaData >= date) {
                                return x += Number(y.quat)
                                }
                            },0)}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{produto.venda.length == 0 ? 0 : (produto.venda.reduce((x:any,y:any) => {
                               const date = new Date()
                               const diasDeServico = 30
                               date.setDate(date.getDate() - diasDeServico)
                               const vendaData = new Date(y.data)
                               if( vendaData >= date) {
                               return x + Number(y.total)
                               }
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                        </Link>
                            }
                        }
                    } else {
                        return null
                    }
                })
            }
        </div>
     )
}
