import cartIcon from "@/app/assets/icons/cart.svg"
import Image from "next/image"

export default function Cart(){
    return(
        <div className="relative">
            <Image 
                src={cartIcon}
                alt="cart icon"
                className="w-9"
            />
            <span 
                className="absolute -top-1 -right-2 bg-emerald px-2 py-1 rounded-full text-[10px] font-bold text-white"
            >
                5
            </span>
        </div>
    )
}