import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    name: "Delhi",
  },
  reducers: {
    setCity: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
