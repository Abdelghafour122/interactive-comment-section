import { Avatar, Card, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import CommentContext from "../commentContext";
import theme from "../styles";
import EditableCommentField from "./Reusable/Comment/EditableCommentField";
import SendButton from "./Reusable/Buttons/BgButtons/SendButton";

const AddComment = () => {
  const { IMGOBJ } = useContext(CommentContext);
  const [commentTxt, setCommentTxt] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Box sx={{ p: "15px" }}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Avatar
              src={IMGOBJ.juliusomo}
              variant="rounded"
              alt="user-avatar"
            />
            <EditableCommentField
              commentText={commentTxt}
              setCommentText={setCommentTxt}
              placeHolder="Add a comment"
            />
            <SendButton commentTxt={commentTxt} setCommentTxt={setCommentTxt} />
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default AddComment;
