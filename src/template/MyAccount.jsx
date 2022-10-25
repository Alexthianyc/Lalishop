import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
    return (
        <div className={styles.MyAccount}>
            <div className={`${styles['form-container']}`}>
                <h1 className={`${styles['title']}`}>Mi cuenta</h1>

                <form action="#" className={`${styles['form']}`}>
                    <label for="name" className={`${styles['label']}`}>
                        Nombre
                    </label>
                    <p className={`${styles['value']}`}>Cristian</p>

                    <label for="email" className={`${styles['label']}`}>
                        Direccion de correo
                    </label>
                    <p className={`${styles['value']}`}>correo@edu.com.sv</p>

                    <label for="password" className={`${styles['label']}`}>
                        Contraseña
                    </label>
                    <p className={`${styles['value']}`}>********</p>

                    <input type="submit" value="Editar" className={`${styles['secondary-button']} ${styles['signup-button']}`}/>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;
