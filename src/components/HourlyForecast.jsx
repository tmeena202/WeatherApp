import { Box, Typography } from "@mui/material";
import React from "react";

const HourlyForecast = () => {
  return (
    <>
      <Typography variant="h6" sx={{ marginTop: 5 }}>
        Hourly forecast
      </Typography>
      <Box sx={{ width: "329px", height: "360px", border: 1 }}>
        <Typography variant="b1">Hello</Typography>
      </Box>
    </>
  );
};

export default HourlyForecast;
