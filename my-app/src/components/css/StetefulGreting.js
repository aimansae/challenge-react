import React from "react";

class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state
      introduction: "Hello",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState(
      {
        introduction: this.state.introduction === "Hello" ? "Bye Bye" : "Hello",
        buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
      },
      () => {
        console.log("new", this.state.introduction);
        console.log("new", this.state.buttonText);
      }
    ); // later state
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.introduction}</h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
        <button onClick={() => this.increment()}>{this.state.count}</button>
        <p>You have clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default StatefulGreeting;
