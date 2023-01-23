import { IAutoComplete } from "../../types/autocomplete.type";
import { TemperatureRangeType, TempUnits } from "../../types/forecast.type";

export const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const checkFavourite = (city: string) => {
  const storedCities: IAutoComplete[] = JSON.parse(
    localStorage.getItem("favourites") || "{}"
  );
  if(Array.isArray(storedCities)){
    return !!storedCities?.find((item) => item.LocalizedName === city);
  }
  return false
};

export const temperatureConverter = (value: number) => {
  return (value - 32) / 1.8;
};

export const getTemperatureRange = (
  data: TemperatureRangeType,
  activeUnit: boolean
) => {
  if(Array.isArray(data)) return;
  const unit = activeUnit ? TempUnits.fahrenheit : TempUnits.celsius;
  const minTemperatureValue = activeUnit ? data?.Minimum.Value : temperatureConverter(data.Minimum.Value);
  const maxTemperatureValue = activeUnit ? data?.Maximum.Value : temperatureConverter(data.Maximum.Value);
  return {
    minValue: parseInt(String(minTemperatureValue)),
    maxValue: parseInt(String(maxTemperatureValue)),
    unit,
  };
};
