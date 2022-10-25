import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
    return (
        <div className={styles.login}>
            <div className={styles['form-container']}>
                <h1 className={styles['title']}>Mi cuenta</h1>
                <form action="#" className={styles['form']}>
                    <label for="name" className={styles['label']}>
                        Nombre
                    </label>
                    <input type="text" id="name" className={`${styles['input-name']} ${styles.input}`}/>
                    <label for="email" className={styles['label']}>
                        Direccion de correo
                    </label>
                    <input type="email" id="email" className={`${styles['input-email']} ${styles.input}`}/>
                    <label for="password" className={styles['label']}>
                        Contraseña
                    </label>
                    <input type="password" id="password" className={`${styles['input-password']} ${styles.input}`} value="********"/>
                    <input type="submit" value="Crear cuenta" className={`${styles['primary-button']} ${styles['signup-button']}`}/>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
