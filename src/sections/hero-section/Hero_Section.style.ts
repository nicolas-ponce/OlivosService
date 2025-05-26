import styled from "styled-components";
import { motion } from "framer-motion";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2rem auto 0;

    @media (max-width: 1280px) {
        width: 80%;
    }

    @media (max-width: 992px) {
        width: 90%;
    }
`

export const HeroImgDiv = styled(motion.div)`
    position: relative;
    display: flex;
    width: 100%;
    height: 28rem;
    border-radius: 1.6rem;
    margin: 1.6rem auto 0;
`
export const HeroImg = styled.img`
    display: flex;
    width: 100%;
    height: auto;
    border-radius: 1.6rem;
    object-fit: cover;
`

export const HeroTextDiv = styled.div`
    position: absolute;
    bottom: 2.4rem;
    margin: 0 2.4rem;
    width: calc(100% - 11.2rem);
    padding: 2.4rem 3.2rem;
    display: flex;
    flex-direction: column;
    background-color: blue;
    border-radius: .4rem;
    backdrop-filter: blur(8px) saturate(100%);
    -webkit-backdrop-filter: blur(8px) saturate(100%);
    background-color: rgba(124, 124, 124, 0);
    border: 1px solid rgba(255, 255, 255, 0.125);

    @media (max-width: 480px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: fit-content;
        margin: auto;
        padding: 2.4rem 0;
        justify-content: center;
        align-items: center;
        gap: .8rem;
        backdrop-filter: blur(4px) saturate(100%);
        -webkit-backdrop-filter: blur(8px) saturate(100%);

        & h5 {
            font-size: 2.4rem;
            text-align: center;
            padding: 0 1.6rem;
        }

        & p {
            padding: 0 1.6rem;
            text-align: center;
        }
    }
`

export const DataBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2.4rem 0;
    gap: 2.4rem;

    @media (max-width: 480px) {
        flex-direction: column;
        margin: 2.4rem auto;
        width: 90%;
        gap: 1.6rem;
    }
`