import mapa_img from '../../assets/imgs/zonas-mapa.webp'
import { Container, Img, ImgDiv, ListContainer, SingleDivList, TextDiv } from './Alcance_Section.style'
import { motion } from 'framer-motion';

const ulVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const listVariants = {
    hidden: {opacity: 0, x: 20},
    visible: { opacity: 1, x: 0 }
}

export const Alcance_Section = () => {



    return (
        <Container>
            <ImgDiv
                whileHover={{ scale: 1.2, transformOrigin: "center center" }}
            >
                <Img src={mapa_img} alt="Mapa de Alcance" />
            </ImgDiv>

            <TextDiv>
                <h2>ZONAS CUBIERTAS</h2>
                <p>Llegamos a todo <span>CABA</span>, <span>Zona Norte</span> y <span>Zona Oeste</span></p>
                <ListContainer>
                    <SingleDivList>
                        <p>CABA</p>
                        <motion.ul
                            variants={ulVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4}}
                        >
                            <motion.li variants={listVariants}>Todas las comunas y barrios de Capital Federal</motion.li>
                        </motion.ul>
                    </SingleDivList>
                    <SingleDivList>
                        <p>Zona Norte</p>
                        <motion.ul
                            variants={ulVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4}}
                        >
                            <motion.li variants={listVariants}>Escobar</motion.li>
                            <motion.li variants={listVariants}>José C. Paz</motion.li>
                            <motion.li variants={listVariants}>Malvinas Argentinas</motion.li>
                            <motion.li variants={listVariants}>Pilar</motion.li>
                            <motion.li variants={listVariants}>San Fernando</motion.li>
                            <motion.li variants={listVariants}>San Isidro</motion.li>
                            <motion.li variants={listVariants}>San Martín</motion.li>
                            <motion.li variants={listVariants}>Tigre</motion.li>
                            <motion.li variants={listVariants}>Tres de Febrero</motion.li>
                            <motion.li variants={listVariants}>Vicente López</motion.li>
                        </motion.ul>
                    </SingleDivList>
                    <SingleDivList>
                        <p>Zona Oeste</p>
                        <motion.ul
                            variants={ulVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4}}
                        >
                            <motion.li variants={listVariants}>General Rodriguez</motion.li>
                            <motion.li variants={listVariants}>Hurlingham</motion.li>
                            <motion.li variants={listVariants}>Ituzaingó</motion.li>
                            <motion.li variants={listVariants}>La Matanza</motion.li>
                            <motion.li variants={listVariants}>Merlo</motion.li>
                            <motion.li variants={listVariants}>Moreno</motion.li>
                            <motion.li variants={listVariants}>Morón</motion.li>
                            <motion.li variants={listVariants}>Tres de Febrero</motion.li>
                        </motion.ul>
                    </SingleDivList>
                </ListContainer>
            </TextDiv>
        </Container>
    )
}