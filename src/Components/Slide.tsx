import { ReactNode, useEffect, useRef } from "react";
import { slide } from "../util/slide";
interface SlideProps {
  children?: ReactNode;
  reversed?: boolean;
  isBeginning?: boolean;
  isFinal?: boolean;
  vertical?: boolean;
}

export const Slide = ({
  children,
  reversed,
  isBeginning,
  isFinal,
  vertical,
}: SlideProps) => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (
        [
          "Space",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "PageDown",
          "PageUp",
        ].indexOf(e.code) > -1
      ) {
        e.preventDefault();
      }
    });
    return window.addEventListener("keydown", (e) => {
      if (!e.shiftKey && (e.key === "ArrowDown" || e.key === "s"))
        slide("down");
      else if (!e.shiftKey && (e.key === "ArrowUp" || e.key === "w"))
        slide("up");
    });
  }, []);
  return (
    <section
      className={`flex w-full
      h-screen overflow-clip
      slide items-center justify-center p-4 gap-4 
      ${vertical ? "flex-col" : ""}`}
    >
      {children}
    </section>
  );
};
