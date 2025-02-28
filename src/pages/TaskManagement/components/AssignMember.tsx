import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AssignMemberToMilestoneTaskReqType,
  milestoneTaskApi,
  UnassignMemberToMilestoneTaskReqType
} from "../../../apis";
import { toast } from "react-toastify";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Loading } from "../../../components";
import { IMilestoneTask } from "../../../types/milestoneTask";

const AssignMember = ({ milestoneTask }: { milestoneTask: IMilestoneTask }) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { project } = useProjectContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const assignMember = useMutation({
    mutationFn: (data: AssignMemberToMilestoneTaskReqType) =>
      milestoneTaskApi.assignMemberToMilestoneTask(data)
  });

  const unassignMemberFromTask = useMutation({
    mutationFn: (data: UnassignMemberToMilestoneTaskReqType) =>
      milestoneTaskApi.unassignMemberFromMilestoneTask(data)
  });

  const handleAssign = (userId: string) => {
    assignMember.mutate(
      { milestoneTaskId: milestoneTask.id, userIds: [userId] },
      {
        onSuccess: () => {
          toast.success("Phân công công việc thành công");
          queryClient.invalidateQueries({
            queryKey: ["milestoneTask", milestoneTask.id]
          });
        }
      }
    );
  };

  const handleUnassign = (userId: string) => {
    unassignMemberFromTask.mutate(
      { milestoneTaskId: milestoneTask.id, userId: userId },
      {
        onSuccess: () => {
          toast.success("Phân công công việc thành công");
          queryClient.invalidateQueries({
            queryKey: ["milestoneTask", milestoneTask.id]
          });
        }
      }
    );
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        fullWidth={true}
        sx={{
          height: "2.5rem",
          backgroundColor: "#E2E8F0",
          color: "black"
        }}
        startIcon={<PersonAddIcon />}
      >
        Phân công
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontWeight={600}>
              Phân công thành viên
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "#475569"
              }}
              onClick={handleClose}
            >
              <HighlightOffIcon />
            </Button>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Grid padding={3}>
              <Grid
                container
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
              >
                {project?.team.teamMembers.map((member) => (
                  <Grid
                    container
                    key={member.id}
                    display={"flex"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"space-between"}
                  >
                    <Grid
                      size={{ lg: 9 }}
                      container
                      display={"flex"}
                      alignItems={"center"}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: 35,
                          height: 35
                        }}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Typography>{member.name}</Typography>
                    </Grid>
                    <Grid
                      size={{ lg: 3 }}
                      container
                      display={"flex"}
                      justifyContent={"end"}
                    >
                      <Button
                        variant="contained"
                        fullWidth={true}
                        onClick={() =>
                          milestoneTask.userJoinTasks.find(
                            (item) => item.userId === member.id
                          )
                            ? handleUnassign(member.id)
                            : handleAssign(member.id)
                        }
                      >
                        {milestoneTask.userJoinTasks.find(
                          (item) => item.userId === member.id
                        )
                          ? "Unassign"
                          : "Assign"}
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssignMember;
