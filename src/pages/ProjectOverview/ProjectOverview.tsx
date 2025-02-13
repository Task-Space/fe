import {
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Button,
  Link,
  Typography
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid2";
import Members from "./components/Members";
import Project from "./components/Project";

const ProjectOverview = () => {
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
    <>
      <Grid
        container
        bgcolor={"#F8FAFC"}
        display={"flex"}
        padding={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container spacing={3}>
          <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Button
            variant="outlined"
            sx={{
              color: "#475569",
              borderColor: "#475569",
              borderRadius: "1.5rem"
            }}
          >
            Invite +
          </Button>
        </Grid>
      </Grid>
      <Project />
    </>
  );
};

export default ProjectOverview;
