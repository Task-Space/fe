import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectDetail from "./ProjectDetail";
import Supporter from "./Supporter";
import Members from "./Members";
const Project = () => {
  return (
    <Box>
      <Grid padding={"1.5rem 3rem"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Project PlanetX
        </Typography>
      </Grid>
      <Divider />
      <Grid padding={"1.5rem 3rem"} spacing={3} container>
        <Grid size={{ lg: 9 }}>
          <ProjectDetail />
        </Grid>
        <Grid size={{ lg: 3 }} spacing={3} container>
          <Supporter />
          <Members />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
