import React from "react";

export default class RenderPropsCounterContainer extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    const { renderCounter } = this.props;
    const { count } = this.state;
    return renderCounter({
      count,
      onIncrement: this.handleIncrement,
      onDecrement: this.handleDecrement
    });
  }
}
