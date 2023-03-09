import { StateAndProps } from "./pages/StateAndProps";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { NavBar } from "./Components/NavBar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: (dark: boolean) => void;
};
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => undefined,
});
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = (dark: boolean) => {
    setDarkMode(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") toggleDarkMode(true);
    else if (localStorage.getItem("theme") === "light") toggleDarkMode(false);
    else {
      localStorage.setItem("theme", "dark");
      toggleDarkMode(true);
    }
  }, []);
  return (
    <Router>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div
          className="bg-white relative flex flex-col items-center gap-12
          md:gap-0
          dark:bg-reactDark3"
        >
          <NavBar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stateprops" element={<StateAndProps />} />
            </Routes>
          </Wrapper>
        </div>
      </DarkModeContext.Provider>
    </Router>
  );
};

export default App;
