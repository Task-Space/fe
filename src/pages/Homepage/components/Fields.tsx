import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const FieldList = [
  {
    title: "Healthcare",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Sharing Economy",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "E-Commerce",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Green Tech",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Proptech",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Logistics and Supply Chain",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Fintech",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Edtech",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "SaaS",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "AI and Machine Learning",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Agtech",
    icon: "/public/image/fieldicon.svg"
  },
  {
    title: "Entertainment and Media",
    icon: "/public/image/fieldicon.svg"
  }
];

const Fields = () => {
  return (
    <Box sx={{ padding: "1rem 5%" }} mt={5}>
      <Typography
        color="#35B66B"
        variant="h4"
        fontWeight={600}
        textAlign={"center"}
      >
        Đa dạng lĩnh vực
      </Typography>
      <Grid container spacing={3} mt={3}>
        {FieldList.map((item, index) => (
          <Grid
            key={index}
            size={{ lg: 2 }}
            style={{
              backgroundColor: "rgba(53, 182, 107, 0.15)",
              display: "flex",
              alignItems: "center",
              padding: "0.7rem",
              borderRadius: "10px"
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(53, 182, 107, 1)",
                minHeight: "70px",
                minWidth: "70px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img src={item.icon} />
            </div>
            <Typography
              fontWeight={600}
              color="#527C88"
              sx={{ marginLeft: "1rem" }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Fields;
