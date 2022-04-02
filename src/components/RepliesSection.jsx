import {
  Box,
  Card,
  Stack,
  Typography,
  Avatar,
  Button,
  Chip,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ScoreChanger from "./ScoreChanger";
import CommentContext from "../commentContext";
import replyArrow from "../images/icon-reply.svg";
import { Delete, Edit } from "@mui/icons-material";
import AddComment from "./AddComment";

const RepliesSection = ({ onReplies, onClicked }) => {
  const { IMGOBJ } = useContext(CommentContext);

  const { addComment, editComment, deleteComment } = useContext(CommentContext);

  const [repliess, setReplies] = useState(onReplies);
  return (
    <Stack spacing={2} width="800px" alignSelf="flex-end">
      {repliess.map((rep) => {
        const { content, createdAt, score, user, replyingTo } = rep;
        const userName = user.username;
        const ava = IMGOBJ[`${userName}`];
        return (
          <Card key={rep.id}>
            <Box sx={{ p: "15px" }}>
              <Stack spacing={2} direction="row">
                <Box>
                  <ScoreChanger onScore={score} />
                </Box>
                <Box>
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
                      {userName === "juliusomo" && (
                        <Chip
                          label="you"
                          variant="filled"
                          size="small"
                          sx={{
                            bgcolor: "custom.moderateBlue",
                            color: "neutral.white",
                            fontWeight: 500,
                            borderRadius: "5px",
                          }}
                        />
                      )}
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
                  <Typography
                    component="div"
                    sx={{ color: "neutral.grayishBlue" }}
                  >
                    <Typography
                      sx={{
                        color: "custom.moderateBlue",
                        width: "fit-content",
                        display: "inline-block",
                        fontWeight: 500,
                      }}
                    >
                      {`@${replyingTo}`}
                    </Typography>{" "}
                    {content}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Card>
        );
      })}
      {onClicked && <AddComment />}
    </Stack>
  );
};

export default RepliesSection;
