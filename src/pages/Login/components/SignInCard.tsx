import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, TextFieldControl } from "../../../components";
import Grid from "@mui/material/Grid2";
import { identityApi, LoginRequestType } from "../../../apis";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  isAxiosBadRequestError,
  isAxiosUnprocessableEntityError
} from "../../../utils/error";
import ERROR_CONSTANTS from "../../../constants/error";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "center",
  minWidth: "70%",
  height: "95%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px"
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));

const SignInCard = () => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpenForgotPassword = () => {
    setOpen(true);
  };

  const handleCloseForgotPassword = () => {
    setOpen(false);
  };

  const { register, formState, getValues, setError, clearErrors } =
    useForm<LoginRequestType>({
      criteriaMode: "all"
    });

  const handleLogin = useMutation({
    mutationFn: (data: LoginRequestType) => identityApi.login(data)
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearErrors();
    handleLogin.mutate(
      { ...getValues() },
      {
        onSuccess: () => {
          toast.success("Login successfully");
          nav("/");
        },
        onError: (error) => {
          if (isAxiosUnprocessableEntityError<LoginRequestType>(error)) {
            const formError = error.response?.data.details;
            formError?.forEach((err) => {
              setError(err.property, {
                message: err.message
              });
            });
          } else if (isAxiosBadRequestError(error)) {
            const errorCode = error.response?.data.errorCode;
            if (errorCode && ERROR_CONSTANTS[errorCode]) {
              toast.error(ERROR_CONSTANTS[errorCode]["en"]);
            } else {
              toast.error("Unknown error code");
            }
          } else {
            toast.error("Something went wrong, please try again later");
          }
        }
      }
    );
  };

  return (
    <Card variant="outlined">
      <Grid
        container
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid>
          <Typography
            component="h1"
            variant="h2"
            fontFamily={"Port Lligat Sans"}
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Welcome to
          </Typography>
        </Grid>
        <Grid container gap={2} justifyContent={"space-between"}>
          <Grid>
            <Link href="/">
              <Typography
                component="h2"
                variant="h6"
                fontFamily={"Space Grotesk"}
                color="#24445B"
                fontWeight={"bold"}
                sx={{
                  width: "100%"
                }}
              >
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid>
            <Typography
              component="h2"
              variant="h6"
              fontFamily={"Space Grotesk"}
              color="#24445B"
              fontWeight={"bold"}
              sx={{
                width: "100%"
              }}
            >
              Contact
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <img
        style={{
          width: "70%",
          height: "auto",
          marginTop: "1rem"
        }}
        src="logo.svg"
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2
        }}
      >
        <FormControl>
          <TextFieldControl<LoginRequestType>
            register={register}
            label="Email Address"
            id="email"
            type="email"
            size="medium"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="filled"
            error={formState.errors.email}
          />
        </FormControl>
        <FormControl>
          <TextFieldControl
            register={register}
            error={formState.errors.password}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            size="medium"
            label="Password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="filled"
          />
        </FormControl>
        <Grid container justifyContent={"space-between"}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link
            component="button"
            type="button"
            onClick={handleClickOpenForgotPassword}
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Forgot Password?
          </Link>
          <ForgotPassword open={open} handleClose={handleCloseForgotPassword} />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#2ED05F",
            fontSize: "1.25rem",
            fontWeight: "500"
          }}
        >
          Login
        </Button>
      </Box>
      <Divider>OR</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="inherit"
          size="large"
          onClick={() => alert("Sign in with Google")}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Typography sx={{ textAlign: "center" }} fontFamily={"Poppins"}>
          Don&apos;t have an account?{" "}
          <Link href="/register" variant="body1" sx={{ alignSelf: "center" }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Card>
  );
};

export default SignInCard;
