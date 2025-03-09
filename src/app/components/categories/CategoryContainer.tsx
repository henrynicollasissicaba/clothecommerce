import React from "react"

interface CategoryContainerProps {
    children: React.ReactNode
}

export default function CategoryContainer({ children }: CategoryContainerProps){
    return(
        <div className="flex gap-4 overflow-x-auto custom-scrollbar mx-auto my-10 px-2 max-w-[72rem]">
            {children}
        </div>
    )
}