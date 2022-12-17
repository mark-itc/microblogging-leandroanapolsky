import { createContext } from "react";

export const testContext = createContext();

export default function TestContextProvider({ children }) {
  const contextValue = "I did it!!!";

  return (
    <testContext.Provider value={{ contextValue }}>
      {children}
    </testContext.Provider>
  );
}
