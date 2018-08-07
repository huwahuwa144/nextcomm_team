import React from 'react';
import ReactDOM from 'react-dom';

// import firebase from 'firebase';
// import { firebaseConfig } from './firebase/config.jsx';

import './index.css';
// import AppChat from './components/AppChat.jsx';
import AppCall from './components/AppCall_test.jsx';
import registerServiceWorker from './registerServiceWorker';

// export const firebaseDb = firebaseApp.database();
// export const firebaseApp = firebase.initializeApp(firebaseConfig);

// ReactDOM.render(<AppChat />, document.getElementById('root'));
ReactDOM.render(<AppCall />, document.getElementById('call-box'));
registerServiceWorker();
