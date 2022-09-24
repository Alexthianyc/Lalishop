import React from 'react';
import '../styles/my_orders.scss';

const My_ordes = () => {
    return ( 
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">Mis ordenes</h1>
                <div className="my-order-content">
                    <div className="orders">
                        <p>
                            <span>01-09- 22</span>
                            <span>3 articles</span>
                        </p>
                        <p>
                            $270,00
                        </p>
                        <figure>
                            <img src="../image/flechita.svg" alt="flecha"/>
                        </figure>
                    </div>
                    <div className="orders">
                        <p>
                            <span>01-09- 22</span>
                            <span>3 articles</span>
                        </p>
                        <p>
                            $270,00
                        </p>
                        <figure>
                            <img src="../image/flechita.svg" alt="flecha"/>
                        </figure>
                    </div>
                    <div className="orders">
                        <p>
                            <span>01-09- 22</span>
                            <span>3 articles</span>
                        </p>
                        <p>
                            $270,00
                        </p>
                        <figure>
                            <img src="../image/flechita.svg" alt="flecha"/>
                        </figure>
                    </div>
                    <div className="orders">
                        <p>
                            <span>01-09- 22</span>
                            <span>3 articles</span>
                        </p>
                        <p>
                            $270,00
                        </p>
                        <figure>
                            <img src="../image/flechita.svg" alt="flecha"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default My_ordes;