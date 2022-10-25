import React from 'react';
import Head from 'next/head';
import OrderItem from '@components/Order';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
    return (
        <>
            <Head>
                <title>Ordenes</title>
            </Head>
            <div className={styles.Orders}>
                <div className={`${styles['Orders-container']}`}>
                    <h1 className={`${styles.title}`}>Mis ordenes</h1>
                    <div className={`${styles['Orders-content']}`}>
                        <OrderItem />
                        <OrderItem />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
