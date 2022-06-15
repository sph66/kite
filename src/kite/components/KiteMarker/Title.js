import Typography from "@mui/material/Typography";

export default function Title({ children }) {
  return (
    <Typography
      variant="h1"
      sx={{ fontSize: 15, fontWeight: "bold" }}
      color="text.primary"
      gutterBottom
    >
      {children}
    </Typography>
  );
}
