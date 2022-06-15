import Typography from "@mui/material/Typography";

export default function Info({ children }) {
  return (
    <Typography variant="h3" sx={{ fontSize: 11 }} color="text.primary">
      {children}
    </Typography>
  );
}
