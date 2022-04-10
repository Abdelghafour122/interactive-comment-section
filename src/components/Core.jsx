import React, { useContext } from "react";
import { Container, Stack } from "@mui/material";
import Comment from "./Comment";
import AddComment from "./AddComment";
import CommentContext from "../commentContext";

const Core = () => {
  const { commentSection } = useContext(CommentContext);
  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        {commentSection.map((comment) => {
          return <Comment key={comment.id} onPass={comment} />;
        })}
        <AddComment />
      </Stack>
    </Container>
  );
};

export default Core;
