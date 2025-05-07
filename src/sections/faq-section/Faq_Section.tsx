import { OrangeLink_Btn } from "../../components/orangeLink_btn/OrangeLink_Btn"
import { Questions_Layout } from "../../layouts/questions_layout/Questions_Layout";
import { Container, TextDiv } from "./Faq_Section.style"
import { motion } from "framer-motion";



export const Faq_Section = () => {


    return (
        <Container>
            <TextDiv>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                >PREGUNTAS FRECUENTES</motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: .2 }}
                    viewport={{ amount: 1, once: true }}
                >Sabemos que a la hora de contratar un servicio surgen dudas. Por eso, reunimos las preguntas más comunes para ayudarte a resolverlas rápido y sin vueltas. Si no encontrás lo que buscás, no dudes en escribirnos. Estamos para ayudarte.</motion.p>
                <OrangeLink_Btn
                    aria-label="Ir a sección de contacto"
                    href="#CONTACTO"
                    name="Contactarse"
                />
            </TextDiv>

            <Questions_Layout />
        </Container>
    )
}