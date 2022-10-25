import React from 'react';
import Image from "next/image";
import styles from '@styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
    return (
        <div className={styles.PasswordRecovery}>
            <div className={`${styles['PasswordRecovery-container']}`}>
                <Image src="./logos/logo_yard_sale.svg" alt="logo" className={`${styles['logo']}`}/>
                <h1 className={`${styles['title']}`}>Password recovery</h1>
                <p className={`${styles['subtitle']}`}>Inform the email address used to create your account</p>
                <form action="/" className={`${styles['form']}`}>
                    <label htmlFor="email" className={`${styles['label']}`}>
                        Email address
                    </label>
                    <input type="text" id="email" className={`${styles['input-email']} ${styles['input']}`}/>
                    <input type="submit" value="Confirm" className={`${styles['primary-button']} ${styles['login-button']}`}/>
                </form>
            </div>
        </div>
    );
};

export default PasswordRecovery;
