import React, { Component } from 'react';
import '../css/Drag.css';

// BOXのスタイル
export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      {
        name: 'たつや', category: 'complete', bgcolor: 'yellow', height: 100, width: 100, position: 'absolute', left: 'this.state.x', top: 'this.state.y', cursor: 'move', zIndex: 1000,
      },
      // {
        // name: 'しょーん', category: 'wip', bgcolor: 'pink', height: 100, width: 100, position: 'absolute', left: 'this.state.x', top: 'this.state.y', cursor: 'move', zIndex: 1000,
      // },
      // {
        // name: 'さだる', category: 'wip', bgcolor: 'skyblue', height: 100, width: 100, position: 'absolute', left: 'this.state.x', top: 'this.state.y', cursor: 'move', zIndex: 1000,
      // },
    ],
  }

  // ドラッグが始まったときの処理
  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  // ドラッグが終わった処理
  onDrop = (ev, cat) => {
    const tasks = this.state.tasks.filter((task) => {
      if (task.name === 'たつや') {
        alert('たつやは東京にそまった');
        return task;
      }
      // if (task.name === id) {
      // task.category = cat;
      // }
      // return task;
    });
    this.setState({
      ...this.state,
      tasks,
    });
  }

  render() {
    // 大枠の処理
    const tasks = {
      wip: [],
      complete: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggble"
          style={{
            backgroundColor: t.bgcolor, height: t.height, width: t.width, category: t.category,
          }}
        >
          {t.name}
        </div>,
      );
    });
    return (
      <div className="container-drag">
        <h2 className="header">Drag and Drop</h2>
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, 'wip'); }}
        >
          <span className="task-header">大阪</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, 'complete'); }}
        >
          <span className="task-header">東京(エムティーアイ)</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}
