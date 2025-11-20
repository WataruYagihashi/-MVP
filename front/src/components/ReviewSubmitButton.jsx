// ReviewSubmitButton.jsx
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    ochre: {
      main: "#FF9900",
      contrastText: "#242105",
    },
  },
});

export default function ReviewSubmitButton({ disabled, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        color="ochre"
        sx={{ width: "30%", height: 60, fontSize: "1.5rem", mt: 3 }}
      >
        投稿する
      </Button>
    </ThemeProvider>
  );
}
