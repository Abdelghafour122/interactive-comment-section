import React, { useContext, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Stack,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import { Reply } from "@mui/icons-material/";
import { Delete, Edit } from "@mui/icons-material";
import CommentContext from "../commentContext";
import ScoreChanger from "./ScoreChanger";
import theme from "../styles";
import replyArrow from "../images/icon-reply.svg";
import RepliesSection from "./RepliesSection";

const Comment = ({ onPass }) => {
  const { content, createdAt, score, replies, user } = onPass;
  const { IMGOBJ } = useContext(CommentContext);
  const userName = user.username;
  const ava = IMGOBJ[`${userName}`];

  const [clicked, setClicked] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Box sx={{ p: "15px" }}>
          <Stack spacing={2} direction="row">
            <Box>
              <ScoreChanger onScore={score} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar src={ava}></Avatar>
                  <Typography
                    fontWeight="bold"
                    sx={{ color: "neutral.darkBlue" }}
                  >
                    {userName}
                  </Typography>
                  <Typography sx={{ color: "neutral.grayishBlue" }}>
                    {createdAt}
                  </Typography>
                </Stack>
                {userName == "juliusomo" ? (
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<Delete />}
                      sx={{
                        color: "custom.softRed",
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="text"
                      sx={{
                        fontWeight: 500,
                        textTransform: "capitalize",
                        color: "custom.moderateBlue",
                      }}
                      startIcon={<Edit />}
                    >
                      Edit
                    </Button>
                  </Stack>
                ) : (
                  <Button
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    variant="text"
                    sx={{
                      fontWeight: 500,
                      textTransform: "capitalize",
                      color: "custom.moderateBlue",
                    }}
                    startIcon={<img src={replyArrow} alt="reply sign" />}
                  >
                    Reply
                  </Button>
                )}
              </Stack>
              <Typography sx={{ color: "neutral.grayishBlue" }}>
                {content}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Card>
      {replies && <RepliesSection onReplies={replies} onClicked={clicked} />}
    </ThemeProvider>
  );
};
export default Comment;
