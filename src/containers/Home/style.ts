import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Search = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const CityContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
`;
export const IconContainer = styled.div`
  max-width: 100px;
  width: 100%;
`;
export const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
`;
export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const CityInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CityName = styled.p`
  font-size: 45px;
  font-weight: 200;
  color: ${({theme}) => theme.cityNameClr};
`;
export const CityTemperature = styled.p`
  font-size: 32px;
  margin-left: 20px;
  font-weight: 200;
  display: flex;
  color: ${({theme}) => theme.temperatureClr};
`;
export const TemperatureUnit = styled.span`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  color: ${({theme}) => theme.temperatureUnitClr};
`;
export const Configurate = styled.div`
  display: flex;
  align-items: center;
`;
export const SwitchContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;
export const SwitchContent = styled.div`
  margin: 0 10px;
`;
export const Favourite = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 10px;
    &::first-child {
      margin: 0;
    }
  }
`;
export const ActiveUnit = styled.span<{
  active: boolean;
}>`
  transition: color 0.2s ease;
  font-size: 20px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ theme, active }) =>
    active ? theme.activeUnitClr : `${theme.activeUnitClr}50`};
`;
export const WeatherInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    margin-top: 40px;
`
export const Date = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: ${({theme}) => theme.dateClr};
`
export const WeatherList = styled.div`
    color: ${({theme}) => theme.weatherInfoText};
    margin-left: 20px;
    & > * {
        margin-left: 10px;
        &:first-child{
            margin-left: 0;
        }
    }
`
export const WeatherItem = styled.p`
    display: inline-block;
`
export const WeatherTitle = styled.span`
    font-size: 16px;
    color: ${({theme}) => theme.weatherInfoTitle};
`
export const WeatherText = styled.span`
    font-size: 20px;
    margin-left: 5px;
    color: ${({theme}) => theme.weatherInfoText};
`