import React from 'react';
import firebase from 'firebase';

const Home = () => (
  <div>
    Home
    <button type="button" onClick={() => firebase.auth().signOut()}> sign out</button>
  </div>
);

export default Home;
