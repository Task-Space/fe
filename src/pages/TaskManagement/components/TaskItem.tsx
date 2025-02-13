import { CSS } from "@dnd-kit/utilities";
import {
  Avatar,
  AvatarGroup,
  Card,
  LinearProgress,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { useSortable } from "@dnd-kit/sortable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// interface TaskItemProps extends Task {}
interface TaskItemProps {
  id: string;
}

// const TaskItem = ({ id, progress, status, tag, title }: TaskItemProps) => {
const TaskItem = ({ id }: TaskItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id
    });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <Card
      sx={{
        padding: "0.7rem 1rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}
      key={id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div
        style={{
          color: "blue",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.75rem",
          width: "fit-content",
          backgroundColor: "#EEF2FF"
        }}
      >
        Important
      </div>
      <Typography fontWeight={"bold"}>
        UI/UX Design in the age of AI {id}
      </Typography>
      <Grid>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>Progress</Typography>
          <Typography>0%</Typography>
        </Grid>
        <LinearProgress value={80} variant="determinate" />
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <AvatarGroup max={6}>
          <Avatar
            sx={{
              width: 28,
              height: 28
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{
              width: 28,
              height: 28
            }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{
              width: 28,
              height: 28
            }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Avatar
            sx={{
              width: 28,
              height: 28
            }}
            alt="Agnes Walker"
            src="/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{
              width: 28,
              height: 28
            }}
            alt="Trevor Henderson"
            src="/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Grid container spacing={2}>
          <Grid container spacing={1} alignItems={"center"}>
            <TextsmsIcon />
            <Typography>11</Typography>
          </Grid>
          <Grid container spacing={1} alignItems={"center"}>
            <CheckCircleIcon />
            <Typography>187</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TaskItem;
