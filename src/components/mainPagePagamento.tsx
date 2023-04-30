import { ButtonSecond } from "./buttonSecond";

export function MainPagePagamento() {
    return (
        <main className="p-6 md:w-[50vw] flex flex-col justify-center">
            <h1 className="text-2xl pb-8">Pagamento</h1>
            <p className="p-3 text-center pb-12">
                Faz um pagamento neste
                IBAN AO06000600005716023330160 
                está em nome de Maria Eugénia Oscar
                no valor de 2.500kz mais se você está 
                fora de Angola faz um pagamento no paypal
                no valor de 5 dolares, de 25 reais ou 5 euros 
                neste email liketech2007@gmail.com 
                e envia o comprovativo do pagamento
                junto do email que criaste com ele a conta
                no nosso serviço neste
                número 946 703 116 
                via whatsapp em menos de
                30 minutos você pode voltar a fazer 
                login na sua conta e o serviço 
                vai voltar a funcinar perfeitamente
            </p>
            <div className="my-6 flex justify-center">
             <ButtonSecond text="Volta para página de login" url="/login" sizeText="text-xs"  />
            </div>

            <p>Email: like@gmail.com</p>
        </main>
    )
}
