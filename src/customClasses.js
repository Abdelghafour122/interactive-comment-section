import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  scoreChanger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "hsl(228, 33%, 97%)",
    borderRadius: "5px",
    "& svg": {
      color: "hsl(239, 57%, 85%)",
      "&:hover": {
        color: "hsl(238, 40%, 52%)",
      },
    },
  },
  sendButton: {
    backgroundColor: "hsl(238, 40%, 52%)",
    color: "#fff",
    padding: "8px 25px",
    "&:hover": {
      backgroundColor: "hsl(239, 57%, 85%)",
    },
  },
});

export default useStyles;
