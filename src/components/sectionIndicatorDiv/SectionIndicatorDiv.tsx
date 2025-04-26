import { Container } from "./SectionIndicatorDiv.style";

interface props {
    subtitle: string;
}


export const SectionIndicatorDiv = (props: props) => {
    return (
        <>
            <Container>
                <p><span>/</span> {props.subtitle}</p>
            </Container>
        </>
    )
}