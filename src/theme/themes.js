import { createTheme } from "@mui/material/styles";

const themes = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFA8B9",
    },
    secondary: {
      main: "#625B71",
    },
    tertiary: {
      main: "#7D5260",
    },
    error: {
      main: "#B3261E",
    },
    background: {
      default: "#ffffff",
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
});

export default themes;
