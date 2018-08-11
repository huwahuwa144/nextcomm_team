import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484A48',
      main: '#484A48',
      dark: '#484A48',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FAAC58',
      main: '#FE9A2E',
      dark: '#FF8000',
      contrastText: '#000',
    },
  },
});

export default class CallController extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="callcontroller">
          <div className="callcontroller-2">
            <Button variant="contained" size="medium" color="secondary" className="screen-share-button" onClick={this.props.screenShareStart}>画面共有</Button>
            <Button variant="contained" size="medium" color="secondary" className="call-button" onClick={this.props.callStart}>通話</Button>
            <Button variant="contained" size="medium" color="secondary" className="video-call-button" onClick={this.props.videoCallStart}>ビデオ通話</Button>
            <Button variant="contained" size="medium" color="secondary" className="call-end-button" onClick={this.props.callStop}>切断</Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
CallController.propTypes = {
  screenShareStart: PropTypes.func,
  callStart: PropTypes.func,
  videoCallStart: PropTypes.func,
  callStop: PropTypes.func,
};
