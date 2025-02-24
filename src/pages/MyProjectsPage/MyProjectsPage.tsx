import { useQuery } from "@tanstack/react-query";
import CreateNewProject from "./components/CreateNewProject";
import projectApi from "../../apis/project/project.api";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyProjectsPage = () => {
  const nav = useNavigate();

  const { data: myProjectData } = useQuery({
    queryKey: ["myProjects"],
    queryFn: () => projectApi.getProject()
  });

  return (
    <div>
      {myProjectData?.data.data.map((project) => (
        <Box>
          <Typography>{project.name}</Typography>
          <Typography>{project.description}</Typography>
          <Button onClick={() => nav(`/project/${project.id}`)}>View</Button>
        </Box>
      ))}
      <CreateNewProject />
    </div>
  );
};

export default MyProjectsPage;
