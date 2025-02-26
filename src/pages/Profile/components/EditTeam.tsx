import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  TextField
} from "@mui/material";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Grid from "@mui/material/Grid2";
import { ITeam } from "../../../types/team.type";
import { EditTeamReqType } from "../../../apis/team/team-req.type";
import { useForm } from "react-hook-form";
import { ImageUpload, TextFieldControl } from "../../../components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { teamApi } from "../../../apis";
import { toast } from "react-toastify";

const EditTeam = ({ team }: { team: ITeam }) => {
  const { register, formState, getValues, resetField } =
    useForm<EditTeamReqType>({
      criteriaMode: "all",
      defaultValues: {
        TeamId: team.id,
        TeamContact: team.contact,
        TeamDescription: team.description,
        TeamEmail: team.email,
        TeamName: team.name,
        TeamSize: team.size
      }
    });
  const queryClient = useQueryClient();
  const [logoTeam, setLogoTeam] = useState<File | null>(null);
  const [teamBackground, setTeamBackground] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editTeam = useMutation({
    mutationFn: (data: EditTeamReqType) => teamApi.editTeam(data)
  });

  const handleSubmit = () => {
    editTeam.mutate(
      {
        TeamId: getValues("TeamId"),
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
          toast.success("Edit Team Success");
          queryClient.invalidateQueries({ queryKey: ["teams"] });
          handleClose();
        }
      }
    );
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleClickOpen}
        color="primary"
        size="small"
      >
        <BorderColorIcon />
      </Button>
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="update-create-account-dialog-title">
          Edit Team
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
                    <TextFieldControl<EditTeamReqType>
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
                    <TextFieldControl<EditTeamReqType>
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
                    <TextFieldControl<EditTeamReqType>
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
                    <TextFieldControl<EditTeamReqType>
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
                    <TextFieldControl<EditTeamReqType>
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
                    url={team.logo}
                    height="300px"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <ImageUpload
                    file={teamBackground}
                    setFile={setTeamBackground}
                    title="Team Background"
                    url={team.imageCover}
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

export default EditTeam;
