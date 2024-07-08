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
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../utils/citySlice";
import debounce from "lodash.debounce";
import { options } from "../utils/constants";

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
    if (query.length > 2) {
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
    handleSubmit(cityWithCountry);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (city) => {
    const cityToSearch = city || inputValue;
    dispatch(setCity(cityToSearch));
    // Trigger the search action if needed
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "PaleVioletRed" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "white", cursor: "pointer" }}
          onClick={handleRefresh}
        >
          Weather Dashboard
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "60%",
            maxWidth: "600px",
            position: "relative",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search for any city (min. 3 characters)"
            size="small"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            sx={{
              flex: 1,
              marginRight: "8px",
              borderRadius: "4px",
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
          <Button
            startIcon={<SearchIcon />}
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => handleSubmit(inputValue)}
            sx={{
              borderRadius: "4px",
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
          >
            Search
          </Button>
          {isFocused && suggestions.length > 0 && (
            <Paper
              sx={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                width: "100%",
                zIndex: 1,
                borderRadius: "4px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                backgroundColor: "white",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <List>
                {suggestions.map((suggestion) => (
                  <ListItem
                    key={suggestion.id}
                    button
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    <ListItemText
                      primary={`${suggestion.city}, ${suggestion.country}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
