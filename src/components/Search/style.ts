import styled from "styled-components";
import { ReactComponent as Loop } from "../../assets/loop.svg"
export const Container = styled.div`
    max-width: 350px;
    width: 100%;
    border-radius: 50px;
    border: 2px solid ${({theme}) => theme.searchBcg};
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 85%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
`;

export const LoopIcon = styled(Loop)`
    max-width: 20px;
    witdh: 100%;
    height: 100%;
    fill: ${({theme}) => theme.searchIconClr};
`;