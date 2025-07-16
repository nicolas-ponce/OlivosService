import { motion } from "motion/react";
import styled from "styled-components";




export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 992px) {
        width: 90%;
    }
`


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;;
    }
`



export const TextDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;

    @media (max-width: 992px) {
        width: 60%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 1.4rem;
        justify-content: flex-start;
        
    }
`

export const LinkDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2.4rem 0;
`



