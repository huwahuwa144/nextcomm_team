import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import '../../css/App.css';
// デフォルトのTabのcss 変更予定
import 'react-tabs/style/react-tabs.css';

import { firestore } from '../configs/firebase/config.jsx';
import AppChat from './AppChat.jsx';

export default class ChatBox extends React.Component {
  static handleSelect(index, last) {
    console.log(`tabNum:${index}, Last Tab: ${last}`);
  }

  constructor(props) {
    super(props);
    this.getTableList = this.getTableList.bind(this);
    this.roomID = 'ByFNks35oPa2UdtxBbOL';
    this.roomRef = firestore.collection('rooms').doc(this.roomID);
    this.roomChatRef = this.roomRef.collection('chatlog');
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
  }

  async getTableList() {
    console.log('getTable');
    const tbl = await this.roomRef.collection('tables').get();
    const tblId = tbl.docs[0].id;
    const tempRef = await this.roomRef.collection('tables').doc(tblId).collection('chatlog');
    const temp = [];
    temp.push({
      id: tblId,
      logRef: tempRef,
    });
    this.setState(prevState => ({
      tables: prevState.tables.concat(temp),
    }));
  }

  render() {
    return (
      <Tabs onSelect={this.handleSelect}>
        <TabList>
          {this.state.tables.map((table, i) => {
            if (i === 0) {
              return (
                <Tab>ALL</Tab>
              );
            }
            return (
              <Tab key={table.id}>{table.id}</Tab>
            );
          })}
        </TabList>

        {this.state.tables.map((table, i) => {
          if (i === 0) {
            return (
              <TabPanel key={table.id}>
                <div>ALL</div>
                <AppChat chatRef={table.logRef} />
              </TabPanel>
            );
          }
          return (
            <TabPanel key={table.id}>
              <div>{table.id}</div>
              <AppChat chatRef={table.logRef} />
            </TabPanel>
          );
        })}

      </Tabs>
    );
  }
}
