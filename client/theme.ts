import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb", // matches --brand
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0f172a", // slate-900 like for strong accents
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc", // slate-50
      paper: "#ffffff",
    },
    divider: "#e5e7eb",
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    success: { main: "#10b981" },
    warning: { main: "#f59e0b" },
    info: { main: "#3b82f6" },
    error: { main: "#ef4444" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: { fontSize: "1.25rem", fontWeight: 600 },
    h2: { fontSize: "1rem", fontWeight: 600 },
    body1: { fontSize: "0.95rem" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 1px 2px rgba(16,24,40,.05), 0 1px 3px rgba(16,24,40,.06)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none", borderRadius: 10 } },
    },
  },
});

export default theme;
