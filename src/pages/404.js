import React from 'react';
import Link from 'next/link';
import styles from '@styles/notFound.module.scss';

const Custom404 = () => {
    return (
        <section className={styles.notFound}>
            <div className={`${styles['container']}`}>
                <div className="row">
                    <div className="p-0">
                        <div className="text-center">
                            <div className={`${styles['four_zero_four_bg']}`}>
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className={`${styles['contant_box_404']}`}>
                                <h3 className="h2">Parece que estás perdido</h3>
                                <p>La pagina que buscas no esta disponible!</p>
                                <Link href="/">
                                    <p className={`${styles['link_404']}`}>Regresar al inicio</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Custom404;
