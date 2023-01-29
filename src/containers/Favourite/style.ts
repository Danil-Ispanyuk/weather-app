import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 85px);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
  }
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
