import {
  Box,
  Button,
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateProjectReqType } from "../../../apis/project/project-req.type";
import Grid from "@mui/material/Grid2";
import { ImageUpload, TextFieldControl } from "../../../components";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import { useMutation, useQueries } from "@tanstack/react-query";
import domainApi from "../../../apis/domain/domain.api";
import MultipleSelect from "../../../components/MultipleSelect/MultipleSelect";
import { IDomain } from "../../../types/domain";
import dayjs, { Dayjs } from "dayjs";
import projectApi from "../../../apis/project/project.api";
import { toast } from "react-toastify";
import { teamApi } from "../../../apis";

const CreateNewProject = () => {
  const { register, formState, getValues } = useForm<CreateProjectReqType>();
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string>("new");
  const [logoTeam, setLogoTeam] = useState<File | null>(null);
  const [teamBackground, setTeamBackground] = useState<File | null>(null);
  const [domains, setDomains] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs);
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs);
  const [isPublish, setIsPublish] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createProject = useMutation({
    mutationFn: (data: CreateProjectReqType) => projectApi.createProject(data)
  });

  const handleSubmit = () => {
    const domainId = domainData?.data.data.reduce((acc: string[], cur) => {
      if (domains.includes(cur.name)) {
        acc.push(cur.id);
      }
      return acc;
    }, []);

    if (selectedTeam === "new") {
      createProject.mutate(
        {
          ProjectName: getValues("ProjectName"),
          Description: getValues("Description"),
          TeamName: getValues("TeamName"),
          TeamDescription: getValues("TeamDescription"),
          TeamEmail: getValues("TeamEmail"),
          TeamContact: getValues("TeamContact"),
          TeamSize: getValues("TeamSize"),
          ProjectImgUrl: projectImage as File,
          TeamLogo: logoTeam as File,
          TeamBackgroundImage: teamBackground as File,
          StartDate: startDate?.toISOString() as string,
          EndDates: endDate?.toISOString() as string,
          DomainId: domainId as string[],
          IsPublish: isPublish === 0
        },
        {
          onSuccess: () => {
            toast.success("Tạo dự án thành công");
            handleClose();
          }
        }
      );
    } else {
      createProject.mutate(
        {
          ProjectName: getValues("ProjectName"),
          Description: getValues("Description"),
          TeamId: selectedTeam,
          ProjectImgUrl: projectImage as File,
          StartDate: startDate?.toISOString() as string,
          EndDates: endDate?.toISOString() as string,
          DomainId: domainId as string[],
          IsPublish: isPublish === 0
        },
        {
          onSuccess: () => {
            toast.success("Tạo dự án thành công");
            handleClose();
          }
        }
      );
    }
  };

  const [{ data: domainData }, { data: teamsData }] = useQueries({
    queries: [
      {
        queryKey: ["domains"],
        queryFn: () => domainApi.getAllDomains()
      },
      {
        queryKey: ["teams"],
        queryFn: () => teamApi.getTeams()
      }
    ]
  });

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="create-project-dialog"
      >
        <DialogTitle id="create-project-dialog-title">
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
                <TextFieldControl<CreateProjectReqType>
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
                <TextFieldControl<CreateProjectReqType>
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
              <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="is-publish">Chọn Nhóm</FormLabel>
                    <Select
                      value={selectedTeam}
                      onChange={(e) => setSelectedTeam(e.target.value)}
                      id="is-publish"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value={"new"}>Tạo nhóm mới</MenuItem>
                      {teamsData?.data.data.map((team) => (
                        <MenuItem key={team.id} value={team.id}>
                          {team.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 3 }}>
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
                <Grid size={{ xs: 12, sm: 3 }}>
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
              </Grid>
              {selectedTeam === "new" && (
                <>
                  <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <FormLabel htmlFor="TeamName">Tên Nhóm</FormLabel>
                        <TextFieldControl<CreateProjectReqType>
                          register={register}
                          size={"small"}
                          id="TeamName"
                          name="TeamName"
                          placeholder="Joe"
                          autoComplete="TeamName"
                          required
                          fullWidth
                          variant="outlined"
                          error={formState.errors.TeamName}
                        />
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <FormLabel htmlFor="TeamDescription">
                          Mô tả Nhóm
                        </FormLabel>
                        <TextFieldControl<CreateProjectReqType>
                          register={register}
                          size={"small"}
                          id="TeamDescription"
                          name="TeamDescription"
                          placeholder="Joe"
                          autoComplete="TeamDescription"
                          required
                          fullWidth
                          variant="outlined"
                          error={formState.errors.TeamDescription}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <ImageUpload
                        file={projectImage}
                        setFile={setProjectImage}
                        title="Ảnh Dự án"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <ImageUpload
                        file={logoTeam}
                        setFile={setLogoTeam}
                        title="Logo Team"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <ImageUpload
                        file={teamBackground}
                        setFile={setTeamBackground}
                        title="Team Background"
                      />
                    </Grid>
                  </Grid>
                  <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                    <Grid size={{ xs: 12, sm: 4.5 }}>
                      <FormControl fullWidth>
                        <FormLabel htmlFor="TeamEmail">Email Nhóm</FormLabel>
                        <TextFieldControl<CreateProjectReqType>
                          register={register}
                          size={"small"}
                          id="TeamEmail"
                          name="TeamEmail"
                          placeholder="Joe"
                          autoComplete="TeamEmail"
                          required
                          fullWidth
                          variant="outlined"
                          error={formState.errors.TeamEmail}
                        />
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4.5 }}>
                      <FormControl fullWidth>
                        <FormLabel htmlFor="TeamContact">
                          Team Contact
                        </FormLabel>
                        <TextFieldControl<CreateProjectReqType>
                          register={register}
                          size={"small"}
                          id="TeamContact"
                          name="TeamContact"
                          placeholder="Joe"
                          autoComplete="TeamContact"
                          required
                          fullWidth
                          variant="outlined"
                          error={formState.errors.TeamContact}
                        />
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <FormControl fullWidth>
                        <FormLabel htmlFor="TeamSize">
                          Số Lượng Thành Viên
                        </FormLabel>
                        <TextFieldControl<CreateProjectReqType>
                          register={register}
                          size={"small"}
                          id="TeamSize"
                          type="number"
                          name="TeamSize"
                          placeholder="Joe"
                          autoComplete="TeamSize"
                          required
                          fullWidth
                          variant="outlined"
                          error={formState.errors.TeamSize}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </>
              )}

              <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                <Grid size={{ xs: 12, sm: 10 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="domains">Lĩnh Vực</FormLabel>
                    <MultipleSelect<IDomain>
                      value={domains}
                      setValue={setDomains}
                      data={domainData?.data.data as IDomain[]}
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 2 }}>
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

export default CreateNewProject;
