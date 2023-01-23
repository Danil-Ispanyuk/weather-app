import { createApi } from "@reduxjs/toolkit/query/react"
import config from "../../config"
import { IAutoComplete } from "../../types/autocomplete.type"
import { apiBaseQuery } from "../api"

export const AutoCompleteApi = createApi({
    reducerPath: "autocompleteQuery",
    baseQuery: apiBaseQuery,
    endpoints: build => ({
        getCities: build.query<IAutoComplete[], any>({
            query: (search: string) => ({
                url: '/locations/v1/cities/autocomplete',
                params: {
                    apikey: config.API_KEY,
                    q: search
                }
            })
        })
    })
})

export const { useGetCitiesQuery } = AutoCompleteApi