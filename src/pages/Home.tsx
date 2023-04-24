import { AiOutlineGithub } from "react-icons/ai";
import { OverView } from "../Components/Overview";
import { Slide } from "../Components/Slide";
import { TransitionsSlide } from "../Components/TransitionsSlides";
import { BsArrowDownUp, BsArrowsMove } from "react-icons/bs";
export const Home = () => {
  return (
    <>
      <TransitionsSlide title="React-CMP25" />
      <Slide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <OverView header="Introduction" path="/intro">
            Introduction React and client-side rendering and Document Object
            Model (DOM), create-react-app, Vite, and meta-frameworks such as
            Next. Additionally, gives an overview of the files included in an
            initial React project.
          </OverView>
          <OverView header="JSX / Components" path="/jsxandcomponents">
            dump and stateful components, HOCs, Render Props, Lifecycle Methods,
            Fragments, useEffect, array methods, and event handling. By the end,
            you will have a solid understanding of the core concepts and tools
            needed to create React App.
          </OverView>
          <OverView header="The State" path="/state">
            The article covers state and various hooks used for state
            management, performance optimization, context, and data fetching in
            React. Custom hooks are also discussed. Understanding these concepts
            is crucial for efficient React development.
          </OverView>
          <OverView className="md:col-span-3" header="Routing" path="/routing">
            React Router Dom is a library that enables routing in React
            applications. The library provides various components and hooks for
            building multi-page applications with client-side routing. The
            article covers the fundamental concepts of React Router Dom.
          </OverView>
        </div>
      </Slide>
      <Slide vertical>
        <div className="w-full">
          <h2 className="h2 text-center">The Actual Lecture! (Arabic)</h2>
          <iframe
            className="w-full outline-none rounded-lg aspect-video"
            src="https://www.youtube.com/embed/YyNt7doG7qQ"
            title="Week 5 (React &amp; React Native)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-4xl dark:text-white text-center flex flex-col items-center gap-2">
          <a
            href="https://github.com/Walid-Kh/react-presentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <p className="p text-base whitespace-nowrap">
            Check out the project github!
          </p>
        </div>
      </Slide>
    </>
  );
};
