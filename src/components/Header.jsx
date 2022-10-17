import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import MenuComponent from "components/ModalMenu";
import CategoriesComponent from "components/ModalCategories";
import MyOrderContainer from "../containers/myOrder";
import "../styles/Header.scss";
const menuIcon = require("icons/icon_menu.svg");
const icon_shopping_cart = require("icons/icon_shopping_cart.svg");

const Navbar = () => {
  const {state, changeMenu, changeCategories, changeMyOrden, closeModal} =
    useContext(AppContext);
  const mostrarCategories = () => {
    state.menu = false;
    state.myOrden = false;
    changeCategories();
  };
  const mostrarMenu = () => {
    state.myOrden = false;
    state.categories = false;
    changeMenu();
  };
  const mostrarMyOrder = () => {
    state.menu = false;
    state.categories = false;
    changeMyOrden();
  };

  return (
    <nav>
      <img
        src={menuIcon}
        onClick={mostrarCategories}
        alt="menu"
        className="menu"
      />
      <div className="navbar-left">
          <Link
            to={"/"}
            className="lalisName"
            onClick={closeModal}>
            Lalishop
          </Link>
        <ul>
          <li>
            <Link to={"/"}>Hombres</Link>
          </li>
          <li>
            <Link to={"/"}>Mujeres</Link>
          </li>
          <li>
            <Link to={"/"}>Contactanos</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={mostrarMenu}>
            correo@ues.edu.com
          </li>
          <li className="navbar-shopping-cart" onClick={mostrarMyOrder}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {state.myOrden && <MyOrderContainer />}
      {state.categories && <CategoriesComponent />}
      {state.menu && <MenuComponent />}
    </nav>
  );
};

export default Navbar;
