"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_TYPE_DRAGON } from "@/constants/common.constant";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [typeOfDragon, setTypeOfDragon] = useState("");

  useEffect(() => {
    const valueTypeDragon = localStorage.getItem(LOCAL_STORAGE_TYPE_DRAGON);
    if (valueTypeDragon) {
      setTypeOfDragon(valueTypeDragon);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ typeOfDragon, setTypeOfDragon }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
