import { ArrowLeft, UserCircle } from "phosphor-react";
import Link from "next/link";

export function HeaderPageSecond({email}:any) {
    return (
        <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Link href={`/${email}/dashbord`}>
            <ArrowLeft size={64}  className="p-3 hover:text-white hover:bg-blue-500 rounded-lg"/>
            </Link>
            <Link href={`/${email}/loja`} className="flex flex-col items-end gap-3 hover:text-blue-500">
                <UserCircle size={48}/>
            </Link>
        </header>
    )
}