import { Outlet, Route, Routes } from "react-router-dom";
import {
  AccountsManagement,
  AdminBase,
  AdminDashboard,
  Calendar,
  Homepage,
  Login,
  MyProjectsPage,
  NotFoundPage,
  Profile,
  ProjectIndex,
  ProjectList,
  ProjectManagement,
  ProjectOverview,
  Register,
  TaskManagement
} from "../pages";
import { baseTheme } from "../theme/ThemeVariables";
import { ThemeProvider } from "@mui/material";
import { Header } from "../layouts";
import { useAppContext } from "../contexts/AppContext";

const AppRouter = () => {
  const theme = baseTheme;
  const { profile } = useAppContext();

  return (
    <Routes>
      {!profile && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
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
          <Route path="projects" element={<ProjectList />} />,
          <Route path="my-projects" element={<MyProjectsPage />} />,
          <Route
            path="/profile"
            element={<Profile />}
            // children={[
            //   <Route index={true} element={<ProjectOverview />} />,
            //   <Route path="task-management" element={<TaskManagement />} />
            // ]}
          />
        ]}
      />
      <Route
        path="/project/:id"
        element={<ProjectIndex />}
        children={[
          <Route index={true} element={<ProjectOverview />} />,
          <Route path="task-management" element={<TaskManagement />} />,
          <Route path="calendar" element={<Calendar />} />
        ]}
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
          <Route path="accounts" element={<AccountsManagement />} />,
          <Route path="projects" element={<ProjectManagement />} />
        ]}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
