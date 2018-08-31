import React from 'react';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import firebase from 'firebase';
// import Grid from '@material-ui/core/Grid';
import { firebaseApp } from '../firebase/config.jsx';

// const user = firebaseApp.auth().currentUser;
window.alert(firebaseApp.auth().currentUser);
const EnterDecision = () => (
  <div>
    <p>クリック判定テスト</p>
  </div>);

// render(){
//   return(
//
//   );
// }

export default EnterDecision;
