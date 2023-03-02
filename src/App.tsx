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
    <div className="bg-reactDark3 relative">
      <nav className="fixed left-full -translate-x-full z-20">
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
      <TransitionsSlide
        background="https://i.imgur.com/W9W6bbW.jpg"
        title="State / Props"
      >
        <div className="flex items-center gap-4">
          <svg
            width="140"
            height="74"
            viewBox="0 0 140 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="walid"
              d="M1.66489 36.8807C3.69072 44.7814 5.00749 52.8056 6.27938 60.8609C6.75649 63.8826 7.17971 66.9144 7.64103 69.9386C7.6879 70.2458 7.74957 72.037 7.86798 71.8298C8.34367 70.9973 9.07378 70.5372 9.75916 69.9008C11.0909 68.6642 10.4909 65.986 10.5156 64.4164C10.6123 58.2785 12.7302 53.3575 13.8441 47.5092C14.3671 44.7637 14.4331 41.5865 16.3027 39.3014C17.9694 37.2642 17.4924 44.9335 17.6265 45.7314C18.8913 53.2602 23.3725 59.782 25.9855 66.8371C26.8482 69.1664 27.5295 64.8584 27.6876 63.9625C29.2081 55.3462 32.7476 47.1742 34.5715 38.6206C35.0487 36.3826 35.7062 29.5619 35.7062 31.8501C35.7062 36.8992 38.7869 41.1726 41.5311 45.1641C42.5473 46.6422 45.3403 53.2708 46.4482 51.1781C48.05 48.1523 56.8481 42.4605 53.786 43.9916C48.7735 46.4978 46.8647 53.3314 45.9943 58.5537C45.1781 63.4509 52.1017 57.9162 53.3699 56.9651C54.9439 55.7846 54.4705 50.9834 55.6015 49.2869C56.5226 47.9053 55.5503 49.8279 55.488 50.2325C55.0535 53.0568 54.7628 55.4989 55.4502 58.2889C56.1168 60.9946 56.3595 64.0294 59.3839 64.9459C63.2875 66.1288 65.9469 65.7023 66.7217 61.6174C69.7049 45.8879 70.4284 30.1636 70.4284 14.2243C70.4284 6.8473 71.2736 28.9544 71.79 36.3133C72.1184 40.9918 72.6096 47.7596 75.1942 51.8211C76.183 53.3749 82.202 59.7232 84.0449 59.1967C85.5932 58.7543 86.5309 55.7376 87.1465 54.5065C89.0127 50.774 91.1958 47.0845 92.2149 43.0081C92.3499 42.468 93.7981 35.5507 93.047 35.4434C92.8594 35.4166 92.8957 39.698 92.8957 40.0579C92.8957 47.9324 94.1218 56.4135 99.9687 62.2604C101.601 63.8925 108.882 56.6052 110.295 55.4143C112.336 53.6931 113.602 51.3983 114.985 49.1356C116.483 46.6844 118.16 44.5132 119.675 42.1004C121.653 38.9493 122.416 35.5791 119.448 40.6252C116.72 45.2631 114.682 51.6336 114.682 57.0029C114.682 61.6005 116.693 64.0364 119.448 60.1801C124.951 52.4755 128.979 45.9602 128.979 35.8973C128.979 28.831 127.967 21.4494 129.32 14.4134C129.845 11.6826 129.514 8.92005 129.812 6.16784C129.919 5.17717 131.037 -0.12259 130.303 3.17977C129.021 8.94944 131.209 16.6204 131.854 22.5077C132.444 27.8895 132.808 33.5463 133.064 38.9232C133.391 45.7719 133.855 53.3856 137.83 59.348"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <svg
            width="156"
            height="64"
            viewBox="0 0 156 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="maher"
              d="M2.50569 32.078C3.35727 41.4454 2.50569 69.7021 2.50569 60.2961C2.50569 52.2719 -0.0760875 39.1555 6.42753 32.8432C11.3761 28.0402 15.8888 47.2455 16.0886 49.1045C16.2554 50.6555 17.7385 59.112 17.1409 58.096C13.8559 52.5115 16.1979 42.5081 16.28 36.4781C16.3578 30.7572 15.5774 16.4986 23.5497 24.7126C28.8517 30.1752 33.0675 35.1454 35.2196 42.4087C35.9498 44.873 36.0805 47.1891 36.0805 49.7262C36.0805 51.4158 34.2129 51.3593 33.6891 52.9307C32.1279 57.6142 33.9019 52.7764 34.837 51.9263C37.4512 49.5497 41.0297 49.6456 44.3068 48.8653C48.7521 47.8069 52.1504 45.9561 53.3461 40.9738C53.8485 38.8805 56.0853 35.5601 54.3505 33.6084C53.1408 32.2475 52.4436 36.6552 52.3896 37.1955C51.5802 45.2897 47.3416 50.9321 52.82 57.9047C56.4565 62.533 57.6028 52.4669 57.6028 50.5393C57.6028 48.077 58.4637 45.791 58.4637 43.3174C58.4637 41.9446 57.4817 39.9342 57.7941 38.7738C58.1832 37.3285 58.9447 34.2358 59.2767 37.7216C59.6412 41.5482 60.0345 45.3734 61.0463 49.1045C61.8393 52.0286 61.965 53.1919 64.9203 51.8785C66.3603 51.2385 69.5485 51.5541 70.3248 50.1567C71.6615 47.7506 72.1222 45.1555 72.2858 42.4565C72.9375 31.703 73.7709 21.0061 71.8075 10.3165C71.6003 9.18851 70.5819 -0.297284 71.1857 2.52068C72.9296 10.6589 77.2087 17.8957 79.412 26.0039C80.7115 30.7859 81.1451 35.5163 81.7556 40.3999C82.0598 42.8341 83.3653 45.1327 83.4295 47.574C83.4705 49.1306 82.5686 53.7226 82.5686 52.1654C82.5686 42.8378 81.8606 24.1878 94.1907 35.5694C100.338 41.2439 107.655 42.555 116.096 41.4999C121.596 40.8124 115.028 33.8734 114.422 32.5084C112.635 28.4877 108.455 38.537 107.534 39.826C104.674 43.8302 107.439 52.7909 111.169 55.322C114.16 57.3513 121.765 53.8525 122.17 50.348C122.603 46.5965 126.027 43.2154 126.474 38.9651C126.775 36.1068 129.057 27.8647 129.057 30.7388C129.057 34.1067 128.95 37.1753 128.244 40.3521C127.429 44.0186 129.486 49.0707 130.109 52.7394C130.208 53.3228 131.356 59.6433 130.348 57.4264C129.271 55.0562 130.352 44.4335 131.257 41.9782C133.642 35.5041 140.369 37.5341 144.983 35.0911C148.687 33.1305 149.521 31.1779 151.631 27.5822C153.106 25.0702 154.787 19.0771 154.023 25.1908"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </TransitionsSlide>

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
        <img src={MonkeyAction} className="max-w-full hidden md:block" />
      </Slide>

      <Slide>
        <TextSection>
          <h2 className="h2">Props</h2>
          <p className="p">
            React props are used to pass data between components, allowing for
            communication between parent and child components. They are
            essentially a component's configuration and are passed as attributes
            to a component. Props are read-only and provide a way to make
            components reusable and customizable without rewriting code.
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
            function to update the state. This allows the component to re-render
            when the state is updated, changing the view of the user interface.
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
            dispatched actions. The useReducer hook is useful when the state has
            complex logic, and when the state update depends on the previous
            state.
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
            change. The useMemo hook is useful when the computation is expensive
            and has to be called several times.
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
            dependencies and only re-creates the function when the dependencies
            change. This is useful when the function needs to be passed down to
            child components, and the child components should only re-render
            when the function is updated.
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
            components. It accepts a context object created by the createContext
            function and returns the current value of the context. Context is a
            way of passing down data through the component tree without having
            to pass props manually at every level.
          </p>
        </TextSection>
        <CodeBlock>{`/* Example */`}</CodeBlock>
      </Slide>
    </div>
  );
};

export default App;
