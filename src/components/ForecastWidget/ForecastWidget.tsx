import React, { FC } from 'react'
import * as Styled from "./style"

interface IForecastWidget{
    title: string;
    temperature: string;
    details?: string;
}

export const ForecastWidget: FC<IForecastWidget> = ({title, temperature, details}) => {
  return (
    <Styled.Container>
        <Styled.Content>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Temperature>{temperature}</Styled.Temperature>
            <Styled.Details>{details}</Styled.Details>
        </Styled.Content>
    </Styled.Container>
  )
}
