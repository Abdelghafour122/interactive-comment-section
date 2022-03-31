import { Avatar, Card } from "@mui/material";
import React, { useContext } from "react";
import CommentContext from "../commentContext";

const AddComment = () => {
  const { IMGOBJ } = useContext(CommentContext);

  return (
    <Card>
      <Avatar src={IMGOBJ.juliosomo} variant="rounded"></Avatar>
    </Card>
  );
};

export default AddComment;
