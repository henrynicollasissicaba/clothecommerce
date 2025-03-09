import { FaCartArrowDown } from "react-icons/fa6";

export default function AddToCartButton(){
    return(
        <button
            className="bg-emerald text-white px-2 py-2 rounded-lg transition-all duration-300 hover:bg-white
            hover:text-emerald mt-4 cursor-pointer w-fit"
            aria-label="add to cart button"
        >
            <FaCartArrowDown 
                className="text-lg"
            />
        </button>
    )
}