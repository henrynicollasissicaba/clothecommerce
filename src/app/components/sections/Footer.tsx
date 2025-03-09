import { contacts, menu, paymentMethods } from "@/app/utils";
import Logo from "../Logo";
import Image from "next/image";
import { FooterContainer, FooterHeading, FooterWrapper } from "../footer/FooterContainer";

export default function Footer(){
    return(
        <footer className="mt-16 bg-gray-900 p-4">
            <div className="mt-16 flex flex-wrap justify-between gap-10">
                <FooterContainer>
                    <FooterHeading>Contatos</FooterHeading>
                    <FooterWrapper>
                        {contacts.map((item) => (
                            <p
                                key={item.id}
                                className="text-gray-400"
                            >
                                {item.contactLabel} <span className="block text-white">{item.contactText}</span>
                            </p>
                        ))}
                    </FooterWrapper>
                </FooterContainer>

                <FooterContainer>
                <FooterHeading>Links rápidos</FooterHeading>
                    <FooterWrapper>
                        {menu.map((item) => (
                            <a 
                                key={item.id}
                                href={item.link}
                                className="text-white hover:text-emerald transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </FooterWrapper>
                </FooterContainer>
                <FooterContainer>
                    <FooterHeading>Formas de pagamento</FooterHeading>
                    <div className="flex gap-4 max-w-[3rem]">
                        {paymentMethods.map((item) => (
                            <Image 
                                key={item.id} 
                                src={item.src} 
                                alt={item.alt} 
                            />
                        ))}
                    </div>
                </FooterContainer>
            </div>
            <p className="text-emerald-500 text-xs text-center mt-10">Copyright &copy;{new Date().getFullYear()} | Todos os direitos reservados</p>
        </footer>
    )
}