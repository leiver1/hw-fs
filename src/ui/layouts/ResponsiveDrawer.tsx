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

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { Avatar, ListItemAvatar } from "@mui/material";
import { useEffect } from "react";

// const drawerWidth = 85;
// // const drawerWidth = 280;

export default function ResponsiveDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [drawerWidth, setDrawerWidth] = React.useState<280 | 85>(280);
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));
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
    console.log(user);
  }, [user]);

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
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ display: drawerWidth === 85 ? "none" : "block" }}>
            Appname
          </Typography>

          <IconButton
            onClick={handleDrawerWidth}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Icon
              icon={
                drawerWidth === 280 ? "mdi:chevron-left" : "mdi:chevron-right"
              }
            />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {protectedRoutes.map((item, key) => (
            <ListItem key={key}>
              <ListItemButton
                onClick={() => {
                  router.push(item.path);
                  setMobileOpen(false);
                }}
                sx={{ borderRadius: 4 }}
              >
                <ListItemIcon>
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
            <ListItem>
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
          <ListItem>
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
      <AppBar
        color={"primary"}
        position="fixed"
        sx={{
          boxShadow: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          transition: "width 0.2s ease",
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
            keepMounted: true, // Better open performance on mobile.
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
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
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
        component="main"
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
