import { Outlet, Route, Routes } from "react-router-dom";
import {
  AccountsManagement,
  AdminBase,
  AdminDashboard,
  Homepage,
  Login,
  MyProjectsPage,
  Profile,
  ProjectIndex,
  ProjectOverview,
  Register,
  TaskManagement
} from "../pages";
import { baseTheme } from "../theme/ThemeVariables";
import { ThemeProvider } from "@mui/material";
import { Header } from "../layouts";

const AppRouter = () => {
  const theme = baseTheme;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <div>
              <Outlet />
            </div>
          </>
        }
        children={[
          <Route index={true} element={<Homepage />} />,
          <Route path="my-projects" element={<MyProjectsPage />} />
        ]}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/project/:id"
        element={<ProjectIndex />}
        children={[
          <Route index={true} element={<ProjectOverview />} />,
          <Route path="task-management" element={<TaskManagement />} />
        ]}
      />
      <Route
        path="/profile"
        element={<Profile />}
        // children={[
        //   <Route index={true} element={<ProjectOverview />} />,
        //   <Route path="task-management" element={<TaskManagement />} />
        // ]}
      />
      <Route
        path="/admin"
        element={
          <ThemeProvider theme={theme}>
            <AdminBase />
          </ThemeProvider>
        }
        children={[
          <Route index={true} element={<AdminDashboard />} />,
          <Route path="accounts" element={<AccountsManagement />} />
        ]}
      />
    </Routes>
  );
};

export default AppRouter;
