import React, { useContext, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Stack,
  Typography,
  ThemeProvider,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Delete, Edit } from "@mui/icons-material";
import CommentContext from "../commentContext";
import ScoreChanger from "./ScoreChanger";
import theme from "../styles";
import replyArrow from "../images/icon-reply.svg";
import RepliesSection from "./RepliesSection";
import YouTag from "./YouTag";

const Comment = ({ onPass }) => {
  const { id, content, createdAt, score, replies, user } = onPass;
  const { IMGOBJ, deleteComment } = useContext(CommentContext);
  const userName = user.username;
  const ava = IMGOBJ[`${userName}`];

  const [clicked, setClicked] = useState(false);
  const [editingComm, setEditingComm] = useState(false);
  const [commentText, setCommentText] = useState(content);
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
                  {userName === "juliusomo" && <YouTag />}
                  <Typography sx={{ color: "neutral.grayishBlue" }}>
                    {createdAt}
                  </Typography>
                </Stack>
                {userName === "juliusomo" ? (
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<Delete />}
                      sx={{
                        color: "custom.softRed",
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                      onClick={() => {
                        deleteComment(id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="text"
                      disabled={editingComm}
                      sx={{
                        fontWeight: 500,
                        textTransform: "capitalize",
                        color: "custom.moderateBlue",
                      }}
                      startIcon={<Edit />}
                      onClick={() => setEditingComm(!editingComm)}
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
              {editingComm ? (
                <>
                  <TextField
                    multiline
                    fullWidth
                    minRows={4}
                    id="outlined-multilined"
                    placeholder="Don't leave this blank!"
                    value={commentText}
                    onChange={(e) => {
                      setCommentText(e.target.value);
                    }}
                  />
                  <Button
                    sx={{
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
                </>
              ) : (
                <Typography sx={{ color: "neutral.grayishBlue" }}>
                  {commentText}
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Card>
      {replies && (
        <RepliesSection
          onReplies={replies}
          onClicked={clicked}
          onTar={userName}
        />
      )}
    </ThemeProvider>
  );
};
export default Comment;
