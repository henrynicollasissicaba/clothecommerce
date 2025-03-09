import ChildrenProps from "@/app/types/common"
import React from "react"

function ProductPricesContainer({ children }: ChildrenProps){
    return(
        <div className="flex gap-2 items-center mt-2">
            {children}
        </div>
    )
}

function ProductFullPrice({ children }: ChildrenProps){
    return(
        <span className="line-through text-sm text-gray-700">
            {children}
        </span>
    )
}

function ProductDiscountPrice({ children }: ChildrenProps){
    return(
        <span className="text-emerald font-medium text-xl">
            {children}
        </span>
    )
}

export { ProductPricesContainer, ProductFullPrice, ProductDiscountPrice }