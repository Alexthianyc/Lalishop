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
                            <a onClick={toggleCategories}>Mi cuenta</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/orders'}>
                            <a onClick={toggleCategories}>Mis ordenes</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>CATEGORIAS</p>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a onClick={toggleCategories}>Hombres</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a onClick={toggleCategories}>Mujeres</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href={'/'} itemID={styles.email}>
                            <a onClick={toggleCategories}>correo@ues.edu.sv</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} itemID={styles.singOut}>
                            <a onClick={toggleCategories}>Cerrar sesion</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
