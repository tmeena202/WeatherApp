/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { WEATHER_APIKEY } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const cityName = useSelector((store) => store.city.name);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to call API
  const getWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_APIKEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (cityName) {
      getWeatherData(cityName);
    }
  }, [cityName]);

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Weather Information
      </Typography>
      {error ? (
        <Typography variant="body1" color="error" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        weatherData && <WeatherCard weatherData={weatherData} />
      )}
    </Box>
  );
};

export default WeatherInfo;
