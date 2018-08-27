import React from 'react';
import posed from 'react-pose';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Box = posed.div(props);

export default class Demo extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  return (
    <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'} />
  );
}
