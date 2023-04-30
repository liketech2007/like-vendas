import { Spinner } from "phosphor-react";
import { Input } from "./input";
import { useState,useEffect } from "react"
import { createProduto } from "@/controlles/createProduto";
import { getProdutos } from "@/controlles/getProdutos";

export function MainPageCreateProduto({email}:any) {
    
    async function senProduto(ev:any) {
        ev.preventDefault()
        if(name.length !== 0 && preco.length !== 0) {
            setLoad(true)
            setErr(false)
           const res =  await createProduto({name,preco,quat:"0",emailDaLoja:email})

            const res1 = await getProdutos(email)

            const l = res1.length

            document.location = `/${email}/${res1[l-1].id}`
            setLoad(false)
        }else {
            setErr(true)
            setErr("Para criar o produto deves preencher todos os campos correctamente")

        }
    }
    const [load,setLoad] = useState(false)
    const [name,setName] = useState("")
    const [preco,setPreco] = useState("")
    const [err,setErr] = useState<boolean | string>(false)

    return (
        <main className="w-full p-3 md:flex md:justify-center md:items-center md:h-[60vh] ">
                
                <div className="flex items-center justify-center flex-col gap-16 min-h-[50vh] md:min-h-[60vh]">
                <h1 className="pl-6 md:pl-1 text-2xl self-start">
                    Criar Produto
                </h1>
               <form onSubmit={senProduto} className="flex justify-center items-center flex-col gap-6">
               <Input typeInput="text" text="Nome do produto" setValue={setName} />
                <Input typeInput="number" text="preço do produto" setValue={setPreco} />

                <div className="flex gap-3">
                <input type="submit" value="Criar" className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" />
                            { load && <Spinner size={32} className="animate-spin" />}
                </div>
                  <div>
                    {
                            err && <div className="w-[300px] text-xs text-center">
                             {err}
                            </div>
                        }
                    </div>
               </form>
                </div>

                <div className="fixed bottom-10 left-5 text-xs">Limite de produtos 1.000</div>
        </main>
    )
}