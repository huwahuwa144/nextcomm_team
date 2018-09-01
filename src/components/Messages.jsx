import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const styles = {
  header: {
    textAlign: 'left',
  },
};

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_img: this.props.message.profile_image,
      user_name: this.props.message.user_name,
      text: this.props.message.text,
      timestamp: this.props.message.timestamp,
    };
  }

  render() {
    return (
      <div className="Message">
        <Chip
          style={styles.header}
          avatar={<Avatar className="" src={this.state.avatar_img} />}
          label={`${this.state.user_name} ${this.state.timestamp}`}
        />
        <ListItemText primary={this.state.text} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    profile_image: PropTypes.string,
    user_name: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.string,
  }),
};
