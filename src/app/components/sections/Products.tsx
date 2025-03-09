"use client"

import { products } from "@/app/utils";
import Heading from "../Heading";
import ProductContainer from "../products/ProductContainer";
import ProductItem from "../products/ProductItem";
import ProductImage from "../ProductImage";
import { ProductDiscountPrice, ProductFullPrice, ProductPricesContainer } from "../products/ProductPrices";
import ProductLabel from "../products/ProductLabel";
import RatingStars from "../RatingStars";
import ProductButtonsContainer from "../products/ProductButtons";
import { useState } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Products(){
    const INITIAL_PRODCUTS_LIMIT = 10

    const [visibleProducts, setVisibleProducts] = useState(INITIAL_PRODCUTS_LIMIT)

    return(
        <section id="products" className="pt-16">
            <Heading>Produtos</Heading>

            <ProductContainer>
                {products.slice(0, visibleProducts).map((item) => (
                    <ProductItem key={item.id} productId={item.id} >
                        <ProductImage src={item.productImg} alt={item.productLabel} />
                        <div className="flex flex-col -mr-1">
                            <ProductLabel>{item.productLabel}</ProductLabel>
                            <RatingStars />
                            <ProductPricesContainer>
                                <ProductDiscountPrice>R$49,90</ProductDiscountPrice>
                                <ProductFullPrice>R$59,90</ProductFullPrice>
                            </ProductPricesContainer>
                            <ProductButtonsContainer />
                            <Link 
                                href={`/products/${item.id}`}
                                className="mt-4 flex gap-2 items-center text-emerald"
                            >
                                <FaExternalLinkAlt />
                                Ver produto
                            </Link>
                        </div>
                    </ProductItem>
                ))}
            </ProductContainer>
            {visibleProducts < products.length && (
                <div className="flex items-center justify-center w-full">
                    <button
                        onClick={() => setVisibleProducts(visibleProducts + 5)}
                        className="bg-emerald text-white px-4 py-2 hover:bg-white border-2 border-transparent
                        hover:text-emerald hover:border-emerald font-bold transition-colors rounded-md mt-10 cursor-pointer
                        shadow-md"
                    >
                        Carregar mais produtos
                    </button>
                </div>
            )}
        </section>
    )
}