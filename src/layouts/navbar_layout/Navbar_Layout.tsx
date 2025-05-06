import { AgendarVisita_Btn } from "../../components/agendarVisita_btn/AgendarVisita_Btn"
import { DIV, ImgDiv, Logo, NAV } from "./Navbar_Layout.style"
import logo from "../../assets/imgs/Logo.webp"



export const Navbar_Layout = () => {
    return (
        <>
            <DIV>
                <ImgDiv>
                    <Logo src={logo} alt="Logo" />
                </ImgDiv>
                <NAV>
                    <a aria-label="Ir a pantalla inicial" href="#">HOME</a>
                    <a aria-label="Ir a sección de servicios prestados" href="#SERVICIOS">SERVICIOS</a>
                    <a aria-label="Ir a sección de alcance de servicios" href="#ALCANCE">ALCANCE</a>
                    <a aria-label="Ir a sección de sobre nosotros" href="#SOBRE_NOSOTROS">SOBRE NOSOTROS</a>
                    <a aria-label="Ir a sección de preguntas frecuentes" href="#PREGUNTAS_FRECUENTES">PREGUNTAS FRECUENTES</a>
                    <a aria-label="Ir a sección de contacto" href="#CONTACTO">CONTACTO</a>
                </NAV>
                <AgendarVisita_Btn />
            </DIV>
        </>
    )
}