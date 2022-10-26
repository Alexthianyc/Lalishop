import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import MenuComponent from '@components/ModalMenu';
import CategoriesComponent from '@components/ModalCategories';
import MyOrderContainer from '@containers/myOrder';
import ProductDetail from '@containers/ProductDetail';
const categoriesIcon = require('@icons/icon_menu.svg');
const icon_shopping_cart = require('@icons/icon_shopping_cart.svg');
import styles from '@styles/Header.module.scss';

const Navbar = () => {
    const { state, toggleCategories, toggleMyOrder, closeModal } = useContext(AppContext);

    return (
        <>
            <nav className={styles.Header}>
                <div className={styles.categoriesContainer}>
                    <Image
                        src={categoriesIcon}
                        onClick={toggleCategories}
                        alt="categoriesIcon"
                        className={`${styles.categoriesIcon}`}
                        priority={true}
                    />
                </div>
                <div className={styles['navbar-left']}>
                    <Link href={'/'}>
                        <a className={styles.lalisName} onClick={closeModal}>
                            Lalishop
                        </a>
                    </Link>
                    {/* <ul>
                        <li>
                            <Link href={'/'}>Hombres</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Mujeres</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Contactanos</Link>
                        </li>
                    </ul> */}
                </div>
                <div className={styles['navbar-right']}>
                    <ul>
                        <li className={styles['navbar-email']}></li>
                        <li className={`${styles['navbar-shopping-cart']}`} onClick={toggleMyOrder}>
                            <Image src={icon_shopping_cart} alt="shopping cart" priority={true} />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                        </li>
                    </ul>
                </div>
            </nav>
            {state.myOrden && <MyOrderContainer />}
            {state.categories && <CategoriesComponent />}
            {state.menu && <MenuComponent />}
            {state.detalleIsOpen && <ProductDetail />}
        </>
    );
};

export default Navbar;
