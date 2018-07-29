import React, { Component } from 'react';
import '../css/App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Peer from 'skyway-js';
import CallBox from './CallBox.jsx';
import CallController from './CallController.jsx';

export const peer = new Peer({
  key: 'a1fa70b9-71b0-4650-bc84-91c49eaf2521',
  debug: 3,
});


class AppCall extends Component {
  // constructor(props) {
  //   super(props);
  // this.screenShareStart = this.screenShareStart.bind(this);
  // this.videoCallStart = this.videoCallStart.bind(this);
  // this.callStop = this.callStop.bind(this);
  // this.callStart = this.callStart.bind(this);
  // const APIKEY = 'a1fa70b9-71b0-4650-bc84-91c49eaf2521';
  // }

  // videoCallStart(){
  // }

  componentWillMount() {
    alert('実行');
    // Get peer id from server
    peer.on('open', () => {
      alert(peer.id);
    });
  }

  render() {
    return (
      <div>
        <CallBox />
        <CallController />
      </div>
    );
  }
}

export default AppCall;
