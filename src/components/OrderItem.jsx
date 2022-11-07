import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
const close = require('@icons/icon_close.png');
import NotFoundImage from '@img/image-not-found-vector.jpg';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, bool }) => {
    const { removeFromCart } = useContext(AppContext);
    const verificarImagen = (imagen) => {
        if (imagen != '' || imagen != ' ' || imagen != null) {
            return imagen;
        } else {
            return NotFoundImage;
        }
    };
    return (
        <div className={styles.OrderItem}>
            <figure className={styles['OrderItem-back']}>
                <Image
                    src={verificarImagen(product.imagen_producto)}
                    alt={product?.nombre_producto}
                    width="70"
                    height="70"
                    className={styles.imagenes}
                />
            </figure>
            <p>{product?.nombre_producto}</p>
            <p>${product?.precio_producto}</p>
            {bool && (
                <Image
                    className={styles['OrderItem-close']}
                    src={close}
                    alt="close"
                    onClick={() => removeFromCart(product)}
                    width={10}
                    height={10}
                    priority={true}
                />
            )}
        </div>
    );
};

export default OrderItem;
