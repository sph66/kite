import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import styled from "styled-components";

export const InfoBox = styled.div`
  margin: 40px 40px 40px 20px;
`;

export const LocationContainer = styled.div`
  margin: 40px 40px 40px 40px;
`;

export const ParagraphLocation = styled.p`
  font-size: 1.5em;
  margin: 19px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const GridBox = muiStyled(Box)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
  },
  "& .MuiDataGrid-row:nth-of-type(even):hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.22),
  },
}));

export const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.12),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    margin: `0 ${theme.spacing(2)}`,
    width: "250px",
  },
}));

export const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
