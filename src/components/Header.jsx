import React, { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Toolbar,
  AppBar,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { CITIES_API_URL, options } from "../utils/constants";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../utils/citySlice";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.city.name);

  const getCitiesData = async (query) => {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=10`,
        options
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setSuggestions(result.data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const debouncedGetCitiesData = useCallback(debounce(getCitiesData, 300), []);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setInputValue(query);
    if (query.length > 3) {
      debouncedGetCitiesData(query);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const cityWithCountry = `${suggestion.city}, ${suggestion.country}`;
    setInputValue(cityWithCountry);
    setSuggestions([]);
    dispatch(setCity(cityWithCountry));
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = () => {
    dispatch(setCity(inputValue));
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          Weather Dashboard
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search for any city name, Enter 3 alphabets to see suggestions"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            sx={{
              width: "40vw",
              flex: 1,
              marginRight: 1,
              background: "white",
              borderRadius: "10px",
              border: "2px solid black",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              },
              "& .MuiInputBase-input": {
                // Target the input element
                color: "",
              },
            }}
          />
          {isFocused && suggestions.length > 0 && (
            <Paper
              sx={{
                background: "GhostWhite",
                position: "absolute",
                width: "40vw",
                top: "100%",
                left: 0,
                zIndex: 10,
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <List>
                {suggestions.map((suggestion) => (
                  <ListItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "lightblue",
                      },
                      borderBottom: 1,
                    }}
                    button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <ListItemText
                      sx={{}}
                      primary={`${suggestion.city}, ${suggestion.country}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
          {/* {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ position: "absolute", top: "100%", left: 0 }}
            >
              {error}
            </Typography>
          )} */}
          <Button
            startIcon={<SearchIcon />}
            sx={{ background: "white", color: "black" }}
            variant="contained"
            color="inherit"
            size="mid"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
