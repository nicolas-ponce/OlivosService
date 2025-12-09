import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;


    @media (max-width: 992px) {
        width: 90%;
    }




`

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;


    @media (max-width: 768px) {
        flex-direction: column;
        gap: 4.8rem;
    }
`


export const DataContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    text-align: right;
    gap: 4.8rem;


    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
    }
`

