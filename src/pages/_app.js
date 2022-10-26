import { useEffect } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';
import 'bootstrap/dist/css/bootstrap.css';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AppContext.Provider value={initialState}>
                <Header />
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
}

export default MyApp;
