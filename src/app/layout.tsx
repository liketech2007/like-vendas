"use client"
import './globals.css'
import { ContextLoja } from "../contexts/contextLoja"
import { useState } from "react"
import { ILoja } from '@/entities/loja'
import { NextSeoLocal } from '@/components/nextSeo'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loja,setLoja] = useState({})
 
  return (
    <html lang="pt">
      <head>
        <title>
          LIkE VENDAS
        </title>
        <meta name='description' content='O Like Vendas é um site de controle de estoque
            desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
            A plataforma foi criada para ajudar empresas a gerenciar 
            suas vendas e estoque de forma eficiente.
            O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
            aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
            de estoque em tempo real e gerar relatórios de vendas e estoque.
            Em resumo, o Like Vendas é um site de controle de estoque criado por
            um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
            gerenciar suas vendas e estoque de forma eficiente e eficaz.' />
     <link rel="icon" type="image/x-icon" href="https://media.graphassets.com/output=format:jpg/00kwLz9HR6qzC4G7ojl9" />
     <NextSeoLocal />
      </head>
      <ContextLoja.Provider value={{loja,setLoja}}>
       <body className='flex flex-col justify-center items-center'>{children}</body>
      </ContextLoja.Provider>
    </html>
  )
}
