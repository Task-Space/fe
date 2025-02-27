import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useProjectContext } from "../../../contexts/ProjectContext";

const Members = () => {
  const { project } = useProjectContext();

  return (
    <Box
      bgcolor={"#F8FAFC"}
      border={"1px solid #E2E8F0"}
      padding={2}
      borderRadius={"2rem"}
    >
      <Grid>
        <Typography variant="h6" fontWeight={"bold"}>
          Members:
        </Typography>
      </Grid>
      <Box
        mt={2}
        bgcolor={"#FFF"}
        border={"1px solid #E2E8F0"}
        padding={2}
        borderRadius={"1rem"}
      >
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Official:
        </Typography>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          mt={1}
          spacing={2}
        >
          {project?.team.teamMembers.map((member) => (
            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              spacing={1.5}
              key={member.id}
            >
              <Avatar
                sx={{
                  width: 35,
                  height: 35
                }}
                alt={member.name}
                src="/static/images/avatar/1.jpg"
              />
              <Typography variant="body1" color="textSecondary">
                {member.name}
              </Typography>
            </Grid>
          ))}
          {/* <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1.5}
            size={{ lg: 12 }}
          >
            <Typography
              variant="body2"
              color="textDisabled"
              sx={{
                cursor: "pointer",
                textDecoration: "underline"
              }}
            >
              +2 More
            </Typography>
          </Grid> */}
        </Grid>
      </Box>
      <Box
        mt={2}
        bgcolor={"#FFF"}
        border={"1px solid #E2E8F0"}
        padding={2}
        borderRadius={"1rem"}
      >
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Apply Queue:
        </Typography>
        <Grid container mt={1} spacing={2}>
          <Grid container display={"flex"} alignItems={"center"} spacing={1.5}>
            <Avatar
              sx={{
                width: 35,
                height: 35
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Typography variant="body1" color="textSecondary">
              Đào Thị Út Trinh (TrinhDTU)
            </Typography>
          </Grid>
          <Grid container display={"flex"} alignItems={"center"} spacing={1.5}>
            <Avatar
              sx={{
                width: 35,
                height: 35
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Typography variant="body1" color="textSecondary">
              Đào Thị Út Trinh (TrinhDTU)
            </Typography>
          </Grid>
          <Grid container display={"flex"} alignItems={"center"} spacing={1.5}>
            <Avatar
              sx={{
                width: 35,
                height: 35
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Typography variant="body1" color="textSecondary">
              Đào Thị Út Trinh (TrinhDTU)
            </Typography>
          </Grid>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1.5}
            size={{ lg: 12 }}
          >
            <Typography
              variant="body2"
              color="textDisabled"
              sx={{
                cursor: "pointer",
                textDecoration: "underline"
              }}
            >
              +2 More
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Members;
