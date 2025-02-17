import Grid from "@mui/material/Grid2";
import CalendarLeftBar from "./CalendarLeftBar";
import CalendarMain from "./CalendarMain";

const Calendar = () => {
  return (
    <Grid container>
      <Grid
        size={{ lg: 2.5 }}
        sx={{
          backgroundColor: "#F8FAFC"
        }}
      >
        <CalendarLeftBar />
      </Grid>
      <Grid size={{ lg: 9.5 }}>
        <CalendarMain />
      </Grid>
    </Grid>
  );
};

export default Calendar;
