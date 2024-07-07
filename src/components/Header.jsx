import React from "react";
import {
  Toolbar,
  AppBar,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "Tomato" }}>
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
        <Box>
          <TextField
            variant="outlined"
            placeholder="Search for any city"
            size="small"
            sx={{ width: "50vw", marginRight: 1, background: "white" }}
          />
          <Button variant="contained" color="primary" size="small">
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
