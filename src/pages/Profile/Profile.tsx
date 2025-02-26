import {
  Box,
  Breadcrumbs,
  Card,
  Link,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { CustomTabPanel } from "../../components";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Settings from "./components/Settings";
import Overview from "./components/Overview";
import Teams from "./components/Teams";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        maxWidth: "1400px",
        margin: "0 auto",
        mt: 3,
        padding: 3
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <Grid container spacing={1}>
                <DensityMediumIcon />
                <Typography fontWeight={"bold"}>Overview</Typography>
              </Grid>
            }
          />
          <Tab
            label={
              <Grid container spacing={1}>
                <CalendarMonthIcon />
                <Typography fontWeight={"bold"}>Teams</Typography>
              </Grid>
            }
          />
          <Tab
            label={
              <Grid container spacing={2}>
                <CalendarMonthIcon />
                <Typography fontWeight={"bold"}>Settings</Typography>
              </Grid>
            }
          />
        </Tabs>
      </Box>
      <CustomTabPanel padding={3} value={value} index={0}>
        <Overview />
      </CustomTabPanel>
      <CustomTabPanel padding={3} value={value} index={1}>
        <Teams />
      </CustomTabPanel>
      <CustomTabPanel padding={3} value={value} index={2}>
        <Settings />
      </CustomTabPanel>
    </Card>
  );
};

export default Profile;
