import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Grid from "@mui/material/Grid2";
import { CustomTabPanel } from "../../components";
import { useState } from "react";
import TaskBoard from "./components/TaskBoard";
import Calendar from "./components/Calendar";

const TaskManagement = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            Project PlanetX
          </Typography>
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            placeholder="Search ..."
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }
            }}
          />
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
                  <Typography fontWeight={"bold"}>Board</Typography>
                </Grid>
              }
            />
            <Tab
              label={
                <Grid container spacing={1}>
                  <CalendarMonthIcon />
                  <Typography fontWeight={"bold"}>Calendar</Typography>
                </Grid>
              }
            />
          </Tabs>
        </Box>
        <CustomTabPanel padding={3} value={value} index={0}>
          <TaskBoard />
        </CustomTabPanel>
        <CustomTabPanel padding={0} value={value} index={1}>
          <Calendar />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default TaskManagement;
