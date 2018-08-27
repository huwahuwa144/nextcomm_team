import React, { Component } from 'react';
import '../css/Drag.css';


const box = {
  padding: 20,
  height: 100,
  width: 100,
  backgroundColor: 'red',
  cursor: 'move',
  position: 'absolute',
  zIndex: 1000,
};

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrag: false,
      x: 0,
      y: 0,
      top: 0,
      left: 0,
    };
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleUp = this.handleUp.bind(this);
    return this;
  }

  handleDown = (e) => {
    const item = this.node;
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;
    this.setState({ isDrag: true, x, y });
    e.dataTransfer.setData('id', id);
  }

  handleMove = (e) => {
    if (this.state.isDrag) {
      e.preventDefault();
      this.setState(prevState => ({
        top: e.pageY - prevState.y,
        left: e.pageX - prevState.x,
      }));
    }
  }

  handleUp = (e, cat) => {
    const id = e.dataTransfer.getData('id');
    const tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({ isDrag: false });
  }


  render() {
    const { top, left } = this.state;
    return (
      <div
        role="presentation"
        ref={(node) => { this.node = node; }}
        onDragStart={e => this.handleDown(e)}
        onDragOver={e => this.handleMove(e)}
        onDrop={e => this.handleUp(e)}
        onMouseLeave={e => this.handleUp(e)}
        style={{ box, top, left }}
      >
        テーブル
      </div>
    );
  }
}


export default TestComponent;
