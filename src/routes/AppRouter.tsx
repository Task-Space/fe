import { Route, Routes } from "react-router-dom";
import { Homepage, Login, ProjectOverview, Register } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/project-overview" element={<ProjectOverview />} />
    </Routes>
  );
};

export default AppRouter;
