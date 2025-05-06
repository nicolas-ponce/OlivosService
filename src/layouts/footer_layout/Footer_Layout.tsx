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
                        whileHover={{y: -4}}
                    href="#">
                        <img src={whatsappIcon} alt="Icono de Whatsapp" />
                    </motion.a>
                    <motion.a
                        whileHover={{y: -4}}                        
                    href="#">
                        <img src={facebookIcon} alt="Icono de Facebook" />
                    </motion.a>
                    <motion.a
                        whileHover={{y: -4}}                    
                    href="#">
                        <img src={instagramIcon} alt="Icono de Instagram" />
                    </motion.a>
                </IconsDiv>

                <Line />

                <p>Dev & Design by <motion.a initial={{opacity: 0.8}} whileHover={{ opacity: 1 }} href="https://nicolasponce.vercel.app/">Nicolás Ponce</motion.a></p>
            </TextDiv>
        </Container>   
    )
}