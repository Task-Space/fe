import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ActivityItem = ({
  category,
  name,
  src
}: {
  src: string;
  name: string;
  category: string;
}) => {
  return (
    <Card
      sx={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center"
      }}
    >
      <img src={src} />
      <Grid>
        <Typography variant="h6" fontWeight={600} mt={1}>
          {name}
        </Typography>
        <Typography variant="body1" mt={1} color="textDisabled">
          {category}
        </Typography>
      </Grid>
    </Card>
  );
};

export default ActivityItem;
