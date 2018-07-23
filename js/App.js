import React, {Component} from 'react';
import chatlog from 'Chatlog.js';
import chatBox from 'ChatBox.js';

let room = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      text: '',
      chats: []
    }
  }

  render() {
    return (<div className='App'>
      <div className='App-header'>
        <h2>Chat</h2>
      </div>
      <div className='ChatLog'>
        {
          this.state.chats.map((m, i) => {
            return <ChatLog key={i} chat={m}/>
          })
        }
      </div>
      <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick}/>
    </div>);
  }

  onTextChange(e) {
    if (e.target.name == 'inputChat') {
      this.setState({"text": e.target.value});
    }
  }

  onButtonClick(e) {
    if (e.target.name == 'enterChatRoom') {
      room = peer.joinRoom('testRoom', {mode: 'sfu'});
      this.setState({'chats': 'testRoomに入室しました'})
      room.on('data', (data) => {
        this.setState({
          'chats': 'ID: ' + data.src + '> ' + data.data
        })
      })
    } else if (e.target.name == 'quitChatRoom') {
      room.close();
      this.setState({'chats': 'testRoomから退室しました'})
    } else {
      if (this.state.text == '') {
        alert('何か入力してください')
        return
      }
      let msg = this.state.text
      room.send(msg);
      this.setState({
        "chats": 'Me>' + msg
      })
    }

  }
}


// document.getElementById('enterRoom').onclick = function() {
// room = peer.joinRoom('testRoom', {mode: 'sfu'});
// chatlog('testRoomに入室しました');
// document.getElementById('sendChat').disabled = false;
// document.getElementById('sendChat').onclick = function() {
//   let msg = document.getElementById('enterTextChat').value;
//   room.send(msg);
//   chatlog('Me> ' + msg);
// };
// room.on('data', (data) => {
//   chatlog('ID: ' + data.src + '> ' + data.data);
// });
// };
//
// document.getElementById('quitRoom').onclick = function() {
// room.close();
// document.getElementById('sendChat').disabled = true;
// chatlog('testRoomから退室しました');
// }
//
// let chatlog = function(msg) {
// let li = document.createElement('li');
// li.textContent = msg;
// document.getElementById('chatlog').append(li);
// }

export default App;
