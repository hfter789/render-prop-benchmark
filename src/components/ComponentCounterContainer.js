import React from "react";

export default class ComponentCounterContainer extends React.Component {
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
    const { Counter } = this.props;
    const { count } = this.state;
    return (
      <Counter
        count={count}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}
