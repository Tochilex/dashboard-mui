"use client";

import {
  ChevronLeft,
  ChevronRight,
  Equalizer,
  ExitToApp,
  Home,
  Person2,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  CSSObject,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//import MuiDrawer from "@mui/material/Drawer";
import Link from "next/link";
import React, { useState } from "react";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["/", "nalytics", "profile", "payments", "settings", ""];
const menuListTranslations = [
  "Home",
  "Analytics",
  "Profile",
  "Payments",
  "Settings",
  "Sign Out",
];

const menuListIcons = [
  <Home key="" />,
  <Equalizer key="" />,
  <Person2 key="" />,
  <Equalizer key="" />,
  <Settings key="" />,
  <ExitToApp key="" />,
];

const Sidemenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,

        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
        // variants: [
        //   {
        //     props: ({ open }) => open,
        //     style: {
        //       ...openedMixin(theme),
        //       "& .MuiDrawer-paper": openedMixin(theme),
        //     },
        //   },
        //   {
        //     props: ({ open }) => !open,
        //     style: {
        //       ...closedMixin(theme),
        //       "& .MuiDrawer-paper": closedMixin(theme),
        //     },
        //   },
        // ],
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          py: "1rem",
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>

      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <Link href={`/Dashboard/${menuRouteList[index]}`}>
              <ListItemButton
                onClick={() => setOpen(open)}
                title={text}
                aria-label={text}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidemenu;
