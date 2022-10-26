import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state, toggleMyOrder } = useContext(AppContext);
    const totalPrice = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };
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
                    return <OrderItem product={product} key={`orderItem-${product.id}`} />;
                })}
                <div className={styles['order']}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${totalPrice()}</p>
                </div>
                <Link href="/checkout">
                    <button className={styles['primary-button']} onClick={toggleMyOrder}>
                        Pagar
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export default MyOrder;
