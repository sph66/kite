import { Box, Grid } from "@mui/material";

import { Header } from "../../core/components";
import { KiteMap } from "@/kite/components";
import { KiteSpotList } from "@/kite/components";

export default function KitePageView() {
  return (
    <Box>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <KiteMap />
        </Grid>
        <Grid item xs={12}>
          <KiteSpotList />
        </Grid>
      </Grid>
    </Box>
  );
}
