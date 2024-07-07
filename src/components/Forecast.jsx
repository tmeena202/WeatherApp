import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";
import { WEATHER_API_KEY_2 } from "../utils/constants";

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);

  const getForecastData = async () => {
    const cityName = "Delhi, India";
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
      // console.log(jsonData);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  useEffect(() => {
    getForecastData();
  }, []);

  return (
    <>
      {forecastData && (
        <Box sx={{ width: "600px", marginTop: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 3 }}
          >
            7 Day Forecast{console.log(forecastData)}
          </Typography>
          <ForecastCard forecastData={forecastData[0]} />
          <ForecastCard forecastData={forecastData[1]} />
          <ForecastCard forecastData={forecastData[2]} />
          <ForecastCard forecastData={forecastData[3]} />
          <ForecastCard forecastData={forecastData[4]} />
          <ForecastCard forecastData={forecastData[5]} />
        </Box>
      )}
    </>
  );
};

export default Forecast;
