import { Container } from "./SectionIndicatorDiv.style";

interface props {
    subtitle: string;
}


export const SectionIndicatorDiv = (props: props) => {
    return (
        <>
            <Container
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "linear", duration: .1 }}
                viewport={{ once: true, amount: .3 }}
            >
                <p><span>/</span> {props.subtitle}</p>
            </Container>
        </>
    )
}