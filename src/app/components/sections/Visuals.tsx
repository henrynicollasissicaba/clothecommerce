import Image from "next/image";
import banner1 from "@/app/assets/banners/banner-1.jpg"
import banner2 from "@/app/assets/banners/banner-2.jpg"
import banner3 from "@/app/assets/banners/banner-3.jpg"
import banner4 from "@/app/assets/banners/banner-4.jpg"
import HighlightWord from "../HighlightWord";

export default function Visuals(){
    return(
        <section
            className="flex flex-col md:flex-row gap-1.5 mx-1.5 md:mx-auto mt-16 italic max-w-[55rem]"
        >
            <div className="flex-3 flex flex-col gap-1.5">
                <div className="flex-1 relative">
                    <Image 
                        src={banner1}
                        alt="banner 1"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 left-2 bg-white inset-shadow px-4 py-2 max-w-[12rem] rounded-md">
                        <p 
                            className="font-medium text-lg text-center"
                        >
                            Nova <HighlightWord color="lightBlue">coleção</HighlightWord>. 
                            Novo <HighlightWord color="lightBlue">estilo</HighlightWord>. Experimente!
                        </p>
                    </div>
                </div>
                <div className="flex-3 relative">
                    <Image 
                        src={banner3}
                        alt="banner 3"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 right-2 bg-white inset-shadow px-4 py-2 max-w-[12rem] rounded-md">
                        <p 
                            className="font-medium text-lg text-center"
                        >
                            Até <HighlightWord color="brown">50% OFF</HighlightWord>. Aproveite agora!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 md:flex-4 flex gap-1.5">
                <div className="flex-1 relative">
                    <Image 
                        src={banner2}
                        alt="banner 2"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-white inset-shadow px-4 py-2 rounded-md">
                        <p 
                            className="font-medium text-lg text-center"
                        >
                            Moda <HighlightWord color="gray">única</HighlightWord>, feita para você!
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image 
                        src={banner4}
                        alt="banner 4"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-white inset-shadow px-4 py-2 rounded-md">
                        <p 
                            className="font-medium text-lg text-center"
                        >
                            Exclusivo para você: <HighlightWord color="darkBrown">brindes</HighlightWord> especiais!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}