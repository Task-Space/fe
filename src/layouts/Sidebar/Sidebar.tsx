import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useProjectContext } from "../../contexts/ProjectContext";

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : theme.spacing(7),
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#ffffff",
    overflowX: "hidden",
    boxShadow: open ? theme.shadows[8] : "none"
  }
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { project } = useProjectContext();
  const theme = useTheme();
  const nav = useNavigate();
  const handleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: "Overview",
      icon: <ContentPasteSearchIcon />,
      href: `/project/${project?.id}`
    },
    {
      text: "TaskBoard",
      icon: <AssignmentIcon />,
      href: `/project/${project?.id}/task-management`
    },
    {
      text: "Calendar",
      icon: <CalendarMonthIcon />,
      href: `/project/${project?.id}/calendar`
    }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <StyledDrawer
        variant="permanent"
        open={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DrawerHeader>
          <IconButton onClick={() => nav("/")}>
            {open ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "250px",
                  height: "auto%"
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  src="/public/logo.svg"
                />
              </div>
            ) : (
              <HomeIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.04)"
                }
              }}
              onClick={() => nav(item.href)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000"
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,
                  transition: theme.transitions.create("opacity", {
                    duration: theme.transitions.duration.enteringScreen
                  })
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
};

export default Sidebar;
