import { FC, useEffect, useMemo, useState } from "react";
import { ContentLoader } from "../../components";
import {
  useGetCurrentForecastQuery,
  useGetDailyForecastQuery,
} from "../../store/forecast/forecast.api";
import { IAutoComplete } from "../../types/autocomplete.type";
import { CurrentTempUnits } from "../../types/forecast.type";
import { checkFavourite, date } from "./helper";
import { Forecast } from "./Forecast";
import * as Styled from "./style";
import { LocationValueType } from "../../types/location.type";
import { getError } from "../../services/services";

interface IProps {
  selectedCity: IAutoComplete | LocationValueType;
}

export const ForecastContainer: FC<IProps> = ({ selectedCity }) => {
  const [activeTemperatureUnit, setActiveTemperatureUnit] = useState(
    JSON.parse(localStorage.getItem("activeUnit") || "true")
  );
  const [isFavourite, setIsFavourite] = useState(
    checkFavourite(selectedCity.LocalizedName)
  );

  const {
    data: currentForecast,
    isError: isCurrentForecastError,
    error: currentForecastError,
    isLoading: CurrentForecastLoader,
  } = useGetCurrentForecastQuery(selectedCity.Key, {
    skip: !selectedCity,
  });

  const { data: dailyForecast,
    isError: isDailyError,
    error: dailyError,
  } = useGetDailyForecastQuery(selectedCity.Key, {
    skip: !selectedCity,
  });

  const currentTemperature = useMemo(() => {
    if (currentForecast) {
      const temperatureValue =
        currentForecast.Temperature[
          activeTemperatureUnit
            ? CurrentTempUnits.Imperial
            : CurrentTempUnits.Metric
        ];
      return {
        Value: temperatureValue.Value,
        Unit: temperatureValue.Unit,
      };
    }
  }, [activeTemperatureUnit, currentForecast]);

  useEffect(() => {
    setIsFavourite(checkFavourite(selectedCity.LocalizedName));
  }, [selectedCity]);

  useEffect(() => {
    localStorage.setItem("activeUnit", activeTemperatureUnit)
  }, [activeTemperatureUnit])

  const onSelectFavourite = (city: IAutoComplete | LocationValueType) => {
    const storedCities: IAutoComplete[] = JSON.parse(localStorage.getItem("favourites") || "{}");
    const getIndex = storedCities.length ? storedCities.findIndex((el) => el.Key === city.Key) : -1;
    const isEmpty = !storedCities.length;
    if (isEmpty || getIndex === -1) {
      setIsFavourite(true);
      const cities = isEmpty ? [city] : [...storedCities, city];
      localStorage.setItem("favourites", JSON.stringify(cities));
    } else {
      setIsFavourite(false);
      storedCities.splice(getIndex, 1);
      localStorage.setItem("favourites", JSON.stringify(storedCities));
    }
  };

  return CurrentForecastLoader ? (
    <ContentLoader />
  ) : isCurrentForecastError ? (
    <Styled.Wrapper>
      <Styled.ErrorMessage>
        {getError(currentForecastError)}
      </Styled.ErrorMessage>
    </Styled.Wrapper>
  ) : isDailyError ? (
    <Styled.Wrapper>
      <Styled.ErrorMessage>{getError(dailyError)}</Styled.ErrorMessage>
    </Styled.Wrapper>
  ) : (
    <Forecast
      date={date}
      forecasts={dailyForecast}
      currentForecast={currentForecast}
      currentTemperature={currentTemperature}
      isActiveTempUnit={activeTemperatureUnit}
      handleTempUnit={() => setActiveTemperatureUnit(!activeTemperatureUnit)}
      selectedCity={selectedCity}
      onSelectFavourite={onSelectFavourite}
      isFavourite={isFavourite}
    />
  );
};
