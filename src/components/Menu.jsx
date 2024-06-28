import React from 'react';
import CartWidget from "./CartWidget";

const Menu = () => {
    return (
        <nav className="menu">
            <div>
            <ul className="menu-list">
                <li className="menu-item"><a href="#">Home</a></li>
                <li className="menu-item"><a href="#">Quem somos</a></li>
                <li className="menu-item"><a href="#">Serviços</a></li>
                <li className="menu-item"><a href="#">Contato</a></li>
            </ul>
            </div>
            <CartWidget/>
        </nav>
    );
}
export default Menu;
