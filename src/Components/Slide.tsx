import { ReactNode, useEffect } from "react";

interface SlideProps {
  children?: ReactNode;
  reversed?: boolean;
  isBeginning?: boolean;
  isFinal?: boolean;
  vertical?: boolean;
}
const slide = (direction: "up" | "down") => {
  const scrollValue =
    direction === "down"
      ? document.documentElement.clientHeight
      : 0 - document.documentElement.clientHeight;
  window.scrollBy({ behavior: "smooth", top: scrollValue });
};
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
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
          e.code
        ) > -1
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
    slide items-center justify-center py-4 gap-8 relative
    ${vertical ? "flex-col" : ""}`}
    >
      {!isBeginning && (
        <button
          onClick={() => slide("up")}
          className="absolute bottom-[98%] left-1/2 transform -translate-x-1/2 translate-y-full p-4 bg-white bg-opacity-10 rounded-full aspect-square"
        >
          <span className="material-symbols-outlined text-white">
            arrow_upward
          </span>
        </button>
      )}
      {children}
      {!isFinal && (
        <button
          onClick={() => slide("down")}
          className="absolute top-[98%] left-1/2 transform -translate-x-1/2 -translate-y-full p-4 bg-white bg-opacity-10 rounded-full aspect-square"
        >
          <span className="material-symbols-outlined text-white">
            arrow_downward
          </span>
        </button>
      )}
    </section>
  );
};
