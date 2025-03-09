import { menu } from "@/app/utils";

export default function DesktopNav(){
    return(
        <nav className="hidden md:flex md:gap-4">
            {menu.map((item) => (
                <a 
                    key={item.id}
                    href={item.link}
                    className={`text-emerald hover:text-emerald-500 font-medium transition-colors`}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    )
}