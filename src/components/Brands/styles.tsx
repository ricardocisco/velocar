import styled from "styled-components";

export const ContainerBrand = styled.div`
    display: flex;
    padding: 15px;
    width: 100%;
    justify-content: space-evenly;
    & div{
        display: flex;
        align-items: center;
        & img {
            width: 60px;
            @media (max-width: 700px) {
                width: 35px;
            }
        }
    }
`