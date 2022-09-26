import React from 'react';
import '../styles/navbar.scss';

import menu from '@icons/icon_menu.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import favicon_lalishop from '@logos/favicon_lalishop.png';

const Navbar = () => {
    return (
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <a href="/">
            <img
              src={favicon_lalishop}
              alt="logo"
              className="menu-logo"
            />
          </a>
          <ul>
            <li>
              <a href="/">Todos</a>
            </li>
            <li>
              <a href="/">Ropa</a>
            </li>
            <li>
              <a href="/">Dispositivos electronicos</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">correo@ues.edu.com</li>
            <li className="navbar-shopping-cart">
              <img src={icon_shopping_cart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;