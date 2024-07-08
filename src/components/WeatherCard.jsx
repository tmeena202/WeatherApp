import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import SpeedIcon from "@mui/icons-material/Speed";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return <p>Loading weather data...</p>;

  const { name, visibility } = weatherData;
  const { country } = weatherData.sys;
  const { temp, feels_like, humidity, pressure } = weatherData.main;
  const { speed } = weatherData.wind;

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 10,
        margin: "20px auto",
        backgroundColor: "lightblue",
        // background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
        color: "white",
      }}
    >
      <CardHeader
        title={`${name}, ${country}`}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
          textAlign: "center",
        }}
        sx={{
          backgroundColor: "rgba(63, 81, 181, 0.8)",
          color: "white",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          <ThermostatIcon sx={{ marginRight: 1 }} fontSize="large" /> {temp}°C
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1">
            <ThermostatIcon sx={{ marginRight: 1 }} /> Feels like: {feels_like}
            °C
          </Typography>
          <Typography variant="body1">
            <OpacityIcon sx={{ marginRight: 1 }} /> Humidity: {humidity}%
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1">
            <SpeedIcon sx={{ marginRight: 1 }} /> Pressure: {pressure} hPa
          </Typography>
          <Typography variant="body1">
            <AirIcon sx={{ marginRight: 1 }} /> Wind: {speed} m/s
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Visibility: {visibility / 1000} Km
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
