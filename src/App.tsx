import { StateAndProps } from "./pages/StateAndProps";
import { createContext, useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Routing } from "./pages/Routing";
import { SlideToTopWrapper } from "./util/SlideToTopWrapper";
import { NotFound } from "./pages/NotFound";
import { JSXAndComponents } from "./pages/JSXAndComponents";
import { Intro } from "./pages/Intro";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: (dark: boolean) => void;
};
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => undefined,
});

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
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <main className="bg-white relative flex flex-col items-center gap-12 md:gap-0 dark:bg-reactDark3">
        <NavBar />
        <SlideToTopWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/jsxandcomponents" element={<JSXAndComponents />} />
            <Route path="/state" element={<StateAndProps />} />
            <Route path="/routing" element={<Routing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SlideToTopWrapper>
      </main>
    </DarkModeContext.Provider>
  );
};

export default App;
