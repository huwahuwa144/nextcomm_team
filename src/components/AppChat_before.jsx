import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { firestore, FieldValue } from '../firebase/config.jsx';
import { peer } from '../skyway/config.jsx';
import Message from './Messages.jsx';
import ChatBox from './ChatBox.jsx';

// firebaseStoreのchatlogにアクセス
const messagesCol = firestore.collection('chatlog');
// firebaseStoreの監視を終了させるやつ
const unsubscribe = messagesCol.onSnapshot(() => {});

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
    messagesCol.orderBy('timestamp').limit(50).onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const msgs = this.state.messages;
        // 追加時
        if (change.type === 'added') {
          msgs.push({
            text: change.doc.data().text,
            user_name: change.doc.data().user_name,
            profile_image: change.doc.data().profile_image,
          });
          const temp = msgs;
          this.setState({
            messages: temp,
          });
        }
        if (change.type === 'modified') {
          // 変更された時
        }
        if (change.type === 'removed') {
          // 削除された時
        }
      });
    });

    peer.on('open', () => {
      console.log(peer.id);
    });
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
        room: peer.joinRoom('tmg_chat_example', {
          mode: 'sfu',
        }),
      });
    }
  }

  onQuitButtonClick() {
    if (this.state.room !== null) {
      console.log('quit');
      peer.disconnect();
      this.setState({
        room: null,
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Chat</h2>
          </div>
          <div className="MessageList">
            {this.state.messages.map((m) => {
              return <Message key={m.id} message={m} />;
            })}
          </div>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
          <div className="">
            <RaisedButton name="join" primary="true" label="Join" className="" onClick={this.onJoinButtonClick} />
            <RaisedButton name="quit" primary="true" label="Quit" className="" onClick={this.onQuitButtonClick} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppChat;
