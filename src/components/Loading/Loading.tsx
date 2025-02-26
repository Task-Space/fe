import { Backdrop, CircularProgress } from "@mui/material";

const Loading = ({
  loading,
  setLoading
}: {
  loading: boolean;
  setLoading: () => void;
}) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={loading}
      onClick={setLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
