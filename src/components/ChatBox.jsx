import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class ChatBox extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            <TextField name="user_name" onChange={this.props.onTextChange} className="" placeholder="Name" />
            <br />
            <TextField name="profile_image" onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
          </div>
          <TextField rows="4" multiLine="true" name="text" className="" onChange={this.props.onTextChange} />
          <Button variant="contained" color="primary" className="" onClick={this.props.onButtonClick}>Send</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

ChatBox.propTypes = {
  onTextChange: PropTypes.func,
  onButtonClick: PropTypes.func,
};
