import React from 'react';
import Link from 'next/link';
import styles from '@styles/CreateAccount.module.scss';
import Head from 'next/head';

const CreateAccount = () => {
    return (
        <>
            <Head>
                <title>Crear cuenta</title>
            </Head>
            <div className={styles.login}>
                <div className={styles['form-container']}>
                    <h1 className={styles.title}>Mi cuenta</h1>
                    <form action="#" className={styles.form}>
                        <label htmlFor="name" className={styles.label}>
                            Nombre
                        </label>
                        <input type="text" id="name" className={`${styles['input-name']} ${styles.input}`} />
                        <label htmlFor="email" className={styles.label}>
                            Direccion de correo
                        </label>
                        <input type="email" id="email" className={`${styles['input-email']} ${styles.input}`} />
                        <label htmlFor="password" className={styles.label}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`${styles['input-password']} ${styles.input}`}
                            value="********"
                        />
                        <Link href="/login">
                            <button className={`${styles['primary-button']} ${styles['signup-button']}`}>
                                Crear cuenta
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
