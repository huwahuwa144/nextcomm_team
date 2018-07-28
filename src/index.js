import React from 'react';
import ReactDOM from 'react-dom';

// import firebase from 'firebase';
// import { firebaseConfig } from './firebase/config.jsx';

import './index.css';
import AppChat from './components/AppChat.jsx';
import registerServiceWorker from './registerServiceWorker';

// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseDb = firebaseApp.database();

ReactDOM.render(<AppChat />, document.getElementById('root'));
registerServiceWorker();
