import styled from "styled-components";
import { motion } from "framer-motion";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2rem auto 0;
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
`

export const DataBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2.4rem 0;
    gap: 2.4rem;
`