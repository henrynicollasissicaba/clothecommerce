import React from "react"

// --------------------- ICONS ---------------------
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { StaticImageData } from "next/image";

import visaIcon from "@/app/assets/icons/visa.svg"
import mastercardIcon from "@/app/assets/icons/mastercard.svg"
import eloIcon from "@/app/assets/icons/elo.svg"

// --------------------- CATEGORY IMGS ---------------------
import categoryImages from '@/app/utils/images/categoryImgs';

// --------------------- PRODUCTS IMGS ---------------------
import productImages from "@/app/utils/images/productsImgs";

// --------------------- SERVICES IMGS ---------------------
import servicesImages from "./images/servicesImg";
import testimonialImgs from "./images/testimonialImgs";

// --------------------- MENU ITEMS ---------------------
interface MenuItems {
    id: number
    link: string
    label: string
    icon: React.ComponentType
}

const menu: MenuItems[] = [
    { id: 1, link: "#home", label: "Início", icon: FaHome },
    { id: 2, link: "#categories", label: "Categorias", icon: BiCategory },
    { id: 3, link: "#products", label: "Produtos", icon: FiPackage },
    { id: 4, link: "#services", label: "Serviços", icon: GrServices },
]

// --------------------- CATEGORIES LIST ---------------------
interface CategoriesProps {
    id: number
    categoryLabel: string
    categoryImg: StaticImageData
}

const categories: CategoriesProps[] = [
    { id: 1, categoryLabel: "Camisas", categoryImg: categoryImages[0] },
    { id: 2, categoryLabel: "Bolsas", categoryImg: categoryImages[1] },
    { id: 3, categoryLabel: "Sandálias", categoryImg: categoryImages[2] },
    { id: 4, categoryLabel: "Boné de Lenço", categoryImg: categoryImages[3] },
    { id: 5, categoryLabel: "Sapatos", categoryImg: categoryImages[4] },
    { id: 6, categoryLabel: "Fronhas", categoryImg: categoryImages[5] },
    { id: 7, categoryLabel: "Calças", categoryImg: categoryImages[6] },
    { id: 8, categoryLabel: "Chapéus", categoryImg: categoryImages[7] },
]

// --------------------- PRODUCTS LIST ---------------------
interface ProductsProps {
    id: number
    productLabel: string
    productImg: StaticImageData
}

const products: ProductsProps[] = [
    { id: 1, productLabel: "Camisa masculina", productImg: productImages[0] },
    { id: 2, productLabel: "Camisa masculina", productImg: productImages[1] },
    { id: 3, productLabel: "Tênis masculino", productImg: productImages[2] },
    { id: 4, productLabel: "Calça feminina", productImg: productImages[3] },
    { id: 5, productLabel: "Calça feminina", productImg: productImages[4] },
    { id: 6, productLabel: "Chapéu", productImg: productImages[5] },
    { id: 7, productLabel: "Chapéu", productImg: productImages[6] },
    { id: 8, productLabel: "Camisa masculina", productImg: productImages[7] },
    { id: 9, productLabel: "Camisa feminina", productImg: productImages[8] },
    { id: 10, productLabel: "Camisa feminina", productImg: productImages[9] },
    { id: 11, productLabel: "Camisa masculina", productImg: productImages[10] },
    { id: 12, productLabel: "Camisa masculina", productImg: productImages[11] },
    { id: 13, productLabel: "Sandália feminina", productImg: productImages[12] },
    { id: 14, productLabel: "Sandália feminina", productImg: productImages[13] },
    { id: 15, productLabel: "Calça feminina", productImg: productImages[14] },
    { id: 16, productLabel: "Calça feminina", productImg: productImages[15] },
    { id: 17, productLabel: "Camisa feminina", productImg: productImages[16] },
    { id: 18, productLabel: "Bolsa", productImg: productImages[17] },
    { id: 19, productLabel: "Bolsa", productImg: productImages[18] },
    { id: 20, productLabel: "Camisa masculina", productImg: productImages[19] },
]

// --------------------- SERVICES LIST ---------------------
interface ServicesProps {
    id: number
    serviceLabel: string
    serviceText: string
    serviceImg: StaticImageData
}

const services: ServicesProps[] = [
    { 
        id: 1, 
        serviceLabel: "🏆 Melhores produtos", 
        serviceText: "Nossa seleção traz as tendências mais desejadas, com tecidos e acabamentos de alta qualidade para você arrasar em qualquer ocasião.", 
        serviceImg: servicesImages[0] 
    },
    { 
        id: 2, 
        serviceLabel: "🔒 Pagamento seguro", 
        serviceText: "Seus dados estão protegidos com a melhor tecnologia de segurança. Pagamento fácil, rápido e sem preocupações.", 
        serviceImg: servicesImages[1] 
    },
    { 
        id: 3, 
        serviceLabel: "🚀 Entrega rápida", 
        serviceText: "Enviamos para todo o Brasil com agilidade e eficiência. Rastreie sua compra e receba no conforto de casa.", 
        serviceImg: servicesImages[2] 
    },
]

// --------------------- TESTIMONIALS LIST ---------------------

interface TestimonialsProps {
    id: number
    username: string
    review: string
    profilePhoto: StaticImageData
}

const testimonials: TestimonialsProps[] = [
    { 
        id: 1, 
        username: "John W.", 
        review: "A qualidade das peças me surpreendeu! O tecido é ótimo, o caimento perfeito e a entrega foi super rápida. Com certeza vou comprar novamente!", 
        profilePhoto: testimonialImgs[0] 
    },
    { 
        id: 2, 
        username: "Carla R.", 
        review: "Amei minha experiência de compra! Atendimento excelente, preços justos e entrega antes do prazo. Recomendo demais!", 
        profilePhoto: testimonialImgs[1] 
    },
    { 
        id: 3, 
        username: "Myke A.", 
        review: "Site confiável e seguro. Fiz minha compra sem medo e chegou tudo certinho! As roupas são estilosas e idênticas às fotos. Valeu muito a pena!", 
        profilePhoto: testimonialImgs[2] 
    },
]

// --------------------- CONTACT LIST ---------------------

interface ContactProps {
    id: number
    contactLabel: string
    contactText: string
}

const contacts: ContactProps[] = [
    { id: 1, contactLabel: "Telefone:", contactText: "+55 (99) 99999-9999"},
    { id: 2, contactLabel: "Endereço:", contactText: "Rua John Doe, 123"},
    { id: 3, contactLabel: "Email:", contactText: "clothecommerce@email.com"},
    { id: 4, contactLabel: "Horário de funcionamento:", contactText: "08:00 - 18:00"}
]

// --------------------- PAYMENT METHOD LIST ---------------------

interface PaymentMethodProps {
    id: number
    src: StaticImageData
    alt: string
}

const paymentMethods: PaymentMethodProps[] = [
    { id: 1, src: visaIcon, alt: "visa" },
    { id: 2, src: mastercardIcon, alt: "mastercard" },
    { id: 3, src: eloIcon, alt: "elo" }
]



// --------------------- EXPORTING DATA ---------------------

export { 
    menu, 
    categories, 
    products, 
    services,
    testimonials,
    contacts,
    paymentMethods,
}