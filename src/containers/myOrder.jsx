import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { auth } from '../firebase/initFirebase';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const user = auth.currentUser;
    const { state, toggleMyOrder } = useContext(AppContext);
    const totalPrice = () => {
        const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.precio_producto);
        const sum = state.cart.reduce(reducer, 0);
        return Math.round((sum + Number.EPSILON) * 100) / 100;
    };
    const router = useRouter();
    const check = () => {
        if (state.cart.length > 0) {
            state.pedido = state.cart;
            state.cart = [];
            sendOrder();
            toggleMyOrder();
            router.push('/checkout');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay productos en el carrito',
            });
        }
    };
    const sendOrder = async () => {
        const data = {
            usuario_id: user.uid,
            producto_id: state.pedido[0].id,
            nombre_producto: state.pedido[0].nombre_producto,
            descripcion_producto: state.pedido[0].descripcion_producto,
            precio_producto: state.pedido[0].precio_producto,
            stock_producto: state.pedido[0].stock_producto,
            imagen_producto: state.pedido[0].imagen_producto,
        };
        const JSONdata = JSON.stringify(data);
        // console.log(JSONdata);

        const endpoint = 'http://www.lalishop.shop/api/pedido';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        console.log(response);
    };

    console.log(state.cart);
    return (
        <aside className={styles.MyOrder}>
            <div className={styles['title-container']}>
                <div className={styles['return-container']}>
                    <Image src={flechita} alt="arrow" onClick={toggleMyOrder} priority={true} />
                </div>
                <p className={styles.titleMyOrder}>Mi orden</p>
            </div>
            <div className={styles['my-order-content']}>
                {state.cart.map((product) => {
                    return <OrderItem product={product} bool={true} key={`orderItem-${product.id}`} />;
                })}
                <div className={styles['order']}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${totalPrice()}</p>
                </div>
                <button className={styles['primary-button']} onClick={check}>
                    Pagar
                </button>
            </div>
        </aside>
    );
};

export default MyOrder;
