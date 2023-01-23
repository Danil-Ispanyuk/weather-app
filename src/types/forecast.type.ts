export enum TempUnits {
  fahrenheit = "°F",
  celsius = "°C",
}

export enum CurrentTempUnits {
  Imperial = "Imperial",
  Metric = "Metric",
}

export type TemperatureUnitValuesType = {
  Value: number;
  Unit: string;
  UnitType: number;
};

export type CurrentTemperatureType = {
  Metric: TemperatureUnitValuesType;
  Imperial: TemperatureUnitValuesType;
}
export type TemperatureRangeType = {
  Minimum: TemperatureUnitValuesType;
  Maximum: TemperatureUnitValuesType;
}

export type Day = {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

export type Night = {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType?: string | undefined;
  PrecipitationIntensity?: string | undefined;
}

export type ForecastType = {
  Date: string;
  EpochDate: number;
  Temperature: TemperatureRangeType;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
}
export type CurrentForecastType = {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: CurrentTemperatureType;
  MobileLink: string;
  Link: string;
}

export type TemperatureRangeValueType = {
  minValue: number;
  maxValue: number;
  unit: string;
}
export type CurrentTempValueType = {
  Value: number;
  Unit: string;
}

export interface DailyApiType {
  Headline: Headline;
  DailyForecasts: ForecastType[];
}

export interface Headline {
  EffectiveDate: Date;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: Date;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}