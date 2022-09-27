import React from 'react';
import '../styles/product_details.scss';

import bt_add_to_cart from 'icons/bt_add_to_cart.svg';
import icon_close from 'icons/icon_close.png';

const Product_details = () => {
    return ( 
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={icon_close} alt="close"/>
            </div>
            <img src="https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="tennis"/>
            <div className="product-info">
                <p>$35,00</p>
                <p>Tennis</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in aspernatur quisquam totam sunt unde. Eius soluta saepe recusandae accusantium eligendi ducimus, tempora ipsa totam!</p>
                <button className="primary-button add-to-cart-btn">
                    <img src={bt_add_to_cart} alt="add-to-caart"/>
                    Agregar al carrito
                </button>
            </div>
        </aside>
     );
}
 
export default Product_details;