import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import logo_lalishop from '@logos/logo_lalishop.png';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(form.current);
    //     const data = {
    //         username: formData.get('email'),
    //         password: formData.get('password'),
    //     };
    //     console.log(data);
    // };

    return (
        <>
            <Head>
                <title>Inicio de sesion</title>
            </Head>
            <div className={styles.login}>
                <div className={`${styles['form-container']}`}>
                    <Image src={logo_lalishop} alt="logo" className={`${styles['logo']}`} />
                    <form action="/" className={`${styles['form']}`} ref={form}>
                        <label htmlFor="email" className={`${styles['label']}`}>
                            Direccion de correo
                        </label>
                        <input type="email" id="email" className={`${styles['input-email']} ${styles.input}`} />
                        <label htmlFor="password" className={`${styles['label']}`}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className={`${styles['input-password']} ${styles.input}`}
                        />
                        <Link
                            href="/"
                            // onClick={handleSubmit}
                            className={`${styles['primary-button']} ${styles['login-main-button']}`}
                        >
                            Iniciar sesion
                        </Link>
                        <Link href="/send-email">Olvidé mi contraseña</Link>
                    </form>
                    <Link href="/create-account" className={`${styles['secondary-button']} ${styles['signup-button']}`}>
                        Registrarse
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;
