import { Slide } from "./Slide";
import { TextSection } from "./TextSection";

interface TransitionsSlideTypes {
  background?: string;
  title: string;
}
export const TransitionsSlide = ({
  background,
  title,
}: TransitionsSlideTypes) => {
  return (
    <Slide isBeginning={true}>
      <div className="relative flex flex-col w-full h-full items-center justify-center">
        <h1 className="display text-white z-20">{title}</h1>
        <img
          src={background}
          alt="background"
          className="absolute w-screen h-full rounded-xl"
        />
      </div>
    </Slide>
  );
};
