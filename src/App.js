import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    current: "",
    total: 0,
    operator: ""
  };

  calculate = () => {
    const total = parseInt(this.state.total);
    const current = parseInt(this.state.current);
    const { operator } = this.state;
    switch (operator) {
      case "-":
        return total - current;
      case "+":
        return total + current;
      case "*":
        return total * current;
      case "/":
        return total / current;
      default:
        return 0;
    }
  };

  getAction = e => {
    const operator = e.target.name;
    const { current } = this.state;
    this.setState({
      total: current,
      current: "",
      operator: operator
    });
  };

  getAnswer = () => {
    this.setState({
      total: this.calculate()
    });
  };
  getNumber = e => {
    const { current } = this.state;
    this.setState({
      current: current + e.target.name
    });
  };

  clear = () => {
    this.setState({
      total: "",
      current: "",
      operator: ""
    });
  };

  render() {
    const { total, current } = this.state;
    return (
      <div className="Calculator text-center">
        <h2>Simple Calculator</h2>
        <div className="row">
          <button className="numButtons" name="1" onClick={this.getNumber}>
            1
          </button>
          <button className="numButtons" name="2" onClick={this.getNumber}>
            2
          </button>
          <button className="numButtons" name="3" onClick={this.getNumber}>
            3
          </button>
          <button className="numButtons" name="4" onClick={this.getNumber}>
            4
          </button>
        </div>
        <div className="row">
          <button className="numButtons" name="5" onClick={this.getNumber}>
            5
          </button>
          <button className="numButtons" name="6" onClick={this.getNumber}>
            6
          </button>
          <button className="numButtons" name="7" onClick={this.getNumber}>
            7
          </button>
          <button className="numButtons" name="8" onClick={this.getNumber}>
            8
          </button>
        </div>
        <div className="row">
          <button className="numButtons" name="9" onClick={this.getNumber}>
            9
          </button>
          <button className="numButtons" name="0" onClick={this.getNumber}>
            0
          </button>
          <button className="numButtons" onClick={this.clear}>
            cancel
          </button>
          <button className="numButtons" onClick={this.getAnswer}>
            =
          </button>
        </div>
        <br />
        <div className="row">
          <button className="symbButton" name="+" onClick={this.getAction}>
            +
          </button>
          <button className="symbButton" name="-" onClick={this.getAction}>
            -
          </button>
          <button className="symbButton" name="*" onClick={this.getAction}>
            *
          </button>
          <button className="symbButton" name="/" onClick={this.getAction}>
            /
          </button>
        </div>
        <br />
        <h2>Count: {current}</h2>
        <h2>Answer: {total} </h2>
      </div>
    );
  }
}

export default App;
