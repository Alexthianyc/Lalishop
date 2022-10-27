import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
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
                        <p className={`${styles['value']}`}>Cristian</p>

                        <p className={`${styles['label']}`}>Direccion de correo</p>
                        <p className={`${styles['value']}`}>correo@edu.com.sv</p>

                        <p className={`${styles['label']}`}>Contraseña</p>
                        <p className={`${styles['value']}`}>********</p>

                        <Link href="/new-password">
                            <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
                                Editar
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
