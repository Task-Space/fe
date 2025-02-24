import {
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
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { TextFieldControl } from "../../../components";
import { useForm } from "react-hook-form";
import { RegisterRequestType } from "../../../apis";
import { useQuery } from "@tanstack/react-query";
import universityApi from "../../../apis/university/university.api";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface CreateEditAccountProps {
  account?: RegisterRequestType;
}

const CreateEditAccount = ({ account }: CreateEditAccountProps) => {
  const [open, setOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<string>(
    account?.universityId || ""
  );
  const [joinDateUni, setJoinDateUni] = useState<Dayjs | null>(
    dayjs(account?.joinDateUni)
  );
  const { data: universityData } = useQuery({
    queryKey: ["universities"],
    queryFn: () => universityApi.getAllUniversities()
  });

  const { register, formState, getValues, clearErrors, setError } =
    useForm<RegisterRequestType>({
      criteriaMode: "all",
      defaultValues: {
        firstName: account?.firstName,
        lastName: account?.lastName,
        email: account?.email,
        phoneNumber: account?.phoneNumber,
        studentCode: account?.studentCode,
        seasonCode: account?.seasonCode
      }
    });

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
        <BorderColorIcon />
      </Button>
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="update-create-account-dialog-title">
          Update Account
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <TextFieldControl
                    register={register}
                    size={"small"}
                    id="firstName"
                    name="firstName"
                    placeholder="Joe"
                    autoComplete="firstName"
                    required
                    fullWidth
                    variant="outlined"
                    error={formState.errors.firstName}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    size={"small"}
                    fullWidth
                    id="lastName"
                    placeholder="Biden"
                    name="lastName"
                    autoComplete="lastName"
                    variant="outlined"
                    error={formState.errors.lastName}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextFieldControl
                    register={register}
                    size={"small"}
                    id="email"
                    name="email"
                    placeholder="Joe"
                    autoComplete="email"
                    required
                    fullWidth
                    variant="outlined"
                    disabled={account !== undefined}
                    error={formState.errors.email}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    size={"small"}
                    fullWidth
                    id="phoneNumber"
                    placeholder="Biden"
                    name="phoneNumber"
                    autoComplete="lastName"
                    variant="outlined"
                    error={formState.errors.phoneNumber}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth={true}>
                  <FormLabel htmlFor="youruniversity">
                    Your university
                  </FormLabel>
                  <Select
                    size="small"
                    value={selectedUniversity}
                    onChange={(event) =>
                      setSelectedUniversity(event.target.value)
                    }
                    fullWidth={true}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {universityData?.data.data.map(({ id, name }) => (
                      <MenuItem key={id} value={id}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="password">Joined Date</FormLabel>
                  <DesktopDatePicker
                    showDaysOutsideCurrentMonth
                    value={joinDateUni}
                    onChange={(date) => setJoinDateUni(date)}
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
            <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth={true}>
                  <FormLabel htmlFor="studentCode">Student Code</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    fullWidth
                    name="studentCode"
                    size={"small"}
                    id="studentCode"
                    autoComplete="studentCode"
                    disabled={account !== undefined}
                    variant="outlined"
                    error={formState.errors.studentCode}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth={true}>
                  <FormLabel htmlFor="seasonCode">Season Code</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    fullWidth
                    name="seasonCode"
                    size={"small"}
                    id="seasonCode"
                    autoComplete="seasonCode"
                    variant="outlined"
                    error={formState.errors.seasonCode}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
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

export default CreateEditAccount;
