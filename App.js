import React from "react";
import ReactDOM from "react-dom/client";

//1. create a react element using react
//React.createElement is an object which upon rendering changes to an html element.
//const heading = React.createElement("h1",{id:"heading"},"Namaste react");
//console.log(heading);

//if you log heading and jsxHeading both will be same

//2. create a react element using jsx
//to create h1 tag using jsx
//jsx is not html, its an html like syntax
//this is basically a react element only, babel converts jsx to react element
const jsxHeading = (
    <h1 id="heading" className="heading" tabIndex={5}>
        Namaste React
        <p>heel</p>
    </h1>
);
console.log(jsxHeading);

//React components
//React Functional components

//both are same
// const fn = ()=>{
//     return true;
// }

// const fn = ()=> true;

const HeadingComponent1 = () => {
    return <h1>React functional Component</h1>;
};

//also a valid syntax
const HeadingComponent2 = () => <h1>React functional Component</h1>;

const HeadingComponent3 = function () {
    return <h1>Hello function from functional component</h1>;
};

const elem = <span>React element</span>;
const Title = () => (
    <h1>
        {elem}
        namaste react title using jsx
    </h1>
);

const title = <h1>REACT ELEMENT TITLE</h1>
const number = 1000;
//here we have wriiteen using second syntax where no return is used
//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {/* {basically any jsx expression can be put inside the curly braces} */}
        {number}
        {console.log("hello")}

        {/* {3 ways of writing Title component} */}
        <Title></Title>
        {Title()}
        <Title />

        {/* this is a react element */}
        {title}
        <h1>React functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent />);
