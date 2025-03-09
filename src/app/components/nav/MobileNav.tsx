"use client"

import { useState } from "react"
import CloseMenu from "../CloseMenu"
import HamburgerMenu from "../HamburgerMenu"
import { menu } from "@/app/utils"
import Searchbar from "../Searchbar"
import Cart from "../Cart"
import Favorites from "../Favorites"

export default function MobileNav(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-2 cursor-pointer md:hidden"
            >
                {isOpen ? <CloseMenu /> : <HamburgerMenu />}
            </button>

            <nav 
                className="absolute w-[32rem] max-w-[90%] top-18 left-1/2 transform -translate-x-1/2 bg-stone-100 z-50 
                md:hidden rounded-md"
            >
                {isOpen && (
                    <ul className="rounded p-4 flex flex-col gap-2 shadow w-full">
                        {menu.map((item) => {
                            const Icon = item.icon

                            return(
                                <li 
                                    key={item.id}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between focus-within:text-emerald-500 
                                    hover:text-emerald-500 cursor-pointer outline-0 transition-colors font-medium"
                                >
                                    <a 
                                        href={item.link} 
                                        className="p-1 transition-colors w-full"
                                    >
                                        {item.label}
                                    </a>
                                    <Icon/>
                                </li>
                            )
                        })}
                        <div className="flex justify-center gap-3 mt-6">
                            <Cart />
                            <Favorites />
                        </div>
                        <div className="w-full mt-10">
                            <Searchbar className="w-full" />
                        </div>
                    </ul>
                )}
            </nav>
        </>
    )
}