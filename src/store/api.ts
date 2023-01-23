import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import config from "../config";

export const apiBaseQuery = fetchBaseQuery({
    baseUrl: config.API_URL,
})