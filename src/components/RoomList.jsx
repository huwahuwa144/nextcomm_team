import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

export default class RoomList extends React.Component {
  componentDidMount() {
    this.props.getRoomList();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Button variant="contained" color="primary" onClick={this.props.getRoomList}>refresh</Button>
        <ul>
          {this.props.roomList.map((room) => {
            return (
              <li key={room.id}>{room.name}</li>
            );
          })}
        </ul>
      </MuiThemeProvider>
    );
  }
}

RoomList.propTypes = {
  roomList: PropTypes.object,
  getRoomList: PropTypes.func,
};
