import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface OverView {
  path: string;
  header: string;
  children?: ReactNode | ReactNode[];
  className?: string;
}
export const OverView = ({ children, header, path, className }: OverView) => {
  return (
    <div
      className={`rounded-lg p-4 border dark:border-white
     border-black dark:border-opacity-10
      border-opacity-10 flex flex-col justify-between ${className}`}
    >
      <h3 className="h3">{header}</h3>
      <p className="p">{children}</p>
      <Link to={path} className="a flex items-center gap-2">
        <p className="">Slides</p>
        <BsArrowRight className="inline" />
      </Link>
    </div>
  );
};
