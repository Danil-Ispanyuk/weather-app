import { FC, useMemo } from "react";
import { getTemperatureRange } from "../../containers/Forecast/helper";
import { TemperatureRangeType } from "../../types/forecast.type";
import * as Styled from "./style";

interface IForecastWidget {
  onClick?: () => void;
  isActiveTempUnit?: boolean | undefined;
  temperatures?: TemperatureRangeType | undefined;
  isFavourite?: boolean;
  title: string;
  details?: string;
}

export const ForecastWidget: FC<IForecastWidget> = ({
  title,
  details,
  isFavourite,
  isActiveTempUnit,
  temperatures,
  onClick = () => {},
}) => {
  const temperature = useMemo(() => {
    if(typeof isActiveTempUnit === 'boolean' && temperatures){
      return getTemperatureRange(temperatures, isActiveTempUnit);
    }
  }, [isActiveTempUnit, temperatures]);
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Content  isFavourite={isFavourite}>
        <Styled.Title>{title}</Styled.Title>
       {temperature && <Styled.TemperatureContainer>
          <Styled.Temperature>
            <Styled.TemperatureRange>
              Max:
            </Styled.TemperatureRange>
            {temperature?.maxValue} {temperature?.unit}
          </Styled.Temperature>
          <Styled.Temperature>
            <Styled.TemperatureRange>
              Min:
            </Styled.TemperatureRange>
            {temperature?.minValue} {temperature?.unit}
          </Styled.Temperature>
        </Styled.TemperatureContainer>}
        <Styled.Details>{details}</Styled.Details>
      </Styled.Content>
    </Styled.Container>
  );
};
