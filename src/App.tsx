import { Slide } from "./Components/Slide";
import SvgReact from "./assets/react.svg";
import { UseState, UseStateCode } from "./examples/UseState";
import MonkeyAction from "./assets/monkeyAction.gif";
import { UseReducer, UseReducerCode } from "./examples/UseReducer";
import { TextSection } from "./Components/TextSection";

const App = () => {
  return (
    <div className="w-screen bg-black">
      <div className="max-w-[1050px] m-auto ">
        <Slide isBeginning={true}>
          <TextSection>
            <h1 className="display">State / Props</h1>
          </TextSection>
        </Slide>
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
          <img src={MonkeyAction} className="w-1/2" />
        </Slide>
        <Slide>
          <TextSection>
            <h1 className="h1">useState</h1>
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
            <h1 className="h1">UseState Example</h1>
          </TextSection>
          <UseState />
        </Slide>
        <Slide>
          <TextSection>
            <h1 className="h1">useReducer</h1>
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
            <h1 className="h1">UseReducer Example</h1>
          </TextSection>
          <UseReducer />
        </Slide>
      </div>
    </div>
  );
};

export default App;
