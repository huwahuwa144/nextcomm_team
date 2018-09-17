import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import posed from 'react-pose';
import { firestore } from './configs/firebase/config';
import { theme } from './configs/mui/config';
import '../css/Drag.css';

const props1 = {
  draggable: true,
};
const Box = posed.div(props1);

export default class Room extends React.Component {
  constructor() {
    super();
    this.onTextChange = this.onTextChange.bind(this);
    this.createTable = this.createTable.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      createTableName: '',
      anchorEl: null,
      selectedTableID: '',
      selectedValue: '',
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

  handleClickOpen(event, id) {
    this.setState({
      anchorEl: event.currentTarget,
      selectedTableID: id,
    });
  }

  handleClose(value = '') {
    this.setState({
      selectedValue: value,
      anchorEl: null,
    }, () => {
      if (this.state.selectedTableID !== '' && (this.state.selectedValue === 'text' || this.state.selectedValue === 'voice')) {
        console.log(`${this.state.selectedTableID} and ${this.state.selectedValue}`);
      }
    });
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
              <div key={table.tableID}>
                <Box className="box" onClick={e => this.handleClickOpen(e, table.tableID)} />
                <li onClick={e => this.handleClickOpen(e, table.tableID)} role="presentation">{table.name}</li>
              </div>
            );
          })}
        </ul>

        {/* Dialogバージョン stateのanchorElをopenのtrue or falseにして関数をそれに合わせればこれにできる */}
        <Dialog
          title="Dialog"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">選択</DialogTitle>
          <div>
            <List>
              <ListItem button onClick={() => this.handleClose('text')} key="text">
                <ListItemText primary="テキストチャット" />
              </ListItem>
              <ListItem button onClick={() => this.handleClose('voice')} key="voice">
                <ListItemText primary="ボイスチャット" />
              </ListItem>
            </List>
          </div>
        </Dialog>

        {/* Popoverバージョン */}
        <Menu
          id="table-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key="text" onClick={() => this.handleClose('text')}>テキストチャット</MenuItem>
          <MenuItem key="voice" onClick={() => this.handleClose('voice')}>ボイスチャット</MenuItem>
        </Menu>
      </MuiThemeProvider>
    );
  }
}

Room.propTypes = {
  roomID: PropTypes.string,
  tableList: PropTypes.array,
  getTables: PropTypes.func,
};
