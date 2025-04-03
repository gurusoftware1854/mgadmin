import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchbarActive, setIsSearchbarActive] = useState(false);
  console.log(isSearchbarActive)

  return (
    <SearchContext.Provider value={{ isSearchbarActive, setIsSearchbarActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
