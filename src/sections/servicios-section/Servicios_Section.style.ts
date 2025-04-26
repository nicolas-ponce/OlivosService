import { motion } from "motion/react";
import styled from "styled-components";




export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`



export const TextDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;

    & a {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--orange);
        text-decoration: none;
    }

    & a::after {
        content: "";
        display: flex;
        width: 0;
        height: 1px;
        background: var(--orange);
        transition: width .3s;
    }
    & a:hover::after {
        width: 100%;
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



export const CarrouselDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 2.4rem auto;
    width: 100%;
`
