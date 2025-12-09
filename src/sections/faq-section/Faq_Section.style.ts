import { motion } from "motion/react";
import styled from "styled-components";


export const Container = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    gap: 3.6rem;
    margin-bottom: 20rem;

    @media (max-width: 992px) {
        width: 90%;
    }


    @media (max-width: 906px) {  // Small tweak for better table view
        flex-direction: column;
        width: 90%;
        height: 60rem;
        justify-content: flex-start;
        overflow:hidden;
        margin-bottom: 10rem;
    }

    @media (max-width: 480px) {
        height: 75rem;
    }

    @media (max-width: 320px) {
        height: 90rem;
        
    }

`


export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2.8rem;

    p {
        width: 80%;
    }

    @media (max-width: 906px) {     // Pequeño cambio para mejor vista en tablet (breakpoint != 768px)
        width: 100%;
        gap: 0.8rem;
    }
`
