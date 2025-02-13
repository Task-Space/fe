import { CSS } from "@dnd-kit/utilities";
import { Card, LinearProgress, Typography } from "@mui/material";
import { Task } from "../../../types/task";
import Grid from "@mui/material/Grid2";
import { useSortable } from "@dnd-kit/sortable";

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
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column"
      }}
      key={id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <Typography fontWeight={"bold"}>{id}</Typography>
      <Grid>
        {/* <LinearProgress value={progress} variant="determinate" /> */}
      </Grid>
    </Card>
  );
};

export default TaskItem;
