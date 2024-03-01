import { Banner } from "../../Components/Banner/Banner";
import { FormContact } from "../../Components/Form/FormContact";
import { ListPost } from "../../Components/ListPost/ListPost";


export const Home = () => {

    return (
        <main>
            <Banner />
            <ListPost />

            <section className="bg-[#F8F8FF] py-12 mt-14">
                <div className="max-w-[700px] w-10/12 mx-auto">
                    <h2 className="font-semibold text-2xl mb-5 text-[#121214] ">Entre em Contato</h2>
                    <FormContact />
                </div>
            </section>
        </main>
    );
}