import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";


export const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;


export const Container = styled(motion.div)`
    overflow: hidden;
    width: 100vw;
    margin-top: 8rem;


    -webkit-mask-image: linear-gradient(to right, 
        rgba(0, 0, 0, 0) 1%, 
        rgba(0, 0, 0, 1) 15%, 
        rgba(0, 0, 0, 1) 85%, 
        rgba(0, 0, 0, 0) 99%
    );
    mask-image: linear-gradient(to right, 
        rgba(0, 0, 0, 0) 1%, 
        rgba(0, 0, 0, 1) 15%, 
        rgba(0, 0, 0, 1) 85%, 
        rgba(0, 0, 0, 0) 99%
    );
`;


export const Track = styled(motion.div)`
    display: flex;
    width: fit-content;
    animation: ${scroll} 24s linear infinite;
`;


export const Logo = styled.img`
    flex: 0 0 auto;
    margin: 0 4rem;
    white-space: nowrap;
    user-select: none;
    height: 4rem;
`;
