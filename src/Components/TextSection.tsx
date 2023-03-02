import { ReactNode } from "react";

export const TextSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`flex flex-col justify-center w-fit `}>{children}</div>
  );
};
