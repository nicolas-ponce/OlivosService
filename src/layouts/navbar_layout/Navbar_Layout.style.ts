import styled from "styled-components";


export const DIV = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    height: 8rem;
    width: auto;
    padding: 0 8rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    background: #F8F9FF;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
`

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem;
`

export const Logo = styled.img`
    display: flex;
    width: 100%;
    height: auto;
`

export const NAV = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a::after {
        content: "";
        display: flex;
            width: 0;
        height: 1px;
        background: var(--black);
        transition: width .3s;
    }

    a:hover::after {
    width: 100%;
    }
`