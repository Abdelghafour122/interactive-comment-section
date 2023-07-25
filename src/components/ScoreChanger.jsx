import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ScoreChanger = ({ onScore }) => {
  const [score, setScore] = useState(onScore);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "hsl(228, 33%, 97%)",
        borderRadius: "5px",
        "& svg": {
          color: "hsl(239, 57%, 85%)",
          "&:hover": {
            color: "hsl(238, 40%, 52%)",
          },
        },
      }}
    >
      <IconButton
        disableRipple
        aria-label="increase score"
        onClick={() => {
          setScore(score + 1);
        }}
      >
        <AddIcon sx={{ height: "20px", width: " 20px" }} />
      </IconButton>
      <Typography sx={{ color: "custom.moderateBlue", fontWeight: 500 }}>
        {score}
      </Typography>
      <IconButton
        disableRipple
        aria-label="decrease score"
        onClick={() => {
          setScore(score - 1);
        }}
      >
        <RemoveIcon sx={{ height: "20px", width: " 20px" }} />
      </IconButton>
    </Box>
  );
};

export default ScoreChanger;
