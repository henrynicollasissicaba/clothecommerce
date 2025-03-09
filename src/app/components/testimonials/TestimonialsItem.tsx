import ChildrenProps from "@/app/types/common";
import Image, { StaticImageData } from "next/image";

export function TestimonialsItem({ children }: ChildrenProps){
    return(
        <div className="flex flex-col gap-5 items-center p-4 max-w-[400px] border-2 border-gray-300 bg-gray-200 rounded-md">
            {children}
        </div>
    )
}

export function TestimonialsProfilePhoto({ src }: { src: StaticImageData }){
    return(
        <Image 
            src={src} 
            alt="foto de perfil"
            className="w-[200px] aspect-square rounded-full object-cover border-2 border-emerald"
        />
    )
}

export function TestimonialsUsername({ children }: ChildrenProps){
    return(
        <h2 className="text-2xl font-bold border-b-[2px] border-emerald">
            {children}
        </h2>
    )
}

export function TestimonialsReview({ children }: ChildrenProps){
    return(
        <p className="text-gray-800 text-center text-lg">
            {children}
        </p>
    )
}
