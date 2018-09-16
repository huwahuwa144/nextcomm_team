import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './components/Root.jsx';
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);


/*
**Reduxを使用しないバージョン
 */
// キャッシュを残す? 本実装まではコメントアウト
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <Root />, document.getElementById('root'));

// キャッシュを残す? 本実装まではコメントアウト
// registerServiceWorker();
