import { Button } from "@mui/material";
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

export const RemoveFavoriteButton = muiStyled(Button)(({ theme }) => ({
  // ".leaflet-marker-icon .leaflet-zoom-animated .leaflet-interactive": {
  "&": {
    backgroundColor: alpha(theme.palette.remove.main, 0.8),
    color: theme.palette.text.main,
    fontSize: 12,
    textTransform: "capitalize",
    width: "100%",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.remove.main, 0.6),
  },
}));
