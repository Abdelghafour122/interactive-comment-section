import React, { useContext, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Stack,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import YouTag from "./YouTag";
import CommentContext from "../commentContext";
import ScoreChanger from "./ScoreChanger";

const OwnReply = ({ onContent, onCount, onTar, onDel, comId }) => {
  const { IMGOBJ } = useContext(CommentContext);
  const prsAva = IMGOBJ.juliusomo;

  const [clicked, setClicked] = useState(false);
  const [editingRep, setEditingRep] = useState(false);
  const [repText, setRepText] = useState(onContent);

  return (
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
                <Typography
                  fontWeight="bold"
                  sx={{ color: "neutral.darkBlue" }}
                >
                  juliusomo
                </Typography>
                <YouTag />
                <Typography sx={{ color: "neutral.grayishBlue" }}>
                  Just now
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  startIcon={<Delete />}
                  sx={{
                    color: "custom.softRed",
                    fontWeight: 500,
                    textTransform: "capitalize",
                  }}
                  onClick={() => onDel(comId)}
                >
                  Delete
                </Button>
                <Button
                  variant="text"
                  disabled={clicked}
                  sx={{
                    fontWeight: 500,
                    textTransform: "capitalize",
                    color: "custom.moderateBlue",
                  }}
                  startIcon={<Edit />}
                  onClick={() => {
                    setClicked(!clicked);
                    setEditingRep(!editingRep);
                  }}
                >
                  Edit
                </Button>
              </Stack>
            </Stack>
            {editingRep ? (
              <>
                <TextField
                  sx={{ p: "20px 0" }}
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
                    float: "right",
                    "&:hover": {
                      bgcolor: "custom.lightGrayishBlue",
                    },
                  }}
                  onClick={() => {
                    !repText.trim()
                      ? alert("Read the placeholder.")
                      : setEditingRep(!editingRep);
                    setClicked(!clicked);
                    console.log("check if it works");
                  }}
                >
                  Update
                </Button>
              </>
            ) : (
              <Typography
                component="div"
                sx={{ color: "neutral.grayishBlue", p: "20px 0" }}
              >
                <Typography
                  sx={{
                    color: "custom.moderateBlue",
                    width: "fit-content",
                    display: "inline-block",
                    fontWeight: 500,
                  }}
                >
                  {`@${onTar}`}
                </Typography>{" "}
                {repText}
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default OwnReply;
