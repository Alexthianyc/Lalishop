import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
const add_to_cart = require('@icons/bt_add_to_cart.svg');
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
    const { state, addToCart } = useContext(AppContext);
    return (
        <div className={styles.ProductInfo}>
            <Image
                src={state.detalle.images[0]}
                alt={state.detalle.title}
                width="100%"
                height="100%"
                layout="responsive"
                priority={true}
            />
            <div className={styles['product-info']}>
                <p>${state.detalle.price}</p>
                <p>{state.detalle.title}</p>
                <p>{state.detalle.description}</p>
                <button className={styles.addCartBtn} onClick={() => addToCart(state.detalle)}>
                    <Image src={add_to_cart} alt="add-to-cart" />
                    <div>Agregar al carrito</div>
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
