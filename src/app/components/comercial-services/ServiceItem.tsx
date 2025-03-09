import ChildrenProps from "@/app/types/common";

export default function ServiceItem({ children }: ChildrenProps){
    return(
        <div
            className="bg-gray-200 p-3 rounded-md flex flex-col items-center gap-6 max-w-[350px] border-2 border-gray-300"
        >
            {children}
        </div>
    )
}