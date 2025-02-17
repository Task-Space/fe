import { Checkbox, Divider, FormControlLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DateCalendar } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CalendarLeftBar = () => {
  return (
    <Grid>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        padding={"1.5rem 4rem"}
        justifyContent={"space-between"}
      >
        <Grid container display={"flex"} spacing={1} alignItems={"center"}>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              backgroundColor: "#EEF2FF",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%"
            }}
          >
            <CalendarMonthIcon />
          </Grid>
          <Grid>
            <Typography fontWeight={600}>Lịch của tôi</Typography>
            <Typography variant="body2">Cá nhân, nhóm</Typography>
          </Grid>
        </Grid>
        <ExpandMoreIcon />
      </Grid>
      <Divider />
      <Grid padding={"0"}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </Grid>
      <Divider />
      <Grid padding={"1.5rem 4rem"}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontWeight={600}>Thời gian biểu của tôi</Typography>
          <Grid container>
            <AddIcon />
            <ExpandMoreIcon />
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          spacing={1}
          mt={2}
          flexDirection={"column"}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            sx={{
              height: "1.5rem"
            }}
            label="Label"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            sx={{
              height: "1.5rem"
            }}
            label="Label"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            sx={{
              height: "1.5rem"
            }}
            label="Label"
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid padding={"1.5rem 4rem"}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontWeight={600}>Phân loại</Typography>
          <Grid container>
            <ExpandMoreIcon />
          </Grid>
        </Grid>
        <Grid
          container
          mt={1}
          spacing={1}
          display={"flex"}
          flexDirection={"column"}
        >
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid container display={"flex"} alignItems={"center"} spacing={1}>
              <CircleIcon
                sx={{
                  color: "green",
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography>Work</Typography>
            </Grid>
            <Typography>25</Typography>
          </Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid container display={"flex"} alignItems={"center"} spacing={1}>
              <CircleIcon
                sx={{
                  color: "green",
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography>Work</Typography>
            </Grid>
            <Typography>25</Typography>
          </Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid container display={"flex"} alignItems={"center"} spacing={1}>
              <CircleIcon
                sx={{
                  color: "green",
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography>Work</Typography>
            </Grid>
            <Typography>25</Typography>
          </Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid container display={"flex"} alignItems={"center"} spacing={1}>
              <CircleIcon
                sx={{
                  color: "green",
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography>Work</Typography>
            </Grid>
            <Typography>25</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CalendarLeftBar;
