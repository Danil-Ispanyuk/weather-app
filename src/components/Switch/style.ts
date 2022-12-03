import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  display: flex;
  cursor: pointer;
`;

export const Label = styled.div<{ checked: boolean }>`
  width: 50px;
  height: 26px;
  background: ${({ checked, theme }) => theme[checked ? 'switchBcgActive' : 'switchBcgNoActive']};
  display: block;
  border-radius: 100px;
  position: relative;
  transition: 0.3s ease background;

  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (!checked ? '3px' : 'calc(100% - 23px)')};
    top: 3px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.switchClr};
    border-radius: 90px;
    transition: 0.3s ease left;
  }
`;