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
});

export default useStyles;
