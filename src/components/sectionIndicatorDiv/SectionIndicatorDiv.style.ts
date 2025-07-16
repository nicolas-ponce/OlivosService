import { motion } from "motion/react";
import styled from "styled-components";



export const Container = styled(motion.div)`
    display: flex;
    width: 80%;
    margin: 14rem auto 2rem;
    scroll-margin-top: 10rem;

    & p {
        font-size: 1.2rem;
        text-align: left;
    }

    & span {
        color: var(--orange);
        font-weight: 800;
    }

    @media (max-width: 992px) {
        width: 90%;
    }
`