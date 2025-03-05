import React, { Component } from "react";

export default class UnconAdd extends Component {
  constructor(props) {
    super(props);
    this.num1 = React.createRef();
    this.num2 = React.createRef();
  }
  
  SubmitAdd = (event) => {
    event.preventDefault();
    const num1Value = parseInt(this.num1.current.value);
    const num2Value = parseInt(this.num2.current.value);
    let sum=num1Value+num2Value;
    console.log(sum);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.SubmitAdd}>
          <label>Num1:</label>
          <input type="text" ref={this.num1} />
          <label>Num2:</label>
          <input type="text" ref={this.num2} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
