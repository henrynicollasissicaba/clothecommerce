import CloseIcon from "@/app/assets/icons/close-menu.svg"
import Image from "next/image"

export default function CloseMenu(){
    return(
        <Image 
            src={CloseIcon}
            alt="close menu icon"
            width={30}
            height={30}
        />
    )
}