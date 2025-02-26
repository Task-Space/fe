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
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { ImageUpload, TextFieldControl } from "../../../components";
import { useForm } from "react-hook-form";
import { CreateTeamReqType } from "../../../apis/team/team-req.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { teamApi } from "../../../apis";
import { toast } from "react-toastify";

const CreateTeam = () => {
  const { register, formState, getValues, resetField } =
    useForm<CreateTeamReqType>({
      criteriaMode: "all"
    });
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [logoTeam, setLogoTeam] = useState<File | null>(null);
  const [teamBackground, setTeamBackground] = useState<File | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTeam = useMutation({
    mutationFn: (data: CreateTeamReqType) => teamApi.createTeam(data)
  });

  const handleSubmit = () => {
    createTeam.mutate(
      {
        TeamName: getValues("TeamName"),
        TeamDescription: getValues("TeamDescription"),
        TeamEmail: getValues("TeamEmail"),
        TeamContact: getValues("TeamContact"),
        TeamSize: getValues("TeamSize"),
        TeamLogo: logoTeam as File,
        TeamBackgroundImage: teamBackground as File
      },
      {
        onSuccess: () => {
          toast.success("Create Team Success");
          queryClient.invalidateQueries({ queryKey: ["teams"] });
          resetField("TeamName");
          resetField("TeamDescription");
          resetField("TeamEmail");
          resetField("TeamContact");
          resetField("TeamSize");
          setLogoTeam(null);
          setTeamBackground(null);
          handleClose();
        }
      }
    );
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen} color="success">
        Create New Team
      </Button>
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="update-create-account-dialog-title">
          Create Team
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
              <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="TeamName">Tên Nhóm</FormLabel>
                    <TextFieldControl<CreateTeamReqType>
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
                    <FormLabel htmlFor="TeamDescription">Mô tả Nhóm</FormLabel>
                    <TextFieldControl<CreateTeamReqType>
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
                <Grid size={{ xs: 12, sm: 4.5 }}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="TeamEmail">Email Nhóm</FormLabel>
                    <TextFieldControl<CreateTeamReqType>
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
                    <FormLabel htmlFor="TeamContact">Team Contact</FormLabel>
                    <TextFieldControl<CreateTeamReqType>
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
                    <TextFieldControl<CreateTeamReqType>
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
              <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <ImageUpload
                    file={logoTeam}
                    setFile={setLogoTeam}
                    title="Logo Team"
                    height="300px"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <ImageUpload
                    file={teamBackground}
                    setFile={setTeamBackground}
                    title="Team Background"
                    height="300px"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTeam;
