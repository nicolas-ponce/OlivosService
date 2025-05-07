import { Container } from "./SectionIndicatorDiv.style";

interface props {
    subtitle: string,
    ID: string
}


export const SectionIndicatorDiv = (props: props) => {
    return (
        <>
            <Container
                id={props.ID}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "linear", duration: .3, delay: .1 }}
                viewport={{ once: true }}
            >
                <p><span>/</span> {props.subtitle}</p>
            </Container>
        </>
    )
}