import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chip from '@material-ui/core/Chip';

const styles = {
  header: {
    textAlign: 'left',
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default class Message extends React.Component {
  render() {
    return (
      <div className="Message">
        <List>
          <ListSubheader style={styles.header}>
            <Chip
              style={styles.header}
              avatar={<Avatar className="" src={this.props.message.profile_image} />}
              label={this.props.message.user_name}
            />
          </ListSubheader>
          <ListItem>
            <ListItemText primary={this.props.message.text} />
          </ListItem>
        </List>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    profile_image: PropTypes.string,
    user_name: PropTypes.string,
    text: PropTypes.string,
  }),
};
