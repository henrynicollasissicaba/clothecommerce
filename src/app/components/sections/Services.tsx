import { services } from "@/app/utils";
import ServiceContainer from "../comercial-services/ServiceContainer";
import Heading from "../Heading";
import ServiceItem from "../comercial-services/ServiceItem";
import ServiceImage from "../comercial-services/ServiceImage";
import { ServiceText, ServiceTitle } from "../comercial-services/ServiceText";

export default function Services(){
    return(
        <section className="pt-16" id="services">
            <Heading>Serviços</Heading>

            <ServiceContainer>
                {services.map((item) => (
                    <ServiceItem key={item.id}>
                        <ServiceImage src={item.serviceImg} alt={item.serviceLabel} />
                        <ServiceTitle>{item.serviceLabel}</ServiceTitle>
                        <ServiceText>{item.serviceText}</ServiceText>
                    </ServiceItem>
                ))}
            </ServiceContainer>
        </section>
    )
}