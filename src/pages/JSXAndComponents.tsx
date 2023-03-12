import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Btn } from "../Components/Btn";
import { CodeBlock } from "../Components/CodeBlock";
import { Group } from "../Components/Group";
import { Img } from "../Components/Img";
import { Slide } from "../Components/Slide";
import { TextSection } from "../Components/TextSection";
import { TransitionsSlide } from "../Components/TransitionsSlides";

export const JSXAndComponents = () => {
  return (
    <>
      <TransitionsSlide title="JSX and Component"></TransitionsSlide>

      <Slide vertical>
        <h2 className="h2">Website Before using React</h2>
        <div className="grid grid-cols-3">
          <Img src="https://i.imgur.com/dEZF2B7.png" />
          <Img src="https://i.imgur.com/9GtNLki.png" />
          <Img src="https://i.imgur.com/dWh4hm2.png" />
        </div>
      </Slide>

      <Slide vertical>
        <h2 className="h2">After using React</h2>
        <Img src="https://i.imgur.com/MVp6CDo.png" />
      </Slide>

      <Slide vertical>
        <h2 className="h2">What is JSX?</h2>
        <Img src="https://i.imgur.com/ioNsCZ5.png" />
      </Slide>

      <Slide vertical>
        <Group>
          <CodeBlock fileName="index.html">
            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`}
          </CodeBlock>
          <CodeBlock fileName="index.jsx">
            {`var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
`}
          </CodeBlock>
        </Group>
      </Slide>

      <Slide>
        <CodeBlock fileName="index.jsx">{`ReactDOM.render(/*  WHAT TO SHOW  */,/*  WHERE TO SHOW  */);`}</CodeBlock>
      </Slide>

      <Slide vertical>
        <h2 className="h2">From JSX To HTML</h2>
        <Group vertical>
          <CodeBlock fileName="index.jsx">
            {`var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
  `}
          </CodeBlock>
          <AiOutlineArrowDown className="p" />
          <CodeBlock fileName="index.html">{`<body>
    <div id="root">
      <h1>Hello World!</h1>
    </div>
</body>`}</CodeBlock>
        </Group>
      </Slide>

      <Slide>
        <TextSection>
          <h2 className="h2">Components</h2>
          <p className="p">Why use Components</p>
          <ul className="ul">
            <li>Reuseable</li>
            <li>Easy to Understand</li>
          </ul>
        </TextSection>
        <Img src="https://i.imgur.com/wtsqeYl.png" />
      </Slide>

      {/* Navbar */}
      <Slide vertical>
        <h2 className="h2">Easy to Understand</h2>
        <CodeBlock
          fileName="What is this?"
          full
        >{`<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" href="#">Something else here</a>
          </div>
      </li>
      <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
      </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

`}</CodeBlock>
      </Slide>

      <Slide vertical>
        <h2 className="display cursor-default">😂</h2>
        <Img src="https://i.imgur.com/b6rDqi6.png" />
      </Slide>

      {/* first component */}
      <Slide vertical>
        <h2 className="h2">Let's build our first component</h2>
        <Group>
          <CodeBlock fileName="main.jsx">{`import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App/>,document.getElementById("root"));
`}</CodeBlock>
          <CodeBlock fileName="App.jsx">{`import React from "react";
function App() {

  return (<h1>Hello From app</h1>); 

}
export default App;
`}</CodeBlock>
        </Group>
        <Img src="https://i.imgur.com/yOPAyUf.png" />
      </Slide>

      {/* card */}
      <Slide vertical>
        <h2 className="h2">Let's build something more complex</h2>
        <Group>
          <CodeBlock fileName="App.jsx">
            {`import React from "react";
import ProductCard from "../components/ProductCard";
function App() {
    return (
       <ProductCard/>
    );
}
export default App;`}
          </CodeBlock>
          <CodeBlock fileName="ProductCard.jsx">
            {`export default function ProductCard() {
    return (
     <div className="max-w-[312.5px] px-8 py-4 bg-White flex flex-col items-center gap-4">
         <div className="flex flex-col items-center">
             <h2 className="h2 text-Headings">Shawrma</h2> 
             <img src=”https://i.imgur.com/6BgATBs.png”  className="w-[250px] h-fit"/>
             <p className="p text-Body text-center">
                  Large Shwarma Sandwich with fries and mayonese </p>
        </div>
       <div className="flex items-center outline outline-2 outline-RedPrimary rounded-lg w-full overflow-clip ">    
              <h2 className="text-RedPrimary h2 flex-grow text-center">30 EGP</h2>
              <button className="p-4 text-White bg-RedPrimary flex-grow flex justify-center ">
                 <p className="outlinebody ">ORDER</p> 
              </button>
       </div>
  </div>
  );
}
`}
          </CodeBlock>
        </Group>
      </Slide>

      <Slide vertical>
        <h2 className="h2">Result</h2>
        <Img src="https://i.imgur.com/oWLYKRE.png" />
      </Slide>

      {/* props */}
      <Slide vertical>
        <h2 className="h2">To make your Component more dynamic use Props</h2>
        <Group>
          <CodeBlock fileName="Props use example">{`<ProductCard
     ProductName="Shawrma"
     ProductImage="https://i.imgur.com/6BgATBs.png " 
     ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
     ProductPrice="30$" 
/>
`}</CodeBlock>
          <CodeBlock fileName="Card with Props">{`import React from "react";
function ProductCard(props) {
     return (
    <div className="max-w-[312.5px] px-8 py-4 bg-White flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
           <h2 className="h2 text-Headings">{props.ProductName}</h2>
           <img src={props.ProductImage} alt="" className="w-[250px] h-fit" />
           <p className="p text-Body text-center">{props.ProductDescription}</p>
        </div>
        <div className="flex items-center outline outline-2 outline-RedPrimary rounded-lg w-full overflow-clip ">
          <h2 className="text-RedPrimary h2 flex-grow text-center">{props.ProductPrice} </h2>
          <button className="p-4 text-White bg-RedPrimary flex-grow flex justify-center ">
          <p className="outlinebody ">ORDER</p>
         </button> 
      </div>
  </div>
  );
}
export default ProductCard;
`}</CodeBlock>
        </Group>
      </Slide>

      {/* Route to another page */}
      <Slide vertical>
        <h2 className="h2">Want to make your component more dynamic?</h2>
        <p className="p">
          Checkout{" "}
          <Link to="/stateprops" className="a">
            State and Props
          </Link>
        </p>
      </Slide>

      {/* Map */}
      <Slide vertical>
        <h2 className="h2">The Map Function</h2>
        <p className="p">Take a look at this code and guess what it returns</p>
        <CodeBlock fileName="The map function">{`const persons = [
      {firstname : "Malcom", lastname: "Reynolds"},
      {firstname : "Kaylee", lastname: "Frye"},
      {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
     return item.firstname
}
`}</CodeBlock>
      </Slide>

      {/* Product Page */}
      <Slide vertical>
        <h2 className="h2">Let's finish the Menu</h2>
        <Group>
          <CodeBlock fileName="Data">{`const Data = [
    {
      ProductName: "Shawrma",
      ProductImage: "https://i.imgur.com/6BgATBs.png ",
      ProductDescription: "Large Shwarma Sandwich With Fries and Moyonese",
      ProductPrice: "30$",
    },
    {
      ProductName: "Chicken with Rice",
      ProductImage: "https://i.imgur.com/H1J0o85.png",
      ProductDescription: "Chicken with Rice and Drink",
      ProductPrice: "60$",
    },
    {
      ProductName: "McFizz Blue Passion",
      ProductImage: "https://i.imgur.com/Isih7Ha.png",
      ProductDescription:
        "A refreshing Sprite drink, mixed with indulging Blue Curacao & Passion Fruit-flavored syrup.",
      ProductPrice: "20$",
    },
  ];
export default Data;
`}</CodeBlock>
          <CodeBlock fileName="Menu.js">{`import React from "react";
import ProductCard from "./ProductCard";
import Data from "../Data";

function Displayitems(item) {
return (
   <ProductCard
      ProductName={item.ProductName}
 ProductImage={item.ProductImage}
 ProductDescription={item.ProductDescription}
ProductPrice={item.ProductPrice}
/>
);
function ProductPage() {
  return <div className="grid md:grid-cols-1 grid-cols-4 gap-y-8 px-4 justify-items-center mt-9">     
  
       {Data.map(Displayitems)}
  
  </div>;
  }
export default ProductPage;  
`}</CodeBlock>
        </Group>
      </Slide>
      <Slide vertical>
        <h2 className="h2">Result</h2>
        <Img src="https://i.imgur.com/xjh7LVb.png" />
      </Slide>
    </>
  );
};
