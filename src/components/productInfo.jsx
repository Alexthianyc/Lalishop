import React from 'react';
import "../styles/ProductInfo.scss";
const add_to_cart = require('icons/bt_add_to_cart.svg');

const ProductInfo = () => {
    return ( 
        <>
			<img src="https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="tennis"/>
            <div className="product-info">
                <p>$35,00</p>
                <p>Tennis</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in aspernatur quisquam totam sunt unde. Eius soluta saepe recusandae accusantium eligendi ducimus, tempora ipsa totam!</p>
                <button className="primary-button add-to-cart-btn">
                    <img src={add_to_cart} alt="add-to-caart"/>
                    Agregar al carrito
                </button>
			</div>
		</>
     );
}
 
export default ProductInfo;