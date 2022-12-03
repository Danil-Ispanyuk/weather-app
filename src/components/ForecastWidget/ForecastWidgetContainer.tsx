import React, { FC, useMemo } from 'react'
import { TempUnits } from '../../containers/Home/HomeContainer';
import { TemperatureUnitsType } from '../../types/forecast.type';
import { ForecastWidget } from './ForecastWidget';

interface IForecastWidget{
  isActiveTempUnit: boolean,
  title: string;
  temperatures: TemperatureUnitsType;
  details?: string;
}

export const ForecastWidgetContainer: FC<IForecastWidget> = ({isActiveTempUnit, title, temperatures, details}) => {
  const temperature = useMemo(() => {
    const activeTemperatureUnit = isActiveTempUnit ? TempUnits.metric : TempUnits.imperial;
    return `${temperatures[activeTemperatureUnit].Value} ${temperatures[activeTemperatureUnit].Unit}`
  }, [isActiveTempUnit])
  return (
    <ForecastWidget
      title={title}
      temperature={temperature}
      details={details}
    />
  )
}
