"use client"
import { HeaderPageSecond } from "@/components/headerPageSecond";
import { MainPageProduto } from "@/components/mainPageProduto";
import { useState,useEffect} from "react"
import { usePathname } from "next/navigation"
import { getProduto } from "@/controlles/getProduto";
import { VerificarPage } from "@/components/verificarPage";


export default function Produto() {
    VerificarPage()
    const searchParams = usePathname()
    const [email,setEmail] = useState("")
    const [data,setData] = useState()
    const [id,setId] = useState()
    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setEmail(`${loja.emailDaLoja}`)
        const str1 = searchParams.replace(`/${loja.emailDaLoja}/`,"")
        getProduto(str1,loja.emailDaLoja).then((res) => {
            setData(res)
        })
    },[])
    return (
        <>
          <HeaderPageSecond email={email} />
          <MainPageProduto data={data} email={email}/>
        </>
    )
}