import { CodeBlock } from "../Components/CodeBlock";

export const UseRefExample = () => {
  return (
    <CodeBlock>
      {`import React, { useRef, useState } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Access the input element's value using inputRef
    const inputValue = inputRef.current.value;
    console.log(\`Input value: \${inputValue}\`);

    // Increment the count value using setCount
    setCount(count + 1);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
}
`}
    </CodeBlock>
  );
};
