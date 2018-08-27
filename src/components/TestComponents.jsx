import React, { Component } from 'react';
import '../css/Drag.css';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
// box: {
// padding: theme.spacing.unit * 2,
// height: 100,
// width: 100,
// backgroundColor: 'red',
// cursor: 'move',
// position: 'absolute',
// zIndex: 1000,
// },
// });

export default class TestComponents extends Component {
  state = {
    tasks: [
      {
        name: 'le', category: 'wip', bgcolor: 'yellow', height: 100, width: 100, cursor: 'move', position: 'absolute', zIndex: 1000,
      },
      {
        name: 're', category: 'wip', bgcolor: 'pink', height: 100, width: 100, cursor: 'move', position: 'absolute', zIndex: 1000,
      },
      {
        name: 've', category: 'wip', bgcolor: 'skyblue', height: 100, width: 100, cursor: 'move', position: 'absolute', zIndex: 1000,
      },
    ],
  }

  onDragStart = (e, id) => {
    const item = this.node;
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;
    this.setState({ isDrag: true, x, y });
    e.dataTransfer.setData('id', id);
  }

  onDragOver = (e) => {
    if (this.state.isDrag) {
      e.preventDefault();
      this.setState(prevState => ({
        top: e.pageY - prevState.y,
        left: e.pageX - prevState.x,
      }));
    }
  }

  onDrop = (e, cat) => {
    const id = e.dataTransfer.getData('id');
    const tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });
    this.setData({
      ...this.state,
      tasks,
      isDrag: false,
    });
  }

  render() {
    const tasks = {
      wip: [],
    };
    const { top, left } = this.state;
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggble"
          style={{ backgroundColor: t.bgcolor, height: t.height, width: t.width }}
        >
          {t.name}
        </div>,
      );
    });
    return (
      // <div className="container-drag">
      <div
        className="wip"
        role="presentation"
        ref={(node) => { this.node = node; }}
        onDragOver={e => this.onDragOver(e)}
        onDrop={(e) => { this.onDrop(e, 'wip'); }}
        style={{ top, left }}
      >
        {tasks.wip}
      </div>
    );
  }
}
