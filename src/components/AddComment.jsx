import {
  Avatar,
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import CommentContext from "../commentContext";
import theme from "../styles";

const AddComment = () => {
  const { IMGOBJ, addComment } = useContext(CommentContext);
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
            <TextField
              multiline
              fullWidth
              minRows={4}
              id="outlined-multilined"
              placeholder="Add a comment"
              value={commentTxt}
              onChange={(e) => {
                setCommentTxt(e.target.value);
              }}
            />
            <Button
              size="large"
              sx={{
                bgcolor: "custom.moderateBlue",
                color: "neutral.white",
                p: "8px 25px",
                "&:hover": {
                  bgcolor: "custom.lightGrayishBlue",
                },
              }}
              onClick={(e) => {
                !commentTxt.trim() && e.preventDefault();
                addComment(commentTxt.trim());
                setCommentTxt("");
              }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default AddComment;
