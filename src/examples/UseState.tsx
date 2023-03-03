import { useState } from "react";
import { Btn } from "../Components/Btn";
import { CodeBlock } from "../Components/CodeBlock";

export const UseStateCode = () => (
  <CodeBlock fileName="UseState.tsx before styling">{`export const UseState = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}> + </button>
      <button onClick={() => setNumber(number - 1)}> - </button>
    </div>
  );
};`}</CodeBlock>
);

export const UseState = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="h2">UseState Example</h2>
      <h2 className="h2">{number}</h2>
      <div className="flex gap-4">
        <Btn rectangle onClick={() => setNumber(number + 1)}>{" + "}</Btn>
        <Btn rectangle onClick={() => setNumber(number - 1)}>{" - "}</Btn>
      </div>
    </div>
  );
};
