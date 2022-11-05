//imr
import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router';
import endPoints from '@services/api/index';
import useFetch from '@hooks/useFetch';
import styles from '@styles/categories.module.scss';

//sfc
const Categories = () => {
    const { state, toggleCategories } = useContext(AppContext);
    const router = useRouter();
    const singOut = () => {
        auth.signOut();
        state.isUserLogged = false;
        state.cart = [];
        toggleCategories();
    };
    const iniciarSesion = () => {
        toggleCategories();
        router.push('/login');
    };
    const mostrarCategorias = (endPoint) => {
        // console.log(endPoint);
        state.endPointUser = endPoint;
        router.push('/');
        toggleCategories();
    };
    const categories = useFetch(endPoints.categories.getCategoriesList());
    // console.log(categories);

    return (
        <div className={styles.mobileMenu}>
            <div>
                <div>
                    <ul>
                        {!state.isUserLogged && (
                            <li>
                                <button className={styles.button} onClick={iniciarSesion}>
                                    Iniciar sesion
                                </button>
                            </li>
                        )}
                        <li>
                            <Link href={'/contactUs'}>
                                <button className={styles.button} onClick={toggleCategories}>
                                    Contactanos
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {state.isUserLogged && (
                    <div class="accordion mb-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseAccount"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    {auth.currentUser.email}
                                </button>
                            </h2>
                            <div
                                id="collapseAccount"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <Link href={'/my-account'}>
                                                <button className={styles.button} onClick={toggleCategories}>
                                                    Mi cuenta
                                                </button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/'} itemID={styles.singOut}>
                                                <button className={styles.button} onClick={singOut}>
                                                    Cerrar sesion
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseCategories"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                CATEGORIAS
                            </button>
                        </h2>
                        <div
                            id="collapseCategories"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    mostrarCategorias(endPoints.products.getProducts());
                                                }}
                                            >
                                                Todos los productos
                                            </button>
                                        </Link>
                                    </li>
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link href="/">
                                                <button
                                                    className={styles.button}
                                                    onClick={() => {
                                                        mostrarCategorias(
                                                            endPoints.categories.getCategorie(
                                                                category.nombre_categoria,
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    {category.nombre_categoria}
                                                </button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
