import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";
import { WEATHER_API_KEY_2 } from "../utils/constants";
import { useSelector } from "react-redux";

const Forecast = () => {
  const cityName = useSelector((store) => store.city.name);
  const [forecastData, setForecastData] = useState(null);

  const getForecastData = async (cityName) => {
    const days = 7;

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY_2}&q=${cityName}&days=${days}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const jsonData = await response.json();
      setForecastData(jsonData.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  useEffect(() => {
    getForecastData(cityName);
  }, [cityName]);

  return (
    <>
      {forecastData && (
        <Box sx={{ maxWidth: "100%", marginTop: 5, padding: "0 10px" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 3 }}
          >
            7 Day Forecast
          </Typography>
          {forecastData.map((forecast, index) => (
            <ForecastCard key={index * 12} forecastData={forecast} />
          ))}
        </Box>
      )}
    </>
  );
};

export default Forecast;
