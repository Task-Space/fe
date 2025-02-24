import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import {
  Box,
  DialogActions,
  FormControl,
  FormLabel,
  styled
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextFieldControl } from "../../../components";
import { CreateTaskReqType } from "../../../apis/task/task-req.type";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import taskApi from "../../../apis/task/task.api";
import { toast } from "react-toastify";
import { useProjectContext } from "../../../contexts/ProjectContext";

interface CreateTaskProps {
  milestoneId: string;
}

const CreateTask = ({ milestoneId }: CreateTaskProps) => {
  const queryClient = useQueryClient();
  const { project } = useProjectContext();
  const { register, formState, handleSubmit, resetField } =
    useForm<CreateTaskReqType>();
  const [open, setOpen] = useState(false);
  const [taskDeadline, setTaskDeadline] = useState<Dayjs | null>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTask = useMutation({
    mutationFn: (data: CreateTaskReqType) => taskApi.createTask(data)
  });

  const onSubmit: SubmitHandler<CreateTaskReqType> = (data) => {
    createTask.mutate(
      {
        ...data,
        taskDeadline: taskDeadline?.toISOString() as string,
        milestoneId
      },
      {
        onSuccess: () => {
          toast.success("Create Milestone Successfully");
          handleClose();
          resetField("taskName");
          resetField("taskDescription");
          setTaskDeadline(null);
          queryClient.invalidateQueries({
            queryKey: ["milestones", project?.id]
          });
        }
      }
    );
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        style={{
          padding: 0,
          color: "blue",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          outline: "none"
        }}
      >
        <AddCircleOutlineIcon />
      </button>
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
            Create New Task
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              display={"flex"}
              flexDirection={"column"}
              spacing={2}
            >
              <FormControl fullWidth>
                <FormLabel htmlFor="taskName">Task Name</FormLabel>
                <TextFieldControl<CreateTaskReqType>
                  register={register}
                  required
                  fullWidth
                  id="taskName"
                  size={"small"}
                  name="taskName"
                  autoComplete="taskName"
                  variant="outlined"
                  error={formState.errors.taskName}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="taskDescription">
                  Task Description
                </FormLabel>
                <TextFieldControl<CreateTaskReqType>
                  register={register}
                  required
                  fullWidth
                  id="taskDescription"
                  size={"small"}
                  name="taskDescription"
                  autoComplete="taskDescription"
                  variant="outlined"
                  error={formState.errors.taskDescription}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="taskDeadline">Task Deadline</FormLabel>
                <DesktopDatePicker
                  showDaysOutsideCurrentMonth
                  value={taskDeadline}
                  onChange={(date) => setTaskDeadline(date)}
                  slots={{
                    field: styled(DateField)(({}) => {
                      return {
                        "& .MuiInputBase-root": {
                          width: "100%",
                          height: "2.6rem"
                        }
                      };
                    })
                  }}
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

export default CreateTask;
