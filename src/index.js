import React from 'react';
import ReactDOM from 'react-dom';

// import firebase from 'firebase';
// import { firebaseConfig } from './firebase/config.jsx';

import './index.css';
// import AppChat from './components/AppChat.jsx';
// import Peer from 'skyway-js';
// import LoginForm from './components/LoginForm.jsx';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

// const peer = new Peer({key: 'your-api-key'});
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseDb = firebaseApp.database();

// ReactDOM.render(<LoginForm />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
