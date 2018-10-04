import React, { Component } from "react";
import "./App.css";

import ComponentCounterContainer from "./components/ComponentCounterContainer";
import RenderPropCounterContainer from "./components/RenderPropCounterContainer";
import FancyCounter from "./components/FancyCounter";

/*
 * NOTE: This can't be stored in React state because it would
 * cause an infinite render loop of the ComponentCounterContainer's
 * FancyCounter.
 * 
 * Because of this, the displayed mount count will always be 1 render
 * cycle behind the actual number.
 */
let numberOfComponentMounts = 0;
let numberOfRenderPropMounts = 0;

class App extends Component {
  state = {
    color: "red"
  };

  toggleColor = () => {
    this.setState(state => ({
      color: state.color === "red" ? "green" : "red"
    }));
  };

  handleComponentMount = () => {
    numberOfComponentMounts++;
  };

  handleRenderPropMount = () => {
    numberOfRenderPropMounts++;
  };

  render() {
    return (
      <div className="App">
        <h1>Render Prop Benchmark</h1>
        <p>
          This is a very simple benchmark that shows how many times the counter
          component is mounted for each approach.
        </p>
        <p>Click the button to change the color and trigger a re-render</p>
        <div>
          <button onClick={this.toggleColor}>Change Color</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Component Prop</th>
              <th>Render Prop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Number of mounts</th>
              <td>{numberOfComponentMounts}</td>
              <td>{numberOfRenderPropMounts}</td>
            </tr>
            <tr>
              <th>Rendered</th>
              <td>
                <ComponentCounterContainer
                  Counter={({ count, onIncrement, onDecrement }) => (
                    <FancyCounter
                      count={count}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      color={this.state.color}
                      onMount={this.handleComponentMount}
                    />
                  )}
                />
              </td>
              <td>
                <RenderPropCounterContainer
                  renderCounter={({ count, onIncrement, onDecrement }) => (
                    <FancyCounter
                      count={count}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      color={this.state.color}
                      onMount={this.handleRenderPropMount}
                    />
                  )}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
