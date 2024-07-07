import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ForecastCard = ({ forecastData }) => {
  const { date } = forecastData;
  const { mintemp_c, maxtemp_c } = forecastData.day;
  const { text, icon } = forecastData.day.condition;

  const forecastDate = new Date(date);
  const day = forecastDate.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[day];

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        p: 0,
        background: "lightgray",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {dayName},{" " + date}
          </Typography>
          <CardMedia
            component="img"
            image={icon}
            alt={text}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography variant="body1" sx={{ paddingRight: 2 }}>
            {mintemp_c}/{maxtemp_c}°C
          </Typography>
          <Typography variant="body2">{text}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowDropDownIcon sx={{ fontSize: "large" }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
