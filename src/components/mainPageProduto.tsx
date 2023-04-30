"use client"
import { Load } from "./load"
import { useState, } from "react"
import { CardVenda } from "./cardVenda"
import { CardEntrada } from "./cardEntrada"
import { jsPDF } from "jspdf";
import { Spinner, Trash } from "phosphor-react"
import html2canvas from 'html2canvas';
import { deleteEntrada } from "@/controlles/deleteEntrada"
import { deleteVenda } from "@/controlles/deleteVenda"
import { deleteProduto } from "@/controlles/deleteProduto"
import { updateQuatProduto } from "@/controlles/updateQuatProduto"
import { setTimeout } from "timers"

export function MainPageProduto({ data,email }:any) {
    const date = new Date()
    const [activeCardVenda,setActiveCardVenda] = useState(false)
    const [activeCardEntrada,setActiveCardEntrada] = useState(false)
    const [load,setLoad] = useState(false)
    const [delete1,setDelete] = useState(false)
    const [isRelatorio,setIsRelatorio] = useState(false)
    if(data == undefined) {
        return <Load />
    }
    const vendidos = data[0].venda.reduce((x:any,y:any) => {
            return x + Number(y.total)
        },0)
   
        const entrada = data[0].entrada.reduce((x:any,y:any) => {
                return x + Number(y.total)
            },0)

            data[0].venda.sort((a:any,b:any) => {
                
                if(a.data < b.data) {
                    return -1
                }else {
                    return true
                }
        
            })

            data[0].entrada.sort((a:any,b:any) => {
                
                if(a.data < b.data) {
                    return -1
                }else {
                    return true
                }
        
            })
    return (
        <main  className="p-8 flex gap-6 flex-col justify-center md:w-[70%]" id="print">
            <div className="w-full flex justify-end">
            { load == true && delete1 == true ? <Spinner size={32} className="animate-spin" /> : null}
            </div>
            <div>
                <h1 className="text-2xl">{data[0].name}</h1>
                <div className="text-xs m-3">Quantidade: {data[0].quat == null ? 0 : data[0].quat}</div>
                <div className="text-xs m-3">Preço: {(Number(data[0].preco)).toLocaleString('en-US', { 
                    style: 'currency', 
                    currency: 'USD' 
                })}</div>
                <div className="w-full text-right">
                <div className="w-full text-right text-red-500 flex justify-end p-2 hover:text-white" onClick={async() => {
                      setDelete(true)
                      setLoad(true)
                                await deleteProduto(data[0].id,email)
                                document.location = `/${email}/dashbord`
                                setDelete(false)
                                setLoad(false)
                            }}>
                              <Trash  />
                </div>
                <div className="my-3">Total Vendido: {(vendidos).toLocaleString('en-US', { 
                    style: 'currency', 
                    currency: 'USD' 
                })}</div>
                <div className="my-3">Total de custos: {(entrada).toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            })}</div>
                <div className="my-3">Lucro: {(vendidos - entrada).toLocaleString('en-US', { 
                    style: 'currency', 
                    currency: 'USD' 
                })}</div>
                </div>
            </div>
            <div>
            <div className="p-6">
                <h2 className="pb-4 text-xl">Tabela de vendas</h2>
            <div className="w-full flex flex-col bg-slate-100 rounded-lg">
            <div className="bg-slate-300 p-4 flex justify-between text-xs gap-3">
                <div className="w-1/6 text-center text-[8px] md:text-xs">Data</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Vendas</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Preço</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Total vendido</div>
                <div className=""></div>

            </div>
                    {
                        data[0].venda.length == 0 ?  <div className="p-6 min-w-full min-h-[30vh] flex justify-center items-center text-xs text-center">Não tem nenhum registro de actividade deste produto</div> : data[0].venda.map((venda:any) => {
                            const date = new Date(venda.data)
                            const date1 = new Date()
                            const lVenda = new Date(venda.data)
                            const diasDeServico = 30
                            date1.setDate(date.getDate() - diasDeServico)
                        if(lVenda >= date1 ) {
                            return <div key={venda.id}  className="bg-slate-200 p-4 flex justify-between text-xs gap-3 transition-all">
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{venda.quat}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(venda.preco)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(venda.total)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="flex justify-end p-2 text-red-500 text-xs hover:text-white" onClick={async() => {
                                setDelete(true)
                                setLoad(true)
                                await deleteVenda(data[0].id,email,venda.id)
                                await updateQuatProduto({email,id:data[0].id,isVenda:false,quatTotal:data[0].quat,quat:venda.quat})
                                window.location.reload();
                                setDelete(false)
                                setLoad(false)
                            }}>
                              <Trash />
                            </div>
                        </div>
                        }
                        })
                    }
           </div>
            </div>
            </div>
            { 
                activeCardVenda && <CardVenda email={email} id={data[0].id} quatTotal={data[0].quat} />
            }
            <div className="flex flex-col gap-4 md:self-end">
            <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                setActiveCardVenda(activeCardVenda === false ? true : false)
            }}>{ activeCardVenda == false ? "Adicionar Venda" : "Fechar"}</button>
            </div>
            <div className="z-50">
            </div>
            <div className="p-6">
                <h2 className="pb-4 text-xl">Tabela de Entradas</h2>
            <div className="w-full flex flex-col bg-slate-100 rounded-lg text-[8px] md:text-xs">
            <div className="bg-slate-300 p-4 flex justify-between text-xs gap-3">
                <div className="w-1/6 text-center text-[8px] md:text-xs">Data</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Quantidade</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Valor de aquisição do produto</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Custo</div>
                <div className=" text-center"></div>
            </div>
                    {
                        data[0].entrada.length == 0 ?  <div className="p-6 min-w-full min-h-[30vh] flex justify-center items-center text-xs text-center">Não tem nenhum registro de actividade deste produto</div> : data[0].entrada.map((entrada:any) => {
                            const date = new Date(entrada.data)
                            const date1 = new Date()
                            const lVenda = new Date(entrada.data)
                            const diasDeServico = 30
                            date1.setDate(date.getDate() - diasDeServico)
                        if(lVenda >= date1 ) {
                            return <div key={entrada.id}  className="bg-slate-200 p-4 flex justify-between text-xs gap-3 transition-all">
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{entrada.quat}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(entrada.valorDeAquisicao)).toLocaleString('en-US', { 
                                    style: 'currency', 
                                    currency: 'USD' 
                                })}</div>
                            <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(entrada.total)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                            <div className="text-red-500 text-xs flex justify-end p-2 hover:text-white" onClick={async() => {
                                 setDelete(true)
                                 setLoad(true)
                                await deleteEntrada(data[0].id,email,entrada.id)
                                await updateQuatProduto({email,id:data[0].id,isVenda:true,quatTotal:data[0].quat,quat:entrada.quat})
                                window.location.reload();
                                setDelete(false)
                                setLoad(false)
                            }}>
                              <Trash  />
                            </div>
                        </div>
                        }
                        })
                    }
           </div>
            </div>
            {
                activeCardEntrada && <CardEntrada email={email} id={data[0].id} quatTotal={data[0].quat} />
            }
            <div className="mb-8 flex flex-col gap-4 md:self-end">
             <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                setActiveCardEntrada(activeCardEntrada === false ? true : false)
             }}>{ activeCardEntrada === false ? "Adicionar produto" : "Fechar"}</button>
            </div>
            <div className="flex gap-3">
            <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                setLoad(true)
                setIsRelatorio(true)
                const el = document.getElementById("print")
                const pdf = new jsPDF();
               if (pdf) {
                if(el !== null) {
                   setTimeout(() => {
                    html2canvas(el).then(function(canvas) {
                        const dataURL = canvas.toDataURL();
                        const pdf = new jsPDF();

                        pdf.addImage(dataURL, 'JPEG', 10, 10, 180, 210);

                        pdf.save('relatorio.pdf')
                        setLoad(false)
                        setIsRelatorio(false)
                    });
                   }, 500);
                }
            }
            }}>Tirar Relátorio dos ultimos 30 dias</button>
            { load == true && isRelatorio == true ? <Spinner size={32} className="animate-spin" /> : null}
            </div>

            {
                isRelatorio == true && <div className="m-12">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</div>
            }

            <div className="bottom-10 left-5 text-xs">Limite de entras e vendas: 100</div>
        </main>
    )
}
