import { HTMLAttributes, ReactNode } from "react";
interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | ReactNode[];
  vertical?: boolean | undefined;
}
export const Group: React.FC<GroupProps> = ({
  children,
  vertical,
  className,
}) => {
  return (
    <div
      className={`w-full flex flex-col 
      items-center justify-center gap-8 md:gap-4
      ${vertical ? "md:flex-col" : "md:flex-row"}
      ${className}
      `}
    >
      {children}
    </div>
  );
};
