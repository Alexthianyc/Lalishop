import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPromise = async () => {
            await fetch(API)
                .then((response) => response.json())
                .then((response) => {
                    const filteredProducts = response.filter((product) => {
                        var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-]))?/;
                        if (RegExp.test(product.images[0])) {
                            return product.images.length > 0;
                        }
                    });
                    setProducts(filteredProducts);
                })
                .catch((err) => console.log(err));
        };
        getPromise();
    }, [API]);

    return products;
};

export default useGetProducts;
