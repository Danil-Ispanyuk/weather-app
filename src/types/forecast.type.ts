export type TemperatureUnitValuesType = {
  Value: number;
  Unit: string;
  UnitType: number;
}
export type TemperatureUnitsType = {
  Metric: TemperatureUnitValuesType;
  Imperial: TemperatureUnitValuesType;
}
export type ForecastType = {
  day: string;
  temperature: TemperatureUnitsType;
  details: string;
};
export type SearchCityType = {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: {
      ID: string,
      LocalizedName: string
    },
    AdministrativeArea: {
      ID: string,
      LocalizedName: string
    }
}