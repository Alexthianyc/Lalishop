import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
    const API = process.env.NEXT_API;
    const products = useGetProducts(API);
    // console.log(products);

    return (
        <section className={styles['main-container']}>
            <div className={styles['ProductList']}>
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }         
            </div>
        </section>
    );
};

export default ProductList;
