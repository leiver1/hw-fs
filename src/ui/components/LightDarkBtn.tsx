"use client";

import { handleTheme } from "@/features/settingSlice";
import { RootState } from "@/store/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@mui/material";

import { stat } from "fs";
import { useDispatch, useSelector } from "react-redux";

interface LightDarkBtnProps {}
const LightDarkBtn: React.FC<LightDarkBtnProps> = () => {
  const themeMode = useSelector((state: RootState) => state.setting.theme.mode);
  console.log("the theme is...., ", themeMode);
  const dispatch = useDispatch();

  const handleThemeFnc = () => {
    if (themeMode === "light") {
      dispatch(handleTheme("dark"));
    } else {
      dispatch(handleTheme("light"));
    }
  };

  return (
    <IconButton sx={{ float: "right" }} onClick={handleThemeFnc}>
      <Icon
        icon={themeMode === "dark" ? "mdi:weather-sunny" : "mdi:moon-and-stars"}
      />
    </IconButton>
  );
};

export default LightDarkBtn;
