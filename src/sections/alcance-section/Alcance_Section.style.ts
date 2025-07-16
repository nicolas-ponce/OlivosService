import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;

    @media (max-width: 1280px) {
        width: 90%;
        gap: 4rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const ImgDiv = styled(motion.div)`
    width: 44rem;
    height: 44rem;
    box-shadow: -9px 7px 24px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: -9px 7px 24px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: -9px 7px 24px 0px rgba(0,0,0,0.25);
    border-radius: 1.6rem;
    display: flex;

    @media (max-width: 768px) {
        order: 1;
        align-self: center;
        width: 80%;
        height: auto;
    }

    @media (max-width: 480px) {
        width: 90%;
    }

`

export const Img = styled.img`
object-fit: cover;
object-position: center;
width: 100%;
height: 100%;
border-radius: 1.6rem;
`

export const TextDiv = styled.div`
    width: 50%;

    h2,
    p {
        text-align: right;
    }

    p {
        font-size: 1.6rem;

        & span {
            color: var(--orange);
            font-weight: 600;
        }
    }


    @media (max-width: 768px) {
        width: 100%;
        h2,
        p {
            text-align: left;
        }
    }
`


export const ListContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5.4rem;
    margin: 2.4rem auto;

    @media (max-width: 1280px) {
        gap: 3.6rem;
    }
`

export const SingleDivList = styled(motion.div)`
    width: 33%;


    p {
        text-align: left;
        font-size: 1.6rem;
        font-weight: 600;
    }
    ul{
        list-style: none;
        margin: 0.8rem auto 0;
        padding: 0;
    }
`
