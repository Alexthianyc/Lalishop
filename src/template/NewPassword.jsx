import React from 'react';
import Image from "next/image";
import logo_lalishop from '@logos/logo_lalishop.png';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
    return (
        <div className={styles.NewPassword}>
            <div className={`${styles['form-container']}`}>
                <Image src={logo_lalishop} alt="logo" className={`${styles['logo']}`}/>
                <h1 className={`${styles['title']}`}>Crear una nueva contraseña</h1>
                <p className={`${styles['subtitle']}`}>Ingrese una nueva contraseña para su cuenta</p>
                <form action="/" className={`${styles['form-login']}`}>
                    <label for="password" className={`${styles['label']}`}>
                        Ingrese contraseña
                    </label>
                    <input type="password" id="password" placeholder="********" className={`${styles['input-password']} ${styles['input']}`}/>
                    <label for="new-password" className={`${styles['label']}`}>
                        Repite la contraseña
                    </label>
                    <input type="password" id="new-password" placeholder="********" className={`${styles['input']} ${styles['input-password']}`}/>
                    <input type="submit" value="Confirmar" className={`${styles['primary-button']} ${styles['login-button']}`}/>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
