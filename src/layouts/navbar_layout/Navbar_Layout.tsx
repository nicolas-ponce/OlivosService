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
                    <a href="#">HOME</a>
                    <a href="#SERVICIOS">SERVICIOS</a>
                    <a href="#ALCANCE">ALCANCE</a>
                    <a href="#SOBRE_NOSOTROS">SOBRE NOSOTROS</a>
                    <a href="#PREGUNTAS_FRECUENTES">PREGUNTAS FRECUENTES</a>
                    <a href="#CONTACTO">CONTACTO</a>
                </NAV>
                <AgendarVisita_Btn />
            </DIV>
        </>
    )
}