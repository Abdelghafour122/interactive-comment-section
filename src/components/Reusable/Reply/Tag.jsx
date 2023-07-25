import { Typography } from "@mui/material";
import React from "react";

const Tag = ({ onTar }) => {
  return (
    <Typography
      sx={{
        color: "custom.moderateBlue",
        width: "fit-content",
        display: "inline-block",
        fontWeight: 500,
      }}
    >
      {`@${onTar}`}
    </Typography>
  );
};

export default Tag;
