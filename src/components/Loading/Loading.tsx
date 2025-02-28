import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Backdrop
      open={true}
      sx={(theme) => ({
        color: "#fff",
        zIndex: Math.max.apply(Math, Object.values(theme.zIndex)) + 1
      })}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
