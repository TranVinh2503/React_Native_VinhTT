import { createContext } from "react";
export const HomeAContext = createContext();
export function HomeAContextProvider({ children }) {
  return (
    <HomeAContext.Provider value={{ param1: "X", param2: "Y" }}>
      {children}
    </HomeAContext.Provider>
  );
}

