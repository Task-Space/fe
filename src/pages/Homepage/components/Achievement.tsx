import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Achievements = [
  {
    name: "Event đã diễn ra",
    quantity: 20
  },
  {
    name: "Khóa học đã tổ chức",
    quantity: 10
  },
  {
    name: "Dự án đang hoạt động",
    quantity: 70
  },
  {
    name: "Đội nhóm đã tham gia",
    quantity: 27
  },
  {
    name: "Đơn vị đối tác",
    quantity: 7
  }
];

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
      <Card
        sx={{
          width: "85%",
          height: "80%",
          padding: "1.5rem 5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <Grid>
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
            labore quod dolorem minima aliquam voluptates iusto aliquid
            molestias, nobis voluptas assumenda qui eos animi, in deserunt quia
            perferendis eius? In!
          </Typography>
        </Grid>
        <Grid container>
          {Achievements.map((item, index) => (
            <Grid
              size={{ lg: 2.4 }}
              container
              flexDirection={"column"}
              alignItems={"center"}
              key={index}
              spacing={2}
            >
              <Grid position={"relative"}>
                <img src="/public/image/achievementitem.png" />
                <Typography
                  color="#fff"
                  fontWeight={600}
                  variant="h4"
                  position={"absolute"}
                  bottom={"5%"}
                  left={"5%"}
                >
                  {item.quantity} +
                </Typography>
              </Grid>
              <Typography
                padding={"0 1rem"}
                color="#527C88"
                fontWeight={600}
                fontSize={"1.25rem"}
                textAlign={"center"}
              >
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default Achievement;
