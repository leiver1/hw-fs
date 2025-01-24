import { Icon } from "@iconify/react/dist/iconify.js";
import {
  AppBar,
  IconButton,
  TextField,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import LightDarkBtn from "../components/LightDarkBtn";
interface DesktopAppBarProps {
  drawerWidth: 85 | 280;
  handleDrawerToggle?: () => void;
}
const DesktopAppBar: React.FC<DesktopAppBarProps> = ({
  drawerWidth,
  handleDrawerToggle,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,

        display: { xs: "none", sm: "block" },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        transition: "width 0.2s ease",
        height: 64,
      }}
    >
      <Box position="relative">
        <LightDarkBtn />
      </Box>
    </AppBar>
  );
};

export default DesktopAppBar;
