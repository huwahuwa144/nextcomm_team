import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { firestore } from './configs/firebase/config';
import { theme } from './configs/mui/config';

export default class Room extends React.Component {
  constructor() {
    super();
    this.onTextChange = this.onTextChange.bind(this);
    this.createTable = this.createTable.bind(this);
    this.state = {
      createTableName: '',
    };
  }

  componentWillMount() {
    this.props.getTables(this.props.roomID);
  }

  onTextChange(e) {
    if (e.target.name === 'createTableName') {
      this.setState({
        createTableName: e.target.value,
      });
    }
  }

  createTable() {
    if (this.state.createTableName !== '') {
      firestore.collection('rooms').doc(this.props.roomID).collection('tables').add({
        name: this.state.createTableName,
      })
        .then(() => {
          this.props.getTables(this.props.roomID);
          this.setState({
            createTableName: '',
          });
          document.getElementById('createTableName').value = '';
        })
        .catch((error) => {
          alert(`エラーが発生した為、テーブルを作成できませんでした。詳細:${error}`);
        });
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TextField id="createTableName" name="createTableName" onChange={this.onTextChange} className="" placeholder="Create Table Name" />
        <Button variant="contained" color="primary" onClick={this.createTable}>Create</Button>
        <ul>
          {this.props.tableList.map((table) => {
            return (
              <li key={table.id}>{table.name}</li>
            );
          })}
        </ul>
      </MuiThemeProvider>
    );
  }
}

Room.propTypes = {
  roomID: PropTypes.string,
  tableList: PropTypes.object,
  getTables: PropTypes.func,
};
