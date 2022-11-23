import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import CategoriesComponent from '@components/ModalCategories';
import MyOrderContainer from '@containers/myOrder';
import ProductDetail from '@containers/ProductDetail';
import PaymentGateway from '@components/paymentGateway';
const categoriesIcon = require('@icons/icon_menu.svg');
const icon_shopping_cart = require('@icons/icon_shopping_cart.svg');
import Swal from 'sweetalert2';
import endPoints from '@services/api/index';
import { useRouter } from 'next/router';
import styles from '@styles/Header.module.scss';

const Navbar = () => {
    const { state, toggleCategories, toggleMyOrder, closeModal } = useContext(AppContext);
    const router = useRouter();
    const validation = () => {
        if (state.isUserLogged) {
            toggleMyOrder();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Para utilizar el carrito debes iniciar sesion!',
            });
        }
    };
    const inicio = () => {
        state.endPointUser = endPoints.products.getProducts();
        router.push('/');
        closeModal();
    };

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
                        <button className={styles.lalisName} onClick={inicio}>
                            Lalishop
                        </button>
                    </Link>
                </div>
                <div className={styles['navbar-right']}>
                    <button className={`${styles['navbar-shopping-cart']}`} onClick={validation} id="cart">
                        <Image src={icon_shopping_cart} alt="shopping cart" priority={true} />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </button>
                </div>
            </nav>
            {state.myOrden && <MyOrderContainer />}
            {state.categories && <CategoriesComponent />}
            {state.detalleIsOpen && <ProductDetail />}
            {state.payment && <PaymentGateway />}
        </>
    );
};

export default Navbar;
