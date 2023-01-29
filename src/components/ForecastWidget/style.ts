import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
  width: 100%;
  margin: 15px;
  @media (max-width: 470px) {
    max-width: 250px;
  }
`;
export const Content = styled.div<{
  isFavourite: boolean | undefined;
}>`
  width: 100%;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.contentBcg}52;
  padding: 25px 15px;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isFavourite, theme }) =>
    isFavourite
      ? `
  cursor: pointer;
    &:hover{
        box-shadow: 0 0 10px ${theme.contentBcg};
    }
  `
      : null}
`;
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 30px;
  color: ${({ theme }) => theme.forecastTitle};
`;
export const Temperature = styled.p`
  font-size: 25px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.forecastTemperature};
`;
export const Details = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.forecastDetails};
  text-align: center;
`;
export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & > *:last-child {
    margin-bottom: 0px;
  }
`;
export const TemperatureRange = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;
