import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClesses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handelIncrement}
          className="badge btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClesses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
