import React, { useRef } from 'react';
import Image from "next/image";
import logo_lalishop from '@logos/logo_lalishop.png';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <div className={styles.login}>
            <div className={`${styles['form-container']}`}>
                <Image src={logo_lalishop} alt="logo" className={`${styles['logo']}`} />
                <form action="/" className={`${styles['form']}`} ref={form}>
                    <label for="email" className={`${styles['label']}`}>
                        Direccion de correo
                    </label>
                    <input type="email" name="email" className={`${styles['input-email']} ${styles.input}`}/>
                    <label for="password" className={`${styles['label']}`}>
                        Contraseña
                    </label>
                    <input type="password" name="password" placeholder="********" className={`${styles['input-password']} ${styles.input}`}/>
                    <input
                        type="submit"
                        value="Iniciar sesion"
                        onClick={handleSubmit}
                        className={`${styles['primary-button']} ${styles['login-main-button']}`}
                    />
                    <a href="/send-email">Olvidé mi contraseña</a>
                </form>
                <button className={`${styles['secondary-button']} ${styles['signup-button']}`} onClick={() => hadleSingUp()}>
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default Login;
