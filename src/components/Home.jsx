import React from 'react';
import firebase from 'firebase';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/core/Menu';

const Home = () => (
  <header className="header">
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" />
        <Typography type="title" color="inherit">
              うんち
        </Typography>
        <Button color="inherit">sign out</Button>
      </Toolbar>
    </AppBar>
    <button type="button" onClick={() => firebase.auth().signOut()}> sign out</button>
  </header>
);

export default Home;
