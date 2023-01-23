import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { AccuErrorData } from "../types/error.type";

const getErrorMessage = (error: AccuErrorData) => {
  return (error as AccuErrorData).Message;
};

export const getError = (error: FetchBaseQueryError | SerializedError) => {
  return "data" in error && getErrorMessage(error.data as AccuErrorData);
};

export function getWeekDay (value: string) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(value);
  const dayName = days[d.getDay()];
  return dayName
}
