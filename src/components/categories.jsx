//imr
import React from 'react';
import '../styles/categorie.scss';

//sfc
const Categories = () => {
    return ( 
        <div className="mobile-menu">
        <ul>
            <li>
                <a href="#">CATEGORIAS</a>
            </li>
            <li>
                <a href="/">Ropa</a>
            </li>
            <li>
                <a href="/">Dispositivos electronicos</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/orders">Mis ordenes</a>
              </li>
              <li>
                <a href="/account">Mi cuenta</a>
              </li>
        </ul>
        <ul>
            <li>
                <a href="/" className="email">correo@ues.edu.sv</a>
            </li>
            <li>
                <a href="/" className="sing-out">Cerrar sesion</a>
            </li>
        </ul>
    </div>
     );
}
 
export default Categories;