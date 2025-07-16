import styled from "styled-components";
import { motion } from "framer-motion";

export const CarrouselDiv = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 2.4rem auto;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
