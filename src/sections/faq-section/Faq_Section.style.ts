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

export const FaqDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;

`

export const QuestionBox = styled(motion.div)`
`

export const QuestionTextDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0;
    gap: 2.4rem;

    cursor: pointer;

    p {
        font-size: 2.4rem;
        font-weight: 100;
        color: var(--black);
    }
`

export const AnswerText = styled(motion.p)`
    padding: 0 0 1.6rem 0;
`


export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--black);
`