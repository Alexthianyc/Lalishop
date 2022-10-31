//imr
import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router';
import styles from '@styles/categories.module.scss';

//sfc
const Categories = () => {
    const { state, toggleCategories } = useContext(AppContext);
    const router = useRouter();
    const singOut = () => {
        auth.signOut();
        state.isUserLogged = false;
        toggleCategories();
    };
    const iniciarSesion = () => {
        router.push('/login');
        toggleCategories();
    };

    return (
        <div className={styles.mobileMenu}>
            <div>
                <ul>
                    {state.isUserLogged && (
                        <li>
                            <Link href={'/my-account'}>
                                <button className={styles.button} onClick={toggleCategories}>
                                    Mi cuenta
                                </button>
                            </Link>
                        </li>
                    )}
                    {/* <li>
                        <Link href={'/orders'}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Mis ordenes
                            </button>
                        </Link>
                    </li> */}
                </ul>
                <ul>
                    <li>
                        <p>CATEGORIAS</p>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Hombres
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button className={styles.button} onClick={iniciarSesion}>
                            Mujeres
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    {state.isUserLogged && (
                        <>
                            <li>
                                <button className={styles.button} onClick={toggleCategories}>
                                    {auth.currentUser.email}
                                </button>
                            </li>
                            <li>
                                <Link href={'/'} itemID={styles.singOut}>
                                    <button className={styles.button} onClick={singOut}>
                                        Cerrar sesion
                                    </button>
                                </Link>
                            </li>
                        </>
                    )}
                    {!state.isUserLogged && (
                        <li>
                            <Link href={'/login'}>
                                <button className={styles.button} onClick={toggleCategories}>
                                    Iniciar sesion
                                </button>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
