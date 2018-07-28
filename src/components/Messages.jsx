import React from 'react';
import PropTypes from 'prop-types';
// import Avatar from 'material-ui/Avatar';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem';
// import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Message extends React.Component {
  render() {
    return (
      <div className="Message">
        <div>
          <div disabled="true">
            <img className="" alt="" src={this.props.message.profile_image} />
            <span style={{ marginBottom: -5 }}>@{this.props.message.user_name}</span>
            <div className="">
              <div style={styles.chip}>
                {this.props.message.text}
              </div>
            </div>
          </div>
        </div>
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
