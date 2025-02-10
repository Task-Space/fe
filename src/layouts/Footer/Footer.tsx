import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box sx={{ padding: "4rem 5% 0 5%", height: "280px" }}>
      <Grid container spacing={10}>
        <Grid size={{ lg: 5 }}>
          <div
            style={{
              width: "50%",
              marginBottom: "1rem"
            }}
          >
            <img
              style={{
                width: "100%"
              }}
              src="/public/logo.svg"
            />
          </div>
          <Typography variant="body2" color="#000">
            Task space refers to the efforts that medical professionals make to
            restore our physical and mental well-being. The term also includes
            the provision of services to maintain emotional well-being. We call
            people and organizations that provide these services 'health-care
            providers.
          </Typography>
        </Grid>
        <Grid container size={{ lg: 7 }} spacing={2}>
          <Grid
            size={{ lg: 3 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography variant="h5" color="#527C88" mb={1}>
              Overview
            </Typography>
            <Typography variant="body1">App</Typography>
            <Typography variant="body1">Devices</Typography>
            <Typography variant="body1">Progress</Typography>
          </Grid>
          <Grid
            size={{ lg: 3 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography variant="h5" color="#527C88" mb={1}>
              Company
            </Typography>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About us</Typography>
            <Typography variant="body1">Services</Typography>
          </Grid>
          <Grid
            size={{ lg: 3 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography variant="h5" color="#527C88" mb={1}>
              Explore
            </Typography>
            <Typography variant="body1">Blogs & Feeds</Typography>
            <Typography variant="body1">Privacy Policies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Grid>
          <Grid
            size={{ lg: 3 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography variant="h5" color="#527C88" mb={1}>
              Social Media
            </Typography>
            <Typography variant="body1">Blogs & Feeds</Typography>
            <Typography variant="body1">Privacy Policies</Typography>
            <Typography variant="body1">Cookies</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={3}>
        <Divider />
        <Typography variant="body1" mt={1} textAlign={"center"}>
          Copyright @ MSFT Pro 2025
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
