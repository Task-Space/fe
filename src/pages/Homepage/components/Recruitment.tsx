import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Recruitment = () => {
  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem" }}
        fontWeight={600}
        color="#35B66B"
      >
        Tin tuyển dụng
      </Typography>
      <Grid mt={5} container spacing={5}>
        <Card
          sx={{
            width: "400px",
            borderRadius: "0.5rem",
            border: "1px solid black"
          }}
        >
          <Grid width={"100%"} height={"200px"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
              src="/public/image/fptlogo.png"
            />
          </Grid>
          <Grid
            padding={2}
            bgcolor={"#22C55E"}
            width={"100%"}
            height={"150px"}
            container
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Grid container spacing={2}>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  Java
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  .NET
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  JavaScript
                </Typography>
              </div>
            </Grid>
            <Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h5" fontWeight={600} color="#fff">
                  FPT Software
                </Typography>
                <Typography fontWeight={600} variant="body1" color="#fff">
                  4 jobs
                </Typography>
              </Grid>
              <Typography variant="body1" color="#fff" fontStyle={"italic"}>
                TP HCM - Đà Nẵng
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          sx={{
            width: "400px",
            borderRadius: "0.5rem",
            border: "1px solid black"
          }}
        >
          <Grid width={"100%"} height={"200px"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
              src="/public/image/fptlogo.png"
            />
          </Grid>
          <Grid
            padding={2}
            bgcolor={"#22C55E"}
            width={"100%"}
            height={"150px"}
            container
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Grid container spacing={2}>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  Java
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  .NET
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  JavaScript
                </Typography>
              </div>
            </Grid>
            <Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h5" fontWeight={600} color="#fff">
                  FPT Software
                </Typography>
                <Typography fontWeight={600} variant="body1" color="#fff">
                  4 jobs
                </Typography>
              </Grid>
              <Typography variant="body1" color="#fff" fontStyle={"italic"}>
                TP HCM - Đà Nẵng
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          sx={{
            width: "400px",
            borderRadius: "0.5rem",
            border: "1px solid black"
          }}
        >
          <Grid width={"100%"} height={"200px"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
              src="/public/image/fptlogo.png"
            />
          </Grid>
          <Grid
            padding={2}
            bgcolor={"#22C55E"}
            width={"100%"}
            height={"150px"}
            container
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Grid container spacing={2}>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  Java
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  .NET
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "3px 10px",
                  minWidth: "60px",
                  borderRadius: "4px"
                }}
              >
                <Typography color="#fff" textAlign={"center"} variant="body1">
                  JavaScript
                </Typography>
              </div>
            </Grid>
            <Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h5" fontWeight={600} color="#fff">
                  FPT Software
                </Typography>
                <Typography fontWeight={600} variant="body1" color="#fff">
                  4 jobs
                </Typography>
              </Grid>
              <Typography variant="body1" color="#fff" fontStyle={"italic"}>
                TP HCM - Đà Nẵng
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
};

export default Recruitment;
