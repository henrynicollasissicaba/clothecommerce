import ChildrenProps from "@/app/types/common";

function FooterContainer({ children }: ChildrenProps){
    return(
        <div className="flex flex-col gap-4">
            {children}
        </div>
    )
}

function FooterHeading({ children }: ChildrenProps){
    return(
        <span className="text-2xl text-emerald-500 font-bold">
            {children}
        </span>
    )
}

function FooterWrapper({ children }: ChildrenProps){
    return(
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

export { FooterContainer, FooterHeading, FooterWrapper }