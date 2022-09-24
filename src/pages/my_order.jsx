import React from 'react';
import '../styles/my_order.scss';

const My_order = () => {
    return ( 
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="tittle">Mi orden</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>01-09- 22</span>
                            <span>3 articles</span>
                        </p>
                        <p>
                            $270,00
                        </p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$90,00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$90,00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$90,00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$90,00</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike"/>
                        </figure>
                        <p>Bike</p>
                        <p>$90,00</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default My_order;