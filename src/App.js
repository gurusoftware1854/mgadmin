import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { StoreProvider } from "./context/storeContext";
import { ThemeProvider } from "./context/themeContext";
import { SearchProvider } from "./context/searchbarContext";
import { SchemeProvider } from "./context/schemeContext";

const App = () => {

  return (
    <Router>
      <SchemeProvider>
        <ThemeProvider>
          <SearchProvider>
            <StoreProvider>
              <AppRoutes />
            </StoreProvider>
          </SearchProvider>
        </ThemeProvider>
      </SchemeProvider>
    </Router>
  );
};

export default App;
