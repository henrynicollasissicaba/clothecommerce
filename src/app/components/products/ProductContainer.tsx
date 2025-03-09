import ChildrenProps from "@/app/types/common"
import React from "react"

export default function ProductContainer({ children }: ChildrenProps){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 mx-2 md:mx-4 mt-10">
            {children}
        </div>
    )
}