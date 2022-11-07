import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
const add_to_cart = require('@icons/bt_add_to_cart.svg');
import Swal from 'sweetalert2';
import NotFoundImage from '@img/image-not-found-vector.jpg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
    const { state, addToCart } = useContext(AppContext);
    const addCartValidation = () => {
        if (state.isUserLogged) {
            addToCart(state.detalle);
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
    const verificarImagen = (imagen) => {
        if (imagen != '' || imagen != ' ' || imagen != null) {
            return imagen;
        } else {
            return NotFoundImage;
        }
    };
    return (
        <div className={styles.ProductInfo}>
            <Image
                src={verificarImagen(state.detalle.imagen_producto)}
                alt={state.detalle.nombre_producto}
                width="100%"
                height="100%"
                layout="responsive"
                priority={true}
            />
            <div className={styles['product-info']}>
                <p>${state.detalle.precio_producto}</p>
                <p>{state.detalle.nombre_producto}</p>
                <p>{state.detalle.descripcion_producto}</p>
                <button className={styles.addCartBtn} onClick={addCartValidation}>
                    <Image src={add_to_cart} alt="add-to-cart" />
                    <div>Agregar al carrito</div>
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
