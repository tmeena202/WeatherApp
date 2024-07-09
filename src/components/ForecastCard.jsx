import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const theme = createTheme(); // Create a theme object

const ForecastCard = ({ forecastData }) => {
  const { date } = forecastData;
  const { mintemp_c, maxtemp_c } = forecastData.day;
  const { text, icon } = forecastData.day.condition;

  const forecastDate = new Date(date);
  const day = forecastDate.getDay();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = daysOfWeek[day];

  // Use a media query to determine if the screen size is small (mobile)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        p: 1,
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexShrink: 0, mb: isMobile ? 1 : 0 }}
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
              ml: isMobile ? 0 : 2,
              mb: isMobile ? 1 : 0,
            }}
          />
          <Typography variant="h6" sx={{ ml: isMobile ? 0 : 2 }}>
            {mintemp_c}°C / {maxtemp_c}°C
          </Typography>
          <Typography
            variant="body1"
            sx={{ ml: isMobile ? 0 : 6, fontStyle: "italic" }}
          >
            {text}
          </Typography>
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowDropDownIcon sx={{ fontSize: "2rem", color: "gray" }} />
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
