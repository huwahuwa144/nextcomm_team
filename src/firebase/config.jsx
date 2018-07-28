import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyCjUpPmK7XjM8P1G0DDFBTpW5wQF0o8B3w',
  authDomain: 'tmgchat-231.firebaseapp.com',
  databaseURL: 'https://tmgchat-231.firebaseio.com',
  projectId: 'tmgchat-231',
  storageBucket: 'tmgchat-231.appspot.com',
  messagingSenderId: '6069246383',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebaseApp.firestore();
export const { FieldValue } = firebase.firestore;
