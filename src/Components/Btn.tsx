import { MouseEventHandler, ReactNode } from "react";

interface BtnPropType {
  children?: ReactNode | ReactNode[];
  onclick?: MouseEventHandler;
  rounded?: boolean | undefined;
}

export const Btn = ({ children, onclick, rounded }: BtnPropType) => {
  return (
    <button
      onClick={(e) => onclick && onclick(e)}
      className={`focus:outline-none bg-white bg-opacity-10 w-fit
      text-white 
      ${
        rounded
          ? "rounded-[50%] aspect-square p-4"
          : "bg-white bg-opacity-10 px-8 py-2 rounded-lg"
      }
      `}
    >
      {children}
    </button>
  );
};
