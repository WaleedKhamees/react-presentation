import { HTMLAttributes, ReactNode } from "react";
import { Slide } from "./Slide";
import { TextSection } from "./TextSection";

interface TransitionsSlideTypes extends HTMLAttributes<HTMLDivElement> {
  background?: string;
  title: string;
  children?: ReactNode;
}
export const TransitionsSlide = ({
  background,
  title,
  children,
}: TransitionsSlideTypes) => {
  return (
    <div
      className={`flex flex-col w-screen h-screen items-center justify-center react-gradient`}
    >
      <h1 className="display text-white mb-[0.25em]">{title}</h1>
      {children}
    </div>
  );
};
