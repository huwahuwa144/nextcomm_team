import React from 'react';
import firebase from 'firebase';
// import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../css/Home.css';
import posed from 'react-pose';
import logo from '../images/tty.jpg';
import '../css/Drag.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#EFF1F3',
      main: '#484A48',
      dark: '#484A48',
      contrastText: '#fff',
      1: '#424242',
      2: '#D84315',
      3: '#E0F7FA',
      contrastDefaultColor: 'light',
    },
    secondary: {
      light: '#ff7961',
      main: '#D84315',
      dark: '#ba000d',
      contrastText: '#000',
      1: '#e91e63',
      2: '#f8bbd0',
      3: '#880e4f',
    },
  },
});

const props = {
  draggable: true,
};

const Box = posed.div(props);

const Home = () => (
  <MuiThemeProvider theme={theme}>
    <div className="felxgrow" style={{ backgroundColor: '#D84315' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" style={{ color: '#FAFAFA' }}>
                ルーム名
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="テーブル1" />
              <Avatar alt="aaaaaa" src={logo} />
              <Avatar alt="bbbbbb" src={logo} />
              <Avatar alt="cccccc" src={logo} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText primary="テーブル2" />
              <Avatar alt="aaaaaa" src={logo} />
              <Avatar alt="bbbbbb" src={logo} />
              <Avatar alt="cccccc" src={logo} />
            </ListItem>
          </List>
          <div className="felxgrow" />
          <div className="menubutton">
            <Button color="inherit" onClick={() => firebase.auth().signOut()}>Signout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    <Box className="box" />
  </MuiThemeProvider>
);

export default Home;
