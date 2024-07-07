import { Box, Typography } from "@mui/material";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";

const WeatherContainer = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 15 }}>
          <WeatherInfo />
          <Box>
            <HourlyForecast />
          </Box>
        </Box>
        <Box sx={{ paddingLeft: 18 }}>
          {/* <Typography variant="h6">7 days forecast</Typography> */}
          {/* Your seven-day forecast component here */}
          <Forecast />
        </Box>
      </Box>
    </div>
  );
};

export default WeatherContainer;
