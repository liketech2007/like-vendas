"use client"
import { MainPageLoja } from "@/components/mainPageLoja";
import { VerificarPage } from "@/components/verificarPage";
import Link from "next/link";
import { ArrowLeft} from "phosphor-react";
import { useState,useEffect} from "react"

export default function Loja() {
    VerificarPage()
    const [loja,setLoja] = useState<any>()
    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setLoja(loja)
    },[])
    if(loja == undefined) {
        return null
    }

    return (
        <>
         <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Link href={`/${loja.emailDaLoja}/dashbord`}>
            <ArrowLeft size={64}  className="p-3 hover:text-white hover:bg-blue-500 rounded-lg"/>
            </Link>
            <div className="py-2 px-6 border border-t-0 border-l-0 border-r-0 border-b-1 rounded-lg boder-blue-500 hover:bg-blue-500 hover:text-white transition-all" onClick={() => {
                localStorage.clear()
                document.location = "/login"
            }}>
                Sair
            </div>
        </header>
        <MainPageLoja loja={loja} />
        </>
    )
}