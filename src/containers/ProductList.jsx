import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
// import endPoints from '@services/api/index';
// import useFetch from '@hooks/useFetch';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
    const API = process.env.NEXT_PUBLIC_API;
    const products = useGetProducts(API);
    // console.log(products);

    // const productos = useFetch(endPoints.products.getProducts());
    // console.log(productos);

    return (
        <section className={styles['main-container']}>
            <div className={styles['ProductList']}>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
