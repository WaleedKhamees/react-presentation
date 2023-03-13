import { CodeBlock } from "../../Components/CodeBlock";
import { DarkModeContext } from "../../App";
import { useContext } from "react";
import { FaGhost } from "react-icons/fa";
import { Group } from "../../Components/Group";

const Ghost = () => {
  const { darkMode } = useContext(DarkModeContext);
  if (darkMode)
    return (
      <>
        <FaGhost className="text-white" size={24} />
      </>
    );
  else return null;
};

export const UseContextExample = () => {
  return (
    <>
      <Group>
        <CodeBlock fileName="App.tsx (Creating Context)">
          {`const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => undefined,
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (dark) => {
    setDarkMode(!dark);
  };

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
          {`const Ghost = () => {
  const { darkMode } = useContext(DarkModeContext);
  if (darkMode)
    return (
      <>
        <FaGhost className="text-white" size={24} />
      </>
    );
  else return null;
};`}
        </CodeBlock>
      </Group>
      <Ghost />
    </>
  );
};
