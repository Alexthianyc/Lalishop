import React from 'react';
import styles from '@styles/notFound.module.scss';

const NotFound = () => {
    return (
        <section className={styles.notFound}>
            <div className={`${styles['container']}`}>
                <div className={`${styles['row']}`}>
                    <div className={`${styles['col-sm-12']}`}>
                        <div className={`${styles['col-sm-10']} ${styles['col-sm-offset-1']} ${styles['text-center']}`}>
                            <div className={`${styles['four_zero_four_bg']}`}>
                                <h1 className={`${styles['text-center']}`}>404</h1>
                            </div>
                            <div className={`${styles['contant_box_404']}`}>
                                <h3 className={`${styles['h2']}`}>Parece que estás perdido</h3>
                                <p>La pagina que buscas no esta disponible!</p>
                                <a href="/" className={`${styles['link_404']}`}>
                                    Regresar al inicio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
