import { initializeApp } from 'firebase/app';
import {
  browserSessionPersistence,
  connectAuthEmulator, getAuth, setPersistence,
} from 'firebase/auth';
import { collection, connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { COLLECTION_NAMES } from './constants';

const isDevelopment = process.env.NODE_ENV === 'development';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const collections = {
  surveys: collection(db, COLLECTION_NAMES.SURVEYS),
  users: collection(db, COLLECTION_NAMES.USERS),
};

// Keep users logged in until they explicitly sign out
setPersistence(auth, browserSessionPersistence);

if (isDevelopment) {
  const FIRESTORE_EMULATOR_PORT = 8080;
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', FIRESTORE_EMULATOR_PORT);
}
