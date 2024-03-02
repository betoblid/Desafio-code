import { Link } from "react-router-dom";


export const Erro = () => {

    return(
        <main>
            <section className="flex items-center justify-center gap-2 flex-col min-h-screen">
                <h1 className="font-bold text-2xl">Essa pagina não existe</h1>
                <p className="text-base">Volte para pagina principal</p>
                <Link to="/" className="bg-green-700 text-white font-bold text-base px-4 py-2 rounded-lg">Voltar</Link>
            </section>
        </main>
    );
}