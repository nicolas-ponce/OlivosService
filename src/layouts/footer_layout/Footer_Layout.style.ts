import { motion } from "motion/react";
import styled from "styled-components";


export const Container = styled(motion.div)`
    position: relative;
    display: flex;
    overflow: hidden;
    height: 25rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    margin-top: 5.6rem;
`

export const BlueBlock = styled.div`
    position: absolute;
    top: 7vh;
    left: 0;
    width: 110vw;
    height: 100vh;
    rotate: -3deg;
    background-color: var(--orange);
    z-index: -10;
`

export const BlackBlock = styled.div`
    position: absolute;
    top: 10vh;
    left: -5vw;
    width: 110vw;
    height: 100vh;
    rotate: 2deg;
    background-color: var(--black);
    z-index: -10;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5.6rem;
    justify-content: space-between;
    gap: 1.2rem;

    h6,
    a {
        color: var(--white);
    }

    p {
        color:rgb(155, 155, 155);
        font-size: 1.2rem;
    }
`

export const IconsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    img {
        width: 2rem;
        height: 2rem;
    }
`

export const Line = styled.div`
    width: 90%;
    height: 1px;
    background-color: rgb(155, 155, 155);
    margin: 0 auto;
`
