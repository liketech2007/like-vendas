"use client"
import { Logo } from "./logo"
import { UserCircle } from "phosphor-react"
import Link from "next/link"
import { useState,useEffect} from "react"

export function HeaderPageDashbord() {
    const [email,setEmail] = useState("")

    useEffect(() => {
        const res1 = localStorage.getItem("loja")
        const loja = JSON.parse(`${res1}`)
        setEmail(`${loja.emailDaLoja}`)
})
    return (
        <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Logo />
            <Link href={`/${email}/loja`} className="flex flex-col items-end gap-3 hover:text-blue-500">
                <UserCircle size={48}/>
            </Link>
        </header>
    )
}