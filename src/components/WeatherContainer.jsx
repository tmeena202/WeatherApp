import { Box, Typography } from "@mui/material";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";

const WeatherContainer = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Box sx={{ maxWidth: "600px", width: "50%", paddingRight: 2 }}>
          <WeatherInfo />
          <HourlyForecast />
        </Box>
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Forecast />
        </Box>
      </Box>
    </div>
  );
};

export default WeatherContainer;
