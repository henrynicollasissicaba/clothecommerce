import Header from "./Header";

export default function HomePage(){
    return(
        <section 
            className="w-full min-h-lvh bg-[url(/home.jpg)] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            id="home"
        >
            <div className="bg-linear-to-r from-neutral-900/50 to-neutral-900/50 absolute top-0 left-0 w-full h-full"></div>
            <Header />
            <div 
                className="z-10 mx-4 max-w-[40rem] flex flex-col gap-6 text-center items-center text-white"
            >
                <h1 
                    className="text-3xl sm:text-4xl md:text-6xl font-bold px-3"
                >
                    O Estilo fala por si só!
                </h1>
                <p
                    className="max-w-[35rem]"
                >
                    Cada peça foi escolhida para traduzir personalidade, confiança e elegância, 
                    unindo conforto e inovação em um guarda-roupa que reflete sua autenticidade.
                </p>
                <a 
                    href="#products"
                    className="px-6 py-2 bg-emerald text-white rounded-lg transition-all hover:bg-white 
                    hover:text-emerald border-2 border-transparent hover:border-emerald font-bold mt-4 cursor-pointer"
                >
                    Comprar agora!
                </a>
            </div>
        </section>
    )
}