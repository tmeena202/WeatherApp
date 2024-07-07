/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { WEATHER_APIKEY } from "../utils/constants";

import WeatherCard from "./WeatherCard";
import { Box, Typography } from "@mui/material";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Function to call API
  const getWeatherData = async () => {
    const cityName = "Delhi";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=` +
        WEATHER_APIKEY +
        "&units=metric"
    );
    const data = await response.json();
    // console.log(data);
    setWeatherData(data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Weather Information
      </Typography>
      <WeatherCard weatherData={weatherData} />
    </Box>
  );
};

export default WeatherInfo;
