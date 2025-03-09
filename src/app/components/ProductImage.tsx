import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductImageProps {
    src: StaticImageData
    alt: string
}

export default function ProductImage({ src, alt }: ProductImageProps){
    return(
        <div className="border-emerald border-2 rounded-md overflow-hidden w-[140px] h-full cursor-pointer">
            <Image 
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="transition-transform hover:scale-125 rounded-md h-full w-full object-cover"
            />
        </div>
    )
}