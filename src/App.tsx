import { Slide } from "./Components/Slide";
import { UseState, UseStateCode } from "./examples/UseState";
import MonkeyAction from "./assets/monkeyAction.gif";
import { UseReducer, UseReducerCode } from "./examples/UseReducer";
import { TextSection } from "./Components/TextSection";
import { useEffect } from "react";
import { TransitionsSlide } from "./Components/TransitionsSlides";
import { CodeBlock } from "./Components/CodeBlock";

const App = () => {
  return (
    <div className="w-screen bg-black ">
      <div className="max-w-[1200px] m-auto">
        <TransitionsSlide
          background="data:image/jpeg;base64,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"
          title="State / Props"
        />

        <Slide>
          <TextSection>
            <h2 className="h2 text-white">Intro</h2>
            <p className="p ">
              React's state and props are fundamental concepts for building
              dynamic, interactive user interfaces.
            </p>
            <ul className="ul">
              <li>
                State refers to the internal data that a component can hold and
                update
              </li>
              <li>
                Props are passed down to a component from its parent component.
              </li>
              <li>
                State and props enable developers to create reusable, modular
                components that can be easily customized and updated.
              </li>
              <li>
                By using state and props, developers can build complex
                applications with ease while making their code more maintainable
                and scalable.
              </li>
            </ul>
          </TextSection>
          <img src={MonkeyAction} className="h-3/4" />
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">Props</h2>
            <p className="p">
              React props are used to pass data between components, allowing for
              communication between parent and child components. They are
              essentially a component's configuration and are passed as
              attributes to a component. Props are read-only and provide a way
              to make components reusable and customizable without rewriting
              code.
            </p>
          </TextSection>
          <CodeBlock fileName="props Example">
            {`const CustomButton = ({name} : {name: string}) => {
  return <button>{name}</button>;
}
const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <CustomButton name={name} />
    </div>
  );
}`}
          </CodeBlock>
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">useState</h2>
            <p className="p">
              The useState hook is a built-in React hook that allows for state
              management in functional components. It accepts an initial state
              value and returns an array with the current state value and a
              function to update the state. This allows the component to
              re-render when the state is updated, changing the view of the user
              interface.
            </p>
          </TextSection>
          <UseStateCode />
        </Slide>
        <Slide vertical={true}>
          <TextSection>
            <h2 className="h2">UseState Example</h2>
          </TextSection>
          <UseState />
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">useReducer</h2>
            <p className="p">
              The useReducer hook is another built-in React hook that allows for
              more complex state management. It works similarly to the useState
              hook, but uses a reducer function to update the state based on
              dispatched actions. The useReducer hook is useful when the state
              has complex logic, and when the state update depends on the
              previous state.
            </p>
          </TextSection>
          <UseReducerCode />
        </Slide>
        <Slide vertical={true}>
          <TextSection>
            <h2 className="h2">UseReducer Example</h2>
          </TextSection>
          <UseReducer />
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">useMemo</h2>
            <p className="p">
              The useMemo hook is used for optimizing performance by memoizing
              expensive computations. It accepts a function and an array of
              dependencies and only re-computes the result when the dependencies
              change. The useMemo hook is useful when the computation is
              expensive and has to be called several times.
            </p>
          </TextSection>
          <UseReducerCode />
        </Slide>
        <Slide>
          <TextSection>
            <h2 className="h2">useMemo Example</h2>
          </TextSection>
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">useCallback</h2>
            <p className="p">
              The useCallback hook is also used for performance optimization by
              memoizing functions. It accepts a function and an array of
              dependencies and only re-creates the function when the
              dependencies change. This is useful when the function needs to be
              passed down to child components, and the child components should
              only re-render when the function is updated.
            </p>
          </TextSection>
          <CodeBlock fileName="UseCallback Syntax">
            {`useCallback( () => { /* function to be memoized */ } , [/* dependcies */])`}
          </CodeBlock>
        </Slide>

        <Slide>
          <TextSection>
            <h2 className="h2">useContext</h2>
            <p className="p">
              The useContext hook is used for accessing context values in nested
              components. It accepts a context object created by the
              createContext function and returns the current value of the
              context. Context is a way of passing down data through the
              component tree without having to pass props manually at every
              level.
            </p>
          </TextSection>
          <CodeBlock>{`/* Example */`}</CodeBlock>
        </Slide>
      </div>
    </div>
  );
};

export default App;
