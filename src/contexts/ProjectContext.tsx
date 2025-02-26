import { createContext, useContext } from "react";
import { IProject } from "../types/project";

const ProjectContext = createContext<{
  project: IProject | undefined;
  isMember: boolean;
}>({
  project: undefined,
  isMember: false
});

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error(
      "useProjectContext must be used within ProjectContext.Provider"
    );
  }
  return context;
};

export { ProjectContext, useProjectContext };
