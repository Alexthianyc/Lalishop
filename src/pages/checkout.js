import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
    const { state } = useContext(AppContext);
    const totalPrice = () => {
        const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.precio_producto);
        const sum = state.pedido.reduce(reducer, 0);
        return Math.round((sum + Number.EPSILON) * 100) / 100;
    };
    const date = new Date();
    date.getDate();
    function formatoFecha(fecha, formato) {
        const map = {
            dd: fecha.getDate(),
            mm: fecha.getMonth() + 1,
            yy: fecha.getFullYear().toString().slice(-2),
            yyyy: fecha.getFullYear(),
        };
        return formato.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
    }
    const dateString = formatoFecha(date, 'dd/mm/yyyy');

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className={styles.Checkout}>
                <div className={styles['Checkout-container']}>
                    <h1 className={styles['title']}>Detalle del pedido</h1>
                    <div className={styles['Checkout-content']}>
                        <div className={styles['order']}>
                            <p>
                                <span>{dateString}</span>
                                <span>
                                    {state.pedido.length}{' '}
                                    {state.pedido.length > 1 ? 'Productos pagados' : 'Producto pagado'}
                                </span>
                            </p>
                            <p>${totalPrice()}</p>
                        </div>
                        {state.pedido.map((product) => {
                            return <OrderItem product={product} bool={false} key={`orderItem-${product.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
