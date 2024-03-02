
export const Banner = () => {

    return (
        <section>
            <div className="flex items-center justify-center gap-5 lg:flex-row my-14 flex-col-reverse max-w-[1440px] mx-auto">
                <div className="xl:max-w-[600px] w-11/12 sm:w-auto mx-auto text-center lg:text-start">

                    <h1 className=" font-semibold xl:text-[40px] sm:text-3xl text-[24px]">
                        Encontre os
                        <span className="text-[#846AFF]">melhores artigos </span> <br />
                        de programação em um só lugar
                    </h1>
                    <p className="font-normal xl:text-2xl leading-9 my-5 text-base sm:text-xl max-w-[550px]">
                        Explore o topo da programação em um só lugar!
                        Seu destino único para dicas e tendências atuais.
                    </p>
                    <a
                        href="#article"
                        className="font-roboto font-bold text-white px-6 py-3 uppercase text-lg rounded-md bg-[#846AFF] w-full sm:w-auto">
                        Buscar artigos
                    </a>
                </div>

                <figure>
                    <img
                        src="https://a.imagem.app/oD3Qhr.png"
                        alt="Banner artigo"
                        title="Banner artigo"
                        className="w-[400px]" />
                </figure>
            </div>
        </section>
    )
}