import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  console.log(isSidebarExpanded)

  return (
    <StoreContext.Provider value={{ isSidebarExpanded, setIsSidebarExpanded }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
