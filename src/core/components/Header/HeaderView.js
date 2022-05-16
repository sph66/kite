import { Grid } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

import { AccountBox, Container, Logo } from "./headerStyle.js";

import Kite_logo from "@/assets/images/Kite_logo.png";

export default function HeaderView() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Logo>
            <img src={Kite_logo} />
          </Logo>
        </Grid>
        <Grid item xs={6}>
          <AccountBox>
            <AccountCircle sx={{ fontSize: 35 }} />
          </AccountBox>
        </Grid>
      </Grid>
    </Container>
  );
}
