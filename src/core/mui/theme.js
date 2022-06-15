import { createTheme } from "@mui/material/styles";
import { grey, blue, green, blueGrey, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: blue[600],
    },
    success: {
      main: green[500],
    },
    text: {
      main: blueGrey[900],
    },
    remove: {
      main: red[600],
    },
  },
});
