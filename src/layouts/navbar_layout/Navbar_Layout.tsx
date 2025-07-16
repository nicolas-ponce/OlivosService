import { AgendarVisita_Btn } from "../../components/agendarVisita_btn/AgendarVisita_Btn"
import { DIV, ImgDiv, Logo, MobileNav, NAV, HamburgerIcon, HamburgerLine, StyledA } from "./Navbar_Layout.style"
import logo from "../../assets/imgs/Logo.webp"
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, stagger } from "framer-motion";



export const Navbar_Layout = () => {

    const [isLessThan769, setIsLessThan769] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Hook para detectar el tamaño de la pantalla
    // useEffect para manejar el resize correctamente

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setIsLessThan769(window.innerWidth < 769);
    };

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

    const MenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, staggerChildren: 0.1 }
         }
    }

    const MenuLinksVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
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


                { !isLessThan769 && (
                                    <NAV
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <StyledA variants={linkVariants} aria-label="Ir a pantalla inicial" href="#">HOME</StyledA>
                    <StyledA variants={linkVariants} aria-label="Ir a sección de servicios prestados" href="#SERVICIOS">SERVICIOS</StyledA>
                    <StyledA variants={linkVariants} aria-label="Ir a sección de alcance de servicios" href="#ALCANCE">ALCANCE</StyledA>
                    <StyledA variants={linkVariants} aria-label="Ir a sección de sobre nosotros" href="#SOBRE_NOSOTROS">SOBRE NOSOTROS</StyledA>
                    <StyledA variants={linkVariants} aria-label="Ir a sección de preguntas frecuentes" href="#PREGUNTAS_FRECUENTES">PREGUNTAS FRECUENTES</StyledA>
                    <StyledA variants={linkVariants} aria-label="Ir a sección de contacto" href="#CONTACTO">CONTACTO</StyledA>
                </NAV>
                )}

                <AgendarVisita_Btn />

                { isLessThan769 && (
                    <div>
                        <HamburgerIcon onClick={handleMenuToggle}>
                            <HamburgerLine></HamburgerLine>
                            <HamburgerLine></HamburgerLine>
                            <HamburgerLine></HamburgerLine>
                        </HamburgerIcon>

                        <AnimatePresence>
                        {isMenuOpen && (
                            <MobileNav
                                key={"mobile-nav"}
                                variants={MenuVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a pantalla inicial" href="#">HOME</StyledA>
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a sección de servicios prestados" href="#SERVICIOS">SERVICIOS</StyledA>
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a sección de alcance de servicios" href="#ALCANCE">ALCANCE</StyledA>
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a sección de sobre nosotros" href="#SOBRE_NOSOTROS">SOBRE NOSOTROS</StyledA>
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a sección de preguntas frecuentes" href="#PREGUNTAS_FRECUENTES">PREGUNTAS FRECUENTES</StyledA>
                                <StyledA variants={MenuLinksVariants} aria-label="Ir a sección de contacto" href="#CONTACTO">CONTACTO</StyledA>
                            </MobileNav>
                        )}
                        </AnimatePresence>


                    </div>
                    )}
            </DIV>
        </>
    )
}