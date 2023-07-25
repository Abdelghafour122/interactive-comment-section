import { Typography } from "@mui/material";
import React from "react";

const CommentText = ({ commentText }) => {
  return (
    <Typography sx={{ color: "neutral.grayishBlue", p: "20px 0" }}>
      {commentText}
    </Typography>
  );
};

export default CommentText;
