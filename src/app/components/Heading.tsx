import React from "react"

interface HeadingProps {
    children: React.ReactNode
}

export default function Heading({ children }: HeadingProps){
    return(
        <h2 
            className="text-4xl font-bold text-emerald ml-[5%] relative w-fit before:absolute before:-bottom-3
            before:right-0 before:w-1/2 before:h-2 before:bg-emerald"
        >
            {children}
        </h2>
    )
}