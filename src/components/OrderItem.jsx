import React, { useContext } from 'react';
import Image from "next/image";
import AppContext from '@context/AppContext';
const close = require('@icons/icon_close.png');
import styles from '@styles/OrderItem.module.scss';
 
const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    return (
        <div className={styles.OrderItem}>
            <figure className={styles['OrderItem-back']}>
                <Image 
                src={product?.images[0]} 
                alt={product?.title} 
                width="70"
                height="70"
                className={styles.imagenes}
                />
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image 
            className={styles['OrderItem-close']} 
            src={close} 
            alt="close" 
            onClick={() => removeFromCart(product)}
            width={10}
            height={10}
            priority={true}
            />
        </div>
    );
};

export default OrderItem;
