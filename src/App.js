import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/core/mui/theme";

import { KitePage } from "./page";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <KitePage />
    </ThemeProvider>
  );
}

export default App;
