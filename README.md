# Weather App
I created a weather App with React.js, Redux toolkit, Chat.js and Material UI.

## Installation

`npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Feature in this app.

``1. Search Functionality``
- Implemented a search bar enabling users to search for cities, with real-time weather data fetched via a weather API. Integrated dynamic __*search suggestions*__ based on user input to enhance usability. And used debouncing to reduce API calls.

``2. Display Current Weather``

- Displayed current weather information (temperature, humidity, wind speed, weather conditions) for each searched city, providing detailed weather updates.

``3. 7-Day Forecast``
- Implemented a 7-day weather forecast display for the selected city, showing daily temperatures, weather conditions, and precipitation details to provide comprehensive weather information.

``4. Data Visualization``
- Implemented __*temperature trend charts*__ using Chart.js to visualize 1-day hourly forecasts, providing intuitive graphs of temperature trends over time for enhanced weather data presentation.

``5. Responsive Design``
- Ensured application responsiveness across various screen sizes, including mobile devices, utilizing Material-UI's grid system and responsive utilities for a seamless user experience on all devices.

``6. Error Handling``
- Implemented graceful error handling to display appropriate messages when weather data cannot be fetched, including handling edge cases like invalid city names to ensure robust application performance and user experience.

## Structure of this app
```
├── public/                       # Public assets and index.html  
├── src/                          # Source files  
│   ├── components/               # React components  
│   │   ├── Header.js             # Application header component  
│   │   ├── WeatherInfo.js        #  Component displaying weather information  
│   │   ├── Forecast.js           # Component displaying 7-day forecast  
│   │   ├── HourlyForecast.js     # Component displaying hourly forecast
│   ├── utils/                    # Utility functions and constants  
│   │   ├── constants.js          # API keys and constants  
│   │   ├── hourlyForecastSlice.js  # Redux slice for hourly forecast  
│   ├── App.js                    # Main application component  
│   ├── index.js                  # Entry point  
├── .gitignore                    # Git ignore  
├── package.json                  # Package.json with dependencies  
├── README.md                     #  Project README file  
```


