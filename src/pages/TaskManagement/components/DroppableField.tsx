import { useDroppable } from "@dnd-kit/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";
import { Typography } from "@mui/material";
import Grid, { Grid2Props } from "@mui/material/Grid2";
import CreateTask from "./CreateTask";

interface DroppableFieldProps extends Grid2Props {
  id: string;
  items: string[];
  title: string;
}

const DroppableField = ({
  id,
  items,
  title,
  ...props
}: DroppableFieldProps) => {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <Grid
      {...props}
      sx={{}}
      bgcolor={"#F8FAFC"}
      padding={"1rem 1rem"}
      border={"1px solid #E2E8F0"}
      borderRadius={"1rem"}
      container
      display={"flex"}
      flexDirection={"column"}
      spacing={2}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid container spacing={1}>
          <Typography variant="h6" fontWeight={"bold"}>
            {title}
          </Typography>
          {/* <Typography variant="h6" color="textSecondary">
            ({items.length})
          </Typography> */}
        </Grid>
        <CreateTask />
      </Grid>
      <SortableContext
        id={id}
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          spacing={2}
          ref={setNodeRef}
        >
          {items.map((id) => (
            <TaskItem key={id} id={id} />
          ))}
        </Grid>
      </SortableContext>
    </Grid>
  );
};

export default DroppableField;
