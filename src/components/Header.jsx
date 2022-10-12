import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import MenuComponent from 'components/Menu';
import CategoriesComponent from 'components/Categories';
import MyOrderContainer from '../containers/myOrder';
import '../styles/Header.scss';
const menuIcon = require('icons/icon_menu.svg');
const icon_shopping_cart = require('icons/icon_shopping_cart.svg');

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {setMenu(!menu)}
    const [categories, setCategories] = useState(false);
    const handleCategories = () => {setCategories(!categories)}
    const [myOrden, setMyOrden] = useState(false);

    const {state} = useContext(AppContext);

    return (
      <nav>
        <img src={menuIcon} alt="menu" className="menu" onClick={handleCategories}/>
        <div className="navbar-left">
          <Link to={"/"} className='lalisName'>
            lalishop
          </Link>
          <ul>
            <li>
              <Link to={"/"}>Todos</Link>
            </li>
            <li>
              <Link to={"/"}>Ropa</Link>
            </li>
            <li>
              <Link to={"/"}>Dispositivos electronicos</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleMenu}>correo@ues.edu.com</li>
            <li className="navbar-shopping-cart" onClick={() => setMyOrden(!myOrden)}>
              <img src={icon_shopping_cart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
          {categories && <CategoriesComponent />}
          {myOrden && <MyOrderContainer />}
          {menu  && <MenuComponent/>}
      </nav>
    );
}
 
export default Navbar;