import firebase from 'firebase';
import firebaseConfig from './key.jsx';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const { FieldValue } = firebase.firestore;
