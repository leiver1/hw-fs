"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let darkTheme = createTheme({});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
