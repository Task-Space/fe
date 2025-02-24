import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
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
import InviteMembers from "../ProjectIndex/components/InviteMembers";
import { useProjectContext } from "../../contexts/ProjectContext";

const TaskManagement = () => {
  const [value, setValue] = useState(0);
  const { project } = useProjectContext();
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
          marginBottom={2}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Project PlanetX
          </Typography>
          <Grid container spacing={3}>
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
            <AvatarGroup max={6}>
              {project?.team.teamMembers.map((member) => (
                <Avatar alt={member.name} />
              ))}
            </AvatarGroup>
            <InviteMembers />
          </Grid>
        </Grid>

        <Divider />

        <Box marginTop={3}>
          <TaskBoard />
        </Box>

        {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
        </CustomTabPanel> */}
      </Box>
    </>
  );
};

export default TaskManagement;
