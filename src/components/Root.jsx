import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import AppChat from './AppChat.jsx';
import Profile from './profile.jsx';


const Root = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/chat">AppChat</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/chat" component={AppChat} />
      <Route path="/profile" component={Profile} />
    </div>
  </BrowserRouter>
);

export default Root;
