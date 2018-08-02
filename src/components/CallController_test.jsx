import React from 'react';
import PropTypes from 'prop-types';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

export default class CallController extends React.Component {
  render() {
    return (
      <div className="CallController">
        <button type="button" className="ScreenShareButton" onClick={this.props.screenShareStart}>画面共有</button>
        <button primary="true" type="button" className="CallButton" onClick={this.props.callStart}>通話</button>
        <button type="button" className="VideoCallButton" onClick={this.props.videoCallStart}>ビデオ通話</button>
        <button type="button" className="CallEndButton" onClick={this.props.callStop}>切断</button>
        <p id="mepeer-id" />
      </div>
    );
  }
}
CallController.propTypes = {
  screenShareStart: PropTypes.func,
  callStart: PropTypes.func,
  videoCallStart: PropTypes.func,
  callStop: PropTypes.func,
};
