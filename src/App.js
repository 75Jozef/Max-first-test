import React, { Component, useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput.jsx";
import UserOutput from "./UserOutput/UserOutput.jsx";

class App extends Component {
  state = { name: "75Jozef" };

  change = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput zmena={this.change} actual={this.state.name} />
        <UserOutput name={this.state.name}> My name is: </UserOutput>
      </div>
    );
  }
}

export default App;
