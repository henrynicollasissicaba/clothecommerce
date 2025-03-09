import React from "react"

interface HighlightWordProps {
    children: React.ReactNode
    className?: string
    color: keyof typeof colorVariants
}

const colorVariants = {
    lightBlue: "text-light-blue",
    brown: "text-brown",
    darkBrown: "text-dark-brown",
    gray: "text-gray"
}

export default function HighlightWord({ color, children, className }: HighlightWordProps){
    return(
        <span 
            className={`font-bold ${colorVariants[color]} ${className}`}
        >
            {children}
        </span>
    )
}