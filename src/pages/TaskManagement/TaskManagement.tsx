import { Box } from "@mui/material";
import TaskBoard from "./components/TaskBoard";

const TaskManagement = () => {
  return (
    <>
      <Box>
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
