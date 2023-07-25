import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";
import HeaderComponent from "./component/Nav";
const AppLayout = () => {
    return (
        // react.fragment
        <>
            <HeaderComponent/>
            <Body/>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)



/***
 * jsx can only have one parent
 * react.fragment is like an empty tag
 */