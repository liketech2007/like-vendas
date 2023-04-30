import { Logo } from "./logo"
import { ButtonSecond } from "./buttonSecond"

export function Header1() {
    return (
        <header className="w-full p-3 flex items-center justify-between md:w-[80%] md:py-4">
            <Logo />
            <div className="flex flex-col items-end gap-3">
                <ButtonSecond text="Sobre nós" url="/sobre-nos" />
            </div>
        </header>
    )
}