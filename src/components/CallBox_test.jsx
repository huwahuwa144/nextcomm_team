import React from 'react';
import PropTypes from 'prop-types';
import { videoTagString, VideoTag } from 'react-video-tag'

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

export default class CallBox extends React.Component {
  render() {
    return (
      <div>
        <div className="video-call-box">
          <div className="video-call-container">
            <div className="video-call-container2">
              <span className="video-border">
                <VideoTag src={this.props.streamUrl} className="video-me" autoPlay muted><track kind="captions" /></VideoTag>
              </span>
              <span className="video-border">
                <video muted src={this.props.streamOthersUrl} className="video-others" autoPlay><track kind="captions" /></video>
              </span>
            </div>
          </div>
        </div>
        <div className="root-grid">
          <div className="video-grid-center">
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" autoPlay muted><track kind="captions" /></video>
            </span>
            <span className="video-grid">
              <VideoTag src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></VideoTag>
            </span>
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></video>
            </span>
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></video>
            </span>
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></video>
            </span>
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></video>
            </span>
            <span className="video-grid">
              <video src={this.props.streamUrl} className="video-others-min" muted autoPlay><track kind="captions" /></video>
            </span>
          </div>
        </div>
      </div>
    );
  }
}


CallBox.propTypes = {
  streamUrl: PropTypes.string,
  streamOthersUrl: PropTypes.string,
};
