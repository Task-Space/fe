import { Route, Routes } from "react-router-dom";
import { Homepage, Login, ProjectOverview, Register } from "../pages";
import TaskManagement from "../pages/TaskManagement/TaskManagement";
import ProjectIndex from "../pages/ProjectIndex/ProjectIndex";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/project"
        element={<ProjectIndex />}
        children={[
          <Route index={true} element={<ProjectOverview />} />,
          <Route path="task-management" element={<TaskManagement />} />
        ]}
      />
    </Routes>
  );
};

export default AppRouter;
