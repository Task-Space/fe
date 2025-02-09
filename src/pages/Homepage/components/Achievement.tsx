import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Achievement = () => {
  return (
    <Box
      sx={{
        padding: "1rem 0",
        height: "750px",
        backgroundImage: "url(/public/image/achievementbg.png)",
        backgroundSize: "cover"
      }}
      mt={5}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card sx={{ width: "85%", height: "80%", padding: "1.5rem 5%" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          color="#527C88"
          textAlign={"center"}
        >
          Các thành tựu đạt được
        </Typography>
        <Typography mt={2} variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          labore quod dolorem minima aliquam voluptates iusto aliquid molestias,
          nobis voluptas assumenda qui eos animi, in deserunt quia perferendis
          eius? In!
        </Typography>
        <Grid></Grid>
      </Card>
    </Box>
  );
};

export default Achievement;
