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
