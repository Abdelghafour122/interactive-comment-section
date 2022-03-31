import React, { useContext } from "react";
import { Container, Stack } from "@mui/material";
import Comment from "./Comment";
import AddComment from "./AddComment";
import CommentContext from "../commentContext";

const Core = () => {
  const { comments } = useContext(CommentContext);
  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        {comments.map((comm) => {
          return <Comment key={comm.id} onPass={comm} />;
        })}
        <AddComment />
      </Stack>
    </Container>
  );
};

export default Core;
