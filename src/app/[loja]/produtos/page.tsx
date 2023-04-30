"use client"
import { HeaderPageSecond } from "@/components/headerPageSecond";
import { MainPageProdutos } from "@/components/mainPageProdutos";
import { VerificarPage } from "@/components/verificarPage";
import { useState,useEffect} from "react"

export default function Produtos() {
    VerificarPage()
    const [email,setEmail] = useState("")

    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setEmail(`${loja.emailDaLoja}`)
})
    return (
        <>
         <HeaderPageSecond email={email} />
         <MainPageProdutos />
        </>
    )
}