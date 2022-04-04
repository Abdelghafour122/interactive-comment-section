import { Chip, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../styles";

const YouTag = () => {
  return (
    <ThemeProvider theme={theme}>
      <Chip
        label="you"
        variant="filled"
        size="small"
        sx={{
          bgcolor: "custom.moderateBlue",
          color: "neutral.white",
          fontWeight: 500,
          borderRadius: "5px",
        }}
      />
    </ThemeProvider>
  );
};

export default YouTag;
