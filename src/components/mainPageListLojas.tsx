"use client"
import { actualizarServico } from "@/controlles/actualizarServico"
import { Spinner } from "phosphor-react"
import { useState } from "react"

export function MainPageListLojas(data:any) {
    const [load,setLoad] = useState(false)
    async function sendLoja(id:string) {
        setLoad(true)
        await actualizarServico(id)
        setLoad(false)
    }
    
    return (
        <main className="mt-12 flex flex-col p-6 md:w-[80%] md:py-4">
            <div className="mb-12 self-end">Total de lojas: {data.data.length + 1}</div>
            <ul>
            {
                data && data.data.map((loja:any) => {
                    return (
                        <li key={loja.id} className="min-w=full flex justify-between">
                            <div className="flex items-center gap-4"> 
                                <p className="py-3">{loja.nomeDaLoja}</p>
                                <p className="py-3">{loja.emailDaLoja}</p>
                            </div>
                            <div className="flex items-center py-6">
                            <button className="py-2 px-6 rounded-lg bg-blue-500 text-white hover:text-black hover:bg-white transition-all" onClick={() => {
                                sendLoja(loja.id)
                            }}>Actualizar o serviço</button>
                            { load && <Spinner size={32} className="animate-spin" />}
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </main>
    )
}