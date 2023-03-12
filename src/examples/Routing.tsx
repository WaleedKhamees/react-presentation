import { CodeBlock } from "../Components/CodeBlock";

export const RoutingExample = () => {
  return (
    <CodeBlock fileName="App.tsx">
      {`import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stateprops" element={<StateAndProps />} />
        <Route path="/routing" element={<Routing />} />
      </Routes>
    </Router>
  )
}`}
    </CodeBlock>
  );
};
export const RouteGuardingExample = () => {
  return (
    <CodeBlock fileName="App.jsx (RestaurantDB)">
      {`import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/admin" element={
            <Protected isSignedIn={user && user.kind === 'a'}>
              <AdminPage />
            </Protected>
        </Routes>
      </Router>
    )
  }`}
    </CodeBlock>
  );
};
export const GuardComponentExample = () => {
  return (
    <CodeBlock fileName="Protected.jsx (RestaurantDB)">
      {`import { Navigate } from 'react-router-dom' 
const Protected = () => {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}`}
    </CodeBlock>
  );
};
export const WrapperExample = () => {
  return (
    <CodeBlock fileName="SlideToTopWrapper.ts">
      {`export const SlideToTopWrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};`}
    </CodeBlock>
  );
};
export const UsingWrapperExample = () => {
  return (
    <CodeBlock fileName="App.tsx">
      {`import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <SlideToTopWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stateprops" element={<StateAndProps />} />
          <Route path="/routing" element={<Routing />} />
        </Routes>
      </SlideToTopWrapper>
    </Router>
  )
}`}
    </CodeBlock>
  );
};

export const AddingLinksExample = () => {
  return (
    <CodeBlock fileName="NavBar.tsx">
      {`<Link to="/">\n\t<Btn>\n\t\tHome\n\t</Btn>\n</Link>`}
    </CodeBlock>
  );
};
