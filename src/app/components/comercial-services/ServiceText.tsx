import ChildrenProps from "@/app/types/common";

function ServiceTitle({ children }: ChildrenProps){
    return(
        <h3 className="text-center font-bold text-2xl text-emerald">
            {children}
        </h3>
    )
}

function ServiceText({ children }: ChildrenProps){
    return(
        <p className="text-gray-800 text-center text-lg">
            {children}
        </p>
    )
}

export { ServiceTitle, ServiceText }