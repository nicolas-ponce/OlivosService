import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`


export const DataContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    text-align: right;
    gap: 4.8rem;
`

