import { CodeBlock } from "../../Components/CodeBlock";
import React, { FormEvent, useRef, useState } from "react";
import { Btn } from "../../Components/Btn";

export const UseRefCodeExample = () => {
  return (
    <CodeBlock fileName="UseRef.tsx">
      {`export const UseRefExample = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    setMessage("User Entered : " + inputValue);
  };

  return (
    <form>
      <input
        type="text"
        ref={inputRef}
      />
      <p>{message}</p>
      <Btn rectangle onClick={handleClick}>
        Click me!
      </Btn>
    </form>
  );
};
`}
    </CodeBlock>
  );
};

export const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value as string;
    setMessage("User Entered : " + inputValue);
  };

  return (
    <form className="flex flex-col gap-4 justify-center">
      <h2 className="h2 text-center">useRef Example</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Something"
        className="dark:bg-white dark:bg-opacity-10 dark:text-white  dark:border-white dark:border-opacity-10
        bg-black bg-opacity-10 text-black border-black border-opacity-10
        py-2 px-4 rounded-lg outline-none border-2"
      />
      <p className="p text-center">{message}</p>
      <Btn rectangle onClick={handleClick}>
        Click me!
      </Btn>
    </form>
  );
};
