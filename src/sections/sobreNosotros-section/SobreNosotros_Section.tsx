import { Container, Box1_Container, Box1_ImgDiv, Box1_Info, Box2_Container, Box2_ImgDiv1, Box2_ImgDiv2, Box2_Text1, Box2_Text2, Box2_Text3, Box2_Title } from "./SobreNosotros_Section.style"
import tecnicoSonriendo_img from "../../assets/imgs/tecnico-sonriendo.webp"
import local_img from "../../assets/imgs/local.webp"
import tecnicoReparandoAire_img from "../../assets/imgs/tecnico-reparandoAire.webp"




export const SobreNosotros_Section = () => {

    const Box2ContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const Box2ItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }


    return (
        <Container>
            <Box1_Container>
                <Box1_Info
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.4, once: true }}
                >
                    <h2>SOBRE NOSOTROS</h2>
                    <p>
                        En Olivos Service llevamos más de 12 años brindando soluciones confiables en climatización, refrigeración y electricidad. Nacimos como un emprendimiento familiar con una sola camioneta y muchas ganas de crecer. Hoy somos un equipo consolidado que sigue apostando al esfuerzo y la cercanía con nuestros clientes.
                    </p>
                </Box1_Info>
                <Box1_ImgDiv
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    <img src={tecnicoReparandoAire_img} alt="Imagen del logo de Olivos Service" />
                </Box1_ImgDiv>
            </Box1_Container>

            {/* -------------------------------------------------------------------------- */}

            <Box2_Container
                variants={Box2ContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >
                <Box2_ImgDiv1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .3 }}
                    viewport={{ amount: 0.2, once: true }}
                >
                    <img src={tecnicoSonriendo_img} alt="Imagen de un técnico sonriendo" />
                </Box2_ImgDiv1>

                <Box2_Title variants={Box2ItemVariants}>Descubrí a una empresa amiga</Box2_Title>

                <Box2_Text1 variants={Box2ItemVariants}>
                    Olivos Service nació como un proyecto personal, impulsado por el esfuerzo de una sola persona con su vehículo como principal herramienta. Con los años y mucho trabajo, el emprendimiento se transformó en una empresa con local propio, más de seis colaboradores y un servicio cada vez más completo y profesional.
                </Box2_Text1>

                <Box2_Text2 variants={Box2ItemVariants}>
                    Nos especializamos en la instalación y reparación de equipos de aire acondicionado, cámaras frigoríficas, calefacción a gas y sistemas eléctricos. Atendemos tanto a hogares como a empresas, adaptándonos a las necesidades de cada cliente y ofreciendo soluciones eficientes, duraderas y seguras.
                </Box2_Text2>

                <Box2_Text3 variants={Box2ItemVariants}>
                    A pesar de los momentos difíciles, nunca bajamos los brazos. Gracias a esto, abrimos un local, sumamos gente al equipo y hasta un segundo negocio de compra-venta de aires acondicionados. Porque cuando hay voluntad, se nota en cada paso.
                </Box2_Text3>

                <Box2_ImgDiv2 variants={Box2ItemVariants}>
                    <img src={local_img} alt="Imagen del local" />
                </Box2_ImgDiv2>
            </Box2_Container>
        </Container>
    )
}