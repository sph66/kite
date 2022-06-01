import { Box, CardContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { CardContainer } from "./filterStyle";

export default function FilterForm({ handleChange, handleSubmit }) {
  return (
    <CardContainer>
      <CardContent>
        <Box
          autoComplete="off"
          sx={{
            "& > :not(style)": { margin: "5px 0" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Country"
            variant="standard"
            size="small"
            fullWidth
            onChange={(e) => handleChange("country", e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Wind Probability"
            variant="standard"
            size="small"
            fullWidth
            onChange={(e) => handleChange("probability", e.target.value)}
          />
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            APPLY FILTER
          </Button>
        </Box>
      </CardContent>
    </CardContainer>
  );
}
