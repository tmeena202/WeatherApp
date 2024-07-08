import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ForecastCard = ({ forecastData }) => {
  const { date } = forecastData;
  const { mintemp_c, maxtemp_c } = forecastData.day;
  const { text, icon } = forecastData.day.condition;

  const forecastDate = new Date(date);
  const day = forecastDate.getDay();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = daysOfWeek[day];

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        p: 2,
        background: "linear-gradient(to right, #e0eafc, #cfdef3)", // Updated gradient colors
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Softened box shadow
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexShrink: 0 }}
          >
            {dayName}, {date}
          </Typography>
          <CardMedia
            component="img"
            image={icon}
            alt={text}
            sx={{
              width: 40,
              height: 40,
              ml: 2,
              flexShrink: 0,
            }}
          />
          <Typography variant="h6" sx={{ ml: 2 }}>
            {mintemp_c}°C / {maxtemp_c}°C
          </Typography>
          <Typography variant="body2" sx={{ ml: 2, fontStyle: "italic" }}>
            {text}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowDropDownIcon sx={{ fontSize: "2rem", color: "gray" }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
