import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import milestoneTaskJobApi from "../../../apis/milestoneTaskJob/milestoneTaskJob";
import { useState } from "react";
import { toast } from "react-toastify";

const DeleteJob = ({ jobId, taskId }: { jobId: string; taskId: string }) => {
  const queryClient = useQueryClient();
  const deleteJob = useMutation({
    mutationFn: (jobId: string) =>
      milestoneTaskJobApi.deleteMilestoneTaskJob(jobId)
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteJob.mutate(jobId, {
      onSuccess: () => {
        toast.success("Xóa công việc thành công");
        queryClient.invalidateQueries({
          queryKey: ["milestoneTask", taskId]
        });
        handleClose();
      }
    });
  };

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        <DeleteIcon color="disabled" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Bạn có chắc muốn xóa công việc này?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Hủy bỏ</Button>
          <Button onClick={handleDelete} autoFocus>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteJob;
