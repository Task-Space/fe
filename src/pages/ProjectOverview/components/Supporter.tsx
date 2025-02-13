import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Supporter = () => {
  return (
    <Box
      bgcolor={"#F8FAFC"}
      border={"1px solid #E2E8F0"}
      padding={2}
      borderRadius={"2rem"}
    >
      <Grid>
        <Typography variant="h6" fontWeight={"bold"}>
          Supporter
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
          Lecturer:
        </Typography>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          mt={1}
          spacing={1.5}
        >
          <Avatar
            sx={{
              width: 35,
              height: 35
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="body1" color="textSecondary">
            Nguyễn Xuân Son (SonNX12)
          </Typography>
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
          Mentors:
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
              Nguyễn Thế Hoàng (HoangNT10)
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
              Nguyễn Ngọc Lâm (HoangNT10)
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
              Nguyễn Thế Hoàng (HoangNT10)
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

export default Supporter;
