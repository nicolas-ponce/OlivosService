import styled from "styled-components";






export const OrangeLinkBtnStyledLink = styled.a`
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--orange);
        text-decoration: none;
        width: fit-content;

    &::after {
        content: "";
        display: flex;
        width: 0;
        height: 1px;
        background: var(--orange);
        transition: width .3s;
    }
    &:hover::after {
        width: 100%;
    }
`