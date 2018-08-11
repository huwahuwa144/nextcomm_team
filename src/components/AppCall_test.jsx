import React, { Component } from 'react';
import '../css/AppCall.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { peer } from '../skyway/config.jsx';
import CallBox from './CallBox_test.jsx';
import CallController from './CallController_test.jsx';


class AppCall extends Component {
  static screenShareStart() {

  }

  static videoCallStart() {

  }


  constructor(props) {
    super(props);
    // this.screenShareStart = this.screenShareStart.bind(this);
    this.callStart = this.callStart.bind(this);
    // this.videoCallStart = this.videoCallStart.bind(this);
    this.callStop = this.callStop.bind(this);
    this.state = {
      streamUrl: '',
      streamOthersUrl: '',
      room: null,
    };
  }


  componentWillMount() {
    // シグナリングサーバへ接続
    peer.on('open', () => {
      console.log(peer.id);
    });
    global.navigator.mediaDevices.getUserMedia({ audio: false, video: true })
      .then((streama) => {
        this.setState({ streamUrl: window.URL.createObjectURL(streama) });
        this.setState({ room: peer.joinRoom('tmgchattestservera', { mode: 'sfu', stream: streama }) });
        console.log(this.state.room.getLog());
        console.log(streama);
      }).catch((error) => {
        console.error('mediaDvice.getUserMedia() error:', error);
      });
    // // 接続先のpeerからメディアチャネルの接続を受信したときのイベント
    // peer.on('call', (call) => {
    //   call.answer(this.state.streamUrl);
    //   alert('calling');
    // });
  }

  callStart() {
    peer.listAllPeers((peers) => {
      console.log(peers);
      // => ["yNtQkNyjAojJNGrt", "EzAmgFhCKBQMzKw9"]
    });
    console.log(this.state.room);
    if (this.state.room !== null) {
      console.log('1');
      this.state.room.on('stream', (stream) => {
        console.log(stream);
        // Streamをvideoに設定
        this.setState({
          streamOthersUrl: window.URL.createObjectURL(stream),
        });
      });
    }
  }

  callStop() {
    peer.destroy();
    peer.disconnect();
    console.log('quit');
    if (this.state.room !== null) {
      console.log('quit');
      peer.disconnect();
      this.state.room.close();
    }
  }

  render() {
    return (
      <div>
        <CallBox streamUrl={this.state.streamUrl} streamOthersUrl={this.state.streamOthersUrl} />
        <CallController callStart={this.callStart} callStop={this.callStop} />
      </div>
    );
  }
}

export default AppCall;
