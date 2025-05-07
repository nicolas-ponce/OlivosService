import { AgendarVisita_Btn } from "../../components/agendarVisita_btn/AgendarVisita_Btn"
import { DIV, ImgDiv, Logo, NAV } from "./Navbar_Layout.style"
import { motion } from "framer-motion";
import logo from "../../assets/imgs/Logo.webp"



export const Navbar_Layout = () => {

    const navVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    }


    return (
        <>
            <DIV
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeInOut" }}
            >
                <ImgDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Logo src={logo} alt="Logo" />
                </ImgDiv>

                <NAV
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.a variants={linkVariants} aria-label="Ir a pantalla inicial" href="#">HOME</motion.a>
                    <motion.a variants={linkVariants} aria-label="Ir a sección de servicios prestados" href="#SERVICIOS">SERVICIOS</motion.a>
                    <motion.a variants={linkVariants} aria-label="Ir a sección de alcance de servicios" href="#ALCANCE">ALCANCE</motion.a>
                    <motion.a variants={linkVariants} aria-label="Ir a sección de sobre nosotros" href="#SOBRE_NOSOTROS">SOBRE NOSOTROS</motion.a>
                    <motion.a variants={linkVariants} aria-label="Ir a sección de preguntas frecuentes" href="#PREGUNTAS_FRECUENTES">PREGUNTAS FRECUENTES</motion.a>
                    <motion.a variants={linkVariants} aria-label="Ir a sección de contacto" href="#CONTACTO">CONTACTO</motion.a>
                </NAV>

                <AgendarVisita_Btn />
            </DIV>
        </>
    )
}