import React, { useContext } from 'react';
import ProductInfo from '@components/ProductInfo';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
    const { cerrarDetalle } = useContext(AppContext);
    return (
        <aside className={styles['product-detail']}>
            <div className={styles.productCloseContainer}>
                <button type="button" className={styles['btn-close']} onClick={cerrarDetalle}>
                    <span className={styles['icon-cross']}></span>
                    <span className={styles['visually-hidden']}>Close</span>
                </button>
            </div>
            <ProductInfo />
        </aside>
    );
};

export default ProductDetail;
