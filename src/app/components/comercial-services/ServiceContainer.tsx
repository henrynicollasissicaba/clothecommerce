import ChildrenProps from "@/app/types/common";

export default function ServiceContainer({ children }: ChildrenProps){
    return(
        <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-2 sm:mx-4 md:px-3 md:mx-auto max-w-[60rem] 
            mt-16 justify-items-center"
        >
            {children}
        </div>
    )
}