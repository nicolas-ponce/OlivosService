import { motion } from "motion/react";
import styled from "styled-components";



export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    gap: 12rem;
`

export const Box1_Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
`

export const Box1_Info = styled(motion.div)`
    width: 50%;
`

export const Box1_ImgDiv = styled(motion.div)`
    width: 50%;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 1.6rem;
    }
`






export const Box2_Container = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(4, auto);
    row-gap: 1.6rem;
    column-gap: 3.2rem;
`


export const Box2_ImgDiv1 = styled(motion.div)`
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    margin-right: 2rem;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 1.6rem;
    }
`

export const Box2_Title = styled(motion.h3)`
    grid-column: 2 / 4;
    grid-row: 1 / 2;
`


export const Box2_Text1 = styled(motion.p)`
    grid-column: 2 / 4;
    grid-row: 2 / 3;
`

export const Box2_Text2 = styled(motion.p)`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
`

export const Box2_Text3 = styled(motion.p)`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
`

export const Box2_ImgDiv2 = styled(motion.div)`
    grid-column: 3 / 4;
    grid-row: 3 / 5;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 1.6rem;
    }
`