import Typography from "@mui/material/Typography";

export default function Subtitle({ children }) {
  return (
    <Typography
      variant="h2"
      sx={{ fontSize: 12, fontFamily: "Roboto" }}
      color="text.secondary"
    >
      {children}
    </Typography>
  );
}
