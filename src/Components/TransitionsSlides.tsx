import { HTMLAttributes, ReactNode } from "react";

interface TransitionsSlideTypes extends HTMLAttributes<HTMLDivElement> {
  background?: string;
  title: string;
  children?: ReactNode;
}
export const TransitionsSlide = ({
  title,
  children,
  className,
  background,
}: TransitionsSlideTypes) => {
  return (
    <div
      className={`flex flex-col w-screen h-screen items-center justify-center relative ${className}`}
    >
      <h1 className="display text-white mb-[0.25em] z-20">{title}</h1>
      {children}
    </div>
  );
};
