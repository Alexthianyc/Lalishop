import React from 'react';
import Image from 'next/image';
const flechita = require('@icons/flechita.svg');
import styles from '@styles/Order.module.scss';

const Order = () => {
    return (
        <div className={styles.Order}>
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={flechita} alt="arrow" />
        </div>
    );
};

export default Order;
