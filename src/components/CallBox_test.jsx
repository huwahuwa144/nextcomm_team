import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

export default class CallBox extends React.Component {
  render() {
    return (
      <div>
        <div className="videoCallBox">
          <div className="videoCallContainer">
            <div className="videoCallContainer2">
              <video src={this.props.streamUrl} className="screenSharingCanvasMe" autoPlay><track kind="captions" /></video>
              <video src={this.props.streamUrl} className="screenSharingCanvasYou" autoPlay><track kind="captions" /></video>
            </div>
          </div>
        </div>
        <GridList className="">
          <GridListTile key="1">
            <img src="./images/apple.jpg" alt="apple" />
          </GridListTile>
          <GridListTile key="2">
            <img src="./images/apple.jpg" alt="apple" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}


CallBox.propTypes = {
  streamUrl: PropTypes.string,
};
