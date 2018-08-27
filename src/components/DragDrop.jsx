import React, { Component } from 'react';
import '../css/Drag.css';

export default class DragDrop extends Component {
    state = {
      tasks: [
        {
          name: 'box', category: 't', padding: 20, height: 100, width: 100, top: 0, left: 0, backgroundColor: 'red', position: 'absolute', zIndex: 1000,
        },
      ],
    };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev) => {
    document.getElementById('target');
    const clickX = ev.pageX;
    const clickY = ev.pageY;
    const clientRect = this.getBoundingClientRect();
    const positionX = clientRect.left + window.pageXOffset;
    const positionY = clientRect.top + window.pageYOffset;
    const x = clickX - positionX;
    const y = clickY - positionY;
    this.setState = {
      top: x,
      left: y,
    };
    return this;
  }

  render() {
    const { top, left } = this.state;
    const tasks = {
      wip: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggble"
          style={{
            backgroundColor: t.bgcolor, height: t.height, width: t.width,
          }}
        >
          {t.name}
        </div>,
      );
    });
    return (
      <div
        id="target"
        onDragOver={e => this.onDragOver(e)}
        onDrop={(e) => { this.onDrop(e); }}
        style={{ top, left }}
      >
        {tasks}
      </div>
    );
  }
}
