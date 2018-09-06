import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import '../../css/App.css';
// デフォルトのTabのcss 変更予定
import 'react-tabs/style/react-tabs.css';

import { firestore } from '../configs/firebase/config.jsx';
import AppChat from './AppChat.jsx';

const roomID = 'ByFNks35oPa2UdtxBbOL';
const roomRef = firestore.collection('rooms').doc(roomID);
const tableCol = roomRef.collection('tables');

let unsubscribeTable = null;

export default class ChatBox extends React.Component {
  static handleSelect(index, last) {
    console.log(`tabNum:${index}, Last Tab: ${last}`);
  }

  constructor(props) {
    super(props);
    this.getTableList = this.getTableList.bind(this);
    this.roomID = 'ByFNks35oPa2UdtxBbOL';
    this.roomChatRef = firestore.collection('rooms').doc(this.roomID).collection('chatlog');
    this.tempTblList = [];
    this.tempTblList.push({
      id: this.roomID,
      logRef: this.roomChatRef,
    });
    this.state = {
      tables: this.tempTblList,
    };
  }

  componentWillMount() {
    this.getTableList();
  }

  componentWillUnmount() {
    if (unsubscribeTable !== null) {
      unsubscribeTable();
      unsubscribeTable = null;
    }
  }

  getTableList() {
    unsubscribeTable = tableCol.orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      snapshot.docChanges().reverse().forEach((change) => {
        const tblList = this.state.tables;
        if (change.type === 'added' || change.type === 'modified') {
          console.log('added');
          tblList.push({
            id: change.doc.id,
            name: change.doc.data().tableName,
            logRef: firestore.collection('rooms').doc(this.roomID).collection('tables').doc(change.doc.id),
          });
          this.setState({
            tables: tblList,
          });
        } else if (change.type === 'removed') {
          const target = change.doc.id;
          tblList.some((tbl, i) => {
            if (tbl.id === target) {
              tblList.splice(i, 1);
            }
            return false;
          });
          this.setState({
            tables: tblList,
          });
        }
      });
    });
  }

  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
      >
        <TabList>
          <Tab>ALL</Tab>
          {this.state.tables.map((table) => {
            return (
              <Tab key={table.id}>{table.name}</Tab>
            );
          })}
          <Tab>Custom</Tab>
        </TabList>

        <TabPanel>
          <AppChat />
        </TabPanel>
        {this.state.tables.map((table) => {
          return (
            <TabPanel key={table.id}>
              <div>{table.name}</div>
              <AppChat chatRef={table.logRef} />
            </TabPanel>
          );
        })}
        <TabPanel>
          <AppChat />
        </TabPanel>

      </Tabs>
    );
  }
}
