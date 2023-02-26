import { ReactNode, useEffect } from "react";

interface SlideProps {
  children?: ReactNode;
  reversed?: boolean;
  isBeginning?: boolean;
  isFinal?: boolean;
  vertical?: boolean;
}
const slide = (direction: "up" | "down", scroll: number) => {
  const down =
    scroll + document.documentElement.clientHeight > document.body.scrollHeight
      ? document.body.scrollHeight - document.documentElement.clientHeight
      : scroll + document.documentElement.clientHeight;
  const up =
    scroll - document.documentElement.clientHeight <= 0
      ? 0
      : scroll - document.documentElement.clientHeight;
  const scrollValue = direction === "down" ? down : up;
  window.scrollTo({ behavior: "smooth", top: scrollValue });
  return scrollValue;
};
export const Slide = ({
  children,
  reversed,
  isBeginning,
  isFinal,
  vertical,
}: SlideProps) => {
  let scroll = 0;
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
        scroll = slide("down", scroll);
      else if (!e.shiftKey && (e.key === "ArrowUp" || e.key === "w"))
        scroll = slide("up", scroll);
    });
  }, []);
  return (
    <section
      className={`flex w-full
    h-screen overflow-clip
    slide items-center justify-center p-4 gap-4 relative
    ${vertical ? "flex-col" : ""}`}
    >
      {!isBeginning && (
        <button
          onClick={() => slide("up", scroll)}
          className="absolute bottom-[97%] left-[95%] transform -translate-x-1/2 translate-y-full p-4 bg-white bg-opacity-10 rounded-full aspect-square"
        >
          <span className="material-symbols-outlined text-white">
            arrow_upward
          </span>
        </button>
      )}
      {children}
      {!isFinal && (
        <button
          onClick={() => slide("up", scroll)}
          className="absolute top-[97%] left-[95%] transform -translate-x-1/2 -translate-y-full p-4 bg-white bg-opacity-10 rounded-full aspect-square"
        >
          <span className="material-symbols-outlined text-white">
            arrow_downward
          </span>
        </button>
      )}
    </section>
  );
};
