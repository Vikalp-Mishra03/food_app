import React from 'react'
import Title from './Title';
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
export default HeaderComponent;