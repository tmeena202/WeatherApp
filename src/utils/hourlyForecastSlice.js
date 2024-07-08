import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const hourlyForecastSlice = createSlice({
  name: "hourlyForecast",
  initialState,
  reducers: {
    setHourlyForecast: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setHourlyForecast } = hourlyForecastSlice.actions;
export default hourlyForecastSlice.reducer;
