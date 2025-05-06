import { CarrouselDiv, Container, LinkDiv, TextDiv, TitleContainer } from "./Servicios_Section.style"
import { ServiceCard } from "../../components/serviceCard/ServiceCard"
import heladera_img from "../../assets/imgs/reparacion-heladera.webp"
import aireAcondicionado_img from "../../assets/imgs/instalacion-aire-acondicionado.webp"
import trabajoAltura_img from "../../assets/imgs/instalacion-en-altura.webp"
import estufa_img from "../../assets/imgs/instalacion-estufaAGas.webp"
import lavarropa_img from "../../assets/imgs/reparacion-lavarropa.webp"
import { OrangeLink_Btn } from "../../components/orangeLink_btn/OrangeLink_Btn"



export const Servicios_Section = () => {
    return (
        <>
        <Container>
            <TitleContainer>
                <h2>EXCELENCIA CERTIFICADA</h2>
                <TextDiv>
                    <p>Para cualquier enredo con tu marca preferida, estamos listos para darte una mano. Conocemos bien el terreno y sabemos cómo solucionarlo.</p>
                    <LinkDiv>
                        <OrangeLink_Btn
                            href="#PREGUNTAS_FRECUENTES"
                            name="Preguntas Frecuentes"
                        />
                        <OrangeLink_Btn
                            href="#CONTACTO"
                            name="Contactarse"
                        />
                    </LinkDiv>
                </TextDiv>
            </TitleContainer>


            <CarrouselDiv>
                <ServiceCard
                    image={heladera_img}
                    title="Heladeras - Refrigeradores"
                    description={
                        <>
                            <p>
                                En Olivos Service ofrecemos soluciones completas para heladeras familiares, comerciales y sistemas de refrigeración en general.
                            </p>
                            <p>
                                Nos ocupamos de:
                            </p>
                            <ul>
                                <li>Reparación y mantenimiento de heladeras convencionales, no frost y comerciales.</li>
                                <li>Carga de gas refrigerante y detección de fugas.</li>
                                <li>Cambio de termostatos, motores y componentes eléctricos.</li>
                                <li>Instalación y puesta en marcha de cámaras frigoríficas y equipos de frío.</li>
                                <li>Asesoramiento técnico para negocios, locales gastronómicos y pequeños comercios.</li>
                            </ul>
                            <p>
                                Trabajamos con repuestos de calidad y ofrecemos un servicio confiable y eficiente para que tu equipo funcione como el primer día.
                            </p>
                        </>
                    }
                />
                <ServiceCard
                    image={trabajoAltura_img}
                    title="Trabajos en Altura"
                    description={
                        <>
                            <p>
                                En Olivos Service contamos con el equipo, la experiencia y las medidas de seguridad necesarias para realizar instalaciones y reparaciones en altura.
                            </p>
                            <p>Ya sea en fachadas, balcones o terrazas, ofrecemos soluciones seguras y eficientes para:</p>
                            <ul>
                                <li>Instalación de aires acondicionados en lugares de difícil acceso.</li>
                                <li>Reparación de unidades exteriores y sistemas de refrigeración.</li>
                                <li>Instalación de estructuras metálicas y soportes para equipos.</li>
                            </ul>
                            <p>
                                Cumplimos con todos los protocolos exigidos para este tipo de tareas, asegurando un servicio profesional y sin riesgos, tanto para nuestros técnicos como para tu propiedad.
                            </p>
                        </>
                    }
                />
                <ServiceCard
                    image={lavarropa_img}
                    title="Electrodomésticos"
                    description={
                        <>
                            <p>
                                En Olivos Service entendemos lo importante que son los electrodomésticos en el día a día. Por eso, ofrecemos un servicio técnico confiable y eficiente para que no tengas que preocuparte cuando alguno de tus equipos falle. Nos especializamos en la reparación, mantenimiento y puesta a punto de los principales electrodomésticos del hogar, siempre con atención personalizada y repuestos de calidad.
                            </p>
                            <p>Reparamos:</p>
                            <ul>
                                <li>Heladeras y freezers</li>
                                <li>Lavarropas automáticos y semiautomáticos</li>
                                <li>Secarropas, tanto eléctricos como por condensación</li>
                                <li>Cocinas y hornos, a gas o eléctricos</li>
                                <li>Microondas, con y sin grill</li>
                                <li>Termotanques y calefones de distintas capacidades y marcas</li>
                            </ul>
                            <p>
                                Realizamos un diagnóstico preciso y transparente, ofreciéndote la mejor solución posible según el estado de tu equipo. Podemos trabajar tanto en tu domicilio como en nuestro taller, según el caso.
                            </p>
                            <p>
                                Contamos con experiencia en marcas líderes como Whirlpool, Samsung, LG, Electrolux, Philco, Patrick, Mabe, Gafa, Bambi y Carrier, entre otras.
                            </p>
                        </>
                    }
                />
                                <ServiceCard
                    image={estufa_img}
                    title="Estufas a Gas"
                    description={
                        <>
                            <p>
                                Con la llegada del frío, es fundamental que tus equipos funcionen de manera segura y eficiente. En Olivos Service nos especializamos en la reparación, instalación y mantenimiento de estufas a gas, tanto de tiro balanceado como de tiro natural.
                            </p>
                            <p>Nuestros servicios incluyen:</p>
                            <ul>
                                <li>Instalación de estufas nuevas (con o sin salida al exterior)</li>
                                <li>Limpieza y mantenimiento preventivo</li>
                                <li>Detección y reparación de fallas</li>
                                <li>Revisión de conexiones, válvulas y sistemas de encendido</li>
                                <li>Control de monóxido y verificación de tiraje</li>
                                <li>Adecuación a normas de seguridad vigentes</li>
                            </ul>
                            <p>
                                Trabajamos con todas las marcas del mercado y realizamos cada intervención con responsabilidad, herramientas adecuadas y conocimiento técnico.
                            </p>
                            <p>
                                Tu seguridad y la de tu familia es nuestra prioridad. Prepará tu hogar para el invierno con un servicio profesional y de confianza.
                            </p>
                        </>
                    }
                />
                                <ServiceCard
                    image={aireAcondicionado_img}
                    title="Aires Acondicionados"
                    description={
                        <>
                            <p>
                                En Olivos Service, te ofrecemos un servicio especializado para aires acondicionados split frío/calor, asegurando que tu equipo funcione de manera eficiente durante todo el año, tanto en invierno como en verano. Nos encargamos de la instalación, reparación y mantenimiento de estos equipos, brindándote soluciones rápidas y seguras.
                            </p>
                            <p>
                            Nuestros servicios incluyen:
                            </p>
                            <ul>
                                <li>Instalación de equipos nuevos</li>
                                <li>Mantenimiento preventivo: limpieza de filtros y control de gas</li>
                                <li>Reparación de fallas comunes: pérdida de gas, problemas con termostato y ruidos</li>
                                <li>Carga de gas refrigerante y detección de fugas</li>
                            </ul>
                            <p>
                                Trabajamos con las principales marcas como Whirlpool, Samsung, LG, Bambi, Carrier, Mabe, Electrolux, entre otras. Aseguramos que tu equipo funcione a la perfección, optimizando su rendimiento y alargando su vida útil.
                            </p>
                        </>
                    }
                />
            </CarrouselDiv>

        </Container>

        </>
    )
}