//imr
import React, { useContext } from "react";
import "../styles/categories.scss";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

//sfc
const Categories = () => {
  const {state,changeMenu,changeCategories,} = useContext(AppContext);
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <p>CATEGORIAS</p>
        </li>
        <li>
          <Link to={"/"}>Ropa</Link>
        </li>
        <li>
          <Link to={"/"}>Dispositivos electronicos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/orders"} onClick={changeCategories}>Mis ordenes</Link>
        </li>
        <li>
          <Link to={"/account"} onClick={changeCategories}>Mi cuenta</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/"} className="email">
            correo@ues.edu.sv
          </Link>
        </li>
        <li>
          <Link to={"/"} className="sing-out">
            Cerrar sesion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
