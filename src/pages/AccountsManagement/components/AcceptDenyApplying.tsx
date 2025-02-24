import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { identityApi } from "../../../apis";
import { toast } from "react-toastify";

const AcceptDenyApplying = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const acceptDenyApplying = useMutation({
    mutationFn: (data: {
      userId: string;
      isApproved: boolean;
      isBanned: boolean;
    }) => identityApi.putApply(data)
  });

  const handleAcceptDeny = (isApproved: boolean, isBanned: boolean) => {
    acceptDenyApplying.mutate(
      {
        userId,
        isApproved,
        isBanned
      },
      {
        onSuccess: () => {
          if (isApproved) {
            toast.success("Accepted applying mentor successfully");
          } else if (isBanned) {
            toast.success("Banned applying mentor successfully");
          } else {
            toast.success("Denied applying mentor successfully");
          }
          queryClient.invalidateQueries({
            queryKey: ["getApplyingMentor"]
          });
          handleClose();
        }
      }
    );

    setOpen(false);
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen}>
        <BorderColorIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"Accept or Deny Applying Mentor"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAcceptDeny(false, false)}>Deny</Button>
          <Button onClick={() => handleAcceptDeny(true, false)} autoFocus>
            Approve
          </Button>
          <Button onClick={() => handleAcceptDeny(false, true)} color="error">
            Ban
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AcceptDenyApplying;
