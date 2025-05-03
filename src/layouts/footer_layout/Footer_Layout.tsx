import whatsappIcon from "../../assets/svgs/whatsapp-brands.svg"
import facebookIcon from "../../assets/svgs/facebook-f-brands.svg"
import instagramIcon from "../../assets/svgs/instagram-brands.svg"
import { BlackBlock, BlueBlock, Container, IconsDiv, Line, TextDiv } from "./Footer_Layout.style"



export const Footer_Layout = () => {
    return (
        <Container>
            <BlueBlock />
            <BlackBlock />
            <TextDiv>
                <h6>Olivos Service</h6>
                <p>Copyright © 2025 Olivos Service. Todos los derechos reservados.</p>

                <IconsDiv>
                    <a href="#">
                        <img src={whatsappIcon} alt="Icono de Whatsapp" />
                    </a>
                    <a href="#">
                        <img src={facebookIcon} alt="Icono de Facebook" />
                    </a>
                    <a href="#">
                        <img src={instagramIcon} alt="Icono de Instagram" />
                    </a>
                </IconsDiv>

                <Line />

                <p>Dev & Design by <a href="https://nicolasponce.vercel.app/">Nicolás Ponce</a></p>
            </TextDiv>
        </Container>   
    )
}