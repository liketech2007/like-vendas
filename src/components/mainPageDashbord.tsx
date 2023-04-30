"use client"
import { Button } from "./button";
import { TabelaDeProdutos } from "./tabelaDeProdutos";
import { useState, useEffect } from "react";
import { getProdutos } from "@/controlles/getProdutos";
import { Load } from "./load";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Spinner } from "phosphor-react";

export function MainPageDashbord() {
    const [date,setDate] = useState(new Date())
    const [dateInput,setdateinput] = useState("")
    const [produtos,setProdutos] = useState<any>()
    const [email,setEmail] = useState()
    const [load,setLoad] = useState(false)
    const [isDay,setDay] = useState<boolean | null>(null)
    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setEmail(loja.emailDaLoja)
        getProdutos(loja.emailDaLoja).then(res => {
        setProdutos(res)
    })
  },[])
    if(produtos === undefined) {
        return <Load />
    }
   
    const vendidos = produtos.map((produto:any) => {
        if(isDay == true) {
            let x1 = 0
            return produto.venda.reduce((x:any,y:any) => {
                const vendaData = new Date(y.data)
                if(date.getDate() === vendaData.getDate()) {
                    return x1 +=  Number(y.total)
                }else {
                    return 0
                }
            },0)
        } else {
            return produto.venda.reduce((x:any,y:any) => {
                const date = new Date()
                const diasDeServico = 30
                date.setDate(date.getDate() - diasDeServico)
                const vendaData = new Date(y.data)
                if( vendaData >= date) {
                    return x +  Number(y.total)
                }else {
                    return 0
                }
            },0)
        }
    })
  
    const vendidos1 = vendidos.reduce((x:any,y:any) => {
           return x + y
        },0)

        const entrada = produtos.map((produto:any) => {
            if(isDay == true) {
                let x1 = 0
                return produto.entrada.reduce((x:any,y:any) => {
                    const entradaData = new Date(y.data)
                    if(date.getDate() === entradaData.getDate()) {
                        return x1 +  Number(y.total)
                    }else {
                        return 0
                    }
                },0)
            } else {
                return produto.entrada.reduce((x:any,y:any) => {
                    const date = new Date()
                    const diasDeServico = 30
                    date.setDate(date.getDate() - diasDeServico)
                    const entradaData = new Date(y.data)
                    if( entradaData >= date) {
                        return x +  Number(y.total)
                    }else {
                        return 0
                    }
                },0)
            }
        })
        const entrada1 = entrada.reduce((x:any,y:any) => {
                return x + y
            },0)    
        
    return (
        <main className="w-full p-6 flex flex-col md:w-[80%] md:py-4" id="print">
            <h1 className="text-2xl pb-8">Visão Geral</h1>
            <div className="my-3">Total Vendido: {(vendidos1).toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            })}</div>
            <div className="my-3">Total de custos: {(entrada1).toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            })}</div>
            <div className="my-3">Lucro: {(vendidos1 - entrada1).toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD' 
            })}</div>
            <div className="p-6 text-xs md:text-base"> 
                 <TabelaDeProdutos produtos={produtos} email={email} isDay={isDay} date1={date} /> 
            </div>

            <div className="p-6 flex flex-col gap-10 text-xs items-end">
                <div>
                <Button text="Lista de Produtos" url={`/${email}/produtos`} />
                </div>
                <div>
                <Button text="Novo Produtos"  url={`/${email}/create-produto`} />
                </div>
                <div className="text-xs">
                <div className="mb-6 flex justify-center gap-2">
                    <div>
                        Difinir data: 
                    </div>
                    <input type="date" value={dateInput} onChange={(e) => {
                       setdateinput(`${e.target.value}`)
                        const date = new Date(e.target.value)
                        setDate(date)
                    }} />
                </div>
                <div className="flex gap-3">
                <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                    setLoad(true)
                    setDay(true)
                const el = document.getElementById("print")
                const pdf = new jsPDF();
                setTimeout(() => {
                    setLoad(false)
                }, 500);
               if (pdf) {
                if(el !== null) {
                        if(isDay === true) {
                            
                            html2canvas(el).then(function(canvas) {
                                const dataURL = canvas.toDataURL();
                                const pdf = new jsPDF();
                                pdf.addImage(dataURL, 'JPEG', 10, 10, 180, 210);
                                pdf.save('relatorio.pdf')
                                setDay(null)
                                setdateinput("")
                            });
                        }
                }
            }
            }}>{isDay === true ? "Baixar Relátorio" : "Gerar Relátorio diário"}</button>
            { load == true && isDay == true ? <Spinner size={32} className="animate-spin" /> : null}
            </div>
                </div>
                <div className="text-xs">
                <div className="flex gap-3">
                <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                    setLoad(true)
                    setDay(false)
                const el = document.getElementById("print")
                const pdf = new jsPDF();
                setTimeout(() => {
                    setLoad(false)
                }, 500);
               if (pdf) {
                if(el !== null) {
                    
                    if(isDay == false) {
                        html2canvas(el).then(function(canvas) {
                            const dataURL = canvas.toDataURL();
                            const pdf = new jsPDF();
                            pdf.addImage(dataURL, 'JPEG', 10, 10, 180, 210);
                            pdf.save('relatorio.pdf')
                            setDay(null)
                        });
                    }
                }
            }
            }}>{isDay === false ? "Baixar Relátorio" : "Gerar Relátorio dos ultimos 30 dias"}</button>
            { load == true && isDay == false ? <Spinner size={32} className="animate-spin" /> : null}
            </div>
            </div>
            </div>
            {
                isDay == true  || isDay == false ? <div className="m-12">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</div> : null
            }
        </main>
    )
}
