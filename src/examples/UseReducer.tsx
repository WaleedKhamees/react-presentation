import { useReducer } from "react";
import { CodeBlock } from "../Components/CodeBlock";

export const UseReducerCode = () => (
  <CodeBlock fileName="UseReducer.tsx (Ignore Types)">{`const InitialState = {
    number: 0,
  };
  type ActionType = { type: "Increment" } | { type: "decrement" };
  
  const reducer = (
    state: typeof InitialState,
    action: ActionType
  ): typeof InitialState => {
    switch (action.type) {
      case "Increment":
        return { number: state.number + 1 };
      case "decrement":
        return { number: state.number - 1 };
      default:
        throw new Error("Invalid Action Type");
    }
  };
  export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
      <div>
        <h2>{state.number}</h2>
        <div>
          <button onClick={() => dispatch({type:"Increment"})}>{" + "}</button>
          <button onClick={() => dispatch({type: "decrement"})}>{" - "}</button>
        </div>
      </div>
    );
  };`}</CodeBlock>
);

const InitialState = {
  number: 0,
};
type ActionType = { type: "Increment" } | { type: "decrement" };

const reducer = (
  state: typeof InitialState,
  action: ActionType
): typeof InitialState => {
  switch (action.type) {
    case "Increment":
      return { number: state.number + 1 };
    case "decrement":
      return { number: state.number - 1 };
    default:
      throw new Error("Invalid Action Type");
  }
};
export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="h2">{state.number}</h2>
      <div className="flex gap-4">
        <button
          className="btn text-lg bg-white bg-opacity-10 px-8 py-2"
          onClick={() => dispatch({ type: "Increment" })}
        >
          {" + "}
        </button>
        <button
          className="btn text-lg bg-white bg-opacity-10 px-8 py-2"
          onClick={() => dispatch({ type: "decrement" })}
        >
          {" - "}
        </button>
      </div>
    </div>
  );
};
