import { useQuery } from "@tanstack/react-query";
import CreateNewProject from "./components/CreateNewProject";
import projectApi from "../../apis/project/project.api";
import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";

const MyProjectsPage = () => {
  const nav = useNavigate();

  const { data: myProjectData } = useQuery({
    queryKey: ["myProjects"],
    queryFn: () => projectApi.getProject()
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={"1200px"}
      margin="3rem auto"
    >
      {myProjectData?.data.data.map((project) => (
        <Card key={project.id}>
          <Grid height={"300px"} container padding={3} spacing={2}>
            <Grid height={"100%"} size={{ lg: 4 }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
                src={project.url}
              />
            </Grid>
            <Grid size={{ lg: 8 }}>
              <Typography variant="h6" fontWeight={"bold"}>
                {project.name}
              </Typography>
              <Typography color="textSecondary" fontStyle={"italic"}>
                {project.description}
              </Typography>
              <Typography>
                Start Date: {dayjs(project.startDate).format("DD-MM-YYYY")}
              </Typography>
              <Typography>
                End Date: {dayjs(project.endDate).format("DD-MM-YYYY")}
              </Typography>
              <Typography>
                Team Name: {project.team.teamDetails.name}
              </Typography>
              <Typography>
                Team Description: {project.team.teamDetails.description}
              </Typography>
              <Typography>
                Team Email: {project.team.teamDetails.email}
              </Typography>
              <Typography>
                Team Contact: {project.team.teamDetails.contact}
              </Typography>
              <Typography>
                Team Size: {project.team.teamDetails.size}
              </Typography>
              <Button
                onClick={() => nav(`/project/${project.id}`)}
                variant="contained"
                color="success"
              >
                View Detail
              </Button>
            </Grid>
          </Grid>
        </Card>
      ))}
      <Grid mt={3}>
        <CreateNewProject />
      </Grid>
    </Box>
  );
};

export default MyProjectsPage;
