import React, { useContext, useState } from "react";
import { Box, Card, Stack, Avatar } from "@mui/material";
import CommentContext from "../commentContext";
import ScoreChanger from "./ScoreChanger";
import ConfirmDelete from "./ConfirmDelete";
import Username from "./Reusable/Username";
import CreatedAt from "./Reusable/CreatedAt";
import DeleteButton from "./Reusable/Buttons/TextButtons/DeleteButton";
import EditButton from "./Reusable/Buttons/TextButtons/EditButton";
import ReplyText from "./Reusable/Reply/ReplyText";
import UpdateReplyButton from "./Reusable/Buttons/BgButtons/UpdateReplyButton";
import EditableReplyField from "./Reusable/Reply/EditableReplyField";

const OwnReply = ({ onContent, onCount, onTar, onDel, comId }) => {
  const { IMGOBJ } = useContext(CommentContext);
  const prsAva = IMGOBJ.juliusomo;

  const [clicked, setClicked] = useState(false);
  const [editingRep, setEditingRep] = useState(false);
  const [repText, setRepText] = useState(onContent);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleEdit = () => {
    setClicked(!clicked);
    setEditingRep(!editingRep);
  };

  return (
    <>
      <ConfirmDelete
        onOpen={openModal}
        onClose={handleClose}
        comId={comId}
        onDel={onDel}
      />
      <Card>
        <Box sx={{ p: "15px" }}>
          <Stack spacing={2} direction="row">
            <Box>
              <ScoreChanger onScore={onCount} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar src={prsAva}></Avatar>
                  <Username userName="juliusomo" />
                  <CreatedAt createdAt="Just now" />
                </Stack>
                <Stack direction="row" spacing={1}>
                  <DeleteButton functionality={() => handleOpen()} />
                  <EditButton
                    editingComm={clicked}
                    functionality={handleEdit}
                  />
                </Stack>
              </Stack>
              {editingRep ? (
                <>
                  <EditableReplyField
                    repText={repText}
                    setText={setRepText}
                    placeHolder="Don't leave this blank!"
                  />
                  <UpdateReplyButton
                    clicked={clicked}
                    editingRep={editingRep}
                    repText={repText}
                    setClicked={setClicked}
                    setEditingRep={setEditingRep}
                  />
                </>
              ) : (
                <ReplyText onTar={onTar} repText={repText} />
              )}
            </Box>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default OwnReply;
