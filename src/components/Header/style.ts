import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px 30px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
`

export const SwitchTheme = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
`

export const Buttons = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    & > * {
        margin-left: 10px;
        &:first-child{
            margin-left: 0;
        }
    }
`