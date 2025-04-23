import styled from "styled-components";


export const IMG = styled.img`
    cursor: pointer;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 4.8rem;

    &:hover {
        filter: brightness(0.9);
    }
`