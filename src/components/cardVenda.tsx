"use client"
import { createVenda } from "@/controlles/createVenda"
import { updateQuatProduto } from "@/controlles/updateQuatProduto"
import { Spinner } from "phosphor-react"
import { useState } from "react"
import { Input } from "./input"
export function CardVenda({email,id,quatTotal}:any) {
    const [preco,setPreco] = useState("")
    const [quat,setquat] = useState("")
    const [load,setLoad] = useState(false)
    const [err,setError] = useState<boolean | string>(false)
    async function sendVenda(ev:any) {
        ev.preventDefault()
        if(preco.length !== 0 && quat.length !== 0) {
            setError(false)
            setLoad(true)
            const res = await createVenda({preco,quat,email,id,quatTotal})
            await updateQuatProduto({id,email,isVenda:true,quat,quatTotal})
            setLoad(false)
            window.location.reload();
        }else {
            setError(true)
            setError("Para enviar deves preencher totos os campos acima correctamente")
        }
    }
    return (
        <div className="w-full flex justify-end">
            <form onSubmit={sendVenda} className="my-12 p-6 flex justify-center items-center gap-4 flex-col bg-white rounded-lg shadow-lg">
              <Input typeInput="text" text="Preço" setValue={setPreco} />
              <Input typeInput="text" text="Quantidade" setValue={setquat} />
              <div className="flex gap-2">
              <input type="submit" className="py-2 px-6 rounded-lg bg-blue-500 text-xs text-white hover:text-black hover:bg-white transition-all" value="Enviar"/>
              { load && <Spinner size={32} className="animate-spin" />}
              </div>
              {
                err && <div className="text-xs text-center">{err}</div>
              }
            </form>
        </div>
    )
}