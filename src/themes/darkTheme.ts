"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors, withTheme } from "@mui/material";

let darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.deepPurple[800],
    },
    secondary: {
      main: colors.indigo[300],
    },
    background: {
      default: "#0A0A0A",
      paper: "#1D1D1D",
    },
    text: {
      primary: "#FFFFFF", // Haupttext in weiß
      secondary: colors.grey[500], // Sekundärtext in Grau
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        color: "primary.light",
      },
    },

    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: colors.grey[100],
        },
        subtitle2: {
          color: colors.green[200], // Für andere Subtitle-Typen
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          padding: "12px",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",

        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&.Mui-disabled": {
            backgroundColor: colors.grey[700], // Angepasste Hintergrundfarbe für deaktivierte Buttons
            color: colors.grey[400], // Angepasste Textfarbe für deaktivierte Buttons
            opacity: 0.7, // Optional: Transparenz für einen schwächeren Look
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1D1D1D",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&.Mui-selected": {
            backgroundColor: colors.deepPurple[800],
            "&:hover": {
              backgroundColor: "#301B70",
            },
          },
          "&:hover": {
            backgroundColor: colors.grey[900],
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.12)", // Default border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Hover border
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Custom focus color
          },
        },
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
