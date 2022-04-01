import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    custom: {
      moderateBlue: "hsl(238, 40%, 52%)",
      softRed: "hsl(358, 79%, 66%)",
      lightGrayishBlue: "hsl(239, 57%, 85%)",
      paleRed: "hsl(357, 100%, 86%)",
    },
    neutral: {
      darkBlue: "hsl(212, 24%, 26%)",
      grayishBlue: "hsl(211, 10%, 45%)",
      lightGray: "hsl(223, 19%, 93%)",
      veryLightGray: "hsl(228, 33%, 97%)",
      white: "#FFF",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Rubik",
  },
});

export default theme;
