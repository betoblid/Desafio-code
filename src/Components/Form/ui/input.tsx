import { InputHTMLAttributes, forwardRef } from "react"


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    helpText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>( (
    { helpText = '', ...props }, ref
) => {

    const HandleErro = helpText.length > 0
    return (

        <div>
            <input {...props} ref={ref} className="px-2 py-4 bg-white w-full outline-none"/>
            {
                HandleErro && (
                    <span className="text-red-600 md:text-base text-sm font-semibold">{helpText}</span>)
            }
        </div>
    )
})