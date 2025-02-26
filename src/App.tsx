import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AppContext } from "./contexts/AppContext";
import { useQuery } from "@tanstack/react-query";
import { identityApi } from "./apis";

function App() {
  const userId = "03cf0749-fac8-47d6-b3da-d4a67a4996a2";

  const { data: profileData } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => identityApi.getUserById(userId)
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppContext.Provider
        value={{ profile: profileData?.data.data.userInfos }}
      >
        <BrowserRouter>
          <ToastContainer />
          <AppRouter />
        </BrowserRouter>
      </AppContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
