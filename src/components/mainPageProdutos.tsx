"use client"
import { Input } from "./input";
import { useState,useEffect } from "react"
import { Load } from "./load";
import { getProdutos } from "@/controlles/getProdutos";
import Link from "next/link";
import { Plus } from "phosphor-react";

export function MainPageProdutos() {
    const [value,setValue] = useState("")
    const [email,setEmail] = useState()
    const [produtoSearch,setProdutoSearch] = useState<any>(null)
    const [produtos,setProdutos] = useState<null | any>(null)
    const data = produtos
    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setEmail(loja.emailDaLoja)
        getProdutos(loja.emailDaLoja).then(res => {
        setProdutos(res)
    })
  },[])
    if(produtos === null) {
        return <Load />
    }
    function pesquisa(ev:any) {
        ev.preventDefault()
        const res = produtos.find((produto:any) => {
            return produto.name === value.toLowerCase()
        })
        setProdutoSearch(res)
        
    }
    data.sort((a:any,b:any) => {
            if(a.name < b.name) {
                return -1
            }else {
                return 1
            }
    
    })
    return (
        <main className="p-8 flex gap-6 flex-col justify-center md:w-[70%] text-[8px] md:text-xs">
            <div className="min-w-full justify-end my-8">
                <div>Total de produtos: {produtos.length + 1}</div>
            </div>
            <form onSubmit={pesquisa} className="flex justify-center gap-4 mb-12">
              <Input typeInput="search" text="Nome do produto" setValue={setValue} />
              <input type="submit" value="Pesquisar" className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" />
            </form>
            {
                produtoSearch === null ? null : produtoSearch === undefined ? <div className="text-center">Não tem nenhum produto cadastro com este nome</div> : <Link key={produtoSearch.id} href={`/${email}/${produtoSearch.id}`} className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all rounded-lg">
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{produtoSearch.name}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{produtoSearch.quat == null ? 0 : produtoSearch.quat}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{(produtoSearch.entrada.reduce((x:any,y:any) => {
                                return Number(y.valorDeAquisicao)
                            },0)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{(Number(produtoSearch.preco)).toLocaleString('en-US', { 
                                style: 'currency', 
                                currency: 'USD' 
                            })}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{produtoSearch.venda.length == 0 ? 0 : produtoSearch.venda.reduce((x:any,y:any) => {
                            return x + Number(y.quat)
                        },0)}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{(produtoSearch.venda.length == 0 ? 0 : produtoSearch.venda.reduce((x:any,y:any) => {
                            return x + Number(y.total)
                        },0)).toLocaleString('en-US', { 
                            style: 'currency', 
                            currency: 'USD' 
                        })}</div>
                        </Link>
            }
            <div className="p-6">
            <div className="flex flex-col bg-slate-100 rounded-lg">
            <div className="bg-slate-300 p-4 flex justify-between text-xs gap-3">
                <div className="w-1/6 text-center text-[8px] md:text-xs">Produtos</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Quantidade</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Valor de aquisição do produto</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Preço</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Vendas</div>
                <div className="w-1/6 text-center text-[8px] md:text-xs">Total vendido</div>
            </div>
            {
                produtos.length === 0 ? <div className="p-6 min-w-full min-h-[30vh] flex justify-center items-center text-xs text-center">Não tem nunhum produto cadastrado</div> :
                produtos.map((produto:any) => {
                        return <Link key={produto.id} href={`/${email}/${produto.id}`} className="bg-slate-200 p-4 flex justify-between text-xs gap-3 hover:text-white hover:bg-blue-500 transition-all">
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
                            return x + Number(y.quat)
                        },0)}</div>
                        <div className="w-1/6 text-center text-[8px] md:text-xs">{(produto.venda.length == 0 ? 0 : produto.venda.reduce((x:any,y:any) => {
                            return x + Number(y.total)
                        },0)).toLocaleString('en-US', { 
                            style: 'currency', 
                            currency: 'USD' 
                        })}</div>
                    </Link>
                })
            }
        </div>
            </div>
            <div className="fixed bottom-10 right-5 md:bottom-20 md:right-20">
                <Link href={`/${email}/create-produto`} className="">
                 <Plus size={48} className="bg-blue-500 p-2 text-white hover:text-blue-500 hover:bg-white transition-all rounded-full" />
                </Link>
            </div>
        </main>
    )
}
