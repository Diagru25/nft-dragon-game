"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [nofBuyPolyragon, setNofBuyPolyragon] = useState(0);
  const [isShowRefLink, setIsShowRefLink] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        nofBuyPolyragon,
        setNofBuyPolyragon,
        isShowRefLink,
        setIsShowRefLink,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
