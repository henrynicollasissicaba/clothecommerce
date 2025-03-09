import Image from "next/image";
import favoriteIcon from "@/app/assets/icons/favorite.svg"

export default function Favorites(){
    return(
        <div className="relative">
            <Image
                src={favoriteIcon}
                alt="favorite icon"
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