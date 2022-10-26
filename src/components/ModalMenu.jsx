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
                        <div onClick={toggleMenu}>Mis ordenes</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/my-account'}>
                        <div onClick={toggleMenu}>Mi cuenta</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/login'}>
                        <div onClick={toggleMenu}>Sign out</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
