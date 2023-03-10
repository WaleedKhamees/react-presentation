import { Link } from "react-router-dom";
import { Btn } from "../Components/Btn";
import { TransitionsSlide } from "../Components/TransitionsSlides";

export const NotFound = () => {
  return (
    <TransitionsSlide title="404 Page Not Found">
      <Link to={"/"}>
        <Btn rectangle>HomePage</Btn>
      </Link>
    </TransitionsSlide>
  );
};
