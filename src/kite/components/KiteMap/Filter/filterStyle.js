import { Card } from "@mui/material";
import styled from "styled-components";

import { styled as muiStyled } from "@mui/material/styles";

export const FilterContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  z-index: 9999;
`;

export const CardContainer = muiStyled(Card)(() => ({
  width: "180px",
}));
