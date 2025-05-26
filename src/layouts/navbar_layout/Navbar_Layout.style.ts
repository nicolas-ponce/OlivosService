import styled from "styled-components";
import { motion } from "framer-motion";

export const DIV = styled(motion.div)`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    height: 8rem;
    width: auto;
    padding: 0 8rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);

    @media (max-width: 1280px) {
        padding: 0 2rem;
    }
`

export const ImgDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem;

    @media (max-width: 1280px) {
        width: 12rem;
    }

    @media (max-width: 992px) {
        width: 10rem;
        
    }
`

export const Logo = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`

export const NAV = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;




    @media (max-width: 1280px) {
        gap: 1.2rem;
    }
`


export const StyledA = styled(motion.a)`


    &::after {
        content: "";
        display: flex;
        width: 0;
        height: 1px;
        background: var(--black);
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 992px) {
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
        
    }
`




export const HamburgerIcon = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 3.6rem;
    height: 3.6rem;
    cursor: pointer;


`

export const HamburgerLine = styled(motion.div)`
    width: 100%;
    height: 0.01rem;
    background-color: var(--black);
    margin: 0.2rem 0;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
        width: 100%;
    }

    &:nth-child(2) {
        width: 80%;
    }

    &:nth-child(3) {
        width: 60%;
    }
`


export const MobileNav = styled(motion.nav)`
    position: absolute;
    top: 8rem;
    right: 0;
    width: 100%;
    height: fit-content;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(227, 225, 225);
`