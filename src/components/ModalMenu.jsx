import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/menu.module.scss';

const Menu = () => {
    const { toggleMenu } = useContext(AppContext);
    return (
        <div className={styles['desktop-menu']}>
            <ul>
                <li>
                    <Link href={'/orders'}>
                        <a onClick={toggleMenu}>Mis ordenes</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/my-account'}>
                    <a onClick={toggleMenu}>Mi cuenta</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/login'}>
                    <a onClick={toggleMenu}>Sign out</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
