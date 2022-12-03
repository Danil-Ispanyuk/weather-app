import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color .2s ease;
    background-color: ${({theme}) => theme.mainBcg};
`
export const Content = styled.div`
    width: 100%;
    margin-top: 70px;
    align-self: center;
    max-width: 70vw;
    width: 100%;
    border-radius: 30px;
    padding: 30px;
    background: ${({theme}) => theme.contentBcg}52;
    box-shadow: 0 0 10px 1px ${({theme}) => theme.contentShadow}20;
`

export const Search = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

export const Forecast = styled.div`
    max-width: 1170px;
    width: 100%;
    margin-top: 60px;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`