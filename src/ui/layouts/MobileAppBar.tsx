import { Icon } from "@iconify/react/dist/iconify.js";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
interface MobileAppBarProps {
  drawerWidth: 85 | 280;
  handleDrawerToggle: () => void;
}
const MobileAppBar: React.FC<MobileAppBarProps> = ({
  drawerWidth,
  handleDrawerToggle,
}) => {
  return (
    <AppBar
      color={"primary"}
      position="fixed"
      sx={{
        boxShadow: 0,
        display: { xs: "block", sm: "none" },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        transition: "width 0.2s ease",
        height: 64,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Icon icon="mdi:hamburger-menu" />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MobileAppBar;
