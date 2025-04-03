import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null); // Ensure non-null default value

export const ThemeProvider = ({ children }) => {
  const [isMonochromeModeEnabled, setIsMonochromeModeEnabled] = useState(true);
console.log(isMonochromeModeEnabled)
  const toggleMonochromeMode = () => {
    setIsMonochromeModeEnabled((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isMonochromeModeEnabled, toggleMonochromeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};



export const useTheme = () => useContext(ThemeContext);

