import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";

const EditButton = ({ functionality, editingComm }) => {
  return (
    <Button
      startIcon={<Edit />}
      disabled={editingComm}
      sx={{
        color: "custom.moderateBlue",
        fontWeight: 500,
        textTransform: "capitalize",
      }}
      onClick={() => {
        functionality();
      }}
    >
      Edit
    </Button>
  );
};

export default EditButton;
