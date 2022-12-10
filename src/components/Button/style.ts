import styled from "styled-components";
import { ButtonVariant } from "./Button";

export const Container = styled.div<{
    width: string,
    height: string,
}>`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    align-items: center;
`

export const Button = styled.button<{
    variant: string | ButtonVariant
}>`
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    outline: none;
    border: none;
    border-radius: 30px;
    color: ${({theme, variant}) => variant === ButtonVariant.outline ? theme.buttonBcg : theme.buttonClr};
    background-color: ${({theme, variant}) => variant === ButtonVariant.outline ? "transparent" : theme.buttonBcg};
    border: 2px solid ${({theme}) => theme.buttonBcg};
    cursor: pointer;
    transition: background-color .2s ease,
    color .2s ease;
    font-size: 16px;
    &:hover{
        background-color: ${({theme}) => theme.buttonBcg};
        color: ${({theme}) => theme.buttonClr};
    }
`