import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteAccount = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleClickOpen}
        color="primary"
        size="small"
      >
        <DeleteIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="delete-account-dialog-title">
          Delete Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-account-dialog-description">
            Are you sure you want to delete this account? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccount;
