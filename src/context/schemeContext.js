import React, { createContext, useContext, useState, useEffect } from "react";

const SchemeContext = createContext();

export const SchemeProvider = ({ children }) => {
  const [selectedScheme, setSelectedScheme] = useState("Mandal");
  const [schemeBackground, setSchemeBackground] = useState("#8b0000");
// console.log(selectedScheme)
  useEffect(() => {
    let backgroundColor = "";
    switch (selectedScheme) {
      case "Mandal":
        backgroundColor = "#8b0000"; 
        break;
      case "Dhanvarsha":
        backgroundColor = "#4CAF50"; 
        break;
      case "Sakhi":
        backgroundColor = "#2196F3"; 
        break;
      case "Kanchan":
        backgroundColor = "#FF5722"; 
        break;
      default:
        backgroundColor = "#FFFFFF"; 
    }
    // console.log(backgroundColor)
    setSchemeBackground(backgroundColor)
    document.body.style.backgroundColor = backgroundColor; 
  }, [selectedScheme]);

  return (
    <SchemeContext.Provider value={{ selectedScheme, setSelectedScheme ,schemeBackground}}>
      {children}
    </SchemeContext.Provider>
  );
};

export const useScheme = () => useContext(SchemeContext);
