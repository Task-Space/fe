import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditProjectApplyReqType, projectApi } from "../../../apis";
import { toast } from "react-toastify";

interface AcceptRejectProjectProps {
  id: string;
}

const AcceptRejectProject = ({ id }: AcceptRejectProjectProps) => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<string>("");
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editProjectApply = useMutation({
    mutationFn: (data: EditProjectApplyReqType) =>
      projectApi.editProjectApply(data)
  });

  const handleEditProjectApply = (isApprove: boolean) => {
    editProjectApply.mutate(
      {
        projectApplyId: id,
        isApproved: isApprove,
        reason: reason
      },
      {
        onSuccess: () => {
          toast.success("Edit project apply successfully");
          queryClient.invalidateQueries({
            queryKey: ["projects"]
          });
          queryClient.invalidateQueries({
            queryKey: ["projectsApply"]
          });
          handleClose();
        }
      }
    );
  };

  return (
    <>
      <Button size="small" variant="text" onClick={handleClickOpen}>
        <BorderColorIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Project Apply</DialogTitle>
        <DialogContent>
          <TextField
            label="Reason"
            sx={{
              mt: 2
            }}
            fullWidth
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="inherit">
            Cancel
          </Button>
          <Button
            onClick={() => handleEditProjectApply(false)}
            variant="contained"
            color="error"
          >
            Reject
          </Button>
          <Button
            onClick={() => handleEditProjectApply(true)}
            variant="contained"
            color="primary"
            autoFocus
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default AcceptRejectProject;
