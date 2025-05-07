import { Container, LinkDiv, TextDiv, TitleContainer } from "./Servicios_Section.style"
import { OrangeLink_Btn } from "../../components/orangeLink_btn/OrangeLink_Btn"
import { motion } from "framer-motion"
import { ServiceCarrousel_Layout } from "../../layouts/serviceCarrousel_Layout/ServiceCarrousel_Layout"



export const Servicios_Section = () => {

    const LinkDivVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.4 }
        }
    }

    return (
        <>
        <Container>
            <TitleContainer>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 1, once: true }}
                >EXCELENCIA CERTIFICADA</motion.h2>

                <TextDiv>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true, amount: 1 }}
                    >Para cualquier enredo con tu marca preferida, estamos listos para darte una mano. Conocemos bien el terreno y sabemos cómo solucionarlo.</motion.p>
                    <LinkDiv
                    variants={LinkDivVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <OrangeLink_Btn
                            href="#PREGUNTAS_FRECUENTES"
                            name="Preguntas Frecuentes"
                            aria-label="Ir a sección de preguntas frecuentes" 
                        />
                        <OrangeLink_Btn
                            href="#CONTACTO"
                            name="Contactarse"
                            aria-label="Ir a sección de contacto" 
                        />
                    </LinkDiv>
                </TextDiv>
            </TitleContainer>

            <ServiceCarrousel_Layout />
        </Container>

        </>
    )
}