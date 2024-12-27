"use client";

import { handleTheme } from "@/features/settingSlice";
import { RootState } from "@/store/store";
import { lightTheme, darkTheme } from "@/themes";
import { CssBaseline, ThemeProvider as Provider } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.setting.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      dispatch(handleTheme(localStorage.getItem("themeMode")));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(handleTheme("dark"));
    }
  }, []);
  return (
    <>
      <CssBaseline />
      <Provider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </Provider>
      {/* <Provider theme={darkTheme}>{children}</Provider> */}
    </>
  );
};

export default ThemeProvider;
