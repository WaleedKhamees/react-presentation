import { CodeBlock } from "../Components/CodeBlock";

export const UseMemoExample = () => {
  return (
    <CodeBlock fileName="UseMemo.tsx">
      {`export const UseMemo = () => {
  const [number, setNumber] = useState(100);

  const data = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

  const processedData = useMemo(() => {
    const result = data.map((item) => Math.round(Math.log(item ** number)));
    return result;
  }, [number, data]);

  return (
    <div>
      <div>
        <h2>Some Random numbers</h2>
        <ul>
          {processedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Another State</h2>
        <h2>{number}</h2>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
    </div>
  );
};
`}
    </CodeBlock>
  );
};

import { useMemo, useState } from "react";
import { Btn } from "../Components/Btn";

export const UseMemo = ({ data }: { data: number[] }) => {
  const [number, setNumber] = useState(100);

  const processedData = useMemo(() => {
    return data.sort((a, b) => a - b);
  }, [data]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <h2 className="h2 text-center">Some Random numbers</h2>
        <ul className="flex gap-2 flex-wrap justify-center">
          {processedData.map((item, index) => (
            <li className="p" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="h2 text-center">Another State</h2>
        <h2 className="h2 text-center">{number}</h2>
        <Btn rectangle onClick={() => setNumber(number + 1)}>
          +
        </Btn>
      </div>
    </div>
  );
};
