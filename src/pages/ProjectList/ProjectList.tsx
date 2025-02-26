import { Box, Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import projectApi from "../../apis/project/project.api";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const { data: projectsData } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getProject()
  });

  const nav = useNavigate();

  return (
    <Box
      width={"1400px"}
      border={"1px solid black"}
      padding={"20px"}
      margin={"0 auto"}
      mt={2}
    >
      <Grid container>
        <Grid size={{ lg: 3 }}>
          <Typography>Filter</Typography>
        </Grid>
        <Grid size={{ lg: 9 }}>
          {projectsData?.data.data.map((project) => (
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectList;
