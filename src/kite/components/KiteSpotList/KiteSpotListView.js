import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  GridBox,
  LocationContainer,
  ParagraphLocation,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./kiteSpotListStyle";

export default function KiteSpotListView() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 190,
    },
    {
      field: "country",
      headerName: "Country",
      width: 190,
    },
    {
      field: "latitude",
      headerName: "Latitude",
      width: 190,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      width: 190,
    },
    {
      field: "wind",
      headerName: "Wind Prob.",
      width: 190,
    },
    {
      field: "when",
      headerName: "When to go",
      width: 195,
    },
  ];
  const rows = [
    { id: 1, name: "Little Rock" },
    { id: 2, name: "Manassas" },
    { id: 3, name: "Fort Pierce" },
  ];
  return (
    <Grid>
      <LocationContainer>
        <ParagraphLocation>
          <p>Locations</p>
        </ParagraphLocation>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <GridBox>
          <DataGrid autoHeight columns={columns} rows={rows} sx={{ m: 2 }} />
        </GridBox>
      </LocationContainer>
    </Grid>
  );
}
