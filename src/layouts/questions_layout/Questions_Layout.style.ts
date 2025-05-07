import { motion } from "framer-motion";
import styled from "styled-components";



export const FaqDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;

`

export const QuestionBox = styled(motion.div)`
    border-bottom: 1px solid rgb(95, 95, 95);
`

export const QuestionTextDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0;
    gap: 2.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    h5 {
        text-align: left;
    }

    p {
        font-size: 2.4rem;
        font-weight: 100;
        color: var(--black);
    }
`

export const AnswerText = styled(motion.p)`
    padding: 0 0 1.6rem 0;
`
