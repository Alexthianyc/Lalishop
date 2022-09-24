import React from 'react';
import '../styles/menu.scss';

const Menu = () => {
    return ( 
        <div className="desktop-menu">
            <ul>
            <li>
                <a href="./my_orders.html">Mis ordenes</a>
            </li>
            <li>
                <a href="./my_account.html">Mi cuenta</a>
            </li>
            <li>
                <a href="./home.html">Sign out</a>
            </li>
            </ul>
        </div>
     );
}
 
export default Menu;