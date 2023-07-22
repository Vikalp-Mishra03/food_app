import React from "react";
import ReactDOM from "react-dom/client";
// import Style from 'style.css'
const Title = () => (
    <a href="/"><img className="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" alt="logo" /></a>
);

const HeaderComponent = () => {
    return (
        <header>
            {Title()}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </header>
    )
}

const Body = () =>{

}
const AppLayout = () => {
    return (
        // react.fragment
        <>
            {HeaderComponent()}
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)



/***
 * jsx can only have one parent
 * react.fragment is like an empty tag
 */