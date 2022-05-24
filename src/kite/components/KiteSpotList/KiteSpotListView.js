import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { parseProbability } from "./utils";

import {
  GridBox,
  InfoBox,
  LocationContainer,
  ParagraphLocation,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./kiteSpotListStyle";
import { Info } from "@mui/icons-material";

export default function KiteSpotListView({
  spots,
  isLoading,
  isError,
  searchSpot,
  handleSpotSearchOnChange,
}) {
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
      field: "lat",
      headerName: "Latitude",
      width: 190,
    },
    {
      field: "long",
      headerName: "Longitude",
      width: 190,
    },
    {
      field: "probability",
      valueGetter: parseProbability,
      headerName: "Wind Prob.",
      width: 190,
    },
    {
      field: "month",
      headerName: "When to go",
      width: 195,
    },
  ];

  return (
    <Grid>
      <LocationContainer>
        <ParagraphLocation>Locations</ParagraphLocation>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchSpot}
            onChange={(e) => {
              {
                console.log(e.target.value);
                handleSpotSearchOnChange(e.target.value);
              }
            }}
          />
        </Search>

        <InfoBox>
          {isError && <div>Something went wrong</div>}
          {isLoading && <div>Loading...</div>}
        </InfoBox>

        {!isLoading && !isError && (
          <GridBox>
            <DataGrid autoHeight columns={columns} rows={spots} sx={{ m: 2 }} />
          </GridBox>
        )}
      </LocationContainer>
    </Grid>
  );
}
