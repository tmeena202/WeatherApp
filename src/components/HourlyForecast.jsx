import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HourlyForecastCard from "./HourlyForecastCard";
import { WEATHER_API_KEY_2 } from "../utils/constants";
import { setHourlyForecast } from "../utils/hourlyForecastSlice";

const HourlyForecast = () => {
  const hourlyData = useSelector((state) => state.hourlyForecast.data);

  const cityName = useSelector((store) => store.city.name);

  const dispatch = useDispatch();

  const getHourlyForecastData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY_2}&q=${cityName}&days=1`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const jsonData = await response.json();
      dispatch(setHourlyForecast(jsonData.forecast.forecastday[0].hour));
    } catch (error) {
      console.error("Error fetching hourly forecast data:", error);
    }
  };

  useEffect(() => {
    if (cityName) {
      getHourlyForecastData(cityName);
    }
  }, [cityName]);

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 3 }}>
        Today's Hourly Forecast
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {hourlyData
          .filter((forecast, index) => index % 4 === 0)
          .map((forecast, index) => (
            <HourlyForecastCard key={index} forecastData={forecast} />
          ))}
      </Box>
    </Box>
  );
};

export default HourlyForecast;
