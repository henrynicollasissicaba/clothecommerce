import React from "react"
import AddToFavoriteButton from "../buttons/AddToFavoriteButton"

interface ProductItemProps {
    children: React.ReactNode
    productId: number
}

export default function ProductItem({ children, productId }: ProductItemProps){
    return(
        <div 
            aria-label="product item" 
            className="relative p-2 bg-gray-200 border-2 border-gray-300 rounded-md flex gap-3 items-center"
        >
            {children}
            <AddToFavoriteButton initialChecked={false} productId={productId} />
        </div>
    )
}