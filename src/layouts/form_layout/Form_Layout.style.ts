import styled from "styled-components";
import { motion } from "framer-motion";



export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 0;

    @media (max-width: 768px) {
        width: 100%;
    }

`

export const FormInfo = styled(motion.p)`
    width: 80%;
    margin: 2.4rem 0;
`

export const Form = styled(motion.form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    


    div {
        display: flex;
        flex-direction: column;
        margin: 1.2rem 0;
        position: relative;
    }

    label {
        position: absolute;
        top: 25%;
        transform: translateY(-50%);
        margin: auto;
        font-size: 1.4rem;
        font-weight: 400;
        color:rgb(88, 88, 88);
        font-family: var(--openSansFont);
    }

    input, textarea {
        padding: .8rem 0 .4rem;
        border: none;
        border-bottom: 1px solid var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--black);
        background-color: transparent;
        width: 100%;
        letter-spacing: .04rem;
        font-family: var(--openSansFont);
    }

    textarea {
        height: auto;
        resize: none;
        overflow: hidden;
    }

    & button {
        padding: 1.2rem 4.8rem;
        margin-top: 2.8rem;
        border-radius: 0.8rem;
        border: none;
        background-color: var(--orange);
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;
        width: fit-content;
    }

    input:focus,
    textarea:focus {
        outline: none;
    }
`

export const SuccessMsg = styled(motion.p)`
    margin: 0;
    font-size: 1.3rem;
    color:rgb(15, 121, 14);
`