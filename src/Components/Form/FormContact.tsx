import { Input } from "./ui/input"


export const FormContact = () => {

    return (
        <form action="" className="w-full space-y-6">
            <Input
                type="text"
                placeholder="Nome"
            />
            <Input
                type="text"
                placeholder="E-mail"
            />
           <div>
            <textarea 
            name="" id="" 
            className="w-full max-h-40 min-h-20 px-2 py-4"
            placeholder="Mensagem"></textarea>
           </div>
            <button
                className="font-bold uppercase text-white bg-[#846AFF] w-full text-base xl:text-lg py-3">
                Entrar em contato
            </button>
        </form>
    )
}