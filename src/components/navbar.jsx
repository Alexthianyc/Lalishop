import React from 'react';
import '../styles/navbar.scss';

const menu = '@icons/icon_menu.svg';

const Navbar = () => {
    return (
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <a href="./home.html">
            <img
              src="../image/favicon_lalishop.png"
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
              <img src="../image/icon_shopping_cart.svg" alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;