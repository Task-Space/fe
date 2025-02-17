import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TodayIcon from "@mui/icons-material/Today";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveIcon from "@mui/icons-material/Remove";
import ShareIcon from "@mui/icons-material/Share";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const CreateTask = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <AddCircleOutlineIcon />
      </Button>
      <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container display={"flex"} alignItems={"center"} spacing={10}>
            <Grid size={{ lg: 10 }}>
              <Typography variant="h6" fontWeight={600}>
                Tạo tác vụ với
              </Typography>
              <Grid
                mt={1}
                container
                display={"flex"}
                alignItems={"center"}
                spacing={1}
              >
                <InputLabel id="week-label">trong chỉ mục</InputLabel>
                <Select
                  labelId="week-label"
                  size="small"
                  defaultValue={0}
                  id="week"
                  sx={{
                    backgroundColor: "#E2E8F0",
                    fontWeight: 600
                  }}
                >
                  <MenuItem value={0}>TUẦN 1</MenuItem>
                  <MenuItem value={1}>TUẦN 2</MenuItem>
                  <MenuItem value={2}>TUẦN 3</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid size={{ lg: 2 }} display={"flex"} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                onClick={handleClose}
                fullWidth
                sx={{
                  height: "2.5rem",
                  backgroundColor: "#E2E8F0",
                  color: "black"
                }}
              >
                <ReplyIcon />
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={10}>
            <Grid
              size={{ lg: 10 }}
              display={"flex"}
              flexDirection={"column"}
              paddingTop={2}
              container
              spacing={2}
            >
              <Grid padding={"0 2rem"}>
                <Typography variant="body2">Thông báo</Typography>
                <Button
                  startIcon={<RemoveRedEyeIcon />}
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#E2E8F0",
                    color: "black",
                    marginTop: "0.5rem"
                  }}
                >
                  Theo dõi
                </Button>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Tiến độ
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <LinearProgress
                    color="inherit"
                    sx={{
                      height: "1rem",
                      borderRadius: "0.5rem"
                    }}
                    variant="determinate"
                    value={60}
                  />
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Mô tả
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <textarea
                    placeholder="Mô tả công việc"
                    style={{
                      width: "100%",
                      backgroundColor: "#E2E8F0",
                      height: "5rem",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #CBD5E1",
                      resize: "none"
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid
                  container
                  spacing={1}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Grid container spacing={1} color={"black"}>
                    <FormatAlignLeftIcon />
                    <Typography variant="body1" fontWeight={600}>
                      Công việc
                    </Typography>
                  </Grid>
                  <Button size="small" sx={{ color: "#475569" }}>
                    <ControlPointIcon />
                  </Button>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Soạn thảo văn bản"
                      sx={{
                        color: "#475569",
                        height: "1.75rem"
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Liên hệ đối tác"
                      sx={{
                        color: "#475569",
                        height: "1.75rem"
                      }}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                padding={"0"}
                container
                display={"flex"}
                flexDirection={"column"}
                color={"#CBD5E1"}
              >
                <Grid container spacing={1} color={"black"}>
                  <FormatAlignLeftIcon />
                  <Typography variant="body1" fontWeight={600}>
                    Hoạt động
                  </Typography>
                </Grid>
                <Grid padding={"0 0 0 2rem"}>
                  <textarea
                    placeholder="Mô tả công việc"
                    style={{
                      width: "100%",
                      backgroundColor: "#E2E8F0",
                      height: "10rem",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #CBD5E1",
                      resize: "none"
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              size={{ lg: 2 }}
              display={"flex"}
              flexDirection={"column"}
              spacing={4}
              container
            >
              <Grid
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
                container
              >
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<PersonAddIcon />}
                >
                  Tham gia
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<PersonAddIcon />}
                >
                  Phân công
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<LocalOfferIcon />}
                >
                  Nhãn dán
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<TodayIcon />}
                >
                  Ngày
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<InsertDriveFileIcon />}
                >
                  Đính kèm
                </Button>
              </Grid>
              <Grid
                display={"flex"}
                flexDirection={"column"}
                spacing={2}
                container
              >
                <Typography textAlign={"left"}>Thao tác</Typography>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<ArrowForwardIcon />}
                >
                  Di chuyển
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<RemoveIcon />}
                >
                  Hủy bỏ
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  fullWidth={true}
                  sx={{
                    height: "2.5rem",
                    backgroundColor: "#E2E8F0",
                    color: "black"
                  }}
                  startIcon={<ShareIcon />}
                >
                  Chia sẽ
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTask;
