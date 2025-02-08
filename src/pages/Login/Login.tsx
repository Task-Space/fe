import CssBaseline from "@mui/material/CssBaseline";
import { Content, SignInCard } from "./components";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

const LoginContainer = styled(Grid)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
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
        "linear-gradient(135deg, rgba(67,223,77,1) 0%, rgba(99,129,250,1) 100%)"
    })
  }
}));

const Login = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <LoginContainer flex={1} container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center"
          }}
          size={{ lg: 6, md: 0, sm: 0 }}
        >
          <Content />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
          size={{ lg: 6, md: 12 }}
        >
          <SignInCard />
        </Grid>
      </LoginContainer>
    </>
  );
};

export default Login;
