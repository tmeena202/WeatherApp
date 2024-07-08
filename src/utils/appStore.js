import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import hourlyForecastReducer from "./hourlyForecastSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    hourlyForecast: hourlyForecastReducer,
  },
});

export default store;
