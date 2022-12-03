import React, { FC } from "react";
import * as Styled from "./style";
import Sun from "../../assets/sun.png";
import { Button, ForecastWidgetContainer, Switch } from "../../components";
import { ButtonVariant } from "../../components/Button/Button";
import { HomeLayout } from "../../layouts";
import { ForecastType, TemperatureUnitValuesType } from "../../types/forecast.type";

interface IHome {
  forecasts: ForecastType[],
  temperature: TemperatureUnitValuesType;
  isActiveTempUnit: boolean;
  handleTempUnit: () => void;
}

export const Home: FC<IHome> = ({
  forecasts,
  isActiveTempUnit,
  handleTempUnit,
  temperature,
}) => {
  return (
    <>
    <HomeLayout.Content>
      <Styled.Container>
        <Styled.Header>
          <Styled.CityContent>
            <Styled.IconContainer>
              <Styled.WeatherIcon src={Sun} />
            </Styled.IconContainer>
            <Styled.Details>
              <Styled.CityInfo>
                <Styled.CityName>Tel Aviv</Styled.CityName>
                <Styled.CityTemperature>
                  {temperature.Value}
                  <Styled.TemperatureUnit>
                    {temperature.Unit}
                  </Styled.TemperatureUnit>
                </Styled.CityTemperature>
              </Styled.CityInfo>
            </Styled.Details>
          </Styled.CityContent>
          <Styled.Configurate>
            <Styled.SwitchContainer>
              <Styled.ActiveUnit active={!isActiveTempUnit}>F</Styled.ActiveUnit>
              <Styled.SwitchContent>
                <Switch checked={isActiveTempUnit} onClick={handleTempUnit} />
              </Styled.SwitchContent>
              <Styled.ActiveUnit active={isActiveTempUnit}>C</Styled.ActiveUnit>
            </Styled.SwitchContainer>
            <Styled.Favourite>
              <Button width="150px" height="40px" variant={ButtonVariant.outline}>
                Add to Favourite
              </Button>
            </Styled.Favourite>
          </Styled.Configurate>
        </Styled.Header>
        <Styled.WeatherInfo>
          <Styled.Date>Monday, 30/12/19, 17:12</Styled.Date>
          <Styled.WeatherList>
            <Styled.WeatherItem>
              <Styled.WeatherTitle>Weather:</Styled.WeatherTitle>
              <Styled.WeatherText>A shower</Styled.WeatherText>
            </Styled.WeatherItem>
            ,
            <Styled.WeatherItem>
              <Styled.WeatherTitle>Precipitation:</Styled.WeatherTitle>
              <Styled.WeatherText>Rain</Styled.WeatherText>
            </Styled.WeatherItem>
          </Styled.WeatherList>
        </Styled.WeatherInfo>
      </Styled.Container>
    </HomeLayout.Content>
    <HomeLayout.Forecast>
      {forecasts.map((forecast, index) => <ForecastWidgetContainer
        key={index}
        isActiveTempUnit={isActiveTempUnit}
        title={forecast.day}
        temperatures={forecast.temperature}
        details={forecast.details}
      />)}
    </HomeLayout.Forecast>
    </>
  );
};
