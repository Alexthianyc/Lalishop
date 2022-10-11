import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.scss";

const Menu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <Link to={"./orders"}>Mis ordenes</Link>
        </li>
        <li>
          <Link to={"./account"}>Mi cuenta</Link>
        </li>
        <li>
          <Link to={"./"}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
