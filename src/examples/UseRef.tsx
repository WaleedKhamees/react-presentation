import { CodeBlock } from "../Components/CodeBlock";
import React, { FormEvent, useRef, useState } from "react";
import { Btn } from "../Components/Btn";

export const UseRefCodeExample = () => {
  return (
    <CodeBlock fileName="UseRef.tsx">
      {`export const UseRefExample = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value as string;
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
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleClick = (e: FormEvent) => {
    // Access the input element's value using inputRef
    e.preventDefault();
    // @ts-expect-error
    const inputValue = inputRef.current?.value as string;
    setMessage("User Entered : " + inputValue);
  };

  return (
    <form className="flex flex-col gap-4 justify-center">
      <input
        type="text"
        ref={inputRef}
        className="dark:bg-white dark:bg-opacity-20 dark:text-white  
        py-2 px-4 rounded-lg outline-none"
      />
      <p className="p text-center">{message}</p>
      <Btn rectangle onClick={handleClick}>
        Click me!
      </Btn>
    </form>
  );
};
