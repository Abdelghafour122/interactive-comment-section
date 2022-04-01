import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useStyles from "../customClasses";
import CommentContext from "../commentContext";

const ScoreChanger = ({ onScore }) => {
  const classes = useStyles();
  const [score, setScore] = useState(onScore);

  const { comments } = useContext(CommentContext);
  return (
    <Box className={classes.scoreChanger}>
      <IconButton
        disableRipple
        aria-label="increase score"
        onClick={() => {
          setScore(score + 1);
        }}
      >
        <AddIcon sx={{ height: "20px", width: " 20px", color: "" }} />
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
        <RemoveIcon sx={{ height: "20px", width: " 20px", color: "" }} />
      </IconButton>
    </Box>
  );
};

export default ScoreChanger;
