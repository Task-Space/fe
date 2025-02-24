import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import projectApi from "../../apis/project/project.api";
import { ProjectContext } from "../../contexts/ProjectContext";

const ProjectIndex = () => {
  const projectId = useLocation().pathname.split("/")[2];

  const { data: projectData } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => projectApi.getProjectById(projectId)
  });

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={() => {}}
    >
      My Projects
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={() => {}}
    >
      Project PlanetX
    </Link>,
    <Typography key="4" sx={{ color: "text.primary" }}>
      Breadcrumb
    </Typography>
  ];

  return (
    <ProjectContext.Provider value={{ project: projectData?.data.data }}>
      <Sidebar />
      <Grid marginLeft={6}>
        {/* <Grid
          container
          bgcolor={"#F8FAFC"}
          display={"flex"}
          padding={"0.5rem 3rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid> */}
        <div
          style={{
            padding: "1.5rem 3rem 0 3rem"
          }}
        >
          <Outlet />
        </div>
      </Grid>
    </ProjectContext.Provider>
  );
};

export default ProjectIndex;
