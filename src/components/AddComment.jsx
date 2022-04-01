import {
  Avatar,
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import CommentContext from "../commentContext";
import theme from "../styles";

const AddComment = () => {
  const { IMGOBJ } = useContext(CommentContext);

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
