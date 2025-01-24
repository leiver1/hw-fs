"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { colors } from "@mui/material";

let lightTheme = createTheme({
  palette: {
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[300],
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      // primary: "#00000", // Haupttext in weiß
      secondary: "#6C757D", // Sekundärtext in Grau
    },
  },

  components: {
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: colors.grey[500],
        },
        h4: {
          color: colors.indigo[500],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          "&.Mui-selected": {
            backgroundColor: colors.indigo[500],
            color: "white",
            "&:hover": {
              backgroundColor: colors.indigo[800],
              color: "white",
            },
          },
          "&:hover": {
            backgroundColor: colors.indigo[50],
          },
        },
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
