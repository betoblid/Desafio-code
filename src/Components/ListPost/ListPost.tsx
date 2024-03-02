import db from "../../db.json"
import { CardPost } from "../CardPost"

export const ListPost = () => {

    return (
        <section id="article"
            className="xl:max-w-[1216px] mx-auto lg:max-w-[800px] w-full"
        >
            <h2 className="xl:text-3xl text-2xl mb-10 font-bold text-[#121214]">
                Artigos recomendados
            </h2>

            <div className="flex items-center justify-center flex-row flex-wrap gap-5">
                {
                    db.posts.map((post, index) => <CardPost key={index} descriptiion={post.description} thumb={post.thumb} title={post.title}/>)
                }
            </div>
        </section>
    )
}