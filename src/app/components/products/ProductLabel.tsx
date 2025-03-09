import ChildrenProps from "@/app/types/common";

export default function ProductLabel({ children }: ChildrenProps){
    return(
        <p className="text-gray-800 font-medium text-lg md:text-xl">
            {children}
        </p>
    )
}