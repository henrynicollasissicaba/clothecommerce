"use client"

import { useEffect, useState } from "react";
import Logo from "../Logo";
import MobileNav from "../nav/MobileNav";
import Searchbar from "../Searchbar";
import DesktopNav from "../nav/DesktopNav";
import Cart from "../Cart";
import Favorites from "../Favorites";

export default function Header(){
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setScrolled(true)
            else setScrolled(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return(
        <header 
            className={`px-4 fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-white
                ${scrolled ? "shadow-md py-1.5" : "py-3.5 shadow-none" }`}
        >
            <div className="flex items-center justify-between">
                <Logo />
                <MobileNav />
                <DesktopNav />
                <div className="gap-3 hidden md:flex">
                    <Cart />
                    <Favorites />
                </div>
                <div className="hidden md:block">
                    <Searchbar className="w-[15rem]" />
                </div>
            </div>
        </header>
    )
}