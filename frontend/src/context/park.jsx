import { createContext, useState } from "react";

export const ParkContext = createContext();

export const ParkContextProvider = ({ children }) => {
  const [data, setData] = useState({ login: false, id: null });
  return (
    <ParkContext.Provider value={{ data, setData }}>
      {children}
    </ParkContext.Provider>
  );
};
