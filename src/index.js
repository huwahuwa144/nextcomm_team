import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import Root from './components/Root.jsx';
import appReducer from './reducers/Reducer';
import RoomListContainer from './containers/RoomListContainer';

// キャッシュを残す? 本実装まではコメントアウト
// import registerServiceWorker from './registerServiceWorker';

const initialState = {
  roomID: null,
  roomList: [],
};

const store = createStore(appReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <RoomListContainer />
  </Provider>,
  document.getElementById('root'),
);

// ReactDOM.render(<Root />, document.getElementById('root'));

// キャッシュを残す? 本実装まではコメントアウト
// registerServiceWorker();
