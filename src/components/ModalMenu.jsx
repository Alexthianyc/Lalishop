import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.scss";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Menu = () => {
  const {state,changeMenu,changeCategories,} = useContext(AppContext);
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <Link to={"./orders"} onClick={changeMenu}>Mis ordenes</Link>
        </li>
        <li>
          <Link to={"./account"} onClick={changeMenu}>Mi cuenta</Link>
        </li>
        <li>
          <Link to={"./"} onClick={changeMenu}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
