import { Box, Button, Card, Chip, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ActivityItem from "./ActivityItem";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ActivityList = [
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  },
  {
    title: "KHÓA HỌC ĐẦU TƯ TỪ A - Z",
    description: "Khóa học phổ biến",
    image: "/public/image/activity1.png"
  }
];

const Activities = () => {
  return (
    <Box sx={{ padding: "1rem 5%" }}>
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem" }}
        fontWeight={600}
        color="#35B66B"
      >
        Các hoạt động
      </Typography>
      <Grid container mt={2} height={"800px"}>
        <Grid size={{ lg: 5 }} overflow={"auto"} height={"100%"}>
          {ActivityList.map((item, index) => (
            <ActivityItem
              key={index}
              category={item.description}
              name={item.title}
              src={item.image}
            />
          ))}
        </Grid>
        <Grid size={{ lg: 7 }} justifyContent={"center"} container>
          <Card sx={{ width: "90%", borderRadius: "1rem" }}>
            <img
              style={{
                width: "100%",
                height: "400px"
              }}
              src="/public/image/activitidetails.png"
            />
            <Grid
              sx={{ padding: "1rem", position: "relative", height: "400px" }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Chip
                  label="Sáng tạo"
                  sx={{
                    borderRadius: "0.5rem",
                    backgroundColor: "#ECF0FF",
                    color: "#0066FF"
                  }}
                />
                <Grid container alignItems="center" gap={1}>
                  <Rating name="simple-controlled" value={4} />
                  <Typography variant="body1" color="textDisabled">
                    4.0 (23,456)
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" fontWeight={600} mt={2}>
                JAVASCRIPT TỪ LÝ THUYẾT ĐẾN THỰC HÀNH
              </Typography>
              <Typography variant="body1" mt={2} color="textDisabled">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis, dignissimos. Hic sed voluptatibus laborum modi odit
                blanditiis excepturi impedit explicabo animi vel itaque ex
                deserunt, corrupti dignissimos sint perferendis porro.
              </Typography>
              <Grid container mt={2}>
                <PeopleIcon />
                <Typography variant="body1" ml={1}>
                  23,456 sinh viên đã tham gia
                </Typography>
              </Grid>
              <Grid container mt={2}>
                <AccessTimeIcon />
                <Typography variant="body1" ml={1}>
                  09 tháng 1 năm 2022
                </Typography>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: "4%",
                  width: "96%",
                  height: "3rem",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  backgroundColor: "#0D9488"
                }}
                size="large"
              >
                ĐĂNG KÝ NGAY
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Activities;
