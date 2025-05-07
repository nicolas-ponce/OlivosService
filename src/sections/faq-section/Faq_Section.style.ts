import { motion } from "motion/react";
import styled from "styled-components";


export const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    gap: 3.6rem;
    height: calc(100vh - 20rem);

`


export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2.8rem;

    p {
        width: 80%;
    }
`
