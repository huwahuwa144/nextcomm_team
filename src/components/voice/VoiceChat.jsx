import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { peer } from '../configs/skyway/config.jsx';

class VoiceChat extends Component {
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
      streamOthersUrl: '',
      room: null,
    };
  }


  componentWillMount() {
    global.navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((streama) => {
        this.setState({ room: peer.joinRoom('tmgchattestserver1234', { mode: 'sfu', stream: streama }) });
        // ルームに新しいPeerが参加したときに自分のstreamを更新する
        this.state.room.on('peerJoin', () => {
          console.log('peerJoin');
          this.state.room.replaceStream(streama);
        });
        console.log(this.state.room.getLog());
        console.log(streama);
      })
      .then(() => {
        this.state.room.on('stream', (stream) => {
          console.log(stream);
          // Streamをvideoに設定
          this.setState({
            streamOthersUrl: window.URL.createObjectURL(stream),
          });
        });
      })
      .catch((error) => {
        console.error('mediaDvice.getUserMedia() error:', error);
      });
    // シグナリングサーバへ接続
    peer.on('open', () => {
      console.log(peer.id);
    });
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
      <div className="call">
        <audio src={this.state.streamOthersUrl} className="video-others" autoPlay><track kind="captions" /></audio>
      </div>
    );
  }
}

export default VoiceChat;
