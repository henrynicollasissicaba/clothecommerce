import { FaCartArrowDown } from "react-icons/fa6";

function AddToCartButton(){
    return(
        <button
            className="global-button-style w-fit px-3 py-1.5"
            aria-label="add to cart button"
        >
            <FaCartArrowDown 
                className="text-lg"
            />
        </button>
    )
}

function BuyButton(){
    return(
        <button
            className="global-button-style py-1.5 cursor-pointer w-[8rem]"
            aria-label="buy button"
        >
            Comprar
        </button>
    )
}

export default function ProductButtonsContainer(){
    return(
        <div className="flex gap-2 mt-4">
            <AddToCartButton />
            <BuyButton />
        </div>
    )
}