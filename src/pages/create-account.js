import React, { useContext, useRef } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
    const { state } = useContext(AppContext);
    if (state.isUserLogged) {
        router.push('/');
    }
    const router = useRouter();
    const createUser = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                Swal.fire('Tu cuenta ha sido creada con éxito');
                setTimeout(() => {
                    state.isUserLogged = true;
                    updateProfile(auth.currentUser, { displayName: data.name });
                }, 1000);
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                // console.log(errorCode);
                if (errorCode == 'auth/email-already-in-use') {
                    Swal.fire('El correo electrónico ya está en uso');
                } else if (errorCode == 'auth/invalid-email') {
                    Swal.fire('El correo electrónico no es válido');
                } else if (errorCode == 'auth/weak-password') {
                    Swal.fire('La contraseña debe tener al menos 6 caracteres');
                } else if (errorCode == 'auth/operation-not-allowed') {
                    Swal.fire('La operación no está permitida');
                } else {
                    Swal.fire('Ha ocurrido un error');
                }
            });
    };
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        // console.log(data);
        if (data.name == '' || data.email == '' || data.password == '') {
            Swal.fire('Debes llenar todos los campos');
        } else {
            createUser(data);
        }
    };

    return (
        <>
            <Head>
                <title>Crear cuenta</title>
            </Head>
            <div className={styles.login}>
                <div className={styles['form-container']}>
                    <h1 className={styles.title}>Nueva cuenta</h1>
                    <form action="#" className={styles.form} ref={form}>
                        <label htmlFor="name" className={styles.label}>
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={`${styles['input-name']} ${styles.input}`}
                        />
                        <label htmlFor="email" className={styles.label}>
                            Direccion de correo
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`${styles['input-email']} ${styles.input}`}
                        />
                        <label htmlFor="password" className={styles.label}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`${styles['input-password']} ${styles.input}`}
                            placeholder="********"
                        />
                        <button
                            onClick={handleSubmit}
                            className={`${styles['primary-button']} ${styles['signup-button']}`}
                            id="signup-button"
                        >
                            Crear cuenta
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
