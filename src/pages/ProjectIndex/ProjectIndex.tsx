import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  AvatarGroup,
  Divider,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import projectApi from "../../apis/project/project.api";
import { ProjectContext } from "../../contexts/ProjectContext";
import SearchIcon from "@mui/icons-material/Search";
import InviteMembers from "./components/InviteMembers";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";

const ProjectIndex = () => {
  const projectId = useLocation().pathname.split("/")[2];
  const { profile } = useAppContext();
  const [isMember, setIsMember] = useState(false);
  const { data: projectData } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => projectApi.getProjectById(projectId)
  });

  useEffect(() => {
    const member = projectData?.data.data.team.teamMembers.find(
      (item) => item.id === profile?.id
    );
    if (member) {
      setIsMember(true);
    } else {
      setIsMember(false);
    }
  }, []);

  // const breadcrumbs = [
  //   <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
  //     Home
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={() => {}}
  //   >
  //     My Projects
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="3"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={() => {}}
  //   >
  //     Project PlanetX
  //   </Link>,
  //   <Typography key="4" sx={{ color: "text.primary" }}>
  //     Breadcrumb
  //   </Typography>
  // ];

  return (
    <ProjectContext.Provider
      value={{ project: projectData?.data.data, isMember: isMember }}
    >
      {isMember && <Sidebar />}
      <Grid marginLeft={isMember ? 6 : 0}>
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
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={2}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              {projectData?.data.data.name}
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
                {projectData?.data.data?.team.teamMembers.map((member) => (
                  <Avatar key={member.id} alt={member.name} />
                ))}
              </AvatarGroup>
              <InviteMembers />
            </Grid>
          </Grid>

          <Divider />
          <Outlet />
        </div>
      </Grid>
    </ProjectContext.Provider>
  );
};

export default ProjectIndex;
