import { Box, Button } from "@mui/material";

const Carousel = () => {
  return (
    <Box sx={{ height: "600px", position: "relative" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
        src="/public/image/home-intro-1.png"
      />
      <Button
        sx={{
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          fontWeight: "bold",
          fontSize: "1.2rem",
          backgroundColor: "#fff",
          color: "black",
          position: "absolute",
          bottom: "21%",
          left: "5%",
          width: "17rem"
        }}
        variant="contained"
        size="large"
      >
        Tham gia một dự án
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          fontWeight: "bold",
          fontSize: "1.2rem",
          backgroundColor: "#35B66B",
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "17rem"
        }}
      >
        Tạo mới một dự án
      </Button>
    </Box>
  );
};

export default Carousel;
