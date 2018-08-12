import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './components/Root.jsx';

// キャッシュを残す? 本実装まではコメントアウト
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

// キャッシュを残す? 本実装まではコメントアウト
// registerServiceWorker();
