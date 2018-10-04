import React from 'react';

export default class FancyCounter extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { count, onIncrement, onDecrement, color } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button style={{ backgroundColor: color }} onClick={onIncrement}>+</button>
        <button style={{ backgroundColor: color }} onClick={onDecrement}>-</button>
      </div>
    );
  }
}
