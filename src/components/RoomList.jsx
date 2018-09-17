import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { firestore } from './configs/firebase/config';
import { theme } from './configs/mui/config';

export default class RoomList extends React.Component {
  constructor() {
    super();
    this.sendID = this.sendID.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      createRoomName: '',
    };
  }

  componentWillMount() {
    this.props.getRoomList();
  }

  componentDidMount() {
  }

  onTextChange(e) {
    if (e.target.name === 'createRoomName') {
      this.setState({
        createRoomName: e.target.value,
      });
    }
  }

  // 選択したルームIDをReducerに投げる
  sendID(id) {
    this.props.selectedRoomID(id);
  }

  // ルーム作成
  createRoom() {
    if (this.state.createRoomName !== '') {
      firestore.collection('rooms').add({
        name: this.state.createRoomName,
      }).then(() => {
        this.props.getRoomList();
        this.setState({
          createRoomName: '',
        });
        document.getElementById('createRoomName').value = '';
      }).catch((error) => {
        alert(`エラーが発生した為ルームを作成できませんでした。詳細:${error}`);
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={this.props.getRoomList}>Refresh</Button>
        <TextField id="createRoomName" name="createRoomName" onChange={this.onTextChange} className="" placeholder="Create Room Name" />
        <Button variant="contained" color="primary" onClick={this.createRoom}>Create</Button>
        <List>
          {this.props.roomList.map((room) => {
            return (
              <Link key={room.roomID} to="/room" onClick={() => this.sendID(room.roomID)}>
                <ListItem button>
                  <ListItemText primary={room.name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </MuiThemeProvider>
    );
  }
}

RoomList.propTypes = {
  roomList: PropTypes.array,
  getRoomList: PropTypes.func,
  selectedRoomID: PropTypes.func,
};
