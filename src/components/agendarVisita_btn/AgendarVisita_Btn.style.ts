import styled from "styled-components";
import { motion } from "framer-motion";

export const Link = styled(motion.a)`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
`

export const IMG = styled.img`
    cursor: pointer;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 4.8rem;
`