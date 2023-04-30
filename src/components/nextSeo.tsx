import { NextSeo } from "next-seo";

export function NextSeoLocal() {
    return (
        <>
            <NextSeo
            title="LIKE VENDAS"
            description="O Like Vendas é um site de controle de estoque
            desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
            A plataforma foi criada para ajudar empresas a gerenciar 
            suas vendas e estoque de forma eficiente.
            O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
            aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
            de estoque em tempo real e gerar relatórios de vendas e estoque.
            Em resumo, o Like Vendas é um site de controle de estoque criado por
            um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
            gerenciar suas vendas e estoque de forma eficiente e eficaz."
            canonical="like-vendas.vercel.app"
            openGraph={{
                url: 'like-vendas.vercel.app',
                title: 'LIKE VENDAS',
                description: `O Like Vendas é um site de controle de estoque
                desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
                A plataforma foi criada para ajudar empresas a gerenciar 
                suas vendas e estoque de forma eficiente.
                O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
                aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
                de estoque em tempo real e gerar relatórios de vendas e estoque.
                Em resumo, o Like Vendas é um site de controle de estoque criado por
                um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
                gerenciar suas vendas e estoque de forma eficiente e eficaz.`,
                images: [
                {
                    url: 'https://media.graphassets.com/output=format:jpg/00kwLz9HR6qzC4G7ojl9',
                    width: 800,
                    height: 600,
                    alt: 'Logo do LIKE VENDAS',
                    type: 'image/jpeg',
                }
                ],
                siteName: 'LIKE VENDAS',
            }}
            twitter={{
                handle: '@LIKE VENDAS',
                site: '@like-vendas.vercel.app',
                cardType: `O Like Vendas é um site de controle de estoque
                desenvolvido por Òscar Jeremias, um jovem angolano de 16 anos. 
                A plataforma foi criada para ajudar empresas a gerenciar 
                suas vendas e estoque de forma eficiente.
                O site apresenta uma interface amigável e fácil de usar, com recursos que permitem
                aos usuários registrar produtos, gerenciar entradas e saídas, monitorar níveis 
                de estoque em tempo real e gerar relatórios de vendas e estoque.
                Em resumo, o Like Vendas é um site de controle de estoque criado por
                um jovem talentoso e empreendedor que tem como objetivo ajudar empresas a
                gerenciar suas vendas e estoque de forma eficiente e eficaz.`,
            }}
            />
    </>
    )
}