import whatsappIcon from "../../assets/svgs/whatsapp-brands.svg"
import facebookIcon from "../../assets/svgs/facebook-f-brands.svg"
import instagramIcon from "../../assets/svgs/instagram-brands.svg"
import { BlackBlock, BlueBlock, Container, IconsDiv, Line, TextDiv } from "./Footer_Layout.style"
import {motion} from "framer-motion";



export const Footer_Layout = () => {
    return (
        <Container>
            <BlueBlock />
            <BlackBlock />
            <TextDiv>
                <h6>Olivos Service</h6>
                <p>Copyright © 2025 Olivos Service. Todos los derechos reservados.</p>

                <IconsDiv>
                    <motion.a
                        aria-label="Chatear en Whatsapp"
                        whileHover={{y: -4}}
                        href="https://wa.me/5491127719502?text=Hola!%20Tengo%20una%20consulta,%20..."
                        target="_BLANK"
                    >
                        <img src={whatsappIcon} alt="Icono de Whatsapp" />
                    </motion.a>
                    <motion.a
                        aria-label="Visitar Facebook de Olivos Service"
                        whileHover={{y: -4}}                        
                        href="#"
                        target="_BLANK"
                    >
                        <img src={facebookIcon} alt="Icono de Facebook" />
                    </motion.a>
                    <motion.a
                        aria-label="Visitar Instagram de Olivos Service"
                        whileHover={{y: -4}}                    
                        href="#"
                        target="_BLANK"
                    >
                        <img src={instagramIcon} alt="Icono de Instagram" />
                    </motion.a>
                </IconsDiv>

                <Line />

                <p>Dev & Design by <motion.a initial={{opacity: 0.8}} whileHover={{ opacity: 1 }} href="https://nicolasponce.vercel.app/" target="_BLANK">Nicolás Ponce</motion.a></p>
            </TextDiv>
        </Container>   
    )
}