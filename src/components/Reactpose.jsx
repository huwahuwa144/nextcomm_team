import React, { Component } from 'react';

const box = {
  padding: 20,
  height: 100,
  width: 100,
  backgroundColor: 'red',
  cursor: 'move',
  position: 'absolute',
  zIndex: 1000,
};

class Teratail114600 extends Component {
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
  }

  handleDown(e) {
    const item = this.node;
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;
    this.setState({ isDrag: true, x, y });
  }

  handleMove(e) {
    if (this.state.isDrag) {
      e.preventDefault();

      this.setState(prevState => ({
        top: e.pageY - prevState.y,
        left: e.pageX - prevState.x,
      }));
    }
  }

  handleUp() {
    this.setState({ isDrag: false });
  }

  render() {
    const { top, left } = this.state;
    return (
      <div
        role="presentation"
        ref={(node) => { this.node = node; }}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleUp}
        onMouseLeave={this.handleUp}
        style={
        {
          ...box,
          top,
          left,
        }
                          }
      >
                                        テスト
      </div>
    );
  }
}

export default Teratail114600;
