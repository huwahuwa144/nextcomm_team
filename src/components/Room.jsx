import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import blue from '@material-ui/core/colors/blue';
import '../css/Home.css';
import posed from 'react-pose';
import logo from '../images/default_icon.png';
import '../css/Drag.css';
import { firestore } from './configs/firebase/config.jsx';
import ChatBox from './chat/ChatBox.jsx';
import VoiceChat from './voice/VoiceChat.jsx';

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

const props1 = {
  draggable: true,
};
const roomID = 'ByFNks35oPa2UdtxBbOL';
const roomRef = firestore.collection('rooms').doc(roomID);
const tableID = '6o7r01Es6WfeZmnKWmks';
const nitaku = ['通話しますか？', 'チャットしますか？'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};
const Box = posed.div(props1);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log(user.uid);
    console.log(roomRef.collection('tables').doc(tableID).id);
    // 以下書き込み(member)
    roomRef.set({
      member: user.uid,
    });
    // 以下データ消去(member)
    // roomRef.update({
    //   member: firebase.firestore.FieldValue.delete(),
    // });

    roomRef.collection('tables').doc(tableID).set({
      member: user.uid,
    });
  }
});

export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.roomId = 'ByFNks35oPa2UdtxBbOL';
    this.state = { open: false, selectedValue: nitaku[1] };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this._callStart = this._callStart.bind(this);
  }

  handleClickOpen() {
    this.setState(() => ({ open: true }));
  }

  handleClose() {
    this.setState(value => ({ selectedValue: value }));
    this.setState(() => ({ open: false }));
  }

  handleListItemClick(value) {
    if (value === '通話しますか？') {
      console.log(value);
      this._callStart();
    }
  }

  _callStart() {
    this.refs.child.callStart();
  }

  handleClose2() {
    this.props.onClose(this.props.selectedValue);
  }


  render() {
    const {
      classes,
      onClose,
      selectedValue,
      ...other
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="felxgrow" style={{ backgroundColor: '#D84315' }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.handleClickOpen} />
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
        <Box className="box" onClick={this.handleClickOpen} />
        <Dialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          {...other}
        >
          <DialogTitle id="simple-dialog-title">えらんでね♡</DialogTitle>
          <div>
            <List>
              {nitaku.map(nita => (
                <ListItem button onClick={() => this.handleListItemClick(nita)} key={nita}>
                  <ListItemAvatar>
                    <Avatar className={styles.avatar}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={nita} />
                </ListItem>
              ))}
              <ListItem button onClick={() => this.handleListItemClick('add')}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
              </ListItem>
            </List>
          </div>
        </Dialog>
        <Button color="inherit" onClick={this.handleClickOpen}>こんにちは</Button>
        <div className="target" id="target">
          <Box className="box" />
          <p className="user">
              unknown
          </p>
        </div>
        <div>
          <ChatBox chatID={this.roomId} />
        </div>
        <div>
          <VoiceChat ref="child"/>
        </div>
      </MuiThemeProvider>
    );
  }
}

Room.propTypes = {
  classes: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};
