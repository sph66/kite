import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";

import FilterForm from "./FilterForm";
import { FilterContainer } from "./filterStyle";

export default function FilterView({
  mode,
  handleOnClick,
  handleChange,
  handleSubmit,
}) {
  return (
    <FilterContainer>
      {mode === "button" ? (
        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={handleOnClick}
        >
          FILTERS
        </Button>
      ) : (
        <FilterForm handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
    </FilterContainer>
  );
}
