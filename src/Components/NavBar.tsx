import { useContext } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../App";
import { slide } from "../util/slide";
import { Btn } from "./Btn";

export const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <nav className="fixed left-full -translate-x-full z-20 hidden md:block">
        <div className="flex flex-col justify-between items-center h-screen p-4">
          <Btn onClick={() => slide("up")} rounded>
            <AiOutlineArrowUp />
          </Btn>
          <ul className="flex flex-col items-center gap-4">
            <Link to="/">
              <Btn rounded>
                <AiOutlineHome />
              </Btn>
            </Link>
            {darkMode ? (
              <Btn rounded onClick={() => toggleDarkMode(false)}>
                <BsSun />
              </Btn>
            ) : (
              <Btn rounded onClick={() => toggleDarkMode(true)}>
                <BsMoon />
              </Btn>
            )}
          </ul>
          <Btn rounded onClick={() => slide("down")}>
            <AiOutlineArrowDown />
          </Btn>
        </div>
      </nav>
      <nav className="w-screen md:hidden p-4 fixed z-20">
        <ul className="flex gap-4 justify-between">
          <Link to="/">
            <Btn className="p-4 rounded-full">
              <AiOutlineHome />
            </Btn>
          </Link>
          {darkMode ? (
            <Btn
              className="p-4 rounded-full"
              onClick={() => toggleDarkMode(false)}
            >
              <BsSun />
            </Btn>
          ) : (
            <Btn
              className="p-4 rounded-full"
              onClick={() => toggleDarkMode(true)}
            >
              <BsMoon />
            </Btn>
          )}
        </ul>
      </nav>
    </>
  );
};
