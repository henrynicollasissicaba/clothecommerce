import SearchIcon from "@/app/assets/icons/search.svg"
import Image from "next/image"

interface SearchbarProps {
    className?: string
}

export default function Searchbar({ className }: SearchbarProps){
    return(
        <div className="relative">
            <input 
                type="text"
                placeholder="Procurar produto"
                className={`border-[1.5px] text-sm rounded py-2 pl-8 block
                focus:border-emerald outline-0 hover:border-emerald transition-colors ${className}`}
            />

            <Image 
                src={SearchIcon} 
                alt="search icon" 
                width={20} 
                height={20}
                className="absolute left-2 top-2.25"
            />
        </div>
    )
}