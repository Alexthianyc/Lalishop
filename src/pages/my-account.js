import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/MyAccount.module.scss';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import { auth } from '../firebase/initFirebase';

const MyAccount = () => {
    const { state } = useContext(AppContext);
    const router = useRouter();
    useEffect(() => {
        if (!state.isUserLogged) {
            router.push('/login');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Mi cuenta</title>
            </Head>
            <div className={styles.MyAccount}>
                <div className={`${styles['form-container']}`}>
                    <h1 className={`${styles['title']}`}>Mi cuenta</h1>

                    <form action="#" className={`${styles['form']}`}>
                        <p className={`${styles['label']}`}>Nombre</p>
                        <p className={`${styles['value']}`}>{state.isUserLogged ? auth.currentUser.displayName : ''}</p>

                        <p className={`${styles['label']}`}>Direccion de correo</p>
                        <p className={`${styles['value']}`}>{state.isUserLogged ? auth.currentUser.email : ''}</p>

                        <p className={`${styles['label']}`}>Contraseña</p>
                        <p className={`${styles['value']}`}>**********</p>

                        <Link href="/new-password">
                            <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
                                Cambiar contraseña
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
