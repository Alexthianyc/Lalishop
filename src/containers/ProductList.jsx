import React, { useContext } from 'react';
import ProductItem from '@components/ProductItem';
// import useGetProducts from '@hooks/useGetProducts';
import useFetch from '@hooks/useFetch';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
    const { state } = useContext(AppContext);
    // const API = process.env.NEXT_PUBLIC_API;
    // const products = useGetProducts(API);
    // console.log(products);

    const products = useFetch(state.endPointUser);
    // console.log(products);

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
