import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class InputField extends React.Component {
  render() {
    return (
      <div className="ChatBox">
        <div className="">
          <TextField name="user_name" onChange={this.props.onTextChange} className="" placeholder="Name" />
          <br />
          <TextField name="profile_image" onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
        </div>
        <TextField rows="4" multiline name="text" className="" onChange={this.props.onTextChange} />
        <Button variant="contained" color="primary" className="" onClick={this.props.onButtonClick}>Send</Button>
      </div>
    );
  }
}

InputField.propTypes = {
  onTextChange: PropTypes.func,
  onButtonClick: PropTypes.func,
};
