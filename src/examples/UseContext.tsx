import { AiOutlineArrowRight } from "react-icons/ai";
import { CodeBlock } from "../Components/CodeBlock";

export const UseContextExample = () => {
  return (
    <>
      <CodeBlock fileName="App.tsx (Creating Context)">
        {`const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => undefined,
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (dark) => {
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
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <NavBar />
        <StateAndProps />
      </DarkModeContext.Provider>
    </div>
  );
};
`}
      </CodeBlock>
      <CodeBlock fileName="StateAndProps.tsx (using Context)">
        {`import { DarkModeContext } from "../App";
import { useContext } from "react";
...
const { darkMode, toggleDarkMode } = useContext(DarkModeContext);`}
      </CodeBlock>
    </>
  );
};
