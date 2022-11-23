import React, { useRef, useContext } from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import Head from 'next/head';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const { state } = useContext(AppContext);
    const router = useRouter();
    const form = useRef(null);
    if (state.isUserLogged) {
        router.push('/');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        if (data.email == '' || data.password == '') {
            Swal.fire('Debes ingresar tus credenciales');
        } else {
            login(data);
        }
    };
    const handleReset = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        if (data.email == '') {
            Swal.fire('Debes ingresar tu correo electrónico');
        } else {
            resetPassword(data.email);
        }
    };
    const login = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                state.isUserLogged = true;
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/wrong-password') {
                    Swal.fire('La contraseña es incorrecta');
                } else if (errorCode == 'auth/user-not-found') {
                    Swal.fire('El usuario no existe');
                } else {
                    Swal.fire('Ha ocurrido un error');
                    // console.log(errorCode);
                }
            });
    };
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log('Email sent');
                router.push('/send-email');
            })
            .catch((error) => {
                const errorCode = error.code;
                // console.log(errorCode);
                if (errorCode == 'auth/user-not-found') {
                    Swal.fire('El usuario no existe');
                } else if (errorCode == 'auth/invalid-email') {
                    Swal.fire('El correo electrónico no es válido');
                } else if (errorCode == 'auth/operation-not-allowed') {
                    Swal.fire('La operación no está permitida');
                } else if (errorCode == 'auth/too-many-requests') {
                    Swal.fire('Demasiados intentos');
                } else if (errorCode == 'auth/internal-error') {
                    Swal.fire('Error interno');
                } else {
                    Swal.fire('Ha ocurrido un error');
                }
            });
    };

    return (
        <>
            <Head>
                <title>Inicio de sesion</title>
            </Head>
            <div className={styles.login}>
                <div className={`${styles['form-container']}`}>
                    <form action="/" className={`${styles['form']}`} ref={form}>
                        <label htmlFor="email" className={`${styles['label']}`}>
                            Correo electrónico
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className={`${styles['input-email']} ${styles.input}`}
                        />
                        <label htmlFor="password" className={`${styles['label']}`}>
                            Contraseña
                        </label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="********"
                            className={`${styles['input-password']} ${styles.input}`}
                        />
                        <button
                            className={`${styles['primary-button']} ${styles['login-main-button']}`}
                            onClick={handleSubmit}
                            id="login-button"
                        >
                            Iniciar sesion
                        </button>
                        <button onClick={handleReset} className={styles['email-button']} id="recovery">
                            Olvidé mi contraseña
                        </button>
                    </form>
                    <Link href="/create-account">
                        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>
                            Registrarse
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Login;
