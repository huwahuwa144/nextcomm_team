import {
  connect,
} from 'react-redux';

import App from '../components/App';
import Actions from '../actions/AppActions';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser(value) {
      dispatch(Actions.setUser(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
