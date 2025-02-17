import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ToastContainer />
        <AppRouter />
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
