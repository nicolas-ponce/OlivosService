import { motion } from "framer-motion";
import styled from "styled-components";


export const BackgroundDiv = styled(motion.div)`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);

    &.open {
        display: flex;
    }
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: fit-content;
    background-color: var(--white);
    height: fit-content;
    cursor: pointer;
    z-index: 1;
    position: relative;

    &.open {
    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    width: 90%;
    height: 90%;
    margin: auto;
    max-width: 100vw;
    max-height: 90vh;
    overflow-y: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 3.2rem;
    
    cursor: default;
    flex-direction: row;
  }
`


export const ImgDiv = styled.div`
  width: 20rem;
  height: 28rem;
  overflow: hidden;
  border-radius: 10px;
  position: relative; // 👈 necesario para posicionar el título dentro
  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    width: 50%;
    height: 100%;
    border-radius: 0;
  }
`

export const Img = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    position: relative;
    top: 0;
    left: 0;
    transition: filter 0.3s ease-in-out; // solo cuando cambia normalmente

    &.open {
        filter: grayscale(0); /* Color completo */
        transition: none; /* SIN animación */
    }

`


export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,1), transparent);
  z-index: 1;
  pointer-events: none;
`;


export const TextContainer = styled(motion.div)`
    position: static;
    overflow: hidden;
    width: 100%;
    height: 2rem;

    &.open {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0);
        margin: 2rem 4rem;

    }
`

export const Title = styled(motion.p)`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
  z-index: 2;
  font-family: var(--montserratFont);
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 600;
  width: 80%;

  &.open {
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    font-size: 4rem;
    color: var(--black);
    text-transform: uppercase;
    align-self: flex-start;
  }
`;



export const Description = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
`

export const ContactBtnLink = styled(motion.a)`
    display: none;

    &.open {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: var(--orange);
      width: 20%;
      height: 7%;
      border-bottom-right-radius: 3.2rem;
      border-top-left-radius: 3.2rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
        filter: brightness(0.9);
        transition: all 0.3s ease-in-out;
    }

    & p {
      color: var(--white);
      font-weight: 600;
      font-size: 1.7rem;
    }
`



export const VolverDiv = styled(motion.div)`
    display: none;
    cursor: pointer;

    &.open {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 6.4rem;
      height: 6.4rem;
      border-bottom-right-radius: 3.2rem;
      background-color: var(--black);
      transition: all 0.3s ease-in-out;
    }

    &::after {
        content: "X";
        color: var(--white);
        font-size: 2.4rem;
        font-family: var(--montserratFont);
    }

    &:hover {
        background-color:rgb(49, 3, 3);
        transition: all 0.3s ease-in-out;
    }
`
