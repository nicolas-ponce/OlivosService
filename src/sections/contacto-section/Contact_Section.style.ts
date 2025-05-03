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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 0;

    p {
        width: 80%;
    }
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    text-align: right;
    gap: 2.4rem;

    & .data-name {
        font-size: 1.2rem;
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    & .data-info {
        margin: 0;
        padding: 0;
        font-size: 3.6rem;
        font-weight: 200;
        color: var(--black);
        font-family: var(--montserratFont);
    }

`

export const Form = styled.form`
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