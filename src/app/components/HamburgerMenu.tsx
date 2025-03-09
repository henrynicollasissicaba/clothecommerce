import Image from "next/image";
import MenuBurgerIcon from "@/app/assets/icons/menu-burger.svg"

export default function HamburgerMenu(){
    return(
        <Image 
            src={MenuBurgerIcon}
            alt="menu burger icon"
            width={30}
            height={30}
        />
    )
}