import { TextField } from "@mui/material";
import React from "react";

const EditableCommentField = ({ commentText, setCommentText, placeHolder }) => {
  return (
    <TextField
      sx={{ p: "20px 0" }}
      multiline
      fullWidth
      minRows={4}
      id="outlined-multilined"
      placeholder={placeHolder}
      value={commentText}
      onChange={(e) => {
        setCommentText(e.target.value);
      }}
    />
  );
};

export default EditableCommentField;
