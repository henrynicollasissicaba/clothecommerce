import { testimonials } from "@/app/utils";
import Heading from "../Heading";
import TestimonialsContainer from "../testimonials/TestimonialsContainer";
import { TestimonialsItem, TestimonialsProfilePhoto, TestimonialsReview, TestimonialsUsername } from "../testimonials/TestimonialsItem";
import RatingStars from "../RatingStars";

export default function Testimonials(){
    return(
        <section id="testimonials" className="mt-16">
            <Heading>Avaliações</Heading>

            <TestimonialsContainer>
                {testimonials.map((item) => (
                    <TestimonialsItem key={item.id}>
                        <TestimonialsProfilePhoto src={item.profilePhoto} />
                        <RatingStars />
                        <TestimonialsUsername>{item.username}</TestimonialsUsername>
                        <TestimonialsReview>{item.review}</TestimonialsReview>
                    </TestimonialsItem>
                ))}
            </TestimonialsContainer>
        </section>
    )
}