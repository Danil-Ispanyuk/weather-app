import { configureStore } from "@reduxjs/toolkit";
import { AutoCompleteApi } from "./autocomplete/autocomplete.api";
import { ForecastApi } from "./forecast/forecast.api";
import { LocationApi } from "./location/location.api";

export const store = configureStore({
  reducer: {
    [AutoCompleteApi.reducerPath]: AutoCompleteApi.reducer,
    [ForecastApi.reducerPath]: ForecastApi.reducer,
    [LocationApi.reducerPath]: LocationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AutoCompleteApi.middleware,
      ForecastApi.middleware,
      LocationApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
