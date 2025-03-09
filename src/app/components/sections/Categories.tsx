import { categories } from "@/app/utils";
import Heading from "../Heading";
import CategoryContainer from "../categories/CategoryContainer";
import CategoryItem from "../categories/CategoryItem";
import ProductImage from "../ProductImage";

export default function Categories(){
    return(
        <section id="categories" className="pt-16">
            <Heading>Categorias</Heading>

            <CategoryContainer>
                {categories.map((item) => (
                    <CategoryItem key={item.id}>
                        <ProductImage src={item.categoryImg} alt={item.categoryLabel} />
                        <p className="text-center text-gray-800 text-xl">{item.categoryLabel}</p>
                    </CategoryItem>
                ))}
            </CategoryContainer>
        </section>
    )
}