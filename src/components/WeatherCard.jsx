import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return <p>Loading weather data...</p>;

  const { name, visibility } = weatherData;
  const { country } = weatherData.sys;
  const { temp, feels_like, humidity, pressure } = weatherData.main;
  const { speed } = weatherData.wind;

  return (
    <Card
      sx={{
        width: 329,
        border: 1,
        padding: 2,
        marginTop: 3,
        background: "lightgray",
      }}
    >
      <CardHeader
        title={`${name}, ${country}`}
        // subheader={<ThermostatIcon />}
      />
      <CardContent>
        <Typography variant="h5">
          <ThermostatIcon /> {temp}°C
        </Typography>
        <Typography variant="body1">
          Feels like: {feels_like}°C. Humidity: {humidity}%. Pressure:
          {pressure} hPa
        </Typography>
        <Typography variant="body2">
          <AirIcon sx={{ paddingTop: 1, paddingRight: 1 }} />
          Wind: Speed {speed} Visibility: {visibility / 1000}Km
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
