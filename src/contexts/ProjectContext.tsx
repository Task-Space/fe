import { createContext, useContext } from "react";
import { IProject } from "../types/project";

const ProjectContext = createContext<{ project: IProject | undefined }>({
  project: undefined
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
