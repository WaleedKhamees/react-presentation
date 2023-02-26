import { ReactNode } from "react";

export const TextSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col justify-center max-w-[50%] w-fit `}
    >
      {children}
    </div>
  );
};
