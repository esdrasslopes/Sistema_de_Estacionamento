import { createContext, useState } from "react";

export const ParkContext = createContext();

export const ParkContextProvider = ({ children }) => {
  const [data, setData] = useState({ login: false, id: null });

  const [user, setUser] = useState(false);
  return (
    <ParkContext.Provider value={{ data, setData, user, setUser }}>
      {children}
    </ParkContext.Provider>
  );
};
