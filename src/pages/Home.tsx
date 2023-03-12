import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import { OverView } from "../Components/Overview";
import { Slide } from "../Components/Slide";

export const Home = () => {
  return (
    <>
      <Slide>
        <h1 className="display">React-CMP25</h1>
      </Slide>
      <Slide>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
          <OverView header="Introduction" path="/intro">
            Introduction React and client-side rendering and Document Object
            Model (DOM), create-react-app, Vite, and meta-frameworks such as
            Next. Additionally, gives an overview of the files included in an
            initial React project.
          </OverView>
          <OverView header="JSX / Components" path="/stateprops">
            dump and stateful components, HOCs, Render Props, Lifecycle Methods,
            Fragments, useEffect, array methods, and event handling. By the end,
            you will have a solid understanding of the core concepts and tools
            needed to create React App.
          </OverView>
          <OverView header="State & Props" path="/stateprops">
            The article covers state, props, and various hooks used for state
            management, performance optimization, context, and data fetching in
            React. Custom hooks are also discussed. Understanding these concepts
            is crucial for efficient React development.
          </OverView>
          <OverView header="Routing" path="/routing">
            React Router Dom is a library that enables routing in React
            applications. The library provides various components and hooks for
            building multi-page applications with client-side routing. The
            article covers the fundamental concepts of React Router Dom.
          </OverView>
          <OverView header="React Native" path="/reactnative">
            React Native is a JavaScript framework for building mobile
            applications on iOS and Android devices. It uses a native rendering
            engine to create components that look and behave like native mobile
            components.
          </OverView>
          <OverView
            header="Styling and Future Trends"
            path="/stylingfuturetrends"
          >
            The article covers state, props, and various hooks used for state
            management, performance optimization, context, and data fetching in
            React. Custom hooks are also discussed. Understanding these concepts
            is crucial for efficient React development.
          </OverView>
        </div>
      </Slide>
      <Slide>
        <div className="text-9xl text-white flex gap-8 text-center">
          <a
            href="https://github.com/Walid-Kh/react-presentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
            <p className="p text-base">Repository</p>
          </a>
          <a
            className="text-9xl"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGlobal />
            <p className="p text-base">Website</p>
          </a>
        </div>
      </Slide>
    </>
  );
};
