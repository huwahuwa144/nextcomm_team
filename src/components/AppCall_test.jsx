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

  static callStop() {
  }


  constructor(props) {
    super(props);
    // this.screenShareStart = this.screenShareStart.bind(this);
    this.callStart = this.callStart.bind(this);
    // this.videoCallStart = this.videoCallStart.bind(this);
    // this.callStop = this.callStop.bind(this);
    this.state = {
      streamUrl: '',
    };
  }

  componentWillMount() {
    // Get peer id from server
    peer.on('open', () => {
      console.log(peer.id);
    });
  }

  callStart() {
    global.navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then((stream) => {
        this.setState({ streamUrl: window.URL.createObjectURL(stream) });
        console.log(stream);
      });
  }

  render() {
    return (
      <div>
        <CallBox streamUrl={this.state.streamUrl} />
        <CallController callStart={this.callStart} />
      </div>
    );
  }
}

export default AppCall;
