import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import logo_lalishop from '@logos/logo_lalishop.png';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
    return (
        <>
            <Head>
                <title>Nueva contrasenia</title>
            </Head>
            <div className={styles.NewPassword}>
                <div className={`${styles['form-container']}`}>
                    <Image src={logo_lalishop} alt="logo" className={`${styles['logo']}`} />
                    <h1 className={`${styles['title']}`}>Crear una nueva contraseña</h1>
                    <p className={`${styles['subtitle']}`}>Ingrese una nueva contraseña para su cuenta</p>
                    <form action="/" className={`${styles['form-login']}`}>
                        <label htmlFor="password" className={`${styles['label']}`}>
                            Ingrese contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className={`${styles['input-password']} ${styles['input']}`}
                        />
                        <label htmlFor="new-password" className={`${styles['label']}`}>
                            Repite la contraseña
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            placeholder="********"
                            className={`${styles['input']} ${styles['input-password']}`}
                        />
                        <Link href="/my-account" className={`${styles['primary-button']} ${styles['login-button']}`}>
                            Confirmar
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
