import { Button } from "@mui/material";
import React from "react";

const UpdateButton = ({ commentText, editingComm, setEditingComm }) => {
  return (
    <Button
      sx={{
        float: "right",
        bgcolor: "custom.moderateBlue",
        color: "neutral.white",
        p: "8px 25px",
        "&:hover": {
          bgcolor: "custom.lightGrayishBlue",
        },
      }}
      onClick={() => {
        !commentText.trim()
          ? alert(
              "If  you want to remove the comment text, just delete the comment."
            )
          : setEditingComm(!editingComm);
      }}
    >
      Update
    </Button>
  );
};

export default UpdateButton;
