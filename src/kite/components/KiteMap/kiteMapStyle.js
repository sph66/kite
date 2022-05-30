import { Block } from "@mui/icons-material";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled as muiStyled, alpha } from "@mui/material/styles";

export const FavoriteButton = muiStyled(Button)(({ theme }) => ({
  // ".leaflet-marker-icon .leaflet-zoom-animated .leaflet-interactive": {
  "&": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.7),
    color: theme.palette.text.main,
    fontSize: 12,
    textTransform: "capitalize",
    width: "100%",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.5),
  },
}));
