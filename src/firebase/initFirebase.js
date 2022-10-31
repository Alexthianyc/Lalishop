import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getPerformance } from 'firebase/performance';
// import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MASSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.TZNEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!getApps.length) {
    initializeApp(firebaseConfig);
    if (typeof window !== 'undefined') {
        if ('measurementId' in firebaseConfig) {
            getAnalytics();
        }
    }
}

export const auth = getAuth();
export const db = getFirestore();
