let room = null;

document.getElementById('enterRoom').onclick = function() {
  room = peer.joinRoom('testRoom', {mode: 'sfu'});
  chatlog('testRoomに入室しました');
  document.getElementById('sendChat').disabled = false;
  document.getElementById('sendChat').onclick = function() {
    let msg = document.getElementById('enterTextChat').value;
    room.send(msg);
    chatlog('Me> ' + msg);
  };
  room.on('data', (data) => {
    chatlog('ID: ' + data.src + '> ' + data.data);
  });
};

document.getElementById('quitRoom').onclick = function() {
  room.close();
  document.getElementById('sendChat').disabled = true;
  chatlog('testRoomから退室しました');
}

let chatlog = function(msg) {
  let li = document.createElement('li')
  li.textContent = msg
  document.getElementById('chatlog').append(li);
}

// ReactDOM.render(
//   <h1>HelloWorld</h1>,
//     document.getElementById('chatlog')
// )

//
// let chatList = React.createClass({
//   render: function() {
//     let chats = this.props.chats.map(function(chat, index) {
//       return <li key={index}>{chat}</li>
//     });
//     return (<ul className='chat-list'>{chats}</ul>);
//   }
// });
//
// let ChatApp = React.createClass({
//   getInitialState: function() {
//     return {chats: [], inputValue: ''}
//   },
//   handleSubmit: funtion(e){
//     e.preventDefault();
//     let chat = this.state.inputValue;
//     this.setState({chats: this.state.chats.concat(chat), inputValue: e.target.value});
//   },
//   render: function() {
//     return (<div>
//       <form className="chat-form" onSubmit={this.handleSubmit}>
//         <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
//         <button type='submit' value='send'/>
//       </form>
//     </div>);
//   }
// });
//
//
// ReactDOM.render(<ChatApp/>, document.getElementById('chatlog'));

// let ChatBox = React.Component({
//   render: function() {
//     return (
//       <li className='chatBox'>
//         Hey
//       </li>
//     );
//   }
// });
//
// React.render(
//   <ChatBox />,
//   document.getElementById('chatlog')
// )

// let chatlog = React.createClass({
//   render: function() {
//     return (
//       <p>this.props.msg</p>
//     );
//   }
// })

// let test = React.render(<ChatLog />,document.getElementById('chatlog'));
