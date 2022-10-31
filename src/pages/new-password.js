import React, { useContext, useEffect, useRef } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import { updatePassword, getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
    const { state } = useContext(AppContext);
    const form = useRef(null);
    const router = useRouter();
    useEffect(() => {
        if (!state.isUserLogged) {
            router.push('/login');
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const changePassword = (usuario, password) => {
        updatePassword(usuario, password)
            .then(() => {
                // console.log('password changed');
                Swal.fire('Tu contraseña ha sido actualizada con éxito');
                state.isUserLogged = false;
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                // console.log(errorCode);
                if (errorCode == 'auth/weak-password') {
                    Swal.fire('La contraseña debe tener al menos 6 caracteres');
                } else if (errorCode == 'auth/requires-recent-login') {
                    Swal.fire('Debes iniciar sesión nuevamente');
                } else {
                    Swal.fire('Ha ocurrido un error');
                }
            });
    };
    const handlePasswordChange = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            password: formData.get('password'),
            passwordC: formData.get('passwordC'),
        };
        // console.log(data);
        if (data.password == data.passwordC) {
            const user = getAuth().currentUser;
            changePassword(user, data.password);
        } else {
            Swal.fire('Las contraseñas no coinciden');
        }
    };

    return (
        <>
            <Head>
                <title>Nueva contrasenia</title>
            </Head>
            <div className={styles.NewPassword}>
                <div className={`${styles['form-container']}`}>
                    <h1 className={`${styles['title']}`}>Crear una nueva contraseña</h1>
                    <p className={`${styles['subtitle']}`}>Ingrese una nueva contraseña para su cuenta</p>
                    <form action="/" className={`${styles['form-login']}`} ref={form}>
                        <label htmlFor="password" className={styles.label}>
                            Ingrese contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            className={`${styles['input-password']} ${styles['input']}`}
                        />
                        <label htmlFor="new-password" className={styles.label}>
                            Repite la contraseña
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            name="passwordC"
                            placeholder="********"
                            className={`${styles['input']} ${styles['input-password']}`}
                        />
                        <button className={`${styles['login-button']}`} onClick={handlePasswordChange}>
                            Confirmar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
