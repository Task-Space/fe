import { createContext, useContext } from "react";
import { IUser } from "../types/user";

const AppContext = createContext<{
  profile: IUser | undefined;
}>({
  profile: undefined
});

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContext.Provider");
  }
  return context;
};

export { AppContext, useAppContext };
