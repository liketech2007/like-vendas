import Link from "next/link"

type ButtonType = {
    text: string,
    url: string,
    sizeText?: string
}

export function Button({ text, url, sizeText}: ButtonType) {
    return (
       <Link href={url} className={"py-2 px-6 border border-t-0 border-l-0 border-r-0 text-white border-b-1 bg-blue-500 rounded-lg boder-blue-500 hover:bg-white hover:text-black transition-all " + sizeText}>
         {text} 
       </Link>
    )
}