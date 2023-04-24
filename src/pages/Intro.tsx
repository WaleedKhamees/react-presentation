import { Img } from "../Components/Img";
import { Slide } from "../Components/Slide";
import { TextSection } from "../Components/TextSection";
import { TransitionsSlide } from "../Components/TransitionsSlides";
import MonkeyAction from "../assets/monkeyAction.gif";

export const Intro = () => {
  return (
    <>
      <TransitionsSlide title="Introduction to React" />
      <Slide vertical>
        <h2 className="h2">Introduction to React</h2>
        <ul className="ul">
          <li>What is React</li>
          <li>When it was released</li>
          <li>Its effect on the developing scene</li>
          <li>What distinguishes it from its competitors</li>
          <li>Why is it called React.</li>
        </ul>
      </Slide>
      <Slide>
        <TextSection>
          <h2 className="h2">What is React?</h2>
          <p className="p">
            React is a popular open-source JavaScript library for building user
            interfaces.
          </p>
          <ul className="ul">
            <li>
              It was developed by Facebook and released as an open-source
              project in 2013.
            </li>
            <li>
              React allows developers to create reusable UI components and build
              complex UIs efficiently.
            </li>
            <li>
              It follows a declarative approach, allowing developers to describe
              how the UI should look based on its state.
            </li>
          </ul>
        </TextSection>
        <Img src={MonkeyAction} />
      </Slide>
      <Slide>
        <TextSection>
          <h2 className="h2">When it was released</h2>
          <p className="p">
            React was released by Facebook as an open-source project in May
            2013.
          </p>
          <p className="p">
            Since its initial release, React has gained widespread adoption in
            the web development community, and its popularity continues to grow.
          </p>
        </TextSection>
      </Slide>
      <Slide vertical>
        <TextSection>
          <h2 className="h2">Its effect on the developing scene.</h2>
          <p className="p">
            React has revolutionized web development by introducing the concept
            of reusable UI components.
          </p>
          <p className="p">
            It has simplified the process of building complex user interfaces by
            providing a virtual DOM (Document Object Model) that optimizes
            rendering performance.
          </p>
          <p className="p">
            React has also sparked the development of an ecosystem of related
            libraries and tools, such as Redux for state management and Next.js
            for server-side rendering, which have further accelerated the
            development of modern web applications.
          </p>
        </TextSection>
      </Slide>
      <Slide vertical>
        <TextSection>
          <h2 className="h2">What distinguishes it from its competitors?</h2>
          <p className="p">
            One key feature that distinguishes React from its competitors is its
            virtual DOM, which allows for efficient updates and rendering of UI
            components.
          </p>
          <p className="p">
            React's component-based architecture promotes reusability and
            modularity, making it easier to maintain and scale complex
            applications.
          </p>
          <p className="p">
            React also has a large and active community that provides extensive
            documentation, support, and regular updates, which contributes to
            its popularity and wide adoption in the web development community.
          </p>
        </TextSection>
      </Slide>
      <Slide vertical>
        <TextSection>
          <h2 className="h2">Why is it called React?</h2>
          <p className="p">
            React is called "React" because it is designed to react to changes
            in the application's state and efficiently update the user interface
            accordingly.
          </p>
          <p className="p">
            When there is a change in the underlying data, React automatically
            updates only the affected components in the UI, which improves
            performance and enhances the user experience.
          </p>
          <p className="p">
            React's reactive approach to UI updates is one of its core features
            and the reason behind its name.
          </p>
        </TextSection>
      </Slide>
    </>
  );
};