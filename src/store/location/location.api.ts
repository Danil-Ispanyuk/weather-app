import { createApi } from "@reduxjs/toolkit/dist/query/react";
import config from "../../config";
import { LocationType } from "../../types/location.type";
import { apiBaseQuery } from "../api";


export const LocationApi = createApi({
    reducerPath: "locationQuery",
    baseQuery: apiBaseQuery,
    endpoints: build => ({
        getLocation: build.query({
            query: (cityId: string | undefined) => ({
                url: `locations/v1/${cityId}`,
                params: {
                    apikey: config.API_KEY
                }
            }),
            transformResponse: (res: LocationType) => !res ? res : ({
                Key: res.Key,
                LocalizedName: res.LocalizedName
            })
        })
    })
})

export const { useGetLocationQuery } = LocationApi