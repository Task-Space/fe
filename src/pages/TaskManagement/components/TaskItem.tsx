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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useState } from "react";
import { IMilestoneTask } from "../../../types/milestoneTask";
import TaskItemDetail from "./TaskItemDetail";

// interface TaskItemProps extends Task {}
interface TaskItemProps {
  taskDetail: IMilestoneTask;
}

// const TaskItem = ({ id, progress, status, tag, title }: TaskItemProps) => {
const TaskItem = ({ taskDetail }: TaskItemProps) => {
  // const { attributes, listeners, setNodeRef, transform, transition } =
  //   useSortable({
  //     id: taskDetail.id
  //   });

  const [open, setOpen] = useState(false);

  // const style = { transform: CSS.Transform.toString(transform), transition };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          padding: "0.7rem 1rem",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
        onClick={() => setOpen(true)}
        key={taskDetail.id}
        // ref={setNodeRef}
        // style={style}
        // {...listeners}
        // {...attributes}
      >
        {/* <div
        style={{
          color: "blue",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.75rem",
          width: "fit-content",
          backgroundColor: "#EEF2FF"
        }}
      >
        Important
      </div> */}
        <Typography>{taskDetail.title}</Typography>
        <Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant={"body2"}>Progress</Typography>
            <Typography variant={"body2"}>
              {taskDetail.progress * 100}%
            </Typography>
          </Grid>
          <LinearProgress
            value={taskDetail.progress * 100}
            variant="determinate"
          />
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <AvatarGroup>
            {taskDetail.userJoinTasks.map((user) => (
              <Avatar
                sx={{
                  width: 20,
                  height: 20
                }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            ))}
          </AvatarGroup>
          <Grid container spacing={2}>
            <Grid container spacing={1} alignItems={"center"}>
              <TextsmsIcon fontSize="small" />
              <Typography variant="body2">11</Typography>
            </Grid>
            <Grid container spacing={1} alignItems={"center"}>
              <CheckCircleIcon fontSize="small" />
              <Typography variant="body2">187</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <TaskItemDetail
        handleClose={handleClose}
        open={open}
        taskId={taskDetail.id}
      />
    </>
  );
};

export default TaskItem;
