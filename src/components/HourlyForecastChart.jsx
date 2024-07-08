import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const HourlyForecastChart = () => {
  const hourlyData = useSelector((store) => store.hourlyForecast.data); // Adjust according to your state structure
  console.log(hourlyData);
  const labels = hourlyData.map(
    (item) => new Date(item.time_epoch * 1000).getHours() + ":00"
  );
  const temperatures = hourlyData.map((item) => item.temp_c);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        pointRadius: 3,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 2,
        width: "90vw",
        mx: "auto",
        my: 10,
        p: 3,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        boxShadow: 3,
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff" }}>
        Today's Hourly Forecast Chart
      </h2>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
                color: "#fff",
              },
              ticks: {
                color: "#fff",
              },
            },
            y: {
              title: {
                display: true,
                text: "Temperature (°C)",
                color: "#fff",
              },
              ticks: {
                color: "#fff",
              },
              beginAtZero: false,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default HourlyForecastChart;
