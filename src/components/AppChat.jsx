import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { theme } from './configs/mui/config.jsx';

import { firestore, FieldValue } from './configs/firebase/config.jsx';
import { displayNotif } from './methods/Notification.jsx';
import Message from './Messages.jsx';
import ChatBox from './ChatBox.jsx';

// firebaseStoreのchatlogにアクセス
const messagesCol = firestore.collection('chatlog');
// firebaseStoreの監視を終了させるやつ
let unsubscribe;
// 通知の許可
let notifPerm;

class AppChat extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    this.onQuitButtonClick = this.onQuitButtonClick.bind(this);
    this.state = {
      text: '',
      user_name: '',
      profile_image: '',
      messages: [],
      room: null,
    };
  }

  // Mountされた時実行
  componentWillMount() {
    // timestampで並び替えて50件まで表示
    unsubscribe = messagesCol.orderBy('timestamp', 'desc').limit(50).onSnapshot((snapshot) => {
      snapshot.docChanges().reverse().forEach((change) => {
        const msgs = this.state.messages;
        // 追加時
        // 削除等で配列数が変動し、limitに収まる配列が増えたときもadd扱いになるのをどうにかする
        if (change.type === 'added') {
          console.log('added');

          const time = change.doc.data().timestamp;
          // timestampが確定してるもののみ通す
          if (time !== null) {
            const cText = change.doc.data().text;
            const cName = change.doc.data().user_name;
            const cImage = change.doc.data().profile_image;
            const timeText = `${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
            msgs.push({
              id: change.doc.id,
              text: cText,
              user_name: cName,
              profile_image: cImage,
              timestamp: timeText,
            });
            this.setState({
              messages: msgs,
            });
            // 通知
            if (notifPerm === 'granted') {
              displayNotif(cText, cImage, cName);
            }
          }
        } else if (change.type === 'modified') {
          // 変更された時
          console.log('modified');

          const cText = change.doc.data().text;
          const cName = change.doc.data().user_name;
          const cImage = change.doc.data().profile_image;
          const time = change.doc.data().timestamp;
          const timeText = `${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
          msgs.push({
            id: change.doc.id,
            text: cText,
            user_name: cName,
            profile_image: cImage,
            timestamp: timeText,
          });
          this.setState({
            messages: msgs,
          });
          // 通知
          if (notifPerm === 'granted') {
            displayNotif(cText, cImage, cName);
          }
        } else if (change.type === 'removed') {
          // 削除された時
          console.log('removed');

          const target = change.doc.id;
          msgs.some((msg, i) => {
            if (msg.id === target) {
              msgs.splice(i, 1);
            }
            return false;
          });
          this.setState({
            messages: msgs,
          });
        }
      });
    });
    const notif = window.Notification;
    if (!('Notification' in window)) {
      alert('通知に対応していないブラウザです');
    } else if (notif.permission === 'granted') {
      notifPerm = notif.permission;
      // const notification = new window.Notification('Hi there');
    } else if (notif.permission === 'denied' || notif.permission === 'default') {
      notif.requestPermission((permission) => {
        if (permission === 'granted') {
          // const notification = new window.Notification('Hi there');
        }
        notifPerm = notif.permission;
      });
    }
  }

  // 消える時実行
  componentWillUnmount() {
    unsubscribe();
  }

  onTextChange(e) {
    if (e.target.name === 'user_name') {
      this.setState({
        user_name: e.target.value,
      });
    } else if (e.target.name === 'profile_image') {
      this.setState({
        profile_image: e.target.value,
      });
    } else if (e.target.name === 'text') {
      this.setState({
        text: e.target.value,
      });
    }
  }

  onButtonClick() {
    if (this.state.user_name === '') {
      alert('user_name is empty');
    } else if (this.state.text === '') {
      alert('text is empty');
    } else {
      messagesCol.add({
        user_name: this.state.user_name,
        profile_image: this.state.profile_image,
        text: this.state.text,
        timestamp: FieldValue.serverTimestamp(),
      });
    }
  }

  onJoinButtonClick() {
    if (this.state.room === null) {
      this.setState({
        room: 'joined',
      });
    }
  }

  onQuitButtonClick() {
    if (this.state.room !== null) {
      this.setState({
        room: null,
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <h2>Chat</h2>
          </div>
          <List className="MessageList">
            {this.state.messages.map((m) => {
              return (
                <ListItem>
                  <Message key={m.id} message={m} />
                </ListItem>
              );
            })}
          </List>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
          <div className="">
            <Button variant="contained" name="join" color="primary" className="" onClick={this.onJoinButtonClick}>Join</Button>
            <Button variant="contained" name="quit" color="primary" className="" onClick={this.onQuitButtonClick}>Quit</Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppChat;
