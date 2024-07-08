import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const HourlyForecastCard = ({ forecastData }) => {
  const { time, temp_c, condition } = forecastData;

  return (
    <Card
      sx={{
        width: 160,
        margin: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjusted background color with opacity
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Softened box shadow
        textAlign: "center",
        borderRadius: "20%",
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {new Date(time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
        <CardMedia
          component="img"
          src={condition.icon} // Use 'src' instead of 'image' to ensure proper rendering
          alt={condition.text}
          sx={{
            width: 50,
            height: 50,
            margin: "8px auto",
            objectFit: "contain",
          }} // Adjusted styling for the weather icon
        />
        <Typography variant="h6" sx={{ color: "rgba(0, 0, 0, 0.8)" }}>
          {temp_c}°C
        </Typography>{" "}
        {/* Adjusted font color */}
        <Typography variant="body2" color="text.secondary">
          {condition.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HourlyForecastCard;
