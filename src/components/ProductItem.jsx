import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import Swal from 'sweetalert2';
import NotFoundImage from '@img/image-not-found-vector.jpg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
    const { state, addToCart, mostrarDetalle } = useContext(AppContext);
    const verificarImagen = (imagen) => {
        if (imagen != '' || imagen != ' ' || imagen != null) {
            return ("https://s3.amazonaws.com/lalishop.bucket-s3/" + imagen);
        } else {
            return NotFoundImage;
        }
    };
    const addCartValidation = () => {
        if (state.isUserLogged) {
            addToCart(product);
            Swal.fire({
                title: 'Producto agregado al carrito',
                icon: 'success',
                confirmButtonText: 'Ok',
            });
        } else {
            Swal.fire({
                title: 'Debes iniciar sesión',
                text: 'Para poder agregar productos al carrito',
                icon: 'warning',
                confirmButtonText: 'Ok',
            });
        }
    };

    return (
        <div className={styles.ProductItem}>
            <div>
                <Image
                    src={verificarImagen(product.imagen_producto)}
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
                    <p>${product.precio_producto}</p>
                    <p>{product.nombre_producto}</p>
                </div>
                <figure>
                    <Image src={bt_add_to_cart} alt="add-cart" onClick={addCartValidation} />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
