"use client"
import { Spinner } from "phosphor-react"
import { useState } from "react"
import { Input } from "./input"
import { createEntrada } from "../controlles/createEntrada"
import { updateQuatProduto } from "@/controlles/updateQuatProduto"

export function CardEntrada({email,id,quatTotal}:any) {
    const [preco,setPreco] = useState("")
    const [quat,setquat] =useState("")
    const [load,setLoad] = useState(false)
    const [err,setError] = useState<boolean | string>(false)
    async function sendEntrada() {
        if(preco.length !== 0 && quat.length !== 0) {
            setError(false)
            setLoad(true)
            await createEntrada({preco,quat,email,id,quatTotal})
            await updateQuatProduto({id,email,isVenda:false,quat,quatTotal})
            setLoad(false)
            window.location.reload();
        }else {
            setError(true)
            setError("Para enviar deves preencher totos os campos acima correctamente")
        }
    }
    
    return (
        <div className="w-full flex justify-end">
            <form className="my-12 p-6 flex justify-center items-center gap-4 flex-col bg-white rounded-lg shadow-lg">
              <Input typeInput="text" text="Valor de aquisição do produto" setValue={setPreco} />
              <Input typeInput="text" text="Quantidade" setValue={setquat} />
              <div className="flex gap-2">
              <button className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" onClick={sendEntrada}>Enviar</button>
              { load && <Spinner size={32} className="animate-spin" />}
              </div>
              {
                err && <div className="text-xs text-center">{err}</div>
              }
            </form>
        </div>
    )
}
