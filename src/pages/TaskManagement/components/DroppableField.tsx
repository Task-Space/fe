import { useDroppable } from "@dnd-kit/core";
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
  items: any[];
  title: string;
  milestoneId: string;
}

const DroppableField = ({
  id,
  items,
  title,
  milestoneId,
  ...props
}: DroppableFieldProps) => {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <Grid
      {...props}
      bgcolor={"#F8FAFC"}
      padding={"1rem 1rem"}
      border={"1px solid #E2E8F0"}
      borderRadius={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid container spacing={1}>
          <Typography variant="body1" fontWeight={"bold"}>
            {title}
          </Typography>
          {/* <Typography variant="h6" color="textSecondary">
            ({items.length})
          </Typography> */}
        </Grid>
        <CreateTask milestoneId={milestoneId} />
      </Grid>
      <Grid
        sx={{
          overflow: "auto"
        }}
      >
        <SortableContext
          id={id}
          items={items}
          strategy={verticalListSortingStrategy}
        >
          <Grid
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            ref={setNodeRef}
          >
            {items.map(({ id }) => (
              <TaskItem key={id} id={id} />
            ))}
          </Grid>
        </SortableContext>
      </Grid>
    </Grid>
  );
};

export default DroppableField;
