"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { Avatar, ListItemAvatar, colors } from "@mui/material";
import { useEffect } from "react";
import MobileAppBar from "../components/MobileAppBar";
import DesktopAppBar from "../components/DesktopAppbar";
import { usePathname } from "next/navigation";
export default function ResponsiveDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState<string>();
  const [drawerWidth, setDrawerWidth] = React.useState<280 | 85>(280);
  const user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleDrawerWidth = () => {
    if (drawerWidth === 280) {
      setDrawerWidth(85);
    } else {
      setDrawerWidth(280);
    }
  };

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        const snackbar = {
          variant: "default",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          message: "Loggout succesfully",
          autoHideDuration: 2000,
        };
        localStorage.setItem("snackbar", JSON.stringify(snackbar));
        router.push("/login");
      }
    } catch (error) {
      console.log("Error while logout: ", error);
    }
  };

  //   mdi:camera-plus-outline
  const protectedRoutes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "mdi:view-dashboard",
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: "mdi:calendar-month-outline",
    },
    {
      name: "Posts",
      path: "/posts",
      icon: "mdi:image-add-outline",
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: "mdi:person-group-outline",
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "mdi:google-analytics",
    },
    {
      name: "Campaign",
      path: "/campaign",
      icon: "mdi:clipboard-multiple-outline",
    },
    {
      name: "Media",
      path: "/media",
      icon: "mdi:perm-media",
    },
  ];

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        overflowX: "hidden",

        // alignItems: "center",
      }}
    >
      <Box>
        {/* <Toolbar
          sx={{
            display: "flex",
            height: 14,
            alignItems: "center",
            justifyContent: "space-between",
            "@media (min-width: 0px)": { paddingRight: 2, paddingLeft: 1 },
            py: 0,
          }}
        >
          <Typography sx={{ display: drawerWidth === 85 ? "none" : "block" }}>
            Appname
          </Typography>

          <IconButton
            onClick={handleDrawerWidth}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Icon
              icon={
                drawerWidth === 280 ? "mdi:chevron-left" : "mdi:chevron-right"
              }
            />
          </IconButton>
        </Toolbar> */}

        <List sx={{ p: 0 }}>
          <ListItem sx={{ p: 0.5 }}>
            <ListItemText
              sx={{ display: drawerWidth === 85 ? "none" : "block" }}
            >
              Appname
            </ListItemText>
            <ListItemIcon>
              <IconButton
                onClick={handleDrawerWidth}
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Icon
                  icon={
                    drawerWidth === 280
                      ? "mdi:chevron-left"
                      : "mdi:chevron-right"
                  }
                />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>

        <Divider sx={{ mb: 0.5 }} />
        <List>
          {protectedRoutes.map((item, key) => (
            <ListItem key={key} sx={{ px: 0 }}>
              <ListItemButton
                onClick={() => {
                  router.push(item.path);
                  setMobileOpen(false);
                }}
                selected={currentPath === item.path}
              >
                <ListItemIcon
                  sx={{
                    color: currentPath === item.path ? "white" : "inherit",
                  }}
                >
                  <Icon icon={item.icon} fontSize={22} />
                </ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Divider></Divider>
        <List>
          {user && (
            <ListItem sx={{ px: 0 }}>
              <Box sx={{ ml: 1 }}>
                <ListItemAvatar>
                  <Avatar src="https://avatars.githubusercontent.com/u/9652" />
                </ListItemAvatar>
              </Box>
              <Box sx={{ ml: 1 }}>
                <ListItemText
                  primary={user.firstname + " " + user.lastname}
                  secondary={user.email}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <ListItemIcon>
                  <IconButton>
                    <Icon icon="mdi:dots-vertical" />
                  </IconButton>
                </ListItemIcon>
              </Box>
            </ListItem>
          )}
          <ListItem sx={{ px: 0 }}>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Icon icon="mdi:logout" fontSize={22} />
              </ListItemIcon>
              <ListItemText>Logut</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MobileAppBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <DesktopAppBar drawerWidth={drawerWidth} />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer: */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer  */}
        <Drawer
          variant="permanent"
          elevation={0}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              border: "none",
              width: drawerWidth,
              transition: "width 0.2s ease",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        // component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          transition: "width 0.9s ease",
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
