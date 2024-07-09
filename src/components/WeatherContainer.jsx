import { Box, Grid } from "@mui/material";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";
import HourlyForecastChart from "./HourlyForecastChart";

const WeatherContainer = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: 0, padding: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "600px", width: "100%" }}>
              <WeatherInfo />
              <HourlyForecast />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              <Forecast />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <HourlyForecastChart />
      </Box>
    </div>
  );
};

export default WeatherContainer;
