import React from "react"

interface CategoryItemProps {
    children: React.ReactNode
}

export default function CategoryItem({ children }: CategoryItemProps){
    return(
        <div 
            className="flex-[0_0_auto] mb-1.5 p-2 bg-gray-200 border-2 border-gray-300 rounded-md overflow-hidden
            flex flex-col gap-3 cursor-pointer"
        >
            {children}
        </div>
    )
}