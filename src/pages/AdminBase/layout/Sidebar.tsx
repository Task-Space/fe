import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Grid from "@mui/material/Grid2";

const SidebarWidth = 265;

interface SidebarProps {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
}

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlinedIcon,
    href: "/admin"
  },
  {
    title: "Accounts",
    icon: ManageAccountsIcon,
    href: "/admin/accounts"
  }
];

const Sidebar = ({ ...props }: SidebarProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index: number) => {
    // if (open === index) {
    //   setOpen((prevopen) => !prevopen);
    // } else {
    //   setOpen(index);
    // }
  };

  const SidebarContent = (
    <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "Center" }}>
          <Grid>
            <img
              style={{
                width: "100%",
                height: "auto"
              }}
              src="/logo.svg"
            />
          </Grid>
        </Box>
      </Link>

      <Box>
        <List
          sx={{
            mt: 4
          }}
        >
          {Menuitems.map((item, index) => {
            return (
              <List component="li" disablePadding key={item.title}>
                <ListItemButton
                  onClick={() => handleClick(index)}
                  component={NavLink}
                  to={item.href}
                  selected={pathDirect === item.href}
                  sx={{
                    mb: 1,
                    borderRadius: "9px",
                    ...(pathDirect === item.href && {
                      backgroundColor: "#4f46e5!important",
                      color: "white"
                    })
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ...(pathDirect === item.href && {
                        color: "white"
                      })
                    }}
                  >
                    <item.icon width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </List>
            );
          })}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth
          }
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth
        }
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
