import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// Login
// import App from './components/App.jsx';
// Chat
// import AppChat from './components/AppChat.jsx';
// Profile
// import ProfileAppearance from './components/profile.jsx';
// VideoCall
import AppCall from './components/AppCall_test.jsx';

// キャッシュを残す? 本実装まではコメントアウト
// import registerServiceWorker from './registerServiceWorker';

// Login
// ReactDOM.render(<App />, document.getElementById('root'));

// Chat
// ReactDOM.render(<AppChat />, document.getElementById('root'));

// Profile
// ReactDOM.render(<ProfileAppearance />, document.getElementById('root'));

// VideoCall
ReactDOM.render(<AppCall />, document.getElementById('root'));

// キャッシュを残す? 本実装まではコメントアウト
// registerServiceWorker();
