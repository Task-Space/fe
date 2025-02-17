import { Box, Breadcrumbs, Link, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { CustomTabPanel } from "../../components";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Settings from "./components/Settings";
import Overview from "./components/Overview";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
      Home
    </Link>,

    <Typography key="4" sx={{ color: "text.primary" }}>
      My Profile
    </Typography>
  ];

  return (
    <>
      <Sidebar />
      <Grid marginLeft={6}>
        <Grid
          container
          bgcolor={"#F8FAFC"}
          display={"flex"}
          padding={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Grid container spacing={3}></Grid>
        </Grid>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          <Settings />
        </CustomTabPanel>
      </Grid>
    </>
  );
};

export default Profile;
