

interface CardPostProps {
    thumb: string,
    title: string,
    descriptiion: string
}

export const CardPost = ({ descriptiion, thumb, title }: CardPostProps) => {

    return (
        <article 
        className="border-2 border-[#eeefff] xl:max-w-[384px] max-w-[335px] w-full rounded-lg xl:h-[357px] h-[327px] overflow-hidden hover:shadow-xl">
            <img
                src={thumb}
                alt={`thumb ${title}`}
                title={`thumb ${title}`}
                className=" h-[175px]"
            />
            <div className="p-5">
                <h3 className="font-semibold xl:text-xl text-[#121214] mb-3 text-base">
                    {title}
                </h3>
                <p className="font-normal xl:text-lg text-sm">
                    {descriptiion}
                </p>
            </div>
        </article>
    )
}