import React from "react";
import ReactDOM from "react-dom/client";

// JSX
// its functional component
const Heading = () => (
    <h1 id="title" key="h2">Hello Everynan</h1>
);
// its react Element
const title = (
    <h1 id="title" key="h2">Hello Everynan</h1>
);
let hei = 9 + 8;
const Header = () => {
    return (
        <>
        {/* inside prenthesis we can write any js code */}
        {hei}
            {/* to call function */}
            {Heading()}

            {/* to call react element */}
            {title}
            <h1>Hello functional component</h1>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)
