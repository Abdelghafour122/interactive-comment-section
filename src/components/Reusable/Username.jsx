import { Typography } from "@mui/material";
import React from "react";
import YouTag from "../YouTag";

const Username = ({ userName }) => {
  return (
    <>
      <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
        {userName}
      </Typography>
      {userName === "juliusomo" ? <YouTag /> : null}
    </>
  );
};

export default Username;
