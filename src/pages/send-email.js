import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import email from '@icons/email.svg';
import logo_lalishop from '@logos/logo_lalishop.png';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
    return (
        <>
            <Head>
                <title>Email enviado</title>
            </Head>
            <div className={styles.SendEmail}>
                <div className={`${styles['form-container']}`}>
                    <Image src={logo_lalishop} alt="logo" className={`${styles['logo']}`} />
                    <h1 className={`${styles['title']}`}>El correo ha sido enviado</h1>
                    <p className={`${styles['email-subtitle']} ${styles['subtitle']}`}>
                        Por favor, compruebe su buzón de correo electrónico para obtener instrucciones sobre cómo
                        restablecer su contraseña
                    </p>
                    <div className={`${styles['email-image']}`}>
                        <Image src={email} alt="email" />
                    </div>
                    <Link href="/login" className={`${styles['primary-button']} ${styles['login-button']}`}>
                        Iniciar sesion
                    </Link>
                    <p className={`${styles['resend']}`}>
                        <span>No recibiste el correo electrónico</span>
                        <Link href="/"> Reenviar</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SendEmail;
