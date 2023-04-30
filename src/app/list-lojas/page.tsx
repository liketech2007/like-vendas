"use client"
import { Header1 } from "@/components/header1"
import { Load } from "@/components/load"
import { MainPageListLojas } from "@/components/mainPageListLojas"
import { ListLojasAPI } from "@/controlles/listLojas"
import { useState,useEffect } from "react"

export default function ListLojas() {
    const [data,setData] = useState()
    
    useEffect(() => {
        ListLojasAPI().then(res => {
            setData(res)
        })
    },[])
    if(data === undefined) {
        return <Load />
    }
    return (
        <>
                <Header1 />
                <MainPageListLojas data={data} />
        </>
    )
}