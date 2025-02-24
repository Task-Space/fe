import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { TextFieldControl } from "../../../components";
import { CreateMilestoneReqType } from "../../../apis/milestone/milestone-req.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import milestoneApi from "../../../apis/milestone/milestone.api";
import { toast } from "react-toastify";

const CreateMilestone = () => {
  const { project } = useProjectContext();
  const { register, formState, handleSubmit } = useForm<CreateMilestoneReqType>(
    {
      defaultValues: { projectId: project?.id }
    }
  );
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createMilestone = useMutation({
    mutationFn: (data: CreateMilestoneReqType) =>
      milestoneApi.createMilestone(data)
  });

  const onSubmit: SubmitHandler<CreateMilestoneReqType> = (data) => {
    createMilestone.mutate(
      {
        ...data,
        projectId: project?.id as string
      },
      {
        onSuccess: () => {
          toast.success("Create Milestone Successfully");
          queryClient.invalidateQueries({
            queryKey: ["milestones", project?.id]
          });
        }
      }
    );
  };

  return (
    <>
      <Button variant="outlined" size="medium" onClick={handleClickOpen}>
        Add Milestone
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="create-milestone-title"
        aria-describedby="create-milestone-dialog-description"
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="create-milestone-dialog-title">
            Create New Milestone
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              display={"flex"}
              flexDirection={"column"}
              spacing={2}
            >
              <FormControl fullWidth>
                <FormLabel htmlFor="milestoneName">Milestone Name</FormLabel>
                <TextFieldControl<CreateMilestoneReqType>
                  register={register}
                  required
                  fullWidth
                  id="milestoneName"
                  size={"small"}
                  name="milestoneName"
                  autoComplete="milestoneName"
                  variant="outlined"
                  error={formState.errors.milestoneName}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="milestoneDescription">
                  Milestone Description
                </FormLabel>
                <TextFieldControl<CreateMilestoneReqType>
                  register={register}
                  required
                  fullWidth
                  id="milestoneDescription"
                  size={"small"}
                  name="milestoneDescription"
                  autoComplete="milestoneDescription"
                  variant="outlined"
                  error={formState.errors.milestoneDescription}
                />
              </FormControl>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" autoFocus>
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default CreateMilestone;
