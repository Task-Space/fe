import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateMilestoneTaskJobReqType } from "../../../apis/milestoneTaskJob/milestoneTaskJob-req.type";
import milestoneTaskJobApi from "../../../apis/milestoneTaskJob/milestoneTaskJob";
import { toast } from "react-toastify";

const CreateJob = ({ milestoneTaskId }: { milestoneTaskId: string }) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const [jobName, setJobName] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createJob = useMutation({
    mutationFn: (data: CreateMilestoneTaskJobReqType) =>
      milestoneTaskJobApi.craeteMilestoneTaskJob(data)
  });

  const handleCreateJob = () => {
    createJob.mutate(
      {
        milestoneTaskId,
        jobTitle: jobName
      },
      {
        onSuccess: () => {
          toast.success("Tạo công việc mới thành công");
          queryClient.invalidateQueries({
            queryKey: ["milestoneTask", milestoneTaskId]
          });
          handleClose();
        }
      }
    );
  };

  return (
    <>
      <Button size="small" sx={{ color: "#475569" }} onClick={handleClickOpen}>
        <ControlPointIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        fullWidth
        aria-labelledby="create-job-dialog-title"
      >
        <DialogTitle id="create-job-dialog-title">
          Tạo một công việc mới
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            value={jobName}
            onChange={(event) => setJobName(event.target.value)}
            fullWidth
            label="Tên công việc"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateJob} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateJob;
