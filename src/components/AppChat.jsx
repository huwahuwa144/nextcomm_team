import React, { Component } from 'react';
import '../css/App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Message from './Messages.jsx';
import ChatBox from './ChatBox.jsx';

class AppChat extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      text: '',
      user_name: '',
      profile_image: '',
      messages: [],
    };
  }

  // componentWillMount() {
  //   let msgs = this.state.messages;
  //   msgs.push({
  //     'text':
  //   })
  // }

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
      const msgs = [];
      msgs.push({
        text: this.state.text,
        user_name: this.state.user_name,
        profile_image: this.state.profile_image,
      });
      this.setState({
        messages: msgs,
      });
    }
  }

  render() {
    return (
      <div>
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
        </div>
      </div>
    );
  }
}

export default AppChat;
