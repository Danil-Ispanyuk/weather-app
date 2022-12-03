import styled from "styled-components";

export const Container = styled.div`
    max-width: 200px;
    width: 100%;
    margin: 15px;
`
export const Content = styled.div`
    width: 100%;
    border-radius: 30px;
    background-color: ${({theme}) => theme.contentBcg}52;
    padding: 25px 15px;
    transition: .2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    margin: 0;
    margin-bottom: 20px;
    font-size: 30px;
    color: ${({theme}) => theme.forecastTitle};
`
export const Temperature = styled.p`
    margin-bottom: 30px;
    font-size: 25px;
    color: ${({theme}) => theme.forecastTemperature};
`
export const Details = styled.span`
    margin-bottom: 35px;
    font-size: 25px;
    color: ${({theme}) => theme.forecastDetails};
`