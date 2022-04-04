import {
  Box,
  Card,
  Stack,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ScoreChanger from "./ScoreChanger";
import CommentContext from "../commentContext";
import replyArrow from "../images/icon-reply.svg";
import { Delete, Edit } from "@mui/icons-material";
import AddReply from "./AddReply";
import YouTag from "./YouTag";

const RepliesSection = ({ onReplies, onClicked, onTar }) => {
  const { IMGOBJ } = useContext(CommentContext);
  const [repliess, setReplies] = useState(onReplies);

  // const [clicked, setClicked] = useState(false);
  // const [editingRep, setEditingRep] = useState(false);
  // const [repText, setRepText] = useState("");

  const addReply = (data) => {
    setReplies([
      ...repliess,
      {
        id: Math.floor(Math.random() * 10000),
        content: data,
        createdAt: "Just now",
        score: 0,
        replyingTo: `${onTar}`,
        replies: [],
        user: { username: "juliusomo" },
      },
    ]);
  };
  // DO THE SAME THING AS IN EDIT COMMENT
  const editReply = (repContent) => {};
  const deleteReply = (id) => {
    setReplies(repliess.filter((reply) => reply.id !== id));
  };
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
                          onClick={() => deleteReply(rep.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="text"
                          // disabled={clicked}
                          sx={{
                            fontWeight: 500,
                            textTransform: "capitalize",
                            color: "custom.moderateBlue",
                          }}
                          startIcon={<Edit />}
                          // onClick={() => {
                          //   setClicked(!clicked);
                          //   setEditingRep(!editingRep);
                          // }}
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
                  {/* {editingRep ? (
                    <>
                      <TextField
                        multiline
                        fullWidth
                        minRows={4}
                        id="outlined-multilined"
                        placeholder="Don't leave this blank!"
                        value={repText}
                        onChange={(e) => {
                          setRepText(e.target.value);
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
                          !repText.trim()
                            ? alert(
                                "If  you want to remove the comment text, just delete the comment."
                              )
                            : setEditingRep(!editingRep);
                        }}
                      >
                        Update
                      </Button>
                    </> */}
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
                  {/* ) : (
                  )} */}
                </Box>
              </Stack>
            </Box>
          </Card>
        );
      })}
      {onClicked && <AddReply onAdd={addReply} onClicked={onClicked} />}
    </Stack>
  );
};

export default RepliesSection;
