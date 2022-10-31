import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import CategoriesComponent from '@components/ModalCategories';
import MyOrderContainer from '@containers/myOrder';
import ProductDetail from '@containers/ProductDetail';
const categoriesIcon = require('@icons/icon_menu.svg');
const icon_shopping_cart = require('@icons/icon_shopping_cart.svg');
import {auth} from "../firebase/initFirebase";
import {onAuthStateChanged} from "firebase/auth";
import Swal from 'sweetalert2';
import styles from '@styles/Header.module.scss';

const Navbar = () => {
    const { state, toggleCategories, toggleMyOrder, closeModal } = useContext(AppContext);
    if(state.isUserLogged){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const name = user.displayName;
            //   console.log(name);
            } else {
                // User is signed out
                // ...
            }
          });
    }
    const validation = () => {
        if(state.isUserLogged){
            toggleMyOrder();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Para utilizar el carrito debes iniciar sesion!',
              })
        }
    }

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
                        <button className={styles.lalisName} onClick={closeModal}>
                            Lalishop
                        </button>
                    </Link>
                </div>
                <div className={styles['navbar-right']}>
                    <button className={`${styles['navbar-shopping-cart']}`} onClick={validation}>
                        <Image src={icon_shopping_cart} alt="shopping cart" priority={true} />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </button>
                </div>
            </nav>
            {state.myOrden && <MyOrderContainer />}
            {state.categories && <CategoriesComponent />}
            {state.detalleIsOpen && <ProductDetail />}
        </>
    );
};

export default Navbar;
