//imr
import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import styles from '@styles/categories.module.scss';

//sfc
const Categories = () => {
    const { toggleCategories } = useContext(AppContext);
    return (
        <div className={styles.mobileMenu}>
            <div>
                <ul>
                    <li>
                        <Link href={'/my-account'}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Mi cuenta
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/orders'}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Mis ordenes
                            </button>
                        </Link>
                    </li>
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
                        <Link href={'/'}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Mujeres
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href={'/'} itemID={styles.email}>
                            <button className={styles.button} onClick={toggleCategories}>
                                correo@ues.edu.sv
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} itemID={styles.singOut}>
                            <button className={styles.button} onClick={toggleCategories}>
                                Cerrar sesion
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
