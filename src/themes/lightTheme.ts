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
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: colors.grey[500],
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
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
