import { HTMLAttributes } from "react";
import { Slide } from "./Slide";
import { TextSection } from "./TextSection";

interface TransitionsSlideTypes extends HTMLAttributes<HTMLDivElement> {
  background?: string;
  title: string;
  subtitle: string;
}
export const TransitionsSlide = ({
  background,
  title,
  subtitle,
}: TransitionsSlideTypes) => {
  return (
    <Slide isBeginning={true}>
      <div
        className={`relative flex flex-col w-full h-full items-center justify-center `}
      >
        <h1 className="display text-white z-20 mb-[0.25em]">{title}</h1>
        <h2 className="h2 z-20">{subtitle}</h2>
        {background && (
          <img
            src={background}
            alt="background"
            className="absolute w-full h-full rounded-xl"
          />
        )}
      </div>
    </Slide>
  );
};
