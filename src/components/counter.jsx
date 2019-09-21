import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handelIncrement = () => {
    //this.props.value = 0; //error
    this.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClesses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handelIncrement}
          className="badge btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="{btn btn-danger btn-sm m-2}"
        >
          Delete
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
