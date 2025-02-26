import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectDetail from "./components/ProjectDetail";
import Supporter from "./components/Supporter";
import Members from "./components/Members";
import { useProjectContext } from "../../contexts/ProjectContext";

const ProjectOverview = () => {
  const { project } = useProjectContext();

  return (
    <Box mt={3}>
      <Grid spacing={3} container>
        <Grid size={{ lg: 8.5 }}>
          <ProjectDetail />
        </Grid>
        <Grid size={{ lg: 3.5 }} spacing={3} container>
          {/* <Supporter /> */}
          <Members />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectOverview;
