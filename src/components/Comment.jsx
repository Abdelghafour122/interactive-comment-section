import React, { useContext } from "react";
import { Avatar, Button, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Reply } from "@mui/icons-material/";
import CommentContext from "../commentContext";
import ScoreChanger from "./ScoreChanger";

const Comment = ({ onPass }) => {
  const { content, createdAt, score, replies, user } = onPass;
  const { IMGOBJ } = useContext(CommentContext);
  const userName = user.username;
  const ava = IMGOBJ[`${userName}`];
  return (
    <Card>
      <Box sx={{ p: "15px" }}>
        <Stack spacing={2} direction="row">
          <Box>
            <ScoreChanger />
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
                <Typography fontWeight="bold"> {userName} </Typography>
                <Typography> {createdAt} </Typography>
              </Stack>
              <Button
                variant="text"
                sx={{ fontWeight: "bold" }}
                startIcon={<Reply />}
              >
                Reply
              </Button>
            </Stack>
            <Typography> {content} </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};
export default Comment;
