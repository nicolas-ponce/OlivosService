import { motion } from "motion/react";
import styled from "styled-components";



export const Container = styled(motion.div)`
    display: flex;
    width: 80%;
    margin: 14rem auto 2rem;

    & p {
        font-size: 1.2rem;
        text-align: left;
    }

    & span {
        color: var(--orange);
        font-weight: 800;
    }
`