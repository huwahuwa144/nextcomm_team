import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// Chat
import AppChat from './components/AppChat.jsx';
// Profile
// import ProfileAppearance from './components/profile.jsx';

// キャッシュを残す? 本実装まではコメントアウト
// import registerServiceWorker from './registerServiceWorker';

// Chat
ReactDOM.render(<AppChat />, document.getElementById('root'));
// Profile
// ReactDOM.render(<ProfileAppearance />, document.getElementById('root'));

// キャッシュを残す? 本実装まではコメントアウト
// registerServiceWorker();
