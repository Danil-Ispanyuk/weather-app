import styled from "styled-components";

export const Search = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

export const ErrorMessage = styled.div`
    background-color: ${({ theme }) => theme.contentBcg};
    border-radius: 25px;
    box-shadow: 0 0 10px ${({ theme }) => theme.contentShadow};
    padding: 20px;
    margin: auto 10px;
    font-size: 25px;
    color: ${({ theme }) => theme.errorMessageColor};
    font-weight: 500;
    text-align: center;
    align-self: center;
`
