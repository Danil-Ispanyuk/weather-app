import styled from "styled-components";

export const Container = styled.div<{
    width: string;
}>`
    width: ${({width}) => width};
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Content = styled.div<{
    isOpenMenu: boolean;
}>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({isOpenMenu}) => isOpenMenu ? "25px 25px 0 0" : "50px"};
    border: 2px solid ${({theme}) => theme.dropdown.contentBorderClr};
    padding: 5px;
    position: relative;
`
export const Input = styled.input`
width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme}) => theme.dropdown.inputClr};
`
export const Options = styled.div`
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({theme}) => theme.dropdown.optionsBcg};
    border: 2px solid ${({theme}) => theme.dropdown.contentBorderClr};
    max-height: 200px;
    overflow-y: scroll;
    border-top: none;
    z-index: 99;
    border-radius: 0 0 25px 25px;
`
export const Option = styled.p`
    padding: 10px 12px;
    transition: 0.3s ease background,
    0.3s ease color;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    background-color: ${({ theme }) => theme.dropdown.optionsBcg};
    color: ${({ theme }) => theme.dropdown.optionsClr};
    &:hover {
        background-color: ${({ theme }) => theme.dropdown.optionHoverBcg};
        color: ${({ theme }) => theme.dropdown.optionHoverClr };
    }
`

export const Wrapper = styled.div``