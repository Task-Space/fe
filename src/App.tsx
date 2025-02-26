import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AppContext } from "./contexts/AppContext";
import { useQuery } from "@tanstack/react-query";
import { identityApi } from "./apis";

function App() {
  const { data: profileData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => identityApi.getMe()
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppContext.Provider value={{ profile: profileData?.data.data }}>
        <BrowserRouter>
          <ToastContainer />
          <AppRouter />
        </BrowserRouter>
      </AppContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
