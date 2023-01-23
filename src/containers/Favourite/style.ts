import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 85px);
  display: flex;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.contentBcg};
  border-radius: 25px;
  box-shadow: 0 0 10px ${({ theme }) => theme.contentShadow};
  padding: 20px;
  margin: 0 auto;
  font-size: 25px;
  color: ${({ theme }) => theme.errorMessageColor};
  font-weight: 500;
  text-align: center;
  align-self: center;
  @media (max-width: 470px) {
    margin: 0 10px;
  }
`;
