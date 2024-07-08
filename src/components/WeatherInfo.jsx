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
        throw new Error(
          "Failed to fetch weather data, Please Enter valid city name. \n Kindly Refresh, If there is problem."
        );
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
        <Typography
          variant="h6"
          color="error"
          sx={{
            mx: 1,
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "tomato",
            padding: "10px 20px",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          {error}
        </Typography>
      ) : (
        weatherData && <WeatherCard weatherData={weatherData} />
      )}
    </Box>
  );
};

export default WeatherInfo;
