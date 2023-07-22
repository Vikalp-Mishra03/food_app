import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
    <h1 id="title" key="h2">Food Vila</h1>
);

// this is component Composition
const Header = () => {
    return (
        <>

        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)
