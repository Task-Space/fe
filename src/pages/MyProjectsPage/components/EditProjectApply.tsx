import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  styled
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { ImageUpload, TextFieldControl } from "../../../components";
import { domainApi, EditProjectApplyReqType } from "../../../apis";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import MultipleSelect from "../../../components/MultipleSelect/MultipleSelect";
import { IDomain } from "../../../types/domain";
import { useForm } from "react-hook-form";
import { IProject } from "../../../types/project";
import dayjs, { Dayjs } from "dayjs";

interface EditProjectApply {
  project: IProject;
}

const EditProjectApply = ({ project }: EditProjectApply) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(project.startDate)
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(project.endDate));
  const { register, formState, getValues } = useForm<EditProjectApplyReqType>({
    defaultValues: {
      ProjectApplyId: project.id,
      ProjectName: project.name,
      Description: project.description,
      StartDate: project.startDate,
      EndDates: project.endDate,
      IsPublish: project.isPublish
    }
  });
  const [domains, setDomains] = useState<string[]>(
    project.domainResponses.reduce((acc: string[], cur) => {
      acc.push(cur.name);
      return acc;
    }, [])
  );
  const [isPublish, setIsPublish] = useState<number>(0);
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data: domainData } = useQuery({
    queryKey: ["domains"],
    queryFn: () => domainApi.getAllDomains()
  });

  const editProjectApply = useMutation({});

  const handleSubmit = () => {};

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      {editProjectApply.isPending && (
        <Backdrop
          open={true}
          sx={(theme) => ({
            color: "#fff",
            zIndex: Math.max.apply(Math, Object.values(theme.zIndex)) + 1
          })}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="edit-project-dialog"
      >
        <DialogTitle id="edit-project-dialog-title">
          Tạo mới một dự án
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid
              display={"flex"}
              size={5.5}
              spacing={2}
              container
              flexDirection={"column"}
            >
              <FormControl fullWidth>
                <FormLabel htmlFor="ProjectName">Tên Dự án</FormLabel>
                <TextFieldControl<EditProjectApplyReqType>
                  register={register}
                  size={"small"}
                  id="ProjectName"
                  name="ProjectName"
                  placeholder="Joe"
                  autoComplete="ProjectName"
                  required
                  fullWidth
                  variant="outlined"
                  error={formState.errors.ProjectName}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="Description">Mô tả Dự án</FormLabel>
                <TextFieldControl<EditProjectApplyReqType>
                  register={register}
                  size={"small"}
                  id="Description"
                  name="Description"
                  placeholder="Joe"
                  autoComplete="Description"
                  required
                  fullWidth
                  variant="outlined"
                  error={formState.errors.Description}
                />
              </FormControl>
              <Grid container>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <ImageUpload
                    file={projectImage}
                    setFile={setProjectImage}
                    title="Ảnh Dự án"
                    url={project.url}
                  />
                </Grid>
              </Grid>

              <FormControl fullWidth>
                <FormLabel htmlFor="domains">Lĩnh Vực</FormLabel>
                <MultipleSelect<IDomain>
                  value={domains}
                  setValue={setDomains}
                  data={domainData?.data.data as IDomain[]}
                />
              </FormControl>

              <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                <Grid size={{ xs: 12, sm: 4.5 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="password">Start Date</FormLabel>
                    <DesktopDatePicker
                      showDaysOutsideCurrentMonth
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
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
                <Grid size={{ xs: 12, sm: 4.5 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="password">End Date</FormLabel>
                    <DesktopDatePicker
                      showDaysOutsideCurrentMonth
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
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
                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="is-publish">Công khai</FormLabel>
                    <Select
                      value={isPublish}
                      onChange={(e) => setIsPublish(e.target.value as number)}
                      id="is-publish"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value={0}>Publish</MenuItem>
                      <MenuItem value={1}>Private</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditProjectApply;
