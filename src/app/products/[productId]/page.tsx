import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import RatingStars from "@/app/components/RatingStars"
import { products } from "@/app/utils"
import Image from "next/image"
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ productId: string }> }){
    const productId = +(await params).productId

    const product = products.find(item => item.id === productId)
    if (!product) return

    return(
        <main 
            className="max-w-[65rem] w-full min-h-lvh mx-auto bg-gray-200 flex gap-10 items-center px-4 py-4 justify-evenly flex-wrap"
        >
            <Image 
                src={product.productImg}
                alt={product.productLabel}
                className="w-80 border-2 border-emerald rounded-md"
            />
            <div className="flex flex-col gap-8 max-w-[25rem] w-full">
                <div className="flex flex-col">
                    <span className="text-xl text-gray-700">Item:</span>
                    <h1 className="text-3xl font-bold">{product.productLabel}</h1>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl text-gray-700">Avaliações: </span>
                    <RatingStars />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl text-gray-700">Preço: </span>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl text-emerald font-bold">R$49,90</span>
                        <span className="text-xl text-gray-600 line-through">R$59,90</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        className="global-button-style w-[6rem] px-3 py-1.5 flex justify-center items-center"
                        aria-label="add to cart button"
                    >
                        <FaCartArrowDown 
                            className="text-lg"
                        />
                    </button>
                    <button
                        className="global-button-style py-1.5 cursor-pointer w-[15rem]"
                        aria-label="buy button"
                    >
                        Comprar
                    </button>
                </div>
                <Link href="/#products" className="text-emerald mt-10 flex gap-2 items-center">
                    <IoMdArrowBack className="text-2xl" />
                    Voltar para página inicial
                </Link>
            </div>
        </main>
    )
}