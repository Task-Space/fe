import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { useMutation } from "@tanstack/react-query";
import { teamApi } from "../../../apis";
import { TeamInviteReqType } from "../../../apis/team/team-req.type";
import { toast } from "react-toastify";

const InviteMembers = () => {
  const [open, setOpen] = useState(false);

  const { project } = useProjectContext();
  const [email, setEmail] = useState<string>("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inviteMember = useMutation({
    mutationFn: (data: TeamInviteReqType) => teamApi.inviteToTeam(data)
  });

  const handleInvite = () => {
    inviteMember.mutate(
      { teamId: project?.team.teamDetails.id as string, email },
      {
        onSuccess: () => {
          toast.success("Gửi lời mời thành công");
          setEmail("");
          handleClose();
        }
      }
    );
  };

  return (
    <>
      {inviteMember.isPending && (
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
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: "#475569",
          borderColor: "#475569",
          borderRadius: "1.5rem"
        }}
      >
        Invite +
      </Button>
      <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontWeight={600}>
              Mời thành viên
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "#475569"
              }}
              onClick={handleClose}
            >
              <HighlightOffIcon />
            </Button>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Grid padding={3}>
              <label>
                <Typography>Mời qua email</Typography>
              </label>
              <Grid mt={2} container display={"flex"} alignItems={"center"}>
                <Grid size={{ lg: 10 }}>
                  <TextField
                    id="outlined-start-adornment"
                    placeholder="Chọn thành viên"
                    fullWidth={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // slotProps={{
                    //   input: {
                    //     endAdornment: (
                    //       <InputAdornment position="end">
                    //         <Select defaultValue={0} variant="standard">
                    //           <MenuItem value={0}>Can Edit</MenuItem>
                    //           <MenuItem value={1}>Can View</MenuItem>
                    //         </Select>
                    //       </InputAdornment>
                    //     )
                    //   }
                    // }}
                  />
                </Grid>
                <Grid size={{ lg: 2 }} display={"flex"} justifyContent={"end"}>
                  <Button
                    size="medium"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      height: "3.5rem",
                      backgroundColor: "#FF855F",
                      color: "black",
                      fontWeight: 600
                    }}
                    onClick={handleInvite}
                  >
                    Gửi lời mời
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid padding={3}>
              <Typography mb={3}>Danh sách thành viên:</Typography>
              <Grid
                container
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
              >
                <Grid
                  container
                  display={"flex"}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"space-between"}
                >
                  <Grid
                    container
                    display={"flex"}
                    alignItems={"center"}
                    spacing={2}
                    size={{ lg: 10 }}
                  >
                    <Avatar
                      sx={{
                        width: 35,
                        height: 35
                      }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Typography>
                      {
                        project?.team.teamMembers.find(
                          (member) => member.isMain === true
                        )?.name
                      }
                    </Typography>
                  </Grid>
                  <Grid
                    size={{ lg: 2 }}
                    container
                    display={"flex"}
                    justifyContent={"end"}
                  >
                    <div
                      style={{
                        backgroundColor: "#F8F3F1",
                        color: "black",
                        width: "8rem",
                        padding: "0.7rem 0",
                        textAlign: "center",
                        borderRadius: "0.5rem",
                        height: "3rem"
                      }}
                    >
                      <Typography>Owner</Typography>
                    </div>
                  </Grid>
                </Grid>
                {project?.team.teamMembers
                  .filter((member) => member.isMain === false)
                  .map((member) => (
                    <Grid
                      container
                      display={"flex"}
                      alignItems={"center"}
                      spacing={2}
                      justifyContent={"space-between"}
                    >
                      <Grid
                        size={{ lg: 10 }}
                        container
                        display={"flex"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Avatar
                          sx={{
                            width: 35,
                            height: 35
                          }}
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                        <Typography>Phạm Quốc Quyền</Typography>
                      </Grid>
                      <Grid
                        size={{ lg: 2 }}
                        container
                        display={"flex"}
                        justifyContent={"end"}
                      >
                        <Select
                          defaultValue={0}
                          sx={{
                            width: "8rem",
                            height: "3rem",
                            backgroundColor: "#FF855F",
                            borderRadius: "0.5rem",
                            border: "none"
                          }}
                        >
                          <MenuItem value={0}>Can View</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InviteMembers;
