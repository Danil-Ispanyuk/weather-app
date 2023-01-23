import { createApi } from "@reduxjs/toolkit/dist/query/react";
import config from "../../config";
import { CurrentForecastType, DailyApiType } from "../../types/forecast.type";
import { apiBaseQuery } from "../api";

export const ForecastApi = createApi({
    reducerPath: "forecastQuery",
    baseQuery: apiBaseQuery,
    endpoints: build => ({
        getCurrentForecast: build.query({
            query: (cityId: string) => ({
                url: `currentconditions/v1/${cityId}`,
                params: {
                    apikey: config.API_KEY
                }
            }),
            transformResponse: (response: CurrentForecastType[]) => response[0],
        }),
        getDailyForecast: build.query({
            query: (cityId: string) => ({
                url: `forecasts/v1/daily/5day/${cityId}`,
                params: {
                    apikey: config.API_KEY
                }
            }),
            transformResponse: (response: DailyApiType) => response.DailyForecasts
        })
    })
})

export const { useGetCurrentForecastQuery, useGetDailyForecastQuery } = ForecastApi