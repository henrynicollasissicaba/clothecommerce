import Image, { StaticImageData } from "next/image";

interface ServiceImageProps {
    src: StaticImageData,
    alt: string
}

export default function ServiceImage({ src, alt }: ServiceImageProps){
    return(
        <Image src={src} alt={alt} className="border-2 border-emerald rounded-md bg-white w-[310px] aspect-square" />
    )
}