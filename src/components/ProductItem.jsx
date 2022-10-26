import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import NotFoundImage from '@img/image-not-found-vector.jpg';

const ProductItem = ({ product }) => {
    const { addToCart, mostrarDetalle } = useContext(AppContext);

    const verificarImagen = (imagen) => {
        if (product.images[0] !== '' || product.images[0] !== 'string') {
            return imagen;
        } else {
            return NotFoundImage;
        }
    };

    return (
        <div className={styles.ProductItem}>
            <div>
                <Image
                    src={verificarImagen(product.images[0])}
                    alt={product.title}
                    className={styles.imagenes}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    priority={true}
                    onClick={() => mostrarDetalle(product)}
                />
            </div>
            <div className={styles['product-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure>
                    <Image src={bt_add_to_cart} alt="add-cart" onClick={() => addToCart(product)} />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
