import React from 'react';
import '../styles/shopping_cart.scss';

import flechita from 'icons/flechita.svg';
import icon_close from 'icons/icon_close.svg';

const Shopping_cart = () => {
    return ( 
        <aside className="product-detail">
            <div className="title-container">
                <img src={flechita} alt="arrow"/>
                <p className="title">Mi orden</p>
            </div>
            <div className="my-order-content">
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="camisa"/>
                    </figure>
                    <p>Bike</p>
                    <p>$90,00</p>
                    <img src={icon_close} alt="close"/>
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="camisa"/>
                    </figure>
                    <p>Bike</p>
                    <p>$90,00</p>
                    <img src={icon_close} alt="close"/>
                </div>
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        $270,00
                    </p>
                </div>
                <button className="primary-button add-to-cart-btn">
                    Pagar
                </button>
            </div>
        </aside>
     );
}
 
export default Shopping_cart;