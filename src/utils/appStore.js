import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export default store;
