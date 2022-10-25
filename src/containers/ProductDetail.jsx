import React, { useContext } from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import AppContext from '@context/AppContext';
const close = require('@icons/icon_close.png');
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
    const { cerrarDetalle } = useContext(AppContext);
    return (
        <aside className={styles['product-detail']}>
            <div onClick={cerrarDetalle} className={styles.productCloseContainer}>
                <button type="button" className={styles["btn-close"]}>
                    <span className={styles["icon-cross"]}></span>
                    <span className={styles["visually-hidden"]}>Close</span>
                </button>
            </div>
            <ProductInfo />
        </aside>
    );
};

export default ProductDetail;
