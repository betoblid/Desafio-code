import { useForm } from "react-hook-form"
import { Input } from "./ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const FormSchame = z.object({

    userName: z.string().min(4, "Digite no minimo 4 caracteres").max(20, "Digite um nome com até 20 caracteres"),
    userEmail: z.string().email("Digite um E-mail valido").max(60, "E-mail muito grande"),
    userMensage: z.string().min(10, "Digite no minimo 10 caracteres").max(200, "Digite uma mensagem menor")
})
type TypeFormSchame = z.infer<typeof FormSchame>

export const FormContact = () => {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm<TypeFormSchame>({
        mode: "onSubmit",
        resolver: zodResolver(FormSchame)
    })

    const HandleForm = () => {
        
        setTimeout(() => {
            setValue("userEmail","")
            setValue("userMensage", "")
            setValue("userName", "")
            
            toast.success("Formulário enviado com sucesso")
        }, 1000);
      
    }
    return (

        <form
            onSubmit={handleSubmit(HandleForm)}
            className="w-full space-y-6"
        >
            <Input
                {...register("userName")}
                type="text"
                placeholder="Nome"
                required
                helpText={errors.userName?.message}
                autoComplete="name"
            />
            <Input
                {...register("userEmail")}
                type="text"
                required
                autoComplete="email"
                placeholder="E-mail"
                helpText={errors.userEmail?.message}
            />
            <div>
                <textarea
                    {...register("userMensage")}
                    required
                    className="w-full max-h-40 min-h-20 px-2 py-4"
                    placeholder="Mensagem"
                ></textarea>
                <p
                    className="text-red-600 md:text-base text-sm font-semibold">
                    {errors.userMensage?.message}
                </p>
            </div>
            <button
                className="font-bold uppercase text-white bg-[#846AFF] w-full text-base xl:text-lg py-3">
                Entrar em contato
            </button>
        </form>
    )
}