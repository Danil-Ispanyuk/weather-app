import { FC } from "react";
import * as Styled from "./style";
import { Button, ForecastWidget, Switch } from "../../components";
import { ButtonVariant } from "../../components/Button/Button";
import { HomeLayout } from "../../layouts";
import {
  CurrentForecastType,
  CurrentTempValueType,
  ForecastType,
} from "../../types/forecast.type";
import { IAutoComplete } from "../../types/autocomplete.type";
import { LocationValueType } from "../../types/location.type";
import { getWeekDay } from "../../services/services";

interface IHome {
  date: string;
  forecasts: ForecastType[] | undefined;
  currentForecast: CurrentForecastType | undefined;
  currentTemperature: CurrentTempValueType | undefined;
  isActiveTempUnit: boolean;
  handleTempUnit: () => void;
  selectedCity: LocationValueType;
  onSelectFavourite: (value: IAutoComplete | LocationValueType) => void;
  isFavourite: boolean;
}

export const Forecast: FC<IHome> = ({
  date,
  forecasts,
  currentForecast,
  isActiveTempUnit,
  handleTempUnit,
  currentTemperature,
  selectedCity,
  onSelectFavourite,
  isFavourite,
}) => {
  return (
    <>
      <HomeLayout.Content>
        <Styled.Container>
          <Styled.Header>
            <Styled.CityContent>
              <Styled.IconContainer>
                <Styled.WeatherIcon iconNum={currentForecast?.WeatherIcon} />
              </Styled.IconContainer>
              <Styled.Details>
                <Styled.CityInfo>
                  <Styled.CityName>
                    {selectedCity.LocalizedName}
                  </Styled.CityName>
                  <Styled.CityTemperature>
                    {currentTemperature?.Value}
                    <Styled.TemperatureUnit>
                      °{currentTemperature?.Unit}
                    </Styled.TemperatureUnit>
                  </Styled.CityTemperature>
                </Styled.CityInfo>
              </Styled.Details>
            </Styled.CityContent>
            <Styled.Configurate>
              <Styled.SwitchContainer>
                <Styled.ActiveUnit active={!isActiveTempUnit}>
                  °C
                </Styled.ActiveUnit>
                <Styled.SwitchContent>
                  <Switch checked={isActiveTempUnit} onClick={handleTempUnit} />
                </Styled.SwitchContent>
                <Styled.ActiveUnit active={isActiveTempUnit}>
                  °F
                </Styled.ActiveUnit>
              </Styled.SwitchContainer>
              <Styled.Favourite>
                <Button
                  width="150px"
                  height="40px"
                  variant={
                    isFavourite ? ButtonVariant.default : ButtonVariant.outline
                  }
                  onClick={() => onSelectFavourite(selectedCity)}
                >
                  {isFavourite ? "Your Favourite" : "Add to Favourite"}
                </Button>
              </Styled.Favourite>
            </Styled.Configurate>
          </Styled.Header>
          <Styled.WeatherInfo>
            <Styled.Date>{date}</Styled.Date>
            <Styled.WeatherList>
              <Styled.WeatherItem>
                <Styled.WeatherTitle>Weather:</Styled.WeatherTitle>
                <Styled.WeatherText>
                  {currentForecast?.WeatherText}
                </Styled.WeatherText>
              </Styled.WeatherItem>
            </Styled.WeatherList>
          </Styled.WeatherInfo>
        </Styled.Container>
      </HomeLayout.Content>
      <HomeLayout.Forecast>
        {forecasts?.map((forecast, index) => (
          <ForecastWidget
            key={index}
            isActiveTempUnit={isActiveTempUnit}
            title={getWeekDay(forecast.Date)}
            temperatures={forecast.Temperature}
            details={forecast.Day.IconPhrase}
          />
        ))}
      </HomeLayout.Forecast>
    </>
  );
};
