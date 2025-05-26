import { Container, DataBoxContainer, HeroImg, HeroImgDiv, HeroTextDiv } from "./Hero_Section.style"
import tecnicoHeroImg from "../../assets/imgs/tecnico-hero.webp"
import { DataBox } from "../../components/dataBox/DataBox"
import { motion } from "framer-motion";


export const Hero_Section = () => {
    return (
        <>
            <Container>
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >SERVICIO TÉCNICO</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >Expertos en sistemas de climatización, calefacción, refrigeración y aires acondicionados.</motion.p>
                </div>
                <HeroImgDiv
                    initial={{ opacity: 0 }}    
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <HeroImg src={tecnicoHeroImg} alt="Hero Image" />
                    <HeroTextDiv>
                        <h5 style={{ color: "white" }}>Instalación, Reparación y Mantenimiento</h5>
                        <p style={{ color: "white" }}>Nuestros servicios incluyen instalaciones, reparaciones y mantenimientos de tus artefactos hogareños</p>
                    </HeroTextDiv>
                </HeroImgDiv>
                
                <DataBoxContainer>
                    <DataBox
                        number="+50"
                        text="CLIENTES HABITUALES"
                        darkBck={false}
                        delayMotion={0.6}
                    />
                    <DataBox
                        number="+12"
                        text="AÑOS DE EXPERIENCIA"
                        darkBck={false}
                        delayMotion={0.8}
                    />
                    <DataBox
                        number="+1200"
                        text="SERVICIOS PRESTADOS"
                        darkBck={true}
                        delayMotion={1}
                    />
                </DataBoxContainer>
            </Container>
        </>
    )
}