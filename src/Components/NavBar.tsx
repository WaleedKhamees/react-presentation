import { useContext } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineHome,
} from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../App";
import { slide } from "../util/slide";
import { Btn } from "./Btn";

export const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="fixed left-full -translate-x-full z-20 hidden lg:block">
      <div className="flex flex-col justify-between items-center h-screen p-4">
        <Btn
          Attributes={{
            onClick: () => slide("up"),
          }}
          rounded
        >
          <AiOutlineArrowUp />
        </Btn>
        <ul className="flex flex-col items-center gap-4">
          <Link to="/">
            <Btn rounded>
              <AiOutlineHome />
            </Btn>
          </Link>
          {darkMode ? (
            <Btn
              rounded
              Attributes={{
                onClick: () => toggleDarkMode(false),
              }}
            >
              <BsSun />
            </Btn>
          ) : (
            <Btn
              rounded
              Attributes={{
                onClick: () => toggleDarkMode(true),
              }}
            >
              <BsMoon />
            </Btn>
          )}
        </ul>
        <Btn
          rounded
          Attributes={{
            onClick: () => slide("down"),
          }}
        >
          <AiOutlineArrowDown />
        </Btn>
      </div>
    </nav>
  );
};
