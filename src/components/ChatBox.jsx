import React from 'react';
import PropTypes from 'prop-types';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <div className="ChatBox">
          <div className="">
            <input type="text" name="user_name" onChange={this.props.onTextChange} className="" placeholder="Name" />
            <br />
            <input type="text" name="profile_image" onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
          </div>
          <input type="text" rows="4" multiLine="true" name="text" className="" onChange={this.props.onTextChange} />
          <button type="button" primary="true" className="" onClick={this.props.onButtonClick}>Send</button>
        </div>
      </div>
    );
  }
}

ChatBox.propTypes = {
  onTextChange: PropTypes.func,
  onButtonClick: PropTypes.func,
};
