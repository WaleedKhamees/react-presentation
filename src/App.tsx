import { Slide } from "./Components/Slide";
import { UseState, UseStateCode } from "./examples/UseState";
import MonkeyAction from "./assets/monkeyAction.gif";
import { UseReducer, UseReducerCode } from "./examples/UseReducer";
import { TextSection } from "./Components/TextSection";
import { useEffect } from "react";
import { TransitionsSlide } from "./Components/TransitionsSlides";
import { CodeBlock } from "./Components/CodeBlock";
import { slide } from "./util/slide";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  return (
    <div className="bg-black relative">
      <nav className="fixed left-full -translate-x-full">
        <div className="flex flex-col justify-between items-center h-screen p-4">
          <button
            onClick={() => slide("up")}
            className="focus:outline-none p-4 bg-white bg-opacity-10 rounded-[50%] aspect-square w-fit"
          >
            <AiOutlineArrowUp className="text-white" />
          </button>

          <button
            onClick={() => slide("down")}
            className="p-4 bg-white bg-opacity-10 rounded-[50%] aspect-square w-fit"
          >
            <AiOutlineArrowDown className="text-white" />
          </button>
        </div>
      </nav>
      <div className="max-w-[1200px] m-auto">
        <TransitionsSlide
          background="https://i.imgur.com/W9W6bbW.jpg"
          title="State / Props"
          subtitle="Walid Khamees & Mohamed Maher"
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
