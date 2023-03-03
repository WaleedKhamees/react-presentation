import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface BtnPropType extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactNode[];
  rounded?: boolean | undefined;
  rectangle?: boolean | undefined;
}

export const Btn = ({
  children,
  rounded,
  onClick,
  className,
  rectangle,
}: BtnPropType) => {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`focus:outline-none dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10 min-w-fit
      dark:text-white dark:fill-white text-black fill-black
      ${rounded ? "rounded-full aspect-square p-4" : ""} 
      ${rectangle ? "px-8 py-2 rounded-lg" : ""}  
      ${className} 
      `}
    >
      {children}
    </button>
  );
};
