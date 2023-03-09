import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface OverView {
  path: string;
  header: string;
  children?: ReactNode | ReactNode[];
}
export const OverView = ({ children, header, path }: OverView) => {
  return (
    <div
      className="rounded-lg p-4 border dark:border-white
     border-black dark:border-opacity-20
      border-opacity-20 flex flex-col justify-between"
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
