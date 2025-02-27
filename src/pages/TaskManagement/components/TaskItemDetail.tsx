import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TodayIcon from "@mui/icons-material/Today";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveIcon from "@mui/icons-material/Remove";
import ShareIcon from "@mui/icons-material/Share";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  AssignMemberToMilestoneTaskReqType,
  milestoneApi,
  milestoneTaskApi,
  UnassignMemberToMilestoneTaskReqType,
  UpdateMilestoneTaskReqType
} from "../../../apis";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { toast } from "react-toastify";
import { Loading } from "../../../components";
import { useAppContext } from "../../../contexts/AppContext";
import CreateJob from "./CreateJob";
import milestoneTaskJobApi from "../../../apis/milestoneTaskJob/milestoneTaskJob";
import { EditMilestoneTaskJobReqType } from "../../../apis/milestoneTaskJob/milestoneTaskJob-req.type";
import { useEffect, useState } from "react";
import DeleteJob from "./DeleteJob";
import AssignMember from "./AssignMember";
import { IMilestoneTask } from "../../../types/milestoneTask";

interface TaskItemDetailProps {
  taskId: string;
  open: boolean;
  handleClose: () => void;
}

const TaskItemDetail = ({ taskId, handleClose, open }: TaskItemDetailProps) => {
  const { project, isLeader } = useProjectContext();
  const { profile } = useAppContext();
  const [isInTask, setIsInTask] = useState<boolean>();
  const queryClient = useQueryClient();
  const [{ data: milestoneTaskData }, { data: milestoneData }] = useQueries({
    queries: [
      {
        queryKey: ["milestoneTask", taskId],
        queryFn: () => milestoneTaskApi.getMilestoneTaskDetailById(taskId)
      },
      {
        queryKey: ["milestones", project?.id],
        queryFn: () => milestoneApi.getMilestones(project?.id as string)
      }
    ]
  });

  const assignMemberToTask = useMutation({
    mutationFn: (data: AssignMemberToMilestoneTaskReqType) =>
      milestoneTaskApi.assignMemberToMilestoneTask(data)
  });

  useEffect(() => {
    const user = milestoneTaskData?.data.data.userJoinTasks.find(
      (user) => user.userId === profile?.id
    );
    if (user) {
      setIsInTask(true);
    }
  }, [milestoneTaskData]);

  const unassignMemberFromTask = useMutation({
    mutationFn: (data: UnassignMemberToMilestoneTaskReqType) =>
      milestoneTaskApi.unassignMemberFromMilestoneTask(data)
  });

  const updateMilestoneTask = useMutation({
    mutationFn: (data: UpdateMilestoneTaskReqType) =>
      milestoneTaskApi.updateMilestoneTask(data)
  });

  const handleAssignMemberToTask = () => {
    if (isInTask) {
      unassignMemberFromTask.mutate(
        {
          milestoneTaskId: milestoneTaskData?.data.data.id as string
        },
        {
          onSuccess: () => {
            toast.success("Hủy tham gia task thành công");
            queryClient.invalidateQueries({
              queryKey: ["milestoneTask", taskId]
            });
            queryClient.invalidateQueries({
              queryKey: ["milestones", project?.id]
            });
          }
        }
      );
    } else {
      assignMemberToTask.mutate(
        {
          milestoneTaskId: milestoneTaskData?.data.data.id as string
        },
        {
          onSuccess: () => {
            toast.success("Tham gia task thành công");
            queryClient.invalidateQueries({
              queryKey: ["milestoneTask", taskId]
            });
            queryClient.invalidateQueries({
              queryKey: ["milestones", project?.id]
            });
          }
        }
      );
    }
  };

  const editMilestoneTsakJob = useMutation({
    mutationFn: (data: EditMilestoneTaskJobReqType) =>
      milestoneTaskJobApi.editMilestoneTaskJob(data)
  });

  const handleCheckJob = (
    event: React.ChangeEvent<HTMLInputElement>,
    jobId: string
  ) => {
    editMilestoneTsakJob.mutate(
      {
        milestoneTaskJobId: jobId,
        isClick: event.target.value === "on"
      },
      {
        onSuccess: () => {
          toast.success("Cập nhật trạng thái công việc thành công");
          queryClient.invalidateQueries({
            queryKey: ["milestoneTask", taskId]
          });
        }
      }
    );
  };

  const handleChangeMilestone = (event: SelectChangeEvent<string>) => {
    updateMilestoneTask.mutate(
      {
        milestoneTaskId: taskId,
        milestoneId: event.target.value
      },
      {
        onSuccess: () => {
          toast.success("Chỉnh sửa tác vụ thành công");
          handleClose();
          queryClient.invalidateQueries({
            queryKey: ["milestones", project?.id]
          });
        }
      }
    );
  };

  return (
    <>
      {updateMilestoneTask.isPending && <Loading />}
      {assignMemberToTask.isPending && <Loading />}

      <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container display={"flex"} alignItems={"center"} spacing={10}>
            <Grid size={{ lg: 10 }}>
              <Typography variant="h6" fontWeight={600}>
                Chỉnh sửa tác vụ
              </Typography>
              <Grid
                mt={1}
                container
                display={"flex"}
                alignItems={"center"}
                spacing={1}
              >
                <InputLabel id="milestone">trong chỉ mục</InputLabel>
                <Select
                  labelId="milestone"
                  size="small"
                  onChange={(e) => handleChangeMilestone(e)}
                  defaultValue={milestoneTaskData?.data.data.mileStone.id}
                  sx={{
                    backgroundColor: "#E2E8F0",
                    fontWeight: 600
                  }}
                >
                  {milestoneData?.data.data.map((milestone) => (
                    <MenuItem key={milestone.id} value={milestone.id}>
                      {milestone.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <Grid size={{ lg: 2 }} display={"flex"} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                onClick={handleClose}
                fullWidth
                sx={{
                  height: "2.5rem",
                  backgroundColor: "#E2E8F0",
                  color: "black"
                }}
              >
                <ReplyIcon />
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={10}>
            <Grid
              size={{ lg: 10 }}
              display={"flex"}
              flexDirection={"column"}
              paddingTop={2}
              container
              spacing={2}
            >
              {/* <Grid padding={"0 2rem"}>
                <Typography variant="body2">Thông báo</Typography>
                <Button
                  startIcon={<RemoveRedEyeIcon />}
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#E2E8F0",
                    color: "black",
                    marginTop: "0.5rem"
                  }}
                >
                  Theo dõi
                </Button>
              </Grid> */}
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Tiến độ
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <LinearProgress
                    color="inherit"
                    sx={{
                      height: "1rem",
                      borderRadius: "0.5rem"
                    }}
                    variant="determinate"
                    value={
                      (milestoneTaskData?.data.data.progress as number) * 100
                    }
                  />
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Mô tả
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <textarea
                    // placeholder="Mô tả công việc"
                    value={milestoneTaskData?.data.data.description}
                    style={{
                      width: "100%",
                      backgroundColor: "#E2E8F0",
                      height: "5rem",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #CBD5E1",
                      resize: "none"
                    }}
                    disabled
                  />
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid
                  container
                  spacing={1}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Grid container spacing={1} color={"black"}>
                    <FormatAlignLeftIcon />
                    <Typography variant="body1" fontWeight={600}>
                      Công việc
                    </Typography>
                  </Grid>
                  <CreateJob milestoneTaskId={taskId} />
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <FormGroup>
                    {milestoneTaskData?.data.data.taskJobs.map(
                      (milestoneTaskJob) => (
                        <Grid container spacing={3}>
                          <Grid size={{ lg: 6 }} container spacing={2}>
                            <FormControlLabel
                              key={milestoneTaskJob.id}
                              control={
                                <Checkbox
                                  color="default"
                                  checked={milestoneTaskJob.isFinished}
                                  onChange={(event) =>
                                    handleCheckJob(event, milestoneTaskJob.id)
                                  }
                                />
                              }
                              label={milestoneTaskJob.name}
                              sx={{
                                color: "#475569"
                                // height: "1.75rem"
                              }}
                            />
                            <DeleteJob
                              jobId={milestoneTaskJob.id}
                              taskId={taskId}
                            />
                          </Grid>
                        </Grid>
                      )
                    )}
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
              >
                <Grid container spacing={1}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Thành viên tham gia
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 3rem"}>
                  <ul>
                    {milestoneTaskData?.data.data.userJoinTasks.map((user) => (
                      <li>
                        <Typography>{user.userName}</Typography>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
              {/* <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Hoạt động
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <textarea
                    placeholder="Mô tả công việc"
                    style={{
                      width: "100%",
                      backgroundColor: "#E2E8F0",
                      height: "10rem",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #CBD5E1",
                      resize: "none"
                    }}
                  />
                </Grid>
              </Grid> */}
            </Grid>
            <Grid
              size={{ lg: 2 }}
              display={"flex"}
              flexDirection={"column"}
              spacing={4}
              container
            >
              <Grid
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
                container
              >
                <Button
                  variant="contained"
                  onClick={handleAssignMemberToTask}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<PersonAddIcon />}
                >
                  {isInTask ? "Hủy tham gia" : "Tham gia"}
                </Button>
                {isLeader && (
                  <AssignMember
                    milestoneTask={
                      milestoneTaskData?.data.data as IMilestoneTask
                    }
                  />
                )}

                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<LocalOfferIcon />}
                >
                  Nhãn dán
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<TodayIcon />}
                >
                  Ngày
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<InsertDriveFileIcon />}
                >
                  Đính kèm
                </Button>
              </Grid>
              <Grid
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
                container
              >
                <Typography textAlign={"left"}>Thao tác</Typography>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<ArrowForwardIcon />}
                >
                  Di chuyển
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<RemoveIcon />}
                >
                  Hủy bỏ
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<ShareIcon />}
                >
                  Chia sẽ
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskItemDetail;
