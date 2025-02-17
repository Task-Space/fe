import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { GoogleIcon, TextFieldControl, Card } from "../../components";
import { ApplyRequestType, identityApi, RegisterRequestType } from "../../apis";
import { useForm } from "react-hook-form";
import { useMutation, useQueries } from "@tanstack/react-query";
import { MenuItem, Select } from "@mui/material";
import domainApi from "../../apis/domain/domain.api";
import universityApi from "../../apis/university/university.api";
import { DateField, DesktopDatePicker } from "@mui/x-date-pickers";
import MultipleSelect from "../../components/MultipleSelect/MultipleSelect";
import { IDomain } from "../../types/domain";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import {
  isAxiosBadRequestError,
  isAxiosUnprocessableEntityError
} from "../../utils/error";

const RegisterContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4)
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "linear-gradient(135deg, rgba(67,223,77,1) 0%, rgba(99,129,250,1) 100%)",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))"
    })
  }
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

const Register = () => {
  const nav = useNavigate();
  const [domains, setDomains] = useState<string[]>([]);
  const [cv, setCv] = useState<File | null>(null);
  const [role, setRole] = useState<number>(0);
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");
  const [joinDateUni, setJoinDateUni] = useState<Dayjs | null>(dayjs);
  const { register, formState, getValues, clearErrors, setError } =
    useForm<RegisterRequestType>({
      criteriaMode: "all"
    });

  const [{ data: domainData }, { data: universityData }] = useQueries({
    queries: [
      {
        queryKey: ["domains"],
        queryFn: () => domainApi.getAllDomains()
      },
      {
        queryKey: ["universities"],
        queryFn: () => universityApi.getAllUniversities()
      }
    ]
  });

  const handleRegister = useMutation({
    mutationFn: (data: RegisterRequestType) => identityApi.register(data)
  });

  const handleApply = useMutation({
    mutationFn: (data: ApplyRequestType) => identityApi.apply(data)
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearErrors();
    if (role === 0) {
      if (!joinDateUni) {
        toast.error("Please select joined date");
        return;
      }
      handleRegister.mutate(
        {
          ...getValues(),
          universityId: selectedUniversity,
          joinDateUni: joinDateUni?.toISOString()
        },
        {
          onSuccess: () => {
            toast.success("Register successfully, please login");
            nav("/login");
          },
          onError: (error) => {
            if (isAxiosUnprocessableEntityError<RegisterRequestType>(error)) {
              const formError = error.response?.data.details;
              formError?.forEach((err) => {
                setError(err.property, { message: err.message });
              });
            } else if (isAxiosBadRequestError(error)) {
              // const errorCode = error.response?.data.errorCode;
              // if (errorCode && ERROR_CONSTANTS[errorCode]) {
              //   toast.error(ERROR_CONSTANTS[errorCode]["en"]);
              // } else {
              //   toast.error("Unknown error code");
              // }
              toast.error("Something went wrong, please try again later");
            } else {
              toast.error("Something went wrong, please try again later");
            }
          }
        }
      );
    } else {
      if (domains.length === 0) {
        toast.error("Please select at least one domain");
        return;
      }

      if (!cv) {
        toast.error("Please upload your CV");
        return;
      }

      const DomainIds = domainData?.data.data.reduce(
        (acc: string[], cur: IDomain) => {
          if (domains.includes(cur.name)) {
            acc.push(cur.id);
          }
          return acc;
        },
        []
      );

      handleApply.mutate(
        {
          FirstName: getValues().firstName,
          LastName: getValues().lastName,
          Email: getValues().email,
          PhoneNumber: getValues().phoneNumber,
          DomainIds: DomainIds as string[],
          MentorCv: cv
        },
        {
          onSuccess: () => {
            toast.success(
              "Apply successfully, please wait for approval on your email"
            );
            nav("/login");
          }
          // onError: (error) => {
          //   if (isAxiosUnprocessableEntityError<ApplyRequestType>(error)) {
          //     const formError = error.response?.data.details;
          //     formError?.forEach((err) => {
          //       setError(err.property, { message: err.message });
          //     });
          //   } else if (isAxiosBadRequestError(error)) {
          //     // const errorCode = error.response?.data.errorCode;
          //     // if (errorCode && ERROR_CONSTANTS[errorCode]) {
          //     //   toast.error(ERROR_CONSTANTS[errorCode]["en"]);
          //     // } else {
          //     //   toast.error("Unknown error code");
          //     // }
          //     toast.error("Something went wrong, please try again later");
          //   } else {
          //     toast.error("Something went wrong, please try again later");
          //   }
          // }
        }
      );
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <RegisterContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <img
            style={{
              width: "25%",
              height: "auto",
              marginTop: "1rem"
            }}
            src="logo.svg"
          />
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container display={"flex"} justifyContent={"space-between"}>
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
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <TextFieldControl<RegisterRequestType>
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

                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    fullWidth
                    id="email"
                    size={"small"}
                    placeholder="your@email.com"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    error={formState.errors.email}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                  <TextFieldControl<RegisterRequestType>
                    register={register}
                    required
                    fullWidth
                    id="phoneNumber"
                    size={"small"}
                    placeholder="0123456789"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    variant="outlined"
                    error={formState.errors.phoneNumber}
                  />
                </FormControl>

                {role === 0 && (
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <TextFieldControl<RegisterRequestType>
                      register={register}
                      required
                      fullWidth
                      name="password"
                      size={"small"}
                      placeholder="••••••"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      variant="outlined"
                      error={formState.errors.password}
                    />
                  </FormControl>
                )}
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid
                display={"flex"}
                size={5.5}
                spacing={2}
                container
                flexDirection={"column"}
              >
                <FormControl>
                  <FormLabel htmlFor="youare">You are</FormLabel>
                  <Select
                    value={role}
                    size="small"
                    onChange={(e) => setRole(e.target.value as number)}
                  >
                    <MenuItem value={0}>Student</MenuItem>
                    <MenuItem value={1}>Mentor</MenuItem>
                  </Select>
                </FormControl>
                {role === 0 ? (
                  <>
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
                    <FormControl>
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

                    <Grid container size={12} spacing={{ xs: 1, sm: 3 }}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth={true}>
                          <FormLabel htmlFor="studentCode">
                            Student Code
                          </FormLabel>
                          <TextFieldControl<RegisterRequestType>
                            register={register}
                            required
                            fullWidth
                            name="studentCode"
                            size={"small"}
                            id="studentCode"
                            autoComplete="studentCode"
                            variant="outlined"
                            error={formState.errors.studentCode}
                          />
                        </FormControl>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth={true}>
                          <FormLabel htmlFor="seasonCode">
                            Season Code
                          </FormLabel>
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
                  </>
                ) : (
                  <>
                    <FormControl>
                      <FormLabel htmlFor="domains">Domains</FormLabel>
                      <MultipleSelect<IDomain>
                        value={domains}
                        setValue={setDomains}
                        data={domainData?.data.data as IDomain[]}
                      />
                    </FormControl>
                    <Grid>
                      <FormLabel htmlFor="domains">Your CV</FormLabel>
                      <Grid
                        container
                        spacing={2}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <Grid size={{ lg: 5.5 }}>
                          <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload
                            <VisuallyHiddenInput
                              type="file"
                              onChange={(event) =>
                                setCv(
                                  event.target.files
                                    ? event.target.files[0]
                                    : null
                                )
                              }
                              // multiple
                            />
                          </Button>
                        </Grid>
                        <Grid size={{ lg: 6.5 }} display={"flex"}>
                          <Typography noWrap={true}>
                            {cv ? cv.name : "No file selected"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>

            <Button
              sx={{
                mt: 2
              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              {role === 0 ? "Sign up" : "Apply"}
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Google")}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>

            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link href="/login" variant="body2" sx={{ alignSelf: "center" }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </RegisterContainer>
    </>
  );
};

export default Register;
