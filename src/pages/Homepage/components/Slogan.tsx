import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Slogan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(220, 255, 222, 0.7)",
        width: "100%",
        height: "400px",
        mt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        alignItems={"center"}
      >
        <img src="/public/logo.svg" />
        <Typography color="textDisabled">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aliquam natus unde rem delectus quas neque modi{" "}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Slogan;
